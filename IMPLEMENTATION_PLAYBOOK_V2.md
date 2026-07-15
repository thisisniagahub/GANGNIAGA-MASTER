# GANGNIAGA Implementation Playbook v2.2

> Status: Owner-directed execution playbook pending governed adoption; implementation target recorded, governed approvals remain explicitly gated
> Repository: F:\GANGNIAGA-MASTER
> Purpose: Develop GangNiaga from the current transformed foundation into a usable full-stack Executive Intelligence product, then harden and expand it through governed releases
> Decision snapshot: 2026-07-15
> Source inputs: TRANSFORMATION_PLAYBOOK.md, IMPROVEMENT_PLAN.md, IMPLEMENTATION_PLAYBOOK.md, IMPLEMENTATION_PLAYBOOK_V2_REVIEW.md, implementation/PLAYBOOK_V2_REVIEW_AND_DECISIONS.md, strategy/PROGRAMME_BACKLOG.md, owner directions, freellm.net discovery, official provider documentation, and live validation on 2026-07-15
> Authority: Subordinate to CONSTITUTION.md, MASTER.md, approved ADRs, architecture, standards, and implementation documents

This playbook is an execution route, not approval evidence. It may prepare proposals and implementation evidence, but only the authority named by repository governance may approve a license, ADR, constitutional change, production release, or high-impact execution capability.

## Navigation

