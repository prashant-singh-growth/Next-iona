import ThankYouPage from '@/modules/ThankYou'

export const metadata = {
  title: 'Thank You | IONA AI',
  description: 'Thank you for contacting IONA AI.',
   alternates: {
    canonical: "https://www.iona.ai/thank-you",
  },
}

export default function ThankYou() {
  return <ThankYouPage />
}

