"use client"

import React from 'react'
import SolutionBanner from '../components/Pages/SolutionPage/SolutionBanner'
import ResultSection from '../components/Pages/LandingPage/ResultSection'
import PainPointSection from '../components/Pages/SolutionPage/PainPointSection'
import ChallengesSection from '../components/Pages/SolutionPage/ChallengesSection'
import CompleteSolutionSection from '../components/Pages/SolutionPage/CompleteSolutionSection'
import CTASection from '../components/Pages/HomePage/CTASection'
import FAQComponent from '../components/utils/FAQComponent'
import { solutionFaqList } from '../components/Data/FaqData'

function SolutionPage() {
  return (
  <>
  <SolutionBanner/>
  <ResultSection headShow={false}/>
  <PainPointSection/>
  <ChallengesSection/>
  <CompleteSolutionSection/>
   <CTASection ctaUrl={"/contact"}/>
   <FAQComponent FAQList={solutionFaqList} />
  </>
  )
}

export default SolutionPage