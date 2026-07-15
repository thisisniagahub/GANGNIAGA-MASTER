# 🗺️ DOCUMENT_MAP.md

> **GangNiaga Executive OS Documentation Map**
>
> Version: 2.0.0
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

The following files currently exist in the repository:

```text
README.md
MASTER.md
DOCUMENT_MAP.md
PRD.md
CONSTITUTION.md
PROJECT.md
VISION.md
MISSION.md
PHILOSOPHY.md
PRINCIPLES.md
GLOSSARY.md
SOURCES.md
CONTRIBUTING.md
G0_DECISION_PACK.md
GEMINI.md
TRANSFORMATION_PLAYBOOK.md
adr/README.md
adr/ADR-0006-CONTROLLED-REPOSITORY-EVOLUTION.md
adr/ADR-0007-CORE-TECHNOLOGY-STACK.md
architecture/README.md
architecture/DECISION_LAYER.md
architecture/EXECUTION_LAYER.md
architecture/EXECUTIVE_INTELLIGENCE_LAYER.md
architecture/GOVERNANCE_LAYER.md
architecture/KNOWLEDGE_LAYER.md
architecture/LEARNING_LAYER.md
architecture/ORCHESTRATION_LAYER.md
architecture/PLANNING_LAYER.md
implementation/README.md
implementation/AUDIT_NOTES.md
implementation/MASTER_DECOMPOSITION_PLAN.md
knowledge/README.md
knowledge/ADR_SYSTEM.md
knowledge/ARCHITECTURE_LIBRARY.md
knowledge/EXECUTIVE_RESEARCH_FRAMEWORK.md
knowledge/KNOWLEDGE_BASE.md
knowledge/PATTERN_LIBRARY.md
knowledge/REVERSE_ENGINEERING_FRAMEWORK.md
knowledge/STANDARDS_SYSTEM.md
knowledge/TEMPLATE_SYSTEM.md
knowledge/benchmarks/README.md
knowledge/patterns/README.md
knowledge/research/README.md
knowledge/reverse-engineering/README.md
roadmap/README.md
standards/README.md
strategy/README.md
strategy/ENTERPRISE_DIRECTION.md
strategy/GATED_TRANSFORMATION_PLAN.md
strategy/PROGRAMME_BACKLOG.md
strategy/PHASE1_BRAINSTORM.md
templates/README.md
conductor/README.md
conductor/product.md
conductor/product-guidelines.md
conductor/tech-stack.md
conductor/workflow.md
conductor/index.md
conductor/tracks.md
conductor/tracks/governance_reset/index.md
conductor/tracks/governance_reset/spec.md
conductor/tracks/governance_reset/plan.md
conductor/tracks/governance_reset/metadata.json
conductor/tracks/master_modularization/index.md
conductor/tracks/master_modularization/spec.md
conductor/tracks/master_modularization/plan.md
conductor/tracks/master_modularization/metadata.json
implementation/PONYTAIL_AUDIT_REPORT.md
implementation/SECURITY_FINDINGS.md
implementation/PLAYBOOK_V2_REVIEW_AND_DECISIONS.md
scripts/health-check-report.ps1
IMPROVEMENT_PLAN.md
IMPLEMENTATION_PLAYBOOK.md
IMPLEMENTATION_PLAYBOOK_V2.md
IMPLEMENTATION_PLAYBOOK_V2_REVIEW.md

```

Known current-state exceptions:

- `LICENSE` exists and is approved as Proprietary.
- Some folders and documents may not yet exist.
- `MASTER.md` contains later extensions beyond its original table of contents and requires a dedicated consistency review.
- Structural lock has been replaced by controlled-change model (ADR-0006).

These exceptions are tracked as foundation consistency work. They do not change the blueprint.

---

