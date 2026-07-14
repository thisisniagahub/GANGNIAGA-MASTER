# 🎯 GANGNIAGA Master Transformation Playbook v2.1

> **Versi:** 2.1.0
> **Tujuan:** Checklist A–J lengkap dengan prompt siap-guna, skills, MCP, dan plugin
> **Prinsip:** Satu sesi = Satu task. Token-efficient. Self-healing.
> **Total Tasks:** 24 (across 10 fasa)
> **Estimated Sessions:** ~18-20 (batched tasks reduce overhead)

---

## 📖 Cara Penggunaan

```text
1. Buka playbook ini
2. Cari task seterusnya yang belum [x]
3. Copy prompt (dalam blok ````)
4. Paste ke sesi Gemini/Antigravity BAHARU
5. Biarkan agent selesaikan
6. Kembali sini → tick [x]
7. Jika gagal → gunakan ROLLBACK prompt di hujung fasa
```

> [!TIP]
> **Token Savings:** Task yang ringan telah digabungkan (batched). Satu prompt = beberapa fail kecil sekaligus. Ini mengurangkan bilangan sesi diperlukan.

> [!IMPORTANT]
> **Session Handoff Protocol:** Setiap prompt berakhir dengan arahan untuk mengemas kini `f:\GANGNIAGA-MASTER\GEMINI.md` dengan status terkini. Ini memastikan sesi seterusnya tahu apa yang telah selesai.

---

## 🧰 Arsenal: Skills, MCP & Plugins Yang Tersedia

| Tool | Jenis | Digunakan Di Task | Kegunaan |
|------|-------|-------------------|----------|
| `verification-loop` | Skill | D1, F2 | Validate links, consistency, metadata |
| `code-tour` | Skill | F3 | Onboarding walkthrough .tour file |
| `github-ops` | Skill | H1 | Issue triage, labels, project board |
| `git-release` | Skill | B4, G1 | Semantic versioning, tagging |
| `council` | Skill | A1, E1 | 4-voice decision pada ambiguity |
| `compound-docs` | Skill (GK) | C1, I1 | Document reusable solutions |
| `strategic-compact` | Skill | ⚡ Guidelines | Compact context di long sessions |
| `ponytail-audit` | Skill | E1, J2 | Audit over-engineering |
| `ponytail-review` | Skill | B3, F2 | Review minimal changes |
| `security-scan` | Skill | J1 | Scan agent config vulnerabilities |
| `code-review` | Skill (GK) | B1, E2 | Multi-perspective quality gate |
| `brainstorm` | Skill (GK) | J3 | Trade-off analysis architecture |
| `conductor` | Plugin | J4 | Track management, implement, review |
| `gemini-kit` | Plugin | B1, E2, J3 | ask, brainstorm, code-review, debug |
| `ponytail` | Plugin | B3, E1, F2, J2 | Code minimalism enforcement |
| `chrome-devtools` | MCP | — (reserve) | Visual debug jika projek ada web UI |
| `stitch` | MCP | — (reserve) | UI/UX design jika projek expand |

> [!NOTE]
> **Reserved tools** (`chrome-devtools`, `stitch`) tidak digunakan sekarang kerana projek ini 100% dokumentasi. Apabila projek berkembang ke fasa implementasi (G3+), tools ini akan diaktifkan.

### ⚡ Strategic Compact — Token Efficiency Protocol

Guna `/compact` secara strategik untuk mengelakkan auto-compaction yang hilangkan konteks:

| Bila compact? | Kenapa? |
|---------------|--------|
| Selepas selesai fasa (contoh: selepas B4 commit) | Fresh context untuk fasa seterusnya |
| Selepas analisis panjang (contoh: E1 MASTER.md scan) | Keluarkan analysis noise, simpan keputusan |
| Apabila response jadi lambat/tak koheren | Context pressure — compact sekarang |
| JANGAN compact tengah-tengah task | Boleh hilang perubahan in-progress |

---

## FASA A: Kelulusan Governance (G0) — MANUAL

### `[ ]` A1 — Review & Luluskan G0 + ADR-0006

**Jenis:** Manual (Anda sendiri)
**Masa:** 20-40 minit
**Fail:**
- `f:\GANGNIAGA-MASTER\G0_DECISION_PACK.md`
- `f:\GANGNIAGA-MASTER\adr\ADR-0006-CONTROLLED-REPOSITORY-EVOLUTION.md`

**Tindakan anda:**
1. Baca kedua-dua fail
2. G0: Isi Section 19 (pilih Alternative C) + Section 20 (Approval Record)
3. ADR-0006: Isi Section 10 (Approval Record — Decision: Approved, tarikh, nama)
4. Save kedua-dua fail
5. Kemaskini `GEMINI.md` → tambah `## G0 Status: Approved by [nama] on [tarikh]`

> [!TIP]
> Jika anda tidak pasti tentang Alternative C, guna skill `council` dalam sesi baharu untuk mendapatkan 4 perspektif berbeza sebelum membuat keputusan.

---

## FASA B: Governance Reset (Atomic PR 1)

### `[ ]` B1 — Governance Reset: CONSTITUTION + CONTRIBUTING + README (Batch)

**Skills:** `code-review`
**Complexity:** Sederhana — 3 fail kecil

````
PROMPT:

Projek: f:\GANGNIAGA-MASTER
Task: Governance Reset Batch 1 — Kemaskini 3 fail teras
Skills: Aktifkan `code-review` untuk validate perubahan

Konteks:
- ADR-0006 telah diluluskan. Baca f:\GANGNIAGA-MASTER\ADR-0006-CONTROLLED-REPOSITORY-EVOLUTION.md
- Kau perlu kemaskini 3 fail secara batch

## Fail 1: CONSTITUTION.md
1. Buka f:\GANGNIAGA-MASTER\CONSTITUTION.md
2. Cari di bawah "# Governance" (sekitar baris 182):
   "The locked Repository Blueprint v1.0 remains the structural baseline until a formally approved decision authorizes a change. Current work must not rename files, add or remove folders, or alter the roadmap structure."
