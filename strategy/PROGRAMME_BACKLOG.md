> Migrated from chat1.md on 2026-07-15. Original preserved in git history.

# GANGNIAGA — Enterprise Transformation TODO v2

> **Document ID:** `GN-PROGRAM-TODO-002`  
> **Document type:** Controlled enterprise-transformation backlog  
> **Version:** `2.0.0-draft`  
> **Status:** Draft — no authority until approved  
> **Programme:** Company Knowledge & Executive Intelligence Platform  
> **Current phase:** Foundation transformation  
> **Canonical home:** `<decide in GN-G0-004>`  
> **Executive sponsor:** `<role/name>`  
> **Programme owner:** `<role/name>`  
> **Approver:** `<governance authority>`  
> **Security classification:** `<Public/Internal/Confidential/Restricted>`  
> **Baseline commit:** `<commit SHA>`  
> **Effective date:** `<YYYY-MM-DD>`  
> **Next review:** `<YYYY-MM-DD>`  
> **Review cadence:** `<weekly/monthly/quarterly>`  
> **Supersedes:** `F:\TODO.md — Locked Blueprint Completion TODO`  
> **Important:** “Enterprise-grade” is a programme target, not a certification claim.

---

## 0. Operating Instructions

### Status vocabulary

| Code | Meaning |
|---|---|
| `NS` | Not started |
| `IP` | In progress |
| `B` | Blocked |
| `R` | Ready for review |
| `D` | Done with accepted evidence |
| `N/A` | Formally declared not applicable with approval |

### Risk tiers

| Tier | Meaning |
|---|---|
| `R1` | Low impact; easily reversible |
| `R2` | Moderate impact |
| `R3` | High business, security, privacy, legal, financial, or architectural impact |
| `R4` | Critical; affects constitutional authority, production safety, regulated data, identity, payments, destructive execution, or organizational continuity |

### Maturity model

| Level | Meaning |
|---|---|
| `M0` | Absent |
| `M1` | Documented |
| `M2` | Approved and owned |
| `M3` | Implemented and repeatable |
| `M4` | Measured and independently assured |
| `M5` | Continuously optimized |

A task is not done merely because a file exists. `D` requires accepted evidence.

### Task evidence rule

Every completed task must identify:

- evidence URI or repository path;
- responsible owner;
- accountable approver;
- approval date;
- applicable requirement, risk, control, ADR, test, or metric IDs;
- unresolved limitations;
- next review date.

---

## 1. Programme Principles

1. Business outcomes precede technology selection.
2. Evidence precedes authoritative claims.
3. Human executives remain accountable for consequential decisions.
4. Current state, target state, transition state, implemented state, and validated state remain distinct.
5. One fact set has one canonical home; other documents link to it.
6. Security, privacy, safety, accessibility, resilience, and auditability are designed in.
7. Risk controls are proportional to impact.
8. Least privilege and separation of duties apply to humans, agents, tools, services, and plugins.
9. Models, vendors, frameworks, and execution engines remain replaceable unless an approved decision states otherwise.
10. Architecture decisions are traceable, reversible where practical, and supported by explicit trade-offs.
11. Controls should be automated where reliable, with documented human override.
12. No architecture description proves implementation.
13. No implementation claim is accepted without tests and operational evidence.
14. Enterprise readiness is measured through outcomes, controls, and service performance—not document volume.
15. Lessons, incidents, experiments, and delivery outcomes return to organizational knowledge.

---

## 2. Source-of-Truth Model

| Information class | Canonical source |
|---|---|
| Constitutional authority | `CONSTITUTION.md` and approved constitutional ADRs |
| Repository operating doctrine | `MASTER.md` |
| Approved decisions | ADR register and approved ADRs |
| Strategy and business outcomes | Approved strategy, capability, and benefits registers |
| Architecture | Approved current, target, and transition architecture records |
| Active delivery state | GitHub issues/projects, PRs, checks, and release records |
| Risks and controls | Risk, obligation, control, exception, and evidence registers |
| Operational truth | Service catalog, telemetry, incidents, SLO reports, deployment and recovery evidence |
| Curated organizational knowledge | Knowledge domain and approved research artifacts |
| Local scratch work | Non-authoritative; must not become the only copy of programme truth |

---

# G0 — Control the Baseline and Authorize Transformation

**Gate objective:** Establish an auditable baseline, resolve the worktree conflict, and formally authorize movement from locked Blueprint v1 to governed Blueprint v2.

**Exit gate:** Clean and preserved worktree; approved constitutional decision; controlled programme backlog; verified baseline and source-of-truth model.

### [x] GN-G0-001 — Control this programme document

- **Deliverable:** Approved document-control record and canonical programme backlog location.
- **Owner / approver:** `<Programme Manager>` / `<Executive Sponsor>`
- **Dependencies / risk:** `None` / `R3`
- **Acceptance & evidence:** One canonical backlog is versioned, access-controlled, review-dated, and linked to active work; no competing authoritative TODO exists. [Evidence: `strategy/PROGRAMME_CONTROL_RECORD.md`]
- **Status:** `D`

### [x] GN-G0-002 — Preserve and resolve the current glossary worktree conflict

- **Deliverable:** Evidence-backed disposition of "D GLOSSARY.md" and "?? GLOSSARY.md" without losing either version.
- **Owner / approver:** `<Repository Maintainer>` / `<Documentation Governance Owner>`
- **Dependencies / risk:** `GN-G0-001` / `R4`
- **Acceptance & evidence:** Both versions are backed up or diffed; intended filename is explicitly approved; all references are migrated atomically; `git status` contains no unexplained change. See `implementation/GLOSSARY_RESOLUTION.md` for resolution evidence.
- **Status:** `D`

### [x] GN-G0-003 — Authorize Blueprint v2 through constitutional governance

- **Deliverable:** Constitutional ADR identifying affected clauses, replacement wording, rationale, alternatives, impacts, migration, and approval.
- **Owner / approver:** `<Governance Lead>` / `<Constitutional Approver>`
- **Dependencies / risk:** `GN-G0-002` / `R4`
- **Acceptance & evidence:** ADR explicitly addresses `CONSTITUTION.md` governance and amendment clauses; approval is recorded; conflicting root documents are updated together or covered by a bounded migration plan. [Evidence: `adr/ADR-0008-BLUEPRINT-V2.md`]
- **Status:** `D`

### [x] GN-G0-004 — Ratify the enterprise source-of-truth model

