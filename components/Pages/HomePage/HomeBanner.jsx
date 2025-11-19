import React from 'react'
import ResponsiveGridLines from '../../utils/ResponsiveGridLines'
import Link from 'next/link'

function HomeBanner() {
  return (
     <section className="w-full h-fit relative px-5 md:px-10 slg:px-[60px] lg:px-[90px] pt-10 pb-16 md:py-16 lg:py-20 flex flex-col justify-center items-center">
        <ResponsiveGridLines gradientReplacement={[10, 37, 50, 47, 93, 70, 100, 90, 50, 40]} />
        <div className="w-full max-w-[100vw] lg:max-w-[1440px] grid lg:grid-cols-2 place-items-center relative z-10 gap-10">
          <div className="w-full max-w-[100vw]">
            <h1 className="text-4xl font-bold md:text-5xl leading-tight slg:text-5xl lg:text-[58px] lg:leading-[64px] text-black/80 flex flex-col text-left ">
              Supercharging Enterprise Hiring at Scale with Agentic AI
            </h1>
            <p className="text-base font-lora text-primary font-normal mt-5">
              Automate your hiring from start to finish—background checks,
              document verification, onboarding—ensuring 100% accuracy and zero
              compliance issues, guaranteed!
            </p>
            <div className="w-full flex flex-col sm:flex-row justify-between md:justify-start gap-5 mt-8 md:mt-12 lg:mt-12 slg:mt-10 ">
              <Link
                href="/contact"
                className="bg-primary px-4 py-2.5 font-bold leading-5 md:px-5 md:py-3 w-fit text-[14px] text-white flex flex-row space-x-2 rounded hover:scale-95 ease-in-out duration-150"
              >
                <span>Book a Demo</span>{" "}
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.16669 10H15.8334M15.8334 10L10.8334 5M15.8334 10L10.8334 15"
                    stroke="#FCFCFC"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
              <a
                href="#solution"
                className="border-primary font-bold leading-5 border w-fit bg-white px-4 py-2.5 md:px-5 md:py-3 text-[14px] text-primary flex flex-row space-x-2 rounded hover:scale-95 ease-in-out duration-150"
              >
                <span>Explore Modules</span>{" "}
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.16669 10H15.8334M15.8334 10L10.8334 5M15.8334 10L10.8334 15"
                    stroke="#2a2564"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          </div>
          <img
            src="/assets/pages/homepage/home-banner.webp"
            alt="home banner"
            className=" w-full object-contain "
            loading='lazy'
          />
        </div>
      </section>
  )
}

export default HomeBanner