3. Gantikan dengan wording dari ADR-0006 Section 3.1 "Proposed replacement wording"
4. JANGAN ubah apa-apa lain

## Fail 2: CONTRIBUTING.md
1. Buka f:\GANGNIAGA-MASTER\CONTRIBUTING.md
2. Cari "# 3. Locked Repository Blueprint" (baris 51-69)
3. Tukar tajuk: "# 3. Repository Blueprint and Controlled-Change Model"
4. Ganti "The approved repository blueprint is locked" → "Repository structural changes are governed by the controlled-change model defined in ADR-0006"
5. Ganti senarai "Contributors must not" → ringkasan change classes CC-0 sampai CC-4
6. Kekalkan nota GLOSSARY.md dan LICENSE

## Fail 3: README.md
1. Buka f:\GANGNIAGA-MASTER\README.md
2. Kemaskini tree diagram "Canonical Repository Structure" (baris 93-122):
   - Tambah: strategy/, adr/ (jika belum ada di tree)
3. Tukar nota "locked Repository Blueprint v1.0" → "Repository Blueprint v2.0"

## Validation:
- Grep ketiga-tiga fail untuk "locked Repository Blueprint" — TIDAK boleh wujud tanpa konteks sejarah
- Tunjukkan diff semua 3 fail

## Session Handoff:
Kemaskini f:\GANGNIAGA-MASTER\GEMINI.md — tambah:
  ## Transformation Progress
  - B1: CONSTITUTION, CONTRIBUTING, README updated ✅
````

---

### `[ ]` B2 — Governance Reset: DOCUMENT_MAP.md → Blueprint v2.0

**Skills:** —
**Complexity:** Besar — fail ini adalah navigation index utama

````
PROMPT:

Projek: f:\GANGNIAGA-MASTER
Task: Naik taraf DOCUMENT_MAP.md ke Blueprint v2.0

Arahan:
1. Buka f:\GANGNIAGA-MASTER\DOCUMENT_MAP.md
2. Kemaskini seksyen berikut:

## "Locked Repository Blueprint v1.0" (baris 90-119):
- Tukar tajuk: "Repository Blueprint v2.0"
- Tambah dalam tree structure:
  strategy/ (programme backlog, enterprise direction, transformation plan)
  adr/ (ADR-0006 dan seterusnya)
- Kekalkan semua folder sedia ada (knowledge/, architecture/, standards/, templates/, roadmap/, implementation/)
- Simpan Blueprint v1.0 sebagai "Historical Reference" section

## "Current Repository State" (baris 60-87):
- Tambah G0_DECISION_PACK.md dan ADR-0006 dalam senarai
- Tandakan chat*.md sebagai "Pending migration — see Transformation Playbook"

## Foundation Documents table:
- Tambah baris untuk G0_DECISION_PACK.md (Status: Draft/Approved)
- Tambah baris untuk ADR-0006 (Status: Draft/Approved)

## Known exceptions:
- Kemaskini: "Structural lock has been replaced by controlled-change model (ADR-0006)"

## Version:
- Tukar 1.1.0 → 2.0.0

## Session Handoff:
Kemaskini f:\GANGNIAGA-MASTER\GEMINI.md — tambah:
  - B2: DOCUMENT_MAP.md upgraded to Blueprint v2.0 ✅
````

---

### `[ ]` B3 — Governance Reset: MASTER.md Reference Alignment

**Skills:** `ponytail-review` (validate tiada over-engineering)
**Complexity:** Sederhana — grep & replace sahaja

````
PROMPT:

Projek: f:\GANGNIAGA-MASTER
Task: Selaraskan MASTER.md rujukan kepada Blueprint v2.0
Skills: Aktifkan `ponytail-review` — pastikan perubahan minimal

AMARAN: MASTER.md ada 7765 baris. JANGAN baca semua. JANGAN pecahkan fail ini sekarang.

Arahan:
1. Grep f:\GANGNIAGA-MASTER\MASTER.md untuk semua baris yang mengandungi:
   - "locked" (case insensitive)
   - "Blueprint v1.0"
   - "must not rename"
   - "must not add"
   - "must not remove"
2. Tunjukkan semua hasil grep dengan nombor baris
3. Untuk SETIAP hasil:
   - "Locked Repository Blueprint v1.0" → "Repository Blueprint v2.0 (governed by ADR-0006)"
   - "must not rename files, add or remove folders" → "governed by the controlled-change classification in ADR-0006"
   - KEKALKAN ayat dalam konteks sejarah (contoh: "Blueprint v1.0 was the original baseline")
4. Kemaskini versi dokumen dari 1.1.0 → 2.0.0
5. Tunjukkan HANYA baris yang diubah (diff format)

## Session Handoff:
Kemaskini f:\GANGNIAGA-MASTER\GEMINI.md — tambah:
  - B3: MASTER.md references aligned to v2.0 ✅
````

---

### `[ ]` B4 — Atomic Commit: Governance Reset

**Skills:** `git-release`
**Complexity:** Ringan

````
PROMPT:

Projek: f:\GANGNIAGA-MASTER
Task: Commit semua perubahan Governance Reset secara atomik
Skills: Aktifkan `git-release` untuk versioning

Arahan:
1. cd f:\GANGNIAGA-MASTER
2. git status — sahkan 7 fail berubah:
   CONSTITUTION.md, DOCUMENT_MAP.md, MASTER.md, README.md, CONTRIBUTING.md,
   G0_DECISION_PACK.md (baharu), ADR-0006-CONTROLLED-REPOSITORY-EVOLUTION.md (baharu)
3. git add -A
4. git commit -m "adr: ADR-0006 governance reset — controlled-change model replaces structural lock

Affects: CONSTITUTION.md, MASTER.md, DOCUMENT_MAP.md, README.md, CONTRIBUTING.md
New: G0_DECISION_PACK.md, ADR-0006-CONTROLLED-REPOSITORY-EVOLUTION.md
Blueprint: v1.0 → v2.0
Change class: CC-4 (constitutional amendment)"
5. git log -1 --stat
6. JANGAN push lagi

