# MASTER.md Decomposition Plan

> **Artifact:** MASTER.md Decomposition Plan
> **Repository:** `thisisniagahub/GANGNIAGA-MASTER`
> **Program Relationship:** Fasa E: MASTER.md Modularization (Task E1)
> **Current Repository Phase:** Phase 0 — Company Knowledge & Executive Intelligence Foundation
> **Status:** Completed
> **Owner:** Document Architect / Governance Lead
> **Last Reviewed:** 2026-07-15

---

## 1. Executive Summary

`MASTER.md` serves as the subordinate Single Source of Truth (SSOT) operating reference for the GangNiaga Executive OS. However, at **7,765 lines (over 100KB)**, it functions as a "God file," which degrades maintainability and poses parsing/context-window challenges for both human maintainers and AI agents.

This document outlines the decomposition plan for modularizing `MASTER.md` under **Blueprint v2.0** guidelines. The goal is to separate concerns cleanly, distributing technical architectures and knowledge systems to their respective domains (`architecture/`, `knowledge/`, `standards/`) while keeping the core executive identity consolidated within a slimmed-down `MASTER.md`.

---

## 2. Ponytail Audit & Over-engineering Analysis

Following the `ponytail-audit` standard (assessing the tree for documentation over-engineering, redundancy, and speculative bloat, not correctness), we identify the following optimization areas:

