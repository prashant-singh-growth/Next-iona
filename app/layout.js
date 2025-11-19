import { Inter, Montserrat, Lora, Open_Sans, Outfit, Poppins, Red_Hat_Display, Sora } from 'next/font/google'
import './globals.css'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import 'aos/dist/aos.css'
import ClientWrapper from './ClientWrapper'

const montserrat = Montserrat({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-montserrat',
})

const inter = Inter({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-inter',
})

const lora = Lora({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-lora',
  style: ['normal', 'italic'],
})

const openSans = Open_Sans({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-open-sans',
  style: ['normal', 'italic'],
})

const outfit = Outfit({ 
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-outfit',
})

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
  style: ['normal', 'italic'],
})

const redHatDisplay = Red_Hat_Display({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-red-hat-display',
  style: ['normal', 'italic'],
})

const sora = Sora({ 
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
  variable: '--font-sora',
})

export const metadata = {
  title: 'ionai - Elevating Experiences',
  description: 'AI powered hiring solutions.',
  icons: {
    icon: '/favicon.ico',
    apple: '/logo192.png',
  },
  manifest: '/manifest.json',
  themeColor: '#000000',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${montserrat.variable} ${inter.variable} ${lora.variable} ${openSans.variable} ${outfit.variable} ${poppins.variable} ${redHatDisplay.variable} ${sora.variable}`}>
      <head>
        <script async src="https://embed.cal.com/cal-embed.js"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.handleMissingCaseStudyImage = function(elementId, studyNumber) {
                const element = document.getElementById(elementId);
                if (element) {
                  element.onerror = null;
                  element.src = \`https://placehold.co/600x400/lightgray/darkgray?text=Case+Study+\${studyNumber}\`;
                }
              };
            `,
          }}
        />
      </head>
      <body>
        <ClientWrapper>
          {children}
        </ClientWrapper>
        <ToastContainer position="top-right" autoClose={4000} />
      </body>
    </html>
  )
}

