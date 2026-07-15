# Release Sequencing Plan

> **Document ID:** `GN-G8-001-RELEASE-SEQUENCING`
> **Document type:** Release Plan
> **Status:** Draft
> **Owner:** Release/Programme Manager
> **Approver:** Programme Board

## 1. Objective
To define a dependency-aware PR plan with bounded scopes and rollback procedures for the GangNiaga Enterprise Transformation Programme.

## 2. Release Sequence

| Phase | PR / Stage | Scope | Owners | Required Checks | Downstream Dependencies | Rollback Plan |
|---|---|---|---|---|---|---|
| 1 | Constitutional Decision | Blueprint v2 adoption | Governance Lead | Metadata, Authority | 2 | Revert PR, fallback to v1 |
| 2 | Document Control | Canonical metadata | Documentation Architect | Schema validation | 3, 4, 6 | Revert PR |
| 3 | Strategy & Capability | Strategy, capabilities, operating model | Strategy Lead | Content review | 5, 8 | Revert PR |
| 4 | Governance & Risk | GRC, registers, privacy, legal, supplier governance | Risk Lead | Legal review | 5, 6, 7 | Revert PR |
| 5 | Architecture | Current-state and target enterprise architecture | Enterprise Architect | Architecture review | 8 | Revert PR |
| 6 | Data & AI Governance | Knowledge, data, and AI governance | Data Lead | Policy validation | 10 | Revert PR |
| 7 | Security & Identity | Security and identity architecture | Security Architect | Threat model review | 8 | Revert PR |
| 8 | Platform & Ops | SDLC, supply chain, platform, SRE, BCP/DR, FinOps | Platform Lead | SRE review | 9, 10 | Revert PR |
| 9 | Assurance | Assurance automation | Assurance Lead | CI/CD testing | 10, 11 | Revert PR |
| 10 | Bounded Pilot | Bounded pilot execution | Pilot Lead | Charter validation | 11 | Halt pilot, revert |
| 11 | Production Readiness | Production-readiness evidence | Readiness Lead | Board approval | 12 | Do not release |
| 12 | Final Report | Repository reconciliation and final report | Programme Manager | Full validation | None | N/A |

## 3. Rollback Procedures
- **Revert:** All PRs must maintain backward compatibility or be cleanly reversible.
- **Data:** No destructive data changes are permitted without an approved migration and backup plan.
- **Review:** Any rollback event triggers a mandatory incident review.
