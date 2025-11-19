"use client"
import React from 'react'
import LandingPageBanner from '../../components/Pages/SecLandingPage/LandingPageBanner'
import ClientBadgeSection from '../../components/Pages/HomePage/ClientBadgeSection'
import NovaFixesSection from '../../components/Pages/SecLandingPage/NovaFixesSection'
import NovaVerifySection from '../../components/Pages/SecLandingPage/NovaVerifySection'
import LPHeader from '../../components/Pages/LandingPage/LPHeader'
import LPFooter from '../../components/Pages/LandingPage/LPFooter'
import CTASection from '../../components/Pages/HomePage/CTASection'
import CertificationSection from '../../components/Pages/SecLandingPage/CertificationSection'
import CustomersExperienceSection from '../../components/Pages/SecLandingPage/CustomersExperienceSection'
import SeoHeader from '../../components/utils/SeoHeader'


function SecLandingPage() {
  return (
   <div className="bg-white theme-lora-font">
   
    <LPHeader/>
    <LandingPageBanner/>
    <ClientBadgeSection/>
    <NovaFixesSection/>
    <NovaVerifySection/>
<CertificationSection/>
<CustomersExperienceSection/>
    <CTASection
    title={"Ready to solve your background check hassles?"}
    description={"Get started today and automate 100% of your recruitment from sourcing to onboarding with background verification and a 100% data accuracy guarantee."}
    />
    <LPFooter/>
   </div>
  )
}

export default SecLandingPage