- **Deliverable:** Approved ownership map for authority, strategy, decisions, architecture, delivery, evidence, operations, and knowledge.
- **Owner / approver:** `<Information Governance Lead>` / `<Executive Sponsor>`
- **Dependencies / risk:** `GN-G0-003` / `R3`
- **Acceptance & evidence:** Every information class has one canonical system, owner, retention rule, access model, and synchronization rule; duplicate authoritative homes equal zero. Evidence: `strategy/SOURCE_OF_TRUTH_MODEL.md`
- **Status:** `R`

### [x] GN-G0-005 — Establish repository and document baseline

- **Deliverable:** Signed baseline manifest of tracked files, untracked local artifacts, branches, commits, open PRs, document versions, statuses, links, and known contradictions.
- **Owner / approver:** `<Repository Maintainer>` / `<Programme Assurance Lead>`
- **Dependencies / risk:** `GN-G0-002` / `R3`
- **Acceptance & evidence:** Manifest is reproducible from commands; 100% of root documents are classified; all deviations have issue IDs and owners.
- **Status:** `D` — Evidence: `strategy/BASELINE_MANIFEST.md`

### [x] GN-G0-006 — Define controlled metadata and status schemas

- **Deliverable:** Machine-valid document metadata schema and orthogonal lifecycle, approval, implementation, assurance, and maturity vocabularies.
- **Owner / approver:** `<Documentation Architect>` / `<Governance Lead>`
- **Dependencies / risk:** `GN-G0-004` / `R2`
- **Acceptance & evidence:** Schema requires document ID, owner, approver, classification, version, effective date, next review, canonical state, supersession, and retention; validation passes on all controlled documents.
- **Status:** `D` — `standards/METADATA_SCHEMA.md`

### [x] GN-G0-007 — Establish programme governance and delivery controls

- **Deliverable:** Programme charter, decision rights, RACI, escalation path, review cadence, issue hierarchy, and gate-approval process.
- **Owner / approver:** `<Programme Manager>` / `<Executive Sponsor>`
- **Dependencies / risk:** `GN-G0-003` / `R3`
- **Acceptance & evidence:** Every gate and work package has one accountable approver; conflicts of interest and separation-of-duties requirements are recorded.
- **Status:** `D`
- **Evidence URI:** `strategy/PROGRAMME_CHARTER.md`
- **Approval Date:** `2026-07-15`
- **Next Review Date:** `2026-10-15`

---

# G1 — Align Strategy, Business Value, and Operating Model

**Gate objective:** Define why GangNiaga should exist as an enterprise capability and how value will be measured.

**Exit gate:** Approved outcomes, capability map, prioritized use cases, operating model, and benefits roadmap.

### [x] GN-G1-001 — Establish stakeholder and executive accountability

- **Deliverable:** Stakeholder map covering executives, business owners, technology, data, security, privacy, legal, compliance, audit, finance, procurement, operations, employees, and users.
- **Owner / approver:** `<Business Architect>` / `<Executive Sponsor>`
- **Dependencies / risk:** `G0` / `R3`
- **Acceptance & evidence:** 100% of identified stakeholder groups have engagement and decision roles; all critical capabilities have accountable business owners. [Evidence: `strategy/STAKEHOLDER_MAP.md`]
- **Status:** `R`

### [x] GN-G1-002 — Define measurable strategic outcomes

- **Deliverable:** Strategy-on-a-page and outcome/KPI tree.
- **Owner / approver:** `<Strategy Lead>` / `<Executive Committee>`
- **Dependencies / risk:** `GN-G1-001` / `R3`
- **Acceptance & evidence:** Every objective has baseline, numeric target or approved threshold, owner, data source, cadence, and review date; no metric is merely qualitative. [Evidence: `strategy/STRATEGIC_OUTCOMES.md`]
- **Status:** `R`

### [x] GN-G1-003 — Create business capability and value-stream maps

- **Deliverable:** Current and target business capability maps linked to value streams and pain points.
- **Owner / approver:** `<Business Architect>` / `<Business Capability Owners>`
- **Dependencies / risk:** `GN-G1-002` / `R3`
- **Acceptance & evidence:** Every proposed platform capability supports at least one approved business outcome; unsupported capabilities are removed or explicitly deferred. Evidence: `architecture/BUSINESS_CAPABILITY_MAP.md`
- **Status:** `D`

### [ ] GN-G1-004 — Build and prioritize the executive use-case portfolio

- **Deliverable:** Use-case register with beneficiaries, value hypothesis, data needs, risk tier, human accountability, dependencies, cost, and acceptance measures.
- **Owner / approver:** `<Product Lead>` / `<Portfolio Board>`
- **Dependencies / risk:** `GN-G1-003` / `R3`
- **Acceptance & evidence:** All use cases are scored with one approved prioritization method; R4 use cases cannot enter a pilot without dedicated control approval.
- **Status:** `NS`

### [ ] GN-G1-005 — Define the enterprise operating model

- **Deliverable:** Product, platform, service, knowledge, data, AI, security, risk, and support ownership model.
- **Owner / approver:** `<Operating Model Lead>` / `<Executive Sponsor>`
- **Dependencies / risk:** `GN-G1-001`, `GN-G1-003` / `R3`
- **Acceptance & evidence:** Every planned service has business owner, product owner, technical owner, data owner, control owner, and support owner; responsibility gaps equal zero.
- **Status:** `NS`

### [ ] GN-G1-006 — Establish portfolio roadmap and benefits realization

- **Deliverable:** Outcome-based roadmap with transition states, funding assumptions, dependencies, benefit owners, kill criteria, and review gates.
- **Owner / approver:** `<Portfolio Manager>` / `<Investment Committee>`
- **Dependencies / risk:** `GN-G1-002` through `GN-G1-005` / `R3`
- **Acceptance & evidence:** Roadmap traces all funded work to outcomes and risks; each tranche has entry, exit, evidence, stop, and re-prioritization criteria.
- **Status:** `NS`

---

# G2 — Establish Governance, Risk, Legal, and Compliance Controls

**Gate objective:** Create the management system and registers required to govern enterprise use safely and lawfully.

**Exit gate:** Approved risk appetite, obligations, controls, records rules, supplier controls, and auditable governance registers.

### [x] GN-G2-001 — Define the GRC operating model

- **Deliverable:** Governance, risk, compliance, assurance, internal-audit, committee, and escalation model.
- **Owner / approver:** `<Chief Risk/Compliance Role>` / `<Executive Risk Committee>`
- **Dependencies / risk:** `G0`, `GN-G1-005` / `R4`
- **Acceptance & evidence:** Decision rights, independent challenge, assurance ownership, reporting cadence, and material-risk escalation thresholds are approved. [Evidence: `architecture/GRC_OPERATING_MODEL.md`]
- **Status:** `D`

