# 🤝 CONTRIBUTING.md

> **GangNiaga Executive OS Contribution Guidelines**
>
> Version: 1.1.0
>
> Status: Official
>
> Repository: GangNiaga Executive OS

---

# 1. Purpose

This document defines how humans and AI systems contribute to GangNiaga Executive OS.

Contributions may include knowledge, research, architecture, governance, standards, templates, documentation, implementation, validation, or maintenance.

Every contribution should leave the repository clearer, more useful, and more trustworthy than before.

---

# 2. Governing Authority

All contributions must respect the repository authority order:

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
Implementation Documents
```

`README.md` is the entry point.

`DOCUMENT_MAP.md` is the repository navigation map.

Neither navigation order nor reading order changes governance authority.

When documents conflict, contributors must not resolve the conflict informally. The conflict must be corrected through the appropriate document or decision process.

---

# 3. Locked Repository Blueprint

The approved repository blueprint is locked.

Contributors must not, without an approved governance decision:

- rename files,
- add folders,
- remove folders,
- move documents,
- change the roadmap structure,
- replace the approved repository structure.

Content may be completed or corrected within existing files when the change remains consistent with the blueprint and higher-authority documents.

The current `GLOSSORY.md` path is a known mismatch with the locked canonical filename `GLOSSARY.md`. Do not rename it casually. The correction requires an approved decision.

A `LICENSE` file must not be created until the project has explicitly selected a license.

---

# 4. Contribution Philosophy

> **Every contribution should leave the repository smarter than before.**

Contribution quality is measured by improvement to:

- decision quality,
- knowledge value,
- architectural clarity,
- traceability,
- maintainability,
- reusability,
- implementation quality.

Commit count, file count, and line count are not measures of value.

---

# 5. Core Principles

## Knowledge First

Important changes should begin with understanding.

Research, documentation, architecture, and decision records are valid engineering contributions.

## Architecture Before Implementation

Implementation must follow approved architecture and decisions.

Do not use code to silently introduce architecture.

## Documentation Is Part of Delivery

A change is incomplete when the repository no longer explains the system accurately.

## Explainability

A future contributor should be able to understand:

- what changed,
- why it changed,
- which evidence supported it,
- which trade-offs were accepted,
- what consequences remain.

## Traceability

Material claims and decisions should point to their source, research, ADR, architecture, issue, pull request, or implementation evidence.

## Minimum Necessary Change

Prefer the smallest complete change that solves the actual problem without introducing unrelated structure or complexity.

---

# 6. Contribution Types

## Research

Research contributions may include technology analysis, official-source review, benchmarks, reverse engineering, comparisons, and lessons learned.

Research should separate facts, findings, assumptions, and recommendations.

## Documentation

Documentation contributions may improve root documents, architecture, standards, templates, research, roadmaps, implementation plans, or terminology.

## Architecture

Architecture contributions may define boundaries, modules, capabilities, workflows, security, governance, memory, knowledge, or execution design.

Material architecture changes normally require an ADR.

## Architecture Decision Records

An ADR should document:

- context,
- decision,
- alternatives,
- trade-offs,
- consequences,
- status.

An ADR may govern lower-level guidance within its scope. It cannot silently override the Constitution.

## Standards and Templates

Standards define recurring expectations. Templates make those expectations repeatable.

## Implementation

Implementation includes code, configuration, automation, infrastructure, modules, workflows, and execution tooling.

Implementation must reference the architecture or decision that authorizes it when applicable.

---

# 7. Before Contributing

Use this reading order for orientation:

```text
README.md
    ↓
DOCUMENT_MAP.md
    ↓
CONSTITUTION.md
    ↓
MASTER.md
    ↓
Relevant ADR
    ↓
Relevant Architecture
    ↓
Relevant Standards
    ↓
Relevant Implementation or Research Documents
```

Also review `PROJECT.md`, `VISION.md`, `MISSION.md`, `PHILOSOPHY.md`, and `PRINCIPLES.md` when the proposed change affects project direction.

Confirm the actual repository state before describing a planned file, folder, subsystem, or capability as existing.

---

# 8. Contribution Workflow

Use the following lifecycle for material changes:

```text
Identify the Problem
    ↓
Inspect Current State
    ↓
Research and Verify
    ↓
