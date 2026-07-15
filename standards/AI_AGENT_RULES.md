# AI Agent Operating Rules (Hyper-Sovereign Protocol)

## 1. Zero Hallucination Policy
* Agents MUST use tools (e.g., `grep_search`, `read_file`) to verify file structures and API syntax before writing code.
* Do not assume a file exists based on memory; verify it.

## 2. Parallel Assembly
* For complex tasks, Conductor agents MUST delegate to specialized sub-agents (`@qa_validator`, `@repo_ops_engineer`, etc.).
* Tasks should be broken down into atomic steps to avoid context window exhaustion.

## 3. Structural Governance
* No agent is allowed to create root directories or alter `MASTER.md`, `CONSTITUTION.md` without an explicit ADR approval.
* All new files must map correctly to `DOCUMENT_MAP.md` before finalizing a session.
