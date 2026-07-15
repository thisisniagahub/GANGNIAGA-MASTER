# Documentation and Policy Assurance Automation

> **Document ID:** `GN-STD-DOC-001`
> **Owner:** `<Documentation Tooling Lead>`
> **Approver:** `<Programme Assurance Lead>`
> **Status:** `Draft`
> **Version:** `1.0.0`
> **Classification:** `Internal`

## 1. Objective
To automate documentation and policy assurance through CI checks on all Pull Requests, ensuring consistency, authority, and correctness across the enterprise repository.

## 2. Automated CI Checks

| Check Name | Description | Failure Action |
|---|---|---|
| **Metadata Validation** | Ensures document frontmatter or metadata block contains ID, Owner, Approver, Status, Version, and Review Date. | Block Merge |
| **Markdown Linting** | Standardizes formatting, spacing, and header hierarchies. | Warn / Block |
| **Link & Anchor Verification** | Detects dead links, missing anchors, and external link rot. | Block Merge |
| **Status & Authority Consistency** | Checks that document status (`Draft`, `Approved`) aligns with PR status and approvals. | Block Merge |
| **Terminology & Glossary** | Validates usage of canonical terms against `GLOSSARY.md`. | Warn |
| **Secret Scanning** | Prevents credentials, tokens, or PII from being committed. | Block Merge |
| **Stale Review Detection** | Flags documents where `Next Review Date` has passed. | Warn |
| **Duplicate Content** | Uses semantic similarity to detect undocumented redundancy. | Warn |

## 3. Implementation Plan
- Integrated via GitHub Actions (or equivalent CI platform).
- Requires all PRs to pass the above gates.
- Override requires explicit `<Programme Assurance Lead>` approval.
