export const cloudSolutionMeta =
  "Plan cloud setup, application deployment, release automation and operational visibility with ARADUN. Compare Cloud & Technology options, costs and responsibilities.";
export const cloudSolutionPackages = [
  {
    title: "Cloud launch essentials",
    fit: "A focused deployment direction for a straightforward supported application.",
    scope: [
      "Review the application and hosting requirements",
      "Agree a basic environment and deployment scope",
      "Plan configuration, domain and TLS needs where supported",
      "Check the agreed deployment and application operation",
      "Document configuration, access and handoff",
    ],
    boundary:
      "Provider bills, complex database migration, advanced CI/CD, high availability, disaster recovery and ongoing server management are separate. Exact resources and correction coverage are agreed before starting.",
  },
  {
    title: "A structured deployment foundation",
    fit: "For an application needing more repeatable releases and selected operational visibility.",
    scope: [
      "Review application, environments and access boundaries",
      "Plan deployment automation and container needs",
      "Agree configuration and access/security checks",
      "Define logging, alerts and ownership",
      "Scope workload-specific backup and safe recovery verification",
      "Document deployment, rollback and technical handoff",
    ],
    boundary:
      "Cloud bills, complex infrastructure, multiple applications, specialist security testing and ongoing operations are separate. No availability, security or disaster-recovery guarantee is implied.",
  },
  {
    title: "Technology around a larger operation",
    fit: "For complex networking, migrations, multiple applications or specialized operational requirements.",
    scope: [
      "Review architecture, workloads and dependencies",
      "Agree integration, availability and security requirements",
      "Plan migration, testing and staged delivery",
      "Define operational ownership, support and recovery responsibilities",
    ],
    boundary:
      "Resource counts, specialist capabilities, ongoing coverage and recovery objectives require a tailored agreement.",
  },
];
export const cloudSolutionSituations = [
  [
    "I need to launch an application.",
    "Plan a supported hosting environment and deployment.",
  ],
  [
    "Our team releases software manually.",
    "Review a repeatable CI/CD workflow and rollback needs.",
  ],
  [
    "Our environment is hard to manage.",
    "Assess configuration, dependencies and operating responsibilities.",
  ],
  [
    "We do not know when something fails.",
    "Plan useful monitoring and alerts with an agreed response owner.",
  ],
  [
    "We are unsure whether backups work.",
    "Review backup configuration and separately scope safe restore verification.",
  ],
  [
    "Our cloud setup needs improvement.",
    "Review access, architecture, costs and operational priorities.",
  ],
];
export const cloudSolutionProcess = [
  [
    "Review",
    "Understand the application, infrastructure, workload and requirements.",
  ],
  ["Plan", "Agree environments, access, responsibilities and selected work."],
  [
    "Implement",
    "Configure the agreed deployment, infrastructure or automation.",
  ],
  [
    "Test",
    "Verify operation and the explicitly scoped deployment/recovery checks.",
  ],
  [
    "Hand off",
    "Provide documentation, access guidance and operating next steps.",
  ],
];
export const cloudSolutionTerms = [
  [
    "Provider charges",
    "Implementation fees are separate from cloud hosting, databases, storage, backups, monitoring tools, domains, licenses and additional usage unless expressly included.",
  ],
  [
    "Client-controlled accounts",
    "Keep infrastructure in client-owned or controlled accounts where practical. Agree least-privilege access and secure credential exchange; never send keys or passwords through inquiry forms.",
  ],
  [
    "Application and environment boundaries",
    "Agree what counts as an application, required dependencies, environments, supported platform, regions and provisioning versus configuration. No provider selection or purchase is automatic.",
  ],
  [
    "Security responsibilities",
    "Assign access management, configuration, updates and patching between client, provider and delivery team. Selected checks are not a security certification or penetration test.",
  ],
  [
    "Backup versus recovery",
    "Configuring backups does not demonstrate that a restore works. Any recovery verification needs a defined workload, isolated safe target, permission, success criteria and evidence; no recovery guarantee is assumed.",
  ],
  [
    "Monitoring and response",
    "Agree what is monitored, who receives alerts, coverage hours and who responds. One-time setup does not include 24/7 monitoring or incident response.",
  ],
  [
    "Revisions and correction support",
    "Agree review rounds, acceptance checks and any implementation-defect correction window. New requirements, later provider changes, outages and ongoing management are separate from delivered-work defects.",
  ],
  [
    "Handoff and maintenance",
    "Document release/rollback steps, account access, known limits and the owner of updates, troubleshooting and ongoing maintenance. Recurring management needs a separate scope unless included.",
  ],
];
export const cloudSolutionFaqs = [
  [
    "Does this include 24/7 support?",
    "No. Continuous monitoring, coverage hours and incident response require a separate agreement.",
  ],
  [
    "Who pays for hosting?",
    "Clients normally pay providers directly. Implementation and management fees are separate unless the proposal expressly says otherwise.",
  ],
  [
    "Can you work with existing infrastructure?",
    "We review access, compatibility, configuration, dependencies and operational risks before confirming scope.",
  ],
  [
    "Is cybersecurity testing included?",
    "Selected configuration checks may be scoped. Formal security assessments and penetration testing are separate specialist engagements.",
  ],
  [
    "Does backup setup guarantee recovery?",
    "No. The proposal identifies any safe recovery verification included; backup configuration alone is not restore evidence.",
  ],
  [
    "Can I request one deployment or configuration fix?",
    "Yes. A focused fix, pipeline improvement or configuration task can be quoted separately.",
  ],
  [
    "What happens after delivery?",
    "You receive the agreed handoff. Monitoring, updates, troubleshooting and ongoing support need a maintenance agreement unless explicitly included.",
  ],
];
export const cloudSolutionPlatforms = [
  [
    "Cloud and hosting",
    "AWS · Azure · Google Cloud · supported application platforms and virtual servers",
  ],
  ["Containers and releases", "Docker · GitHub Actions · GitLab CI"],
  ["Infrastructure automation", "Terraform · Ansible"],
  ["Operational visibility", "CloudWatch · Grafana · Prometheus"],
];
export const cloudSolutionGroups = [
  [
    "Hosting & deployment",
    [
      ["Cloud Infrastructure Setup", "/services/cloud-infrastructure-setup"],
      ["Application Deployment", "/services/application-deployment"],
    ],
  ],
  [
    "Release automation",
    [
      ["CI/CD Pipeline Setup", "/services/ci-cd-pipeline-setup"],
      ["Docker Containerization", "/services/docker-containerization"],
    ],
  ],
  [
    "Infrastructure management",
    [["Infrastructure as Code", "/services/infrastructure-as-code"]],
  ],
  [
    "Operational visibility",
    [["Monitoring & Observability", "/services/monitoring-observability"]],
  ],
  [
    "Protection & recovery",
    [["Cloud Security & Backup", "/services/cloud-security-backup"]],
  ],
  [
    "Ongoing operations",
    [["Managed Cloud Services", "/services/managed-cloud-services"]],
  ],
] as const;
