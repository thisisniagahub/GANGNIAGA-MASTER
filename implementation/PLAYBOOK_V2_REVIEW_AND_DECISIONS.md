# PLAYBOOK V2 — Review, Verdict & Architecture Decisions

> Status: Advisory — Review Record
> Reviewed: 2026-07-15
> Reviewer: Antigravity Conductor (dual-agent cross-validation against 14+ repo files)
> Subject: [IMPLEMENTATION_PLAYBOOK_V2.md](../IMPLEMENTATION_PLAYBOOK_V2.md)

---

## 1. Overall Verdict

**ACCEPT — Ready for Execution**

Skor: **9.2/10**. Playbook adalah dokumen pelaksanaan berkualiti enterprise-grade. Setiap dakwaan baseline telah disahkan secara empirik terhadap repo sebenar. Tiada hallucination. Tiada arahan yang tidak selamat.

| Kategori | Skor |
|----------|------|
| Ketepatan Fakta | 10/10 |
| Struktur & Sequencing | 9/10 |
| Keselamatan & Governance | 10/10 |
| Kelengkapan Skop | 9/10 |
| Kebolehoperasian | 8/10 |
| Kejelasan Bahasa | 9/10 |

---

## 2. Baseline Verification — 12/12 Accurate

Setiap dakwaan di Section 2 (Current Known Baseline) disahkan:

| # | Dakwaan | Verified |
|---|---------|----------|
| 1 | `npm run build`: PASS | ✅ |
| 2 | `npm test`: FAIL (ts-jest/Jest mismatch) | ✅ Jest 30 + ts-jest 29 confirmed |
| 3 | `npm run lint`: FAIL (padded-token-cursor) | ✅ ESLint 8 + @typescript-eslint 8 |
| 4 | Health check: FAIL | ✅ Multiple failure vectors |
| 5 | Untracked files: 4 named | ✅ All 4 exist |
| 6 | LICENSE exists and tracked | ✅ 326 bytes, proprietary |
| 7 | ADR-0007 still Proposed | ✅ Exact match |
| 8 | AI.ts uses MISSING_API_KEY | ✅ Line 9 exact match |
| 9 | ts-jest@^30.0.0 not available | ✅ package.json has ^29.4.11 |
| 10 | UI is static preview | ✅ 3 files in public/ |
| 11 | /health proves only process alive | ✅ Returns `{status:'ok'}` only |
| 12 | Zero production dep vulnerabilities | ✅ Time-sensitive observation |

---

## 3. Repo Contradictions Found

7 contradictions — all already scoped in S0 tasks:

| # | Issue | Severity | Playbook Coverage |
|---|-------|----------|-------------------|
| 1 | G0_DECISION_PACK header "Draft" but body/approval "Approved" | Medium | ✅ S0-T3 |
| 2 | DOCUMENT_MAP says LICENSE "does not yet exist" — but LICENSE exists | High | ✅ S0-T2 |
| 3 | `.env.example` missing `GROQ_API_KEY` — AI.ts requires it | High | ✅ S2-T3 |
| 4 | `.env.example` lists `REDIS_URL`, `NVIDIA_API_KEY` with no code usage | Low | ✅ S2-T3 |
| 5 | `package.json` `license: UNLICENSED` vs LICENSE file "proprietary" | Medium | ✅ S0-T2 |
| 6 | ADR-0007 exists on disk but not in DOCUMENT_MAP | Low | ✅ S0-T1 |
| 7 | README says "license not selected" — but LICENSE exists | Medium | ✅ S0-T2 |

---

## 4. Critical Blockers

**ZERO.** Tiada showstopper.

- Authority chain betul — playbook subordinate to Constitution → MASTER → ADRs.
- Tiada arahan yang contradict CONSTITUTION.md.
- Tiada arahan yang auto-approve governed decisions.
- Tiada arahan yang destroy data tanpa human approval.

---

## 5. Unsafe Instructions

