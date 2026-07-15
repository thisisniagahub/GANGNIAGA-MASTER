# 🚀 GANGNIAGA Implementation Playbook v1.0

> **Versi:** 1.0.0
> **Tujuan:** Implementation tasks untuk bawa GangNiaga dari Phase 0 (Foundation) ke Phase 1 (Architecture Foundation) dan Phase 2 (Intelligence Integration)
> **Prinsip:** Satu task = Satu sesi agent. Self-contained. Delegation-ready. Token-efficient.
> **Total Tasks:** 31 (across 5 fasa)
> **Estimated Sessions:** ~20-25

---

## 📖 Cara Penggunaan

```text
1. Buka playbook ini
2. Cari task seterusnya yang belum [x]
3. Copy prompt (dalam blok ````)
4. Paste ke sesi agent baharu — atau delegate ke sub-agent
5. Biarkan agent selesaikan
6. Kembali sini → tick [x]
7. Jika gagal → gunakan ROLLBACK prompt di hujung fasa
```

> [!IMPORTANT]
> **Session Handoff Protocol:** Setiap prompt berakhir dengan arahan untuk kemaskini `GEMINI.md` dengan status terkini. Ini memastikan sesi seterusnya tahu apa yang telah selesai.

> [!IMPORTANT]
> **Authority:** All tasks must comply with `CONSTITUTION.md` authority hierarchy. Code changes that affect architecture require ADR. Structural changes require CC-0 to CC-4 classification per ADR-0006.

---

## 🧰 Context Brief (Untuk Mana-mana Agent)

Projek nie adalah **GangNiaga Executive OS** —Enterprise AI Operating System yang duduk atas semua AI models/frameworks. Repo ada di `F:\GANGNIAGA-MASTER`.

**Current State:**
- Phase 0 (Foundation) — 95% siap. 95+ markdown files, governance docs, ADR system, controlled-change model.
- Bounded Pilot UI — Express + TypeScript + pgvector + Groq LLM. Chat interface dalam Bahasa Melayu.
- Code ada 5 TypeScript files (`src/`), 1 frontend (`public/`), 4 API endpoints.
- **Code infrastructure broken**: ESLint fail, Jest fail, version mismatches, security issues.

**Tech Stack (ADR-0007):**
- Backend: Node.js LTS + TypeScript + Express 5
- Database: PostgreSQL + pgvector
- AI: Groq API (Llama-3.3-70B) via OpenAI SDK
- Infra: Docker Compose (PostgreSQL + Redis)
- Frontend: Vanilla HTML/CSS/JS (glassmorphism dark theme)

**Authority Hierarchy:**
```text
CONSTITUTION.md → MASTER.md → Approved ADR → Architecture → Standards → Implementation
```

**Key Files untuk Context:**
- `CONSTITUTION.md` — governance rules, 10 principles, authority hierarchy
- `ADR-0006` — controlled-change model (CC-0 editorial → CC-4 constitutional)
- `ADR-0007` — core technology stack selection
- `DEVELOPER_STANDARDS.md` — strict TypeScript, no `any`, async/await, evidence-first
- `GEMINI.md` — living context hub (check this first for current state)

**Programme Backlog:** `strategy/PROGRAMME_BACKLOG.md` (G0-G8 gates, 50+ tasks)
**Audit Report:** `IMPROVEMENT_PLAN.md` (P1/P2/P3 findings dari full codebase audit)

---

## FASA 1: Code Infrastructure Repair (P1 Critical)

> **Goal:** Fix broken lint, test, build, dan security issues. Code baseline mesti functional sebelum tambah features.

### `[ ]` T1 — Reinstall Dependencies & Fix ESLint

**Priority:** P1 Critical
**Complexity:** Ringan
**Skills:** —
**Delegation:** Suitable for leaf sub-agent

````
PROMPT:

Projek: F:\GANGNIAGA-MASTER
Task: Fix ESLint — currently broken with "Cannot find module './padded-token-cursor'"

Arahan:
1. cd F:\GANGNIAGA-MASTER
2. rm -rf node_modules package-lock.json
3. npm install
4. npx eslint src --ext .ts
5. Jika masih gagal, check version compatibility:
   - eslint@8.57.0 vs @typescript-eslint/*@8.64.0
   - Jika incompatible, upgrade eslint ke 9.x ATAU downgrade @typescript-eslint ke 7.x
   - Pastikan `npm run lint` exits 0
6. Jika perlu patch .eslintrc.json untuk eslint 9 flat config格式
7. Commit: git add -A && git commit -m "fix: repair ESLint configuration (CC-1)"

Verification:
- `npm run lint` mesti exit 0 dengan 0 errors

Session Handoff:
Kemaskini GEMINI.md → T1: ESLint fixed ✅
````

---

### `[ ]` T2 — Fix Jest Test Runner (ts-jest Version Mismatch)

**Priority:** P1 Critical
**Complexity:** Ringan-Sederhana
**Skills:** —
**Delegation:** Suitable for leaf sub-agent

````
PROMPT:

Projek: F:\GANGNIAGA-MASTER
Task: Fix Jest — currently fails with "TypeError: Cannot read properties of undefined (reading 'fileExists')"

Root Cause: ts-jest@29.4.11 incompatible dengan Jest@30 dan TypeScript@7

Arahan:
1. cd F:\GANGNIAGA-MASTER
2. Check current versions: npm ls ts-jest jest typescript
3. Upgrade ts-jest ke version compatible dengan Jest 30:
   npm install -D ts-jest@^30.0.0
   (Jika tiada ts-jest@30, guna ts-jest@^29.7.0 dan jest@^29.7.0 — downgrade jest)
4. Update jest.config.js jika perlu:
   module.exports = {
     preset: 'ts-jest',
     testEnvironment: 'node',
     testMatch: ['**/*.spec.ts'],
     transform: {
       '^.+\\.ts$': ['ts-jest', { tsconfig: 'tsconfig.json' }],
     },
   };
5. Jika masih gagal, buat tsconfig.test.json:
   {
     "extends": "./tsconfig.json",
     "include": ["src/**/*"],
     "exclude": []
   }
   Dan reference dalam jest.config.js
6. `npm test` mesti exit 0
7. Commit: git add -A && git commit -m "fix: repair Jest test runner — version compatibility (CC-1)"

Verification:
- `npm test` mesti exit 0 dengan 2 passing tests

Session Handoff:
Kemaskini GEMINI.md → T2: Jest fixed ✅
````

---

### `[ ]` T3 — Fix Security: Hardcoded Fallback API Key in AI.ts

