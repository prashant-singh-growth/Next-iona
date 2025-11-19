import React from "react";

function CertificationSection() {
  return (
    <section
      className={`w-full bg-themeGray  flex flex-col py-[60px] px-5 md:px-10 slg:px-[60px] lg:px-[90px] justify-center items-center space-y-10`}
    >
      <div className="w-full max-w-[1440px] bg-white border-2 border-[#180F3D14] rounded-lg p-5 sm:p-8 lg:p-[50px] grid grid-cols-1 lg:grid-cols-2 gap-20 ">
        <div className="w-full flex flex-col gap-4">
          <div className="flex flex-col sm:flex-row gap-3">
            <svg
              className="w-10  sm:h-[30px] object-contain lg:w-[37px] lg:h-[47px]"
              viewBox="0 0 37 47"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M31.9324 28.5168C31.9324 36.9332 26.0409 41.1413 19.0385 43.5821C18.6718 43.7063 18.2735 43.7004 17.9107 43.5653C10.8915 41.1413 5 36.9332 5 28.5168V16.7339C5 16.2874 5.17734 15.8593 5.49302 15.5436C5.8087 15.2279 6.23684 15.0506 6.68327 15.0506C10.0498 15.0506 14.258 13.0307 17.1869 10.4721C17.5435 10.1674 17.9972 10 18.4662 10C18.9352 10 19.3889 10.1674 19.7455 10.4721C22.6912 13.0475 26.8826 15.0506 30.2491 15.0506C30.6956 15.0506 31.1237 15.2279 31.4394 15.5436C31.7551 15.8593 31.9324 16.2874 31.9324 16.7339V28.5168Z"
                stroke="#2A2564"
                strokeWidth="2.66667"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <h2 className="text-[#2A2564] font-semibold text-3xl lg:text-[40px] leading-tight">
              Certified for Your Trust and Security
            </h2>
          </div>
          <p className="text-[#63696F] text-base">
            We uphold world-class data security and compliance. With
            certifications like ISO 27001, GDPR compliance, and the UK ISO/IEC
            27001:2022, we guarantee rigorous recruitment processes. <br />{" "}
            <br /> Our status on the HM Government G-Cloud Supplier list
            reflects our dedication to delivering reliable, secure services.
          </p>
        </div>
        <div className="w-full flex  ">
          <div className="flex w-fit   flex-row flex-wrap justify-center md:justify-start items-center gap-4 sm:gap-6 md:gap-8 lg:gap-5">
            <img
              src="/assets/pages/landingpage/iso.png"
              alt="iso"
              className="w-16 sm:w-[110px]  object-contain"
            />
            <img
              src="/assets/pages/landingpage/gdpr.png"
              alt="gdpr"
              className="w-20 sm:w-[150px]  h-auto object-contain"
            />
            <img
              src="/assets/pages/landingpage/iso1.png"
              alt="iso"
              className="w-16 sm:w-[110px] object-contain"
            />
            <img
              src="/assets/pages/landingpage/hmgov.png"
              alt="hmgov"
              className="w-40 sm:w-48 md:w-56 lg:w-64 h-auto object-contain mt-3 md:mt-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default CertificationSection;
