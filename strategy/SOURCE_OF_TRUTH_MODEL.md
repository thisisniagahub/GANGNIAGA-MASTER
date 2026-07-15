# GANGNIAGA — Enterprise Source-of-Truth Model

> **Document ID:** `GN-STRAT-SOT-001`
> **Document type:** Governance Control
> **Version:** `1.0.0-draft`
> **Status:** Draft — Pending Approval
> **Owner:** Information Governance Lead
> **Approver:** Executive Sponsor
> **Effective date:** <YYYY-MM-DD>
> **Next review:** <YYYY-MM-DD>

## Purpose
This document defines the ownership map for authority, strategy, decisions, architecture, delivery, evidence, operations, and knowledge within the GangNiaga Enterprise OS. Its purpose is to ensure that every information class has one canonical system, owner, retention rule, access model, and synchronization rule, reducing duplicate authoritative homes to zero.

## Ownership Map and Canonical Systems

| Information Class | Canonical Source / System | Owner | Retention Rule | Access Model | Synchronization Rule |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Constitutional authority** | `CONSTITUTION.md` and approved constitutional ADRs | Governance Lead | Permanent (immutable history) | Public / All internal | Manual via PR |
| **Repository operating doctrine** | `MASTER.md` | Repository Maintainer | Permanent (until superseded) | Public / All internal | Manual via PR |
| **Approved decisions** | ADR register and approved ADRs | Architecture Governance Lead | Permanent (immutable history) | Read-all, write-restricted | Push to active delivery |
| **Strategy and business outcomes** | Approved strategy, capability, and benefits registers | Strategy Lead | 7 years post-supersession | Restricted (Executive) | Manual via Governance Gates |
| **Architecture** | Approved current, target, and transition architecture records | Chief/Lead Architect | Permanent (immutable history) | Read-all, write-restricted | Manual review per ADR |
| **Active delivery state** | GitHub issues/projects, PRs, checks, and release records | Release/Programme Manager | 3 years post-completion | Open to contributors | Automated CI/CD, webhook sync |
| **Risks and controls** | Risk, obligation, control, exception, and evidence registers | Enterprise Risk Owner | 7 years post-resolution | Restricted (Governance) | Monthly automated sync check |
| **Operational truth** | Service catalog, telemetry, incidents, SLO reports, deployment & recovery evidence | SRE/Service Management Lead | 1-3 years depending on log type | Role-based (SRE/SecOps) | Real-time automated ingestion |
| **Curated organizational knowledge**| Knowledge domain and approved research artifacts | Knowledge Governance Lead | Permanent (until superseded) | Public / All internal | Manual curation and PR review |
| **Local scratch work** | Non-authoritative (local drives, temporary branches, scratch pads) | Individual Contributor | 30 days (ephemeral) | Private (Local) | Not synchronized |

## Principles of the Source-of-Truth Model

1. **Single Canonical Home:** No fact or information class shall have more than one authoritative location. Other documents and systems must reference or link to the canonical source rather than duplicating its content.
2. **Explicit Ownership:** Every information class has an accountable owner responsible for its accuracy, retention, and access management.
3. **Controlled Synchronization:** Moving or syncing data out of the canonical source must follow explicit synchronization rules (e.g., CI/CD automation, manual PR review) to prevent drift.
4. **Retention and Archival:** Expired or superseded documents cannot remain authoritative. Retention rules dictate archival and deletion lifecycles.
5. **Access by Least Privilege:** Access models default to open reading for organizational knowledge but restrict write permissions and sensitive data (e.g., risks, strategy) based on role (RBAC).

---
*Generated as part of GN-G0-004 Execution.*
