"""Read-only M00-01 documentation reconciliation; Python standard library only."""
from pathlib import Path
from collections import Counter
import hashlib
import re

ROOT = Path(__file__).resolve().parents[2]
SOURCE = ROOT / "docs/sources"
REQ = r"(?:FR-\d{2}-\d{2}|BR-\d{3}|NFR-\d{3}|EXT-\d{3})"
PAGE = r"(?:PUB-S\d{3}|PUB-\d{3}|CAT-\d{2}|SOL-\d{2}|TRU-\d{2}|SYS-\d{2}|STA-\d{3}|ADM-\d{3}|IND-\d{2}|PRD-\d{2}|EXP-\d{3}|CLI-A\d{2}|CLI-\d{3}|ADV-\d{3}|AMS-\d{3})"


def read(path):
    return (ROOT / path).read_text(encoding="utf-8")


def table_rows(text):
    return [
        [c.strip().replace(r"\|", "|") for c in re.split(r"(?<!\\)\|", line)[1:-1]]
        for line in text.splitlines() if line.startswith("|")
    ]


def keyed(rows, pattern):
    result = {}
    for row in rows:
        if re.fullmatch(pattern, row[0]):
            assert row[0] not in result, f"Duplicate row: {row[0]}"
            result[row[0]] = row
    return result


def between(text, start, end):
    pos = text.index(start)
    return text[pos:text.index(end, pos + len(start))]


def check(label, condition):
    if not condition:
        raise AssertionError(label)
    print(f"PASS {label}")