### [x] GN-G2-002 — Approve risk appetite and create the risk register

- **Deliverable:** Risk taxonomy, scoring method, appetite/tolerance statements, and enterprise risk register.
- **Owner / approver:** `<Enterprise Risk Owner>` / `<Risk Committee>`
- **Dependencies / risk:** `GN-G2-001` / `R4`
- **Acceptance & evidence:** Every R3/R4 risk has owner, treatment, due date, residual-risk decision, control links, and escalation path; no overdue unaccepted R4 risk. [Evidence: `architecture/ENTERPRISE_RISK_REGISTER.md`]
- **Status:** `D`

### [x] GN-G2-003 — Build the obligation and framework-applicability register

- **Deliverable:** Jurisdiction, regulation, contract, policy, standard, and certification applicability assessment.
- **Owner / approver:** `<Compliance and Legal Leads>` / `<Executive Risk Committee>`
- **Dependencies / risk:** `GN-G2-001` / `R4`
- **Acceptance & evidence:** Each candidate framework is marked applicable, not applicable, or under review with rationale and legal/compliance owner; no compliance claim lacks evidence. [Evidence: `architecture/OBLIGATION_REGISTER.md`]
- **Status:** `D`

### [x] GN-G2-004 — Create the control and evidence system

- **Deliverable:** Controls library mapped to obligations, risks, systems, owners, tests, evidence, exceptions, and assurance frequency.
- **Owner / approver:** `<Controls Architect>` / `<Assurance Lead>`
- **Dependencies / risk:** `GN-G2-002`, `GN-G2-003` / `R4`
- **Acceptance & evidence:** 100% of accepted material obligations and R3/R4 risks map to controls; every key control has test method and retained evidence. [Evidence: `architecture/CONTROL_AND_EVIDENCE_SYSTEM.md`]
- **Status:** `D`

### [x] GN-G2-005 — Govern privacy, records, legal, IP, and licensing

- **Deliverable:** Privacy governance, records schedule, legal-hold process, IP policy, open-source policy, content-usage rules, and repository-license decision.
- **Owner / approver:** `<Privacy/Legal Counsel>` / `<Authorized Legal Approver>`
- **Dependencies / risk:** `GN-G2-003` / `R4`
- **Acceptance & evidence:** Data retention, deletion, legal hold, copyright, training-data rights, and license posture are approved; `LICENSE` is created only after an explicit decision. [Evidence: `architecture/LEGAL_AND_PRIVACY_GOVERNANCE.md`]
- **Status:** `D`

### [x] GN-G2-006 — Establish third-party and supplier risk management

- **Deliverable:** Supplier inventory, due-diligence model, contract-control checklist, concentration-risk view, data-processing terms, monitoring, and exit plans.
- **Owner / approver:** `<Procurement/Vendor Risk Lead>` / `<Risk Committee>`
- **Dependencies / risk:** `GN-G2-002`, `GN-G2-003` / `R4`
- **Acceptance & evidence:** Every material provider has risk tier, accountable owner, approved terms, monitoring cadence, portability plan, and tested exit criteria where critical. [Evidence: `architecture/SUPPLIER_RISK_MANAGEMENT.md`]
- **Status:** `D`

### [x] GN-G2-007 — Create enterprise governance registers

- **Deliverable:** Decision, ADR, requirement, risk, control, obligation, exception, waiver, audit finding, incident, supplier, data, AI-system, service, SLO, change, and benefits registers.
- **Owner / approver:** `<Information Governance Lead>` / `<Governance Lead>`
- **Dependencies / risk:** `GN-G0-004`, `GN-G2-004` / `R3`
- **Acceptance & evidence:** Registers have schemas, unique IDs, owners, access rules, retention, relationships, and review SLAs; orphan critical records equal zero. [Evidence: `architecture/ENTERPRISE_GOVERNANCE_REGISTERS.md`]
- **Status:** `D`

### [x] GN-G2-008 — Establish controlled-document and knowledge governance

- **Deliverable:** Content ownership matrix, document lifecycle, review cadence, source/citation policy, staleness policy, archival, supersession, and deduplication rules.
- **Owner / approver:** `<Knowledge Governance Lead>` / `<Governance Lead>`
- **Dependencies / risk:** `GN-G0-006`, `GN-G2-007` / `R3`
- **Acceptance & evidence:** Every controlled document has a canonical owner and next review; semantic duplication has an assigned consolidation action; expired documents cannot silently remain authoritative. [Evidence: `knowledge/KNOWLEDGE_GOVERNANCE.md`]
- **Status:** `D`

---

# G3 — Build the Enterprise Architecture and Decision Foundation

**Gate objective:** Establish current, target, and transition architectures governed by approved decisions and measurable requirements.

**Exit gate:** Approved architecture baseline, decision portfolio, traceability, and reconciled Blueprint-v1 knowledge.

### [x] GN-G3-001 — Define the enterprise-architecture metamodel

- **Deliverable:** Required business, information, data, application, integration, technology, security, operating, and deployment views.
- **Owner / approver:** `<Chief/Lead Architect>` / `<Architecture Review Board>`
- **Dependencies / risk:** `G1`, `G2` / `R3`
- **Acceptance & evidence:** Viewpoints, artifacts, owners, relationships, review rules, and ADR triggers are approved; each architecture claim has state and evidence classification. [Evidence: `architecture/ARCHITECTURE_METAMODEL.md`]
- **Status:** `D`

### [x] GN-G3-002 — Document verified current-state architecture

- **Deliverable:** Evidence-backed system context, repositories, tools, data stores, actors, interfaces, processes, controls, and known gaps.
- **Owner / approver:** `<Enterprise Architect>` / `<Architecture Review Board>`
- **Dependencies / risk:** `GN-G0-005`, `GN-G3-001` / `R3`
- **Acceptance & evidence:** Every current-state component is supported by repository, configuration, telemetry, contract, or owner evidence; unsupported runtime claims equal zero. [Evidence: `architecture/CURRENT_STATE_ARCHITECTURE.md`]
- **Status:** `D`

### [ ] GN-G3-003 — Design target-state enterprise architecture

- **Deliverable:** Target architecture covering Executive OS, orchestration, routing, knowledge, memory, workflows, execution, plugins, security, governance, data, integration, and operations.
- **Owner / approver:** `<Architecture Team>` / `<Architecture Review Board>`
- **Dependencies / risk:** `GN-G3-001`, approved relevant ADRs / `R4`
- **Acceptance & evidence:** Boundaries, responsibilities, non-responsibilities, contracts, trust zones, failure modes, NFRs, human approvals, and replaceability are defined; target state is never labelled implemented.
- **Status:** `NS`

