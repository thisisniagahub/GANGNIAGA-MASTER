# PowerShell Script to Setup GitHub Labels and Issues (Backlog) for GangNiaga Executive OS
# Requirements: GitHub CLI (gh) installed and authenticated

# Check if gh CLI is installed
if (-not (Get-Command gh -ErrorAction SilentlyContinue)) {
    Write-Error "GitHub CLI (gh) is not installed. Please install it first: https://cli.github.com/"
    exit 1
}

# Check login status
gh auth status
if ($LASTEXITCODE -ne 0) {
    Write-Host ""
    Write-Warning "You are not authenticated to GitHub. Please run: gh auth login"
    Write-Host "After logging in, run this script again."
    exit 1
}

Write-Host "Creating GitHub Labels..." -ForegroundColor Green

# Define labels
$labels = @(
    # Gates
    @{ name = "gate-g0"; color = "b60205"; desc = "Gate G0: Enterprise Discovery" }
    @{ name = "gate-g1"; color = "d93f0b"; desc = "Gate G1: Governance Reset" }
    @{ name = "gate-g2"; color = "0e8a16"; desc = "Gate G2: TODO v2 and Document Control" }
    @{ name = "gate-g3"; color = "0052cc"; desc = "Gate G3: Business and Operating Model" }
    @{ name = "gate-g4"; color = "5319e7"; desc = "Gate G4: Enterprise Control Foundation" }
    @{ name = "gate-g5"; color = "006b75"; desc = "Gate G5: Pre-pilot Engineering Controls" }
    @{ name = "gate-g6"; color = "bfd4f2"; desc = "Gate G6: Assurance and Automation" }
    @{ name = "gate-g7"; color = "1d76db"; desc = "Gate G7: Controlled Pilot" }
    @{ name = "gate-g8"; color = "fef2c0"; desc = "Gate G8: Production-Readiness" }
    
    # Priority
    @{ name = "priority-critical"; color = "b60205"; desc = "Critical Priority Tasks" }
    @{ name = "priority-high"; color = "d93f0b"; desc = "High Priority Tasks" }
    @{ name = "priority-medium"; color = "fbca04"; desc = "Medium Priority Tasks" }
    
    # Types
    @{ name = "type-governance"; color = "ffffff"; desc = "Governance-related documentation and policies" }
    @{ name = "type-architecture"; color = "e99695"; desc = "System architecture designs and layers" }
    @{ name = "type-documentation"; color = "c2e0c6"; desc = "General documentation and map updates" }
    @{ name = "type-implementation"; color = "f9d0c4"; desc = "Executable pilot code, pipelines, and runtime modules" }
)

foreach ($label in $labels) {
    Write-Host "Processing label: $($label.name)..."
    gh label create $label.name --color $label.color --description $label.desc --force
}

Write-Host "`nCreating GitHub Issues for Programme Backlog (Gates G0 to G8)..." -ForegroundColor Green

