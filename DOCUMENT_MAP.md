# 🗺️ DOCUMENT_MAP.md

> **GangNiaga Executive OS Documentation Map**
>
> Version: 1.1.0
>
> Status: Active
>
> Repository: `thisisniagahub/GANGNIAGA-MASTER`
>
> Last Updated: 2026

---

## Purpose

This document is the official navigation index for GangNiaga Executive OS.

It separates:

- documents and paths that currently exist,
- the locked Repository Blueprint v1.0,
- planned documents that have not yet been created,
- and the authority relationship between documents.

Planned does not mean implemented. Listed does not mean complete. A document should only be treated as authoritative within its declared scope and status.

---

## Document Authority

```text
CONSTITUTION.md
      ↓
MASTER.md
      ↓
Approved ADR
      ↓
Architecture Documents
      ↓
Standards
      ↓
Implementation
```

Supporting roles:

- `README.md` — project landing page
- `DOCUMENT_MAP.md` — navigation and status index
- `PROJECT.md` — project scope and identity
- `VISION.md`, `MISSION.md`, `PHILOSOPHY.md`, `PRINCIPLES.md` — focused foundation documents
- `GLOSSARY.md` — canonical terminology within the authority hierarchy above
- `SOURCES.md` — research methodology and source policy
- `CONTRIBUTING.md` — contribution workflow

An approved ADR may supersede a previous architectural decision, but it does not override the Constitution.

---

## Current Repository State

The following foundation files currently exist on the default branch:

```text
README.md
MASTER.md
DOCUMENT_MAP.md
CONSTITUTION.md
PROJECT.md
VISION.md
MISSION.md
PHILOSOPHY.md
PRINCIPLES.md
GLOSSORY.md
SOURCES.md
CONTRIBUTING.md
```

Known current-state exceptions:

- `GLOSSORY.md` exists with a filename typo; the locked canonical name is `GLOSSARY.md`.
- `LICENSE` does not yet exist and no license has been approved.
- Some locked folders and documents may not yet exist.
- `MASTER.md` contains later extensions beyond its original table of contents and requires a dedicated consistency review.

These exceptions are tracked as foundation consistency work. They do not change the locked blueprint.

---

## Locked Repository Blueprint v1.0

```text
GANGNIAGA-MASTER/
├── README.md
├── MASTER.md
├── DOCUMENT_MAP.md
├── CONSTITUTION.md
├── PROJECT.md
├── VISION.md
├── MISSION.md
├── PHILOSOPHY.md
├── PRINCIPLES.md
├── GLOSSARY.md
├── SOURCES.md
├── CONTRIBUTING.md
├── LICENSE
├── knowledge/
│   ├── README.md
│   ├── research/
│   ├── reverse-engineering/
│   ├── patterns/
│   └── benchmarks/
├── architecture/
├── adr/
├── standards/
├── templates/
├── roadmap/
└── implementation/
```

Structural changes require an approved ADR. Content completion does not require changing this structure.

---

## Foundation Documents

| Document | Role | Current status | Notes |
|---|---|---|---|
| `README.md` | Project landing page | Exists | Foundation-aligned entry point |
| `MASTER.md` | Executive operating model and repository-wide SSOT | Exists | End-to-end consistency review completed |
| `DOCUMENT_MAP.md` | Navigation and status index | Exists | Records current and target states |
| `CONSTITUTION.md` | Highest-level immutable principles | Exists | Highest normative authority |
| `PROJECT.md` | Project definition and scope | Exists | Phase 0 status clarified |
| `VISION.md` | Long-term direction | Exists | Supporting foundation document |
| `MISSION.md` | Mission and objectives | Exists | Supporting foundation document |
| `PHILOSOPHY.md` | Executive thinking philosophy | Exists | Supporting foundation document |
| `PRINCIPLES.md` | Core design principles | Exists | Supporting foundation document |
| `GLOSSARY.md` | Canonical terminology | Planned | Current content exists at `GLOSSORY.md`; rename requires a governed decision |
| `SOURCES.md` | Research methodology and source policy | Exists | Target research paths are not yet implied to exist |
| `CONTRIBUTING.md` | Contribution workflow | Exists | Includes blueprint and validation constraints |
| `LICENSE` | Legal usage terms | Planned | License selection and file creation require an explicit approved decision |

---

## Knowledge Layer

Locked structure:

