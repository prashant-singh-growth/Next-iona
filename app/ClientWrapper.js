'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import AOS from 'aos'
import { enforceHTTPS } from '@/lib/security'
import Header from '@/components/Layout/Header'
import Footer from '@/components/Layout/Footer'
import RedirectHandler from '@/components/utils/RedirectHandler'

export default function ClientWrapper({ children }) {
  const pathname = usePathname()

  useEffect(() => {
    enforceHTTPS()

    if (process.env.NEXT_PUBLIC_XSS_PROTECTION === 'true') {
      const metaXSS = document.createElement('meta')
      metaXSS.httpEquiv = 'X-XSS-Protection'
      metaXSS.content = '1; mode=block'
      document.head.appendChild(metaXSS)

      const metaNoSniff = document.createElement('meta')
      metaNoSniff.httpEquiv = 'X-Content-Type-Options'
      metaNoSniff.content = 'nosniff'
      document.head.appendChild(metaNoSniff)

      const metaFrameOptions = document.createElement('meta')
      metaFrameOptions.httpEquiv = 'X-Frame-Options'
      metaFrameOptions.content = 'DENY'
      document.head.appendChild(metaFrameOptions)
    }
  }, [])

  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-out',
      once: true,
      offset: 50,
      delay: 0,
    })
  }, [])

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  const hideNavbarRoutes = [
    '/end-to-end-hiring-solution-for-enterprises',
    '/automated-background-verification'
  ]
  const shouldHideNavbar = hideNavbarRoutes.includes(pathname)

  return (
    <>
      <RedirectHandler />
      <div className="flex flex-col min-h-screen overflow-hidden">
        {!shouldHideNavbar && <Header />}
        <main className="flex-grow pt-[80px]">
          {children}
        </main>
        {!shouldHideNavbar && <Footer />}
      </div>
    </>
  )
}

