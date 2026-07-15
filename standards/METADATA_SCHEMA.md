# GANGNIAGA — Document Metadata and Status Schema

> **Document ID:** `GN-STD-001`  
> **Document type:** Controlled Enterprise Standard  
> **Version:** `1.0.0`  
> **Status:** `Approved`  
> **Canonical home:** `F:\GANGNIAGA-MASTER\standards\METADATA_SCHEMA.md`  
> **Executive sponsor:** Governance Lead  
> **Programme owner:** Documentation Architect  
> **Classification:** Internal  
> **Effective date:** 2026-07-15  
> **Next review:** 2027-01-15  

---

## 1. Purpose

This document defines the machine-valid metadata schema and the orthogonal status vocabularies (lifecycle, approval, implementation, assurance, and maturity) for all controlled documents within the GANGNIAGA-MASTER repository. This enables automated repository controls and CI checks (as required by GN-G7-001).

## 2. Metadata Schema

All authoritative and controlled documents must include a frontmatter metadata block at the beginning of the file. This can be implemented via Markdown blockquotes (legacy standard) or YAML frontmatter (preferred for new automated workflows).

### 2.1 Required Fields

| Field | Description | Format / Acceptable Values |
|---|---|---|
| **Document ID** | Unique identifier for the document | `GN-[DOMAIN]-[NUM]` (e.g., `GN-STD-001`) |
| **Document type** | Category of the document | `Standard`, `Policy`, `ADR`, `Strategy`, `Register`, `Blueprint` |
| **Version** | Semantic versioning of the document | `MAJOR.MINOR.PATCH[-modifier]` |
| **Status** | Current document lifecycle state | See *Section 3.1 Lifecycle & Approval Vocabulary* |
| **Owner** | Accountable individual or role for the content | `<Role/Name>` |
| **Approver** | Executive or governance body with sign-off authority | `<Role/Governance Body>` |
| **Classification** | Security and privacy classification | `Public`, `Internal`, `Confidential`, `Restricted` |
| **Effective date** | Date the document takes authority | `YYYY-MM-DD` |
| **Next review** | Scheduled review or expiration date | `YYYY-MM-DD` |
| **Canonical state** | Declaration of the document's authoritative scope | E.g., `Authoritative for X` |
| **Supersession** | Documents obsoleted by this version | Document IDs or `None` |
| **Retention** | Records retention schedule | E.g., `Permanent`, `7 years` |

### 2.2 Machine-Valid YAML Schema Definition

```yaml
type: object
required:
  - document_id
  - document_type
  - version
  - status
  - owner
  - approver
  - classification
  - effective_date
  - next_review
  - canonical_state
  - supersession
  - retention
properties:
  document_id:
    type: string
    pattern: "^GN-[A-Z]+-[0-9]{3}$"
  document_type:
    type: string
  version:
    type: string
    pattern: "^[0-9]+\\.[0-9]+\\.[0-9]+(-[a-zA-Z0-9]+)?$"
  status:
    type: string
    enum: [Draft, "In Review", Approved, Deprecated, Superseded, Archived]
  owner:
    type: string
  approver:
    type: string
  classification:
    type: string
    enum: [Public, Internal, Confidential, Restricted]
  effective_date:
    type: string
    format: date
  next_review:
    type: string
    format: date
  canonical_state:
    type: string
  supersession:
    type: string
  retention:
    type: string
```

### 2.3 Example Frontmatter (Markdown Quote Block format)

```markdown
> **Document ID:** `GN-STD-001`  
> **Document type:** Controlled Enterprise Standard  
> **Version:** `1.0.0`  
> **Status:** `Approved`  
> **Owner:** `Documentation Architect`  
> **Approver:** `Governance Lead`  
> **Classification:** `Internal`  
> **Effective date:** `2026-07-15`  
> **Next review:** `2027-01-15`  
> **Canonical state:** `Authoritative for Metadata Schema`  
> **Supersession:** `None`  
> **Retention:** `Permanent`  
```

## 3. Orthogonal Status Vocabularies

To decouple document drafting from architectural implementation and enterprise assurance, status is measured across independent, orthogonal dimensions.

### 3.1 Lifecycle & Approval Vocabulary

Applies to the **document itself**.

| State | Definition |
|---|---|
| **Draft** | Under active development; non-authoritative. |
| **In Review** | Submitted for formal governance approval. |
| **Approved** | Ratified by the designated Approver; authoritative. |
| **Deprecated** | Slated for retirement; do not use for new implementations. |
| **Superseded** | Replaced by a newer document. |
| **Archived** | Retained for record-keeping only. |

### 3.2 Implementation Status Vocabulary

Applies to the **execution of work and tasks** (e.g., in backlog).

| Code | Meaning | Definition |
|---|---|---|
| `NS` | Not started | Work has not begun. |
| `IP` | In progress | Work is actively being executed. |
| `B` | Blocked | Impediments prevent progress. |
| `R` | Ready for review | Work is complete and pending validation. |
| `D` | Done | Implementation complete with accepted evidence. |
| `N/A` | Not applicable | Formally declared irrelevant with approval. |

### 3.3 Maturity Model

Applies to **business and technical capabilities**.

| Level | Meaning | Definition |
|---|---|---|
| `M0` | Absent | Capability does not exist or is ad-hoc. |
| `M1` | Documented | Process is defined but inconsistently followed. |
| `M2` | Approved and owned | Formal accountability and baseline established. |
| `M3` | Implemented and repeatable | Capability is operational across the target scope. |
| `M4` | Measured and independently assured | Performance is tracked (SLAs/SLOs) and audited. |
| `M5` | Continuously optimized | Automated, predictive, and self-improving capability. |

### 3.4 Assurance & Risk Vocabulary

Applies to **controls and compliance**.

| Level | Definition |
|---|---|
| **Unverified** | Control exists but lacks independent testing. |
| **Verified** | Internally tested and functioning as designed. |
| **Independently Assured** | Validated by external or independent audit. |
| **Deficient** | Control failed testing or contains critical gaps. |
