# Product Requirements Document (PRD) — GangNiaga Executive OS

## Document Control
- **Document Title:** Release A/B/C Product Requirements Document
- **Version:** 1.0.0
- **Last Updated:** 2026-07-16
- **Status:** Draft
- **Document Owner:** Open Decision
- **Product Approver:** Open Decision
- **Security Approver:** Open Decision
- **Data Owner:** Open Decision
- **Authority Statement:** This PRD governs product requirements and boundaries for Release A/B/C. This document remains strictly subordinate to the authority hierarchy: `CONSTITUTION.md` > `MASTER.md` > Approved ADRs. 
- **Change Control:** Any changes to release boundaries or capability scopes require governed approval.

## 1. Product Boundary & Executive Summary
- **Objective:** Establish an internal Executive Knowledge product featuring identity, document ingestion, retrieval, cited answers, conversation history, administration, and durable storage.
- **Stack Constraints:** Next.js App Router, Supabase (DB/Auth/pgvector), Vercel. **NO DOCKER**.
- **Data Boundary:** Scoped strictly as a single-organization environment. Multi-tenancy is not included unless formally approved.
- **Cost Ceiling:** Open Decision. (Define MYR/USD cap).

## 2. Users and Roles
- **Administrator:**
  - *Purpose:* Manage system boundaries, security, and data governance.
  - *Permitted Actions:* Manage access control, retention policies, deletion rules, export rules.
  - *Prohibited Actions:* View unauthorized cross-tenant data.
  - *Data Visibility:* System-wide telemetry, user configurations, audit logs.
  - *Privileged Operations:* Export, restore, purge.
  - *Required Audit Evidence:* Admin actions must be recorded in the audit log.
- **Operator:**
  - *Purpose:* Execute approved workflows and maintain environment configuration.
  - *Permitted Actions:* Configure ingestion jobs, monitor errors.
  - *Prohibited Actions:* Alter system retention policies.
  - *Data Visibility:* Job progress, system status.
  - *Required Audit Evidence:* Configuration changes.
- **User:**
  - *Purpose:* Interact with the knowledge base to extract value.
  - *Permitted Actions:* Upload authorized documents, query information, view history.
  - *Prohibited Actions:* Access documents outside their authorization scope.
  - *Data Visibility:* Authorized knowledge, own conversation history.
  - *Required Audit Evidence:* Document uploads and queries.

## 3. Product Decisions and Open Decisions
| Decision | Status | Note |
|---|---|---|
| Release A product boundary | Proposed | Requires approval |
| Single-organization vs multi-tenancy | Open Decision | Currently single-organization |
| Data classification | Open Decision | |
| Permitted repositories and document classes | Open Decision | |
| Excluded data and prohibited ingestion | Open Decision | |
| Cost ceiling in MYR and/or USD | Open Decision | |
| Product owner | Open Decision | |
| Security owner | Open Decision | |
| Data owner | Open Decision | |
| Success metrics | Open Decision | |
| Stop conditions | Open Decision | |
| Release A go/no-go authority | Open Decision | |
| OpenClaw adoption | Proposed | Pending ADR approval |
| Provider production approval | Proposed | Pending evaluation |

## 4. Functional Requirements

| ID | Requirement | Release | Priority | Status | Acceptance Evidence | Dependencies |
|---|---|---|---|---|---|---|
| AUTH-001 | Secure login and identity verification via Supabase Auth | Release A | High | Planned | Successful login tests | - |
| ING-001 | Ingest supported documents into chunks and embeddings | Release A | High | Planned | E2E test uploading document | AUTH-001 |
| ING-002 | View ingestion status and progress | Release A | Medium | Planned | Status UI updates | ING-001 |
| RAG-001 | Retrieve contextual chunks for user queries | Release A | High | Planned | Relevant chunks fetched | ING-001 |
| CIT-001 | Provide answers with direct citations to source chunks | Release A | High | Planned | Citations present in UI | RAG-001 |
| CONV-001 | View and resume previous conversation history | Release A | High | Planned | DB persistence verified | AUTH-001 |
| ADM-001 | Admin access control and boundary management | Release A | High | Planned | Admin restriction tests | AUTH-001 |
| DATA-001 | Export data and restore capabilities | Release A | Medium | Planned | Data export validation | ADM-001 |
| AUD-001 | Log privileged actions as audit evidence | Release A | High | Planned | Audit table populated | ADM-001 |