## Session Handoff:
Kemaskini f:\GANGNIAGA-MASTER\GEMINI.md — tambah:
  - B4: Governance Reset committed ✅ (SHA: [commit hash])
````

---

### 🔙 B-ROLLBACK — Jika Fasa B gagal

````
PROMPT:

Projek: f:\GANGNIAGA-MASTER
Task: ROLLBACK Fasa B — kembalikan semua ke keadaan sebelum governance reset

Arahan:
1. git log --oneline -5 (kenal pasti commit terakhir sebelum governance reset)
2. git diff HEAD~1 --stat (tunjukkan apa yang berubah)
3. git reset --hard HEAD~1 (rollback satu commit)
4. ATAU jika multiple commits: git reset --hard [commit-sha-sebelum-fasa-B]
5. git status — sahkan clean
6. Kemaskini GEMINI.md: "Fasa B rolled back on [tarikh]"
````

---

## FASA C: Structural Migration (PR 2)

### `[x]` C1 — Scaffold Blueprint v2.0 Folders + Migrate chat1,3,5 (Batch)

**Skills:** `compound-docs` (record migration pattern)
**Complexity:** Sederhana-Besar — 12 folder + 3 fail migrasi

````
PROMPT:

Projek: f:\GANGNIAGA-MASTER
Task: Scaffold folders + migrasi 3 fail chat sekaligus
Skills: Aktifkan `compound-docs` — document migration pattern untuk reuse

## Langkah 1: Buat folder structure
Buat folder berikut dengan README.md (2-3 baris sahaja — nama + purpose):
- strategy/README.md → "Strategy and programme planning documents"
- knowledge/README.md → "Verified research, patterns, and benchmarks"
- knowledge/research/README.md → "Technology and domain research"
- knowledge/reverse-engineering/README.md → "Architectural analysis and pattern extraction"
- knowledge/patterns/README.md → "Reusable implementation-neutral solutions"
- knowledge/benchmarks/README.md → "Structured comparisons using declared criteria"
- architecture/README.md → "System architecture documents"
- adr/README.md → "Architecture Decision Records"
- standards/README.md → "Recurring project-wide expectations"
- templates/README.md → "Standardized knowledge capture templates"
- roadmap/README.md → "Intended evolution and phase planning"
- implementation/README.md → "Executable work plans and checklists"

## Langkah 2: Migrasi chat files
Untuk setiap fail, tambah header: "> Migrated from [source] on 2026-07-14. Original preserved in git history."

- chat1.md → strategy/PROGRAMME_BACKLOG.md (copy kandungan penuh)
- chat3.md → strategy/ENTERPRISE_DIRECTION.md (buang wrapper ```markdown``` jika ada)
- chat5.md → strategy/GATED_TRANSFORMATION_PLAN.md (tambah version metadata)

Selepas copy, PADAM fail asal: chat1.md, chat3.md, chat5.md

## Langkah 3: Commit
git add -A && git commit -m "docs: scaffold Blueprint v2.0 folders and migrate chat1,3,5 to strategy/

New folders: strategy/, knowledge/, architecture/, adr/, standards/, templates/, roadmap/, implementation/
Migrated: chat1→PROGRAMME_BACKLOG, chat3→ENTERPRISE_DIRECTION, chat5→GATED_TRANSFORMATION_PLAN
Change class: CC-3"

## Session Handoff:
Kemaskini GEMINI.md → C1: Folders scaffolded, chat1,3,5 migrated ✅
````

---

### `[x]` C2 — Migrate chat2,4 + Move ADR-0006 (Batch)

**Skills:** —
**Complexity:** Ringan — 3 operasi kecil

````
PROMPT:

Projek: f:\GANGNIAGA-MASTER
Task: Bersihkan baki fail chat dan pindahkan ADR ke folder adr/

## Langkah 1: chat2.md
- Sahkan f:\GANGNIAGA-MASTER\G0_DECISION_PACK.md wujud dan lengkap
- Padam f:\GANGNIAGA-MASTER\chat2.md (superseded oleh G0_DECISION_PACK.md)

## Langkah 2: chat4.md
- Baca f:\GANGNIAGA-MASTER\chat4.md (hanya 13 baris — audit notes)
- Copy ke f:\GANGNIAGA-MASTER\implementation\AUDIT_NOTES.md
- Tambah header migration note
- Padam chat4.md

## Langkah 3: ADR-0006
- git mv f:\GANGNIAGA-MASTER\ADR-0006-CONTROLLED-REPOSITORY-EVOLUTION.md f:\GANGNIAGA-MASTER\adr\ADR-0006-CONTROLLED-REPOSITORY-EVOLUTION.md

## Langkah 4: Commit
git add -A && git commit -m "docs: migrate chat2,4 and move ADR-0006 to adr/

Removed: chat2.md (superseded by G0_DECISION_PACK.md)
Migrated: chat4.md → implementation/AUDIT_NOTES.md
Moved: ADR-0006 → adr/ADR-0006-CONTROLLED-REPOSITORY-EVOLUTION.md
Change class: CC-2"

## Session Handoff:
Kemaskini GEMINI.md → C2: chat2,4 cleared, ADR-0006 moved ✅
````

---

### 🔙 C-ROLLBACK — Jika Fasa C gagal

````
PROMPT:

Projek: f:\GANGNIAGA-MASTER
Task: ROLLBACK Fasa C
Arahan:
1. git log --oneline -5
2. Kenal pasti commit sebelum Fasa C
3. git reset --hard [commit-sha]
4. Kemaskini GEMINI.md: "Fasa C rolled back"
````

---

## FASA D: Link Repair & Document Consistency

### `[x]` D1 — Audit + Fix Broken Links (Combined)

**Skills:** `verification-loop`
**Complexity:** Sederhana

````
PROMPT:

Projek: f:\GANGNIAGA-MASTER
Task: Audit dan betulkan SEMUA broken internal links dalam satu pass
Skills: Aktifkan `verification-loop` — jalankan validation selepas pembaikan

