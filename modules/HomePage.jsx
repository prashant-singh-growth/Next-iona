'use client'

import { memo } from "react";
import HomeBanner from "../components/Pages/HomePage/HomeBanner";
import HowWeWork from "../components/Pages/HomePage/HowWeWork";
import WorkingWay from "../components/Pages/HomePage/WorkingWay";
import SolutionSection from "../components/Pages/HomePage/SolutionSection";
import WhyUsSection from "../components/Pages/LandingPage/WhyUsSection";
import ResultSection from "../components/Pages/LandingPage/ResultSection";
import CertificationSection from "../components/Pages/HomePage/CertificationSection";
import TestimonialSlider from "../components/utils/TestimonialSlider";
import CTASection from "../components/Pages/HomePage/CTASection";

import CaseStudySection from "../components/Pages/HomePage/CaseStudySection";

import { homeFaqList } from "../components/Data/FaqData";
import FAQComponent from "../components/utils/FAQComponent";
import ClientBadgeSection from "../components/Pages/HomePage/ClientBadgeSection";
const HomePage = memo(() => {
 

  return (
    <div className="bg-white text-primaryText theme-lora-font">
      {/* banner */}
      <HomeBanner />
      {/* client badge */}
      <ClientBadgeSection/>
      {/* how we work */}
      <HowWeWork />
      {/* working way */}
      <WorkingWay />
      {/* complate solution section */}
      <SolutionSection ctaurl="/contact" isLinkActive={true}/>

      {/* cta */}
      <section className="w-full bg-[#150D37] overflow-hidden">
        <div className="w-full relative py-16 grid place-items-center px-5 md:px-8 slg:px-[60px] lg:px-[90px]">
          <img
            src="/assets/pages/landingpage/bg-cta-1.png"
            alt=""
            className="absolute inset-0 min-w-[1200px] lg:min-w-full lg:max-w-full"
          />
          <div className="w-full flex flex-col gap-7 lg:flex-row justify-between items-center relative z-10 max-w-[1440px] ">
            <h2 className="text-3xl md:text-4xl lg:text-[40px] lg:leading-[50px] text-white font-lora font-bold md:font-semibold text-center lg:text-left max-w-[912px]">
              Unlock the Power of Precision-based Automated Hiring
            </h2>

            <a
              href="/contact"
              className="bg-white flex-none px-5 w-fit py-3 font-bold leading-5 text-[14px] text-primary flex flex-row space-x-2 rounded hover:scale-95 ease-in-out duration-150"
            >
              <span >Schedule a Demo</span>{" "}
              <svg
              
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.16669 10H15.8334M15.8334 10L10.8334 5M15.8334 10L10.8334 15"
                  stroke="#2A2564"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
        </div>
      </section>
      {/* why us section */}
      <WhyUsSection ctaText="Book a Demo" ctaUrl="/contact"/>
      {/* result Section */}
      <ResultSection/>
      {/* certification section */}
      <CertificationSection/>
      {/* testimonial section */}
      <TestimonialSlider/>
      {/* cta section */}
      <CTASection ctaUrl={"/contact"}/>
      {/* case-study section */}
      <CaseStudySection/>
      {/* faq section */}

  <FAQComponent FAQList={homeFaqList}/>
   
    </div>
)})

export default HomePage