# ADR-0006: Controlled Repository Evolution

> **ADR ID:** ADR-0006
> **Title:** Controlled Repository Evolution — Replace Absolute Structural Lock with Risk-Classified Change Governance
> **Status:** APPROVED — Constitutional amendment approved
> **Decision status:** Approved
> **Date proposed:** 2026-07-14
> **Date approved:** 2026-07-15
> **Author:** `Megat`
> **Approver:** `Megat`
> **Supersedes:** None (amends `CONSTITUTION.md` Governance clause)
> **Prerequisites:** G0 Decision Pack approved
> **Scope:** Constitutional governance clause; Repository Blueprint versioning; structural change classification
> **Implementation status:** Approved

---

## 1. Context

### 1.1 Current state

`CONSTITUTION.md` contains the following structural-lock clause under the Governance section:

> "The locked Repository Blueprint v1.0 remains the structural baseline until a formally approved decision authorizes a change. Current work must not rename files, add or remove folders, or alter the roadmap structure."

This clause was appropriate during the repository's formation to prevent uncontrolled structural drift before governance matured.

### 1.2 Problem

The absolute structural lock creates the following operational issues:

1. **Ambiguity:** "Formally approved decision" is not defined with sufficient specificity — who approves, what evidence is required, and what change classes exist.
2. **Proportionality gap:** A low-risk editorial correction (e.g., fixing `GLOSSORY.md` → `GLOSSARY.md`) requires the same undefined process as a constitutional amendment.
3. **Stagnation risk:** Legitimate structural evolution (new governance artifacts, strategy documents, enterprise registers) cannot proceed without constitutional uncertainty.
4. **Workaround pressure:** Needed artifacts accumulate as unstructured `chat*.md` files in root because the governed path is unclear.
5. **Knowledge fragmentation:** Evidence and decisions drift into external systems or temporary files rather than the governed repository.

### 1.3 Evidence

- `DOCUMENT_MAP.md` records known structural exceptions (e.g., `GLOSSORY.md` typo, missing `LICENSE`).
- Five unstructured `chat*.md` files exist in root — containing legitimate strategy, governance, and planning content with no governed home.
- `MASTER.md` has grown to 7,765 lines because content that belongs in domain-specific files has no authorized path to move there.
- `chat4.md` explicitly documents that creating root `TODO.md` would violate the locked Blueprint.
- The G0 Decision Pack (see `G0_DECISION_PACK.md`) documents 14 capability gaps, 8 business outcomes, and 5 governance alternatives.

---

## 2. Decision

Replace the absolute structural lock in `CONSTITUTION.md` with a controlled, risk-classified change governance model that:

1. Preserves constitutional supremacy and the authority hierarchy.
2. Classifies structural changes by impact level (CC-0 through CC-4).
3. Defines explicit approval authority for each change class.
4. Requires evidence proportional to risk.
5. Establishes Blueprint versioning (v1.0 → v2.0).
6. Defines migration, rollback, and exception handling.
7. Reserves constitutional amendment process (CC-4) for changes affecting identity, authority, or roadmap direction.

---

## 3. Affected Constitutional Clauses

### 3.1 Governance section — Structural-lock clause (Line ~182)

**Current wording:**

> "The locked Repository Blueprint v1.0 remains the structural baseline until a formally approved decision authorizes a change. Current work must not rename files, add or remove folders, or alter the roadmap structure."

**Proposed replacement wording:**

> "Repository Blueprint v1.0 is the structural baseline. Structural evolution is permitted only through the controlled-change governance model defined in the approved ADR for repository evolution. Each structural change must be classified by impact, approved by the authority designated for its change class, supported by proportionate evidence, and recorded with migration and rollback provisions. Constitutional clauses, authority hierarchy, and locked roadmap direction may only be changed through the constitutional amendment process. The Repository Governance Owner maintains the current Blueprint version, path inventory, and change log."

### 3.2 No other constitutional clauses are proposed for amendment

The following remain unchanged:

- Purpose, Executive Statement, Phase 0 Objective
- Vision, Mission, Core Values
- All 10 Constitutional Principles
- Decision Authority and Authority Hierarchy
- Document Responsibilities
- Repository, Engineering, Research, and AI Philosophy
- Amendment Process mechanics
- Compliance requirements

---

## 4. Controlled-Change Classification

