
"use client"
import ResponsiveGridLines from "../../components/utils/ResponsiveGridLines";
import ChangingGradientText from "../../components/Pages/LandingPage/ChangingGradientText";
import LogoSlider from "../../components/Pages/LandingPage/LogoSlider";
import FormLandingPage from "../../components/Pages/LandingPage/FormLandingPage";
import TestimonialSlider from "../../components/utils/TestimonialSlider";
import WhyUsSection from "../../components/Pages/LandingPage/WhyUsSection";
import SeoHeader from "../../components/utils/SeoHeader";

import ResultSection from "../../components/Pages/LandingPage/ResultSection";
import CertificationSection from "../../components/Pages/HomePage/CertificationSection";
import CTASection from "../../components/Pages/HomePage/CTASection";

import SolutionSection from "../../components/Pages/HomePage/SolutionSection";
import LPHeader from "../../components/Pages/LandingPage/LPHeader";
import LPFooter from "../../components/Pages/LandingPage/LPFooter";
function Landingpages() {
  return (
    <div className="w-full font-lora theme-lora-font" id="form">
      <SeoHeader
        title={"iona.ai: AI-Powered End-to-End Hiring & Onboarding Solution"}
        description={
          "Streamline your hiring with iona.ai. Automate recruitment, ensure compliance, and onboard at scale. Request a demo today!"
        }
        canonical={"/end-to-end-hiring-solution-for-enterprises"}
      />

     <LPHeader/>
      <section className="w-full h-fit relative px-5 md:px-10 slg:px-[60px] lg:px-[90px] py-16 lg:py-20 flex flex-col justify-center items-center">
        <ResponsiveGridLines gradientReplacement={[10, 97, 30, 47, 93, 70, 100, 90, 20, 40]} />
        <div className="w-full max-w-[100vw] lg:max-w-[1440px] grid lg:grid-cols-2 relative z-10 gap-10">
          <div className="w-full max-w-[100vw]">
            <ChangingGradientText />
            <p className="text-base font-lora text-primary font-normal mt-2">
              Empower your HR with AI Agents that onboard talent with background
              verifications, 90% faster and error-free.
            </p>
            <LogoSlider />
          </div>
          <FormLandingPage />
        </div>
      </section>
     <SolutionSection bgcolor={'bg-[#f3f3f5]'} ctatext={'Schedule a Demo'} ctaurl={'#form'}/>
    
      {/* why us Section */}
      <WhyUsSection />
      {/* result section */}
      <ResultSection />
      {/* certification section */}
      <CertificationSection />
      {/* testimonial section */}
      <TestimonialSlider />
      {/* cta section */}
      <CTASection />
      {/* footer */}
     <LPFooter/>
    </div>
  );
}

export default Landingpages;
