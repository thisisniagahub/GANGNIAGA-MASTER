# GangNiaga Scheduled Daily Health Check and Reporting
# Purpose: Run health-check.ps1 and log results to YYYY-MM-DD.txt report files.

$ErrorActionPreference = "Continue"
$scriptDir = $PSScriptRoot
$healthCheckScript = Join-Path $scriptDir "health-check.ps1"
$reportDir = Join-Path $scriptDir "..\implementation\health-reports"

# Create report directory if it doesn't exist
if (-not (Test-Path $reportDir)) {
    New-Item -ItemType Directory -Path $reportDir -Force | Out-Null
}

$dateString = Get-Date -Format "yyyy-MM-dd"
$reportFile = Join-Path $reportDir "$dateString.txt"

Write-Host "Running repository health check and saving log to $reportFile..."

# Run health check and capture output
$output = & $healthCheckScript 2>&1

# Write output to report file
$output | Out-File -FilePath $reportFile -Encoding utf8

Write-Host "Health check report generated successfully at $reportFile."
