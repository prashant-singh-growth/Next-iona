import CaseStudies from '@/modules/CaseStudies'

export const metadata = {
  title: 'Case Studies | Real Hiring Success Stories by IONA AI',
  description: 'Explore how leading organizations transformed their hiring with IONA AI. Real-world results that prove the impact of purposeful, AI-powered talent solutions.',
   alternates: {
    canonical: "https://www.iona.ai/case-studies",
  },
}

export default function CaseStudiesPage() {
  return <CaseStudies />
}