## Langkah 1: Audit
Grep SEMUA fail .md di f:\GANGNIAGA-MASTER (rekursif) untuk:
- Pattern backtick: "chat1.md", "chat2.md", "chat3.md", "chat4.md", "chat5.md"
- Pattern backtick: "ADR-0006-CONTROLLED-REPOSITORY-EVOLUTION.md" (jika rujuk root, tukar ke adr/)
- Pattern backtick: `GLOSSARY.md` (catat untuk Fasa F, jangan ubah lagi)

Untuk setiap hit, tunjukkan: [Fail | Baris | Rujukan Lama | Rujukan Baharu]

## Langkah 2: Fix
Untuk setiap broken link, kemaskini:
- "chat1.md" → `strategy/PROGRAMME_BACKLOG.md`
- "chat2.md" → `G0_DECISION_PACK.md`
- "chat3.md" → `strategy/ENTERPRISE_DIRECTION.md`
- "chat4.md" → `implementation/AUDIT_NOTES.md`
- "chat5.md" → `strategy/GATED_TRANSFORMATION_PLAN.md`
- Root "ADR-0006-*.md" → "adr/ADR-0006-*.md"

## Langkah 3: Kemaskini DOCUMENT_MAP.md
- Kemaskini "Current Repository State" — senarai semua fail yang SEKARANG wujud (rekursif)
- Pastikan TIADA chat*.md tersenarai
- Pastikan semua subfolder tersenarai

## Langkah 4: Validate
- Grep semua fail .md sekali lagi untuk "chat1", "chat2", "chat3", "chat4", "chat5"
- Hasil mestilah KOSONG (kecuali dalam konteks sejarah/migration notes)

## Langkah 5: Commit
git add -A && git commit -m "docs: fix broken links and update DOCUMENT_MAP.md post-migration"

## Session Handoff:
Kemaskini GEMINI.md → D1: Links repaired, DOCUMENT_MAP.md updated ✅
````

---

## FASA E: MASTER.md Modularization

### `[x]` E1 — Analisis Pecahan MASTER.md (READ ONLY)

**Skills:** `ponytail-audit`, `council`
**Complexity:** Analisis sahaja

````
PROMPT:

Projek: f:\GANGNIAGA-MASTER
Task: Analisis MASTER.md untuk cadangan pecahan — READ ONLY, jangan ubah apa-apa
Skills: Aktifkan `ponytail-audit` — kenal pasti apa yang boleh dibuang/dipindahkan
Skills: Aktifkan `council` — dapatkan 4 perspektif tentang strategi pecahan terbaik

Arahan:
1. Baca f:\GANGNIAGA-MASTER\MASTER.md Table of Contents (baris 80-142)
2. Baca MASTER.md secara skim — cari sempadan PART (PART I sampai PART VIII)
3. Untuk setiap PART, tentukan:
   - Baris mula dan baris akhir (anggaran)
   - Bilangan baris
   - Cadangan destinasi (kekal/pindah)

Cadangan awal:
- PART I (Executive Foundation) → KEKAL di MASTER.md (ini teras)
- PART II (Target Executive Architecture) → PINDAH ke architecture/
- PART III (Target Knowledge System) → PINDAH ke knowledge/
- PART IV (Engineering System) → PINDAH ke standards/ atau implementation/
- PART V (Executive Governance) → KEKAL atau governance/
- PART VI (Evolution and Operating Model) → KEKAL
- PART VII (Appendices) → PINDAH ke knowledge/ atau kekal
- PART VIII (Foundation Status) → KEKAL

4. Council Decision: Jalankan `council` dengan soalan:
   "Patutkah MASTER.md dipecahkan agresif (semua PART ke fail berasingan) atau konservatif (PART II dan III sahaja)?"

5. Output: Jadual pecahan dengan columns [PART | Baris | Saiz | Destinasi | Justifikasi]

6. SIMPAN output sebagai f:\GANGNIAGA-MASTER\implementation\MASTER_DECOMPOSITION_PLAN.md

## Session Handoff:
Kemaskini GEMINI.md → E1: MASTER.md decomposition plan created ✅
````

---

### `[x]` E2 — Pecahkan PART II (Architecture) dari MASTER.md

**Skills:** `code-review`
**Complexity:** Besar — ini task paling berat

````
PROMPT:

Projek: f:\GANGNIAGA-MASTER
Task: Pecahkan MASTER.md PART II ke fail-fail di architecture/
Skills: Aktifkan `code-review` — review kualiti dokumen yang dihasilkan

Konteks:
- Baca f:\GANGNIAGA-MASTER\implementation\MASTER_DECOMPOSITION_PLAN.md untuk baris mula/akhir
- PART II mengandungi chapter 11-18 (Executive Intelligence Layer sampai Governance Layer)

Arahan:
1. Baca MASTER.md PART II SAHAJA (gunakan baris dari decomposition plan)
2. Untuk SETIAP chapter, cipta fail di architecture/:
   - architecture/EXECUTIVE_INTELLIGENCE_LAYER.md
   - architecture/KNOWLEDGE_LAYER.md
   - architecture/DECISION_LAYER.md
   - architecture/PLANNING_LAYER.md
   - architecture/ORCHESTRATION_LAYER.md
   - architecture/EXECUTION_LAYER.md
   - architecture/LEARNING_LAYER.md
   - architecture/GOVERNANCE_LAYER.md
3. Setiap fail mesti ada header:
   > Version: 2.0.0
   > Status: Target Architecture (Not Implemented)
   > Source: Extracted from MASTER.md PART II
   > Authority: Subordinate to CONSTITUTION.md and MASTER.md
4. Di MASTER.md, GANTIKAN PART II dengan:
   "## PART II — Target Executive Architecture
   
   The target executive architecture is documented in the `architecture/` directory.
   See: [list of links to each architecture file]
   
   For the complete architecture overview, consult the individual domain documents."
5. JANGAN ubah PART lain dalam MASTER.md