### [ ] GN-G3-004 — Define transition architectures

- **Deliverable:** Sequenced transition states from foundation to pilot and production.
- **Owner / approver:** `<Enterprise Architect>` / `<Architecture Review Board>`
- **Dependencies / risk:** `GN-G3-002`, `GN-G3-003` / `R3`
- **Acceptance & evidence:** Every transition maps prerequisites, migrations, dependencies, controls, rollback, coexistence, data movement, and exit evidence.
- **Status:** `NS`

### [ ] GN-G3-005 — Govern the ADR portfolio

- **Deliverable:** ADR lifecycle, template, index, approval record, supersession graph, and initial decision portfolio.
- **Owner / approver:** `<Architecture Governance Lead>` / `<Architecture Review Board>`
- **Dependencies / risk:** `GN-G0-003`, `GN-G2-007` / `R4`
- **Acceptance & evidence:** Only approved ADRs are normative; proposed decisions remain visibly non-authoritative; all target architecture decisions trace to evidence and alternatives.
- **Status:** `NS`

### [ ] GN-G3-006 — Reconcile and materialize useful Blueprint-v1 content

- **Deliverable:** Reviewed root, knowledge, architecture, ADR, standards, templates, roadmap, and implementation documents without blind regeneration.
- **Owner / approver:** `<Documentation Architect>` / `<Architecture and Governance Leads>`
- **Dependencies / risk:** `GN-G2-008`, `GN-G3-001`, `GN-G3-005` / `R3`
- **Acceptance & evidence:** Every baseline path is created, superseded, merged, or intentionally retired with rationale; useful MASTER knowledge is preserved; duplicate authority and shallow boilerplate equal zero.
- **Status:** `NS`

### [ ] GN-G3-007 — Establish requirements, NFR, and architecture traceability

- **Deliverable:** Traceability model from objectives through requirements, risks, controls, ADRs, components, interfaces, tests, evidence, and metrics.
- **Owner / approver:** `<Requirements/Architecture Lead>` / `<Architecture Review Board>`
- **Dependencies / risk:** `GN-G2-004`, `GN-G3-003` / `R4`
- **Acceptance & evidence:** 100% of R3/R4 requirements and controls trace end-to-end; approved numeric targets exist for availability, recovery, performance, security, privacy, cost, and audit where applicable.
- **Status:** `NS`

---

# G4 — Govern Data, Knowledge, Memory, and AI

**Gate objective:** Make enterprise information and AI capabilities trustworthy, controlled, measurable, and reviewable.

**Exit gate:** Approved data/knowledge lifecycle, AI inventory and risk model, evaluation framework, and operating controls.

### [x] GN-G4-001 — Establish enterprise data governance

- **Deliverable:** Data domains, ownership, stewardship, classification, quality, access, retention, residency, consent, deletion, and sharing policies.
- **Owner / approver:** `<Chief Data/Data Governance Lead>` / `<Data Governance Council>`
- **Dependencies / risk:** `G2`, `GN-G3-001` / `R4`
- **Acceptance & evidence:** Every in-scope data domain has owner, classification, quality rules, permitted purposes, lifecycle, and access controls; unknown sensitive-data stores equal zero. [Evidence: `architecture/DATA_GOVERNANCE_POLICY.md`]
- **Status:** `D`

### [ ] GN-G4-002 — Define the enterprise knowledge lifecycle

- **Deliverable:** Capture, verify, synthesize, approve, publish, retrieve, correct, supersede, archive, delete, and revisit processes.
- **Owner / approver:** `<Knowledge Governance Lead>` / `<Data/Knowledge Council>`
- **Dependencies / risk:** `GN-G2-008`, `GN-G4-001` / `R3`
- **Acceptance & evidence:** Knowledge artifacts distinguish fact, evidence, interpretation, recommendation, and decision; freshness and confidence rules are measurable.
- **Status:** `NS`

### [x] GN-G4-003 — Establish taxonomy, ontology, catalog, provenance, and lineage

- **Deliverable:** Enterprise vocabulary, term ownership, metadata catalog, source IDs, provenance chain, and data/knowledge lineage.
- **Owner / approver:** `<Information Architect>` / `<Data Governance Council>`
- **Dependencies / risk:** `GN-G4-001`, `GN-G4-002` / `R3`
- **Acceptance & evidence:** Critical terms and data elements have unique definitions and owners; evidence can be traced to origin, version, retrieval date, transformation, and consumer. [Evidence: `architecture/ENTERPRISE_TAXONOMY_PROVENANCE.md`]
- **Status:** `D`

### [ ] GN-G4-004 — Create the AI use-case and system inventory

- **Deliverable:** Inventory of models, providers, prompts, agents, tools, datasets, embeddings, workflows, decisions, owners, intended uses, prohibited uses, and risk classes.
- **Owner / approver:** `<AI Governance Lead>` / `<AI Risk Committee>`
- **Dependencies / risk:** `GN-G1-004`, `GN-G2-007` / `R4`
- **Acceptance & evidence:** 100% of in-scope AI components and use cases have owner, purpose, data classes, risk tier, human oversight, evaluation status, and decommission plan.
- **Status:** `NS`

### [ ] GN-G4-005 — Define responsible-AI and model-risk controls

- **Deliverable:** Policies for validity, safety, fairness, explainability, transparency, human accountability, contestability, misuse prevention, and residual-risk acceptance.
- **Owner / approver:** `<Responsible AI Lead>` / `<AI Risk Committee>`
- **Dependencies / risk:** `GN-G4-004`, `GN-G2-004` / `R4`
- **Acceptance & evidence:** Control requirements vary by risk tier; every R4 use case requires named human decision authority and explicit residual-risk approval.
- **Status:** `NS`

### [ ] GN-G4-006 — Establish AI, prompt, agent, and tool evaluation

- **Deliverable:** Versioned test sets, quality measures, safety tests, red-team scenarios, regression thresholds, grounding/citation tests, tool-abuse tests, and rollback criteria.
- **Owner / approver:** `<AI Evaluation Lead>` / `<AI Risk and Product Owners>`
- **Dependencies / risk:** `GN-G4-004`, `GN-G4-005` / `R4`
- **Acceptance & evidence:** Each component has approved release thresholds and reproducible results; critical safety regression blocks release automatically.
- **Status:** `NS`

### [ ] GN-G4-007 — Govern memory and context

