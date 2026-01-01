# FlowPilot AI - SEO Geo-Targeting Validation Script (PowerShell)
# Validates all SEO and geo-targeting implementations on Windows

Write-Host "🔍 FlowPilot AI - SEO Geo-Targeting Validation (Windows)" -ForegroundColor Cyan
Write-Host "========================================================" -ForegroundColor Cyan
Write-Host ""

$PASSED = 0
$FAILED = 0

# Function to check if a string exists in a file
function Check-String {
    param(
        [string]$FilePath,
        [string]$SearchString,
        [string]$Description
    )
    
    if (Test-Path $FilePath) {
        $content = Get-Content $FilePath -Raw
        if ($content -match $SearchString) {
            Write-Host "✅ $Description" -ForegroundColor Green
            $global:PASSED++
        } else {
            Write-Host "❌ $Description - Not found in $FilePath" -ForegroundColor Red
            $global:FAILED++
        }
    } else {
        Write-Host "❌ $Description - File not found: $FilePath" -ForegroundColor Red
        $global:FAILED++
    }
}

# Function to check if a file exists
function Check-File {
    param(
        [string]$FilePath,
        [string]$Description
    )
    
    if (Test-Path $FilePath) {
        Write-Host "✅ $Description" -ForegroundColor Green
        $global:PASSED++
    } else {
        Write-Host "❌ $Description - File missing: $FilePath" -ForegroundColor Red
        $global:FAILED++
    }
}

Write-Host "📋 Checking Metadata Configuration..." -ForegroundColor Yellow
Write-Host "---"
Check-String "app/layout.tsx" "automatisation IA France" "French keywords present"
Check-String "app/layout.tsx" "fr_FR" "Open Graph French locale"
Check-String "app/layout.tsx" "fr-FR" "Language alternate present"
Check-String "app/layout.tsx" "LocalBusiness" "LocalBusiness schema"
Write-Host ""

Write-Host "🏗️  Checking File Structure..." -ForegroundColor Yellow
Write-Host "---"
Check-File "public/robots.txt" "robots.txt file"
Check-File "app/sitemap.ts" "sitemap.ts file"
Check-File "app/head.tsx" "head.tsx file"
Check-File "lib/geo-config.ts" "geo-config.ts file"
Check-File "lib/geo-optimization.ts" "geo-optimization.ts file"
Write-Host ""

Write-Host "🔐 Checking Headers Configuration..." -ForegroundColor Yellow
Write-Host "---"
Check-String "next.config.ts" "Content-Language" "Content-Language header"
Check-String "next.config.ts" "geo-targeting" "Geo-targeting comment"
Check-String "next.config.ts" "redirects" "Language redirects"
Write-Host ""

Write-Host "📍 Checking Geo Configuration..." -ForegroundColor Yellow
Write-Host "---"
Check-String "lib/geo-config.ts" "primaryMarket.*FR" "Primary market set to FR"
Check-String "lib/geo-config.ts" "frenchCities" "French cities defined"
Check-String "lib/geo-config.ts" "keywordsByRegion" "Keywords by region"
Write-Host ""

Write-Host "🔗 Checking Structured Data..." -ForegroundColor Yellow
Write-Host "---"
Check-String "app/layout.tsx" "@type.*Organization" "Organization schema"
Check-String "app/layout.tsx" "GeoCoordinates" "Geo coordinates schema"
Check-String "app/layout.tsx" "areaServed" "Area served schema"
Write-Host ""

Write-Host "📱 Checking Social Media Config..." -ForegroundColor Yellow
Write-Host "---"
Check-String "lib/geo-config.ts" "socialMedia" "Social media config"
Check-String "app/layout.tsx" "twitter" "Twitter card config"
Check-String "app/layout.tsx" "@flowpilotai" "Twitter handle"
Write-Host ""

Write-Host "🛡️  Checking Compliance..." -ForegroundColor Yellow
Write-Host "---"
Check-String "lib/geo-config.ts" "GDPR" "GDPR compliance flag"
Check-String "app/layout.tsx" "formatDetection" "Format detection enabled"
Check-String "next.config.ts" "Permissions-Policy" "Permissions policy set"
Write-Host ""

Write-Host "========================================================" -ForegroundColor Cyan
Write-Host ""

if ($FAILED -eq 0) {
    Write-Host "Results: " -NoNewline
    Write-Host "$PASSED Passed" -ForegroundColor Green -NoNewline
    Write-Host " | " -NoNewline
    Write-Host "0 Failed" -ForegroundColor Green
    Write-Host ""
    Write-Host "🎉 All SEO geo-targeting checks passed!" -ForegroundColor Green
    Write-Host "The site is fully optimized for French market targeting." -ForegroundColor Green
} else {
    Write-Host "Results: " -NoNewline
    Write-Host "$PASSED Passed" -ForegroundColor Green -NoNewline
    Write-Host " | " -NoNewline
    Write-Host "$FAILED Failed" -ForegroundColor Red
    Write-Host ""
    Write-Host "⚠️  Some checks failed. Please review the implementation." -ForegroundColor Yellow
}