**ZERO.** Tiada arahan tidak selamat.

- ✅ Forbids `git reset --hard`, `rm -rf` tanpa approval
- ✅ Forbids committing credentials
- ✅ Forbids weakening checks for green status
- ✅ Forbids auto-approval of ADRs, license, constitutional changes
- ✅ Requires parameterized queries, bounded timeouts
- ✅ Treats ingested content as untrusted data
- ✅ Requires prompt injection testing

---

## 6. Dependency/Order Problems

**ZERO.** Execution sequence betul:

- S0 → S1 → S2 → S3 → S4: linear, no skip. ✅
- S5 depends on S0-T0, S0-T4, S2, S4: correct. ✅
- S10 blocked until Release A accepted: correct. ✅
- Parallelism rules conservative but safe. ✅

---

## 7. Tasks Requiring Decomposition

2 tasks masih terlalu besar:

| Task | Recommended Split |
|------|-------------------|
| **S2-T5** (Web & API abuse protections) | S2-T5a: Security headers + CORS + content-type. S2-T5b: Rate limiting. S2-T5c: Input validation + error sanitization. |
| **S7-T3** (Knowledge & ingestion UI) | S7-T3a: Document list + upload. S7-T3b: Job monitoring + retry. S7-T3c: Citation viewer + lifecycle. |

Note: S2-T4 and S5-T0 no longer need decomposition after Supabase+Vercel decision (see §9).

---

## 8. Governed Human Decisions (Hermes MUST Pause)

5 gates di mana Hermes tidak boleh auto-resolve:

| Gate | Playbook Ref | Decision Required |
|------|-------------|-------------------|
| G1 | S0-T0 | Release A product boundary, users, data classification, success metrics |
| G2 | S0-T2 | License posture — approved, provisional, or accidental? |
| G3 | S0-T4 | ADR-0007 approval (stack authority) |
| G4 | S8-T3 | Release A go/no-go |
| G5 | S11-T1 | Production go/no-go |

---

## 9. Architecture Decision — Supabase + Vercel + Next.js

### 9.1 Owner Decisions (Locked 2026-07-15)

| # | Decision | Answer |
|---|----------|--------|
| D1 | Framework | **Next.js App Router** |
| D2 | Database | **Supabase (Free tier)** |
| D3 | Hosting | **Vercel (Hobby tier)** |
| D4 | Supabase project | Sudah ada |
| D5 | Vercel connection | Belum — setup after S1-T1 |

### 9.2 Confirmed Stack

```text
┌─────────────────────────────────────────┐
│           GANGNIAGA EXEC OS             │
├─────────────────────────────────────────┤
│  Frontend    │ Next.js App Router       │
│  Auth        │ Supabase Auth            │
│  Database    │ Supabase PostgreSQL      │
│  Vectors     │ pgvector (Supabase)      │
│  AI/LLM      │ Groq (Llama 3.3 70B)    │
│  AI SDK      │ Vercel AI SDK            │
│  Deploy      │ Vercel (auto from Git)   │
│  CI          │ GitHub Actions + Vercel  │
└─────────────────────────────────────────┘
```

### 9.3 Why Next.js (Not Keep Express)

Express.js adalah long-running server — Vercel menjalankan serverless functions. Express tidak boleh "auto deploy ke Vercel" tanpa adapter hacky. ADR-0007 line 25 sudah sebut Supabase, line 30 sudah sebut Next.js. Current codebase hanya 6.3KB / 4 endpoints — migration effort minimal.

### 9.4 Tier Constraints

| Constraint | Limit | Impact |
|------------|-------|--------|
| Vercel Hobby function timeout | **10 seconds** | Ingestion jobs mesti small-batch async pattern |
| Supabase Free DB size | **500MB** | ≈300K vectors (cukup untuk Release A) |
| Supabase Free bandwidth | **1GB/month** | Monitor usage |
| Supabase Free Edge Functions | **2 invocations/second** | Adequate for bounded pilot |