- [0. What "Siap" Means](#0-what-siap-means)
- [1. Non-Negotiable Operator Rules](#1-non-negotiable-operator-rules)
- [2. Current Known Baseline](#2-current-known-baseline)
- [3. Execution Map](#3-execution-map)
- [S0: Governance and Baseline Reconciliation](#s0-governance-and-baseline-reconciliation)
- [S1: Toolchain and Next.js Migration](#s1-toolchain-and-nextjs-migration)
- [S2: Security and API Baseline](#s2-security-and-api-baseline)
- [S3: Test Expansion and Code Quality](#s3-test-expansion-and-code-quality)
- [S4: CI and Repository Health](#s4-ci-and-repository-health)
- [S5: Knowledge Engine Implementation](#s5-knowledge-engine-implementation)
- [S6: AI Provider and Capability Routing](#s6-ai-provider-and-capability-routing)
- [S7: Product UI and Operator Experience](#s7-product-ui-and-operator-experience)
- [S8: Usable Full-Stack Release Acceptance](#s8-usable-full-stack-release-acceptance)
- [S9: Vercel, Supabase, and Production Readiness](#s9-vercel-supabase-and-production-readiness)
- [S10: Executive Intelligence and Controlled Agent Execution](#s10-executive-intelligence-and-controlled-agent-execution)
- [S11: Controlled Production Acceptance and Continuous Assurance](#s11-controlled-production-acceptance-and-continuous-assurance)
- [12. Safe Delegation Rules](#12-safe-delegation-rules)
- [13. Standard Task Report Template](#13-standard-task-report-template)
- [14. Recommended Immediate Next Task](#14-recommended-immediate-next-task)

### Decision-State Vocabulary

Every technology, model, agent, capability, and deployment claim must use exactly one of these states:

| State | Meaning |
| --- | --- |
| Reference | Informational example only; not selected. |
| Candidate | Worth evaluating; no implementation authority. |
| Proposed | A documented recommendation awaiting governed approval. |
| Owner-directed | The owner has directed the implementation path, but any required ADR must still be reconciled. |
| Approved | The required authority has approved the decision and evidence is linked. |
| Implemented | Code/configuration exists, but full acceptance may not have passed. |
| Verified | The exact deployed artifact passed defined acceptance checks. |
| Retired | No longer active; migration/removal evidence is recorded. |

Do not convert `Owner-directed`, `Proposed`, or `Implemented` into `Approved` or `Verified` by inference.

### Latest Owner-Directed Implementation Target

The following is the current execution target for this playbook. Where repository governance requires an ADR, S0 must reconcile and record that approval before irreversible implementation:

| Concern | Direction | Current decision state |
| --- | --- | --- |
| Application framework | Next.js App Router with TypeScript | Owner-directed; ADR reconciliation required |
| UI | React through Next.js; styling approach selected during S0-T4 | Owner-directed / bounded selection pending |
| Identity, database, vectors | Supabase Auth, Supabase PostgreSQL, pgvector, and Row Level Security | Owner-directed; schema and RLS evidence required |
| Hosting | Vercel for the web application; Supabase managed services for data/auth | Owner-directed; plan/tier/commercial suitability must be verified |
| Containerization | Do not use Docker or Docker Compose in the active development, CI, staging, or production path | Owner-directed |
| AI application SDK | Vercel AI SDK or its approved equivalent behind GangNiaga-owned interfaces | Owner-directed; package contract test required |
| Cloud model providers | NVIDIA NIM primary; OpenRouter secondary/fallback | Owner-directed; production account/SLA and data-policy approval required |
| Local model provider | Ollama for local, offline, privacy-sensitive, and degraded development paths | Owner-directed; not reachable through Vercel `localhost` |
| Delivery operator | Hermes-Agent executes this playbook under human gates | Owner-directed external operator; not automatically a product runtime |
| External execution gateway | OpenClaw remains a Candidate until an ADR/evaluation selects its exact role | Candidate; not implemented |

`freellm.net` is a discovery aid only. Model availability, pricing, limits, licenses, context, tool calling, structured output, privacy, and production eligibility must be verified through the official provider and a live contract test before use.

### Target Runtime Topology (Planned Until Verified)

```text
Internal User / Operator
        |
        v
Vercel: Next.js App Router
  - React UI and streaming
  - server routes/actions
  - authorization enforcement
        |
        +--------------------------+
        |                          |
        v                          v
Supabase                    GangNiaga AI Capability Router
  - Auth                      - capability/data/budget policy
  - PostgreSQL                - model registry and fallback
  - RLS                       - NVIDIA NIM (primary cloud)
  - pgvector                  - OpenRouter (secondary cloud)
  - audit/data                - Ollama (local/on-prem only)
        |                          |
        +-------------+------------+
                      |
                      v
             Grounded answers and evidence

Delivery/runtime boundary:
  Hermes-Agent -> governed delivery operator for this playbook
  OpenClaw     -> candidate external execution gateway behind an adapter
```

The web application must remain usable for non-AI administration/status functions during provider degradation. GangNiaga remains the control plane; no model provider or external agent runtime becomes the source of truth for authorization, approvals, knowledge, workflow state, or audit.

## 0. What "Siap" Means

"Siap" is split into three measurable release outcomes. An operator must state which outcome is being claimed.

### Release A — Usable Full-Stack Product

Release A is the first version the owner can run and use for real internal work. It is complete only when:

- The repository has no unexplained dirty files.
- Documentation authority, license status, glossary status, G0 status, ADR status, and DOCUMENT_MAP are consistent.
- `npm run build` passes.
- `npm run lint` passes.
- `npm test` passes.
- `scripts/health-check.ps1` passes or has explicitly approved exceptions.
- A new operator can start the system from a clean checkout using one documented bootstrap path.
- Sign-in, authorization, knowledge ingestion, retrieval, cited answer generation, conversation history, and the operator UI work end to end.
- PostgreSQL persistence, migrations, seed/demo data, and restart recovery are proven.
- Security controls exist for user, write, ingestion, and admin actions.
- CI runs build, lint, tests, and documentation validation.
- Browser E2E tests cover the critical user journey.
- The Next.js application, Supabase Auth, PostgreSQL/pgvector, NVIDIA/OpenRouter routing, and the approved local Ollama development path are documented and validated for their intended environment.
- No Docker dependency exists in bootstrap, CI, deployment, recovery, or acceptance instructions.
- Architecture claims are separated into current, target, implemented, and validated state.
- A release decision record names remaining risks, owners, rollback plan, and next gate.

### Release B — Controlled Production Release

Release B is complete only when Release A passes and:

- A staging environment is deployed from the same immutable artifact intended for production.
- TLS, secrets management, environment isolation, least privilege, dependency scanning, backup, restore, migration, rollback, logging, metrics, alerts, and incident runbooks are validated.
- Security, privacy, accessibility, performance, resilience, recovery, and user-acceptance thresholds pass or have explicit time-bounded waivers.
- Production ownership, support, SLOs, RTO/RPO, capacity, cost limits, data retention, and deletion rules have named owners.
- A human authority signs a go/no-go record; a document or agent cannot self-authorize go-live.

### Release C — Executive OS Capability Expansion

Release C is not one unbounded big-bang release. It is a sequence of governed vertical slices covering decision intelligence, planning, approvals, workflow orchestration, controlled execution, organizational memory, learning, and assurance. Each slice must independently pass the same product, security, data, test, and operations gates before it can be called usable.

This playbook does not declare production readiness by document volume or feature existence. Readiness requires operational evidence from the exact release artifact.

### Non-Goals of a Completion Claim

- "Full stack" does not mean every target architecture document has been implemented.
- A passing unit test suite does not prove browser, database, deployment, security, or recovery behavior.
- A locally running demo does not prove production readiness.
- Planned providers, agents, plugins, and workflows remain planned until implemented and validated.

## 1. Non-Negotiable Operator Rules

Follow these rules in every task:

- Do not use `git reset --hard`, `git checkout --`, `rm -rf`, or destructive cleanup unless the user explicitly approves it for that exact action.
- Do not auto-commit unless the user says to commit. End tasks with a diff and validation report.
- Do not approve ADRs, license posture, constitutional changes, or production go-live without explicit human approval.
- Do not mark a task complete because a file exists. Completion requires validation evidence.
- Do not describe planned architecture as implemented.
- Do not start implementation feature work while build, lint, tests, or health checks are broken unless the task is explicitly repairing those checks. Governance reconciliation and baseline diagnosis may proceed to unblock them.
- Do not run tasks in parallel when they touch shared files such as package.json, package-lock.json, app.ts, AI.ts, DOCUMENT_MAP.md, README.md, GEMINI.md, or ADR files.
- Preserve user-created and untracked artifacts. Classify them before moving, ignoring, or deleting them.
- Use Windows/PowerShell-safe commands in this workspace. Commands for another shell must be clearly labelled and never assumed to be interchangeable.
- Never place a real credential in a prompt, command line, fixture, screenshot, log, task report, or committed file.
- Do not introduce Dockerfiles, Compose files, container-only bootstrap steps, or Docker-dependent CI jobs. Treat the existing `docker-compose.yml` as a legacy artifact to be retired through a reviewable change.
- Do not expose Ollama directly to the public Internet. Vercel-hosted code must never assume that `127.0.0.1:11434` refers to the owner's workstation.
- Do not allow Hermes-Agent, OpenClaw, an LLM provider, or a plugin to bypass GangNiaga authorization, approval, data, budget, or audit controls.
- Never weaken a failing check merely to obtain green status. Any exclusion must state why the excluded path is not part of the controlled surface.
- Every database migration must be forward-safe, repeatable where intended, and paired with a tested recovery or compensating plan.
- Every implemented capability must have an owner, threat considerations, tests, observability, documentation, and an explicit current-state label.

### Mandatory Task Execution Contract

Every task in this playbook uses the following contract, even when the task section does not repeat it:

1. Read `CONSTITUTION.md`, the relevant MASTER section, applicable approved ADRs, architecture, and standards before editing.
2. Capture `git status --porcelain=v1 -uall`, the current branch, and the task's baseline checks.
3. State the release target, dependencies, files in scope, files explicitly out of scope, and approval assumptions.
4. Work in one reviewable change set. Do not mix governance, dependency repair, feature development, and cosmetic cleanup in one commit.
5. Add or update tests before marking behavior complete.
6. Run the task-specific checks plus build, lint, tests, and health checks that are available at that stage.
7. Inspect `git diff --check`, `git diff --stat`, and the full relevant diff.
8. Update current-versus-planned documentation and evidence records.
9. Stop on a required human decision; do not invent approval.
10. End with the Standard Task Report in Section 13 and a cold-start handoff for the next operator.

## 2. Current Known Baseline

Live checks observed on 2026-07-15:

- `npm run build`: PASS.
- `npm test -- --runInBand`: FAIL due to `ts-jest`/Jest/TypeScript compatibility: `Cannot read properties of undefined (reading 'fileExists')`.
- `npm run lint`: FAIL because ESLint cannot find `./padded-token-cursor`.
- `scripts/health-check.ps1`: FAIL due to unmapped/untracked playbook/audit files, stale references, legacy glossary-filename misspellings, and dirty worktree.
- `git status --porcelain=v1 -uall`: untracked `CHAT_LOG_PREVIEW.jsonl`, `IMPROVEMENT_PLAN.md`, `IMPLEMENTATION_PLAYBOOK.md`, `IMPLEMENTATION_PLAYBOOK_V2.md`, `IMPLEMENTATION_PLAYBOOK_V2_REVIEW.md`, and `implementation/PLAYBOOK_V2_REVIEW_AND_DECISIONS.md` at the start of this revision.
- `LICENSE` exists and is tracked.
- `ADR-0007-CORE-TECHNOLOGY-STACK.md` is still Proposed.
- `src/AI.ts` uses `process.env.GROQ_API_KEY || 'MISSING_API_KEY'`.
- `ts-jest@^30.0.0` is not available in npm registry; latest observed version is `29.4.11`.
- Production dependency audit: PASS with zero reported production dependency vulnerabilities during the 2026-07-15 review; this is time-sensitive and must be rerun per release.
- The current UI is a static preview without identity, durable sessions, document management, citations, or browser E2E coverage.
- The current `/health` route proves only that the process answers; it does not prove database, AI provider, migration, or readiness state.
- ADR-0007 proposes the current Node.js/TypeScript/PostgreSQL direction but is not yet approved, so permanent stack expansion needs an approval or recorded governed exception.
- Review environment: Node.js `v24.15.0` and npm `11.9.0`. Supported Node/npm versions must be selected and pinned; the active target intentionally does not use Docker.
- The repository currently contains an Express/static-preview implementation and `docker-compose.yml`; these are current artifacts, not the owner-directed target stack.
- `package.json` currently exposes `docker:up`; S1-T1 must retire it before the no-Docker bootstrap can pass.
- The local machine has Ollama available with several local models, but this does not prove Vercel or production availability.
- `MASTER.md` lists OpenClaw, Claude Code, OpenHands, Codex, and Aider as replaceable execution-engine examples; it does not select or prove them implemented.
- Hermes-Agent is installed outside this repository and has been used as a reviewer/operator, but no product-runtime contract exists yet.
- `DOCUMENT_MAP.md` references `ADR-0005-OPENCLAW-AS-EXECUTION.md`, while that file is absent from the current `adr/` directory. S0 must resolve the contradiction without fabricating approval.

## 3. Execution Map

Run the work in this order:

```text
S0: Governance and baseline reconciliation
S1: Toolchain repair
S2: Security and API baseline
S3: Test expansion and code quality
S4: CI and repository health
S5: Knowledge engine implementation
S6: AI provider and capability routing
S7: Product UI and operator experience
S8: Usable full-stack release acceptance
S9: Production operations and deployment
S10: Executive intelligence capability expansion
S11: Controlled production acceptance and continuous assurance
```

Only move to the next stage when the current stage exit criteria are met.

Release mapping:

| Release outcome                               | Required stages                           |
| --------------------------------------------- | ----------------------------------------- |
| Release A — Usable Full-Stack Product         | S0 through S8                             |
| Release B — Controlled Production Release     | S0 through S9 and S11                     |
| Release C — Executive OS Capability Expansion | S10 slices, each followed by S11 evidence |

Mandatory human gates:

| Gate | Decision | Playbook location | Agent behavior |
| --- | --- | --- | --- |
| G1 | Release A users, product boundary, data classes, success metrics, exclusions, and cost ceiling | S0-T0 | Stop until owner/authority records the decision. |
| G2 | Existing license posture | S0-T2 | Never create, remove, select, or approve a license by inference. |
| G3 | Core stack, no-Docker direction, provider posture, and any required ADR approval | S0-T4, S6-T0 | Prepare evidence/proposal; do not self-approve. |
| G4 | Release A go/no-go | S8-T3 | Do not label the product usable/full-stack before acceptance. |
| G5 | Production go/no-go | S11-T1 | Do not deploy/promote without named human authorization. |
| G6 | Consequential agent action or OpenClaw adoption | S10-T4A/T4B | Pause for action-specific approval and runtime ADR. |

### Dependency and Parallelism Map

```text
S0 -> S1 -> S2 -> S3 -> S4
                    |     |
                    +--> S5 -> S6 -> S7 -> S8 -> S9 -> S11
                                      |
                                      +----------> S10 slice -> S11
```

Default to sequential execution. Parallel work is allowed only after the shared contracts are stable and the agents have disjoint files, disjoint outputs, and no hidden dependency on the same database schema, configuration, or authority decision.

## S0: Governance and Baseline Reconciliation

Goal: make the repository truth coherent before developing more code.

### S0-T0: Approve the release contract and product boundary

Depends on: none.

Scope:

- This playbook
- `strategy/PILOT_CHARTER.md`
- `strategy/USE_CASE_PORTFOLIO.md`
- `strategy/RELEASE_DECISION_RECORD.md`
- relevant owner and decision records

Tasks:

- Confirm that Release A is the first delivery target: an internal Executive Knowledge product with identity, ingestion, retrieval, cited answers, conversation history, administration, and durable storage.
- Name the target users, data classification, permitted repositories/documents, excluded actions, success metrics, cost ceiling, stop conditions, and accountable product/security/data owners.
- Decide whether multi-tenancy is required for Release A. If not, document single-organization scope and design isolation boundaries so multi-tenancy is not falsely claimed.
- State which Release C capabilities are deliberately deferred.
- Record acceptance journeys that a human reviewer will execute before Release A can be accepted.

Validation:

- Product boundary has no conflict with the Constitution, MASTER, approved ADRs, or roadmap direction.
- Every acceptance journey has an actor, starting state, expected result, and evidence method.

Exit criteria:

- Release A has an approved, bounded product contract and named decision owners.
- No operator needs to invent product scope while implementing later tasks.

### S0-T1: Classify advisory artifacts

Scope:

- `IMPROVEMENT_PLAN.md`
- `IMPLEMENTATION_PLAYBOOK.md`
- `IMPLEMENTATION_PLAYBOOK_V2.md`
- `CHAT_LOG_PREVIEW.jsonl`
- `.gitignore`
- `DOCUMENT_MAP.md`

Tasks:

- Decide whether GLM audit/playbook files are to be tracked, moved, ignored, or converted into official implementation documents.
- If tracked, add them to DOCUMENT_MAP with status `Advisory` or `Draft`.
- If not tracked, add an explicit ignore rule or move them outside the repository with approval.
- Keep `CHAT_LOG_PREVIEW.jsonl` untracked unless there is a governed reason to retain it.
- Update the baseline inventory after classification; never hard-code an incomplete untracked-file list as permanent truth.

Validation:

- `git status --porcelain=v1 -uall`
- Run the health check and classify each failure as a repository defect, an intentionally quoted historical term, or a checker defect.

Exit criteria:

- No unexplained untracked files.
- DOCUMENT_MAP matches the chosen artifact policy.
- The health check no longer fails merely because an advisory document quotes a historical filename or because the checker has stale exclusions.

### S0-T2: Reconcile license status

Scope:

- `LICENSE`
- `README.md`
- `DOCUMENT_MAP.md`
- `MASTER.md`
- `GEMINI.md`
- `package.json`

Tasks:

- Record whether the existing `LICENSE` file is approved, provisional, or accidental.
- If approved, align all references to proprietary/no-open-source status.
- If not approved, create a governed decision record before changing or removing it.
- Prefer npm convention `private: true` plus `license: UNLICENSED` unless a formal SPDX-compatible proprietary policy is approved.

Validation:

- Search all markdown and package files for license contradictions.
- Confirm no document says `LICENSE` does not exist if the file remains present.

Exit criteria:

- One consistent license posture across root docs, package metadata, and DOCUMENT_MAP.

### S0-T3: Reconcile G0, Blueprint, glossary, and ADR status

Scope:

- `G0_DECISION_PACK.md`
- `adr/ADR-0006-CONTROLLED-REPOSITORY-EVOLUTION.md`
- `adr/ADR-0007-CORE-TECHNOLOGY-STACK.md`
- `CONSTITUTION.md`
- `DOCUMENT_MAP.md`
- `MASTER.md`
- `strategy/PROGRAMME_BACKLOG.md`
- `implementation/GLOSSARY_RESOLUTION.md`

Tasks:

- Make G0 status internally consistent: Draft, Recommended, or Approved.
- Make Blueprint v2 status internally consistent.
- Keep `GLOSSARY.md` as the current path if the rename was already approved and executed; remove old mismatch wording only with evidence.
- Keep ADR-0007 as Proposed until an explicit approval record exists.
- Do not treat implementation existence as ADR approval.

Validation:

- Search for the legacy glossary misspelling, self-contradictory glossary path pairs, `LICENSE does not yet exist`, `Blueprint v2 authorized`, and `no Blueprint v2 structure is approved`.
- Re-run health check.

Exit criteria:

- No active contradiction in authority, glossary, Blueprint, license, or ADR status.

### S0-T4: Resolve the implementation stack authority

Depends on: S0-T0 through S0-T3.

Scope:

- `adr/ADR-0007-CORE-TECHNOLOGY-STACK.md`
- `conductor/tech-stack.md`
- `package.json`
- `docker-compose.yml` as a legacy artifact to retire
- architecture and deployment documents that depend on the stack

Tasks:

- Review ADR-0007 against the product boundary, current Express/static-preview implementation, and the owner-directed target.
- Revise the proposed outcome to Next.js App Router + TypeScript, Supabase Auth/PostgreSQL/pgvector/RLS, Vercel hosting, and a no-Docker operating path. Preserve `Status: Proposed` until explicit approval evidence exists.
- Record that `docker-compose.yml`, Express-only startup, and any Docker scripts are legacy paths to retire through a reviewable migration; do not delete user work without reviewing its remaining value.
- Select and record one schema/query strategy. Default recommendation: Supabase CLI SQL migrations as schema authority plus Drizzle for type-safe application queries; use Prisma only if its connection, migration, RLS, pgvector, and serverless behavior wins a documented spike.
- Select the styling approach, supported Node.js LTS/npm versions, Playwright as browser E2E, and the non-production Supabase/Vercel environment strategy.
- Define background-work boundaries for ingestion and long-running agent execution. Do not assume a Vercel request can safely run an unbounded job.
- Keep model providers and execution engines behind separate GangNiaga-owned interfaces so a stack ADR does not create NVIDIA, OpenRouter, Ollama, Hermes, or OpenClaw lock-in.
- Prepare a separate AI-provider/runtime decision record if the ADR system requires one; do not overload the core-stack ADR with volatile model IDs.

Validation:

- All permanent technology choices trace to an approved decision or a time-bounded exception.
- README, conductor context, package metadata, architecture, and implementation plan use the same status language.
- `rg -n -i "Docker|Compose|Express|Groq|Next.js|Supabase|Vercel|NVIDIA|OpenRouter|Ollama|Hermes|OpenClaw" README.md MASTER.md DOCUMENT_MAP.md conductor architecture adr implementation IMPLEMENTATION_PLAYBOOK_V2.md`

Exit criteria:

- Later tasks have an authoritative or explicitly provisional stack contract.
- No task is forced to guess whether a proposed ADR is already approved.
- Docker is absent from the active target path and is mentioned only as retired/history where necessary.

### S0-T5: Establish the governed Hermes-Agent execution profile

Depends on: S0-T0 through S0-T4. This task configures the delivery operator; it does not declare Hermes part of the production product.

Scope:

- Local Hermes installation and project context files
- model/provider configuration references without credential values
- task delegation, approval, evidence, and handoff rules
- this playbook and the repository's AI-agent standards

Tasks:

- Record Hermes-Agent's initial role as an external delivery/operator runtime that executes approved playbook tasks. Keep production-runtime adoption as a separate future decision.
- Configure Hermes to use only approved provider/model aliases backed by NVIDIA, OpenRouter, or Ollama. Do not hardcode a free model as a permanent dependency.
- Keep secrets in Hermes' approved secret/config surface and repository application secrets in their own approved surfaces; never copy keys into prompts, task files, commits, or logs.
- Give Hermes the repository authority hierarchy, current decision registry, task execution contract, no-Docker direction, file scope, validation commands, and task report template on every cold-start task.
- Enforce human pause gates for product boundary, license posture, ADR approval, privileged/destructive/external execution, Release A acceptance, and production go-live.
- Define a deny-by-default tool policy: read-only discovery first; explicit scope for writes; no destructive git/filesystem commands; no production database mutation; no external messages/deployments without task authority.
- Require sub-agent tasks to have disjoint files/outputs and require Hermes to review the combined diff. A sub-agent result is evidence, not automatic acceptance.
- Require an execution receipt containing task ID, provider/model, registry version, files touched, commands, tests, decisions requested, unresolved risks, and rollback/handoff.
- Separate Hermes health checks into installation/doctor, model catalog, direct inference, tool invocation, and full task E2E. A healthy CLI alone is insufficient.

Validation:

- Run a read-only repository audit task through Hermes and verify scope, citations, pause behavior, provider/model record, and receipt.
- Run a disposable-file implementation exercise with tests, intentional failure, retry, cancellation, and clean handoff; do not use production data or credentials.
- Confirm Hermes cannot approve an ADR, bypass a human gate, introduce Docker, or expose a secret through its configured workflow.

Exit criteria:

- Hermes can execute a cold-start playbook task reproducibly under the same governance, security, validation, and evidence rules as a human operator.

## S1: Toolchain and Next.js Migration

Goal: migrate the bounded Express/static preview into a mechanically safe Next.js full-stack foundation without losing useful behavior or history.

### S1-T1: Establish the Next.js application foundation

Scope:

- `package.json`
- `package-lock.json`
- Next.js application/configuration files
- current `src/` and `public/` preview files
- ESLint configuration
- `node_modules` only as generated local dependency state

Tasks:

- Capture the current preview behavior and API routes with characterization tests before migration.
- Do not run `create-next-app` destructively over the repository root. Generate a reference scaffold in a disposable location or apply the required Next.js files deliberately.
- Add supported versions of Next.js App Router, React, TypeScript, Supabase clients, the chosen query layer, Vercel AI SDK, provider adapters, validation, logging, and testing packages.
- Migrate the page shell and API behavior incrementally. Preserve the existing preview until equivalent Next.js routes are demonstrably working.
- Remove Express, the direct OpenAI-compatible Groq client, unused PostgreSQL/Redis packages, and obsolete scripts only after replacement behavior and rollback evidence exist.
- Retire active Docker/Compose scripts and configuration references, including the current `docker:up` package script, before the new bootstrap is accepted. Preserve the reviewed history in git; do not create an archive folder solely to keep obsolete files.
- Repair ESLint through the supported Next.js/TypeScript configuration and regenerate the lockfile only when a captured dependency error justifies it.
- Run dependency audit and record any exception with owner, impact, and expiry.

Validation:

- `npm run lint`
- `npm test`
- `npm run build`
- `npm audit --omit=dev`
- Browser smoke comparison between the preserved preview and migrated route.

Exit criteria:

- The Next.js shell builds, the preserved critical behavior has a migration path, and no active command requires Docker.

### S1-T2: Establish the supported test toolchain

Scope:

- `package.json`
- `package-lock.json`
- Vitest configuration and setup
- React Testing Library configuration
- existing and migrated tests
- legacy Jest configuration scheduled for retirement

Tasks:

- Adopt Vitest for unit/component/server-module tests unless S0-T4 records a better supported alternative.
- Port existing Jest tests before removing `jest.config.js`, Jest, or `ts-jest`.
- Add deterministic mocks/fakes for Supabase, NVIDIA, OpenRouter, Ollama, Hermes, OpenClaw, time, network, and environment state.
- Keep external live contract tests opt-in, separately labelled, rate-limited, and excluded from the default offline suite.
- Fail tests that accidentally call a real external provider in the default suite.

Validation:

- `npm test`
- `npm run build`

Exit criteria:

- Existing and migrated tests pass without calling external APIs, and coverage thresholds are recorded by risk area rather than hidden through exclusions.

### S1-T3: Normalize build/typecheck scripts

Scope:

- `package.json`
- `tsconfig.json`
- optional `tsconfig.test.json`

Tasks:

- Add or confirm scripts for `build`, `lint`, `test`, and `typecheck`.
- Add scripts for `dev`, `start`, `test:coverage`, `test:e2e`, `check`, and non-secret environment validation.
- Pin a supported Node.js LTS line through `.nvmrc` and `package.json#engines`; pin the package manager through `packageManager` where supported.
- Ensure server-only code and secrets cannot enter the client bundle. Mark server boundaries explicitly.
- Ensure test, generated, migration, and application files are handled intentionally; do not hide real errors with broad compiler/lint exclusions.

Validation:

- `npm run build`
- `npm run lint`
- `npm run typecheck`
- `npm test`
- `npm run check`

Exit criteria:

- Standard local checks are reliable and documented.

### S1-T4: Prove clean-checkout developer bootstrap

Depends on: S1-T1 through S1-T3 and the stack outcome from S0-T4.

Scope:

- `README.md`
- `CONTRIBUTING.md`
- `.env.local.example` or the approved committed example filename
- package scripts
- Supabase migration/bootstrap commands

Tasks:

- Define supported Node.js LTS, npm, Supabase CLI, and browser versions. Docker is not a prerequisite.
- Add one canonical bootstrap sequence for Windows PowerShell and label any Linux/macOS alternative separately.
- Add explicit commands for dependency install, `.env.local` setup, connection to an isolated non-production Supabase project, migration, seed, development start, validation, and safe shutdown.
- Add a preflight or doctor command that checks required tools, ports, configuration names, Supabase reachability, provider configuration, and missing secrets without printing secret values.
- Prove the sequence from a clean checkout or disposable clone; do not rely on existing `node_modules`, `dist`, database state, or shell environment.
- Prove a local offline/degraded path using mocks and, where configured, Ollama. Do not require NVIDIA/OpenRouter credits for basic bootstrap.

Validation:

- A second operator or clean workspace completes bootstrap using only committed instructions.
- Build, lint, typecheck, tests, health check, migration, and local browser smoke test pass without Docker.
- `npm run` exposes no Docker/Compose bootstrap script, and committed setup instructions contain no active Docker prerequisite.

Exit criteria:

- Local development is reproducible and does not depend on undocumented machine state.

## S2: Security and API Baseline

Goal: remove unsafe pilot behavior before adding larger features.

### S2-T1: Fail safely on missing provider configuration

Scope:

- AI/provider configuration modules
- committed environment example
- tests

Tasks:

- Remove `MISSING_API_KEY` fallback.
- Remove Groq as the assumed primary provider. Preserve it only as `Retired` history until its client/dependency/configuration is removed through the S1 migration.
- Validate configuration per enabled provider: NVIDIA requires its server-only key/base URL; OpenRouter requires its server-only key, explicit models, and approved routing/privacy policy; Ollama requires an approved local/on-prem endpoint and model inventory.
- Start the application in an explicit `mock`, `local-degraded`, or `provider-enabled` mode. Never silently substitute a fake key or random cloud model.
- Allow basic UI/bootstrap tests to run without cloud credentials; return an operator-visible unavailable/degraded state when an unconfigured AI feature is called.
- Keep deterministic mock embeddings only as explicitly named test behavior, never as production semantic retrieval.
- Add tests for missing, partial, invalid, client-exposed, and disabled provider configuration without calling a real provider.

Validation:

- `rg -n "MISSING_API_KEY|GROQ_API_KEY|NEXT_PUBLIC_.*(KEY|TOKEN|SECRET)|127.0.0.1:11434" src app .env* 2>$null`
- `npm test`
- `npm run build`

Exit criteria:

- No silent fake key, random model, public secret, or environment-invalid provider behavior.

### S2-T2: Protect write/admin endpoints

Scope:

- current Express endpoint or its migrated Next.js route handler/server action
- committed environment example selected during S1
- tests

Tasks:

- Protect `/api/seed` with an authenticated administrator policy. A static admin key or localhost-only guard may be used only as an explicitly temporary development control before S2-T4.
- Locate the endpoint after S1 migration before editing; do not recreate an obsolete Express path if the route has moved to Next.js.
- Add request size and text length limits.
- Add consistent 400/401/403 error behavior.
- Document pilot-only endpoints.

Validation:

- Tests for missing admin key, invalid payload, valid seed, and query length.
- `npm test`

Exit criteria:

- No unauthenticated write path remains for seed/ingest actions.

### S2-T3: Environment and secrets hygiene

Scope:

- `.env.example`
- `.env.local.example` if selected by S1
- `.gitignore`
- Vercel and Supabase environment documentation
- docs that mention environment variables

Tasks:

- Align environment names with actual server/client boundaries and the model registry.
- Define only configuration used by implemented code. Target names include `NVIDIA_API_KEY`, `NVIDIA_BASE_URL`, `OPENROUTER_API_KEY`, `OPENROUTER_BASE_URL`, `OLLAMA_BASE_URL`, model/capability aliases, Supabase public URL/anon key, and server-only Supabase service-role credentials where truly required.
- Keep `NEXT_PUBLIC_*` variables limited to values safe for browsers. Provider keys and Supabase service-role credentials must remain server-only.
- Store production secrets in approved Vercel/Supabase secret surfaces; store local secrets only in ignored local environment files.
- Separate development, preview, staging, and production credentials. Never point preview branches at production data by default.
- Ensure real environment files, provider payloads, chat logs, debug traces, exports, and local Hermes/OpenClaw state are ignored where applicable.
- Add secret scanning to CI and rotate any credential that may have entered git history or logs.

Validation:

- `rg -n "API_KEY|PASSWORD|TOKEN|SECRET|SERVICE_ROLE|NVIDIA_API_KEY|OPENROUTER_API_KEY|OLLAMA_BASE_URL|CHAT_LOG" .env* README.md GEMINI.md src app 2>$null`
- Inspect the built client assets for server-only variable names or secret values using safe test fixtures, never real credentials.

Exit criteria:

- No misleading or dead environment variables.
- No real secrets committed.
- Browser-delivered code cannot access cloud-provider or service-role credentials.

### S2-T4: Implement identity, sessions, and authorization

Depends on: S0-T0, S0-T4, S1 complete, S2-T1 through S2-T3.

Scope:

- authentication/session modules
- user and role persistence
- API middleware
- UI sign-in/session behavior
- tests and environment documentation

Tasks:

- Implement the approved identity path; do not invent a custom password system if a governed identity provider is selected.
- Define at minimum `user`, `operator`, and `admin` permissions, or a smaller approved role model for Release A.
- Enforce authorization server-side for every protected endpoint; UI hiding is not authorization.
- Use secure, expiring sessions or tokens with logout/revocation behavior, CSRF protection where applicable, and safe cookie settings where cookies are used.
- Define bootstrap-admin behavior without committing credentials or leaving a permanent universal password.
- Record actor identity for ingestion, administration, and other state-changing actions.
- If Release A is single-organization, enforce that boundary and add tests preventing cross-user data access. If multi-tenant, add tenant scoping to every persisted and cached object and test isolation.

Validation:

- Tests cover unauthenticated, unauthorized, authorized, expired/revoked, and cross-user or cross-tenant access paths.
- Browser E2E covers sign-in, protected navigation, logout, and blocked admin action.
- No privileged route relies only on client-side checks.

Exit criteria:

- Every request has a defined identity/anonymous posture and every privileged action has a server-enforced policy.

### S2-T5: Add web and API abuse protections

Depends on: S2-T4.

Scope:

- Next.js middleware, route handlers, server actions, and edge configuration
- API routes
- frontend request handling
- tests

Tasks:

- Work package S2-T5a — edge/API policy: security headers, CSP, explicit CORS, trusted forwarding, request IDs, content-type enforcement, and safe errors.
- Work package S2-T5b — resource controls: per-actor/IP/organization limits, concurrency, timeout, cancellation, provider/database budgets, and abuse telemetry.
- Work package S2-T5c — schema and payload safety: validated inputs, uploads, identifiers, pagination, vector boundaries, filenames/MIME types, and output sanitization.
- Add security headers, explicit CORS policy, trusted-proxy policy, request IDs, content-type enforcement, and consistent safe error bodies.
- Add rate and concurrency limits for authentication, search, ask, ingest, and administrative operations.
- Validate body schemas, vector dimensions, numeric finiteness, pagination/limit bounds, identifiers, filenames, MIME types, and maximum upload/chunk sizes.
- Define timeout and cancellation behavior for database and provider calls.
- Prevent stack traces, provider responses, internal paths, prompts, and secrets from leaking to clients.

Validation:

- Negative tests cover oversized input, malformed JSON, wrong content type, invalid vectors, excessive limits, repeated requests, timeout, and provider failure.
- Static and dynamic scans report no unreviewed high/critical findings.

Exit criteria:

- Public and authenticated surfaces fail closed with bounded resource use.

### S2-T6: Establish privacy, provenance, and immutable audit events

Depends on: S2-T4 and the Release A data classification from S0-T0.

Scope:

- audit-event schema and writer
- source/provenance metadata
- retention/deletion behavior
- privacy and operator documentation

Tasks:

- Define what user, document, conversation, prompt, output, model, authorization, and administrative events are retained.
- Record actor, action, target, timestamp, result, request/correlation ID, authorization context, and source lineage without logging secrets or unnecessary document content.
- Implement retention, deletion, export, and access-control rules for Release A data.
- Make audit records append-oriented and protected from ordinary user modification.
- Add redaction rules and tests for credentials, tokens, personal data, prompts, and provider payloads.

Validation:

- Tests reconstruct a state-changing journey from audit records.
- Deletion/retention tests prove the approved policy.
- Log review finds no secret or raw sensitive payload leakage.

Exit criteria:

- The system can explain who changed or accessed controlled information and under what authorization.

## S3: Test Expansion and Code Quality

Goal: make the bounded pilot maintainable and safe to change.

### S3-T1: Expand unit and API tests

Scope:

- `src/app.spec.ts`
- `src/AI.spec.ts`
- `src/VectorStore.spec.ts`
- test helpers as needed

Tasks:

- Test `/health`, `/api/knowledge/search`, `/api/knowledge/ask`, and protected `/api/seed`.
- Test deterministic embeddings.
- Test VectorStore insert/search/limit/empty-state behavior.
- Mock external LLM calls.

Validation:

- `npm test`
- Optional: `npm test -- --coverage`

Exit criteria:

- At least meaningful tests for every public endpoint and core class.

### S3-T2: Replace loose types

Scope:

- `src/app.ts`
- `src/VectorStore.ts`
- `src/AI.ts`

Tasks:

- Replace `any` with `unknown`, typed request bodies, typed metadata, and explicit response types.
- Add simple runtime validation where external input enters the app.

Validation:

- `rg -n "\\bany\\b" src -g "*.ts"`
- `npm run build`
- `npm run lint`

Exit criteria:

- No avoidable `any` in production source.

### S3-T3: Improve runtime error handling

Scope:

- `src/app.ts`
- `src/index.ts`

Tasks:

- Add centralized error response helpers.
- Add graceful shutdown for server process.
- Avoid leaking stack traces to clients.

Validation:

- Tests for error paths.
- `npm run build`
- `npm test`

Exit criteria:

- Runtime failure behavior is predictable.

### S3-T4: Establish integration and browser E2E harnesses

Depends on: S2 complete.

Scope:

- integration-test configuration and fixtures
- isolated test-environment contract
- browser E2E configuration
- critical user-journey specifications

Tasks:

- Define how later migrations will run against an isolated test database without touching developer or production volumes.
- Add the integration-test harness and browser runner now using the implemented Release A behavior available at this stage.
- Add browser tests for the currently implemented sign-in, protected navigation, health/error behavior, and admin restrictions.
- Register pending Release A journeys—document ingestion, status/progress, ask-with-citations, and conversation history—as explicit S8 acceptance items, not skipped green tests.
- Make tests deterministic: mock external AI providers except for a separately labelled opt-in contract test.
- Capture failure artifacts without recording credentials or sensitive documents.

Validation:

- Unit, integration, and browser E2E suites run with distinct commands locally and in CI.
- At least one clean-checkout run proves the harness and current critical journey.

Exit criteria:

- Integration and E2E infrastructure is reliable; later features cannot claim completion without extending it.

### S3-T5: Add security, accessibility, performance, and resilience gates

Depends on: S3-T4 and the security baseline implemented so far.

Scope:

- security test cases and dependency/secret scans
- accessibility checks
- load/performance scripts
- resilience/recovery scenarios
- approved threshold record

Tasks:

- Add dependency, secret, and static-analysis checks with severity policy and waiver ownership.
- Test OWASP-relevant web/API behavior, object-level authorization, upload/ingestion abuse, prompt injection, unsafe source content, and sensitive-data disclosure.
- Add automated accessibility checks and keyboard/manual review for critical UI paths.
- Define and test latency, throughput, concurrency, token/cost, and failure-rate thresholds using representative data.
- Establish scenarios for database/provider unavailability, retry limits, timeouts, process restart, migration failure, and recovery from backup; execute each scenario when its dependency is implemented and close all of them at S8/S9.

Validation:

- No unresolved critical/high finding is accepted silently.
- Measured results are recorded against approved thresholds, not described with subjective words such as "fast" or "enterprise-grade".

Exit criteria:

- Baseline risk gates are automated and the remaining feature-dependent scenarios are explicit S8/S9 blockers.

## S4: CI and Repository Health

Goal: make quality gates automatic.

### S4-T1: Add code validation CI

Scope:

- `.github/workflows/code-validation.yml`
- optional `.nvmrc`

Tasks:

- Add CI for `npm ci`, `npm run build`, `npm run typecheck`, `npm run lint`, and `npm test`.
- Use the Node.js LTS version pinned and approved in S0-T4/S1-T3; do not hardcode a different CI runtime.
- Keep docs validation separate or clearly named.

Validation:

- Local commands pass before PR.
- Workflow syntax is valid.

Exit criteria:

- Every PR runs code validation.

### S4-T2: Update health check and document map

Scope:

- `scripts/health-check.ps1`
- `DOCUMENT_MAP.md`
- advisory artifacts policy from S0

Tasks:

- Make health check reflect current repository scope.
- Do not require generated/build/runtime artifacts to be mapped unless intentionally tracked.
- Ensure DOCUMENT_MAP maps controlled docs and explains excluded/generated files.
- Classify `IMPLEMENTATION_PLAYBOOK_V2.md` as the canonical execution playbook if approved; classify or retire V1, review reports, improvement notes, and chat preview artifacts without losing useful knowledge.
- Make historical quotations of legacy filenames distinguishable from active broken references rather than disabling the check broadly.

Validation:

- `powershell -NoProfile -ExecutionPolicy Bypass -File .\scripts\health-check.ps1`

Exit criteria:

- Health check is useful and passes on intended clean state.

### S4-T3: Add CI security, artifact, and promotion controls

Depends on: S4-T1 and S4-T2.

Scope:

- CI workflows
- dependency/secret/static scan configuration
- application build/SBOM/provenance metadata
- branch and release documentation

Tasks:

- Add dependency, secret, static-analysis, license-policy, and build-output scans with explicit severity thresholds.
- Pin CI actions and runtime versions deliberately; enable dependency caching without caching secrets or mutable build outputs as trusted artifacts.
- Record one versioned application release candidate with commit SHA, lockfile, build inputs, dependency metadata, and Vercel/Supabase provenance. If Vercel rebuilds per environment, verify equivalent inputs and output identity rather than claiming a reused binary artifact.
- Define required checks, approval boundaries, artifact retention, and how failed checks block promotion.
- Generate an SBOM or equivalent dependency inventory for Release B artifacts if supported by the chosen deployment path.

Validation:

- Pull-request workflow runs all mandatory checks on a clean branch.
- A deliberately failing test or scan proves that promotion is blocked.
- Artifact identity is traceable to the reviewed commit.

Exit criteria:

- CI provides evidence and enforcement, not only informational output.

## S5: Knowledge Engine Implementation

Goal: move from in-memory demo to durable bounded pilot knowledge.

### S5-T0: Define the Release A information and API model

Depends on: S0-T0, S0-T4, S2 identity/authorization contract, and S4 quality gates.

Scope:

- API contract/OpenAPI document
- database/entity model
- source, classification, provenance, retention, and authorization rules
- migration and compatibility policy

Tasks:

- Define users/identities, roles, documents, document versions, chunks, embeddings, ingestion jobs, conversations, messages, citations, provider runs, and audit events required by Release A.
- Define ownership and access scope on every persisted entity.
- Define API schemas, status/error model, pagination, idempotency, versioning, upload constraints, and backward-compatibility policy.
- Define document/version deduplication, content hashes, source deletion, re-indexing, retention, and derived-data deletion behavior.
- Review indexes, uniqueness, foreign keys, timestamps, lifecycle states, and transaction boundaries before coding migrations.

Validation:

- Every Release A user journey maps to API operations and persisted entities.
- Every sensitive object has classification, owner/scope, retention, and deletion behavior.
- Schema and API review has no orphan object or undocumented state transition.

Exit criteria:

- Database and API implementation can proceed from an explicit contract rather than ad-hoc route growth.

### S5-T1: Add database migration and pgvector storage

Scope:

- `src/VectorStore.ts`
- Supabase SQL migrations and generated types
- approved query/repository modules
- committed environment example
- tests

Tasks:

- Use the approved migration approach; do not build an untracked one-off schema initializer.
- Use Supabase migrations as the reproducible schema source of truth; do not rely on dashboard-only SQL changes.
- Add migrations for the approved Release A entities, RLS policies, indexes, functions, and pgvector extension while preserving identity/session structures from S2.
- Add Supabase PostgreSQL-backed vector storage with initialization/readiness/search/insert and authorization-aware query boundaries.
- Generate and validate database types after migrations. Prevent application code from silently drifting from the deployed schema.
- Keep in-memory VectorStore only as explicit test/dev fallback if approved.
- Use parameterized queries or the approved ORM, transactions where atomicity matters, connection pooling, and bounded query timeouts.
- Use separate non-production Supabase projects/branches or another approved isolated strategy for development and staging; never run destructive migration tests against production.

Validation:

- Apply migrations to an isolated non-production Supabase environment.
- migration runs safely twice
- `npm test`
- manual seed/search persistence test after app restart
- migration from the last supported schema version and recovery from a failed migration are tested
- RLS negative tests prove users cannot read or mutate another user's/organization's rows through direct API access.

Exit criteria:

- Knowledge survives app restart.

### S5-T2: Implement the production embedding pipeline

Depends on: S5-T0 and S5-T1.

Scope:

- embedding provider/interface
- model/config registry
- batching, retries, and rate/cost limits
- vector schema/versioning
- deterministic test embedding
- evaluation fixtures

Tasks:

- Replace the hash-derived pseudo-vector as a semantic production mechanism; retain it only as an explicitly named deterministic test fixture if useful.
- Implement cloud and local embedding adapters independently from answer generation. Initial candidates are NVIDIA NIM `baai/bge-m3` for hosted multilingual embeddings and Ollama `qwen3-embedding:0.6b` for local development; neither becomes production-approved without official-provider verification and retrieval evaluation.
- Record model ID/version, vector dimensions, normalization, chunking compatibility, language coverage, limits, timeout, retry, and cost behavior.
- Store embedding model/config version with every vector and define how model changes trigger safe re-embedding and index migration.
- Never mix vectors from different models, dimensions, normalization rules, or chunking versions in the same retrieval namespace without explicit compatibility and migration metadata.
- Select the final vector dimension from measured retrieval quality and Supabase capacity, then enforce it at schema, application, and contract-test boundaries. Do not reuse the old 384-dimension capacity estimate unless the selected model actually produces 384 dimensions.
- Batch requests within provider limits, bound concurrency, and handle partial failure/idempotent retry.
- Ensure default automated tests do not call an external provider.

Validation:

- Contract tests validate dimensions, finite values, deterministic fixture behavior, failure handling, and version metadata.
- A small Bahasa Melayu/English fixture demonstrates meaningful nearest-neighbor behavior beyond exact-text hashing.
- Provider unavailability and quota exhaustion fail safely and leave jobs recoverable.

Exit criteria:

- Production retrieval uses a versioned semantic embedding path with measurable quality and cost.

### S5-T3: Add document ingestion

Depends on: S5-T1 and S5-T2.

Scope:

- Next.js route handlers/server actions and ingestion services
- background-job coordinator/worker integration
- `scripts/ingest-repo.*`
- tests

Tasks:

- Add authenticated ingestion endpoint.
- Chunk markdown safely.
- Store source path, heading, hash, timestamp, and classification metadata.
- Prevent ingestion of secrets, node_modules, dist, .git, and large files.
- Model ingestion as a bounded job with status, idempotency, retry limit, cancellation, and failure reason; do not keep long ingestion work inside an unbounded HTTP request.
- Keep each Vercel request within measured platform limits. Schedule or dispatch durable work through an approved non-request-bound mechanism; client polling is for status, not job ownership.
- Enforce document ownership/classification and authorization before parsing or storing content.
- Treat uploaded and repository content as untrusted data, never as executable instructions.

Validation:

- tests for chunking, blocked paths, auth, and ingestion.
- local ingest of selected docs only.

Exit criteria:

- Repository knowledge can be ingested reproducibly.

### S5-T4: Retrieval quality baseline

Depends on: S5-T1 through S5-T3.

Scope:

- `src/VectorStore.ts`
- `src/AI.ts`
- `strategy/PILOT_EVALUATION_REPORT.md` or implementation report

Tasks:

- Create a small query set for known answers.
- Measure retrieval hit quality manually or with tests.
- Record limitations.

Validation:

- Query set results recorded.
- No unsupported claim of semantic accuracy beyond evidence.

Exit criteria:

- The pilot has a known retrieval baseline.

### S5-T5: Implement knowledge lifecycle and recovery

Depends on: S5-T1 through S5-T4.

Scope:

- document/version lifecycle services
- re-index/delete/export behavior
- backup and restore procedures for knowledge data
- integration tests and operator documentation

Tasks:

- Implement list, inspect, update metadata, re-ingest/version, archive, and authorized delete flows.
- Delete or re-index derived chunks/embeddings consistently when the source changes.
- Prevent stale, deleted, unauthorized, or superseded content from appearing in retrieval.
- Add export and restore validation for Release A knowledge and configuration data.
- Record lineage from answer citation to chunk, source version, ingestion job, and actor.

Validation:

- Integration tests cover version replacement, authorization, stale-data exclusion, delete propagation, backup, and restore.
- A restored environment answers the same approved retrieval fixtures within documented tolerance.

Exit criteria:

- Knowledge is durable, governable, recoverable, and traceable throughout its lifecycle.

## S6: AI Provider and Capability Routing

Goal: deliver measurable AI capabilities through NVIDIA, OpenRouter, and Ollama without provider, model, or agent-runtime lock-in.

### S6-T0: Approve the provider registry and operating posture

Depends on: S0-T4, S2-T1, and the Release A data classification.

Tasks:

- Create a versioned registry that separates logical capability aliases from provider model IDs, credentials, and environment-specific routing.
- Record NVIDIA NIM as the primary cloud provider, OpenRouter as the secondary/fallback broker, and Ollama as the local/offline/privacy-sensitive development provider.
- Record production eligibility independently from technical availability. NVIDIA trial endpoints and OpenRouter free models are development candidates, not production SLAs.
- Use `freellm.net` only to discover candidates. Verify each candidate against official model/provider documentation, license/terms, live catalog/API, and a dated contract test.
- Resolve every OpenRouter candidate to an exact model ID from the live official `/models` catalog, store the dated ID in the registry, and pass the required capability contract before implementation. A descriptive label such as “Qwen Coder” is not executable configuration.
- Define approved data classes per provider, including OpenRouter provider-selection/data-collection/ZDR requirements where company data is involved.
- Define the initial capability candidates without treating them as permanent:

| Capability alias | Primary candidate | Secondary candidate | Local/degraded candidate |
| --- | --- | --- | --- |
| `executive.reasoning` | NVIDIA `z-ai/glm-5.2` | Explicit OpenRouter reasoning model that passes the contract suite | Ollama `qwen3.5:4b` or a measured local alternative |
| `agent.coding` | NVIDIA `z-ai/glm-5.2` when approved | Registry-selected exact OpenRouter Qwen Coder ID after live lookup/contract test | Installed/approved Ollama coding model such as `qwen2.5-coder:7b` |
| `task.fast` | Approved NVIDIA low-latency model | Approved OpenRouter Nemotron Nano-class model | Measured small Ollama model |
| `rag.answer` | Approved NVIDIA grounded-answer model | Explicit OpenRouter fallback | Approved local model for non-hosted data only |
| `embedding.multilingual` | NVIDIA `baai/bge-m3` candidate | Approved hosted replacement | Ollama `qwen3-embedding:0.6b` candidate |
| `content.safety` | Application policy and authorization first | Approved safety model as defence-in-depth | Local deterministic rules/approved model |

Required discovery and verification sources:

| Source | Required use |
| --- | --- |
| [freellm.net](https://freellm.net/) | Candidate discovery only; never production authority. |
| [NVIDIA API Catalog](https://build.nvidia.com/) and each selected model card | Model identity, features, license/terms, endpoint, context, and production entitlement. |
| [OpenRouter models API](https://openrouter.ai/api/v1/models) | Live model identity, availability, capabilities, context, and price snapshot. |
| [OpenRouter provider routing](https://openrouter.ai/docs/guides/routing/provider-selection), [fallbacks](https://openrouter.ai/docs/guides/routing/model-fallbacks), [limits](https://openrouter.ai/docs/api/reference/limits), and [ZDR](https://openrouter.ai/docs/guides/features/zdr) | Routing, privacy, rate, fallback, and provider-policy controls. |
| [Ollama model library](https://ollama.com/library) and [context documentation](https://docs.ollama.com/context-length) | Installed tag, size, capabilities, runtime context, hardware fit, and local test evidence. |
| [Hermes-Agent documentation](https://hermes-agent.nousresearch.com/docs/) | Operator runtime, providers, tools, memory, skills, MCP, gateway, security, and deployment behavior. |
| [OpenClaw documentation](https://docs.openclaw.ai/) | Candidate gateway/runtime architecture, agents, tools, channels, sandbox, security, operations, and adapter evaluation. |

Validation:

- Registry entries include state, provider, model ID, capabilities, official source, license/terms, data policy, context/output limits, tool/structured-output support, cost/rate information, test evidence, owner, review date, and expiry/revalidation date.
- No `:free`, random router, trial endpoint, or unverified local tag is labelled production-ready.

Exit criteria:

- Operators can distinguish candidate, approved, implemented, and verified provider/model configurations without reading source code.

### S6-T1: Provider abstraction

Scope:

- GangNiaga provider interfaces and Vercel AI SDK adapters
- provider/model registry and server-only configuration
- tests

Tasks:

- Define GangNiaga-owned interfaces for text generation/streaming, tools, structured output, embeddings, model discovery/health, token usage, cancellation, and provider errors. Do not leak provider-specific response types into domain logic.
- Implement NVIDIA NIM through its official/OpenAI-compatible contract and Vercel AI SDK-compatible adapter where supported.
- Implement OpenRouter through its official Vercel AI SDK/OpenAI-compatible adapter with explicit model IDs, provider policy, fallback controls, and metadata capture.
- Implement Ollama for local/on-prem use with explicit base URL, model inventory, context configuration, tool/structured-output capability checks, and bounded timeouts.
- Keep embedding and answer-generation adapters separate even when they share a provider.
- Remove the legacy Groq-specific implementation only after equivalent characterized behavior, rollback evidence, and tests exist.
- Do not make Hermes-Agent or OpenClaw a model provider; they are execution runtimes/operators with separate contracts.

Validation:

- Offline tests for adapter normalization, streaming, tool calls, structured output, embeddings, cancellation, provider errors, missing configuration, and secret redaction.
- `npm run build`

Exit criteria:

- NVIDIA, OpenRouter, and Ollama can be enabled independently through one stable GangNiaga contract, and unavailable adapters do not break unrelated product functions.

### S6-T2: Capability routing

Scope:

- `src/capabilities/*`
- config file if needed
- tests

Tasks:

- Route by logical capability, data classification, required tools/structured output, minimum context, latency target, cost ceiling, environment, provider health, and approved model state.
- Resolve provider/model IDs from the versioned registry; avoid hardcoding volatile free-model availability in business logic.
- Require capability compatibility before fallback. A fallback must not silently lose tools, JSON schema, context, privacy, or safety requirements.
- Keep provider/model selection sticky for the bounded operation when switching could invalidate tools, embeddings, or output schemas.
- Never use OpenRouter's random free router for production or evaluation evidence that requires reproducibility.
- Add circuit breakers, bounded retries with jitter, timeout/cancellation propagation, concurrency limits, and an operator-visible degraded/no-AI mode.
- Record why a route/fallback was chosen without exposing prompts, credentials, or sensitive payloads.

Validation:

- Tests cover known/unknown capabilities, incompatible fallback, classified data, provider outage, quota exhaustion, timeout, cancellation, and degraded mode.
- no external API calls in tests.

Exit criteria:

- Capability routing works for implemented capabilities.

### S6-T3: Implement grounded answers, citations, and RAG safety

Depends on: S5 complete and S6-T1.

Scope:

- retrieval-to-generation pipeline
- prompt and context builder
- citation response schema
- authorization filtering
- tests and evaluation fixtures

Tasks:

- Return structured citations that identify source title/path, approved excerpt or locator, version, and relevance evidence without exposing unauthorized content.
- Filter retrieval by actor and organization scope before any content reaches the model.
- Separate system instructions, user input, and untrusted retrieved content; instruct the model that document text cannot grant authority or override policy.
- Add groundedness, no-answer, conflicting-source, stale-source, malicious-source, and citation-validity tests.
- Bound context size, number of chunks, provider timeout, retry count, token usage, and output length.
- Make uncertain or unsupported answers explicit instead of manufacturing confidence.

Validation:

- Every returned citation resolves to an authorized, current source version.
- Prompt-injection fixtures cannot trigger privileged actions, reveal hidden instructions, or bypass authorization.
- No-answer and conflicting-source behavior meet the approved product contract.

Exit criteria:

- Answers are attributable, access-controlled, bounded, and fail safely.

### S6-T4: Add provider contract tests, evaluations, and cost controls

Depends on: S6-T1 through S6-T3.

Scope:

- opt-in live provider contract suite
- offline evaluation dataset
- model/config registry
- usage and cost accounting
- fallback/circuit-breaker behavior

Tasks:

- Keep default CI provider-free; create a separately authorized live contract test that validates the configured provider/model without exposing credentials.
- Version prompts, model configuration, retrieval settings, and evaluation datasets.
- Measure groundedness, citation correctness, refusal/no-answer quality, latency, error rate, and cost per successful journey.
- Add budget limits, per-user/organization quotas where required, circuit breaking, and operator-visible degraded behavior.
- Require evaluation comparison before promoting a provider, model, prompt, or retrieval configuration change.

Validation:

- Offline evaluations are deterministic enough to detect regressions.
- Live contract evidence identifies provider/model/config and time without storing secrets.
- A forced provider outage and budget exhaustion produce safe, understandable behavior.

Exit criteria:

- AI behavior and cost are measurable, replaceable, and release-gated.

### S6-T5: Prove provider security, privacy, resilience, and deployment boundaries

Depends on: S6-T0 through S6-T4 and the non-production/production boundary designed in S0-T4 and S4-T3. S9 later validates the production environment.

Tasks:

- Threat-model prompt injection, tool injection, cross-user data leakage, provider retention/training, compromised model output, excessive agency, denial-of-wallet, and provider supply-chain changes.
- Enforce server-only provider calls, egress allowlists where available, redacted observability, per-user/organization budgets, and emergency provider/model disable switches.
- Prove that Vercel-hosted code does not attempt to reach the owner's local Ollama endpoint. Local Ollama is available only to local/on-prem runtimes or through a separately approved authenticated private gateway.
- Validate OpenRouter provider/data policy and NVIDIA production entitlement before sending non-public company data.
- Capture provider, model, registry version, prompt/config version, route reason, fallback chain, latency, tokens, estimated cost, and outcome in an access-controlled provider-run record.
- Define response procedures for provider compromise, model retirement, breaking API change, quota exhaustion, key leak, and unexpected cost spike.

Validation:

- Security tests demonstrate that client code cannot obtain provider secrets or invoke privileged tools directly.
- Forced outage, malformed output, incompatible fallback, budget exhaustion, model removal, and key revocation exercises fail safely.
- A production-like deployment passes the exact provider contract suite using approved non-production data before promotion.

Exit criteria:

- Provider use is authorized, observable, bounded, reversible, and environment-correct.

## S7: Product UI and Operator Experience

Goal: make the bounded pilot usable and transparent.

### S7-T0: Define the Next.js frontend architecture and user journeys

Depends on: S0-T0, S0-T4, and stable API contract from S5-T0.

Scope:

- frontend decision/ADR evidence
- information architecture
- route/page and component plan
- critical journey acceptance specifications

Tasks:

- Use the owner-directed Next.js App Router architecture after S0-T4 records its governed status. Treat the existing static UI as migration input, not the final shell.
- Define server/client component boundaries, route handlers/server actions, authentication middleware, caching/revalidation, streaming, error boundaries, and server-only data access.
- Define routes/views for sign-in, executive chat, citations/source inspection, conversations, knowledge/documents, ingestion jobs, system status, and authorized administration.
- Define loading, empty, degraded, offline, unauthorized, forbidden, validation, provider-failure, and recovery states.
- Define responsive, keyboard, screen-reader, browser-support, localization, and design-token expectations.
- Map every screen action to the API contract and authorization policy.

Validation:

- No planned screen depends on an undefined API or bypasses server authorization.
- Critical Release A journeys have wire-level acceptance criteria before UI implementation.

Exit criteria:

- Frontend implementation has an approved architecture and complete journey map.

### S7-T1: Frontend validation and status

Scope:

- `public/index.html`
- `public/script.js`
- `public/style.css`
- Next.js `app/`, component, style, and server modules created by S1
- tests/manual checklist

Tasks:

- Implement authenticated application shell and navigation for the approved role model.
- Migrate useful visual and interaction behavior from the static preview into reusable React components; remove the old entry point only after parity and acceptance evidence.
- Add visible input constraints and client-side validation that mirrors—but never replaces—server validation.
- Display real readiness/dependency status appropriate to the user's role; do not turn a shallow process check into a green production badge.
- Show clear error states.
- Show loading/cancellation/retry behavior for long AI calls.
- Keep UI focused on the approved internal executive journeys.

Validation:

- local browser manual test.
- screenshots if UI changes are significant.

Exit criteria:

- User can see service status and input constraints.

### S7-T2: Conversation session memory

Scope:

- conversation/session service and persistence
- Next.js server routes/actions and React conversation state
- tests

Tasks:

- Add durable, user-scoped conversation and message history using the approved database model.
- Store only necessary context and construct bounded model context independently from the full retained history.
- Add create, list, rename if approved, reopen, clear/archive, and delete behavior.
- Enforce access scope on every conversation/message operation.
- Avoid claiming enterprise memory engine implementation.

Validation:

- tests for create/add/list/get/clear/delete, authorization, retention, and context-window bounds.
- browser E2E for a two-turn conversation, page reload, reopen, and logout/login continuity.

Exit criteria:

- Pilot supports bounded conversation continuity.

### S7-T3: Implement knowledge and ingestion operator UI

Depends on: S5 complete and S7-T0.

Scope:

- knowledge/document screens
- ingestion controls and job status
- citation/source viewer
- authorized administration UI
- browser tests

Tasks:

- Work package S7-T3a — document experience: list, filter, inspect, upload/select source, metadata/classification review, version history, archive/delete confirmation.
- Work package S7-T3b — ingestion operations: start bounded jobs, progress, cancellation, safe failure, retry, idempotency, and stale-job recovery.
- Work package S7-T3c — citation experience: answer-to-source navigation, authorized excerpts/locators, source version, relevance/provenance, and inaccessible-source handling.
- Let authorized users select or upload approved sources, review classification/metadata, start ingestion, and monitor success/failure/cancellation.
- Show document versions, ingestion status, last indexed time, owner/scope, and safe failure reasons.
- Provide source/citation inspection from answers without exposing inaccessible full documents.
- Provide re-index/archive/delete actions only to authorized roles with confirmation and audit evidence.
- Prevent duplicate submissions and make retried/idempotent job behavior visible.

Validation:

- Browser tests cover successful ingestion, rejected type/size, unauthorized action, duplicate input, failed job, retry, citation opening, and delete/re-index lifecycle.
- UI state remains correct after reload and server restart.

Exit criteria:

- An authorized operator can manage the full knowledge lifecycle without direct database or terminal access.

### S7-T4: Complete usability and accessibility acceptance

Depends on: S7-T1 through S7-T3.

Scope:

- responsive UI and design system
- automated/manual accessibility checks
- cross-browser smoke tests
- user-acceptance evidence

Tasks:

- Remove hard-coded online/healthy claims and placeholder data that could be mistaken for real state.
- Ensure keyboard navigation, focus management, labels, status announcements, contrast, reduced-motion behavior, and error association.
- Test supported desktop/mobile widths and browsers.
- Run the approved Release A journeys with representative internal users and record defects, usability outcomes, and acceptance.

Validation:

- Automated accessibility gate passes and critical journeys pass manual keyboard/screen-reader review.
- No critical/major usability defect remains open without approved waiver.

Exit criteria:

- The product is understandable and usable by its intended internal users, not merely operable by developers.

## S8: Usable Full-Stack Release Acceptance

Goal: prove Release A works as a complete product from a clean checkout and can be used without developer-only intervention.

### S8-T1: Close the Release A traceability matrix

Depends on: S0 through S7 complete.

Scope:

- product contract and acceptance journeys
- requirements/API/data/control/test traceability
- current-versus-planned documentation
- open-risk and waiver records

Tasks:

- Map every Release A requirement to implementation, tests, operational evidence, owner, and status.
- Close or explicitly defer every pending test scenario created in S3.
- Verify that routes, database entities, UI views, environment variables, scripts, docs, and architecture describe the same implemented product.
- Identify dead code, placeholder data, unused dependencies, misleading configuration, and unimplemented UI controls.
- Mark deferred Release B/C capabilities as planned; do not leave ambiguous half-implemented claims.

Validation:

- Traceability has no Release A requirement without implementation and evidence.
- No passing status is derived only from file existence or self-attestation.

Exit criteria:

- Reviewers can navigate from requirement to code, test, evidence, risk, and owner.

### S8-T2: Run the clean-room full-stack acceptance suite

Depends on: S8-T1.

Scope:

- disposable clean checkout/environment
- database and application bootstrap
- automated and manual Release A journeys
- validation evidence

Tasks:

- Bootstrap from committed instructions with no reused `node_modules`, build output, browser state, database state, or undocumented environment values. Use an isolated non-production Supabase environment; do not require Docker.
- Run build, typecheck, lint, unit, integration, E2E, security, accessibility, and health checks.
- Run migrations and seed approved demo data; restart the application and prove persistence.
- Execute sign-in, authorization, ingestion, job monitoring, retrieval, cited answer, conversation continuity, source inspection, lifecycle administration, logout, and blocked-privilege journeys.
- Prove NVIDIA primary routing and approved OpenRouter fallback with non-sensitive fixtures where live testing is authorized; separately prove the Ollama local/degraded path without implying Vercel can reach it.
- Force provider failure, incompatible fallback, quota/budget exhaustion, database failure, invalid input, unauthorized access, duplicate ingestion, and restart recovery.
- Record exact commit, artifact/config versions, commands, results, screenshots/log excerpts where safe, and unresolved defects.

Validation:

- All mandatory journeys pass in the clean environment.
- No test uses a real production credential or production data.

Exit criteria:

- Release A has reproducible end-to-end evidence and is genuinely usable locally by the owner.

### S8-T3: Approve or reject Release A

Depends on: S8-T2.

Scope:

- `strategy/PILOT_EVALUATION_REPORT.md`
- `strategy/RELEASE_DECISION_RECORD.md`
- `implementation/VALIDATION_REPORT.md`
- known-risk/waiver records

Tasks:

- Summarize user outcomes, test results, security/privacy posture, retrieval/AI quality, performance, accessibility, incidents, cost, support needs, and remaining risks.
- Distinguish `Release A usable`, `Release A conditionally usable`, and `not ready`.
- Require the named human authority to accept, reject, or defer Release A.
- If accepted, record the exact commit/artifact and operating boundary. If rejected, create ordered corrective tasks and rerun only after fixes are validated.

Validation:

- Decision references the exact evidence and artifact reviewed.
- Conditions/waivers have owners, expiry dates, and blocking severity.

Exit criteria:

- The owner has a defensible yes/no answer on whether the full-stack internal product can be used.

## S9: Vercel, Supabase, and Production Readiness

Goal: prepare for a governed release decision.

### S9-T1: Observability and operational health

Depends on: accepted Release A.

Scope:

- Next.js logging, instrumentation, route handlers, and health endpoints
- Supabase/provider/job telemetry integration
- deployment docs
- tests

Tasks:

- Add structured, correlated logging with actor-safe context and redaction.
- Separate liveness, readiness, dependency, and diagnostic status; expose only the minimum safe detail publicly.
- Add request, error, latency, saturation, provider, database, ingestion-queue, token, and cost metrics appropriate to the deployment.
- Add distributed tracing or correlation across browser/API/database/provider/job boundaries where proportionate.
- Define SLI/SLOs, alert thresholds, dashboards, alert owners, and runbook links.
- Do not expose sensitive data in logs.

Validation:

- tests for liveness/readiness/degraded responses and redaction.
- dashboards and alerts are exercised with controlled failures.
- manual request, provider, ingestion, and authorization-event logs checked.

Exit criteria:

- Operators can detect, diagnose, and own product-impacting failure without reading source code.

### S9-T2: Build the Vercel/Supabase release package

Depends on: S9-T1 and the CI artifact controls from S4-T3.

Scope:

- `package.json`, lockfile, Next.js/Vercel configuration, and generated build output
- Supabase configuration, migrations, functions/jobs if approved, and generated types
- environment-variable manifest and secret references
- README/deployment/runbook documentation

Tasks:

- Produce a deterministic Next.js production build from a clean install with pinned Node/package-manager inputs.
- Record source commit, lockfile hash, framework/runtime versions, build ID, migration set, environment class, and SBOM/provenance evidence for every candidate release.
- Configure Vercel build/runtime regions, function limits, headers, redirects, domains, environment separation, and server-only secrets according to the approved plan.
- Configure Supabase migrations, RLS, storage, auth URLs, email/OAuth behavior, connection strategy, and non-production isolation as reviewed code/configuration wherever supported.
- Verify that the selected Vercel and Supabase plans permit the intended company/commercial usage, concurrency, functions, logs, retention, backup, recovery, and support requirements. Do not trust stale free-tier limits in an advisory document.
- Remove Docker from the release path. The release must not require a Dockerfile, Compose, image registry, or container runtime.
- Do not claim staging or production deployment exists until the exact environment is deployed and validated.

Validation:

- `npm ci`
- `npm run check`
- `npm run build`
- A Vercel preview deployment starts from the reviewed commit and passes liveness/readiness plus the bounded smoke journey.
- Supabase migrations and generated types match the target non-production schema.
- Dependency/SBOM and secret scans meet the approved severity threshold.
- `rg -n -i "Dockerfile|docker compose|docker-compose" package.json README.md CONTRIBUTING.md .github implementation IMPLEMENTATION_PLAYBOOK_V2.md` reports only intentional legacy/history statements.

Exit criteria:

- The Vercel/Supabase candidate release can be built and traced reproducibly without Docker.

### S9-T3: Build staging and environment promotion path

Depends on: S9-T2 and an approved deployment target.

Scope:

- development/test/staging/production configuration
- infrastructure/deployment manifests
- secret and identity integration
- migration and promotion runbook

Tasks:

- Separate environment configuration, credentials, data, network access, domains, logging destinations, and deployment authority.
- Provision staging from reviewed, repeatable infrastructure/configuration rather than undocumented console clicks.
- Promote the same reviewed commit and build inputs across environments. If the platform rebuilds instead of promoting an immutable artifact, prove deterministic inputs, provenance, and post-build equivalence rather than falsely claiming artifact identity.
- Configure TLS, secure headers at the edge, restricted database/network access, secret injection/rotation, and least-privilege runtime identity.
- Add pre-deploy checks, expand/migrate/contract sequencing where needed, post-deploy smoke tests, and automatic stop/rollback criteria.

Validation:

- Staging is deployed from the reviewed artifact and passes Release A journeys with non-production credentials/data.
- Configuration drift and artifact identity are detectable.
- Failed deployment and migration scenarios follow the documented safe path.

Exit criteria:

- The release can move through controlled environments without manual reconstruction.

### S9-T4: Prove backup, restore, rollback, and incident response

Depends on: S9-T3.

Scope:

- database and configuration backup/restore
- application rollback and migration recovery
- incident, outage, and credential-compromise runbooks
- recovery evidence

Tasks:

- Define RTO/RPO, backup frequency, retention, encryption, access, restore ownership, and verification cadence.
- Verify the actual backup/PITR/export capabilities of the selected Supabase plan. Do not claim automated daily backups merely because Supabase is managed.
- Implement and test an application-owned export/restore path for Release A critical data when the selected plan does not meet the approved RPO/RTO.
- Restore into an isolated environment and verify users, documents, conversations, citations, authorization, and audit integrity.
- Prove application rollback without silently corrupting newer schema/data; prefer roll-forward/compensating migrations when rollback is unsafe.
- Exercise provider outage, database outage, queue backlog, bad deployment, leaked credential, and unauthorized-access scenarios.
- Record communication, escalation, stop, evidence preservation, and post-incident review steps.

Validation:

- Measured restore and recovery meet approved RTO/RPO.
- Runbooks are executed by someone other than their author.
- Recovery does not rely on Docker volumes, undocumented dashboard state, or using production as a test environment.

Exit criteria:

- Recovery and rollback are demonstrated capabilities, not prose-only intentions.

### S9-T5: Complete production-readiness dossier

Depends on: S9-T1 through S9-T4.

Scope:

- `strategy/PRODUCTION_READINESS_DOSSIER.md`
- `strategy/RELEASE_DECISION_RECORD.md`
- `implementation/VALIDATION_REPORT.md`

Tasks:

- Record validation results, risks, controls, test status, security status, rollback plan, owners, and next review.
- Separate pilot-ready, production-ready, and not-ready claims.
- Require explicit go/no-go decision.

Validation:

- `git diff --stat`
- `npm run build`
- `npm run lint`
- `npm run typecheck`
- `npm test`
- health check
- manual local and Vercel preview run
- staging acceptance suite
- backup/restore and rollback evidence
- security, privacy, accessibility, performance, resilience, and cost threshold results

Exit criteria:

- Human reviewer has enough evidence to approve, reject, or defer release.

## S10: Executive Intelligence and Controlled Agent Execution

Goal: expand beyond the knowledge product through small governed vertical slices without pretending that the entire target Executive OS exists at once.

S10-T1 through S10-T6 and the S10-T4A/T4B runtime work are release epics, not single-commit tasks. After S10-T0 selects one epic, decompose that epic into reviewable tasks using the Mandatory Task Execution Contract and the mandatory slice loop below. Do not implement multiple S10 epics in parallel on shared identity, policy, audit, data, orchestration, or UI foundations.

### S10-T0: Select and charter one capability slice

Depends on: accepted Release A; production deployment is required only if the selected users/data/risk require it.

Tasks:

- Select exactly one prioritized capability from decision intelligence, planning, approvals, workflow orchestration, controlled execution, organizational memory/learning, or assurance.
- Define users, business outcome, current process, data, actions, authority, risk class, integrations, success/failure thresholds, cost, stop conditions, and exclusions.
- Produce or update the required ADRs, architecture contracts, threat model, data model, API/UI journey, test strategy, owner/support model, rollback, and release gate.
- Reuse Release A identity, authorization, audit, provenance, observability, deployment, and evidence patterns instead of creating a parallel control plane.

Validation:

- The slice is independently useful, reversible where required, and small enough for one release train.
- No target capability is marked implemented merely because its charter or architecture exists.

Exit criteria:

- One slice is authorized for implementation with complete acceptance and control boundaries.

### S10-T1: Decision intelligence workbench slice

Run only when selected by S10-T0.

Minimum capability:

- Create a decision case linked to objective, evidence, source provenance, assumptions, options, constraints, risks, recommendation, accountable owner, and due date.
- Compare options using an approved, visible method; keep model-generated analysis distinguishable from approved human judgment.
- Route the decision to the required reviewer/approver and preserve revisions, comments, outcome, rationale, and supersession.
- Prevent an AI recommendation from becoming an approved decision without the required human authority.

Acceptance:

- A real bounded decision travels from evidence to approved/rejected/deferred outcome with complete authorization and audit trace.
- Source changes or withdrawn evidence are visible to affected decisions.

### S10-T2: Planning and approval slice

Run only when selected by S10-T0.

Minimum capability:

- Convert an approved objective/decision into a versioned plan with outcomes, milestones, dependencies, owners, resources, risks, controls, evidence, and exit criteria.
- Provide approval gates, change requests, status updates, exceptions, cancellation, and plan supersession.
- Keep suggested plans separate from authorized commitments.

Acceptance:

- A bounded plan is created, reviewed, approved, changed, and closed with traceability to the originating decision and evidence.

### S10-T3: Workflow and orchestration slice

Run only when selected by S10-T0.

Minimum capability:

- Define versioned workflow/capability contracts with typed inputs/outputs, authority, timeout, retry, idempotency, compensation, human checkpoints, and evidence events.
- Implement state persistence, pause/resume/cancel, dead-letter/manual intervention, and replay protection.
- Route only to registered, enabled, policy-allowed capabilities; unknown or unhealthy capabilities fail safely.
- Visualize workflow state and human approvals in the operator UI.
- Evaluate whether a simple persisted state machine is sufficient or a durable workflow technology is required. Compare operational fit with Vercel/Supabase, long-running work, licensing, cost, local development, observability, retries, and vendor lock-in before selecting a framework.
- Treat LangGraph, AutoGen, CrewAI, Semantic Kernel, LangChain, and OpenAI Agents SDK as references/candidates until one wins a bounded spike. Do not install all of them.

Acceptance:

- A bounded workflow survives restart, handles duplicate delivery, pauses for approval, recovers from a controlled failure, and emits a complete trace.

### S10-T4: Controlled execution and plugin/integration slice

Run only when selected by S10-T0 and explicitly authorized for the action class.

Minimum capability:

- Define a deny-by-default execution/plugin contract with scoped identity, least privilege, input/output schemas, network/data/tool boundaries, timeout, budget, approval, sandboxing where applicable, and kill switch.
- Separate read-only preparation from state-changing execution.
- Require preview/dry-run and explicit human confirmation for privileged, external, financial, credentialed, or irreversible actions.
- Add connector credential isolation, rotation, revocation, rate limits, audit, and incident handling.

Acceptance:

- Authorized execution works within scope; attempts to exceed identity, action, data, budget, or time limits are blocked and audited.
- Kill, revoke, retry, compensation, and failure-recovery paths are tested.

### S10-T4A: Define the production agent-runtime boundary

Run only when controlled agent execution is selected by S10-T0. Depends on S6, S9, and S10-T3.

Minimum capability:

- Define the boundary between GangNiaga's control plane and every external runtime. GangNiaga owns identity, authorization, policy, knowledge access, approvals, workflow state, budgets, audit, and release evidence.
- Define a versioned `ExecutionRequest` containing objective, actor, organization, authority, capability, scoped context references, allowed tools/actions, data classification, environment, budget, timeout, approval requirements, idempotency key, and expected evidence.
- Define a versioned `ExecutionReceipt` containing runtime/provider/model, start/end state, tool/action trace, outputs/artifacts, validation, cost, policy decisions, approvals, errors, retries, cancellation, and cryptographic/content hashes where proportionate.
- Create a runtime adapter contract for submit/status/events/cancel/pause/resume/result/health/capabilities without exposing unrestricted database or filesystem access.
- Require scoped short-lived credentials, outbound allowlists, workspace isolation, tool allow/deny rules, secret brokering, quotas, kill switch, and complete audit for state-changing execution.
- Keep read/plan/preview separate from apply/commit/deploy/send/pay/delete actions. Consequential actions require the approved human authority at execution time.

Acceptance:

- A fake runtime and one approved sandboxed runtime complete the same contract suite.
- Attempts to exceed tool, data, identity, network, time, cost, or approval scope are denied and recorded.
- Cancellation, duplicate delivery, runtime crash, partial output, delayed callback, and forged receipt tests fail safely.

### S10-T4B: Evaluate and optionally integrate OpenClaw

Run only after S10-T4A and only when an approved use case requires OpenClaw's gateway/channel/runtime capabilities.

Minimum capability:

- Resolve the contradiction around the missing `adr/ADR-0005-OPENCLAW-AS-EXECUTION.md`. Restore, recreate from evidence, supersede, or remove the stale reference only through the governed ADR/document process; never fabricate an approval date or decision.
- Compare OpenClaw with Hermes-Agent and a minimal custom runtime for the approved use case. Evaluate gateway/channels, sessions, tools, memory, multi-agent routing, MCP, workspace isolation, sandboxing, approvals, Windows/server deployment, operations, upgrade path, license, supply chain, and total cost.
- If selected, integrate OpenClaw only through the S10-T4A adapter. Treat its internal prompt, memory, tools, agents, and channels as an untrusted external execution domain subject to GangNiaga policy.
- Map GangNiaga identities and approvals to OpenClaw sessions without sharing universal credentials. Restrict channel-originated requests, pairing, tools, workspaces, sub-agents, and gateway administration.
- Use the S6 model registry for NVIDIA/OpenRouter/Ollama selection. Do not create an independent ungoverned model configuration inside OpenClaw.
- Deploy the gateway only on an approved private host/network with authentication, TLS/tunnel controls, secret management, monitoring, backup, upgrade/rollback, and incident response. Do not expose default local ports publicly.
- Keep OpenClaw replaceable. GangNiaga must retain workflow state and authoritative audit even when the runtime is unavailable or removed.

Acceptance:

- A bounded read-only journey and a separately approved state-changing journey pass end to end: GangNiaga request → policy/approval → OpenClaw adapter → sandboxed execution → receipt → validation → audit/UI.
- Unauthorized channel/user, prompt injection, malicious tool/skill, workspace escape, secret request, replay, excessive cost, timeout, cancellation, gateway outage, and provider outage tests pass.
- The ADR records whether OpenClaw is adopted, deferred, rejected, or limited to a specific use case; documentation never labels it implemented before the acceptance evidence exists.

### S10-T5: Organizational memory and learning slice

Run only when selected by S10-T0.

Minimum capability:

- Separate authoritative knowledge, working context, user preferences, operational state, decisions, and audit records.
- Apply purpose, consent/authority, access, retention, correction, deletion, provenance, confidence, and supersession rules per memory type.
- Capture measured outcome and lessons from decisions/plans/workflows without automatically converting generated summaries into authority.
- Recommend governed updates to knowledge, controls, prompts, evaluations, architecture, or roadmap.

Acceptance:

- The system recalls only authorized, current context; cross-user/organization leakage tests pass.
- A completed outcome creates a reviewable learning proposal with lineage, not an unapproved rule change.

### S10-T6: Governance and assurance dashboard slice

Run only when selected by S10-T0.

Minimum capability:

- Surface requirement/control/test/evidence/owner/status relationships, release gates, exceptions, expired waivers, incidents, model/config versions, cost, SLOs, and audit coverage.
- Derive status from retained evidence where possible while keeping approval authority human and explicit.
- Prevent dashboard green status when evidence is missing, stale, scoped to another artifact, or contradicted by a failed critical gate.

Acceptance:

- A reviewer can trace a release status to current evidence and identify every blocker, exception, owner, and expiry date.

### Mandatory loop for every S10 slice

Each selected slice must repeat, in order:

1. charter and governed decision;
2. architecture, threat/data/API/UI/test design;
3. implementation behind a disabled flag or isolated environment;
4. unit, integration, E2E, security, privacy, accessibility, performance, resilience, recovery, and AI evaluation as applicable;
5. clean-room and staging acceptance;
6. explicit human release decision;
7. monitored rollout, rollback readiness, and post-release evaluation;
8. documentation/evidence update and next-slice decision.

No slice may inherit a green status from another slice merely because it uses the same platform.

## S11: Controlled Production Acceptance and Continuous Assurance

Goal: make production release an explicit, observable, reversible human decision and keep the accepted state from silently degrading.

### S11-T1: Execute production go/no-go

Depends on: S9 complete for Release B, or the full mandatory loop for an S10 production slice.

Tasks:

- Freeze and identify the reviewed artifact, migrations, configuration, infrastructure change, model/prompt versions, SBOM/dependency inventory, and evidence pack.
- Confirm mandatory checks, approvals, backups, restore/rollback, staffing, support window, alerts, status communication, and stop conditions.
- Require named human sign-off from product, engineering/operations, security/privacy/data, and business authority appropriate to risk.
- Record `go`, `conditional go`, `no-go`, or `defer`; an agent may prepare the record but cannot sign it.

Exit criteria:

- The release decision is attributable, scoped to an exact artifact, and cannot be inferred from CI alone.

### S11-T2: Deploy, verify, and monitor the controlled rollout

Depends on: an explicit go decision.

Tasks:

- Deploy with the approved progressive strategy and migration sequence.
- Run post-deploy health and critical-journey checks using safe production test accounts/data.
- Monitor errors, latency, saturation, provider/database/queue health, authorization anomalies, quality, cost, and business outcome against stop thresholds.
- Roll back or stop when a pre-approved condition is met; do not wait for document updates to acknowledge a live incident.

Exit criteria:

- The release completes its observation window within thresholds or is safely stopped/rolled back with evidence retained.

### S11-T3: Close release and establish recurring assurance

Depends on: S11-T2.

Tasks:

- Record actual outcomes, incidents, deviations, cost, user feedback, control effectiveness, unresolved risk, and rollback status.
- Schedule dependency/model/provider review, access review, backup restore exercise, DR exercise, penetration/security review, privacy/retention review, SLO/capacity/cost review, and documentation freshness checks at approved cadences.
- Revoke temporary access and release credentials, close or time-bound waivers, and return lessons to governed knowledge/roadmap/ADR processes.
- Re-run acceptance after material code, schema, model, prompt, provider, infrastructure, identity, policy, or data-scope change.

Exit criteria:

- Production status remains evidence-backed over time and material drift triggers a new governed release cycle.

## 12. Safe Delegation Rules

Use delegation only when the task is isolated and the output can be reviewed.

Sequential only:

- S0 governance tasks.
- S1 toolchain tasks.
- Any task touching package.json, package-lock.json, shared Next.js layout/configuration, database migrations/RLS, provider registry, docs authority, ADRs, or license.

Can be delegated after S1-S2 pass:

- Test expansion.
- VectorStore tests.
- UI polish.
- Documentation updates that do not change authority.
- Independent provider adapter test fixtures after the shared interface and registry are stable.
- Independent UI components after routes, API contracts, authorization, and design tokens are stable.

Do not delegate blindly:

- License posture.
- ADR approval.
- Constitutional changes.
- Production deployment.
- Destructive cleanup.
- Provider/model promotion, data-policy exceptions, privileged execution, OpenClaw adoption, or Hermes production-runtime adoption.

Hermes and every other coordinating agent must:

- assign one task ID and one owning agent per shared file;
- state provider/model/runtime used for each delegated result;
- prohibit sub-agents from approving their own ADR, waiver, release, security exception, or destructive action;
- review all returned diffs and evidence before integration;
- rerun combined tests after parallel work merges;
- stop when results conflict with the decision registry or authority hierarchy.

## 13. Standard Task Report Template

Every task must end with:

```text
Task:
Task ID and operator/runtime:
Provider/model/registry version:
Release target and dependencies:
Baseline git state:
Files changed:
Commands run:
Result:
Tests:
Security impact:
Data/privacy impact:
Operational impact:
Docs impact:
Evidence produced:
Remaining risks:
Approvals/waivers required:
Rollback or recovery path:
Next recommended task:
Cold-start handoff:
```

## 14. Recommended Immediate Next Task

Start with S0-T0 to approve the Release A product boundary, then S0-T1 to decide the status of advisory/review artifacts and untracked local files.

Then run:

1. S0-T2 license reconciliation.
2. S0-T3 governance/status reconciliation.
3. S0-T4 implementation stack authority.
4. S0-T5 governed Hermes-Agent execution profile.
5. S1-T1 Next.js application foundation and dependency migration.
6. S1-T2 Vitest/React test toolchain.
7. S1-T3 standard scripts and pinned runtime.
8. S1-T4 no-Docker clean-checkout bootstrap.
9. S2-T1 provider-configuration fail-safe behavior.

Do not start durable knowledge, provider routing, conversations, API documentation, production packaging, or UI expansion until these gates are complete. Do not begin any S10 capability until Release A is accepted and that capability has its own S10-T0 charter.
