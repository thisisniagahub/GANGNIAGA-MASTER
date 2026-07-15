# ADR-0007: Core Technology Stack Selection

**Date:** 2026-07-15
**Status:** Proposed
**Change Class:** CC-3 (Major Architecture Baseline)

## 1. Context and Problem Statement
GANGNIAGA-MASTER is designed as an Enterprise AI Operating System. To execute Phase 1 (Architecture Foundation), we must establish a core technology stack that supports high concurrency, AI agent orchestration, vector embeddings, and strict enterprise governance. The chosen stack must balance developer productivity, ecosystem maturity for AI tooling, and operational stability.

## 2. Decision Drivers
* Native support and rich ecosystem for LLM/Agentic APIs.
* High performance for asynchronous operations (managing multiple subagents).
* Strong typing to reduce runtime errors and enforce strict interfaces.
* Portability and ease of deployment via containerization.

## 3. Considered Options
* Option 1: Python (FastAPI) + PostgreSQL + Qdrant. Excellent for AI/ML, but can struggle with complex async state management without robust frameworks.
* Option 2: Node.js (TypeScript) + PostgreSQL + Qdrant/pgvector. Excellent async model, very strong ecosystem for AI Agents (LangChain.js, Vercel AI SDK), and strict typing via TypeScript.
* Option 3: Go + PostgreSQL. High performance, but weaker native AI tooling ecosystem compared to Python/TypeScript.

## 4. Decision Outcome
Chosen option: **Option 2: Node.js (TypeScript) + PostgreSQL**, because it offers the best balance of asynchronous agent orchestration, strict static typing (TypeScript) for enterprise stability, and a dominant ecosystem for web/AI integration tools.

* **Backend Engine:** Node.js LTS (TypeScript)
* **Relational Database:** PostgreSQL (Supabase/Prisma as ORM)
* **AI/Vector Storage:** pgvector (integrated with PostgreSQL)
* **Infrastructure:** Docker & Docker Compose (Local & Production Parity)

### 4.1 Consequences
* **Positive:** Unifies the tech stack if frontend (React/Next.js) is introduced later. Strong tooling for agent parallel execution.
* **Negative:** Node.js single-threaded nature requires careful architectural planning for CPU-bound tasks (which should be offloaded to microservices if needed).

## 5. Migration and Rollback Plan
* **Migration:** Create base `package.json`, `tsconfig.json`, and `docker-compose.yml` for PostgreSQL. 
* **Rollback:** Re-evaluate and switch to Python/FastAPI before implementing the core application logic if benchmarking fails.
