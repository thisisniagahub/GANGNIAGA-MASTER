# GangNiaga Repository Health Check Script
# Purpose: Reusable automated solution to verify repository sanity, documentation integrity, and structural compliance.

$ErrorActionPreference = "Stop"
$root = Resolve-Path "$PSScriptRoot\.."
$global:failures = 0

Write-Host "=============================================" -ForegroundColor Cyan
Write-Host "   GangNiaga OS Repository Health Check      " -ForegroundColor Cyan
Write-Host "=============================================" -ForegroundColor Cyan
Write-Host "Root path: $root`n"

function Assert-Check($name, $passed, $details) {
    if ($passed) {
        Write-Host "[PASS] $name" -ForegroundColor Green
    } else {
        Write-Host "[FAIL] $name - $details" -ForegroundColor Red
        $global:failures++
    }
}

# --- Check A & B: DOCUMENT_MAP.md File Verification ---
Write-Host "Checking Document Map alignment..." -ForegroundColor Yellow
$docMapPath = Join-Path $root "DOCUMENT_MAP.md"

if (Test-Path $docMapPath) {
    # Extract mapped files from DOCUMENT_MAP.md
    $content = Get-Content $docMapPath
    $mappedFiles = New-Object System.Collections.Generic.List[string]
    
    # Simple regex parsing to extract file paths
    foreach ($line in $content) {
        if ($line -match '`([^`]+\.md)`') {
            $mappedFiles.Add($Matches[1])
        }
        if ($line -match '`LICENSE`') {
            $mappedFiles.Add("LICENSE")
        }
    }
    
    # Clean up paths to relative and remove duplicates
    $mappedFiles = $mappedFiles | Select-Object -Unique | Where-Object { $_ -ne "DOCUMENT_MAP.md" }
    
    # Assert Check A: All mapped files exist physically (except expected planned ones)
    $missingFiles = @()
    foreach ($file in $mappedFiles) {
        # LICENSE is allowed to be planned (missing)
        if ($file -eq "LICENSE") { continue }
        
        $fullPath = Join-Path $root $file
        if (-not (Test-Path $fullPath)) {
            $missingFiles += $file
        }
    }
    Assert-Check "DOCUMENT_MAP.md Mapped Files Exist" ($missingFiles.Count -eq 0) "Missing physical files: [$( $missingFiles -join ', ' )]"

    # Assert Check B: No untracked .md files in root that are not in DOCUMENT_MAP.md (excluding GEMINI.md & PLAYBOOK)
    $rootMdFiles = Get-ChildItem -Path $root -Filter "*.md" | Select-Object -ExpandProperty Name
    $unmappedRootFiles = @()
    foreach ($file in $rootMdFiles) {
        if ($file -eq "DOCUMENT_MAP.md") { continue }
        if ($file -eq "GEMINI.md") { continue }
        if ($file -eq "TRANSFORMATION_PLAYBOOK.md") { continue }
        if (-not ($mappedFiles -contains $file)) {
            $unmappedRootFiles += $file
        }
    }
    Assert-Check "All Root Markdown Files Mapped" ($unmappedRootFiles.Count -eq 0) "Unmapped root files: [$( $unmappedRootFiles -join ', ' )]"
} else {
    Assert-Check "DOCUMENT_MAP.md exists" $false "DOCUMENT_MAP.md was not found."
}

# --- Check C: No Stale chat*.md References ---
Write-Host "Checking for stale chat*.md references..." -ForegroundColor Yellow
$excludeList = @(
    "TRANSFORMATION_PLAYBOOK.md", "GEMINI.md", "VALIDATION_REPORT.md", 
    "setup_github_backlog.ps1", "health-check.ps1",
    "ADR-0006-CONTROLLED-REPOSITORY-EVOLUTION.md", 
    "AUDIT_NOTES.md", "ENTERPRISE_DIRECTION.md", 
    "GATED_TRANSFORMATION_PLAN.md", "PROGRAMME_BACKLOG.md"
)
$staleRefs = @()
$mdFiles = Get-ChildItem -Path $root -Recurse -Filter "*.md"
foreach ($file in $mdFiles) {
    if ($excludeList -contains $file.Name) { continue }
    $lines = Get-Content $file.FullName
    for ($i = 0; $i -lt $lines.Count; $i++) {
        if ($lines[$i] -match 'chat[1-5]\.md') {
            $staleRefs += "$($file.Name):Line $($i + 1)"
        }
    }
}
Assert-Check "No Stale chat*.md References" ($staleRefs.Count -eq 0) "Found stale references in: [$( $staleRefs -join ', ' )]"

# --- Check D: No GLOSSARY Typos (GLOSSORY) ---
Write-Host "Checking for legacy GLOSSORY typos..." -ForegroundColor Yellow
$glossoryRefs = @()
foreach ($file in $mdFiles) {
    if ($excludeList -contains $file.Name) { continue }
    $lines = Get-Content $file.FullName
    for ($i = 0; $i -lt $lines.Count; $i++) {
        if ($lines[$i] -match 'GLOSSORY') {
            $glossoryRefs += "$($file.Name):Line $($i + 1)"
        }
    }
}
Assert-Check "No GLOSSORY Typos" ($glossoryRefs.Count -eq 0) "Found GLOSSORY typos in: [$( $glossoryRefs -join ', ' )]"

# --- Check E: Folder README.md verification ---
Write-Host "Checking Blueprint v2.0 folders for README.md..." -ForegroundColor Yellow
$blueprintFolders = @(
    "strategy", "knowledge", "architecture", "adr", "standards", "templates", "roadmap", "implementation"
)
$missingReadmes = @()
foreach ($folder in $blueprintFolders) {
    $readmePath = Join-Path (Join-Path $root $folder) "README.md"
    if (-not (Test-Path $readmePath)) {
        $missingReadmes += $folder
    }
}
Assert-Check "All Blueprint Folders have README.md" ($missingReadmes.Count -eq 0) "Folders missing README: [$( $missingReadmes -join ', ' )]"

# --- Check F: MASTER.md Line Count Check ---
Write-Host "Checking MASTER.md size constraints..." -ForegroundColor Yellow
$masterPath = Join-Path $root "MASTER.md"
if (Test-Path $masterPath) {
    $lineCount = (Get-Content $masterPath).Count
    Assert-Check "MASTER.md line count under 5000 lines" ($lineCount -lt 5000) "MASTER.md has $lineCount lines (limit is 5000)"
} else {
    Assert-Check "MASTER.md exists" $false "MASTER.md was not found."
}

# --- Check G: Git Status Check ---
Write-Host "Checking Git working tree cleanliness..." -ForegroundColor Yellow
# Ignoring untracked scripts/health-check.ps1 for the clean check if running during execution
$gitStatus = git status --porcelain | Where-Object { $_ -notmatch 'health-check.ps1' }
Assert-Check "Git status is clean" ([string]::IsNullOrEmpty($gitStatus)) "Working directory is dirty:`n$gitStatus"

Write-Host "`n=============================================" -ForegroundColor Cyan
if ($global:failures -eq 0) {
    Write-Host "   Health Check PASS - Repository is clean!   " -ForegroundColor Green
    Write-Host "=============================================" -ForegroundColor Cyan
    exit 0
} else {
    Write-Host "   Health Check FAIL - $global:failures checks failed! " -ForegroundColor Red
    Write-Host "=============================================" -ForegroundColor Cyan
    exit 1
}
