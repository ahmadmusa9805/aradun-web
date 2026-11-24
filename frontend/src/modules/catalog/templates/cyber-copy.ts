/** CAT-06 marketing scope, not security testing authorization or certification. */
export const cyberMeta =
  "Explore authorized application and cloud security reviews, hardening, account protection, awareness training and readiness work. Discuss a clearly scoped security engagement.";
export const cyberCopy: Record<
  string,
  {
    summary: string;
    need: string;
    work: string[];
    references: string[];
    detail: string;
    inputs: string[];
    boundary: string;
  }
> = {
  "SVC-035": {
    summary:
      "Understand selected website or application security concerns through an authorized, clearly scoped review and practical findings.",
    need: "Review a website or application for selected weaknesses",
    work: [
      "Scope & asset review",
      "Configuration checks",
      "Dependency reviews",
      "Authentication review",
      "Access-control review",
      "Input-handling review",
      "Scoped source review",
      "Finding prioritization",
      "Remediation guidance",
    ],
    references: [
      "OWASP ASVS",
      "OWASP testing guidance",
      "Scope-appropriate tools",
    ],
    detail:
      "A baseline assessment examines agreed controls and potential weaknesses within named application boundaries. The methodology, access and depth are defined before testing. Findings should distinguish confirmed issues, items needing validation and areas that could not be assessed. A limited assessment is not equivalent to a comprehensive penetration test.",
    inputs: [
      "Named application targets and written owner authorization",
      "Relevant architecture, test accounts and safe access arrangements",
      "Permitted methods, timing, exclusions and a responsible contact",
    ],
    boundary:
      "The price does not imply comprehensive manual penetration testing, discovery of every weakness or guaranteed security. Remediation and retesting are included only where agreed.",
  },
  "SVC-036": {
    summary:
      "Discuss an authorized assessment or penetration-testing engagement with defined targets, methods, qualified delivery and reporting boundaries.",
    need: "Arrange a formal, authorized assessment or penetration test",
    work: [
      "Rules of engagement",
      "Web/API assessment",
      "Scoped network review",
      "Test-account planning",
      "Vulnerability validation",
      "Controlled impact review",
      "Finding documentation",
      "Remediation priorities",
      "Agreed retesting",
    ],
    references: [
      "OWASP WSTG",
      "Relevant assessment methodology",
      "Scope-appropriate tools",
    ],
    detail:
      "The engagement starts with authorization, delivery capability and rules of engagement. Testing depth, targets and any controlled validation activities must be explicitly approved. Specialized network or mobile testing is assessed for suitability; it is not silently included in every application engagement.",
    inputs: [
      "System ownership and written testing permission",
      "Target inventory, third-party permissions and explicit exclusions",
      "Approved methods, contact/escalation rules and testing windows",
    ],
    boundary:
      "Custom scope and qualified delivery are confirmed before work. No testing begins from a website inquiry alone, and there is no permission for unrestricted access, disruption or data collection. Findings are time- and scope-bound.",
  },
  "SVC-037": {
    summary:
      "Review selected cloud settings and access controls to understand practical gaps and prioritize the next security improvements.",
    need: "Review cloud access and security configuration",
    work: [
      "Cloud asset review",
      "IAM review",
      "Storage permissions",
      "Network-control review",
      "Logging configuration",
      "Account-access review",
      "Selected-control checks",
      "Risk prioritization",
      "Remediation planning",
    ],
    references: [
      "Relevant cloud guidance",
      "CIS references",
      "Cloud configuration tools",
    ],
    detail:
      "Define the accounts, resources and controls to be reviewed, then assess the available configuration evidence. A review should explain both findings and limits of visibility. Implementation, recovery testing and broader penetration testing remain separate activities unless explicitly included.",
    inputs: [
      "Your cloud accounts/resources and authorized review scope",
      "Appropriately limited access and existing architecture notes",
      "Relevant policies, concerns and permitted evidence handling",
    ],
    boundary:
      "A selected-control review is not a complete cloud audit or a guarantee of compliance or protection. No provider account is selected or changed simply by requesting an assessment.",
  },
  "SVC-038": {
    summary:
      "Strengthen agreed system settings through reviewed configuration changes, with clear approvals and verification of the affected behaviour.",
    need: "Improve selected insecure configurations",
    work: [
      "Configuration review",
      "Server hardening",
      "Application settings",
      "Access restrictions",
      "Update planning",
      "Network-rule review",
      "Approved control changes",
      "Change verification",
      "Handover records",
    ],
    references: [
      "CIS guidance where applicable",
      "Vendor guidance",
      "Existing system tooling",
    ],
    detail:
      "Agree what needs to change, the operational impact and how the change will be verified. Hardening can address selected server or application settings; it should not introduce uncontrolled disruption or replace a broader assessment. Applicable guidance is chosen for the actual technology and scope.",
    inputs: [
      "The systems, findings or settings you want addressed",
      "Authorized access, approvals and operational constraints",
      "Backup/change arrangements and a suitable verification plan",
    ],
    boundary:
      "The proposal defines the changes, supported systems and verification. No universal hardened state, zero risk or uninterrupted operation is guaranteed; unrelated remediation is not automatically included.",
  },
  "SVC-039": {
    summary:
      "Improve selected business-account and email-domain controls with clear decisions about access, authentication and ownership.",
    need: "Improve business account, permission or email-domain controls",
    work: [
      "Identity-setting reviews",
      "MFA configuration review",
      "User-access reviews",
      "Permission planning",
      "Account-recovery review",
      "SPF review",
      "DKIM configuration review",
      "DMARC planning",
      "Access documentation",
    ],
    references: ["Microsoft 365", "Google Workspace", "DNS & identity tools"],
    detail:
      "Separate user identity controls from email-domain authentication, then agree the systems and tasks to address. MFA, recovery, permissions and DNS changes need suitable access and an impact-aware rollout. Existing providers and supported capabilities are checked before configuration work is agreed.",
    inputs: [
      "Your identity/email providers and domains",
      "Administrative ownership and authorized access arrangements",
      "Known account issues, current DNS records and recovery responsibilities",
    ],
    boundary:
      "The price is not a complete identity programme or a guarantee against spoofing, phishing or account compromise. Domain and access changes require explicit approvals and verification.",
  },
  "SVC-040": {
    summary:
      "Help your team recognize everyday security risks and follow clearer practices for accounts, information and suspicious requests.",
    need: "Give staff practical security-awareness guidance",
    work: [
      "Audience-needs review",
      "Phishing awareness",
      "Password practices",
      "MFA awareness",
      "Safe data handling",
      "Suspicious-request checks",
      "Reporting guidance",
      "Approved training examples",
      "Follow-up materials",
    ],
    references: [
      "Agreed training materials",
      "NIST guidance",
      "Approved examples",
    ],
    detail:
      "Tailor the material to the audience and the decisions they encounter at work. Practical examples can support understanding, while reporting routes make it easier to raise concerns. Live phishing simulations, credential collection and employee testing are not assumed parts of awareness training.",
    inputs: [
      "Audience roles, language needs and current concerns",
      "Your policies and incident-reporting contact",
      "The agreed training format, topics and review requirements",
    ],
    boundary:
      "Duration, participant scope, materials and any follow-up are defined in the proposal. Training is not certification or a guarantee that people will never make mistakes.",
  },
  "SVC-041": {
    summary:
      "Understand gaps, organize evidence and plan improvements for an agreed security framework or assessment requirement.",
    need: "Prepare for a security-framework or evidence review",
    work: [
      "Framework-scope review",
      "Gap assessment",
      "Policy review",
      "Control mapping",
      "Evidence planning",
      "Responsibility mapping",
      "Remediation roadmap",
      "Readiness discussion",
      "Assessment preparation",
    ],
    references: [
      "NIST CSF",
      "Applicable framework criteria",
      "Evidence inventories",
    ],
    detail:
      "Start with the actual requirement, organization boundaries and intended assessment. Readiness work helps map controls, identify gaps and organize evidence. Any ISO 27001, SOC 2 or other framework-specific work needs an explicit scope and suitable expertise rather than a generic compliance promise.",
    inputs: [
      "The actual framework/customer requirement and assessment scope",
      "Existing policies, control records and evidence",
      "Responsible owners, intended reviewer and known gaps",
    ],
    boundary:
      "Readiness is not legal advice, formal certification, attestation or an independent audit result. Those decisions belong to the appropriate qualified parties; a custom quote does not promise certification.",
  },
  "SVC-042": {
    summary:
      "Keep agreed security checks and follow-up organized through scheduled reviews, defined maintenance tasks and clear reporting.",
    need: "Arrange regular, limited security reviews and upkeep",
    work: [
      "Scheduled security reviews",
      "Configuration checks",
      "Update reviews",
      "Selected-log reviews",
      "Finding follow-up",
      "Access-change reviews",
      "Scoped troubleshooting",
      "Security reporting",
      "Coverage reassessment",
    ],
    references: [
      "Your existing environment",
      "Agreed review tools",
      "Operating records",
    ],
    detail:
      "Define covered systems, review frequency, reporting and issue ownership before recurring work begins. The service can support scheduled security monitoring and maintenance within agreed limits. Continuous staffed monitoring, a security operations centre and emergency incident response are separate capabilities, not implied by the service name.",
    inputs: [
      "Systems, current controls and the work you need covered",
      "Known findings, review history and suitable access",
      "Coverage expectations, escalation contacts and change priorities",
    ],
    boundary:
      "Monthly prices do not imply 24/7 SOC/MDR, immediate incident response, unlimited remediation or continuous protection. Coverage and response arrangements must be agreed explicitly.",
  },
};
export const cyberProcess = [
  ["Authorize", "Confirm owners, permission and suitable delivery capability."],
  [
    "Define scope",
    "Agree targets, methods, timing, access and excluded activities.",
  ],
  [
    "Review or implement",
    "Complete only the approved assessment, change or training work.",
  ],
  [
    "Report & verify",
    "Record findings, completed work, limitations and agreed verification.",
  ],
  [
    "Plan next steps",
    "Prioritize remediation, retesting or optional recurring support.",
  ],
] as const;
export const cyberDeliverables = [
  [
    "Scope record",
    "A clear statement of reviewed systems, agreed methods and exclusions.",
  ],
  [
    "Findings & priorities",
    "Relevant observations, distinguishing validated issues from items needing further review.",
  ],
  [
    "Corrective actions",
    "Practical next steps and ownership suggestions appropriate to the engagement.",
  ],
  [
    "Change or check records",
    "Evidence of agreed implementation or verification where included.",
  ],
  [
    "Limits & remaining risks",
    "A readable account of what was not assessed or remains unresolved.",
  ],
  [
    "Handover & follow-up",
    "A discussion or remediation plan, with retesting separately identified where needed.",
  ],
] as const;
export const cyberResponsibilities = [
  [
    "Written authorization",
    "Named targets, responsible owners and any third-party permissions are agreed before testing. An inquiry is not authorization to access a system.",
  ],
  [
    "Scope & operating impact",
    "Define permitted methods, testing windows, exclusions, contacts and stop conditions. More intrusive work needs explicit agreement.",
  ],
  [
    "Evidence & confidentiality",
    "Agree access, storage, sharing and retention for sensitive evidence. Do not send credentials or private system data through the public inquiry form.",
  ],
  [
    "Qualified delivery",
    "The engagement depends on suitable capability and the agreed systems. Framework references are not certifications, accreditations or partner claims.",
  ],
  [
    "Coverage & limitations",
    "Assessments are time- and scope-bound. Retesting, remediation and recurring coverage are separate unless expressly included.",
  ],
] as const;
export const cyberFaqs = [
  [
    "Does an assessment guarantee that my systems are secure?",
    "No. An assessment reports findings within an agreed scope at a particular time. It cannot establish that no weaknesses exist or guarantee future protection.",
  ],
  [
    "How is a baseline assessment different from penetration testing?",
    "A baseline review checks selected controls or potential weaknesses. Penetration testing requires a separately defined methodology, authorized targets and qualified delivery, and may include approved validation of impact. They are not interchangeable scopes.",
  ],
  [
    "Can identified issues be fixed?",
    "Remediation can be discussed under Security Hardening or another explicitly agreed implementation scope. An assessment price does not automatically include fixing every finding or later retesting.",
  ],
  [
    "Does Compliance Readiness include certification?",
    "No. It supports gap review, evidence preparation and improvement planning. Formal audit, attestation or certification decisions are made by the appropriate independent qualified parties.",
  ],
  [
    "Does Managed Security Services mean 24/7 monitoring?",
    "Not automatically. Review frequency, coverage, reporting and response responsibilities are defined in the agreement. The listed entry price is not a promise of a staffed security operations centre or immediate incident response.",
  ],
  [
    "What do I need before security testing can begin?",
    "A target inventory, confirmation of ownership or authorized permission, suitable access arrangements and an accountable contact. The methods, exclusions, timing and evidence-handling rules are agreed before testing.",
  ],
  [
    "What if a system may already be compromised?",
    "Describe the concern without uploading credentials or sensitive evidence. Active compromise may need specialist incident-response triage; a standard assessment or routine maintenance package should not be treated as an emergency recovery service.",
  ],
] as const;