## 5. Non-Functional Requirements (NFRs)
- **Architecture Constraints:** Vercel (Web) and Supabase (DB/Auth/pgvector). Zero Docker containers.
- **Security & Privacy:** Enforce RLS (Row Level Security) policies, strict data retention/deletion rules.
- **Cross-User Isolation:** Cross-user isolation must be verified. Multi-tenant isolation is an Open Decision.
- **Availability:** Open Decision (Target SLAs).
- **Performance:** Open Decision (Target response times).
- **Accessibility:** Open Decision.
- **Observability:** Telemetry and error tracking must be configured.
- **Auditability:** Admin operations and queries must be logged.
- **Retention & Backup:** Supabase automated backups.
- **Cost Controls:** Open Decision (Define budget limits).
- **Provider Failure Handling:** Graceful fallback or clear error if AI provider fails.
- **Rate Limiting:** Protect APIs against abuse.
- **Secret Management:** Environment variables, no hardcoded keys.
- **Supply-Chain Security:** SBOM inventory required for Release B.
- **Browser Compatibility:** Modern browsers supported.

## 6. Acceptance Journeys

| Journey ID | Actor | Starting State | Preconditions | Steps | Expected Result | Failure Behavior | Required Evidence | Reviewer |
|---|---|---|---|---|---|---|---|---|
| J1-UPLOAD | User | Logged In | Has file | Upload document | Document processed, chunks stored | Reject unsupported formats | Ingestion log | Open Decision |
| J2-REJECT | User | Logged In | Unauth file | Upload restricted content | Upload blocked | Error displayed | Audit log | Open Decision |
| J3-ASK | User | Logged In | Has history | Send query | Answer generated with citations | Fallback if provider fails | Query logged | Open Decision |
| J4-ISOLATE | User B | Logged In | User A data | Request User A's history | Access denied via RLS | 403 Forbidden | Test result | Open Decision |
| J5-ADMIN | Admin | Logged In | Authorized | Export user data | Data exported successfully | Action denied if unauth | Audit log | Open Decision |

## 7. Release Boundaries

### Release A — Usable Internal Full-Stack Knowledge Product
The first version the owner can run and use for real internal work from a clean checkout.
- **Scope:** Authentication, document ingestion, chunking/embeddings, retrieval, RAG answers with citations, conversation history, administration, access control, retention, export/restore, audit evidence, durable storage.

### Release B — Controlled Production Release
Controlled staging and production release.
- **Scope:** Release A capabilities + CI/CD enforcement, observability, security assurance, dependency inventory, and reversible deployment.

### Release C — Executive OS Capability Expansion
Governed expansion into intelligent orchestration.
- **Scope:** Decision intelligence, planning, workflow orchestration, controlled execution, organizational memory, and learning. These features remain planned or deferred unless independently implemented and accepted.

## 8. Traceability Structure

| Requirement ID | Implementation Path | Test | Evidence | Owner | Status |
|---|---|---|---|---|---|
| AUTH-001 | TBD | TBD | TBD | Open Decision | Planned |
| ING-001 | TBD | TBD | TBD | Open Decision | Planned |
| RAG-001 | TBD | TBD | TBD | Open Decision | Planned |
| CONV-001 | TBD | TBD | TBD | Open Decision | Planned |
| ADM-001 | TBD | TBD | TBD | Open Decision | Planned |

---
*Note: No requirement is marked complete until implementation, test coverage, and validation evidence exist.*
