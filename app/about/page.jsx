import AboutSection from '@/modules/AboutSection'
import Highlights from '@/components/Highlights'
import CTA from '@/components/CTA'

export const metadata = {
  title: 'About IONA.AI | Redefining Purposeful, Equitable Hiring',
  description: 'Learn how IONA AI blends First Principles thinking and AI innovation to simplify hiring, foster inclusion, and empower organizations to discover true potential.',
   alternates: {
    canonical: "https://www.iona.ai/about",
  },
}

export default function About() {
  return (
    <>
      <AboutSection />
      <Highlights />
      <CTA />
    </>
  )
}

