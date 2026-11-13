import express from "express";
import passport from "passport";
import localMongoose, {
  type PassportLocalMongooseDocument,
  type PassportLocalMongooseModel,
} from "passport-local-mongoose";
import session, { type SessionData } from "express-session";
import {
  Schema,
  Types,
  type Connection,
  type Model,
  type InferSchemaType,
} from "mongoose";
import { generateSecret, generate, verify } from "otplib";
import * as Iron from "@hapi/iron";
import { randomBytes } from "node:crypto";
import { sessionProof } from "./session-proof.js";
import { assertOwnedNotificationFixture } from "../../src/modules/notifications/server/local-test-guard.server.js";
const credentialSchema = new Schema<PassportLocalMongooseDocument>(
  {},
  {
    collection: "proofCredentials",
    strict: "throw",
    autoCreate: false,
    autoIndex: false,
    bufferCommands: false,
  },
);
const plugin =
  typeof localMongoose === "function"
    ? localMongoose
    : (localMongoose as unknown as { default: typeof localMongoose }).default;
credentialSchema.plugin(plugin, {
  usernameField: "email",
  usernameLowerCase: true,
  iterations: 600000,
  saltlen: 32,
  keylen: 32,
  digestAlgorithm: "sha256",
});
const factorSchema = new Schema(
  {
    subjectId: { type: Schema.Types.ObjectId, required: true },
    sealed: { type: String, required: true },
    enabled: { type: Boolean, default: false },
    lastStep: { type: Number, default: -1 },
    attempts: { type: Number, default: 0 },
  },
  {
    collection: "proofFactors",
    strict: "throw",
    autoCreate: false,
    autoIndex: false,
    bufferCommands: false,
  },
);
factorSchema.index({ subjectId: 1 }, { unique: true });
type Data = SessionData & { proof?: { tokenHash: string; revision: number } };
/** Isolated component integration, not an application identity/recovery model. */
export async function credentialMfaProof(connection: Connection) {
  await assertOwnedNotificationFixture(connection, "development");
  let stamp = Date.now();
  const now = () => new Date(stamp),
    epoch = () => Math.floor(stamp / 1000);
  const transport = await sessionProof(connection, now);
  const credentials =
    (connection.models.ProofCredential as
      PassportLocalMongooseModel<PassportLocalMongooseDocument> | undefined) ??
    connection.model<
      PassportLocalMongooseDocument,
      PassportLocalMongooseModel<PassportLocalMongooseDocument>
    >("ProofCredential", credentialSchema);
  const factors =
    (connection.models.ProofFactor as
      Model<InferSchemaType<typeof factorSchema>> | undefined) ??
    connection.model<InferSchemaType<typeof factorSchema>>(
      "ProofFactor",
      factorSchema,
    );
  await credentials.createCollection();
  await credentials.createIndexes();
  await factors.createCollection();
  await factors.createIndexes();
  const sealingKey = randomBytes(48).toString("base64url");
  async function provision(email: string, password: string) {
    if (
      !/^sample-[a-z0-9]+@example\.invalid$/.test(email) ||
      !password.startsWith("SAMPLE-")
    )
      throw new Error("SAMPLE-only proof");
    return credentials.register({ email }, password);
  }
  async function pendingFactor(id: Types.ObjectId) {
    const secret = generateSecret();
    await factors.create({
      subjectId: id,
      sealed: await Iron.seal({ secret }, sealingKey, Iron.defaults),
    });
    return {
      code: () => generate({ secret, epoch: epoch() }),
      expiredCode: () => generate({ secret, epoch: epoch() - 120 }),
      secret,
    };
  }
  async function factor(id: Types.ObjectId, token: string, enroll = false) {
    if (!/^\d{6}$/.test(token)) return false;
    const row = await factors.findOneAndUpdate(
      { subjectId: id, enabled: !enroll, attempts: { $lt: 5 } },
      { $inc: { attempts: 1 } },
      { returnDocument: "after", maxTimeMS: 2000 },
    );
    if (!row) return false;
    try {
      const opened = (await Iron.unseal(
        row.sealed,
        sealingKey,
        Iron.defaults,
      )) as { secret: string };
      const result = await verify({
        secret: opened.secret,
        token,
        epoch: epoch(),
        epochTolerance: 0,
        ...(row.lastStep >= 0 ? { afterTimeStep: row.lastStep } : {}),
      });
      const step =
        result.valid && "timeStep" in result ? result.timeStep : undefined;
      if (typeof step !== "number") return false;
      return (
        (
          await factors.updateOne(
            {
              _id: row._id,
              enabled: !enroll,
              lastStep: { $lt: step },
            },
            { $set: { lastStep: step, enabled: true, attempts: 0 } },
            { maxTimeMS: 2000 },
          )
        ).modifiedCount === 1
      );
    } catch {
      return false;
    }
  }
  const auth = new passport.Passport();
  auth.use(credentials.createStrategy());
  const app = express();
  app.use((request, response, next) => {
    response.setHeader("Cache-Control", "no-store");
    if (
      request.method !== "GET" &&
      request.get("Origin") !== "http://127.0.0.1:3997"
    ) {
      response.sendStatus(403);
      return;
    }
    next();
  });
  app.use(express.json({ limit: "2kb" }));
  app.use(
    session({
      secret: transport.secret,
      name: "sample-credential-proof",
      store: transport.store,
      resave: false,
      saveUninitialized: false,
      rolling: false,
      cookie: {
        httpOnly: true,
        sameSite: "lax",
        secure: false,
        maxAge: 28800000,
      },
    }),
  );
  app.use(auth.initialize());
  const deny = (response: express.Response) =>
    response.status(401).json({ error: "SAMPLE authentication failed" });
  app.post("/login", (request, response, next) => {
    if (
      typeof request.body?.email !== "string" ||
      typeof request.body?.password !== "string" ||
      request.body.password.length > 128
    ) {
      deny(response);
      return;
    }
    auth.authenticate(
      "local",
      { session: false },
      (error: unknown, user: PassportLocalMongooseDocument | false) => {
        if (error) {
          next(new Error("SAMPLE unavailable"));
          return;
        }
        if (!user) {
          deny(response);
          return;
        }
        const at = now();
        request.session.regenerate((error) => {
          if (error) {
            next(error);
            return;
          }
          void transport.store
            .issue(request.sessionID, "primary", {
              staffUserId: new Types.ObjectId(String(user._id)),
              authenticatedAt: at,
              expiresAt: new Date(at.getTime() + 28800000),
            })
            .then((meta) => {
              (request.session as Data).proof = meta;
              request.session.save((error) =>
                error ? next(error) : response.sendStatus(204),
              );
            })
            .catch(next);
        });
      },
    )(request, response, next);
  });
  for (const path of ["/enroll", "/mfa"]) {
    app.post(path, (request, response, next) => {
      void (async () => {
        const current = await transport.read(request.sessionID);
        if (
          !current ||
          now().getTime() - current.authenticatedAt.getTime() >= 300000 ||
          Object.keys(request.body ?? {}).some((key) => key !== "token") ||
          typeof request.body?.token !== "string"
        ) {
          deny(response);
          return;
        }
        if (
          !(await factor(
            current.staffUserId,
            request.body.token,
            path === "/enroll",
          ))
        ) {
          deny(response);
          return;
        }
        if (path === "/enroll") {
          response.sendStatus(204);
          return;
        }
        request.session.regenerate((error) => {
          if (error) {
            next(error);
            return;
          }
          void transport.store
            .issue(request.sessionID, "mfa", {
              staffUserId: current.staffUserId,
              authenticatedAt: current.authenticatedAt,
              expiresAt: current.expiresAt,
            })
            .then((meta) => {
              (request.session as Data).proof = meta;
              request.session.save((error) =>
                error ? next(error) : response.sendStatus(204),
              );
            })
            .catch(next);
        });
      })().catch(next);
    });
  }
  app.get("/protected", (request, response, next) => {
    void transport
      .read(request.sessionID)
      .then((row) =>
        row?.assurance === "mfa" ? response.sendStatus(204) : deny(response),
      )
      .catch(next);
  });
  app.use(((
    error: unknown,
    _request: express.Request,
    response: express.Response,
    _next: express.NextFunction,
  ) => {
    void error;
    void _next;
    response.status(503).json({ error: "SAMPLE unavailable" });
  }) satisfies express.ErrorRequestHandler);
  return {
    app,
    transport,
    credentials,
    factors,
    provision,
    pendingFactor,
    factor,
    now,
    advance: (ms: number) => {
      stamp += ms;
    },
    sealingKey,
  };
}
