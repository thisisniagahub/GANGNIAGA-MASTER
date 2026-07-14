# Workflow: GangNiaga Executive OS
> Version: 1.0.0
> Status: Active
> Authority: Subordinate to CONSTITUTION.md and MASTER.md

## 1. Conductor Workflow
- **Task Commits:** Every completed task must be committed immediately before starting the next task.
- **Commit Messages:** Must follow CC classes (CC-0 to CC-4) format.
- **Validation Loop:** Prior to commit, run `powershell scripts/health-check.ps1` and ensure 100% PASS.
- **Documentation Drift:** Keep `DOCUMENT_MAP.md` aligned recursively with all workspace files.
