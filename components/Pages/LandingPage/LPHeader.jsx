import React from 'react'

function LPHeader() {
  return (
   <header className="w-full px-5 md:px-10 slg:px-[60px] lg:px-[90px] grid place-items-center fixed top-0 h-[80px] bg-white z-50">
          <div className="w-full max-w-[1440px] flex flex-row justify-between items-center">
            <img
              src="/assets/pages/landingpage/iona-logo.png"
              className="w-28"
              alt="iona-logo"
            />
            <a
              href="#form"
              className="bg-primary font-bold leading-5 font-lora px-5 py-3 text-[14px] text-white flex flex-row space-x-2 rounded hover:scale-95 ease-in-out duration-150"
            >
              <span>Schedule a Demo</span>{" "}
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
            </a>
          </div>
        </header>
  )
}

export default LPHeader