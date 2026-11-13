# M00-03 staff access and publishing policy

Prepared: 2026-11-05 (Asia/Dhaka). **Owner-approved staff policy; runtime implementation and verification pending.** Approval recorded on 2026-11-05 from the owner's exact reply: **Confirmed. Implement and test.** This approves the preceding policy proposal, including Admin-only publishing and its security/session settings. It does not complete or accept all of M00-03, select a provider or activate conditional interfaces.

Authorization: the owner's **Go next** follows the recommendation to proceed with M00-03. It authorizes this documentation review; it does not explicitly accept M01-01. M00-01 is owner-accepted and is the only source task prerequisite. M01-01 remains implementation complete; owner acceptance pending.

Staff-policy documentation checkpoint **owner-accepted on 2026-11-05**. Exact owner evidence: **ccepted. Update progress and go next.** This accepts the preceding policy-recording/verification result, not full M00-03, M01-01 or runtime implementation.

## Authority and preserved boundaries

- [Source 01 section 14](../../sources/01-master-requirements.md): D-009/D-013 source gates are addressed by this owner-approved policy within the scope below; provider/recovery facts and conditional UI remain open. D-012 is a separate authoring/media gate.
- [Source 05 section 11](../../sources/05-database-architecture.md): provider-managed identity; local active staff authorization; recommended Admin/Sales/Editor matrix; session/recovery/bootstrap rules. Its recommended permission matrix is not an already-approved policy.
- [Source 07 M00-03](../../sources/07-development-roadmap.md#m00-03), [source 08 section 26](../../sources/08-implementation-guide.md#s8-26), [source 10](../../sources/10-testing-qa.md): source task, inherited gates and required later security evidence.
- Exact page identities/routes remain in the [page inventory](../../page-inventory.md). No source document, route, application, schema, dependency, account or credential is changed.

M00-03 requirements: BR-001, BR-002, BR-005, BR-006, BR-008, FR-14-08, NFR-004 and NFR-005. This checkpoint directly addresses the staff-policy parts of D-009/D-013 and A5-01/A5-02/A5-14; remaining task policies stay open in the [checklist](m00-03-checklist.md).

## Approved constraints carried forward

Express enforces authorization on every protected operation, including record and field scope. Frontend navigation guards do not grant access. Current local staff status and roles override stale provider claims; deactivation/revocation must take effect without waiting for provider session expiry. No public staff registration, custom passwords/MFA/recovery implementation, editable role builder, new Manager/Finance role, broad team-management suite or duplicate managed/local session store is introduced.

Permission bundles may be explicitly combined for a staff member; no combined role is silently assigned. Private CRM context, contact details, evidence and audit information stay out of public DTOs, analytics, public search and shared caches. Required access revocation, recovery and audit controls remain required even if dedicated screens are not selected.

## Approved permission matrix — D-013 / A5-02

**The owner approved the permissions below. Runtime implementation must still follow the roadmap dependencies and separate task authorization.** The matrix follows source 05 section 11.2, with the selected Admin-only publication choice. All grants require an active identity, the operation's record/field checks and any relevant source evidence gate.

| Operation | Admin | Sales | Editor | Public |
| --- | --- | --- | --- | --- |
| Submit intake / search published content | Public-input rules | Public-input rules | Public-input rules | Bounded public inputs / published results only |
| View/handle inquiries, opportunities and follow-ups | All authorized business records | Assigned inquiries/opportunities/tasks only | Denied | Denied |
| View contact/customer context | Authorized records | Owned contacts or minimum linked fields needed for an assigned target; no unrelated history | Denied | Denied |
| Reassign ownership / merge contacts | Allowed under approved correction policy | Denied | Denied | Denied |
| Create/complete follow-up tasks | Allowed for authorized targets/eligible staff | Allowed for permitted targets/eligible assignees | Denied | Denied |
| Mark Won/Lost / confirm customer conversion | Allowed with required explicit evidence/confirmation | Owned opportunities only, explicit confirmation | Denied | Denied |
| Reverse conversion / sensitive correction | Reason and audit required; exact CRM rules still open | Denied | Denied | Denied |
| Edit article/testimonial drafts and private preview | Allowed | Denied | Allowed for permitted content; private provenance restricted by necessity | Denied |
| Publish / unpublish content | Allowed after evidence/validation checks | Denied | **Denied: owner-selected Admin-only publication** | Denied |
| Edit title/description SEO | Allowed | Denied | Permitted content only; draft metadata does not publish | Denied |
| Canonical/indexing exceptions | Reviewed change only; private noindex protections remain | Denied | Denied | Denied |
| Staff provisioning / roles / deactivation | Controlled approved lifecycle; fresh authentication; last-Admin guard | Own-account safe fields only | Own-account safe fields only | Denied |
| Restricted audit review | Minimum authorized fields; no mutation | Denied | Denied | Denied |
| Optional payment tracker | Only if separately selected and finance permission approved | Denied | Denied | Denied |

**Approved publishing choice:** Admin-only publish/unpublish, with Editors preparing drafts and previewing them. This keeps a clear final business-evidence review for a solo owner. The alternative of Editor publication was not selected. The approved choice does not permit publishing unverified testimonials, unsupported claims or private evidence. Revoked permission must remove affected public material through the required safety process, irrespective of discretionary publish rights. Enforce the approved publication choice in separately authorized M03-02/M08 protected content operations.

CRM corrections/record inheritance remain D-011/A5-03 decisions: this matrix allocates possible responsibility but does not settle merge mechanics, stage edges or reversal rules. FAQ/upload permissions and the payment tracker remain conditional; this policy does not activate them.

## MFA, sessions and sensitive operations — D-009 / A5-01

**Owner-approved policy; actual provider capability and enforcement verification remain pending:**

- Require production MFA for every staff account, including Admin, Sales and Editor; deny protected business access until required enrollment/assurance is satisfied. No shared staff account or production MFA bypass.
- Prefer provider-supported phishing-resistant WebAuthn/passkeys or security keys with verified user authentication. Permit provider-supported TOTP as a fallback if approved and supported. Email/SMS alone is not the approved second-factor baseline. Actual factors, recovery entitlement and costs must be checked under M00-02 before auth installation.
- Approved session limits: **30 minutes idle**, **8 hours absolute**, and authentication no older than **5 minutes** before role/status, MFA or recovery changes. These numbers are owner-approved policy values recorded outside the unchanged sources, not evidence of provider capability or implemented enforcement. Background polling should not count as deliberate staff activity; ordinary tokens refreshing must not silently reset the absolute window.
- Use provider/library-supported secure HttpOnly cookies, appropriate SameSite, HTTPS in production, CSRF protection for cookie-authenticated mutations, session rotation and logout/revocation. No tokens in URLs, browser localStorage, logs or analytics; private responses are not shared-cached.
- A stale role, deactivated account, expired session or insufficient assurance must deny the operation even if the UI is still open. A timeout must not silently publish or apply a mutation; preserve only safe permitted input according to its feature's approved draft contract.
- Verify provider capability against the approved limits. If the selected adapter cannot enforce the policy safely, reopen A5-01/M00-02 for owner review; do not extend lifetimes, remove MFA or implement custom credential cryptography as a shortcut.

The same-origin/reverse-proxy versus explicit frontend/API-origin arrangement, exact cookie scope, callback URLs, CORS/trust-proxy rules and provider choice remain environment/M00-02 decisions. No origins or credentials are invented here.

The numeric limits were proposed as a risk/convenience tradeoff for a small staff console and are now owner-approved. OWASP supports explicit idle/absolute expiration, reauthentication for sensitive actions and strong MFA/recovery controls; it does not prescribe these exact ARADUN numbers. References reviewed on 2026-11-05: [session management](https://cheatsheetseries.owasp.org/cheatsheets/Session_Management_Cheat_Sheet.html), [authentication](https://cheatsheetseries.owasp.org/cheatsheets/Authentication_Cheat_Sheet.html), [MFA](https://cheatsheetseries.owasp.org/cheatsheets/Multifactor_Authentication_Cheat_Sheet.html).

## Bootstrap, recovery and offboarding — D-009/D-013 / A5-01/A5-02

**Owner-approved process; real identities, custodians and provider capability evidence remain pending:**

1. The owner approves the real initial Admin identity outside public signup. Use a documented one-time provider/bootstrap procedure, record provenance, and close the bootstrap route/mechanism afterward. Email matching alone cannot grant or link staff access.
2. Require MFA enrollment and confirm recovery readiness before production staff access. Prefer a second supported authenticator/security key plus the provider's protected recovery mechanism; actual recovery artifacts are kept privately outside the repository and application logs.
3. Do not remove/demote/deactivate the last active Admin without an approved replacement or tested controlled recovery path. Do not invent a second staff member; the solo owner's actual access/recovery custodian remains an owner input before M03-04/launch.
4. Lost-factor recovery uses the provider's supported identity verification and recovery flow. No custom security questions, support-only MFA bypass, guessed recovery code storage or permanent emergency login. Sole-Admin loss requires a rehearsed provider-supported route whose limitations/ownership are recorded before launch.
5. On recovery/security changes, revoke affected sessions and require appropriate fresh authentication/MFA; notify only verified authorized destinations. Recovery responses are identity-safe, rate-limited, and do not expose staff membership or tokens.
6. Offboarding immediately disables local authorization and invalidates accessVersion/policy caches, requests provider session revocation where supported, and records a restricted audit event. Ownership reassignment and retained business history follow the separate CRM/privacy policies.

Choosing a recovery process does not prove it works. Later real provider/sandbox and local authorization evidence must cover stale cookies, loss of a factor, all-factor loss, deactivation, role changes and last-Admin denial; mocked tests alone do not establish provider capability.

## Page and task impact — no conditional UI activated

| Existing pages / gate | Preserved disposition | Required later evidence / latest point |
| --- | --- | --- |
| STA-001 `/staff/login` | Phase 1 staff entry remains | M03-01 and M04-04; actual provider/callback configuration |
| STA-002 `/staff/recover`, STA-003 `/staff/reset`, STA-004 `/staff/verify` | All three remain provider/policy conditional; neither enabled nor removed | A5-01/A5-14 before M03-03/M04-04; explicit provider-owned route reconciliation and assurance/recovery tests |
| ADM-014/015/016 article create/editor/preview | Approved Phase 1 pages retained; Admin-only publication selected; enforcement pending | M03-02/M08-01/02; server-side role denials and private-preview isolation |
| ADM-023/024 staff access pages | Conditional, undecided; minimal provisioning/offboarding required independently | A5-14 before M11-04; approve dedicated UI or a documented tested operational alternative |
| ADM-025 audit viewer | Conditional, undecided; required restricted audit logging retained independently | A5-14 before M11-05; no general admin console introduced |
| ADM-021/022 FAQ editors and ADM-027 payment tracker | Unchanged conditional planning entries, outside this checkpoint's selection | D-012/A5-05 and D-007/A5-07/A5-14 before their owning tasks |
| TRU-01/02/03 policy pages | Unchanged conditional planning entries, outside staff-policy review | Privacy/accessibility/security policy review before relevant page activation/public capture |

All 12 conditional Phase 1 entries remain in the inventory. This policy record changes no route, navigation or source qualification. Phase 2/3 scope is preserved without implementation, design, scaffolding or feature testing.

## Decision log and outstanding evidence

| Gate | Selected policy / remaining evidence | Responsible role / deadline |
| --- | --- | --- |
| D-013; A5-02 | **Owner-approved:** role/record matrix with Admin-only publication; enforce and test in dependent tasks | Project owner with developer; before M03-02 and affected protected content operations |
| D-009; A5-01 policy subset | **Owner-approved policy:** all-staff MFA, supported factor/recovery rules and 30-minute / 8-hour / 5-minute session limits; provider capability remains open | Project owner with developer; before auth adapter policy configuration/M03; capability verification remains M00-02 |
| D-009/D-013; A5-01/02 | **Owner-approved process:** bootstrap/recovery/offboarding rules; real initial Admin identity, recovery custodian and provider recovery evidence still absent | Project owner supplies facts privately; developer verifies; before M03-04 and production activation |
| A5-14 affected staff/recovery/audit interfaces | **Open:** dedicated UI versus tested operational/provider alternatives; no implicit selection | Project owner with developer; before each affected route/menu/owning task |

Approval field: **owner-confirmed on 2026-11-05**, exact evidence **Confirmed. Implement and test.** The selected matrix, Admin-only publication, all-staff MFA/factor policy, session limits and lifecycle process are approved. D-013/A5-02 policy selection is recorded; D-009/A5-01 provider-specific capabilities, recovery readiness and operational facts remain open. A5-14 interface selections are not approved by this confirmation. Responsible roles/dependent-task deadlines above are review assignments grounded in the source, not invented named personnel, calendar commitments or evidence of agreement.

Remaining M00-03 review: CRM identity/corrections/pipeline; article working-draft/public-snapshot semantics and editor format; FAQ/controlled media; actual data practices/consent/retention/restoration suppression; booking/external-finance baseline disposition; assignment alerts and all conditional interfaces; commercial/copy/asset readiness owners. Existing full gate inventory and source deadlines remain in the checklist; no requirement is removed because this first checkpoint focuses on staff policy. The task cannot be marked complete until every required gate disposition and owner review is accounted for.

## Verification plan and handoff

Documentation checks now: source hashes and gate IDs, source-aligned matrix/route references, conditional inventory preservation, working local links and accurate policy/task statuses. No application/auth, MFA or recovery test is claimed at this checkpoint.

Policy approval/date/owner evidence is recorded here and indexed in DECISIONS.md. Runtime implementation and enforcement tests have not been performed. Provider selection/capability stays M00-02; implement the agreed policy only within separately authorized dependent tasks. Continue other M00-03 policy checkpoints only with the review process; do not start another roadmap task automatically.
