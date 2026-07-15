# Enterprise Developer Standards

**Version:** 1.0
**Target:** All human developers and AI sub-agents.

## 1. Principles
1. **Outcome-Obsessed:** Code must deliver business value. Unnecessary abstraction is prohibited (Ponytail Mode: Full).
2. **Evidence-First Validation:** No code is considered "done" until tests and static analysis pass.
3. **Atomic Commits:** Commits must be logical, single-purpose, and linked to an ADR or Track if structural.

## 2. Technology Specific (Node.js & TypeScript)
* Use `strict: true` in `tsconfig.json`.
* Avoid `any`. Use `unknown` with type-narrowing if the type is truly dynamic.
* Favour async/await over raw Promises. Never use `.then()` chains unless strictly necessary.

## 3. Review & Quality Gates
* Linting must pass (`ESLint` + `Prettier`).
* No secrets committed to source control (checked via pre-commit hooks or automated scans).
* All new services must have basic health check endpoints (`/health`).