**Priority:** P1 Critical
**Complexity:** Ringan
**Skills:** —
**Delegation:** Suitable for leaf sub-agent

````
PROMPT:

Projek: F:\GANGNIAGA-MASTER
Task: Fix hardcoded fallback API key in src/AI.ts

Current code (src/AI.ts line 9):
  apiKey: proces..._KEY || 'MISSING_API_KEY',

Issues:
1. Hardcoded fallback string 'MISSING_API_KEY' — silent failure if env missing
2. Variable name appears truncated — should be process.env.GROQ_API_KEY

Arahan:
1. Buka src/AI.ts
2. Gantikan constructor dengan:
   constructor() {
     if (!process.env.GROQ_API_KEY) {
       throw new Error('GROQ_API_KEY environment variable is required');
     }
     this.groq = new OpenAI({
       apiKey: process.env.GROQ_API_KEY,
       baseURL: 'https://api.groq.com/openai/v1',
     });
   }
3. Jangan ubah apa-apa lain dalam file
4. Commit: git add -A && git commit -m "fix(security): remove hardcoded API key fallback — fail fast (CC-1)"

Verification:
- `npx tsc --noEmit` mesti exit 0
- Grep: `grep -n "MISSING_API_KEY" src/` mesti return kosong

Session Handoff:
Kemaskini GEMINI.md → T3: API key security fixed ✅
````

---

### `[ ]` T4 — Fix .env.example (Wrong Env Var)

**Priority:** P1 Critical
**Complexity:** Ringan
**Skills:** —
**Delegation:** Suitable for leaf sub-agent

````
PROMPT:

Projek: F:\GANGNIAGA-MASTER
Task: Fix .env.example — env var names don't match code

Issues:
1. .env.example lists NVIDIA_API_KEY= but code uses GROQ_API_KEY
2. POSTGRES_PASSWORD=changeme normalizes weak credentials

Arahan:
1. Buka .env.example
2. Gantikan kandungan dengan:
   # Database
   POSTGRES_USER=postgres
   POSTGRES_PASSWORD=changeme  # TODO: Change before production
   POSTGRES_DB=gangniaga_db
   DATABASE_URL="postgresql://postgres:changeme@localhost:5432/gangniaga_db?schema=public"

   # AI / LLM Configuration
   GROQ_API_KEY=  # Get from https://console.groq.com/keys

   # Server
   PORT=3000
   NODE_ENV=development
3. Buang NVIDIA_API_KEY, OPENAI_API_KEY, ANTHROPIC_API_KEY, GEMINI_API_KEY (not used)
4. Buang REDIS_URL (Redis tidak digunakan dalam code)
5. Commit: git add -A && git commit -m "fix: align .env.example with actual code usage (CC-0)"

Session Handoff:
Kemaskini GEMINI.md → T4: .env.example fixed ✅
````

---

### `[ ]` T5 — Remove dist/ from Git Tracking

**Priority:** P1 Critical
**Complexity:** Ringan
**Skills:** —
**Delegation:** Suitable for leaf sub-agent

````
PROMPT:

Projek: F:\GANGNIAGA-MASTER
Task: Remove dist/ directory from git tracking (build artifacts)

Arahan:
1. cd F:\GANGNIAGA-MASTER
2. git ls-files dist/ — sahkan dist/ tracked
3. git rm -r --cached dist/
4. pastikan .gitignore ada entry "dist/" (sepatutnya dah ada)
5. Commit: git add -A && git commit -m "chore: remove dist/ from git tracking — build artifact (CC-0)"
6. CHAT_LOG_PREVIEW.jsonl — tambah ke .gitignore ATAU delete jika bukan diperlukan

Verification:
- `git ls-files dist/` mesti return kosong
- `git status` mesti clean

Session Handoff:
Kemaskini GEMINI.md → T5: dist/ removed from git ✅
````

---

### 🔙 T1-T5 ROLLBACK

````
PROMPT:

Projek: F:\GANGNIAGA-MASTER
Task: ROLLBACK Fasa 1 (Code Infrastructure Repair)

Arahan:
1. git log --oneline -10
2. Kenal pasti commit sebelum T1
3. git reset --hard [commit-sha-sebelum-T1]
4. Kemaskini GEMINI.md: "Fasa 1 rolled back on [tarikh]"
````

---

## FASA 2: Test & Code Quality (P2 Moderate)

> **Goal:** Expand test coverage, fix `any` types, add input validation, align with DEVELOPER_STANDARDS.md.

### `[ ]` T6 — Expand Unit Tests (AI.ts, VectorStore.ts, app.ts endpoints)

**Priority:** P2
**Complexity:** Sederhana
**Skills:** `test-driven-development`
**Delegation:** Suitable for leaf sub-agent

````
PROMPT:

Projek: F:\GANGNIAGA-MASTER
Task: Expand unit tests — currently only 2 test cases

Context:
- src/app.spec.ts ada 2 tests (health check, search validation)
- Tiada test untuk: /api/knowledge/ask, /api/seed, AI.ts (generateEmbedding, generateAnswer), VectorStore.ts (insert, search)

Arahan:
1. Baca src/AI.ts, src/VectorStore.ts, src/app.ts untuk understand interfaces
2. Cipta src/AI.spec.ts:
   - Test generateEmbedding: returns array of 384 numbers, normalized (magnitude ~1)
   - Test generateEmbedding: deterministic (same input → same output)
   - Test generateAnswer: mock Groq API response, verify system prompt contains "Bahasa Melayu"
3. Cipta src/VectorStore.spec.ts:
   - Test insert: document added with correct id
   - Test search: returns results sorted by similarity
   - Test search: respects limit parameter
   - Test search: empty store returns empty array
4. Expand src/app.spec.ts:
   - Test POST /api/knowledge/ask with missing query → 400
   - Test POST /api/seed → 200 (mock AI.generateEmbedding)
   - Test GET /health → 200 with { status: 'ok' }
5. Mock external dependencies (Groq API) — jangan call real API dalam tests
6. `npm test` mesti exit 0 dengan semua tests pass
7. Commit: git add -A && git commit -m "test: expand unit tests for AI, VectorStore, and all API endpoints (CC-1)"

Verification:
- `npm test` exits 0
- Minimum 10 test cases (dari 2 sebelum nie)

Session Handoff:
Kemaskini GEMINI.md → T6: Tests expanded ✅ [N] test cases
````

---

### `[ ]` T7 — Replace `any` Types with Proper TypeScript Types

**Priority:** P2
**Complexity:** Ringan
**Skills:** —
**Delegation:** Suitable for leaf sub-agent

````
PROMPT:

Projek: F:\GANGNIAGA-MASTER
Task: Replace all `any` types dengan proper TypeScript types

DEVELOPER_STANDARDS.md says: "Avoid `any`. Use `unknown` with type-narrowing"

Files to fix:
1. src/app.ts:
   - `error: any` → `error: unknown` (line 24, 48, 67)
   - `req.body` — define interface untuk request bodies
   - `r: any` (line 42) → define Document interface atau import dari VectorStore
2. src/VectorStore.ts:
   - `metadata: any` → `metadata: Record<string, unknown>` (line 7, 20)
3. src/AI.ts:
   - Check jika ada `any` — kalau tak ada, skip

Arahan:
1. Define interfaces:
   interface SearchRequest { queryEmbedding: number[]; limit?: number; }
   interface AskRequest { query: string; }
   interface SearchResponse { results: SearchResult[]; }
   interface SearchResult { id: number; content: string; metadata: Record<string, unknown>; similarity: number; }
2. Gantikan semua `any` dengan types di atas
3. `npm run lint` mesti tidak warning untuk `no-explicit-any`
4. `npm run build` mesti exit 0
5. Commit: git add -A && git commit -m "refactor: replace any types with proper TypeScript interfaces (CC-1)"

Verification:
- `grep -rn "any" src/ --include="*.ts" | grep -v ".spec.ts" | grep -v "node_modules"` — minimal hits
- `npm run build` exits 0

Session Handoff:
Kemaskini GEMINI.md → T7: TypeScript types cleaned ✅
````

---

### `[ ]` T8 — Add Input Validation & Auth to /api/seed

**Priority:** P2
**Complexity:** Ringan
**Skills:** —
**Delegation:** Suitable for leaf sub-agent

````
PROMPT:

Projek: F:\GANGNIAGA-MASTER
Task: Add input validation and restrict /api/seed endpoint

Issues:
1. /api/seed has no auth — anyone can inject data
2. Chat input has no length limit

Arahan:
1. src/app.ts — tambah middleware untuk /api/seed:
   - Hanya allow dari localhost (check req.ip === '127.0.0.1' || req.ip === '::1')
   - ATAU guna simple API key header: if (req.headers['x-admin-key'] !== process.env.ADMIN_KEY) return 403
   - Tambah ADMIN_KEY= ke .env.example
2. public/index.html — tambah maxlength ke chat input:
   <input type="text" id="chat-input" ... maxlength="500">
3. src/app.ts — validate query length di /api/knowledge/ask:
   if (!query || query.length > 500) return res.status(400).json({ error: 'Query must be 1-500 characters' });
4. `npm test` mesti pass
5. Commit: git add -A && git commit -m "fix: add auth to /api/seed and input length validation (CC-1)"

Session Handoff:
Kemaskini GEMINI.md → T8: Input validation & seed auth ✅
````

---

## FASA 3: CI/CD & Doc Sync (P2 Moderate)

> **Goal:** Sync DOCUMENT_MAP.md, add code checks to CI, align license references.

### `[ ]` T9 — Sync DOCUMENT_MAP.md with Actual File Inventory

**Priority:** P2
**Complexity:** Sederhana
**Skills:** —
**Delegation:** Suitable for leaf sub-agent

````
PROMPT:

Projek: F:\GANGNIAGA-MASTER
Task: Sync DOCUMENT_MAP.md "Current Repository State" with actual filesystem

Issue: DOCUMENT_MAP.md lists only 49 files but actual count is ~120. Missing: conductor/, strategy/ (many), standards/, templates/, roadmap/PHASE_1.md, src/, public/, scripts/, dist/, LICENSE, architecture/ (many), ADR-0007.

Arahan:
1. cd F:\GANGNIAGA-MASTER
2. Generate full file list:
   find . -type f -not -path './.git/*' -not -path './node_modules/*' -not -path './dist/*' -not -name 'package-lock.json' | sort
3. Buka DOCUMENT_MAP.md
4. Gantikan "Current Repository State" code block dengan full file list dari step 2
5. Kemaskini "Foundation Documents" table:
   - Tambah ADR-0007 (Status: Proposed)
   - Tambah LICENSE (Status: Exists — Proprietary/Closed Source)
   - Kemaskini GEMINI.md status jika perlu
6. Verify: `powershell scripts/health-check.ps1` mesti PASS
7. Commit: git add -A && git commit -m "docs: sync DOCUMENT_MAP.md with actual file inventory (CC-1)"

Verification:
- Health check script passes
- File count dalam DOCUMENT_MAP matches `find` output

Session Handoff:
Kemaskini GEMINI.md → T9: DOCUMENT_MAP.md synced ✅
````

---

### `[ ]` T10 — Add Code Validation to CI Pipeline

**Priority:** P2
**Complexity:** Sederhana
**Skills:** —
**Delegation:** Suitable for leaf sub-agent

````
PROMPT:

Projek: F:\GANGNIAGA-MASTER
Task: Add TypeScript code checks to GitHub Actions CI

Current: .github/workflows/docs-validation.yml only runs markdownlint + stale ref checks.
Missing: lint, test, build for TypeScript code.

Arahan:
1. Cipta .github/workflows/code-validation.yml:
   name: Code Validation
   on:
     push:
       branches: [ master ]
     pull_request:
       branches: [ master ]
   jobs:
     validate:
       runs-on: ubuntu-latest
       steps:
       - uses: actions/checkout@v4
       - uses: actions/setup-node@v4
         with:
           node-version: '20'
       - run: npm ci
       - run: npm run lint
       - run: npm test
       - run: npm run build
2. Tambah .nvmrc file dengan content: 20
3. Test secara lokal: `npm run lint && npm test && npm run build`
4. Commit: git add -A && git commit -m "ci: add code validation pipeline (lint, test, build) (CC-2)"

Session Handoff:
Kemaskini GEMINI.md → T10: Code CI added ✅
````

---

### `[ ]` T11 — Align License References Across All Docs

**Priority:** P2
**Complexity:** Ringan
**Skills:** —
**Delegation:** Suitable for leaf sub-agent

````
PROMPT:

Projek: F:\GANGNIAGA-MASTER
Task: Align license references — currently inconsistent

Issues:
- README.md says "no open-source license should be assumed" (stale — LICENSE file exists)
- package.json says "license": "UNLICENSED" (inconsistent with LICENSE file)
- GEMINI.md says "LICENSE is Proprietary / Closed Source" (correct)
- LICENSE file says "Copyright (c) 2026 GangNiaga. All Rights Reserved." (correct — Proprietary)

