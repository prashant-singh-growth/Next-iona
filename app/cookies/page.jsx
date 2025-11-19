import CookiePolicy from '@/modules/CookiePolicy'

export const metadata = {
  title: 'Cookie Policy | Iona AI',
  description: 'See how Iona AI uses cookies responsibly to enhance experience, personalize insights, and maintain data clarity.',
   alternates: {
    canonical: "https://www.iona.ai/cookies",
  },
}

export default function CookiesPage() {
  return <CookiePolicy />
}

