# ADR-0007: Core Technology Stack Selection

**Date:** 2026-07-15
**Status:** Approved
**Change Class:** CC-3 (Major Architecture Baseline)
**Approver:** Megat

## 1. Context and Problem Statement
GANGNIAGA-MASTER is designed as an Enterprise AI Operating System. To execute Phase 1 (Architecture Foundation), we must establish a core technology stack that supports high concurrency, AI agent orchestration, vector embeddings, and strict enterprise governance. The chosen stack must balance developer productivity, ecosystem maturity for AI tooling, and operational stability.

## 2. Decision Drivers
* Native support and rich ecosystem for LLM/Agentic APIs (Vercel AI SDK).
* High performance for asynchronous operations (managing multiple subagents).
* Strong typing to reduce runtime errors and enforce strict interfaces (TypeScript).
* Serverless-friendly deployment target with Git integration (Vercel).
* Fully managed database, vectors, and authentication (Supabase).
* Exclude Docker/containers to reduce environment complexity and operational overhead.

## 3. Considered Options
* Option 1: Express.js (Node.js) + Dockerized PostgreSQL (pgvector). Good parity but requires local database maintenance and manual hosting orchestration.
* Option 2: Next.js App Router + Supabase + Vercel (No Docker). Native cloud/serverless integration, fast git-to-deployment workflow, turnkey authentication, and zero-maintenance managed database.

## 4. Decision Outcome
Chosen option: **Option 2: Next.js App Router + Supabase + Vercel (No Docker)**, because it aligns with Vercel's native deployment engine, simplifies local setup, and integrates Supabase Auth and pgvector without manual infrastructure scaling.

* **Frontend & API Framework:** Next.js (App Router, TypeScript)
* **Relational Database:** PostgreSQL (Supabase, queried via Prisma/Drizzle or `@supabase/supabase-js`)
* **AI/Vector Storage:** pgvector (Supabase native extension)
* **Authentication & Authorization:** Supabase Auth + Database RLS (Row-Level Security)
* **AI Integration:** Vercel AI SDK (`ai` package)
* **Hosting & Deployment:** Vercel (Auto-deploy from git)
* **Infrastructure Parity:** Managed environment (No Docker containerization)

### 4.1 Consequences
* **Positive:** Unifies frontend and backend in one Next.js repository. Turnkey user auth and database security via Supabase policies. Native deployment triggers on every commit.
* **Negative:** Vercel Hobby tier function timeout (10s) requires ingestion jobs to run in batches or via background edge functions.

## 5. Migration and Rollback Plan
* **Migration:** Scaffold Next.js App Router in the root directory. Retire `docker-compose.yml` and `docker:up` scripts. Configure Supabase client and environment variables.
* **Rollback:** Re-evaluate hosting/deployment targets (e.g. migrate Next.js to self-hosted Node.js server) if serverless timeouts become unmanageable.