Define Scope and Constraints
    ↓
Propose Architecture or Decision
    ↓
Create or Update ADR When Required
    ↓
Update Documentation
    ↓
Implement
    ↓
Validate
    ↓
Review
    ↓
Merge
```

Small editorial corrections may use a lighter process, but they must still preserve authority, terminology, and repository structure.

---

# 9. Branch and Commit Discipline

Use a focused branch for each logical change.

Keep commits reviewable and coherent. A commit should represent one understandable step.

Recommended commit format:

```text
<type>: <clear change summary>
```

Common types include:

- `docs`
- `research`
- `architecture`
- `adr`
- `standards`
- `feat`
- `fix`
- `refactor`
- `test`
- `chore`

Do not mix unrelated structural, architectural, and editorial changes in one commit.

---

# 10. Pull Request Requirements

Every pull request should explain:

## Objective

What outcome does the change produce?

## Motivation

Why is the change necessary now?

## Scope

Which documents, decisions, modules, or workflows are affected?

## Authority Alignment

Which constitutional rule, Master direction, ADR, architecture, or standard governs the change?

## Current State and Target State

What exists before the change, and what will exist after it?

## Evidence

Which sources, tests, benchmarks, repository observations, or prior decisions support the change?

## Impact

What changes for architecture, governance, compatibility, security, maintenance, or future work?

## ADR Requirement

Does the change require a new ADR or an amendment to an existing ADR?

## Validation

How was the change checked?

## Documentation

Which documents were updated to keep the repository accurate?

---

# 11. Review Criteria

Reviewers should evaluate:

- constitutional compliance,
- alignment with the locked blueprint,
- correctness of current-state claims,
- architectural consistency,
- evidence quality,
- terminology consistency,
- traceability,
- maintainability,
- security implications,
- documentation completeness,
- long-term consequences.

A contribution should improve the repository rather than merely increase its size.

---

# 12. Research Requirements

Use primary and official sources whenever possible.

For architectural or technology recommendations, record:

- the question being investigated,
- evaluation criteria,
- sources,
- findings,
- limitations,
- trade-offs,
- recommendation.

Do not present assumptions as verified facts.

Do not copy source code or protected material merely to imitate an existing system. Extract reusable principles, patterns, and trade-offs.

---

# 13. Documentation Requirements

Documentation must distinguish clearly between:

- current state,
- locked target,
- planned work,
- approved decisions,
- unresolved questions.

Do not claim that a file, subsystem, workflow, or capability exists when it is only planned.

Use terminology from the glossary, subject to higher-authority documents.

Update navigation documents when content changes affect how readers find authoritative information.

---

# 14. Architecture and Implementation Rules

Contributors should avoid:

- hidden dependencies,
- undocumented decisions,
- architecture drift,
- unnecessary abstraction,
- avoidable vendor lock-in,
- avoidable framework lock-in,
- duplicated authority,
- untraceable automation,
- implementation that bypasses governance.

Prefer clear boundaries, explicit interfaces, modular responsibilities, testability, and replaceable execution components.

The Executive Layer must remain independent of any single model, framework, or execution engine.

---

# 15. AI Agent Contributions

AI agents must:

- read the relevant authoritative documents,
- inspect actual repository state,
- respect the locked blueprint,
- preserve terminology,
- avoid invented facts or files,
- distinguish plans from implemented capabilities,
- cite or record evidence where required,
- keep changes explainable,
- update documentation when the change affects repository truth.

AI-generated work remains subject to human governance and review.

---

# 16. Collaboration Conduct

Contributors should use respectful, evidence-based discussion.

Disagreement should focus on claims, evidence, architecture, trade-offs, and consequences rather than individuals.

Major uncertainty should be documented rather than hidden behind confident wording.

---

# 17. Contributor Checklist

Before requesting review, confirm:

- the change solves a defined problem,
- the actual repository state was inspected,
- the authority hierarchy was respected,
- the locked blueprint was preserved,
- required ADRs were addressed,
- terminology is consistent,
- sources and assumptions are distinguishable,
- validation was completed,
- documentation remains accurate,
- no unrelated structural change was introduced.

---

# Official Contribution Statement

> **Every contribution should improve repository knowledge, decision quality, architectural clarity, and the reliability of future execution.**

---

# End of Document