- **Deliverable:** Memory types, scope, ownership, consent, minimization, isolation, provenance, correction, retention, deletion, summarization, and leakage controls.
- **Owner / approver:** `<AI/Data Architect>` / `<Privacy and AI Governance Leads>`
- **Dependencies / risk:** `GN-G4-001`, `GN-G4-005` / `R4`
- **Acceptance & evidence:** Authoritative knowledge, working memory, preference memory, operational state, and audit records are separated; unauthorized cross-user or cross-tenant recall tests pass.
- **Status:** `NS`

### [ ] GN-G4-008 — Define AI operations and lifecycle management

- **Deliverable:** Approval, release, monitoring, drift, incident, provider/model change, suspension, rollback, and decommissioning processes.
- **Owner / approver:** `<AI Operations Lead>` / `<AI Risk Committee>`
- **Dependencies / risk:** `GN-G4-006`, `GN-G6-005` / `R4`
- **Acceptance & evidence:** Every production AI capability has monitored thresholds, alert owner, fallback, stop mechanism, incident path, and tested rollback/decommission procedure.
- **Status:** `NS`

---

# G5 — Engineer Security, Privacy, Identity, and Trust

**Gate objective:** Define enforceable controls across identities, data, agents, integrations, infrastructure, and operations.

**Exit gate:** Approved security/privacy architecture, threat models, identity controls, incident readiness, and accepted residual risk.

### [x] GN-G5-001 — Establish threat models and security architecture

- **Deliverable:** Asset, actor, attack-surface, trust-boundary, abuse-case, threat, mitigation, and residual-risk models.
- **Owner / approver:** `<Security Architect>` / `<CISO/Security Authority>`
- **Dependencies / risk:** `GN-G3-003`, `GN-G4-004` / `R4`
- **Acceptance & evidence:** All R3/R4 capabilities have reviewed threat models; unresolved critical threats block pilot or production. [Evidence: `architecture/SECURITY_ARCHITECTURE_THREAT_MODELS.md`]
- **Status:** `D`

### [x] GN-G5-002 — Design enterprise identity and privileged access

- **Deliverable:** Workforce/service/agent identity, federation, lifecycle, RBAC/ABAC, privileged access, segregation of duties, emergency access, and periodic review.
- **Owner / approver:** `<IAM Lead>` / `<Security Authority>`
- **Dependencies / risk:** `GN-G5-001` / `R4`
- **Acceptance & evidence:** Every privileged action maps to authenticated identity, authorization policy, approval where required, and immutable audit event; orphan privileged accounts equal zero. [Evidence: `architecture/IDENTITY_AND_ACCESS_DESIGN.md`]
- **Status:** `D`

### [x] GN-G5-003 — Protect data, secrets, keys, and sensitive output

- **Deliverable:** Encryption, key management, secret lifecycle, tokenization/masking, DLP, exfiltration prevention, secure deletion, and backup-protection controls.
- **Owner / approver:** `<Security Engineering Lead>` / `<Security and Data Owners>`
- **Dependencies / risk:** `GN-G4-001`, `GN-G5-001` / `R4`
- **Acceptance & evidence:** Sensitive data is protected at rest, in transit, in use where required, and in logs/backups; secret-scanning and rotation tests pass. [Evidence: `architecture/DATA_PROTECTION_CONTROLS.md`]
- **Status:** `D`

### [x] GN-G5-004 — Secure tools, plugins, integrations, and execution

- **Deliverable:** Capability manifest, signing/trust, sandboxing, permissions, egress, quotas, secrets access, policy checks, revocation, and execution-receipt controls.
- **Owner / approver:** `<Platform Security Lead>` / `<Security Authority>`
- **Dependencies / risk:** `GN-G3-003`, `GN-G5-002`, `GN-G5-003` / `R4`
- **Acceptance & evidence:** Deny-by-default enforcement is demonstrated; high-risk or destructive actions require explicit human approval and generate verifiable receipts. [Evidence: `architecture/PLATFORM_SECURITY_CONTROLS.md`]
- **Status:** `D`

### [x] GN-G5-005 — Establish detection, audit, and incident response

- **Deliverable:** Audit-event schema, time synchronization, tamper protection, monitoring, alerting, triage, containment, breach escalation, forensics, recovery, and learning.
- **Owner / approver:** `<Security Operations Lead>` / `<CISO/Security Authority>`
- **Dependencies / risk:** `GN-G5-001` through `GN-G5-004` / `R4`
- **Acceptance & evidence:** Critical scenarios are exercised; detection and response targets are approved and met; audit trails reconstruct who did what, when, why, and with which authorization. [Evidence: `architecture/INCIDENT_RESPONSE_PLAN.md`]
- **Status:** `D`

### [x] GN-G5-006 — Operationalize privacy engineering

- **Deliverable:** Privacy-by-design checklist, data-flow assessment, DPIA process, rights handling, consent/purpose controls, minimization, retention, and cross-border review.
- **Owner / approver:** `<Privacy Engineering Lead>` / `<Data Protection/Legal Authority>`
- **Dependencies / risk:** `GN-G2-005`, `GN-G4-001` / `R4`
- **Acceptance & evidence:** All high-risk processing has approved assessment and treatment; privacy requirements trace to architecture, tests, controls, and operational evidence. [Evidence: `architecture/PRIVACY_ENGINEERING.md`]
- **Status:** `D`

### [x] GN-G5-007 — Complete independent security and privacy assurance

- **Deliverable:** Design review, control testing, penetration/adversarial testing plan, findings register, remediation, and residual-risk acceptance.
- **Owner / approver:** `<Independent Assurance Lead>` / `<Risk Acceptance Authority>`
- **Dependencies / risk:** `GN-G5-001` through `GN-G5-006` / `R4`
- **Acceptance & evidence:** No open unaccepted critical finding; high findings have approved treatment and due dates; assurance independence is documented. [Evidence: `architecture/SECURITY_ASSURANCE_PLAN.md`]
- **Status:** `D`

---

# G6 — Establish Engineering, Supply Chain, Platform, and Operations

**Gate objective:** Create a controlled delivery and operations system capable of supporting reliable enterprise services.

**Exit gate:** Approved SDLC, supply-chain controls, platform design, SRE model, recovery capability, and measurable operational targets.

### [x] GN-G6-001 — Define the secure engineering lifecycle

- **Deliverable:** Requirements, design, coding, review, testing, release, migration, rollback, maintenance, and retirement standards.
- **Owner / approver:** `<Engineering Excellence Lead>` / `<Technology Governance Board>`
- **Dependencies / risk:** `G3`, `G5` / `R3`
- **Acceptance & evidence:** Each change class has required reviewers, tests, security gates, evidence, and rollback; emergency changes have bounded exception controls. [Evidence: `standards/SECURE_ENGINEERING_LIFECYCLE.md`]
- **Status:** `D`