```text
knowledge/
├── README.md
├── research/
├── reverse-engineering/
├── patterns/
└── benchmarks/
```

Responsibilities:

- `research/` — verified technology and domain research
- `reverse-engineering/` — architectural analysis and pattern extraction
- `patterns/` — reusable, implementation-neutral solutions
- `benchmarks/` — structured comparisons using declared criteria

Documents in this layer must distinguish evidence, interpretation, recommendation, and decision.

---

## Architecture Layer

Locked documents:

```text
architecture/
├── README.md
├── EXECUTIVE_OS.md
├── AI_ORCHESTRATOR.md
├── CAPABILITY_ROUTER.md
├── KNOWLEDGE_ENGINE.md
├── MEMORY_ENGINE.md
├── EXECUTION_ENGINE.md
├── WORKFLOW_ENGINE.md
├── PLUGIN_SDK.md
├── SECURITY.md
├── GOVERNANCE.md
└── DEPLOYMENT.md
```

Architecture documents define responsibilities, boundaries, interactions, constraints, failure modes, governance, and evolution. They must not present planned components as implemented systems.

---

## ADR Layer

Locked documents:

```text
adr/
├── README.md
├── TEMPLATE.md
├── ADR-0001-PROJECT-VISION.md
├── ADR-0002-EXECUTIVE-LAYER.md
├── ADR-0003-KNOWLEDGE-FIRST.md
├── ADR-0004-CAPABILITY-ROUTER.md
└── ADR-0005-OPENCLAW-AS-EXECUTION.md
```

Each ADR must record:

- status,
- context,
- decision,
- alternatives,
- trade-offs,
- consequences,
- references,
- and supersession relationships where applicable.

---

## Standards Layer

```text
standards/
├── DOCUMENTATION.md
├── ARCHITECTURE.md
├── CODING.md
├── PROMPTS.md
├── AGENTS.md
└── NAMING.md
```

Standards define recurring expectations. They operate below the Constitution, MASTER, approved ADR, and architecture documents.

---

## Templates Layer

```text
templates/
├── ADR_TEMPLATE.md
├── RESEARCH_TEMPLATE.md
├── ARCHITECTURE_TEMPLATE.md
├── DECISION_TEMPLATE.md
└── DOCUMENT_TEMPLATE.md
```

Templates standardize knowledge capture. They do not create authority by themselves.

---

## Roadmap Layer

```text
roadmap/
├── PHASE_0.md
├── PHASE_1.md
├── PHASE_2.md
└── LONG_TERM_VISION.md
```

Roadmap documents describe intended evolution. They are plans, not evidence that capabilities already exist.

---

## Implementation Layer

```text
implementation/
├── EXECUTION_PLAN.md
├── MODULES.md
├── MILESTONES.md
└── CHECKLIST.md
```

Implementation documents translate approved architecture and ADR into executable work. Implementation must not silently redefine architecture.

---

## Navigation Workflow

```text
README.md
    ↓
DOCUMENT_MAP.md
    ↓
CONSTITUTION.md
    ↓
MASTER.md
    ↓
Relevant Foundation Documents
    ↓
Knowledge and Research
    ↓
Architecture
    ↓
Approved ADR
    ↓
Standards
    ↓
Implementation
```

---

## Documentation Status Vocabulary

Use these terms precisely:

- **Exists** — path is present in the repository.
- **Draft** — content exists but is not approved.
- **Proposed** — awaiting a decision.
- **Approved** — accepted through the applicable governance process.
- **Planned** — intended but not yet created or implemented.
- **Implemented** — operational implementation exists.
- **Validated** — implementation or claim has supporting evidence.
- **Superseded** — replaced by a later approved decision while retained for history.

---

## Documentation Rules

1. Every document must state its purpose and scope.
2. Claims must distinguish current state from future intent.
3. Research must preserve traceable sources.
4. Significant architecture decisions require ADR.
5. Cross-references must use canonical repository paths.
6. Structural changes require an approved ADR.
7. Documentation and implementation must remain synchronized.
8. Missing files must not be described as existing.
9. No license should be assumed until `LICENSE` is approved and present.
10. The locked Repository Blueprint v1.0 remains unchanged unless superseded through governance.

---

## Current Priority

```text
Foundation consistency
        ↓
Authority alignment
        ↓
Canonical naming
        ↓
Current-versus-planned status accuracy
        ↓
Architecture and ADR completion
        ↓
Implementation planning
```

---

# End of Document