| Class | Impact | Examples | Approval authority | Evidence required |
|---|---|---|---|---|
| CC-0 | Editorial only | Spelling, formatting, broken internal links | Document owner or delegated reviewer | Diff review |
| CC-1 | Content within existing structure | Clarification, evidence update, non-material correction | Document owner + reviewer | Change description and diff |
| CC-2 | New artifact in approved extensibility zone | New knowledge document, standard instance, template | Domain owner + Repository Governance Owner | Purpose, scope, authority alignment |
| CC-3 | Material structural change | New folder, moved document class, Blueprint version update | Blueprint Authority + architecture and governance review | Full change record, migration plan, rollback plan |
| CC-4 | Constitutional or authority change | Constitutional clause, authority hierarchy, roadmap direction | Constitutional amendment process | Per `CONSTITUTION.md` Amendment Process |

---

## 5. Alternatives Considered

### Alternative A — Retain absolute lock

Rejected. Creates governance ambiguity and knowledge fragmentation as documented in Section 1.2.

### Alternative B — Constitutional ADR per change

Rejected. Disproportionate governance cost for low-risk changes. Risks constitutional fatigue.

### Alternative C — Controlled change classes (Selected)

Risk-proportionate. Preserves constitutional protection for high-impact changes while enabling governed evolution for lower-impact needs.

### Alternative D — Remove structural governance

Rejected. Incompatible with project identity and constitutional principles.

---

## 6. Trade-offs

**Accepted:**
- Increased classification complexity (mitigated by clear class boundaries and examples).
- Need for a named Repository Governance Owner role.
- Delegated authority requires periodic assurance review.

**Avoided:**
- Constitutional erosion (CC-4 reserved for constitutional changes).
- Uncontrolled expansion (CC-3 requires Blueprint Authority approval).
- Knowledge fragmentation (CC-2 provides governed paths for new artifacts).

---

## 7. Consequences

### 7.1 Immediate consequences (upon approval)

1. `CONSTITUTION.md` Governance clause is updated with exact replacement wording.
2. `DOCUMENT_MAP.md` is updated to reflect Blueprint v2.0 structure.
3. `MASTER.md` references to the structural lock are updated.
4. `README.md` "Canonical Repository Structure" is updated.
5. `CONTRIBUTING.md` Section 3 (Locked Repository Blueprint) is updated.
6. `GLOSSORY.md` rename becomes a CC-0 governed decision (separate approval).

### 7.2 Enabled future work

- Strategy, governance, and planning artifacts can be placed in governed folders.
- `chat*.md` content can be migrated to proper locations.
- `MASTER.md` content can be modularized into domain-specific files.
- Enterprise registers and control documents can be created.

### 7.3 Not authorized by this ADR

- No architecture implementation.
- No pilot or production deployment.
- No license selection.
- No AI model, vendor, or framework commitment.

---

## 8. Migration Plan

### 8.1 Atomic update set

The following documents must be updated in a single governed commit:

1. `CONSTITUTION.md` — Replace structural-lock clause
2. `DOCUMENT_MAP.md` — Update Blueprint to v2.0; update current-state inventory
3. `MASTER.md` — Update references to structural lock and Blueprint version
4. `README.md` — Update "Canonical Repository Structure" diagram
5. `CONTRIBUTING.md` — Update Section 3 to reference controlled-change model
6. `G0_DECISION_PACK.md` — Update recommendation status to "Approved"
7. `ADR-0006-CONTROLLED-REPOSITORY-EVOLUTION.md` — Update status to "Approved"

### 8.2 Rollback plan

If the change is reverted:

1. Restore all seven files from the pre-change commit.
2. Blueprint v1.0 structural lock is reinstated.
3. Any structural changes made under v2.0 authority must be reviewed and either preserved under a new governance mechanism or reverted.

---

## 9. Validation Plan

- [ ] All seven documents updated atomically in one commit.
- [ ] No internal link is broken.
- [ ] No authority claim contradicts the Constitution.
- [ ] GLOSSORY.md rename is NOT performed (separate decision).
- [ ] LICENSE is NOT created (separate decision).
- [ ] No planned component is described as implemented.
- [ ] Full diff reviewed by independent reviewer.
- [ ] Constitutional approver has explicitly recorded approval.

---

## 10. Approval Record

| Field | Value |
|---|---|
| Decision | `Approved` |
| Constitutional approver | `Megat` |
| Executive sponsor concurrence | `Megat` |
| Decision date | `2026-07-15` |
| Effective date | `2026-07-15` |
| Conditions | `None` |
| Blueprint version created | `v2.0` |
| Review date | `2026-10-15` |

---

# End of ADR-0006