### [x] GN-G6-002 — Secure the software and AI supply chain

- **Deliverable:** Dependency policy, provenance, SBOM, artifact signing, build isolation, vulnerability handling, license checks, model/data provenance, and release attestation.
- **Owner / approver:** `<Supply Chain Security Lead>` / `<Security Authority>`
- **Dependencies / risk:** `GN-G6-001`, `GN-G2-005`, `GN-G2-006` / `R4`
- **Acceptance & evidence:** Every releasable artifact is reproducible or attested, traceable to source and review, scanned, signed where required, and linked to an approved dependency inventory. [Evidence: `standards/SUPPLY_CHAIN_SECURITY.md`]
- **Status:** `D`

### [x] GN-G6-003 — Establish the enterprise test and verification strategy

- **Deliverable:** Unit, contract, integration, end-to-end, security, privacy, performance, resilience, recovery, migration, AI-evaluation, and user-acceptance test model.
- **Owner / approver:** `<Quality Engineering Lead>` / `<Product and Risk Owners>`
- **Dependencies / risk:** `GN-G3-007`, `GN-G4-006`, `GN-G6-001` / `R4`
- **Acceptance & evidence:** Requirements and controls have test coverage; release thresholds and waiver authority are explicit; failed critical tests block promotion. [Evidence: `standards/ENTERPRISE_TEST_STRATEGY.md`]
- **Status:** `D`

### [x] GN-G6-004 — Design controlled environments and deployment

- **Deliverable:** Development, test, staging, production, isolation, configuration, secrets, promotion, rollback, backup, tenancy, residency, and change-control design.
- **Owner / approver:** `<Platform Engineering Lead>` / `<Architecture and Security Boards>`
- **Dependencies / risk:** `GN-G3-004`, `GN-G5-003`, `GN-G6-002` / `R4`
- **Acceptance & evidence:** Environment boundaries are tested; production access is controlled; deployment and rollback evidence is retained; configuration drift is detectable. [Evidence: `architecture/DEPLOYMENT_AND_ENVIRONMENTS.md`]
- **Status:** `D`

### [x] GN-G6-005 — Establish service management and SRE

- **Deliverable:** Service catalog, ownership, SLIs/SLOs/SLAs, error budgets, support tiers, on-call, runbooks, incident, problem, change, release, and capacity processes.
- **Owner / approver:** `<SRE/Service Management Lead>` / `<Service Owners>`
- **Dependencies / risk:** `GN-G1-005`, `GN-G6-004` / `R4`
- **Acceptance & evidence:** Every production service has approved SLOs, support model, alerts, runbooks, dependencies, escalation, and monthly service review. [Evidence: `standards/SERVICE_MANAGEMENT_SRE.md`]
- **Status:** `D`

### [x] GN-G6-006 — Establish business continuity and disaster recovery

- **Deliverable:** Business-impact analysis, continuity plans, dependency map, backup/restore design, RTO/RPO, crisis communications, recovery runbooks, and exercise schedule.
- **Owner / approver:** `<Continuity/Resilience Lead>` / `<Executive Risk Committee>`
- **Dependencies / risk:** `GN-G6-004`, `GN-G6-005` / `R4`
- **Acceptance & evidence:** Approved RTO/RPO exists for every critical service; restore and failover exercises meet targets; gaps have owned remediation. [Evidence: `architecture/BUSINESS_CONTINUITY_DR.md`]
- **Status:** `D`

### [x] GN-G6-007 — Operationalize observability, performance, capacity, and FinOps

- **Deliverable:** Metrics, logs, traces, audit separation, dashboards, capacity model, performance budgets, demand forecast, cost allocation, budget alerts, and optimization cadence.
- **Owner / approver:** `<Platform/SRE and FinOps Leads>` / `<Technology and Finance Owners>`
- **Dependencies / risk:** `GN-G6-004`, `GN-G6-005` / `R3`
- **Acceptance & evidence:** All critical services expose health and cost signals; numeric thresholds are approved; capacity and cost exceptions trigger owned action. [Evidence: `architecture/OBSERVABILITY_AND_FINOPS.md`]
- **Status:** `D`

---

# G7 — Automate Assurance, Run a Bounded Pilot, and Prove Readiness

**Gate objective:** Automate repository controls, validate one bounded use case, and prove whether production deployment is justified.

**Exit gate:** Reproducible controls, accepted pilot evidence, completed readiness review, and explicit go/no-go decision.

### [ ] GN-G7-001 — Implement documentation and policy assurance automation

- **Deliverable:** CI checks for metadata, Markdown, links, anchors, authority, status, terminology, filenames, duplicate content, stale reviews, secrets, and current-versus-planned wording.
- **Owner / approver:** `<Documentation Tooling Lead>` / `<Programme Assurance Lead>`
- **Dependencies / risk:** `GN-G0-006`, `GN-G2-008` / `R3`
- **Acceptance & evidence:** Required checks run on every PR; known-invalid fixtures fail; all controlled documents pass; unavailable checks cannot be reported as passed.
- **Status:** `NS`

### [ ] GN-G7-002 — Establish repository governance and protected delivery

- **Deliverable:** CODEOWNERS, protected branches, required checks, reviewer separation, signed/traceable releases, issue templates, PR template, and change evidence.
- **Owner / approver:** `<Repository Administrator>` / `<Technology Governance Board>`
- **Dependencies / risk:** `GN-G0-007`, `GN-G6-001` / `R4`
- **Acceptance & evidence:** Direct unreviewed production-path changes are blocked; required domain owners review material changes; emergency access is audited.
- **Status:** `NS`

### [ ] GN-G7-003 — Build the assurance and traceability dashboard

- **Deliverable:** Automated reporting for requirement coverage, risks, controls, findings, test results, document freshness, service health, cost, incidents, and benefits.
- **Owner / approver:** `<Assurance Analytics Lead>` / `<Programme Board>`
- **Dependencies / risk:** `GN-G2-007`, `GN-G3-007`, `GN-G7-001` / `R3`
- **Acceptance & evidence:** Dashboard data traces to canonical sources; critical stale or failing evidence is visible; manual overrides are logged.
- **Status:** `NS`

### [ ] GN-G7-004 — Approve a bounded pilot charter

