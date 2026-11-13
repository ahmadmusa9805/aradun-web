import { lifecycleControlModel } from "../../modules/identity/models/lifecycle-control.model.js";
import {
  identityFactorModel,
  identityChallengeModel,
  identityRecoveryPackModel,
  identitySecurityEventModel,
} from "../../modules/identity/models/security-state.model.js";
import { staffUserModel } from "../../modules/identity/models/staff-user.model.js";
import { staffSessionModel } from "../../modules/identity/models/staff-session.model.js";
import { authCredentialModel } from "../../modules/identity/models/auth-credential.model.js";
import { rateLimitBucketModel } from "../../modules/operations/models/rate-limit-bucket.model.js";
import type { Connection } from "mongoose";
import { auditEventModel } from "../../modules/operations/models/audit-event.js";
import { inquiryModel } from "../../modules/intake/models/inquiry.model.js";
import { outboxEventModel } from "../../modules/notifications/models/outbox-event.model.js";

/** Operational tools only: register implemented models without opening a connection. */
export function registeredModels(connection: Connection) {
  return [
    { name: "AuditEvent", model: auditEventModel(connection) },
    { name: "Inquiry", model: inquiryModel(connection) },
    { name: "OutboxEvent", model: outboxEventModel(connection) },
    { name: "RateLimitBucket", model: rateLimitBucketModel(connection) },
    { name: "StaffUser", model: staffUserModel(connection) },
    { name: "StaffSession", model: staffSessionModel(connection) },
    { name: "AuthCredential", model: authCredentialModel(connection) },
    { name: "IdentityFactor", model: identityFactorModel(connection) },
    { name: "IdentityChallenge", model: identityChallengeModel(connection) },
    {
      name: "IdentityRecoveryPack",
      model: identityRecoveryPackModel(connection),
    },
    {
      name: "IdentitySecurityEvent",
      model: identitySecurityEventModel(connection),
    },
    {
      name: "IdentityLifecycleControl",
      model: lifecycleControlModel(connection),
    },
  ] as const;
}