## Validation:
- Kira jumlah baris MASTER.md sebelum dan selepas
- Pastikan pengurangan sekurang-kurangnya 1000+ baris
- Pastikan tiada kandungan hilang — hanya dipindahkan

## Commit:
git add -A && git commit -m "refactor: extract MASTER.md PART II to architecture/ domain files

Extracted 8 architecture documents from MASTER.md.
MASTER.md reduced by ~[X] lines.
Change class: CC-3"

## Session Handoff:
Kemaskini GEMINI.md → E2: PART II extracted to architecture/ ✅ (MASTER.md: [old] → [new] lines)
````

---

### `[x]` E3 — Pecahkan PART III (Knowledge System) dari MASTER.md

**Skills:** —
**Complexity:** Sederhana-Besar

````
PROMPT:

Projek: f:\GANGNIAGA-MASTER
Task: Pecahkan MASTER.md PART III ke knowledge/

Konteks: Sama seperti E2 tetapi untuk PART III (Target Knowledge System, chapter 19-26)

Arahan:
1. Baca MASTER.md PART III sahaja
2. Cipta fail di knowledge/ untuk setiap chapter:
   - knowledge/KNOWLEDGE_BASE.md
   - knowledge/EXECUTIVE_RESEARCH_FRAMEWORK.md
   - knowledge/REVERSE_ENGINEERING_FRAMEWORK.md
   - knowledge/PATTERN_LIBRARY.md
   - knowledge/ARCHITECTURE_LIBRARY.md
   - knowledge/ADR_SYSTEM.md
   - knowledge/STANDARDS_SYSTEM.md
   - knowledge/TEMPLATE_SYSTEM.md
3. Header metadata sama seperti E2
4. Gantikan PART III di MASTER.md dengan ringkasan + links
5. Commit: git add -A && git commit -m "refactor: extract MASTER.md PART III to knowledge/ domain files"

## Session Handoff:
Kemaskini GEMINI.md → E3: PART III extracted to knowledge/ ✅
````

---

### 🔙 E-ROLLBACK

````
PROMPT:

Projek: f:\GANGNIAGA-MASTER
Task: ROLLBACK Fasa E — revert MASTER.md modularization
Arahan:
1. git log --oneline -5
2. git reset --hard [commit-sha-sebelum-E2]
3. Kemaskini GEMINI.md: "Fasa E rolled back"
````

---

## FASA F: Housekeeping & QA

### `[x]` F1 — GLOSSARY.md → GLOSSARY.md Rename

**Skills:** —
**Complexity:** Ringan (CC-0)

````
PROMPT:

Projek: f:\GANGNIAGA-MASTER
Task: Rename GLOSSARY.md → GLOSSARY.md (CC-0 editorial fix)

Arahan:
1. git mv f:\GANGNIAGA-MASTER\GLOSSARY.md f:\GANGNIAGA-MASTER\GLOSSARY.md
2. Grep SEMUA fail .md (rekursif) untuk "GLOSSARY" — gantikan SEMUA dengan "GLOSSARY"
3. Kemaskini DOCUMENT_MAP.md:
   - Buang "known exception" nota tentang GLOSSARY.md
   - Kemaskini table: GLOSSARY.md status → "Exists"
4. git add -A && git commit -m "docs(CC-0): rename GLOSSARY.md to GLOSSARY.md — editorial correction"

## Session Handoff:
Kemaskini GEMINI.md → F1: GLOSSARY.md renamed ✅
````

---

### `[x]` F2 — Final Validation Pass

**Skills:** `verification-loop`, `ponytail-review`
**Complexity:** Sederhana

````
PROMPT:

Projek: f:\GANGNIAGA-MASTER
Task: Final validation — comprehensive consistency check
Skills: Aktifkan `verification-loop` dan `ponytail-review`

## Check 1: File Inventory
- list semua fail .md rekursif di f:\GANGNIAGA-MASTER
- Bandingkan dengan "Current Repository State" dalam DOCUMENT_MAP.md
- Flag sebarang mismatch

## Check 2: Broken References
- Grep semua .md untuk backtick references ("something.md")
- Sahkan setiap rujukan menghala ke fail yang wujud
- MESTI mendapat 0 broken references

## Check 3: Stale Content
- Grep untuk "chat1", "chat2", "chat3", "chat4", "chat5" — MESTI 0 (kecuali migration notes)
- Grep untuk "Locked Repository Blueprint v1.0" tanpa konteks sejarah — MESTI 0
- Grep untuk "GLOSSARY" — MESTI 0

## Check 4: Header Consistency
- Sample 10 fail .md — pastikan setiap satu ada version dan status metadata

## Check 5: Git Health
- git status — MESTI clean
- git log --oneline -20 — tunjukkan sejarah commit

## Output:
Cipta f:\GANGNIAGA-MASTER\implementation\VALIDATION_REPORT.md dengan keputusan setiap check (PASS/FAIL)

## Session Handoff:
Kemaskini GEMINI.md → F2: Validation passed ✅ / F2: [X] failures found ❌
````

---

### `[x]` F3 — Code Tour untuk Onboarding

**Skills:** `code-tour`
**Complexity:** Sederhana

````
PROMPT:

Projek: f:\GANGNIAGA-MASTER
Task: Cipta CodeTour onboarding walkthrough
Skills: Aktifkan `code-tour`

Arahan:
1. Cipta f:\GANGNIAGA-MASTER\.tours\onboarding.tour
2. Tour steps (ikut reading order dari CONTRIBUTING.md):
   - Step 1: README.md — "Start here: Project overview"
   - Step 2: DOCUMENT_MAP.md — "Navigation index"
   - Step 3: CONSTITUTION.md — "Highest authority"
   - Step 4: MASTER.md — "Operating SSOT"
   - Step 5: G0_DECISION_PACK.md — "Current governance gate"
   - Step 6: adr/ADR-0006 — "How structural changes work"
   - Step 7: strategy/ — "Programme planning"
   - Step 8: architecture/ — "System design"
   - Step 9: CONTRIBUTING.md — "How to contribute"
3. Setiap step: description, file path, line number