Arahan:
1. README.md — cari seksyen "License" (bottom of file):
   Gantikan dengan:
   ## License
   This repository and its contents are proprietary and confidential.
   See [LICENSE](LICENSE) for full terms. All rights reserved.
2. package.json — tukar "license": "UNLICENSED" → "license": "Proprietary"
   ATAU guna "license": "UNLICENSED" dengan "private": true (npm convention untuk proprietary)
3. GEMINI.md — dah betul, tak perlu ubah
4. CONTRIBUTING.md — cari rujukan LICENSE dan pastikan konsisten
5. Commit: git add -A && git commit -m "docs: align license references across all docs (CC-0)"

Session Handoff:
Kemaskini GEMINI.md → T11: License references aligned ✅
````

---

## FASA 4: Phase 1 Architecture Foundation

> **Goal:** Upgrade dari "Bounded Pilot Preview" ke "Phase 1 Architecture Foundation" — real pgvector integration, proper error handling, graceful shutdown, Redis utilization.

### `[ ]` T12 — Replace Mock VectorStore with Real pgvector Integration

**Priority:** P2
**Complexity:** Besar
**Skills:** —
**Delegation:** Suitable for orchestrator sub-agent (may need DB setup + code changes)

````
PROMPT:

Projek: F:\GANGNIAGA-MASTER
Task: Replace in-memory VectorStore dengan real PostgreSQL + pgvector

Context:
- src/VectorStore.ts currently uses in-memory array (lost on restart)
- docker-compose.yml dah ada ankane/pgvector:latest
- package.json dah ada pg@8.11.3

Arahan:
1. Cipta SQL migration: scripts/migrations/001_init_pgvector.sql
   CREATE EXTENSION IF NOT EXISTS vector;
   CREATE TABLE IF NOT EXISTS documents (
     id SERIAL PRIMARY KEY,
     content TEXT NOT NULL,
     embedding vector(384) NOT NULL,
     metadata JSONB DEFAULT '{}',
     created_at TIMESTAMP DEFAULT NOW()
   );
   CREATE INDEX ON documents USING ivfflat (embedding vector_cosine_ops) WITH (lists = 100);

2. Rewrite src/VectorStore.ts to use pg Pool:
   import { Pool } from 'pg';
   class VectorStore {
     private pool: Pool;
     constructor() { this.pool = new Pool({ connectionString: process.env.DATABASE_URL }); }
     async initialize() { /* run migration if tables don't exist */ }
     async insert(content, embedding, metadata) { /* INSERT INTO documents */ }
     async search(queryEmbedding, limit) { /* SELECT with cosine_distance ORDER BY */ }
   }

3. Update .env.example dengan DATABASE_URL
4. docker-compose.yml — pastikan pgvector container siap sebelum app start
5. Update src/app.ts — VectorStore.initialize() mesti await sebelum listen
6. `npm test` — update tests untuk mock pg Pool ATAU guna test database
7. `npm run build` mesti exit 0
8. Commit: git add -A && git commit -m "feat: replace mock VectorStore with real pgvector integration (CC-2)"

Verification:
- `docker compose up -d db` → `npm run dev` → POST /api/seed → restart server → GET /api/knowledge/search masih return data

Session Handoff:
Kemaskini GEMINI.md → T12: pgvector integration done ✅
````

---

### `[ ]` T13 — Replace Mock Embeddings with Real Groq Embeddings

**Priority:** P2
**Complexity:** Sederhana
**Skills:** —
**Delegation:** Suitable for leaf sub-agent

````
PROMPT:

Projek: F:\GANGNIAGA-MASTER
Task: Replace mock SHA256 embedding generator dengan real Groq/embedding API

Context:
- src/AI.ts generateEmbedding() uses SHA256 hash — deterministic but not semantic
- Real embeddings akan give better search results
- Groq support embedding models via OpenAI SDK

Arahan:
1. Baca src/AI.ts — tukar generateEmbedding ke:
   async generateEmbedding(text: string): Promise<number[]> {
     const response = await this.groq.embeddings.create({
       model: 'all-MiniLM-L6-v2',  // atau model yang available di Groq
       input: text,
     });
     return response.data[0].embedding;
   }
2. Jika Groq tak support embeddings, guna OpenAI API directly:
   Tambah OPENAI_API_KEY ke .env.example
   Gunna model: 'text-embedding-3-small' (1536 dimensions)
   Update VectorStore dimension dari 384 → 1536
3. Update migration SQL untuk match dimension
4. Update tests — mock embeddings API
5. Fallback option: keep mock untuk dev mode (NODE_ENV !== 'production' && !process.env.GROQ_API_KEY)
6. `npm test` dan `npm run build` mesti pass
7. Commit: git add -A && git commit -m "feat: replace mock embeddings with real API integration (CC-2)"

Session Handoff:
Kemaskini GEMINI.md → T13: Real embeddings integrated ✅
````

---

### `[ ]` T14 — Add Graceful Shutdown & Error Recovery

**Priority:** P3
**Complexity:** Ringan
**Skills:** —
**Delegation:** Suitable for leaf sub-agent

````
PROMPT:

Projek: F:\GANGNIAGA-MASTER
Task: Add graceful shutdown ke src/index.ts

Current: src/index.ts just calls app.listen() — no SIGTERM/SIGINT handling, no DB pool cleanup.

Arahan:
1. Rewrite src/index.ts:
   import * as dotenv from 'dotenv';
   dotenv.config();
   import { app } from './app';
   import { VectorStore } from './VectorStore';

   const PORT = process.env.PORT || 3000;
   const vectorStore = new VectorStore();

   async function start() {
     await vectorStore.initialize();
     const server = app.listen(PORT, () => {
       console.log(`GangNiaga Executive OS running on port ${PORT}`);
     });

     const shutdown = async () => {
       console.log('Shutting down gracefully...');
       server.close();
       await vectorStore.close();  // tambah close() ke VectorStore
       process.exit(0);
     };

     process.on('SIGTERM', shutdown);
     process.on('SIGINT', shutdown);
   }

   start().catch(console.error);
2. Tambah close() method ke VectorStore (tutup pg Pool jika using real DB)
3. `npm run build` mesti exit 0
4. Commit: git add -A && git commit -m "feat: add graceful shutdown and error recovery (CC-1)"

Session Handoff:
Kemaskini GEMINI.md → T14: Graceful shutdown added ✅
````

---

### `[ ]` T15 — Utilize Redis for Caching (Optional but Documented)

**Priority:** P3
**Complexity:** Sederhana
**Skills:** —
**Delegation:** Suitable for leaf sub-agent

````
PROMPT:

Projek: F:\GANGNIAGA-MASTER
Task: Integrate Redis untuk caching — currently Redis dalam docker-compose tapi unused

Arahan:
1. npm install ioredis
2. Cipta src/Cache.ts:
   import Redis from 'ioredis';
   export class Cache {
     private redis: Redis;
     constructor() { this.redis = new Redis(process.env.REDIS_URL || 'redis://localhost:6379'); }
     async get(key: string) { return this.redis.get(key); }
     async set(key: string, value: string, ttl: number = 3600) { await this.redis.set(key, value, 'EX', ttl); }
     async close() { await this.redis.quit(); }
   }
3. Integrate ke app.ts — cache /api/knowledge/ask responses:
   - Cache key: SHA256(query)
   - TTL: 3600 seconds (1 hour)
   - Hit: return cached answer
   - Miss: generate answer, cache it, return
4. Tambah REDIS_URL= ke .env.example (dah ada tapi commented)
5. `npm test` dan `npm run build` mesti pass
6. Commit: git add -A && git commit -m "feat: add Redis caching for AI responses (CC-2)"

Session Handoff:
Kemaskini GEMINI.md → T15: Redis caching integrated ✅
````

---

## FASA 5: Phase 2 Intelligence Integration (Forward-Looking)

> **Goal:** Connect GangNiaga kepada multiple AI providers, add capability routing, dan prepare untuk agent orchestration. Ini adalah bridge dari Phase 1 ke Phase 2.

### `[ ]` T16 — Add Multi-Provider AI Support (Groq + OpenAI + Ollama)

**Priority:** P3 (Future)
**Complexity:** Besar
**Skills:** —
**Delegation:** Orchestrator sub-agent

````
PROMPT:

Projek: F:\GANGNIAGA-MASTER
Task: Refactor AI.ts untuk support multiple LLM providers (Constitution Principle 7: Model Agnostic)

Context:
- Currently hanya Groq (hardcoded baseURL)
- CONSTITUTION.md Principle 7: "No AI model should become a permanent architectural dependency"
- MISSION.md Objective 6: "support multiple AI models without architectural dependency"

Arahan:
1. Cipta src/providers/ directory
2. Cipta src/providers/types.ts:
   export interface LLMProvider {
     name: string;
     generateEmbedding(text: string): Promise<number[]>;
     generateAnswer(query: string, context: string): Promise<string>;
   }
3. Cipta src/providers/groq.ts — implement LLMProvider dengan existing Groq logic
4. Cipta src/providers/openai.ts — implement LLMProvider dengan OpenAI API
5. Cipta src/providers/ollama.ts — implement LLMProvider dengan Ollama local API
6. Cipta src/providers/router.ts:
   export function getProvider(): LLMProvider {
     const provider = process.env.AI_PROVIDER || 'groq';
     switch (provider) {
       case 'groq': return new GroqProvider();
       case 'openai': return new OpenAIProvider();
       case 'ollama': return new OllamaProvider();
       default: throw new Error(`Unknown AI provider: ${provider}`);
     }
   }
7. Update src/AI.ts untuk guna router
8. Tambah ke .env.example:
   AI_PROVIDER=groq  # groq | openai | ollama
   GROQ_API_KEY=
   OPENAI_API_KEY=
   OLLAMA_URL=http://localhost:11434
9. Tests mesti pass dengan mocked providers
10. Commit: git add -A && git commit -m "feat: multi-provider AI support — Groq, OpenAI, Ollama (CC-2)"

Session Handoff:
Kemaskini GEMINI.md → T16: Multi-provider AI support ✅
````

---

### `[ ]` T17 — Add Capability-Based Routing

**Priority:** P3 (Future)
**Complexity:** Besar
**Skills:** —
**Delegation:** Orchestrator sub-agent

````
PROMPT:

Projek: F:\GANGNIAGA-MASTER
Task: Implement basic capability-based routing (Constitution Principle 8: Capability Over Model)

Context:
- Architecture doc: architecture/ORCHESTRATION_LAYER.md
- CONSTITUTION.md Principle 8: "Capabilities are more important than model or vendor names"
- Mastery Objective: Route berdasarkan capability (reasoning, coding, research, etc.) bukan model name

Arahan:
1. Cipta src/capabilities/ directory
2. Define capability types:
   export type Capability = 'reasoning' | 'coding' | 'research' | 'summarization' | 'translation' | 'embedding';
   export interface CapabilityRoute {
     capability: Capability;
     provider: string;
     model: string;
     priority: number;
   }
3. Cipta src/capabilities/router.ts:
   - Map capabilities ke providers berdasarkan config
   - config/capabilities.json:
     { "reasoning": { "provider": "groq", "model": "llama-3.3-70b-versatile" },
       "embedding": { "provider": "groq", "model": "all-MiniLM-L6-v2" },
       "coding": { "provider": "openai", "model": "gpt-4o" } }
   - route(capability) → return { provider, model }
4. Update src/AI.ts untuk guna capability router
5. Tests mesti pass
6. Commit: git add -A && git commit -m "feat: capability-based routing for AI providers (CC-2)"

Session Handoff:
Kemaskini GEMINI.md → T17: Capability routing implemented ✅
````

---

### `[ ]` T18 — Add Knowledge Base Document Ingestion API

**Priority:** P3 (Future)
**Complexity:** Sederhana-Besar
**Skills:** —
**Delegation:** Leaf sub-agent

````
PROMPT:

Projek: F:\GANGNIAGA-MASTER
Task: Add API for ingesting documents into knowledge base

Context:
- Currently hanya /api/seed dengan hardcoded dummy data
- Need: ability to ingest arbitrary markdown documents dari repo itself

Arahan:
1. Cipta POST /api/knowledge/ingest:
   - Accept: { documents: [{ content: string, metadata?: object }] }
   - Validate: content mesti string, max 10000 chars
   - For each document: generate embedding, insert into VectorStore
   - Return: { ingested: N, errors: [] }
