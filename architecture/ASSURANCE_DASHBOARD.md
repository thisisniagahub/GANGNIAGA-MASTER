# Assurance and Traceability Dashboard

> **Document ID:** `GN-ARC-ASS-001`
> **Owner:** `<Assurance Analytics Lead>`
> **Approver:** `<Programme Board>`
> **Status:** `Draft`
> **Version:** `1.0.0`
> **Classification:** `Internal`

## 1. Objective
Provide a unified, automated, and near real-time reporting plane for requirement coverage, risk posture, control effectiveness, and operational health.

## 2. Dashboard Dimensions

### 2.1 Governance and Compliance
| Metric | Source | Frequency |
|---|---|---|
| **Requirement Coverage** | Jira / Requirements DB | Daily |
| **Open R3/R4 Risks** | Risk Register | Live |
| **Control Effectiveness** | Compliance Scans / Audits | Weekly |
| **Stale Documents** | Repository Metadata | Daily |

### 2.2 Operational Health
| Metric | Source | Target |
|---|---|---|
| **Service Uptime (SLO)** | APM / Prometheus | 99.9% |
| **Incident MTTR** | PagerDuty / ITSM | < 2 Hours |
| **Infrastructure Cost** | FinOps Platform | ± 5% of Budget |
| **Test Coverage** | SonarQube / CI | > 85% |

## 3. Data Traceability
All metrics presented on the dashboard must contain a traceable link to the raw underlying data source or canonical record. Manual overrides are strictly logged with timestamp and user ID.