## Session Handoff:
Kemaskini GEMINI.md → F3: Onboarding tour created ✅
````

---

## FASA G: Git & Release

### `[x]` G1 — Git Push + Tag Release

**Skills:** `git-release`
**Complexity:** Ringan

````
PROMPT:

Projek: f:\GANGNIAGA-MASTER
Task: Push semua perubahan dan tag release v2.0.0
Skills: Aktifkan `git-release`

Arahan:
1. git log --oneline master..HEAD (tunjukkan apa yang belum di-push)
   JIKA tiada apa di atas, guna: git log --oneline -15
2. git push origin master
3. Sahkan push berjaya

## Tag release:
4. git tag -a v2.0.0 -m "Blueprint v2.0 — Governance Reset and Structural Migration

- ADR-0006: Controlled-change model replaces absolute structural lock
- Blueprint v2.0 folder structure implemented
- chat*.md migrated to governed locations
- MASTER.md modularized (PART II → architecture/, PART III → knowledge/)
- GLOSSARY.md renamed
- Onboarding tour created"
5. git push origin v2.0.0

## Session Handoff:
Kemaskini GEMINI.md → G1: v2.0.0 released and pushed ✅
````

---

## FASA H: GitHub Operations & CI

### `[ ]` H1 — Setup GitHub Issues & Project Board

**Skills:** `github-ops`
**Complexity:** Sederhana

````
PROMPT:

Projek: f:\GANGNIAGA-MASTER
Task: Setup GitHub Issues sebagai programme backlog
Skills: Aktifkan `github-ops`

Arahan:
1. Baca f:\GANGNIAGA-MASTER\strategy\GATED_TRANSFORMATION_PLAN.md
2. Cipta GitHub Labels:
   - gate-g0, gate-g1, gate-g2, gate-g3, gate-g4, gate-g5, gate-g6, gate-g7, gate-g8
   - priority-critical, priority-high, priority-medium
   - type-governance, type-architecture, type-documentation, type-implementation
