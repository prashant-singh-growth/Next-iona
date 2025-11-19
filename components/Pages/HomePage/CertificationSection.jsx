import React from "react";

function CertificationSection() {
  return (
    <section className="w-full bg-themeGray flex flex-col py-12 lg:py-20  px-5 md:px-10 slg:px-[60px] lg:px-[90px] justify-center items-center">
      <div className="w-full max-w-[1440px] grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-[80px] place-content-between">
        {/* Left Text Section */}
        <div className="w-full flex flex-col space-y-5">
          <h2 className="text-3xl md:text-4xl lg:text-[40px] lg:leading-[50px] text-[#2A2564] font-bold md:font-semibold text-left">
            Certified for Your Trust and Security
          </h2>
          <p className="text-base text-primary font-lora">
            At iona.ai, we prioritize your data security and compliance. With
            certifications like ISO 27001, GDPR compliance, and ISO 9001:2015,
            we guarantee secure recruitment processes.
            <br /> <br />
            Our status on the HM Government G-Cloud Supplier list reflects our
            dedication to delivering reliable, secure services.
          </p>
        </div>

        {/* Right Image Section */}
        <div className="w-full flex flex-row flex-wrap justify-center md:justify-start items-center gap-4 sm:gap-6 md:gap-8 lg:gap-5">
          <img
            src="/assets/pages/landingpage/iso.png"
            alt="iso"
            className="w-20 sm:w-24 md:w-28 lg:w-36 h-auto object-contain"
          />
          <img
            src="/assets/pages/landingpage/gdpr.png"
            alt="gdpr"
            className="w-28 sm:w-36 md:w-44 lg:w-52 h-auto object-contain"
          />
          <img
            src="/assets/pages/landingpage/iso1.png"
            alt="iso"
            className="w-20 sm:w-24 md:w-28 lg:w-36 h-auto object-contain"
          />
          <img
            src="/assets/pages/landingpage/hmgov.png"
            alt="hmgov"
            className="w-40 sm:w-48 md:w-56 lg:w-64 h-auto object-contain mt-3 md:mt-0"
          />
        </div>
      </div>
    </section>
  );
}

export default CertificationSection;
