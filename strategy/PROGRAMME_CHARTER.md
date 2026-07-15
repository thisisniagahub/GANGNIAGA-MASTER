# GANGNIAGA — Programme Charter & Governance Controls

> **Document ID:** `GN-STRAT-001`  
> **Document type:** Programme Charter & Governance Controls  
> **Status:** Draft  
> **Programme:** Company Knowledge & Executive Intelligence Platform  
> **Executive sponsor:** `<Executive Sponsor>`  
> **Programme owner:** `<Programme Manager>`  
> **Approver:** `<Governance Authority>`  

## 1. Purpose and Scope
This document establishes the programme governance, decision rights, RACI model, escalation paths, issue hierarchy, and gate-approval process for the GangNiaga Enterprise Transformation Programme.

## 2. Decision Rights
Decisions within the programme are categorized and authorized as follows:
- **Constitutional Changes:** Approved by the Executive Sponsor and Constitutional Approver.
- **Architecture & Technical Design:** Approved by the Architecture Review Board (ARB) via ADRs.
- **Risk & Security:** Approved by the Executive Risk Committee and CISO.
- **Data & AI Governance:** Approved by the Data Governance Council and AI Risk Committee.
- **Programme Execution & Gates:** Approved by the Programme Board.

## 3. RACI Model for Gates and Work Packages
Every gate and work package has exactly one accountable approver.

| Phase/Gate | Responsible (R) | Accountable (A) | Consulted (C) | Informed (I) |
|---|---|---|---|---|
| G0: Baseline & Authority | Programme Manager | Executive Sponsor | Governance Lead | Programme Board |
| G1: Strategy & Value | Strategy Lead | Executive Committee | Capability Owners | Stakeholders |
| G2: GRC Controls | Risk/Compliance Lead | Executive Risk Committee | Assurance Lead | Programme Board |
| G3: Architecture | Enterprise Architect | ARB | Tech Leads | Implementation Teams |
| G4: Data, Knowledge, AI | Data/AI Lead | Data Governance Council | Legal/Privacy | Tech Leads |
| G5: Security & Privacy | Security Architect | CISO | Privacy Counsel | Operations |
| G6: Eng & Operations | Eng/Platform Lead | Tech Governance Board | SRE/FinOps | Engineering Teams |
| G7: Pilot & Assurance | Pilot Delivery Lead | Pilot Governance Board| Assurance Lead | Stakeholders |
| G8: Handover & Close | Transition Manager | Executive Sponsor | Service Owners | Enterprise |

*Note: Conflicts of interest are managed by ensuring separation of duties between creators (Responsible) and approvers (Accountable).*

## 4. Gate-Approval Process
1. **Preparation:** Responsible owner prepares deliverables and gathers evidence.
2. **Review:** Consulted parties review deliverables for compliance, security, and architectural alignment.
3. **Approval:** Accountable approver signs off based on documented evidence.
4. **Recording:** The approval is logged in the canonical decision register with date, approver, and evidence URI.

## 5. Escalation Path
Escalations follow a strict, time-bounded path based on risk tier:
- **R1 (Low) / R2 (Moderate):** Resolved within the working group or escalated to the Programme Manager.
- **R3 (High):** Escalated to the Programme Board or Architecture Review Board (depending on domain). Resolution expected within 3 days.
- **R4 (Critical):** Immediate escalation to the Executive Sponsor, CISO, or Executive Risk Committee. Work stops until risk is mitigated or accepted.

## 6. Issue Hierarchy
Issues and work are tracked using the following hierarchy:
1. **Strategic Outcome:** The business value to be delivered.
2. **Gate / Phase:** Major programme milestones (G0-G8).
3. **Work Package:** Logical grouping of tasks (e.g., GN-G0-007).
4. **Task:** Individual actionable items.
5. **Issue/Defect:** Identified gaps, bugs, or exceptions blocking a task.
6. **Risk:** Potential future issues managed via the risk register.

## 7. Review Cadence
- **Weekly:** Programme Manager reviews task progress, blocked issues, and R1/R2 risks.
- **Monthly:** Programme Board reviews gate progress, budget, and R3/R4 risks.
- **Quarterly:** Executive Sponsor and Committees review overall programme value realization, continuous improvement, and strategic alignment.

## 8. Separation of Duties and Conflicts of Interest
- No individual shall approve their own deliverables.
- Independent assurance (e.g., security penetration testing) must be performed by personnel not responsible for the implementation.
- All exceptions to separation of duties require explicit, time-bounded waivers from the Executive Risk Committee.