3. Cipta GitHub Issues untuk setiap Gate (G0-G8):
   - Title: [G#] Gate name
   - Body: Objective, acceptance criteria, dependencies (dari GATED_TRANSFORMATION_PLAN.md)
   - Labels: gate-g#, appropriate type and priority
4. Cipta GitHub Project board (jika gh CLI ada akses):
   - Columns: Backlog, In Progress, Review, Done
5. Tunjukkan senarai issues yang dicipta

## Session Handoff:
Kemaskini GEMINI.md → H1: GitHub Issues/Project created ✅
````

---

### `[ ]` H2 — Setup Docs CI Pipeline

**Skills:** `deployment-patterns`
**Complexity:** Sederhana

````
PROMPT:

Projek: f:\GANGNIAGA-MASTER
Task: Setup GitHub Actions CI untuk document validation
Skills: Aktifkan `deployment-patterns`

Arahan:
1. Cipta f:\GANGNIAGA-MASTER\.github\workflows\docs-validation.yml
2. Checks:
   - markdownlint (markdown style consistency)
   - markdown-link-check (internal link validation)
   - case-sensitive filename check (tiada GLOSSARY-style typos)
   - detect stale references (chat*.md patterns)
3. Trigger: push to master, pull_request
4. Cipta f:\GANGNIAGA-MASTER\.markdownlint.json dengan rules yang sesuai
5. Test secara lokal: npx markdownlint "**/*.md" (atau yang sesuai)
6. git add -A && git commit -m "ci: add docs-validation GitHub Actions pipeline"
7. git push origin master

## Session Handoff:
Kemaskini GEMINI.md → H2: CI pipeline active ✅
````

---

## FASA I: Stability & Health Monitoring

### `[ ]` I1 — Repository Health Check Script

**Skills:** `compound-docs`
**Complexity:** Sederhana

````
PROMPT:

Projek: f:\GANGNIAGA-MASTER
Task: Cipta script health check yang boleh dijalankan secara berkala
Skills: Aktifkan `compound-docs` — simpan sebagai reusable solution

Arahan:
1. Cipta f:\GANGNIAGA-MASTER\scripts\health-check.ps1 (PowerShell)
2. Script mesti check:
   a. Semua fail dalam DOCUMENT_MAP.md wujud secara fizikal
   b. Tiada fail .md di root yang tiada dalam DOCUMENT_MAP.md
   c. Tiada rujukan ke chat*.md dalam mana-mana fail
   d. Tiada GLOSSARY (typo lama) dalam mana-mana fail
   e. Setiap folder dalam Blueprint v2.0 ada README.md
   f. MASTER.md < 5000 baris (alert jika membesar semula)
   g. git status clean (tiada uncommitted changes)
3. Output: PASS/FAIL untuk setiap check, jumlah keseluruhan
4. Exit code: 0 jika semua pass, 1 jika ada failure
5. git add -A && git commit -m "chore: add repository health check script"

## Session Handoff:
Kemaskini GEMINI.md → I1: Health check script created ✅
````

---

### `[ ]` I2 — Kemaskini GEMINI.md Sebagai Living Context

**Skills:** —
**Complexity:** Ringan

````
PROMPT:

Projek: f:\GANGNIAGA-MASTER
Task: Kemaskini GEMINI.md sebagai context hub untuk semua sesi masa depan

Arahan:
Gantikan keseluruhan f:\GANGNIAGA-MASTER\GEMINI.md dengan kandungan berikut:

---
# GANGNIAGA-MASTER Context & Memory

## Active Modes
- **Ponytail Mode**: `full`
- **Blueprint Version**: `v2.0`
- **Governance Model**: `ADR-0006 Controlled-Change`

## Workspace Overview
GangNiaga Executive OS — Enterprise AI Operating System documentation and governance.

## Transformation Status
- G0 Decision Pack: Approved ✅
- ADR-0006: Approved ✅
- Blueprint v2.0: Active ✅
- Structural Migration: Complete ✅
- MASTER.md Modularization: Complete ✅
- GLOSSARY.md Renamed: Complete ✅
- CI Pipeline: Active ✅

## Current Phase
Phase 0 — Company Knowledge & Executive Intelligence Foundation

## Key Architecture Decisions
- ADR-0006: Structural lock replaced with CC-0 to CC-4 change classes
- MASTER.md split: PART II → architecture/, PART III → knowledge/

## Health Check
Run: `powershell scripts/health-check.ps1`

## Important Rules
- All structural changes require ADR-0006 change classification
- CONSTITUTION.md is highest authority
- No planned component described as implemented
- LICENSE not yet selected
---

git add -A && git commit -m "docs: update GEMINI.md as living context hub"
````

---

## FASA J: Advanced Stability & Architecture (Post-Release)

### `[ ]` J1 — Security Scan Agent Configuration

**Skills:** `security-scan`
**Complexity:** Ringan

````
PROMPT:

Projek: f:\GANGNIAGA-MASTER
Task: Scan agent configuration untuk security vulnerabilities
Skills: Aktifkan `security-scan`

Arahan:
1. Scan direktori .agents/ (jika wujud) di f:\GANGNIAGA-MASTER
2. Scan f:\GANGNIAGA-MASTER\GEMINI.md untuk:
   - Hardcoded secrets, API keys, tokens
   - Overly permissive instructions
   - Prompt injection patterns
3. Scan sebarang fail konfigurasi agent (settings.json, mcp configs) jika wujud
4. Scan scripts/ (jika wujud) untuk:
   - Command injection via string interpolation
   - Unsafe environment variable usage
   - Data exfiltration patterns
5. Output: Security report dengan severity (Critical/High/Medium/Low)
6. Jika ada issue Critical/High, cipta f:\GANGNIAGA-MASTER\implementation\SECURITY_FINDINGS.md

## Session Handoff:
Kemaskini GEMINI.md → J1: Security scan complete ✅ [X findings]
````

---

### `[ ]` J2 — Ponytail Full Audit (Over-Engineering Check)

**Skills:** `ponytail-audit`
**Complexity:** Sederhana

````
PROMPT:

Projek: f:\GANGNIAGA-MASTER
Task: Full ponytail audit — cari apa yang boleh diringkaskan atau dipadam
Skills: Aktifkan `ponytail-audit`

Arahan:
1. Audit keseluruhan f:\GANGNIAGA-MASTER untuk:
   - Fail yang terlalu verbose / boleh dipendekkan
   - Duplikasi kandungan merentas fail
   - Seksyen yang tidak menambah nilai
   - Placeholder yang tidak akan diisi
   - README.md dalam subfolder yang terlalu generik
2. Untuk setiap penemuan, cadangkan tindakan: DELETE / SIMPLIFY / MERGE / KEEP
3. Skor keseluruhan: berapa peratus repo yang "over-engineered"?
4. Output: f:\GANGNIAGA-MASTER\implementation\PONYTAIL_AUDIT_REPORT.md

PERATURAN:
- JANGAN ubah fail. Hanya laporan.
- Ponytail mode `full` — jangan terlalu "nice". Jika tak perlu, cakap tak perlu.

## Session Handoff:
Kemaskini GEMINI.md → J2: Ponytail audit complete ✅
````

---

### `[ ]` J3 — Brainstorm Architecture Next Phase

**Skills:** `brainstorm` (gemini-kit)
**Complexity:** Sederhana — analysis sahaja

````
PROMPT:

Projek: f:\GANGNIAGA-MASTER
Task: Brainstorm sesi bina — analisis trade-off untuk Phase 1 Architecture Foundation
Skills: Aktifkan `brainstorm` dari gemini-kit plugin

Konteks:
- Phase 0 (Company Knowledge & Executive Intelligence Foundation) hampir siap
- Phase 1 (Architecture Foundation) adalah langkah seterusnya
- Baca f:\GANGNIAGA-MASTER\architecture/ — semua domain files
- Baca f:\GANGNIAGA-MASTER\strategy\GATED_TRANSFORMATION_PLAN.md (G2-G3 sections)

Arahan:
1. Jalankan brainstorm session dengan soalan:
   "Apakah 3 pilihan terbaik untuk merealisasikan Executive Intelligence Layer — 
   dari pure document-driven (tiada kod) ke hybrid (docs + scripts) ke full platform (web app)?"]
2. Untuk setiap pilihan, analisis:
   - Kos masa dan usaha
   - Risiko teknikal
   - Alignment dengan CONSTITUTION.md dan Phase 0 objective
   - Sejauh mana ia boleh dimulakan SEKARANG vs memerlukan prerequisites
3. Cadangkan ranking dan justifikasi
4. Output: f:\GANGNIAGA-MASTER\strategy\PHASE1_BRAINSTORM.md

## Session Handoff:
Kemaskini GEMINI.md → J3: Phase 1 brainstorm complete ✅
````

---

### `[ ]` J4 — Setup Conductor for Track Management

**Skills:** `conductor` (plugin — setup, newTrack)
**Complexity:** Sederhana

````
PROMPT:

Projek: f:\GANGNIAGA-MASTER
Task: Setup Conductor plugin untuk track-based project management
Skills: Aktifkan `conductor` plugin — jalankan setup skill

Arahan:
1. Jalankan Conductor setup:
   - Product: GangNiaga Executive OS
   - Tech stack: Documentation-first (Markdown, Git, GitHub Actions)
   - Guidelines: Follow CONSTITUTION.md as supreme authority
2. Cipta Track pertama — "governance-reset":
   - Objective: Complete Blueprint v2.0 migration
   - Scope: Fasa B-F dari TRANSFORMATION_PLAYBOOK.md
   - Acceptance: All validation checks pass (F2)
3. Cipta Track kedua — "master-modularization":
   - Objective: MASTER.md < 3000 lines
   - Scope: Fasa E
4. Sahkan conductor/ directory dicipta dengan betul
5. git add -A && git commit -m "chore: setup Conductor track management"

## Session Handoff:
Kemaskini GEMINI.md → J4: Conductor setup complete ✅
````

---

### `[ ]` J5 — Setup Scheduled Health Monitoring

**Skills:** —
**Complexity:** Ringan

````
PROMPT:

Projek: f:\GANGNIAGA-MASTER
Task: Setup Windows scheduled task untuk automated health check

Arahan:
1. Sahkan f:\GANGNIAGA-MASTER\scripts\health-check.ps1 wujud (dari I1)
2. Cipta scheduled task menggunakan schtasks:
   schtasks /create /tn "GangNiaga-HealthCheck" /tr "powershell -ExecutionPolicy Bypass -File f:\GANGNIAGA-MASTER\scripts\health-check.ps1" /sc daily /st 09:00
3. Cipta f:\GANGNIAGA-MASTER\scripts\health-check-report.ps1 yang:
   - Jalankan health-check.ps1
   - Simpan output ke f:\GANGNIAGA-MASTER\implementation\health-reports\[YYYY-MM-DD].txt
   - Cipta folder health-reports/ jika belum wujud
4. Test jalankan secara manual: powershell scripts/health-check.ps1
5. git add -A && git commit -m "chore: add daily health check schedule and reporting"

## Session Handoff:
Kemaskini GEMINI.md → J5: Daily health monitoring active ✅
````

---

## 📊 Status Dashboard

| Fasa | Tasks | Kebergantungan | Skills/Tools |
|------|-------|----------------|-------------|
| **A**: Governance Approval | 1 | — (Manual) | `council` |
| **B**: Governance Reset | 4 | A ✅ | `code-review`, `ponytail-review`, `git-release` |
| **C**: Structural Migration | 2 | B ✅ | `compound-docs` |
| **D**: Link Repair | 1 | C ✅ | `verification-loop` |
| **E**: MASTER.md Modularization | 3 | D ✅ | `ponytail-audit`, `council`, `code-review` |
| **F**: Housekeeping & QA | 3 | E ✅ | `verification-loop`, `ponytail-review`, `code-tour` |
| **G**: Git & Release | 1 | F ✅ | `git-release` |
| **H**: GitHub Ops & CI | 2 | G ✅ | `github-ops`, `deployment-patterns` |
| **I**: Stability & Monitoring | 2 | H ✅ | `compound-docs` |
| **J**: Advanced Stability | 5 | I ✅ | `security-scan`, `ponytail-audit`, `brainstorm`, `conductor` |

**Total: 24 tasks** (v1.0 = 26, v2.0 = 19, v2.1 = 24 with 5 advanced)
**Estimated Sessions: ~18-20**

### 📈 Tool Coverage Matrix

```text
Skill/Plugin         │ Listed │ Used in Task(s)
─────────────────────┼────────┼────────────────────────────
verification-loop    │   ✅   │ D1, F2
code-tour            │   ✅   │ F3
github-ops           │   ✅   │ H1
git-release          │   ✅   │ B4, G1
council              │   ✅   │ A1, E1
compound-docs        │   ✅   │ C1, I1
strategic-compact    │   ✅   │ ⚡ Guidelines (all long tasks)
ponytail-audit       │   ✅   │ E1, J2
ponytail-review      │   ✅   │ B3, F2
security-scan        │   ✅   │ J1
code-review          │   ✅   │ B1, E2
brainstorm           │   ✅   │ J3
conductor            │   ✅   │ J4
gemini-kit           │   ✅   │ B1, E2, J3
ponytail             │   ✅   │ B3, E1, F2, J2
chrome-devtools      │   🔵   │ Reserved (no web UI yet)
stitch               │   🔵   │ Reserved (no web UI yet)
─────────────────────┼────────┼────────────────────────────
Coverage             │ 17/17  │ 15/17 active (88%)
```

---

## 🚨 Emergency Procedures

### Token Limit Hit Mid-Task
```text
1. Jangan panik
2. Commit apa sahaja yang telah selesai: git add -A && git commit -m "WIP: [task name]"
3. Kemaskini GEMINI.md dengan progress
4. Buka sesi baharu dengan prompt yang sama — agent akan baca GEMINI.md
```

### Merge Conflict
```text
1. git status — kenal pasti fail konflik
2. git diff — lihat konflik
3. Resolve secara manual atau buka sesi baharu dengan prompt:
   "Projek: f:\GANGNIAGA-MASTER. Resolve git merge conflict in [fail]. Keep [versi mana]."
```

### CI Pipeline Failure
```text
1. Baca error dari GitHub Actions
2. Buka sesi baharu:
   "Projek: f:\GANGNIAGA-MASTER. CI pipeline gagal: [paste error]. Betulkan."
```

---

## 🔄 Recurring Maintenance (Post-Transformation)

| Kekerapan | Task | Tool/Skill | Prompt |
|-----------|------|------------|--------|
| Setiap commit | Health check | Script | `powershell scripts/health-check.ps1` |
| Harian (auto) | Scheduled check | schtasks | Auto — via J5 scheduled task |
| Mingguan | Stale reference scan | `verification-loop` | `Grep f:\GANGNIAGA-MASTER untuk broken backtick references` |
| Mingguan | Security posture | `security-scan` | Scan agent configs, hooks, env vars |
| Bulanan | MASTER.md size | — | `(Get-Content MASTER.md).Count` (mesti < 5000) |
| Bulanan | Document drift | `ponytail-review` | Review DOCUMENT_MAP vs actual files |
| Per release | Changelog | `git-release` | Auto-generate dari commit history |
| Per release | Conductor review | `conductor` (review) | Review completed track against plan |
| Quarterly | Full ponytail audit | `ponytail-audit` | Over-engineering sweep |
| Quarterly | Architecture review | `brainstorm`, `council` | Brainstorm Phase 1+ direction |

---

> [!IMPORTANT]
> **Peraturan Emas:**
> 1. Jangan lompat fasa. A → B → C → ... → I
> 2. Setiap prompt mesti akhiri dengan kemaskini GEMINI.md (session handoff)
> 3. Jika ragu — guna skill `council` untuk 4 perspektif
> 4. Jika token habis — commit WIP, kemaskini GEMINI.md, resume sesi baharu

---

# End of Playbook v2.0
