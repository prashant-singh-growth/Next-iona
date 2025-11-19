import React from 'react'
import { FaLinkedinIn } from 'react-icons/fa6'

function LPFooter() {
  return (
   <footer className="w-full flex flex-col justify-center items-center bg-themeGray py-10 ">
        <div className="w-full  px-5  md:px-10 lg:px-[90px] justify-center items-center  ">
          <div className="w-full max-w-[1440px] gap-5 md:gap-0  flex flex-col md:flex-row justify-between pb-3 mx-auto">
            <div className="flex flex-col w-full max-w-[400px] space-y-5">
              <img
                src="/assets/pages/landingpage/iona-logo.png"
                className="w-28"
                alt="iona-logo"
              />
              <p className="text-base text-primary font-lora">
                "Trusted by enterprises for scalable, high-volume hiring.<br></br>iona.ai is a full-service AI-powered recruitment platform that automates the entire hiring process—saving time, reducing costs, and ensuring 100% data accuracy."
              </p>
            </div>
            <div className="w-fit flex flex-row justify-center items-center space-x-5 mt-auto">
             
             
              <a
                href="https://www.linkedin.com/company/iona-ai/"
                target="_blank"
                rel="noopener noreferrer"
                className="md:text-2xl text-xl bg-white w-10 h-10 md:w-14 md:h-14 ease-in-out duration-150 rounded-full grid place-items-center text-primary hover:bg-primary hover:text-white"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>
        <div className="w-full border-t border-[#C9C9C9] my-4"></div>
        <div className="w-full px-5 md:px-10 slg:px-[60px] lg:px-[90px] flex  justify-center items-center">
          <div className="w-full max-w-[1440px]  flex flex-col gap-4 md:flex-row justify-between ">
            <p className="text-xs text-black">
              Copyright © {new Date().getFullYear()} | All right reserved.
            </p>
            {/* <p className="text-xs text-black">
              <NavLink to="/privacy">Privacy policy</NavLink> |{" "}
              <NavLink to="/terms">Terms & conditions</NavLink> |{" "}
              <NavLink to="/cookies">Cookie Policy</NavLink>
            </p> */}
          </div>
        </div>
      </footer>
  )
}

export default LPFooter