## Repository Blueprint v2.0

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
├── strategy/
│   ├── README.md
│   ├── PROGRAMME_BACKLOG.md
│   ├── ENTERPRISE_DIRECTION.md
│   └── GATED_TRANSFORMATION_PLAN.md
├── knowledge/
│   ├── README.md
│   ├── research/
│   ├── reverse-engineering/
│   ├── patterns/
│   └── benchmarks/
├── architecture/
├── adr/
│   ├── README.md
│   ├── TEMPLATE.md
│   └── ADR-0006-CONTROLLED-REPOSITORY-EVOLUTION.md
├── standards/
├── templates/
├── roadmap/
└── implementation/
```

Repository structural changes are governed by the controlled-change model defined in ADR-0006.

Note: The inclusion of `PRD.md` into the formal Blueprint is Pending Governance (requires CC-3 approval). It exists in the current repository state but is not yet formally part of the Blueprint v2.0.

### Historical Reference: Blueprint v1.0
Blueprint v1.0 was the original locked structural baseline. It did not define strategy/ or adr/ folders.

---

## Foundation Documents

| Document | Role | Current status | Notes |
|---|---|---|---|
| `README.md` | Project landing page | Exists | Foundation-aligned entry point |
| `MASTER.md` | Executive operating model and repository-wide SSOT | Exists | Requires dedicated consistency review |
| `DOCUMENT_MAP.md` | Navigation and status index | Exists | Records current and target states |
| `PRD.md` | Product Requirements Document | Draft | Defines boundaries and releases, inclusion into Blueprint pending governance |
| `CONSTITUTION.md` | Highest-level immutable principles | Exists | Highest normative authority |
| `PROJECT.md` | Project definition and scope | Exists | Phase 0 status clarified |
| `VISION.md` | Long-term direction | Exists | Supporting foundation document |
| `MISSION.md` | Mission and objectives | Exists | Supporting foundation document |
| `PHILOSOPHY.md` | Executive thinking philosophy | Exists | Supporting foundation document |
| `PRINCIPLES.md` | Core design principles | Exists | Supporting foundation document |
| `GLOSSARY.md` | Canonical terminology | Exists | |
| `SOURCES.md` | Research methodology and source policy | Exists | Target research paths are not yet implied to exist |
| `CONTRIBUTING.md` | Contribution workflow | Exists | Includes blueprint and validation constraints |
| `LICENSE` | Legal usage terms | Exists | Proprietary and Confidential |
| `G0_DECISION_PACK.md` | Governance gate G0 pack | Approved | Business Need & Governance basis |
| `adr/ADR-0006-CONTROLLED-REPOSITORY-EVOLUTION.md` | Constitutional Change ADR | Approved | Replaces structural lock |
| `adr/ADR-0007-CORE-TECHNOLOGY-STACK.md` | Stack Selection ADR | Approved | Approves framework/DB/hosting; provider selections are outside scope |
| `IMPLEMENTATION_PLAYBOOK_V2.md` | Core Execution Plan | Proposed | Owner-directed execution playbook pending governed adoption |
| `implementation/PLAYBOOK_V2_REVIEW_AND_DECISIONS.md` | Review and stack decisions | Approved | Records locked decisions |
| `IMPLEMENTATION_PLAYBOOK_V2_REVIEW.md` | Review notes | Superseded | Review of the playbook |
| `IMPROVEMENT_PLAN.md` | Stale transition document | Superseded | Replaced by Playbook V2 |
| `IMPLEMENTATION_PLAYBOOK.md` | Stale execution playbook | Superseded | Replaced by Playbook V2 |

---

## Advisory Artifacts

These files are currently retained for reference but are **Advisory** and do not form part of the locked execution target until explicitly approved.

| Document | Role | Current status | Notes |
|---|---|---|---|
| `implementation/PONYTAIL_AUDIT_REPORT.md` | Codebase audit report | Superseded | Pre-execution analysis |
| `implementation/SECURITY_FINDINGS.md` | Security scan results | Superseded | Pre-execution analysis |
| `scripts/health-check-report.ps1` | Health check output | Superseded | Point-in-time status report |
| `conductor/*` | Orchestration scaffolding | Superseded | Represents scaffolding, not final architecture |

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
├── DECISION_LAYER.md
├── EXECUTION_LAYER.md
├── EXECUTIVE_INTELLIGENCE_LAYER.md
├── GOVERNANCE_LAYER.md
├── KNOWLEDGE_LAYER.md
├── LEARNING_LAYER.md
├── ORCHESTRATION_LAYER.md
└── PLANNING_LAYER.md
```

Architecture documents define responsibilities, boundaries, interactions, constraints, failure modes, governance, and evolution. They must not present planned components as implemented systems.

---

## ADR Layer

Locked documents:

```text
adr/
├── README.md
├── TEMPLATE.md
├── ADR-0001-PROJECT-VISION.md (Planned)
├── ADR-0002-EXECUTIVE-LAYER.md (Planned)
├── ADR-0003-KNOWLEDGE-FIRST.md (Planned)
├── ADR-0004-CAPABILITY-ROUTER.md (Planned)
├── ADR-0005-OPENCLAW-AS-EXECUTION.md (Missing/Pending)
├── ADR-0006-CONTROLLED-REPOSITORY-EVOLUTION.md
└── ADR-0007-CORE-TECHNOLOGY-STACK.md
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