2. Tambah auth (same ADMIN_KEY from T8)
3. Cipta script: scripts/ingest-repo.ts:
   - Walk F:\GANGNIAGA-MASTER markdown files
   - Parse each .md file into chunks (split by ## headers)
   - POST to /api/knowledge/ingest
   - Output: N documents ingested
4. Update tests
5. Commit: git add -A && git commit -m "feat: knowledge base document ingestion API + repo ingest script (CC-2)"

Session Handoff:
Kemaskini GEMINI.md → T18: Document ingestion API ✅
````

---

### `[ ]` T19 — Add Conversation Memory (Session Context)

**Priority:** P3 (Future)
**Complexity:** Sederhana
**Skills:** —
**Delegation:** Leaf sub-agent

````
PROMPT:

Projek: F:\GANGNIAGA-MASTER
Task: Add conversation memory — currently each /api/knowledge/ask is stateless

Context:
- architecture/KNOWLEDGE_LAYER.md describes memory concepts
- Need: maintain conversation context across turns

Arahan:
1. Cipta src/Memory.ts:
   interface Conversation { id: string; messages: Message[]; createdAt: Date; }
   interface Message { role: 'user' | 'assistant'; content: string; timestamp: Date; }
   class ConversationStore {
     async create(): Promise<Conversation>
     async addMessage(id: string, message: Message): Promise<void>
     async get(id: string): Promise<Conversation | null>
     async list(): Promise<Conversation[]>
   }
2. Guna Redis sebagai backing store (serialize JSON)
3. POST /api/knowledge/ask — accept optional `conversationId`:
   - If provided: load conversation history, include dalam context ke LLM
   - If not: create new conversation
   - Return conversationId dalam response
4. Update frontend (public/script.js) untuk track conversationId
5. Tests
6. Commit: git add -A && git commit -m "feat: conversation memory with session context (CC-2)"

Session Handoff:
Kemaskini GEMINI.md → T19: Conversation memory ✅
````

---

### `[ ]` T20 — Add Health Check with DB & Redis Status

**Priority:** P3
**Complexity:** Ringan
**Skills:** —
**Delegation:** Leaf sub-agent

````
PROMPT:

Projek: F:\GANGNIAGA-MASTER
Task: Upgrade /health endpoint dengan dependency status

Current: GET /health returns { status: 'ok' } — no DB/Redis check.

Arahan:
1. Update src/app.ts /health endpoint:
   app.get('/health', async (req, res) => {
     const checks = {
       status: 'ok',
       timestamp: new Date().toISOString(),
       services: {
         database: 'unknown',
         redis: 'unknown',
         ai: 'unknown',
       }
     };
     try { await vectorStore.ping(); checks.services.database = 'ok'; } catch { checks.services.database = 'fail'; checks.status = 'degraded'; }
     try { await cache.ping(); checks.services.redis = 'ok'; } catch { checks.services.redis = 'fail'; checks.status = 'degraded'; }
     checks.services.ai = process.env.GROQ_API_KEY ? 'configured' : 'not-configured';
     res.json(checks);
   });
2. Tambah ping() methods ke VectorStore dan Cache
3. Update tests
4. Commit: git add -A && git commit -m "feat: enhanced health check with dependency status (CC-1)"

Session Handoff:
Kemaskini GEMINI.md → T20: Enhanced health check ✅
````

---

### `[ ]` T21 — Add Rate Limiting

**Priority:** P3
**Complexity:** Ringan
**Skills:** —
**Delegation:** Leaf sub-agent

````
PROMPT:

Projek: F:\GANGNIAGA-MASTER
Task: Add rate limiting ke API endpoints

Arahan:
1. npm install express-rate-limit
2. Tambah ke src/app.ts:
   import rateLimit from 'express-rate-limit';
   const apiLimiter = rateLimit({
     windowMs: 15 * 60 * 1000,  // 15 minutes
     max: 100,  // max 100 requests per window
     standardHeaders: true,
     legacyHeaders: false,
   });
   app.use('/api/', apiLimiter);
3. Tambah stricter limit untuk /api/seed:
   const seedLimiter = rateLimit({ windowMs: 60 * 60 * 1000, max: 5 });
   app.use('/api/seed', seedLimiter);
4. Update tests
5. Commit: git add -A && git commit -m "feat: add API rate limiting (CC-1)"

Session Handoff:
Kemaskini GEMINI.md → T21: Rate limiting ✅
````

---

### `[ ]` T22 — Integrate ADR-0007 into Governance Docs

**Priority:** P3
**Complexity:** Ringan
**Skills:** —
**Delegation:** Leaf sub-agent

````
PROMPT:

Projek: F:\GANGNIAGA-MASTER
Task: Integrate ADR-0007 (Core Technology Stack) into governance documentation

Context:
- ADR-0007 status: "Proposed" — tidak listed dalam DOCUMENT_MAP.md
- ADR-0007 dah make technology decisions (Node.js/TypeScript/PostgreSQL/pgvector)

Arahan:
1.adr/ADR-0007-CORE-TECHNOLOGY-STACK.md — tukar status dari "Proposed" ke "Approved" (kerana Bounded Pilot dah implement stack ini)
2. Tambah Approval Record section ke ADR-0007:
   | Field | Value |
   |---|---|
   | Decision | Approved |
   | Approver | Megat |
   | Decision date | 2026-07-15 |
   | Conditions | Bounded Pilot validation passed |
3. DOCUMENT_MAP.md — tambah ADR-0007 ke ADR Layer section
4. README.md — tambah ADR-0007 reference dalam Development Status section
5. GEMINI.md — tambah "ADR-0007: Approved ✅" ke Key Architecture Decisions
6. Commit: git add -A && git commit -m "docs: integrate ADR-0007 into governance docs — status Approved (CC-1)"

Session Handoff:
Kemaskini GEMINI.md → T22: ADR-0007 integrated ✅
````

---

### `[ ]` T23 — Clean Up Stale GLOSSARY/CONTRIBUTING References

**Priority:** P3
**Complexity:** Ringan
**Skills:** —
**Delegation:** Leaf sub-agent

````
PROMPT:

Projek: F:\GANGNIAGA-MASTER
Task: Clean up stale references dalam GLOSSARY.md dan CONTRIBUTING.md

Issues:
1. GLOSSARY.md Lines 43-49 — masih ada "mismatch" language padahal rename dah siap
2. CONTRIBUTING.md Line 63-64 — masih ada GLOSSARY rename caution padahal ADR-0006 dah approved
3. README.md — "Phase 1" tapi CONSTITUTION.md masih cakap "Phase 0"

Arahan:
1. GLOSSARY.md — buang Lines 43-49 (stale mismatch language). Gantikan dengan:
   "The canonical filename `GLOSSARY.md` is the current repository path. No mismatch exists."
2. CONTRIBUTING.md — buang Line 63-64 tentang GLOSSARY rename caution
3. README.md — check "Development Status" section. Jika cakap "Phase 1", align dengan CONSTITUTION.md (Phase 0). ATAU kemaskini CONSTITUTION.md ke Phase 1 jika dah berpindah.
4. Commit: git add -A && git commit -m "docs: clean up stale GLOSSARY/CONTRIBUTING/README references (CC-0)"

Session Handoff:
Kemaskini GEMINI.md → T23: Stale references cleaned ✅
````

---

### `[ ]` T24 — Remove Unused Redis from docker-compose (or document as reserved)

**Priority:** P3
**Complexity:** Ringan
**Skills:** —
**Delegation:** Leaf sub-agent

````
PROMPT:

Projek: F:\GANGNIAGA-MASTER
Task: Address Redis dalam docker-compose.yml — currently unused

Jika T15 (Redis caching) belum dilaksanakan:
1. Tambah comment ke docker-compose.yml Redis service:
   # Redis — reserved for future caching layer (see Implementation Playbook T15)
2. ATAU comment out seluruh Redis service block

Jika T15 dah dilaksanakan:
1. Pastikan .env.example ada REDIS_URL
2. Pastikan Redis healthcheck ada dalam docker-compose

3. Commit: git add -A && git commit -m "chore: document Redis service status in docker-compose (CC-0)"

Session Handoff:
Kemaskini GEMINI.md → T24: Redis status clarified ✅
````

---

### `[ ]` T25 — Fix TRANSFORMATION_PLAYBOOK.md Checkbox Status

**Priority:** P3
**Complexity:** Ringan
**Skills:** —
**Delegation:** Leaf sub-agent

````
PROMPT:

Projek: F:\GANGNIAGA-MASTER
Task: Fix stale checkboxes dalam TRANSFORMATION_PLAYBOOK.md

Issues:
1. Fasa A (A1) dan Fasa B (B1-B4) masih [ ] unchecked padahal kerja dah buat
2. F1 commit message typo: "rename GLOSSARY.md to GLOSSARY.md" — sepatutnya "rename GLOSSORY.md to GLOSSARY.md"
3. GEMINI.md I2 template dah out of sync dengan actual GEMINI.md (missing items)

Arahan:
1. TRANSFORMATION_PLAYBOOK.md:
   - Tukar A1 dari [ ] → [x]
   - Tukar B1-B4 dari [ ] → [x]
   - Fix F1 commit message typo (Line 602): GLOSSARY.md → GLOSSARY.md patutnya GLOSSORY.md → GLOSSARY.md
2. Commit: git add -A && git commit -m "docs: fix stale checkboxes and typo in TRANSFORMATION_PLAYBOOK.md (CC-0)"

Session Handoff:
Kemaskini GEMINI.md → T25: Playbook checkboxes fixed ✅
````

---

### `[ ]` T26 — Add Dockerfile for Production Deployment

**Priority:** P3 (Future)
**Complexity:** Sederhana
**Skills:** —
**Delegation:** Leaf sub-agent

````
PROMPT:

Projek: F:\GANGNIAGA-MASTER
Task: Cipta Dockerfile untuk production deployment

Arahan:
1. Cipta Dockerfile:
   FROM node:20-slim
   WORKDIR /app
   COPY package*.json ./
   RUN npm ci --only=production
   COPY . .
   RUN npm run build
   EXPOSE 3000
   CMD ["node", "dist/index.js"]
2. Cipta .dockerignore:
   node_modules
   dist
   .git
   .env
   *.md
   implementation
   strategy
   knowledge
   architecture
   adr
   standards
   templates
   roadmap
   conductor
   .github
   .tours
3. Test build: docker build -t gangniaga-exec-os .
4. Commit: git add -A && git commit -m "infra: add Dockerfile for production deployment (CC-2)"

Session Handoff:
Kemaskini GEMINI.md → T26: Dockerfile created ✅
````

---

### `[ ]` T27 — Add API Key Authentication Middleware

**Priority:** P3 (Future)
**Complexity:** Sederhana
**Skills:** —
**Delegation:** Leaf sub-agent

````
PROMPT:

Projek: F:\GANGNIAGA-MASTER
Task: Add proper API key authentication middleware

Context:
- Currently /api/seed guna simple ADMIN_KEY header check (from T8)
- Need proper auth middleware untuk semua API endpoints

Arahan:
1. Cipta src/middleware/auth.ts:
   export function apiKeyAuth(req, res, next) {
     const key = req.headers['x-api-key'];
     if (!key || key !== process.env.API_KEY) {
       return res.status(401).json({ error: 'Invalid or missing API key' });
     }
     next();
   }
   export function adminAuth(req, res, next) {
     const key = req.headers['x-admin-key'];
     if (!key || key !== process.env.ADMIN_KEY) {
       return res.status(403).json({ error: 'Admin access required' });
     }
     next();
   }
2. Apply ke app.ts:
   app.use('/api/knowledge', apiKeyAuth);  // all knowledge endpoints need API key
   app.use('/api/seed', adminAuth);  // seed needs admin key
3. Tambah API_KEY= ke .env.example
4. Update tests dengan API key headers
5. Commit: git add -A && git commit -m "feat: API key authentication middleware (CC-2)"

Session Handoff:
Kemaskini GEMINI.md → T27: API auth middleware ✅
````

---

### `[ ]` T28 — Add Logging & Observability

**Priority:** P3 (Future)
**Complexity:** Sederhana
**Skills:** —
**Delegation:** Leaf sub-agent

````
PROMPT:

Projek: F:\GANGNIAGA-MASTER
Task: Add structured logging dan basic observability

Arahan:
1. npm install pino pino-http
2. Cipta src/logger.ts:
   import pino from 'pino';
   export const logger = pino({
     level: process.env.LOG_LEVEL || 'info',
     transport: process.env.NODE_ENV !== 'production' ? { target: 'pino-pretty' } : undefined,
   });
3. Tambah ke app.ts: app.use(pinoHttp({ logger }))
4. Log setiap API call dengan: method, url, statusCode, responseTime
5. Log errors dengan stack trace
6. Tambah /metrics endpoint (basic):
   - uptime
   - total requests
   - error count
   - DB connection status
7. Update tests
8. Commit: git add -A && git commit -m "feat: structured logging and basic observability (CC-2)"

Session Handoff:
Kemaskini GEMINI.md → T28: Logging & observability ✅
````

---

### `[ ]` T29 — Add CORS Configuration

**Priority:** P3 (Future)
**Complexity:** Ringan
**Skills:** —
**Delegation:** Leaf sub-agent

````
PROMPT:

Projek: F:\GANGNIAGA-MASTER
Task: Add CORS configuration untuk API

Arahan:
1. npm install cors
2. Tambah ke src/app.ts:
   import cors from 'cors';
   const corsOptions = {
     origin: process.env.ALLOWED_ORIGINS?.split(',') || '*',
     methods: ['GET', 'POST'],
     allowedHeaders: ['Content-Type', 'x-api-key', 'x-admin-key'],
   };
   app.use(cors(corsOptions));
3. Tambah ALLOWED_ORIGINS= ke .env.example
4. Update tests
5. Commit: git add -A && git commit -m "feat: CORS configuration (CC-1)"

Session Handoff:
Kemaskini GEMINI.md → T29: CORS configured ✅
````

---

### `[ ]` T30 — Update Frontend with Conversation History & Status Indicators

**Priority:** P3 (Future)
**Complexity:** Sederhana
**Skills:** —
**Delegation:** Leaf sub-agent

````
PROMPT:

Projek: F:\GANGNIAGA-MASTER
Task: Update frontend untuk support conversation history dan real status

Context:
- public/script.js — currently stateless (no conversation memory)
- Sidebar — shows hardcoded "Engine: Online" dan "Memory: Local (VectorStore)"

Arahan:
1. public/script.js — integrate dengan T19 (conversation memory):
   - Store conversationId dalam variable
   - Send conversationId dengan setiap /api/knowledge/ask request
   - On page load, check localStorage untuk existing conversation
2. public/index.html — update sidebar status:
   - Gantikan hardcoded "Engine: Online" dengan fetch /health
   - Show actual DB/Redis/AI status
   - Show error state jika service down
3. Tambah input character counter (max 500)
4. Tambah clear conversation button
5. Commit: git add -A && git commit -m "feat: frontend conversation history and live status (CC-2)"

Session Handoff:
Kemaskini GEMINI.md → T30: Frontend updated ✅
````

---

### `[ ]` T31 — Generate API Documentation (OpenAPI/Swagger)

**Priority:** P3 (Future)
**Complexity:** Sederhana
**Skills:** —
**Delegation:** Leaf sub-agent

````
PROMPT:

Projek: F:\GANGNIAGA-MASTER
Task: Generate OpenAPI specification untuk semua API endpoints

Arahan:
1. npm install swagger-jsdoc swagger-ui-express
2. Cipta src/swagger.ts:
   import swaggerJsdoc from 'swagger-jsdoc';
   import swaggerUi from 'swagger-ui-express';
   const options = {
     definition: {
       openapi: '3.0.0',
       info: { title: 'GangNiaga Executive OS API', version: '1.0.0' },
     },
     apis: ['src/app.ts'],
   };
   export const swaggerSpec = swaggerJsdoc(options);
3. Tambah ke app.ts:
   app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
4. Add JSDoc annotations ke setiap endpoint dalam app.ts
5. Test: akses http://localhost:3000/api-docs
6. Commit: git add -A && git commit -m "feat: OpenAPI documentation with Swagger UI (CC-2)"

Session Handoff:
Kemaskini GEMINI.md → T31: API docs generated ✅
````

---

## 📊 Status Dashboard

| Fasa | Tasks | Goal | Dependencies |
|------|-------|------|-------------|
| **1**: Code Repair (P1) | T1-T5 | Fix lint, test, build, security | None |
| **2**: Quality (P2) | T6-T8 | Expand tests, clean types, input validation | Fasa 1 ✅ |
| **3**: Doc/CI Sync (P2) | T9-T11 | Sync DOCUMENT_MAP, add code CI, align license | Fasa 1 ✅ |
| **4**: Phase 1 Architecture | T12-T15 | Real pgvector, real embeddings, graceful shutdown, Redis | Fasa 1-2 ✅ |
| **5**: Phase 2 Intelligence | T16-T31 | Multi-provider, capability routing, ingestion, memory, auth, logging, frontend, API docs | Fasa 4 ✅ |

**Total: 31 tasks**
**Estimated Sessions: ~20-25**

---

## 🔀 Delegation Guide

| Task Range | Delegation Mode | Why |
|---|---|---|
| T1-T8 | `delegate_task` leaf sub-agent | Mechanical fixes, clear scope, no reasoning needed |
| T9-T11 | `delegate_task` leaf sub-agent | Doc sync + CI, straightforward |
| T12-T15 | `delegate_task` orchestrator sub-agent | Touches DB, code, tests, migrations — multi-step |
| T16-T17 | `delegate_task` orchestrator sub-agent | Architecture refactor, new directories |
| T18-T31 | `delegate_task` leaf sub-agent | Each is isolated feature addition |

**Parallelizable:** T1-T5 boleh run parallel (independent fixes). T9-T11 boleh run parallel.

---

## 🚨 Emergency Procedures

### Build/Test Fails After Task
```text
1. git log --oneline -3
2. git diff HEAD~1 — review changes
3. Fix issue ATAU git reset --hard HEAD~1 (rollback)
4. Kemaskini GEMINI.md dengan status
```

### Database Migration Fails (T12)
```text
1. docker compose down -v (destroy DB volume)
2. docker compose up -d db
3. Re-run migration
4. Jika masih gagal, fall back ke in-memory VectorStore dan log issue
```

### Groq API Unavailable (T13)
```text
1. Fall back ke mock embedding (NODE_ENV=development)
2. Log error
3. Continue dengan SHA256 mock sebagai dev fallback
```

---

## 🔄 Recurring Maintenance (Post-Implementation)

| Kekerapan | Task | Tool | Prompt |
|-----------|------|------|--------|
| Setiap commit | Lint + test + build | `terminal` | `npm run lint && npm test && npm run build` |
| Setiap PR | Full code validation | GitHub Actions | Auto via code-validation.yml |
| Mingguan | Security scan | `security-scan` | Scan untuk hardcoded secrets, weak configs |
| Mingguan | Dependency check | `terminal` | `npm audit` |
| Bulanan | Test coverage review | `terminal` | `npm test -- --coverage` |
| Bulanan | Health check | `terminal` | `powershell scripts/health-check.ps1` |
| Per release | Changelog | `git-release` | Auto-generate dari commit history |
| Quarterly | Full audit | `governance-repo-audit` skill | Holistic review |

---

> [!IMPORTANT]
> **Peraturan Emas:**
> 1. Fix code infrastructure dulu (Fasa 1) sebelum add features (Fasa 4-5)
> 2. Setiap task mesti akhiri dengan kemaskini GEMINI.md (session handoff)
> 3. Jangan skip lint/test/build — mereka adalah quality gates
> 4. Jika ragu — guna skill `council` untuk 4 perspektif
> 5. Jika token habis — commit WIP, kemaskini GEMINI.md, resume sesi baharu
> 6. Semua structural changes perlukan ADR-0006 classification
> 7. Jangan invent APIs atau files yang tak dalam playbook — ikut task scope

---

> **Build Executive Intelligence through code that works, not code that's planned.**

---

# End of Implementation Playbook v1.0
