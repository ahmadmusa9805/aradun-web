/** CAT-05 client-facing guidance. No provisioning, provider selection or fixed entitlements. */
export const cloudMeta =
  "Explore cloud infrastructure, deployment, CI/CD, Docker, infrastructure as code, monitoring, backup and managed support. Plan your application's next step with ARADUN.";
export const cloudCopy: Record<
  string,
  {
    summary: string;
    need: string;
    work: string[];
    tools: string[];
    detail: string;
    inputs: string[];
    boundary: string;
  }
> = {
  "SVC-027": {
    summary:
      "Set up a cloud environment around your application's hosting, access and operational needs, with clear ownership from the start.",
    need: "Set up or review your application's cloud environment",
    work: [
      "Compute setup",
      "Virtual networks",
      "Storage configuration",
      "Linux server setup",
      "Access configuration",
      "DNS & TLS planning",
      "Environment separation",
      "Resource sizing review",
      "Migration-readiness review",
    ],
    tools: ["AWS", "Azure", "Google Cloud", "Linux"],
    detail:
      "Review the workload, data, expected usage and current environment before deciding what to configure. A new server, storage location or network should fit the application rather than introduce unnecessary complexity. Migration requirements and advanced orchestration can be assessed as separate scoped needs.",
    inputs: [
      "Your application and current hosting/environment details",
      "Required accounts, regions, data boundaries and access arrangements",
      "Workload constraints, dependencies and operational responsibilities",
    ],
    boundary:
      "The proposal defines the environment and resources included. Provider bills, large migrations, complex orchestration and ongoing operation are not automatically part of infrastructure setup.",
  },
  "SVC-028": {
    summary:
      "Deploy a supported application into an agreed environment, with a clear plan for configuration, checks and handover.",
    need: "Deploy an application or resolve a deployment problem",
    work: [
      "Website deployment",
      "Backend/API deployment",
      "VPS deployment",
      "Runtime configuration",
      "Environment configuration",
      "Reverse-proxy setup",
      "DNS & TLS coordination",
      "Release troubleshooting",
      "Cutover planning",
    ],
    tools: [
      "Linux/VPS",
      "Nginx",
      "Supported runtimes",
      "Cloud hosting platforms",
    ],
    detail:
      "Start with a buildable application and an agreed target environment. Review runtime requirements, secrets handling, dependencies and the checks that show the release is working. Existing-server or hosting moves can be reviewed with explicit validation and cutover responsibilities.",
    inputs: [
      "Source/build instructions and the supported runtime",
      "The target environment and a secure access process",
      "Environment requirements, dependencies and acceptance checks",
    ],
    boundary:
      "Deploying an application is not automatically provisioning a complete cloud architecture or providing ongoing management. Downtime, rollback and data-move requirements must be reviewed; zero downtime is not guaranteed.",
  },
  "SVC-029": {
    summary:
      "Make releases more repeatable with build, test and deployment workflows that match your repository and review process.",
    need: "Automate builds, checks and releases",
    work: [
      "Build workflows",
      "Test pipelines",
      "Release triggers",
      "Deployment workflows",
      "Approval gates",
      "Environment separation",
      "Artifact handling",
      "Secrets-access planning",
      "Rollback procedures",
    ],
    tools: ["GitHub Actions", "GitLab CI", "Jenkins"],
    detail:
      "Define which events start a workflow, what checks must pass and who can approve a release. A useful pipeline makes the delivery process understandable and repeatable without giving deployment jobs unnecessary access. Rollback behaviour is planned around the application and its data changes.",
    inputs: [
      "The repository and current build/test commands",
      "Target environments and release permissions",
      "Approval, artifact and rollback requirements",
    ],
    boundary:
      "Pipeline quantity, target environments, runner usage and release responsibilities are agreed in scope. Automated checks do not prove every defect is absent or guarantee a risk-free release.",
  },
  "SVC-030": {
    summary:
      "Package your application and its agreed dependencies into a clearer container-based setup for development or deployment.",
    need: "Package an application using containers",
    work: [
      "Dockerfile preparation",
      "Compose configuration",
      "Service definitions",
      "Container networking",
      "Volume planning",
      "Environment handling",
      "Health-check configuration",
      "Image-build reviews",
      "Registry preparation",
    ],
    tools: ["Docker", "Docker Compose", "Container registries"],
    detail:
      "Review how the application builds, runs, stores data and communicates with other services. Container work should make those responsibilities explicit. Development and production requirements are assessed separately rather than assuming the same Compose setup is suitable everywhere.",
    inputs: [
      "The application's build/runtime requirements",
      "Required services, ports and persistent data",
      "Target use: local development, testing or deployment",
    ],
    boundary:
      "Containerization is not automatically Kubernetes setup, hosted operation or a backup solution. Persistent data, credentials, registry access and production responsibilities are agreed before implementation.",
  },
  "SVC-031": {
    summary:
      "Describe agreed infrastructure in versioned configuration so environments and changes are easier to review and repeat.",
    need: "Manage infrastructure through reviewed configuration",
    work: [
      "Provisioning templates",
      "Terraform configuration",
      "Environment variables",
      "Reusable modules",
      "Configuration automation",
      "State-management planning",
      "Change review",
      "Access boundaries",
      "Infrastructure documentation",
    ],
    tools: ["Terraform", "Ansible", "CloudFormation"],
    detail:
      "Identify the resources and configuration that need to be repeatable, then agree state ownership, permissions and review steps. Infrastructure code helps make changes explicit, but it still needs careful planning before it is applied to a real account.",
    inputs: [
      "Your existing infrastructure and target resources",
      "Account access boundaries and environment requirements",
      "State ownership, approval rules and change constraints",
    ],
    boundary:
      "The proposal defines the modules, environments and resource coverage. No infrastructure is provisioned merely by preparing a plan or requesting a quote, and provider charges remain separate.",
  },
  "SVC-032": {
    summary:
      "Understand application and infrastructure behaviour through scoped metrics, logs, dashboards and useful alerts.",
    need: "See application health, failures and operational signals",
    work: [
      "Metrics setup",
      "Log collection",
      "Operational dashboards",
      "Alert configuration",
      "Health checks",
      "Error visibility",
      "Retention planning",
      "Notification routing",
      "Runbook preparation",
    ],
    tools: ["CloudWatch", "Prometheus", "Grafana", "Existing logging tools"],
    detail:
      "Choose signals that support real operating decisions, then agree where data is collected, who receives alerts and what they should do next. Review sensitive data, access and retention before collecting logs. An alert is useful only when responsibility for responding is clear.",
    inputs: [
      "The systems and failure modes you need to observe",
      "Existing metrics/logs and permitted data handling",
      "Alert recipients, escalation responsibilities and retention needs",
    ],
    boundary:
      "Monitoring configuration is not continuous staffed response, incident resolution or a service-level guarantee. Agent, storage, retention and provider costs are identified in scope.",
  },
  "SVC-033": {
    summary:
      "Review agreed access and backup controls, then plan recovery responsibilities and verification for the systems that matter.",
    need: "Improve scoped access, backup and recovery arrangements",
    work: [
      "Access reviews",
      "Storage permissions",
      "Backup configuration",
      "Retention planning",
      "Recovery requirements",
      "Restore-test planning",
      "Scoped restore verification",
      "Backup-failure alerts",
      "Recovery documentation",
    ],
    tools: [
      "Cloud IAM",
      "Cloud backup tools",
      "Storage controls",
      "Recovery tooling",
    ],
    detail:
      "Identify the assets, access boundaries and recovery needs first. Backup configuration and recovery validation are different activities; test restores must be explicitly scoped with suitable targets and acceptance checks. Security configuration is not a replacement for an authorized security assessment.",
    inputs: [
      "The systems/data to cover and their owners",
      "Existing access, backup and retention arrangements",
      "Recovery objectives, authorized test targets and approval constraints",
    ],
    boundary:
      "No guarantee of complete security, compliance or recovery is implied. Retention, recovery objectives and restore-test coverage must be agreed. Broader assessment work is a separate Cybersecurity engagement.",
  },
  "SVC-034": {
    summary:
      "Keep agreed cloud responsibilities organized through scheduled checks, maintenance, troubleshooting and clear reporting.",
    need: "Arrange recurring care for an existing cloud environment",
    work: [
      "Scheduled environment checks",
      "Maintenance coordination",
      "Issue investigation",
      "Resource reviews",
      "Usage & cost reviews",
      "Access-expiry reviews",
      "Scoped configuration changes",
      "Operational reporting",
      "Runbook upkeep",
    ],
    tools: [
      "Your existing cloud",
      "Platform consoles",
      "Monitoring tools",
      "Operations documentation",
    ],
    detail:
      "Define the environment, the routine work and who handles issues before recurring support begins. Resource and usage reviews can identify changes to discuss, but savings depend on the workload and provider. New environments, major migrations and substantial feature work require separate scope.",
    inputs: [
      "Your infrastructure inventory and current ownership",
      "Known issues, operating notes and support priorities",
      "Coverage expectations, approval contacts and access arrangements",
    ],
    boundary:
      "Monthly options do not imply 24/7 incident response, unlimited changes or an enterprise SLA. Coverage, response arrangements, change limits and escalation responsibilities must be agreed explicitly.",
  },
};
export const cloudProcess = [
  [
    "Understand",
    "Review your application, current environment and operating requirements.",
  ],
  [
    "Plan",
    "Define resources, access, dependencies, risks and responsibilities.",
  ],
  ["Implement", "Complete the agreed setup, deployment or configuration work."],
  ["Verify", "Check the scoped application, release or recovery scenarios."],
  [
    "Handover",
    "Document ownership and operating steps; discuss optional ongoing care.",
  ],
] as const;
export const cloudResponsibilities = [
  [
    "Provider bills",
    "Cloud compute, storage, bandwidth, licenses and third-party usage are separate unless expressly included.",
  ],
  [
    "Accounts & access",
    "Agree account ownership and use appropriately limited access. Credentials are exchanged through an agreed secure process.",
  ],
  [
    "Data & changes",
    "Identify affected data, approvals, backup requirements and a suitable change window before work on a live environment.",
  ],
  [
    "Recovery evidence",
    "A configured backup does not establish verified recovery. Restore testing, objectives and acceptance checks need explicit scope.",
  ],
  [
    "Ongoing operation",
    "A one-time setup is distinct from recurring management. Monitoring and staffed incident response are also separate responsibilities.",
  ],
] as const;
export const cloudFaqs = [
  [
    "Does application deployment include ongoing cloud management?",
    "Not automatically. Deployment covers the agreed release work; recurring management has its own responsibilities, coverage and fees under Managed Cloud Services.",
  ],
  [
    "Who pays the cloud provider?",
    "You normally retain ownership of the provider account and pay its bills directly. Our implementation or management fees are separate from compute, storage, bandwidth and third-party usage unless expressly included.",
  ],
  [
    "Can you work with our existing infrastructure?",
    "We first review the environment, account permissions, compatibility and technical condition. The proposal identifies what can be changed and what depends on your current providers or application.",
  ],
  [
    "Can you help move an existing application or server?",
    "Describe the current environment, target and data involved. Migration requirements can be assessed alongside infrastructure or deployment work, with separate scope where needed. We plan for cutover risks and validation; zero downtime is not guaranteed.",
  ],
  [
    "Can you help us reduce cloud costs?",
    "An agreed resource or usage review can identify improvements to consider. Savings depend on workload, architecture and provider terms, so a specific reduction is not guaranteed.",
  ],
  [
    "Does configuring backups include restoration testing?",
    "Only when testing is explicitly included. We distinguish the backup setup from recovery validation and agree the test target, required access and acceptance checks.",
  ],
  [
    "Can I request one small task rather than ongoing management?",
    "Yes. Share the deployment issue, configuration need or other focused task. We review it before proposing a scope; a one-time task does not automatically require a monthly management plan.",
  ],
] as const;
