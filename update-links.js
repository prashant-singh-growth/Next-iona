#!/usr/bin/env node

/**
 * Script to update react-router-dom Link imports to Next.js Link
 * Run with: node update-links.js
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const filesToUpdate = [
  'components/ServiceCard.jsx',
  'components/CaseStudyCard.jsx',
  'components/CaseStudiesSection.jsx',
  'components/CTASection.jsx',
  'components/BenefitsSection.jsx',
  'components/Pages/SolutionPage/SolutionBanner.jsx',
  'components/Pages/SolutionPage/CompleteSolutionSection.jsx',
  'components/Pages/HomePage/CaseStudySection.jsx',
  'components/Pages/HomePage/HomeBanner.jsx',
  'components/Pages/HomePage/CTASection.jsx',
  'components/CTA.jsx',
  'components/HeroCarousel.jsx',
  'components/AnimatedCard.jsx',
  'components/AnimatedButton.jsx',
  'modules/Blogs.jsx',
  'modules/Vids.jsx',
  'modules/CaseStudies.jsx',
  'modules/Solutions/NovaCount.jsx',
  'modules/Solutions/NovaAssist.jsx',
  'modules/Solutions/NovaTrack.jsx',
  'modules/Solutions/NovaStart.jsx',
  'modules/Solutions/NovaDoc.jsx',
  'modules/Solutions/NovaTrain.jsx',
  'modules/Solutions/NovaEngage.jsx',
  'modules/Solutions/NovaVerify.jsx',
  'modules/Solutions/NovaConnect.jsx',
];

function updateFile(filePath) {
  if (!fs.existsSync(filePath)) {
    console.log(`⚠️  File not found: ${filePath}`);
    return;
  }

  let content = fs.readFileSync(filePath, 'utf8');
  let modified = false;

  // Update import statement
  if (content.includes('from "react-router-dom"') || content.includes("from 'react-router-dom'")) {
    // Check if it's importing Link
    if (content.includes('import { Link }') || content.includes("import { Link }")) {
      content = content.replace(
        /import\s*{\s*Link\s*}\s*from\s*["']react-router-dom["']/g,
        "import Link from 'next/link'"
      );
      modified = true;
    }
    
    // Check if it's importing NavLink
    if (content.includes('import { NavLink }') || content.includes("import { NavLink }")) {
      content = content.replace(
        /import\s*{\s*NavLink\s*}\s*from\s*["']react-router-dom["']/g,
        "import Link from 'next/link'"
      );
      // Also need to replace NavLink usage with Link
      content = content.replace(/NavLink/g, 'Link');
      modified = true;
    }

    // Check if it's importing useLocation or useNavigate
    if (content.includes('useLocation') || content.includes('useNavigate')) {
      content = content.replace(
        /import\s*{\s*([^}]*useLocation[^}]*|useNavigate[^}]*)\s*}\s*from\s*["']react-router-dom["']/g,
        "import { usePathname, useRouter } from 'next/navigation'"
      );
      content = content.replace(/useLocation\(\)/g, 'usePathname()');
      content = content.replace(/const\s+location\s*=\s*usePathname\(\)/g, 'const pathname = usePathname()');
      content = content.replace(/location\.pathname/g, 'pathname');
      content = content.replace(/useNavigate\(\)/g, 'useRouter()');
      content = content.replace(/const\s+navigate\s*=\s*useRouter\(\)/g, 'const router = useRouter()');
      content = content.replace(/navigate\(/g, 'router.push(');
      modified = true;
    }
  }

  // Update Link props: to -> href
  content = content.replace(/\sto={/g, ' href={');
  content = content.replace(/\sto="/g, ' href="');
  content = content.replace(/\sto='/g, " href='");
  modified = true;

  // Add 'use client' if using hooks and doesn't have it
  if ((content.includes('useState') || content.includes('useEffect') || content.includes('usePathname') || content.includes('useRouter')) && !content.includes("'use client'")) {
    content = "'use client'\n\n" + content;
    modified = true;
  }

  if (modified) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`✅ Updated: ${filePath}`);
  } else {
    console.log(`⏭️  Skipped (no changes needed): ${filePath}`);
  }
}

console.log('🔄 Updating Link imports to Next.js...\n');

filesToUpdate.forEach(updateFile);

console.log('\n✨ Done! Please review the changes and test your application.');

