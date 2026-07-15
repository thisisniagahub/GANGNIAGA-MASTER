# 🧠 GangNiaga Executive OS

> **The Executive AI Operating System**
>
> Build once. Think forever. Execute anywhere.

---

## Overview

GangNiaga Executive OS is an AI-native executive layer designed to coordinate knowledge, research, architecture, decisions, planning, orchestration, execution, governance, and continuous learning.

It is not positioned as another AI framework, chatbot, IDE, workflow builder, or model wrapper. It is the permanent executive layer above replaceable AI models, agent frameworks, tools, and execution engines.

The project is currently in its foundation and documentation phase. Architecture, capabilities, and implementation modules described in this repository may be planned, proposed, or under development unless explicitly marked as implemented.

---

## Core Philosophy

```text
Research
  ↓
Knowledge
  ↓
Architecture
  ↓
Decision
  ↓
Planning
  ↓
Execution
  ↓
Validation
  ↓
Learning
  ↓
Improvement
```

Knowledge comes before code. Significant implementation should be supported by verified research, documented architecture, traceable decisions, and clear validation criteria.

---

## What GangNiaga Is

- Executive Intelligence layer
- Company knowledge and organizational memory foundation
- Architecture and decision system
- Capability-driven orchestration model
- Framework-agnostic and vendor-neutral AI operating model
- Continuously improving knowledge repository

## What GangNiaga Is Not

- Project management tool
- AI chatbot
- AI IDE
- Low-code platform
- Standalone agent framework
- Single-model or single-vendor wrapper

---

## System Position

```text
Users and Organizational Objectives
                │
                ▼
      Executive Intelligence
                │
                ▼
       Knowledge and Decisions
                │
                ▼
     Planning and Orchestration
                │
                ▼
        Capability Routing
                │
                ▼
       Execution Engines and Tools
                │
                ▼
       AI Models and Infrastructure
```

Execution engines, agent frameworks, tools, models, and infrastructure remain replaceable. Executive principles, organizational knowledge, and documented decisions provide continuity.

---

## Canonical Repository Structure

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

This structure is the Repository Blueprint v2.0. Structural changes require an approved Architecture Decision Record. Until every listed path exists, `DOCUMENT_MAP.md` distinguishes the current repository state from the locked target structure.

---

## Document Authority

The intended authority order is:

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

`README.md` is the landing page. `DOCUMENT_MAP.md` is the navigation index. Neither overrides the Constitution, MASTER, or approved ADR.

---

## Start Here

1. Read `README.md` for project orientation.
2. Open `DOCUMENT_MAP.md` for repository navigation and document status.
3. Read `CONSTITUTION.md` for immutable principles.
4. Read `MASTER.md` for the complete executive operating model.
5. Consult approved ADR before changing architecture or repository structure.
6. Follow `CONTRIBUTING.md` before submitting changes.

---

## Development Status

Currently in **Phase 1: Architecture Foundation (Hybrid Model)**. 

### Development Track: Bounded Pilot (Knowledge Engine)
The repository has been bootstrapped with a Node.js, Express, and PostgreSQL (pgvector) stack to fulfill the Bounded Pilot (`GN-STR-PIL-001`). 

**Getting Started:**
```bash
# 1. Install Dependencies
npm install

# 2. Start PostgreSQL Container
docker compose up -d db

# 3. Start Development Server
npm run dev

# 4. Run Tests
npm test
```

## Repository Priorities

- Align foundation documents with the locked structure
- Remove authority and terminology conflicts
- Separate implemented content from planned architecture
- Improve traceability and cross-references
- Prepare the repository for architecture and implementation work

No capability should be described as operational unless implementation and validation evidence exist in the repository.

---

## Contribution Principle

Every contribution should improve at least one of:

- Knowledge quality
- Decision quality
- Architecture clarity
- Documentation consistency
- Traceability
- Maintainability
- Executive Intelligence

See `CONTRIBUTING.md` for the required workflow.

---

## License

Proprietary and Confidential. See the [LICENSE](LICENSE) file for legal usage terms.

---

> **Do not build another AI framework. Build the Executive Intelligence that makes every framework more useful.**