### Key Findings
1. `<shrink>` **Speculative Implementation Details in Part II (Architecture)**:
   - *Issue:* Over-detailed specifications for the Planning, Orchestration, and Execution layers despite the repository being in Phase 0 (Foundation).
   - *Remediation:* Condense long paragraphs into high-level architecture designs and delegate implementation details to future ADRs.
   - *Location:* [MASTER.md (Lines 573-2207)](file:///F:/GANGNIAGA-MASTER/MASTER.md#L573-L2207)
2. `<shrink>` **Repetitive Introductory Preambles**:
   - *Issue:* Every part starts with extensive introductory text repeating general philosophy and authority principles.
   - *Remediation:* Consolidate preambles. Let `MASTER.md`'s header handle general philosophy and have sub-documents start directly with their specific domains.
   - *Location:* [MASTER.md](file:///F:/GANGNIAGA-MASTER/MASTER.md)
3. `<delete>` **Redundant Glossary Explanations**:
   - *Issue:* Definitions in Part VII (Appendices) duplicate terms defined in `GLOSSARY.md`.
   - *Remediation:* Reference `GLOSSARY.md` directly.
   - *Location:* [MASTER.md (Part VII / Appendices)](file:///F:/GANGNIAGA-MASTER/MASTER.md#L6984-L7648)
4. `<shrink>` **Tooling/Standard Operating Checklists**:
   - *Issue:* Detailed step-by-step developer guidelines inside Appendices duplicate operational workflows.
   - *Remediation:* Consolidate under `standards/` and link to it.
   - *Location:* [MASTER.md (Part VII)](file:///F:/GANGNIAGA-MASTER/MASTER.md#L6984-L7648)

**Net Documentation Removable / Compressible:** Estimated ~800 to 1,200 lines (~15% of the file) can be shrunk or removed during modularization.

---

## 3. Council Discussion & Strategic Consensus

A 4-voice council discussion was simulated to address the following dilemma:
> *"Should we decompose MASTER.md aggressively (all parts into separate files) or conservatively (PART II and PART III only)?"*

### Perspectives

*   **Architect (Structure & Concerns):**
    *   *Position:* **Aggressive**.
    *   *Argument:* Every part has a distinct semantic domain. PART II is Architecture, PART III is Knowledge, PART IV is Standards/Engineering, and PART V is Governance. Keeping them in one file violates the separation of concerns. A clean directory tree makes search and semantic indexing significantly faster and more accurate.
*   **Developer (Velocity & Risk):**
    *   *Position:* **Progressive / Hybrid**.
    *   *Argument:* An aggressive split of all 8 parts in a single session creates high risk of broken internal markdown links, reference issues, and complex commit merges. A progressive approach—starting with the heaviest parts (PART II and PART III) first—allows us to test and verify the transition framework before moving smaller parts.
*   **Governance Owner (Compliance & SSOT):**
    *   *Position:* **Hybrid (Conservative Core, Modular Specs)**.
    *   *Argument:* `MASTER.md` is subordinate only to `CONSTITUTION.md`. If we strip it completely into an index, we lose the central unified vision. The core (PART I, PART V, PART VI, PART VIII) must remain in `MASTER.md` to protect the project's identity, while specialized technical systems (PART II, PART III, PART IV, PART VII) must migrate to their respective subfolders.
*   **Minimalist (Ponytail & YAGNI):**
    *   *Position:* **Conservative (Split Only the Giants)**.
    *   *Argument:* Do not create files for the sake of creating files. Smaller sections (<500 lines) do not impact context windows enough to justify the overhead of new headers, preambles, and links. Split PART II (1,635 lines) and PART III (2,377 lines) because they are giants. Keep everything else in `MASTER.md` until they grow large enough to require splitting.

### Strategic Consensus (Hybrid Approach)

The Council consensus is to adopt a **Hybrid & Progressive Decomposition Plan**:
1.  **Phase E1 (Current):** Conduct mapping and path determination (Completed).
2.  **Phase E2 & E3 (Immediate):** Extract the two largest components:
    *   **PART II (Target Executive Architecture)** → Moved to `architecture/`
    *   **PART III (Target Knowledge System)** → Moved to `knowledge/`
3.  **Future Phases (Deferred):**
    *   **PART IV (Engineering System)** → Retain in `MASTER.md` for now, consider moving to `standards/` in Phase F/G.
    *   **PART VII (Appendices)** → Retain in `MASTER.md` or move to `standards/` / `knowledge/` during final cleanup if size increases.
    *   **PART I, V, VI, VIII** → Retain permanently in `MASTER.md` as the core foundation operating reference.

---

## 4. MASTER.md Decomposition Map

The boundaries, sizes, recommended destinations, and justifications for each section of `MASTER.md` are mapped below:

| PART | Baris Mula-Akhir | Anggaran Saiz (Baris) | Destinasi Cadangan | Justifikasi |
| :--- | :--- | :--- | :--- | :--- |
| **Preamble & TOC** | 1 - 145 | 145 | KEKAL di `MASTER.md` | Mengandungi metadata, klasifikasi dokumen, tujuan, interpretasi status fasa, dan Table of Contents induk. |
| **PART I — Executive Foundation** | 146 - 572 | 427 | KEKAL di `MASTER.md` | Merupakan teras filosofi dan identiti GangNiaga Executive OS yang mentakrifkan hala tuju keseluruhan. |
| **PART II — Target Executive Architecture** | 573 - 2207 | 1635 | PINDAH ke `architecture/` | Sangat besar dan mengandungi reka bentuk teknikal terperinci bagi lapisan-lapisan sistem yang akan berkembang secara berasingan. |
| **PART III — Target Knowledge System** | 2208 - 4584 | 2377 | PINDAH ke `knowledge/` | Bahagian terbesar dalam `MASTER.md`. Mengandungi kerangka penyelidikan dan arkib pengetahuan yang patut diuruskan dalam folder `knowledge/`. |
| **PART IV — Engineering System** | 4585 - 6138 | 1554 | KEKAL (Sementara) | Mengandungi piawaian pembangunan, struktur repositori, dan model operasi ejen. Boleh dipindahkan ke `standards/` pada masa hadapan. |
| **PART V — Executive Governance** | 6139 - 6557 | 419 | KEKAL di `MASTER.md` | Model tadbir urus eksekutif adalah ringan dan wajar dikekalkan bersama dokumen asas untuk mengekalkan kejelasan rujukan. |
| **PART VI — Evolution and Operating Model** | 6558 - 6983 | 426 | KEKAL di `MASTER.md` | Berkaitan rapat dengan evolusi teras repositori dan strategi jangka panjang yang sepatutnya menjadi sebahagian daripada manual induk. |
| **PART VII — Executive Appendices** | 6984 - 7648 | 665 | KEKAL (Sementara) | Merupakan manual rujukan operasi (operational reference manual) yang boleh diasingkan bagi mengurangkan saiz `MASTER.md` secara drastik jika diperlukan kelak. |
| **PART VIII — Foundation Status & Roadmap** | 7649 - 7765 | 117 | KEKAL di `MASTER.md` | Menutup rujukan operasi dengan membezakan baseline semasa dan roadmap bertadbir; berfungsi sebagai kenyataan penutup `MASTER.md`. |

---

## 5. Next Steps for Fasa E

1.  **Task E2:** Extract PART II (Architecture) into `architecture/`. Refactor references and replace the section in `MASTER.md` with a clean hyperlink delegation.
2.  **Task E3:** Extract PART III (Knowledge) into `knowledge/`. Refactor references and replace the section in `MASTER.md` with a clean hyperlink delegation.
3.  **Task E4:** Run verification loops to ensure all internal and cross-document markdown links remain unbroken.
