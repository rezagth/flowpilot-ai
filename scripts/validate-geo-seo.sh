#!/bin/bash

# FlowPilot AI - SEO Geo-Targeting Validation Script
# Validates all SEO and geo-targeting implementations

echo "🔍 FlowPilot AI - SEO Geo-Targeting Validation"
echo "=================================================="
echo ""

# Color codes
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Counter for checks
PASSED=0
FAILED=0

# Function to check if a string exists in a file
check_string() {
    local file=$1
    local search=$2
    local description=$3
    
    if grep -q "$search" "$file" 2>/dev/null; then
        echo -e "${GREEN}✅${NC} $description"
        ((PASSED++))
    else
        echo -e "${RED}❌${NC} $description - Not found in $file"
        ((FAILED++))
    fi
}

# Function to check if a file exists
check_file() {
    local file=$1
    local description=$2
    
    if [ -f "$file" ]; then
        echo -e "${GREEN}✅${NC} $description"
        ((PASSED++))
    else
        echo -e "${RED}❌${NC} $description - File missing: $file"
        ((FAILED++))
    fi
}

echo "📋 Checking Metadata Configuration..."
echo "---"
check_string "app/layout.tsx" "automatisation IA France" "French keywords present"
check_string "app/layout.tsx" "fr_FR" "Open Graph French locale"
check_string "app/layout.tsx" "fr-FR" "Language alternate present"
check_string "app/layout.tsx" "LocalBusiness" "LocalBusiness schema"
echo ""

echo "🏗️  Checking File Structure..."
echo "---"
check_file "public/robots.txt" "robots.txt file"
check_file "app/sitemap.ts" "sitemap.ts file"
check_file "app/head.tsx" "head.tsx file"
check_file "lib/geo-config.ts" "geo-config.ts file"
check_file "lib/geo-optimization.ts" "geo-optimization.ts file"
echo ""

echo "🔐 Checking Headers Configuration..."
echo "---"
check_string "next.config.ts" "Content-Language" "Content-Language header"
check_string "next.config.ts" "geo-targeting" "Geo-targeting comment"
check_string "next.config.ts" "redirects" "Language redirects"
echo ""

echo "📍 Checking Geo Configuration..."
echo "---"
check_string "lib/geo-config.ts" "primaryMarket.*FR" "Primary market set to FR"
check_string "lib/geo-config.ts" "frenchCities" "French cities defined"
check_string "lib/geo-config.ts" "keywordsByRegion" "Keywords by region"
echo ""

echo "🔗 Checking Structured Data..."
echo "---"
check_string "app/layout.tsx" "@type.*Organization" "Organization schema"
check_string "app/layout.tsx" "GeoCoordinates" "Geo coordinates schema"
check_string "app/layout.tsx" "areaServed" "Area served schema"
echo ""

echo "📱 Checking Social Media Config..."
echo "---"
check_string "lib/geo-config.ts" "socialMedia" "Social media config"
check_string "app/layout.tsx" "twitter" "Twitter card config"
check_string "app/layout.tsx" "@flowpilotai" "Twitter handle"
echo ""

echo "🛡️  Checking Compliance..."
echo "---"
check_string "lib/geo-config.ts" "GDPR" "GDPR compliance flag"
check_string "app/layout.tsx" "formatDetection" "Format detection enabled"
check_string "next.config.ts" "Permissions-Policy" "Permissions policy set"
echo ""

echo "=================================================="
echo ""
echo -e "Results: ${GREEN}$PASSED Passed${NC} | ${RED}$FAILED Failed${NC}"
echo ""

if [ $FAILED -eq 0 ]; then
    echo -e "${GREEN}🎉 All SEO geo-targeting checks passed!${NC}"
    echo "The site is fully optimized for French market targeting."
    exit 0
else
    echo -e "${YELLOW}⚠️  Some checks failed. Please review the implementation.${NC}"
    exit 1
fi