### 9.5 Docker Decision

Owner tidak guna Docker. Impact:

- `docker-compose.yml` → dead file, classify in S0-T1
- `package.json` script `docker:up` → remove in S1-T1
- All 15 Docker references in playbook → amend in S0-T4
- S9-T2 (Dockerfile) → **eliminated** — Vercel auto-builds
- Database → Supabase managed (no local PostgreSQL needed)

### 9.6 Impact Per Playbook Stage

| Stage | Impact Level | Summary |
|-------|-------------|---------|
| S0 | Minor | S0-T4 rewrite for new stack. Classify docker-compose.yml. |
| S1 | **Major rewrite** | Scaffold Next.js. New dependencies. New scripts. No Docker bootstrap. |
| S2 | **80% reduced** | Supabase Auth handles identity/sessions. RLS handles authorization. |
| S3 | Moderate | Test targets change to API routes. Vitest or Jest+SWC. |
| S4 | Simplified | Vercel handles build/deploy CI. GitHub Actions for lint/test only. |
| S5 | Moderate | Supabase migrations. pgvector via SQL. Ingestion = small-batch (10s limit). |
| S6 | **Simplified** | Vercel AI SDK provides provider abstraction + streaming built-in. |
| S7 | Framework change | React components. App Router pages. Supabase Auth UI available. |
| S8 | Same criteria | Different tools, same acceptance bar. |
| S9 | **Massively simplified** | No Dockerfile. Vercel preview = staging. Supabase handles backups. |
| S10-S11 | Same governance | Different infrastructure. |

### 9.7 ADR-0007 Revision Direction

ADR-0007 perlu di-revise di S0-T4:

```diff
- **Backend Engine:** Node.js LTS (TypeScript)
+ **Framework:** Next.js App Router (TypeScript)
  **Relational Database:** PostgreSQL (Supabase/Prisma as ORM)
  **AI/Vector Storage:** pgvector (integrated with PostgreSQL)
- **Infrastructure:** Docker & Docker Compose (Local & Production Parity)
+ **Hosting:** Vercel (auto-deploy) + Supabase (managed PostgreSQL)
+ **Auth:** Supabase Auth
+ **AI SDK:** Vercel AI SDK
```

---

## 10. Remaining Amendments to Playbook V2

6 amendments, applicable inline during execution:

| # | Priority | Amendment | Target Section |
|---|----------|-----------|---------------|
| 1 | HIGH | Rewrite S0-T4 for Next.js + Supabase + Vercel stack. Remove Docker. Revise ADR-0007. | S0-T4 |
| 2 | HIGH | Express 5 + TypeScript 7 bleeding-edge risk — validate or downgrade in S1. | S0-T4, S1 |
| 3 | HIGH | Dead dependency audit (`pg` unused, `openai` used for Groq, Redis dead). | S1-T1 |
| 4 | HIGH | `.nvmrc` + `engines` field enforcement. | S1-T3 |
| 5 | MED | Decompose S2-T5 into 3 sub-tasks. | S2-T5 |
| 6 | MED | Decompose S7-T3 into 3 sub-tasks. | S7-T3 |

---

## 11. Execution Readiness

| Dimension | Status |
|-----------|--------|
| Critical blockers | ZERO ✅ |
| Architecture decisions | All 5 locked ✅ |
| Unsafe instructions | ZERO ✅ |
| Dependency/order problems | ZERO ✅ |
| Missing full-stack work | ZERO ✅ |
| Governed human decisions | 5 gates identified ✅ |
| Remaining amendments | 6 (applicable inline) ✅ |

**Ready for Hermes Execution: YES**

Execution order:

```text
S0-T0 → S0-T1 → S0-T2 → S0-T3 → S0-T4 (amend playbook + ADR-0007)
→ S1-T1 (scaffold Next.js) → S1-T2 → S1-T3 → S1-T4
→ S2-T1 → continue per playbook
```

Pause at every governed gate (G1–G5) for human decision.
