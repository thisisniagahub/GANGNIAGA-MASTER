# Setup Git Hooks natively
Write-Host "Configuring GangNiaga OS Git Hooks..." -ForegroundColor Cyan

# Check if .githooks directory exists
if (Test-Path -Path ".\.githooks") {
    git config core.hooksPath .githooks
    Write-Host "Success: Git hooks are now pointing to .githooks directory." -ForegroundColor Green
} else {
    Write-Host "Error: .githooks directory not found." -ForegroundColor Red
}
