import { Schema, type Connection } from "mongoose";
import pluginImport, {
  type PassportLocalMongooseDocument,
  type PassportLocalMongooseModel,
  type PassportLocalMongooseOptions,
} from "passport-local-mongoose";
const schema = new Schema<PassportLocalMongooseDocument>(
  {},
  {
    collection: "authCredentials",
    strict: "throw",
    versionKey: false,
    autoCreate: false,
    autoIndex: false,
    bufferCommands: false,
  },
);
const plugin = (typeof pluginImport === "function"
  ? pluginImport
  : (pluginImport as unknown as { default: typeof pluginImport })
      .default) as unknown as (
  schema: Schema<PassportLocalMongooseDocument>,
  options?: PassportLocalMongooseOptions,
) => void;
if (typeof plugin !== "function")
  throw new Error("Invalid credential adapter import");
schema.plugin(plugin, {
  usernameField: "email",
  usernameLowerCase: true,
  iterations: 600000,
  saltlen: 32,
  keylen: 32,
  digestAlgorithm: "sha256",
});
/** Credentials are library-owned; StaffUser is the separate business-access authority. */
export function authCredentialModel(
  connection: Connection,
): PassportLocalMongooseModel<PassportLocalMongooseDocument> {
  return (
    (connection.models.AuthCredential as
      PassportLocalMongooseModel<PassportLocalMongooseDocument> | undefined) ??
    connection.model<
      PassportLocalMongooseDocument,
      PassportLocalMongooseModel<PassportLocalMongooseDocument>
    >("AuthCredential", schema)
  );
}