- **Deliverable:** Pilot objective, users, scope, exclusions, data, environment, controls, success/failure thresholds, duration, stop conditions, and rollback.
- **Owner / approver:** `<Product Owner>` / `<Pilot Governance Board>`
- **Dependencies / risk:** `G1` through `G6` applicable controls / `R4`
- **Acceptance & evidence:** Pilot is limited to one approved use case or tightly coupled set; no production claim is made; risks, human approvals, and exit criteria are accepted.
- **Status:** `NS`

### [ ] GN-G7-005 — Execute the pilot under controlled conditions

- **Deliverable:** Versioned pilot release, execution logs, user outcomes, control evidence, incidents, costs, exceptions, and rollback evidence.
- **Owner / approver:** `<Pilot Delivery Lead>` / `<Product and Risk Owners>`
- **Dependencies / risk:** `GN-G7-004` / `R4`
- **Acceptance & evidence:** Execution follows the approved charter; deviations are recorded; critical stop conditions terminate or suspend the pilot.
- **Status:** `NS`

### [ ] GN-G7-006 — Evaluate pilot outcomes and return knowledge

- **Deliverable:** Independent results report covering value, quality, safety, security, privacy, reliability, usability, accessibility, cost, limitations, and lessons.
- **Owner / approver:** `<Evaluation Lead>` / `<Pilot Governance Board>`
- **Dependencies / risk:** `GN-G7-005` / `R4`
- **Acceptance & evidence:** Predefined thresholds are evaluated without post-hoc alteration; failures and uncertainty remain visible; lessons update research, risks, controls, ADRs, and roadmap.
- **Status:** `NS`

### [ ] GN-G7-007 — Complete production-readiness review

- **Deliverable:** Readiness dossier covering architecture, controls, security, privacy, legal, testing, operations, support, continuity, capacity, cost, training, documentation, and residual risk.
- **Owner / approver:** `<Readiness Review Lead>` / `<Production Approval Board>`
- **Dependencies / risk:** `GN-G7-006`, all applicable G2–G6 gates / `R4`
- **Acceptance & evidence:** No open unaccepted critical blocker; all required owners sign; every conditional approval has owner, deadline, compensating control, and expiration.
- **Status:** `NS`

### [ ] GN-G7-008 — Approve release, rollback, and go-live decision

- **Deliverable:** Explicit go, conditional-go, delay, or stop decision with release plan, rollback trigger, communications, support, and post-launch review.
- **Owner / approver:** `<Release Lead>` / `<Authorized Production Approver>`
- **Dependencies / risk:** `GN-G7-007` / `R4`
- **Acceptance & evidence:** Decision and rationale are recorded; release artifact matches reviewed evidence; rollback is tested; production is not entered by inference.
- **Status:** `NS`

---

# G8 — Reconcile, Sequence Delivery, Measure Maturity, and Close the Programme

**Gate objective:** Deliver reviewable changes, reconcile repository truth, assess maturity, and transfer ownership into continuous operations.

**Exit gate:** Approved final dossier, explicit remaining decisions, operational ownership, and continuous-improvement cadence.

### [ ] GN-G8-001 — Approve staged PR and release sequencing

- **Deliverable:** Dependency-aware PR plan with bounded scopes and rollback.
- **Owner / approver:** `<Release/Programme Manager>` / `<Programme Board>`
- **Dependencies / risk:** `G0` / `R3`
- **Acceptance & evidence:** Each PR has one coherent purpose, base/head, owners, required checks, evidence, and downstream dependencies; no single unreviewable mega-PR.
- **Status:** `NS`

Recommended sequence:

1. Constitutional decision and Blueprint v2
2. Document control and canonical metadata
3. Strategy, capabilities, and operating model
4. GRC, registers, privacy, legal, and supplier governance
5. Current-state and target enterprise architecture
6. Knowledge, data, and AI governance
7. Security and identity architecture
8. SDLC, supply chain, platform, SRE, BCP/DR, and FinOps
9. Assurance automation
10. Bounded pilot
11. Production-readiness evidence
12. Repository reconciliation and final programme report

### [ ] GN-G8-002 — Reconcile all root and domain documents

- **Deliverable:** Coherent Constitution, MASTER, document map, project, vision, mission, philosophy, principles, glossary, sources, contribution guidance, and domain documents.
- **Owner / approver:** `<Documentation Architect>` / `<Governance and Architecture Leads>`
- **Dependencies / risk:** `GN-G0-003`, `GN-G3-006`, `GN-G7-001` / `R4`
- **Acceptance & evidence:** Authority, terminology, status, roadmap, ownership, links, and current-state claims are consistent; conflicting diagrams and stale lock language equal zero.
- **Status:** `NS`

### [ ] GN-G8-003 — Complete repository-wide diff and quality review

- **Deliverable:** Full diff report, changed-file manifest, link graph, duplicate-content report, validation output, and preserved-knowledge assessment.
- **Owner / approver:** `<Independent Reviewer>` / `<Programme Assurance Lead>`
- **Dependencies / risk:** `GN-G8-002` / `R3`
- **Acceptance & evidence:** Complete merge-base diff is read; all changes are intentional; Markdown, links, anchors, encoding, secrets, metadata, terminology, and state-language checks pass.
- **Status:** `NS`

### [ ] GN-G8-004 — Assess enterprise maturity and capability gaps

- **Deliverable:** M0–M5 scorecard by business, governance, architecture, data, AI, security, engineering, operations, and assurance domain.
- **Owner / approver:** `<Maturity Assessment Lead>` / `<Programme Board>`
- **Dependencies / risk:** `GN-G7-007`, `GN-G8-003` / `R3`
- **Acceptance & evidence:** Every score cites evidence; target maturity and remediation owner are approved; no domain self-declares maturity without assurance.
- **Status:** `NS`

### [ ] GN-G8-005 — Validate the final Definition of Done

- **Deliverable:** Signed programme acceptance record.
- **Owner / approver:** `<Programme Manager>` / `<Executive Sponsor>`
- **Dependencies / risk:** `GN-G8-004` / `R4`
- **Acceptance & evidence:** Every applicable item in the Final Definition of Done below is evidenced; exceptions are formally accepted and time-bounded.
- **Status:** `NS`

### [ ] GN-G8-006 — Transfer ownership and unresolved decisions

- **Deliverable:** Operational handover, decision backlog, risk acceptance, support ownership, knowledge transfer, and review calendar.
- **Owner / approver:** `<Transition Manager>` / `<Service and Business Owners>`
- **Dependencies / risk:** `GN-G8-005` / `R3`
- **Acceptance & evidence:** No open item lacks owner, approver, priority, impact, target decision date, and escalation; support teams accept responsibilities.
- **Status:** `NS`

### [ ] GN-G8-007 — Establish continuous improvement

