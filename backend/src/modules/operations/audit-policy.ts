/** Initial source-example operations; extend only with their authorized feature. */
export const auditPolicies = {
  publish: {
    targetType: "article",
    fields: ["status", "publishedAt"],
    summary: "Content publication operation",
  },
  "role-change": {
    targetType: "staffUser",
    fields: ["roles", "accessVersion"],
    summary: "Staff permission operation",
  },
  "stage-change": {
    targetType: "opportunity",
    fields: ["stage"],
    summary: "Opportunity stage operation",
  },
  "staff-bootstrap": {
    targetType: "staffUser",
    fields: ["provider", "providerSubject", "roles", "status", "activatedAt"],
    summary: "Initial staff bootstrap operation",
  },
  "staff-provision": {
    targetType: "staffUser",
    fields: ["provider", "providerSubject", "roles", "status", "provisionedBy"],
    summary: "Staff provisioning operation",
  },
  "staff-status": {
    targetType: "staffUser",
    fields: [
      "status",
      "accessVersion",
      "activatedAt",
      "deactivatedAt",
      "deactivatedBy",
    ],
    summary: "Staff access status operation",
  },
  "staff-revoke": {
    targetType: "staffUser",
    fields: ["accessVersion"],
    summary: "Staff session revocation operation",
  },
} as const;
export const auditActions = [
  "publish",
  "role-change",
  "stage-change",
  "staff-bootstrap",
  "staff-provision",
  "staff-status",
  "staff-revoke",
] as const;