# Define issues
$issues = @(
    @{
        title = "[G0] Enterprise Discovery"
        body = @"
### Objective
Sediakan asas sebelum mengubah Constitution:
- Business outcomes dan masalah sebenar yang GangNiaga selesaikan.
- Executive use cases.
- Business capability map.
- Risk appetite dan prohibited uses.
- Decision rights dan RACI.
- Success metrics.
- Jurang struktur Blueprint v1.

### Deliverable
Enterprise Programme Charter dan cadangan Blueprint v2.
"@
        labels = "gate-g0,type-implementation,priority-high"
    }
    @{
        title = "[G1] Governance Reset"
        body = @"
### Objective
Buat constitutional ADR (`adr/ADR-0006-CONTROLLED-REPOSITORY-EVOLUTION.md`) untuk:
- Menggantikan absolute structural lock dengan controlled change.
- Menentukan siapa boleh meluluskan folder/fail baharu.
- Menentukan review, migration dan rollback.
- Menyelesaikan keputusan GLOSSARY.md.
- Tidak mencampurkan keputusan LICENSE.

Kemudian selaraskan fail-fail berikut secara atomik:
- CONSTITUTION.md
- MASTER.md
- DOCUMENT_MAP.md
- README.md
- CONTRIBUTING.md
"@
        labels = "gate-g1,type-governance,priority-critical"
    }
    @{
        title = "[G2] TODO v2 dan Document Control"
        body = @"
### Objective
Tukar TODO.md daripada 435 checkbox biasa kepada programme backlog.
Setiap task mempunyai: ID, Outcome, Owner, Approver, Priority, Risk tier, Dependencies, Deliverable, Acceptance criteria, Evidence, Control mapping, Review date, Status.
Active task truth menggunakan GitHub Issues/Project. TODO.md menjadi dashboard.

Betulkan:
- Diagram authority dalam MASTER.md.
- Architecture/ADR order dalam DOCUMENT_MAP.md.
- Stale status, Clickable internal links, Canonical content ownership.
"@
        labels = "gate-g2,type-documentation,priority-high"
    }
    @{
        title = "[G3] Business dan Operating Model"
        body = @"
### Objective
Bina:
- Corporate strategy alignment.
- Value streams.
- Business capability model.
- Executive use-case portfolio.
- Product/service ownership.
- Enterprise RACI.
- KPI/OKR tree.
- Benefits-realization register.
- Management-review cadence.
"@
        labels = "gate-g3,type-implementation,priority-medium"
    }
    @{
        title = "[G4] Enterprise Control Foundation"
        body = @"
### Objective
Wujudkan shared registers dahulu:
- AI/system/agent inventory.
- Data catalog dan lineage.
- Enterprise risk register.
- Control register.
- Policy register.
- Supplier/vendor register.
- Service catalog.
- Decision register.
- Regulatory-obligation register.
- Evidence index.
"@
        labels = "gate-g4,type-governance,priority-high"
    }
    @{
        title = "[G5] Pre-pilot Engineering Controls"
        body = @"
### Objective
Sediakan minimum controls sebelum runtime dibina:
- Secure SDLC.
- Identity dan deny-by-default permissions.
- Secrets management.
- Dependency inventory dan SBOM.
- Artifact provenance.
- Sandbox dan isolated environments.
- Logging, tracing dan audit.
- Human approval gates.
- Kill switch.
- Incident dan rollback runbooks.
- AI cost/spend limits.
"@
        labels = "gate-g5,type-architecture,priority-high"
    }
    @{
        title = "[G6] Assurance dan Automation"
        body = @"
### Objective
Bina docs-as-code CI:
- Markdown/link validation.
- Metadata-schema validation.
- Authority/status validation.
- Secret scanning.
- Filename/case checks.
- Duplicate-content detection.
- Stale-document detection.
- Control-to-evidence validation.
- CODEOWNERS dan required reviewers.
"@
        labels = "gate-g6,type-implementation,priority-high"
    }
    @{
        title = "[G7] Controlled Pilot"
        body = @"
### Objective
Pilih hanya satu bounded use case. Mesti ada:
- Business owner.
- AI/data impact assessment.
- Threat model.
- TEVV dan adversarial evaluation.
- Non-production environment.
- Human approval.
- Audit trail.
- Kill switch dan rollback.
- Quality, safety, latency dan cost thresholds.
- Explicit pass/fail/stop criteria.
"@
        labels = "gate-g7,type-implementation,priority-critical"
    }
    @{
        title = "[G8] Production-Readiness"
        body = @"
### Objective
Sebelum production:
- Independent review.
- SLO dan error budget.
- Incident/on-call ownership.
- BIA serta RTO/RPO.
- Backup/restore dan DR exercise.
- Security/privacy approval.
- Vendor due diligence.
- FinOps unit economics.
- Residual-risk acceptance.
- Post-launch monitoring plan.
"@
        labels = "gate-g8,type-governance,priority-critical"
    }
)

foreach ($issue in $issues) {
    Write-Host "Creating Issue: $($issue.title)..."
    gh issue create --title $issue.title --body $issue.body --label $issue.labels
}

Write-Host "`nAll labels and backlog issues created successfully!" -ForegroundColor Green