- **Deliverable:** Quarterly governance, architecture, risk, control, AI, service, cost, knowledge, and benefits review cycle.
- **Owner / approver:** `<Continuous Improvement Lead>` / `<Executive Sponsor>`
- **Dependencies / risk:** `GN-G8-006` / `R2`
- **Acceptance & evidence:** Review calendar, inputs, decision rights, improvement backlog, trend measures, and annual independent assessment are operational.
- **Status:** `NS`

---

## 3. Blueprint-v1 Knowledge Preservation Manifest

Blueprint v1 remains a useful content baseline, but after `GN-G0-003` it is not an immutable ceiling.

### Existing foundation family to reconcile

```text
README.md
MASTER.md
DOCUMENT_MAP.md
CONSTITUTION.md
PROJECT.md
VISION.md
MISSION.md
PHILOSOPHY.md
PRINCIPLES.md
GLOSSARY.md / GLOSSARY.md — resolve through governance
SOURCES.md
CONTRIBUTING.md
LICENSE — only after explicit legal/license approval
```

### Baseline domain families

```text
knowledge/
  README.md
  research/
  reverse-engineering/
  patterns/
  benchmarks/

architecture/
  README.md
  EXECUTIVE_OS.md
  AI_ORCHESTRATOR.md
  CAPABILITY_ROUTER.md
  KNOWLEDGE_ENGINE.md
  MEMORY_ENGINE.md
  EXECUTION_ENGINE.md
  WORKFLOW_ENGINE.md
  PLUGIN_SDK.md
  SECURITY.md
  GOVERNANCE.md
  DEPLOYMENT.md

adr/
  README.md
  TEMPLATE.md
  ADR-0001-PROJECT-VISION.md
  ADR-0002-EXECUTIVE-LAYER.md
  ADR-0003-KNOWLEDGE-FIRST.md
  ADR-0004-CAPABILITY-ROUTER.md
  ADR-0005-OPENCLAW-AS-EXECUTION.md

standards/
  DOCUMENTATION.md
  ARCHITECTURE.md
  CODING.md
  PROMPTS.md
  AGENTS.md
  NAMING.md

templates/
  ADR_TEMPLATE.md
  RESEARCH_TEMPLATE.md
  ARCHITECTURE_TEMPLATE.md
  DECISION_TEMPLATE.md
  DOCUMENT_TEMPLATE.md

roadmap/
  PHASE_0.md
  PHASE_1.md
  PHASE_2.md
  LONG_TERM_VISION.md

implementation/
  EXECUTION_PLAN.md
  MODULES.md
  MILESTONES.md
  CHECKLIST.md
```

For every baseline artifact:

- retain useful GangNiaga-specific knowledge;
- assign one canonical content owner;
- distinguish current, target, transition, implemented, and validated state;
- link higher-authority dependencies;
- state scope, non-goals, responsibilities, boundaries, interfaces, risks, controls, failures, recovery, metrics, and approval;
- migrate detail out of `MASTER.md` where a specialized canonical document exists;
- avoid generic filler and duplicated authority;
- retain history when superseded;
- do not represent proposed ADRs as approved;
- do not represent target architecture as operational.

---

## 4. Final Definition of Done

The programme is complete only when all applicable statements below are evidenced:

### Governance and business

- [ ] Constitutional and Blueprint-v2 changes are explicitly approved.
- [ ] Strategy, business outcomes, use cases, capability map, and benefits are owned and measurable.
- [ ] Decision rights, RACI, escalation, and separation of duties are operational.
- [ ] No critical programme decision exists only in conversation or local scratch files.

### Information and documentation

- [ ] Every controlled document has ID, owner, approver, status, version, classification, effective date, next review, and canonical home.
- [ ] Internal links and authority relationships validate.
- [ ] `MASTER.md` is coherent and does not duplicate specialized detail unnecessarily.
- [ ] Current, target, transition, implemented, and validated claims are evidence-backed.
- [ ] Glossary filename and all references are consistent.
- [ ] License posture is explicitly decided without implied rights.
- [ ] Knowledge, evidence, source, provenance, staleness, and supersession controls operate.

### Risk, compliance, data, and AI

- [ ] Material obligations, risks, controls, owners, tests, and evidence trace end-to-end.
- [ ] No unaccepted critical security, privacy, legal, supplier, data, AI, or continuity risk remains.
- [ ] Data domains, classifications, owners, lifecycle, residency, quality, and access are controlled.
- [ ] AI use cases, systems, models, prompts, agents, tools, and datasets are inventoried and risk-classified.
- [ ] Responsible-AI, evaluation, red-team, human-oversight, incident, drift, rollback, and decommission controls operate.

### Architecture and engineering

- [ ] Current, target, and transition architectures are approved and traceable to decisions.
- [ ] Numeric NFRs and acceptance thresholds are approved.
- [ ] SDLC, tests, supply-chain provenance, artifact assurance, and release controls operate.
- [ ] Identity, authorization, secrets, encryption, tool execution, logging, and audit controls pass tests.
- [ ] Every production service has owner, SLOs, support, runbooks, alerts, dependencies, rollback, and recovery evidence.

### Resilience and operations

- [ ] BCP/DR RTO and RPO targets are approved and successfully exercised.
- [ ] Incident, problem, change, release, capacity, and service-review processes operate.
- [ ] Observability, performance, cost, and benefit measures have owners and review cadence.
- [ ] Pilot results meet predefined thresholds or produce an explicit stop decision.
- [ ] Production readiness and go-live are explicitly approved.

### Assurance and delivery

- [ ] Required CI, repository, documentation, security, policy, and evidence checks pass.
- [ ] Complete diffs and rendered documents are independently reviewed.
- [ ] All findings, exceptions, waivers, and unavailable checks are disclosed.
- [ ] Production-critical capabilities reach at least `M3`; key controls and services required by the approval board reach `M4`.
- [ ] Remaining gaps have owners, target dates, risks, and escalation.
- [ ] Operational handover and continuous-improvement governance are accepted.

---

## 5. Final Reporting Template

```text
Programme:
Baseline commit:
Final commit/release:
Gate status:
Maturity by domain:
Approved ADRs:
Changed and created documents:
Implemented capabilities:
Pilot result:
Production decision:
Checks passed:
Checks unavailable:
Open risks:
Accepted residual risks:
Exceptions and waivers:
Security/privacy findings:
Operational SLO and recovery evidence:
Benefits achieved:
Remaining decisions:
Owners and next review dates:
PR and release links:
```

Do not mark the programme complete because documentation exists. Completion requires approved ownership, implemented controls, measurable outcomes, retained evidence, and operational accountability.