def main():
    files = sorted(SOURCE.glob("*.md"))
    check("exactly 13 source Markdown files", len(files) == 13)
    sources = {p.name: p.read_text(encoding="utf-8") for p in files}
    baseline = table_rows(read("docs/source-baseline.md"))
    registered = {}
    for row in baseline:
        match = re.fullmatch(r"\[([^]]+\.md)\]\(sources/[^)]+\)", row[0])
        if match:
            assert match[1] not in registered
            registered[match[1]] = row
    check("source register filenames complete and unique", set(registered) == set(sources))
    for path in files:
        row = registered[path.name]
        version = re.search(r"^\*\*Version:\*\*\s*(\d+\.\d+\.\d+)", sources[path.name], re.M)[1]
        assert row[1] == version, path.name
        assert int(row[2]) == path.stat().st_size, path.name
        assert row[3] == hashlib.sha256(path.read_bytes()).hexdigest(), path.name
    check("13 current versions, byte lengths and SHA-256 hashes match", True)

    master = sources["01-master-requirements.md"]
    site = sources["02-pages-sitemap.md"]
    roadmap = sources["07-development-roadmap.md"]
    guide = sources["08-implementation-guide.md"]
    matches = list(re.finditer(r"^#{3,4} (" + REQ + r") \u2014 (.+)$", master, re.M))
    trace = keyed(table_rows(read("docs/traceability.md")), REQ)
    check("236 unique master requirements and traceability rows", len(matches) == len(trace) == 236 and {m[1] for m in matches} == set(trace))
    check("207 FR + 8 BR + 15 NFR + 6 EXT", Counter(k.split("-")[0] for k in trace) == {"FR": 207, "BR": 8, "NFR": 15, "EXT": 6})
    mappings = {}
    for row in table_rows(between(guide, "## Appendix A.", "## Appendix B.")):
        match = re.match("(" + REQ + r") \u2014 ", row[0])
        if match:
            assert match[1] not in mappings
            mappings[match[1]] = row
    check("all 236 guide requirement mappings reconcile", set(mappings) == set(trace))
    tasks = set(re.findall(r"^#### (M\d{2}-\d{2}) \u2014 ", roadmap, re.M))
    for i, match in enumerate(matches):
        end = matches[i+1].start() if i+1 < len(matches) else master.index("\n## 13.", match.end())
        block = master[match.end():end]

        def field(label):
            found = re.search(r"^- \*\*" + label + r":\*\* (.+)$", block, re.M)
            return found[1] if found else ""

        row, mapping = trace[match[1]], mappings[match[1]]
        assert row[1] == match[2], match[1]
        assert row[2] == f"v0.3.0, line {master[:match.start()].count(chr(10)) + 1}", match[1]
        assert row[3] == field("Phase"), match[1]
        assert row[4] == (field("Approval status") or field("Status/source")), match[1]
        assert row[5] == field("Dependencies"), match[1]
        assert row[6:8] == mapping[1:3], match[1]
        assert row[8] == mapping[3].replace("](#", "](sources/07-development-roadmap.md#"), match[1]
        assert row[9] == field("Acceptance criteria"), match[1]
        if match[1] in {'BR-003', 'FR-02-08', 'FR-02-09', 'FR-08-01', 'FR-08-02', 'FR-11-01'}:
            assert row[10].endswith("backend/tests/resend-intake.test.ts"), match[1]
            assert "verification/resend-integration.md" in row[11], match[1]
            assert row[12] == "partially implemented; local Resend evidence only; actual delivery and release gates retained", match[1]
        elif match[1] in {'BR-004', 'FR-01-10', 'FR-01-12', 'FR-01-13', 'EXT-004', 'NFR-011'}:
            assert row[10].endswith("tests/browser/public-reading.spec.ts"), match[1]
            assert "verification/public-reading.md" in row[11], match[1]
            assert row[12] == "partially implemented; local reading contract only; content/publication/release gates retained", match[1]
        elif match[1] in {'BR-008', 'NFR-001', 'BR-004', 'BR-005', 'BR-002', 'NFR-009'}:
            assert row[10].endswith("tests/browser/public-inventory.spec.ts; docs/verification/public-inventory.md"), match[1]
            assert "verification/public-inventory.md" in row[11], match[1]
            assert row[12] == "partially implemented; local public audit only; full Phase 1/release gates retained", match[1]
        elif match[1] in {'NFR-002', 'NFR-003', 'NFR-009'}:
            assert row[10].endswith("tests/browser/public-quality.spec.ts; frontend/src/modules/intake/components/inquiry-form.tsx"), match[1]
            assert "verification/public-quality.md" in row[11], match[1]
            assert row[12] == "partially implemented; measured local public quality; release gates retained", match[1]
        elif match[1] in {'FR-01-05', 'FR-01-04', 'FR-01-07', 'FR-02-03', 'FR-02-02', 'FR-01-06'}:
            assert row[10].endswith("backend/tests/catalog-content.test.ts; frontend/src/modules/intake/components/inquiry-form.tsx"), match[1]
            assert "verification/public-catalog-review.md" in row[11], match[1]
            assert row[12] == "partially implemented; local catalog review and quote context; publication gates retained", match[1]
        elif match[1] in {'FR-04-08', 'NFR-001', 'NFR-011'}:
            assert row[10].endswith("frontend/src/modules/discovery; frontend/src/app/robots.ts; frontend/src/app/sitemap.ts; tests/browser/seo.spec.ts"), match[1]
            assert "verification/m10-02-local.md" in row[11], match[1]
            assert row[12] == "partially implemented; local metadata only; publication gates retained", match[1]
        elif match[1] in {'NFR-006', 'NFR-014', 'FR-02-03', 'FR-02-05', 'FR-02-06', 'FR-02-04', 'FR-02-07', 'FR-01-08', 'FR-02-08', 'FR-02-01', 'BR-004', 'BR-003', 'FR-01-01', 'FR-01-10', 'FR-01-02', 'FR-01-09', 'FR-02-02', 'FR-01-12', 'FR-01-07', 'FR-02-09', 'FR-01-14', 'NFR-008', 'FR-01-03', 'FR-01-13', 'NFR-002'}:
            assert row[10].endswith("frontend/src/modules/content; frontend/src/modules/intake; frontend/src/app/(public); backend/src/modules/intake; backend/tests/public-intake.test.ts; tests/browser/public-website.spec.ts"), match[1]
            assert "Public-first batch local evidence: [report](verification/public-website-batch-01.md)" in row[11], match[1]
            assert row[12] == "partially implemented; local public-site batch; launch/publication gates retained", match[1]
        elif match[1] in {'FR-14-03', 'NFR-005', 'FR-14-04', 'NFR-008'}:
            m03_negative_access_evidence = {'FR-14-03': ['backend/src/modules/identity/policies; backend/src/modules/identity/server/authorization.server.ts; backend/src/server/workflows/staff-audit.server.ts; backend/tests/authorization.test.ts; backend/tests/support/access-fixture.ts; backend/tests/integration/access.test.ts; frontend/tests/security-failures.test.tsx; tests/browser/private-access.spec.ts', 'M03-02 local role/record/current-session checks: [evidence](verification/m03-02.md); future feature integration, actual MFA/staging and release gates retained; M03-05 local direct-denial/cache/log/expiry evidence: [verification](verification/m03-05.md); owning-feature integration, actual staging/operations/custody/release gates retained', 'partially implemented; local shared authorization capability; future handler integration and security gates retained'], 'FR-14-04': ['backend/src/modules/identity; frontend/src/modules/identity; frontend/src/app/(auth)/staff; frontend/src/app/(staff)/dashboard/account; backend/tests/security.test.ts; tests/browser/security.spec.ts; backend/src/modules/identity/server/lifecycle.service.server.ts; backend/scripts/staff/access.ts; backend/tests/lifecycle.test.ts; backend/tests/support/access-fixture.ts; backend/tests/integration/access.test.ts; frontend/tests/security-failures.test.tsx; tests/browser/private-access.spec.ts', 'M03-03 local MFA/recovery/account security: [evidence](verification/m03-03.md); actual delivery/staging/custody, lifecycle and release gates retained; M03-04 local bootstrap/provision/offboarding and Admin-race checks: [evidence](verification/m03-04.md); real operations/custody/release and future assignment-owner gates retained; M03-05 local direct-denial/cache/log/expiry evidence: [verification](verification/m03-05.md); owning-feature integration, actual staging/operations/custody/release gates retained', 'partially implemented; local MFA/recovery/account security; actual staging/delivery/custody and activation gates retained'], 'NFR-005': ['backend/src/modules/identity/policies; backend/src/modules/identity/server/authorization.server.ts; backend/src/server/workflows/staff-audit.server.ts; backend/tests/authorization.test.ts; backend/src/modules/identity/server/lifecycle.service.server.ts; backend/scripts/staff/access.ts; backend/tests/lifecycle.test.ts; backend/tests/support/access-fixture.ts; backend/tests/integration/access.test.ts; frontend/tests/security-failures.test.tsx; tests/browser/private-access.spec.ts', 'M03-02 local role/record/current-session checks: [evidence](verification/m03-02.md); future feature integration, actual MFA/staging and release gates retained; M03-04 local bootstrap/provision/offboarding and Admin-race checks: [evidence](verification/m03-04.md); real operations/custody/release and future assignment-owner gates retained; M03-05 local direct-denial/cache/log/expiry evidence: [verification](verification/m03-05.md); owning-feature integration, actual staging/operations/custody/release gates retained', 'partially implemented; local shared authorization capability; future handler integration and security gates retained'], 'NFR-008': ['backend/src/config; frontend/src/config; backend/src/modules/operations; backend/tests/audit.test.ts; scripts/check-public-secrets.mjs; backend/src/modules/operations/server/rate-limit.server.ts; backend/src/modules/operations/server/request-controls.server.ts; backend/tests/abuse.test.ts; backend/src/modules/identity; backend/src/modules/identity; frontend/src/modules/identity; frontend/src/app/(auth)/staff; frontend/src/app/(staff)/dashboard/account; backend/tests/security.test.ts; tests/browser/security.spec.ts; backend/tests/support/access-fixture.ts; backend/tests/integration/access.test.ts; frontend/tests/security-failures.test.tsx; tests/browser/private-access.spec.ts', 'M01-02 environment and M02-03 audit/logging: [environment evidence](verification/m01-02.md), [audit evidence](verification/m02-03.md); production/identity gates pending; M02-04 local admission/request checks: [evidence](verification/m02-04.md); production/privacy and public-form evidence pending; M03-01 local login/session/logout: [evidence](verification/m03-01.md); MFA, lifecycle, permissions, human and production gates retained; M03-03 local MFA/recovery/account security: [evidence](verification/m03-03.md); actual delivery/staging/custody, lifecycle and release gates retained; M03-05 local direct-denial/cache/log/expiry evidence: [verification](verification/m03-05.md); owning-feature integration, actual staging/operations/custody/release gates retained', 'partially implemented; local security/privacy foundations only; production and UI gates retained']}
            assert row[10:13] == m03_negative_access_evidence[match[1]], match[1]
        elif match[1] in {'FR-14-04', 'NFR-005', 'FR-09-07'}:
            m03_lifecycle_evidence = {'FR-09-07': ['backend/src/modules/identity/policies; backend/src/modules/identity/server/authorization.server.ts; backend/src/server/workflows/staff-audit.server.ts; backend/tests/authorization.test.ts; backend/src/modules/identity/server/lifecycle.service.server.ts; backend/scripts/staff/access.ts; backend/tests/lifecycle.test.ts', 'M03-02 local role/record/current-session checks: [evidence](verification/m03-02.md); future feature integration, actual MFA/staging and release gates retained; M03-04 local bootstrap/provision/offboarding and Admin-race checks: [evidence](verification/m03-04.md); real operations/custody/release and future assignment-owner gates retained', 'partially implemented; local shared authorization capability; future handler integration and security gates retained'], 'FR-14-04': ['backend/src/modules/identity; frontend/src/modules/identity; frontend/src/app/(auth)/staff; frontend/src/app/(staff)/dashboard/account; backend/tests/security.test.ts; tests/browser/security.spec.ts; backend/src/modules/identity/server/lifecycle.service.server.ts; backend/scripts/staff/access.ts; backend/tests/lifecycle.test.ts', 'M03-03 local MFA/recovery/account security: [evidence](verification/m03-03.md); actual delivery/staging/custody, lifecycle and release gates retained; M03-04 local bootstrap/provision/offboarding and Admin-race checks: [evidence](verification/m03-04.md); real operations/custody/release and future assignment-owner gates retained', 'partially implemented; local MFA/recovery/account security; actual staging/delivery/custody and activation gates retained'], 'NFR-005': ['backend/src/modules/identity/policies; backend/src/modules/identity/server/authorization.server.ts; backend/src/server/workflows/staff-audit.server.ts; backend/tests/authorization.test.ts; backend/src/modules/identity/server/lifecycle.service.server.ts; backend/scripts/staff/access.ts; backend/tests/lifecycle.test.ts', 'M03-02 local role/record/current-session checks: [evidence](verification/m03-02.md); future feature integration, actual MFA/staging and release gates retained; M03-04 local bootstrap/provision/offboarding and Admin-race checks: [evidence](verification/m03-04.md); real operations/custody/release and future assignment-owner gates retained', 'partially implemented; local shared authorization capability; future handler integration and security gates retained']}
            assert row[10:13] == m03_lifecycle_evidence[match[1]], match[1]
        elif match[1] in {'FR-14-10', 'NFR-008', 'FR-09-01', 'FR-14-04'}:
            m03_security_evidence = {'FR-09-01': ['backend/src/modules/identity; frontend/src/modules/identity; frontend/src/app/(auth)/staff; frontend/src/app/(staff)/dashboard/account; backend/tests/security.test.ts; tests/browser/security.spec.ts', 'M03-03 local MFA/recovery/account security: [evidence](verification/m03-03.md); actual delivery/staging/custody, lifecycle and release gates retained', 'partially implemented; local MFA/recovery/account security; actual staging/delivery/custody and activation gates retained'], 'FR-14-04': ['backend/src/modules/identity; frontend/src/modules/identity; frontend/src/app/(auth)/staff; frontend/src/app/(staff)/dashboard/account; backend/tests/security.test.ts; tests/browser/security.spec.ts', 'M03-03 local MFA/recovery/account security: [evidence](verification/m03-03.md); actual delivery/staging/custody, lifecycle and release gates retained', 'partially implemented; local MFA/recovery/account security; actual staging/delivery/custody and activation gates retained'], 'FR-14-10': ['backend/src/modules/identity; frontend/src/modules/identity; frontend/src/app/(auth)/staff; frontend/src/app/(staff)/dashboard/account; backend/tests/security.test.ts; tests/browser/security.spec.ts', 'M03-03 local MFA/recovery/account security: [evidence](verification/m03-03.md); actual delivery/staging/custody, lifecycle and release gates retained', 'partially implemented; local MFA/recovery/account security; actual staging/delivery/custody and activation gates retained'], 'NFR-008': ['backend/src/config; frontend/src/config; backend/src/modules/operations; backend/tests/audit.test.ts; scripts/check-public-secrets.mjs; backend/src/modules/operations/server/rate-limit.server.ts; backend/src/modules/operations/server/request-controls.server.ts; backend/tests/abuse.test.ts; backend/src/modules/identity; backend/src/modules/identity; frontend/src/modules/identity; frontend/src/app/(auth)/staff; frontend/src/app/(staff)/dashboard/account; backend/tests/security.test.ts; tests/browser/security.spec.ts', 'M01-02 environment and M02-03 audit/logging: [environment evidence](verification/m01-02.md), [audit evidence](verification/m02-03.md); production/identity gates pending; M02-04 local admission/request checks: [evidence](verification/m02-04.md); production/privacy and public-form evidence pending; M03-01 local login/session/logout: [evidence](verification/m03-01.md); MFA, lifecycle, permissions, human and production gates retained; M03-03 local MFA/recovery/account security: [evidence](verification/m03-03.md); actual delivery/staging/custody, lifecycle and release gates retained', 'partially implemented; local security/privacy foundations only; production and UI gates retained']}
            assert row[10:13] == m03_security_evidence[match[1]], match[1]
        elif match[1] in {'FR-09-07', 'FR-14-03', 'FR-14-07', 'NFR-005'}:
            m03_policy_evidence = {'FR-09-07': ['backend/src/modules/identity/policies; backend/src/modules/identity/server/authorization.server.ts; backend/src/server/workflows/staff-audit.server.ts; backend/tests/authorization.test.ts', 'M03-02 local role/record/current-session checks: [evidence](verification/m03-02.md); future feature integration, actual MFA/staging and release gates retained', 'partially implemented; local shared authorization capability; future handler integration and security gates retained'], 'FR-14-03': ['backend/src/modules/identity/policies; backend/src/modules/identity/server/authorization.server.ts; backend/src/server/workflows/staff-audit.server.ts; backend/tests/authorization.test.ts', 'M03-02 local role/record/current-session checks: [evidence](verification/m03-02.md); future feature integration, actual MFA/staging and release gates retained', 'partially implemented; local shared authorization capability; future handler integration and security gates retained'], 'FR-14-07': ['backend/src/modules/operations; backend/tests/audit.test.ts; backend/src/modules/identity/policies; backend/src/modules/identity/server/authorization.server.ts; backend/src/server/workflows/staff-audit.server.ts; backend/tests/authorization.test.ts', 'M02-03 audit/logging checks: [actual evidence](verification/m02-03.md); identity binding/production monitoring criteria pending; M03-02 local role/record/current-session checks: [evidence](verification/m03-02.md); future feature integration, actual MFA/staging and release gates retained', 'partially implemented; local audit/logging foundation only'], 'NFR-005': ['backend/src/modules/identity/policies; backend/src/modules/identity/server/authorization.server.ts; backend/src/server/workflows/staff-audit.server.ts; backend/tests/authorization.test.ts', 'M03-02 local role/record/current-session checks: [evidence](verification/m03-02.md); future feature integration, actual MFA/staging and release gates retained', 'partially implemented; local shared authorization capability; future handler integration and security gates retained']}
            assert row[10:13] == m03_policy_evidence[match[1]], match[1]
        elif match[1] in {'FR-14-04', 'NFR-008', 'FR-09-01'}:
            m03_evidence = {'FR-09-01': ['backend/src/modules/identity; frontend/src/app/(auth)/staff/login; backend/tests/identity.test.ts; frontend/tests/sign-in.test.tsx; tests/browser/identity.spec.ts', 'M03-01 local login/session/logout: [evidence](verification/m03-01.md); MFA, lifecycle, permissions, human and production gates retained', 'partially implemented; local identity/sign-in only; later security and activation gates retained'], 'FR-14-04': ['backend/src/modules/identity; frontend/src/app/(auth)/staff/login; backend/tests/identity.test.ts; frontend/tests/sign-in.test.tsx; tests/browser/identity.spec.ts', 'M03-01 local login/session/logout: [evidence](verification/m03-01.md); MFA, lifecycle, permissions, human and production gates retained', 'partially implemented; local identity/sign-in only; later security and activation gates retained'], 'NFR-008': ['backend/src/config; frontend/src/config; backend/src/modules/operations; backend/tests/audit.test.ts; scripts/check-public-secrets.mjs; backend/src/modules/operations/server/rate-limit.server.ts; backend/src/modules/operations/server/request-controls.server.ts; backend/tests/abuse.test.ts; backend/src/modules/identity', 'M01-02 environment and M02-03 audit/logging: [environment evidence](verification/m01-02.md), [audit evidence](verification/m02-03.md); production/identity gates pending; M02-04 local admission/request checks: [evidence](verification/m02-04.md); production/privacy and public-form evidence pending; M03-01 local login/session/logout: [evidence](verification/m03-01.md); MFA, lifecycle, permissions, human and production gates retained', 'partially implemented; local security/privacy foundations only; production and UI gates retained']}
            assert row[10:13] == m03_evidence[match[1]], match[1]
        elif match[1] in {'FR-14-05', 'NFR-008', 'FR-14-08'}:
            approved_local_evidence = {'FR-14-05': ['backend/src/modules/operations/server/rate-limit.server.ts; backend/src/modules/operations/server/request-controls.server.ts; backend/tests/abuse.test.ts', 'M02-04 local admission/request checks: [evidence](verification/m02-04.md); production/privacy and public-form evidence pending', 'partially implemented; local security/privacy foundations only; production and UI gates retained'], 'FR-14-08': ['backend/src/modules/intake; backend/src/server/db/model-registry.server.ts; backend/tests/inquiry.test.ts; backend/src/modules/operations/server/rate-limit.server.ts; backend/src/modules/operations/server/request-controls.server.ts; backend/tests/abuse.test.ts', 'M06-01 Inquiry model/input/index checks: [actual evidence](verification/m06-01.md); live submission, privacy/provider and staff-workflow gates pending; M02-04 local admission/request checks: [evidence](verification/m02-04.md); production/privacy and public-form evidence pending', 'partially implemented; local security/privacy foundations only; production and UI gates retained'], 'NFR-008': ['backend/src/config; frontend/src/config; backend/src/modules/operations; backend/tests/audit.test.ts; scripts/check-public-secrets.mjs; backend/src/modules/operations/server/rate-limit.server.ts; backend/src/modules/operations/server/request-controls.server.ts; backend/tests/abuse.test.ts', 'M01-02 environment and M02-03 audit/logging: [environment evidence](verification/m01-02.md), [audit evidence](verification/m02-03.md); production/identity gates pending; M02-04 local admission/request checks: [evidence](verification/m02-04.md); production/privacy and public-form evidence pending', 'partially implemented; local security/privacy foundations only; production and UI gates retained']}
            assert row[10:13] == approved_local_evidence[match[1]], match[1]
        elif match[1] in {"FR-14-09", "NFR-009"}:
            assert row[10] == "[Test configurations](../vitest.config.ts); backend/tests; frontend/tests; tests/browser; backend/scripts/db; [testing guide](testing.md)", match[1]
            assert row[11] == "M01-03 and M02-05 foundation checks: [test evidence](verification/m01-03.md), [operational evidence](verification/m02-05.md); feature/release criteria pending", match[1]
            assert row[12] == "partially implemented; M01/M02 test and operational foundation only", match[1]
        elif match[1] in {"FR-14-01", "FR-14-13"}:
            assert row[10] == "backend/src/config; frontend/src/config; backend/tests/env.test.ts; frontend/tests/env.test.tsx; scripts/check-public-secrets.mjs", match[1]
            assert row[11] == "M01-02 environment foundation: [actual evidence](verification/m01-02.md); hosted resource isolation/release criteria pending", match[1]
            assert row[12] == "partially implemented; P1 configuration only; future integration administration deferred", match[1]
        elif match[1] in {"FR-02-06", "FR-02-07", "FR-02-13", "FR-14-02", "FR-14-08"}:
            assert row[10] == "backend/src/modules/intake; backend/src/server/db/model-registry.server.ts; backend/tests/inquiry.test.ts", match[1]
            assert row[11] == "M06-01 Inquiry model/input/index checks: [actual evidence](verification/m06-01.md); live submission, privacy/provider and staff-workflow gates pending", match[1]
            assert row[12] == "partially implemented; Inquiry persistence/contracts only", match[1]
        elif match[1] == "NFR-006":
            assert row[10] == "backend/src/server/db/connection.server.ts; backend/src/server/db/transaction.server.ts; backend/tests/mongo.test.ts", match[1]
            assert row[11] == "M02-01 real replica-set checks: [actual evidence](verification/m02-01.md); business records/outbox criteria pending", match[1]
            assert row[12] == "partially implemented; M02 connection/transaction foundation only", match[1]
        elif match[1] in {"FR-01-05", "FR-01-06", "FR-01-07", "FR-02-03"}:
            assert row[10] == "backend/src/modules/catalog; frontend/src/app/(public)/solutions; frontend/src/app/(public)/pricing; frontend/src/modules/catalog/templates", match[1]
            assert row[11] == "M05-02/04/05 price and local catalog templates: [solution/pricing evidence](verification/m05-05.md); live intake/final publication/commercial and human gates pending", match[1]
            assert row[12] == "partially implemented; local solution/pricing and selection-context previews only", match[1]
        elif match[1] in {"BR-002", "FR-01-04", "NFR-002"}:
            assert row[10] == "backend/src/modules/catalog; frontend/src/app/(public)/services; frontend/src/modules/catalog/templates/service.tsx", match[1]
            assert row[11] == "M05-02/03/04 price and local catalog template checks: [service evidence](verification/m05-04.md); final content/availability/commercial/publication and human gates pending", match[1]
            assert row[12] == "partially implemented; local service templates only; release gates retained", match[1]
        elif match[1] in {"FR-02-02", "FR-04-02", "NFR-012"}:
            assert row[10] == "backend/src/modules/catalog; backend/src/server/db/value-schemas.server.ts; frontend/src/modules/catalog/components/price-presentation.tsx", match[1]
            assert row[11] == "M05-01/02 registry and price/snapshot checks: [registry](verification/m05-01.md), [price/snapshot](verification/m05-02.md); live intake/publication and commercial approvals pending", match[1]
            assert row[12] == "partially implemented; catalog price/snapshot foundation only", match[1]
        elif match[1] == "NFR-014":
            assert row[10] == "backend/src/server/db/value-schemas.server.ts; backend/src/server/validation.ts; backend/src/server/transport.ts; backend/src/server/errors.ts", match[1]
            assert row[11] == "M02-02 boundary tests: [actual evidence](verification/m02-02.md); owning-feature/UI criteria pending", match[1]
            assert row[12] == "partially implemented; shared value/transport foundation only", match[1]
        elif match[1] in {"FR-09-13", "FR-14-07"}:
            assert row[10] == "backend/src/modules/operations; backend/tests/audit.test.ts", match[1]
            assert row[11] == "M02-03 audit/logging checks: [actual evidence](verification/m02-03.md); identity binding/production monitoring criteria pending", match[1]
            assert row[12] == "partially implemented; local audit/logging foundation only", match[1]
        elif match[1] == "NFR-008":
            assert row[10] == "backend/src/config; frontend/src/config; backend/src/modules/operations; backend/tests/audit.test.ts; scripts/check-public-secrets.mjs", match[1]
            assert row[11] == "M01-02 environment and M02-03 audit/logging: [environment evidence](verification/m01-02.md), [audit evidence](verification/m02-03.md); production/identity gates pending", match[1]
            assert row[12] == "partially implemented; local security foundation only", match[1]
        elif match[1] in {"FR-14-06", "NFR-004"}:
            assert row[10] == "backend/scripts/db; backend/src/server/db/model-registry.server.ts; backend/src/server/db/index-plan.server.ts; docs/runbooks/database-changes.md", match[1]
            assert row[11] == "M02-05 operational rehearsal: [actual evidence](verification/m02-05.md); actual backup/recovery policy and restore evidence pending", match[1]
            assert row[12] == "partially implemented; change/fixture procedures only; actual backup deferred", match[1]
        elif match[1] in {"FR-01-01", "NFR-003"}:
            assert row[10] == "frontend/src/styles; frontend/src/components/theme; frontend/public/appearance.css; frontend/public/appearance.js; frontend/public/fonts", match[1]
            assert row[11] == "M04-01 theme/font checks: [actual evidence](verification/m04-01.md); full-page accessibility/performance criteria pending", match[1]
            assert row[12] == "partially implemented; presentation foundation only", match[1]
        elif match[1] in {"FR-04-01", "FR-04-03"}:
            assert row[10] == "backend/src/modules/catalog; frontend/src/app/(public)/services; frontend/src/modules/catalog/templates", match[1]
            assert row[11] == "M05-01/03 registry and local category preview checks: [registry](verification/m05-01.md), [pages](verification/m05-03.md); source publication/commercial gates pending" + ("; [local Home/Services conversion](verification/home-services-conversion.md); full-task/publication gates retained" if match[1] == "FR-04-03" else ""), match[1]
            assert row[12] == "partially implemented; local services/category preview only", match[1]
        elif match[1] == "BR-005":
            assert row[10] == "backend/src/modules/catalog; backend/scripts/catalog/check.ts; frontend/src/modules/catalog/data/navigation.generated.json", match[1]
            assert row[11] == "M05-01 source/registry checks: [actual evidence](verification/m05-01.md); public pages/price snapshots/commercial approvals pending", match[1]
            assert row[12] == "partially implemented; draft catalog/route foundation only", match[1]
        elif match[1] == "NFR-010":
            assert row[10] == "[Foundation manifests/configuration](../package.json); frontend/src/app; backend/src; scripts/check-boundaries.mjs", match[1]
            assert row[11] == "M01-01 and M02-01 foundation checks: [M01 evidence](verification/m01-01.md), [database evidence](verification/m02-01.md); remaining feature criteria pending", match[1]
            assert row[12] == "partially implemented; M01/M02 foundation only", match[1]
        else:
            assert row[10] == "None" and row[11].startswith("Not run;"), match[1]
        assert set(re.findall(r"M\d{2}-\d{2}", row[8])) <= tasks, match[1]
        assert "accepted" not in row[12] and "verified" not in row[12], match[1]
    check("all 236 source contracts preserved; named foundation/public-batch requirement rows contain partial evidence only", True)
    check("qualified future slices not promoted", all("deferred" in trace[k][12] or "conditional" in trace[k][12] for k in ["FR-04-10", "FR-08-15", "FR-14-11", "FR-14-12", "FR-14-13", "NFR-013", "NFR-015", "EXT-001", "EXT-002", "EXT-003"]))

    def inventory(text):
        return keyed([r for r in table_rows(text) if len(r) == 5], PAGE)

    master_pages, sitemap_pages = inventory(master), inventory(site)
    pages = keyed(table_rows(read("docs/page-inventory.md")), PAGE)
    check("215 master/sitemap/register IDs reconcile exactly", len(master_pages) == len(sitemap_pages) == len(pages) == 215 and master_pages == sitemap_pages and set(pages) == set(master_pages))
    source_details = keyed([r for r in table_rows(between(site, "## 3. Public page inventory", "## 5. Public navigation")) if len(r) == 7 and len(r) > 2 and r[2].startswith("`")], PAGE)
    page_requirements = keyed([r for r in table_rows(between(site, "## 3. Public page inventory", "## 5. Public navigation")) if len(r) == 8], PAGE)
    bindings = {}
    for row in table_rows(between(roadmap, "## 5. Public, staff", "## 6. Per-page")):
        match = re.match("(" + PAGE + r") \u2014 ", row[0])
        if match:
            assert match[1] not in bindings
            bindings[match[1]] = row
    phase_counts = Counter()
    conditional = []
    for ident, source_row in master_pages.items():
        row = pages[ident]
        assert row[1:5] == source_row[1:5], ident
        assert row[5:7] == [source_details[ident][4], source_details[ident][6]], ident
        assert row[7] == ", ".join(re.findall(REQ, page_requirements[ident][-1])), ident
        assert set(re.findall(REQ, row[7])) <= set(trace), ident
        phase = re.match(r"P2/P3|P[123]", row[3])[0]
        phase_counts[phase] += 1
        if phase == "P1":
            assert row[8] == bindings[ident][3], ident
            assert re.match(r"`[^`]+`", bindings[ident][1])[0] == row[2], ident
            assert row[9] == bindings[ident][5].replace("](#", "](sources/07-development-roadmap.md#"), ident
            if row[4] == "C":
                conditional.append(ident)
                if ident in {"ADM-021", "ADM-022", "ADM-023", "ADM-024", "ADM-025", "ADM-027"}:
                    assert row[12] == "not selected; approved alternative pending verification", ident
                    assert "m00-03-remaining-decisions.md" in row[10], ident
                else:
                    assert row[12] == "conditional", ident
                assert row[10] != "Source phase/approval/readiness qualifications apply", ident
        else:
            assert row[12] == "deferred", ident
        if ident in {'PUB-002', 'PUB-S011', 'PUB-S045', 'PUB-S022', 'PUB-S008', 'CAT-04', 'SOL-03', 'PUB-008', 'PUB-012', 'PUB-S032', 'CAT-06', 'PUB-S047', 'CAT-05', 'PUB-S039', 'PUB-S044', 'PUB-S029', 'PUB-S053', 'SOL-05', 'PUB-S001', 'PUB-S054', 'PUB-005', 'PUB-018', 'PUB-S007', 'SOL-04', 'SOL-02', 'PUB-S026', 'PUB-010', 'PUB-S055', 'SOL-01', 'PUB-001', 'CAT-03', 'PUB-S012', 'PUB-S013', 'PUB-S024', 'PUB-S019', 'PUB-S009', 'PUB-017', 'PUB-S005', 'PUB-S038', 'PUB-S043', 'PUB-S006', 'PUB-S025', 'PUB-S057', 'PUB-S042', 'PUB-S051', 'CAT-08', 'PUB-S021', 'PUB-S034', 'PUB-S048', 'PUB-S050', 'PUB-S027', 'PUB-S031', 'PUB-S010', 'PUB-S056', 'PUB-S018', 'PUB-006', 'PUB-S030', 'PUB-S028', 'PUB-014', 'PUB-S040', 'PUB-S003', 'PUB-S036', 'PUB-S020', 'CAT-02', 'PUB-S046', 'PUB-013', 'PUB-S033', 'PUB-S004', 'PUB-S052', 'PUB-S035', 'CAT-07', 'PUB-S037', 'PUB-S015', 'PUB-015', 'PUB-003', 'PUB-S023', 'PUB-S016', 'PUB-016', 'PUB-S049', 'CAT-01', 'PUB-S014', 'PUB-S041', 'PUB-004', 'PUB-S017', 'PUB-S002'}:
            assert row[3] == "P1" and row[4] == "A", ident
            assert row[12] == "partially implemented; local public preview; publication gates retained", ident
            assert "public-website-batch-01.md" in row[11], ident
        else:
            assert row[11] == "None; no application tests run", ident
    check("all exact names/routes/phases/provenance/access/indexing/requirement bindings preserved", True)
    check("124 P1 + 62 P2 + 28 P3 + 1 Product Terms; 124 P1 task/template bindings", phase_counts == {"P1": 124, "P2": 62, "P3": 28, "P2/P3": 1} and len(bindings) == 124)
    check("all 12 conditional P1 interfaces remain gated", set(conditional) == {"TRU-01", "TRU-02", "TRU-03", "STA-002", "STA-003", "STA-004", "ADM-021", "ADM-022", "ADM-023", "ADM-024", "ADM-025", "ADM-027"})

    catalog = table_rows(read("docs/catalog-register.md"))
    service_rows = keyed(catalog, r"SVC-\d{3}")
    category_rows = keyed(catalog, r"CAT-\d{2}")
    solution_rows = keyed(catalog, r"SOL-\d{3}")
    source_services, memberships = {}, []
    source_catalog = between(master, "## 4. Services and existing pricing", "## 5. Business solutions")
    for i, block in enumerate(re.split(r"(?m)^### ", source_catalog)[1:], start=1):
        cid = f"CAT-{i:02d}"
        ids = []
        for row in table_rows(block):
            if re.fullmatch(r"SVC-\d{3}", row[0]):
                source_services.setdefault(row[0], row)
                ids.append(row[0])
                memberships.append((cid, row[0]))
        assert category_rows[cid][1:3] == sitemap_pages[cid][1:3], cid
        assert category_rows[cid][3] == ", ".join(ids) and int(category_rows[cid][4]) == len(ids), cid
    check("8 categories, 57 services and 58 memberships", len(category_rows) == 8 and len(source_services) == len(service_rows) == 57 and len(memberships) == 58)
    for ident, source_row in source_services.items():
        row = service_rows[ident]
        assert row[1] == source_row[1] and row[6] == source_row[2], ident
        assert row[2] == ", ".join(cid for cid, sid in memberships if sid == ident), ident
        assert row[3] == "PUB-S" + ident[-3:] and row[4] == pages[row[3]][2] and row[5] == "P1", ident
    check("57 exact names/prices/routes/memberships; one cross-listed SVC-009 identity", service_rows["SVC-009"][2] == "CAT-02, CAT-07")
    source_solutions = keyed(table_rows(between(master, "## 5. Business solutions", "## 6. Sales")), r"SOL-\d{3}")
    for ident, source_row in source_solutions.items():
        row = solution_rows[ident]
        assert row[1] == source_row[1] and row[5:8] == source_row[2:5], ident
        assert row[2] == "SOL-" + ident[-2:] and row[3] == pages[row[2]][2] and row[4] == "P1", ident
    check("5 exact solution identities/routes and all 15 tier prices", len(solution_rows) == len(source_solutions) == 5)
    check("65 disjoint category/service URLs", len({r[2] for r in category_rows.values()} | {r[4] for r in service_rows.values()}) == 65)

    progress = read("PROGRESS.md")
    task_rows = {}
    for row in table_rows(progress):
        match = re.match(r"\[(M\d{2}-\d{2})\]", row[0])
        if match:
            assert match[1] not in task_rows
            task_rows[match[1]] = row
    check("15 milestones and 87 unique tracked roadmap tasks", len(keyed(table_rows(progress), r"M\d{2}")) == 15 and len(tasks) == len(task_rows) == 87 and set(tasks) == set(task_rows))
    for match in re.finditer(r"^#### (M\d{2}-\d{2}) \u2014 (.+)$", roadmap, re.M):
        end = roadmap.find("\n#### M", match.end())
        if end == -1:
            end = roadmap.index("\n## 5.", match.end())
        block = roadmap[match.end():end]
        deps = re.search(r"^\*\*Dependencies:\*\* (.+)$", block, re.M)[1].strip()
        row = task_rows[match[1]]
        assert row[1] == match[2], match[1]
        assert row[3] == deps.replace("](#", "](docs/sources/07-development-roadmap.md#"), match[1]
        if match[1] in {'M06-06', 'M04-04', 'M09-09', 'M06-03', 'M04-05', 'M09-07', 'M06-04', 'M09-01', 'M09-08', 'M06-05', 'M10-01'}:
            assert row[4] == "partial local public batch; owner acceptance and full task gates pending", match[1]
            assert "docs/verification/public-website-batch-01.md" in row[5], match[1]
            assert "Scoped scheduling amendment" in read("DECISIONS.md")
        elif match[1] in {'M09-02', 'M09-05', 'M09-04', 'M09-03', 'M09-06'}:
            assert row[4] == "partial; local content review complete; commercial publication and owner acceptance pending", match[1]
            assert "docs/verification/public-catalog-review.md" in row[5], match[1]
        elif match[1] == "M12-04":
            assert row[4] == "local checkpoint owner-accepted; final assets, human and release gates pending", match[1]
            assert "docs/verification/public-quality.md" in row[5], match[1]
        elif match[1] == "M09-10":
            assert row[4] == "partial local public audit verified; publication and reading integration gates pending", match[1]
            assert "docs/verification/public-inventory.md" in row[5], match[1]
        elif match[1] == "M10-02":
            assert row[4] == "partial local public SEO; publication and full task gates pending", match[1]
            assert "docs/verification/m10-02-local.md" in row[5], match[1]
        elif match[1] == "M00-01":
            assert row[4] in {"review-ready; owner acceptance pending", "owner-accepted"}, match[1]
            if row[4] == "owner-accepted":
                report = read("docs/verification/m00-01.md")
                assert "approve M00-01 as completed" in report and "2026-11-04" in report
        elif match[1] == "M00-02":
            assert row[4] == "planning prepared; owner decisions pending", match[1]
            assert "Full M00-02 acceptance is not met." in read("docs/verification/m00-02.md")
        elif match[1] == "M00-03":
            assert row[4] == "owner-accepted", match[1]
            assert "docs/verification/m00-03.md" in row[5], match[1]
            m00_03_report = read("docs/verification/m00-03.md")
            assert "owner-accepted on 2026-11-07" in m00_03_report and "Approve and next." in m00_03_report
            staff_policy = read("docs/architecture/decisions/m00-03-staff-policy.md")
            assert "Approval field: **owner-confirmed on 2026-11-05**" in staff_policy
            assert "Confirmed. Implement and test." in staff_policy
            crm_policy = read("docs/architecture/decisions/m00-03-crm-policy.md")
            assert "**Approval: owner-confirmed on 2026-11-07.**" in crm_policy
            assert "confirm and next" in crm_policy
            assert "**Approval: owner-confirmed on 2026-11-07.**" in read("docs/content-publication.md")
            packet = read("docs/architecture/decisions/m00-03-remaining-decisions.md")
            assert "Packet approval field: **owner-confirmed on 2026-11-07**" in packet
            assert "Approve and next." in packet
            gate_pattern = r"^\| ((?:D-\d{3}|A5-\d{2}|U-\d{2}|U4-\d{2}|O-\d{2})) \|"
            gate_ids = re.findall(gate_pattern, read("docs/architecture/decisions/source-decisions.md"), re.M)
            packet_ids = re.findall(gate_pattern, packet, re.M)
            assert len(packet_ids) == len(set(packet_ids)) == 62
            assert set(packet_ids) == set(gate_ids)
        elif match[1] == "M01-01":
            assert row[4] == "owner-accepted", match[1]
            assert "docs/verification/m01-01.md" in row[5], match[1]
            report = read("docs/verification/m01-01.md")
            assert "owner-accepted on 2026-11-07" in report and "Approve and next" in report
        elif match[1] == "M01-02":
            assert row[4] == "owner-accepted", match[1]
            assert "docs/verification/m01-02.md" in row[5], match[1]
            report = read("docs/verification/m01-02.md")
            assert "Approve current thing and go next" in report and "2026-11-07" in report
            assert "scoped scheduling amendment" in read("DECISIONS.md")
            assert "owner-accepted on 2026-11-08" in report and "Approve and next." in report
        elif match[1] == "M01-03":
            assert row[4] == "owner-accepted", match[1]
            assert "docs/verification/m01-03.md" in row[5], match[1]
            report = read("docs/verification/m01-03.md")
            assert "owner-accepted on 2026-11-07" in report and "Approve and next." in report
        elif match[1] == "M02-01":
            assert row[4] == "owner-accepted", match[1]
            assert "docs/verification/m02-01.md" in row[5]
            report = read("docs/verification/m02-01.md")
            assert "2026-11-08" in report and "Approve and next." in report
        elif match[1] == "M02-02":
            assert row[4] == "owner-accepted", match[1]
            assert "docs/verification/m02-02.md" in row[5]
            assert "Approve and next." in read("docs/verification/m02-02.md")
        elif match[1] == "M02-03":
            assert row[4] == "owner-accepted", match[1]
            assert "docs/verification/m02-03.md" in row[5]
            assert "Approve and next." in read("docs/verification/m02-03.md")
        elif match[1] == "M02-05":
            assert row[4] == "owner-accepted", match[1]
            assert "docs/verification/m02-05.md" in row[5]
            assert "Approve and next." in read("docs/verification/m02-05.md")
        elif match[1] == "M03-01":
            assert row[4] == "local implementation owner-accepted; activation/MFA/production gates retained", match[1]
            assert "docs/verification/m03-01.md" in row[5]
        elif match[1] == "M03-02":
            assert row[4] == "local shared capability owner-accepted; future integration/security/activation gates retained", match[1]
            assert "docs/verification/m03-02.md" in row[5]
        elif match[1] == "M03-03":
            assert row[4] == "local implementation owner-accepted; real staging/delivery/custody/activation gates retained", match[1]
            assert "docs/verification/m03-03.md" in row[5]
        elif match[1] == "M03-04":
            assert row[4] == "local tooling owner-accepted; real operations/custody/staging/release gates retained", match[1]
            assert "docs/verification/m03-04.md" in row[5]
        elif match[1] == "M03-05":
            assert row[4] == "local verification complete; owner acceptance pending; staging/operations/custody/release gates retained", match[1]
            assert "docs/verification/m03-05.md" in row[5]
        elif match[1] == "M04-02":
            assert row[4] == "owner-accepted; human checks deferred by owner", match[1]
            assert "docs/verification/m04-02.md" in row[5]
        elif match[1] == "M04-03":
            assert row[4] == "owner-accepted; human checks deferred by owner", match[1]
            assert "docs/verification/m04-03.md" in row[5]
        elif match[1] == "M05-01":
            assert row[4] == "owner-accepted", match[1]
            assert "docs/verification/m05-01.md" in row[5]
        elif match[1] == "M05-02":
            assert row[4] == "owner-accepted", match[1]
            assert "docs/verification/m05-02.md" in row[5]
        elif match[1] == "M05-03":
            assert row[4] == "owner-accepted; publication/human gates retained", match[1]
            assert "docs/verification/m05-03.md" in row[5]
        elif match[1] == "M05-04":
            assert row[4] == "owner-accepted; publication/human gates retained", match[1]
            assert "docs/verification/m05-04.md" in row[5]
        elif match[1] == "M05-05":
            assert row[4] == "owner-accepted; publication/human gates retained", match[1]
            assert "docs/verification/m05-05.md" in row[5]
        elif match[1] == "M06-01":
            assert row[4] == "owner-accepted", match[1]
            assert "docs/verification/m06-01.md" in row[5]
        elif match[1] == "M02-04":
            assert row[4] == "local foundation owner-accepted; production/UI/activation gates retained", match[1]
            assert "docs/verification/m02-04.md" in row[5]
        elif match[1] == "M06-02":
            assert row[4] == "local implementation owner-accepted; live gates retained", match[1]
            assert "docs/verification/m06-02.md" in row[5]
        elif match[1] == "M04-01":
            assert row[4] == "owner-accepted", match[1]
            assert "docs/verification/m04-01.md" in row[5]
            assert "Approve and next." in read("docs/verification/m04-01.md")
        elif match[1] in {"M06-08", "M06-09", "M07-09", "M08-06", "M08-07", "M11-04", "M11-05", "M11-06"}:
            assert row[4] == "not selected; approved baseline alternative", match[1]
            assert "Conditional P1 branch" in row[2], match[1]
            assert "m00-03-remaining-decisions.md" in row[5], match[1]
        else:
            assert row[4] == "not started", match[1]
    check("dependencies unchanged; M00-01/M00-03/M01-01/M01-03 accepted; M00-02 decisions pending; approved optional branches not selected; M01-02 accepted with explicit local-contract amendment; M02-01 accepted; M02-02 accepted; M02-03 accepted; M02-05 accepted; M04-01 accepted; M04-02 accepted with human checks deferred; M04-03 accepted with human checks deferred; M05-01 accepted; M05-02 accepted; M05-03 accepted with publication/human gates retained; M05-04 accepted with publication/human gates retained; M05-05 accepted with publication/human gates retained; M06-01 accepted; M00-02 scoped local contract accepted; M06-02 local implementation accepted with live gates retained; M00-03 local abuse policy approved; M02-04 local foundation accepted with production/UI/activation gates retained; M00-02 failed-fit evidence accepted; session-only proof evidence accepted; credential/TOTP proof accepted; informed recovery amendment approved; recovery proof accepted; local composition adopted for M03-01; M03-01 locally owner-accepted with activation/MFA/production gates retained; M03-02 local capability owner-accepted; M03-03 locally owner-accepted with full staging/delivery/custody/activation gates retained; M03-04 local tooling owner-accepted with actual operations/custody/staging/release evidence retained; M03-05 locally verified with owner acceptance and real staging/operations/custody/release evidence pending; public-first batch partial local slices retain task/launch gates; other tasks not started", True)

    decision_rows = table_rows(read("docs/architecture/decisions/source-decisions.md"))
    families = [
        ("01-master-requirements.md", r"D-\d{3}", 25),
        ("02-pages-sitemap.md", r"O-\d{2}", 7),
        ("03-page-sections.md", r"U-\d{2}", 6),
        ("04-design-system-wireframes.md", r"U4-\d{2}", 10),
        ("05-database-architecture.md", r"A5-\d{2}", 14),
        ("05-database-architecture.md", r"ADR-\d{2}", 20),
        ("09-content-assets.md", r"CR-\d{2}", 17),
        ("12-business-operations.md", r"O12-\d{2} / .+", 15),
        ("13-post-launch-growth.md", r"O13-\d{2} / .+", 17),
    ]
    for filename, pattern, count in families:
        expected = {}
        for row in table_rows(sources[filename]):
            if re.fullmatch(pattern, row[0]):
                expected.setdefault(row[0], row)
        actual = keyed(decision_rows, pattern)
        assert expected == actual and len(actual) == count, filename + " " + pattern
    check("131 inherited D/O/U/U4/A5/ADR/CR/O12/O13 rows preserved with original qualifications", True)
    docs = [ROOT / n for n in ["README.md", "AGENTS.md", "PROGRESS.md", "DECISIONS.md", "docs/source-baseline.md", "docs/traceability.md", "docs/page-inventory.md", "docs/catalog-register.md", "docs/architecture/decisions/source-decisions.md", "docs/verification/m00-01.md"]]
    for path in docs:
        for target in re.findall(r"\]\(([^)]+)\)", path.read_text(encoding="utf-8")):
            target = target.split("#", 1)[0]
            if target and not re.match(r"https?://", target):
                assert (path.parent / target).exists(), f"Broken link in {path.name}: {target}"
    check("management document local links resolve", True)
    accepted = task_rows["M00-01"][4] == "owner-accepted"
    print("RESULT: M00-01 documentation consistency PASS; " + ("owner acceptance recorded." if accepted else "owner acceptance pending."))


if __name__ == "__main__":
    main()
