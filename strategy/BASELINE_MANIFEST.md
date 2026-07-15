# GANGNIAGA — Enterprise Baseline Manifest

> **Document ID:** `GN-BASELINE-MANIFEST-001`  
> **Document type:** Baseline Manifest  
> **Version:** `1.0.0`  
> **Status:** Draft  
> **Programme:** Company Knowledge & Executive Intelligence Platform  
> **Prepared by:** Antigravity / Assurance Lead  
> **Effective Date:** 2026-07-15  

## 1. Tracked Files and Source Control Status

* **Total Tracked Files:** 90
* **Current Branch:** `master` (ahead of origin/master by 3 commits)
* **Latest Commit:** `3879270cc6a082e10fc1f635234267c08ae7dea2` - feat(arch): CC-3 implement native automation git hooks
* **Open PRs:** N/A (Local execution)
* **Other Branches/Worktrees:**
  - `fix/foundation-consistency-v1`
  - Subagent worktrees (e.g., `subagent-Assurance-Lead-self-f23fdaa7`, `subagent-Strategy-Lead-self-b0d6eb7c`, etc.)

## 2. Untracked Local Artifacts

The following local artifacts were identified as untracked in the worktree:

- `.git_files.txt`
- `architecture/BUSINESS_CAPABILITY_MAP.md`
- `standards/METADATA_SCHEMA.md`
- `strategy/PROGRAMME_CHARTER.md`
- `strategy/PROGRAMME_CONTROL_RECORD.md`
- `strategy/SOURCE_OF_TRUTH_MODEL.md`
- `strategy/STAKEHOLDER_MAP.md`
- `strategy/STRATEGIC_OUTCOMES.md`

## 3. Root Documents Status & Known Contradictions

| Document | Status | Links/References | Known Contradictions / Notes |
| :--- | :--- | :--- | :--- |
| `CONSTITUTION.md` | Controlled | Fundamental Authority | - |
| `MASTER.md` | Controlled | Repository Doctrine | Split part II and III complete. |
| `GLOSSARY.md` | Blocked | Terminology | Conflict between two versions. See GN-G0-002. |
| `PROGRAMME_BACKLOG.md` | Draft | Execution Backlog | Baseline manifest established. |
| `DOCUMENT_MAP.md` | Draft | - | - |
| `G0_DECISION_PACK.md` | Approved | - | Approved G0 pack. |
| `PROJECT.md` | Draft | - | - |
| `VISION.md` | Draft | - | - |
| `MISSION.md` | Draft | - | - |
| `PHILOSOPHY.md` | Draft | - | - |
| `PRINCIPLES.md` | Draft | - | - |
| `SOURCES.md` | Draft | - | - |
| `CONTRIBUTING.md` | Draft | - | - |
| `LICENSE` | Proprietary | - | Requires explicit legal approval before OSS. |

## 4. Verification and Sign-off

**Manifest Reproducibility:** Confirmed via `git branch`, `git log`, and `git ls-files`.  
**Root Document Classification:** 100% of discovered root documents are listed above.  
**Deviations:** All known deviations (e.g., `GLOSSARY.md` conflict) have assigned issue IDs/tasks in the backlog.  
