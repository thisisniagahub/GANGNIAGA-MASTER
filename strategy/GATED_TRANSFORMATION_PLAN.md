> Migrated from chat5.md on 2026-07-15. Original preserved in git history.

# Gated Transformation Plan

> **Gated Transformation Plan**
>
> Version: 1.0.0
>
> Status: Active
>
> Repository: `thisisniagahub/GANGNIAGA-MASTER`

---

Plan kita sekarang ialah naik taraf GangNiaga daripada documentation blueprint kepada **Enterprise Executive Intelligence Programme**—secara berperingkat, bukan generate semua fail sekaligus.

## Pelan pelaksanaan

### G0 — Enterprise discovery

Sediakan asas sebelum mengubah Constitution:

- Business outcomes dan masalah sebenar yang GangNiaga selesaikan.
- Executive use cases.
- Business capability map.
- Risk appetite dan prohibited uses.
- Decision rights dan RACI.
- Success metrics.
- Jurang struktur Blueprint v1.

Output: Enterprise Programme Charter dan cadangan Blueprint v2.

### G1 — Governance reset

Buat constitutional ADR:

```text
ADR-0006-CONTROLLED-REPOSITORY-EVOLUTION.md
```

ADR ini akan:

- Menggantikan absolute structural lock dengan controlled change.
- Menentukan siapa boleh meluluskan folder/fail baharu.
- Menentukan review, migration dan rollback.
- Menyelesaikan keputusan `GLOSSORY.md` versus `GLOSSARY.md`.
- Tidak mencampurkan keputusan LICENSE.

Kemudian selaraskan secara atomik:

- `CONSTITUTION.md`
- `MASTER.md`
- `DOCUMENT_MAP.md`
- `README.md`
- `CONTRIBUTING.md`

### G2 — TODO v2 dan document control

Tukar [TODO.md](F:/TODO.md) daripada 435 checkbox biasa kepada programme backlog.

Setiap task akan mempunyai:

```text
ID
Outcome
Owner
Approver
Priority
Risk tier
Dependencies
Deliverable
Acceptance criteria
Evidence
Control mapping
Review date
Status
```

Active task truth menggunakan GitHub Issues/Project. `TODO.md` menjadi dashboard, bukan sumber tunggal.

Pada gate ini juga kita betulkan:

- Diagram authority dalam `MASTER.md`.
- Architecture/ADR order dalam `DOCUMENT_MAP.md`.
- Stale status.
- Clickable internal links.
- Canonical content ownership.

### G3 — Business dan operating model

Bina:

- Corporate strategy alignment.
- Value streams.
- Business capability model.
- Executive use-case portfolio.
- Product/service ownership.
- Enterprise RACI.
- KPI/OKR tree.
- Benefits-realization register.
- Management-review cadence.

### G4 — Enterprise control foundation

Wujudkan shared registers dahulu:

- AI/system/agent inventory.
- Data catalog dan lineage.
- Enterprise risk register.
- Control register.
- Policy register.
- Supplier/vendor register.
- Service catalog.
- Decision register.
- Regulatory-obligation register.
- Evidence index.

Selepas shared baseline siap, kerja boleh didelegasikan secara selari:

```text
Enterprise Architecture
├── AI & Data Governance
├── Security & Privacy
├── Risk & Compliance
└── Knowledge & Records Governance
```

### G5 — Pre-pilot engineering controls

Sediakan minimum controls sebelum runtime dibina:

- Secure SDLC.
- Identity dan deny-by-default permissions.
- Secrets management.
- Dependency inventory dan SBOM.
- Artifact provenance.
- Sandbox dan isolated environments.
- Logging, tracing dan audit.
- Human approval gates.
- Kill switch.
- Incident dan rollback runbooks.
- AI cost/spend limits.

### G6 — Assurance dan automation

Bina docs-as-code CI:

- Markdown/link validation.
- Metadata-schema validation.
- Authority/status validation.
- Secret scanning.
- Filename/case checks.
- Duplicate-content detection.
- Stale-document detection.
- Control-to-evidence validation.
- CODEOWNERS dan required reviewers.

Automation hanya dibuat selepas control objective dan owner stabil.

### G7 — Controlled pilot

Pilih hanya satu bounded use case.

Pilot mesti ada:

- Business owner.
- AI/data impact assessment.
- Threat model.
- TEVV dan adversarial evaluation.
- Non-production environment.
- Human approval.
- Audit trail.
- Kill switch dan rollback.
- Quality, safety, latency dan cost thresholds.
- Explicit pass/fail/stop criteria.

### G8 — Production-readiness

Sebelum production:

- Independent review.
- SLO dan error budget.
- Incident/on-call ownership.
- BIA serta RTO/RPO.
- Backup/restore dan DR exercise.
- Security/privacy approval.
- Vendor due diligence.
- FinOps unit economics.
- Residual-risk acceptance.
- Post-launch monitoring plan.

## Urutan PR

```text
PR 1  Governance reset and constitutional ADR
PR 2  Document control and TODO v2
PR 3  Strategy, capability map and operating model
PR 4  Shared inventories and enterprise registers
PR 5  AI and data governance
PR 6  Security, privacy, risk and compliance
PR 7  Enterprise target architecture
PR 8  Engineering, operations and FinOps
PR 9  Assurance and automated validation
PR 10 Controlled pilot readiness
```

Setiap PR mesti kecil, boleh direview dan boleh dirollback.

## Tindakan pertama

Langkah pertama yang aku cadangkan:

1. Audit dan lindungi perubahan `GLOSSORY.md → GLOSSARY.md` yang sedang berada dalam worktree.
2. Rewrite `F:\TODO.md` menjadi **Enterprise Transformation TODO v2**.
3. Sediakan draft G0: business outcomes, decision rights, risk appetite dan Blueprint v2 requirements.
4. Selepas kau review G0, barulah kita hasilkan constitutional ADR dan PR pertama.

Kita tidak akan terus generate 39 fail lama. Kita bina governance dan programme control dahulu, kemudian delegasikan setiap domain kepada workstream berasingan.