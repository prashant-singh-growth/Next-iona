'use client'

import React from "react";
import {  FaLinkedinIn } from "react-icons/fa6";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Footer() {
  const pathname = usePathname();
  const footerLinks = [
    {
      title: "Company",
      links: [
        { placeHolder: "Home", url: "/" },
        { placeHolder: "About Us", url: "/about" },
        { placeHolder: "Contact Us", url: "/contact" },
      ],
    },
    {
      title: "Platform",
      links: [
        { placeHolder: "NovaCount", url: "/solutions/novacount" },
        { placeHolder: "NovaAssist", url: "/solutions/novaassist" },
        { placeHolder: "NovaTrack", url: "/solutions/speedboard" },
      ],
    },
    {
      title: "",
      links: [
        { placeHolder: "NovaStart", url: "/solutions/novastart" },
        { placeHolder: "NovaDoc", url: "/solutions/novadoc" },
        { placeHolder: "NovaEngage", url: "/solutions/novaengage" },
      ],
    },
    {
      title: "",
      links: [
        { placeHolder: "NovaTrain", url: "/solutions/trainplus" },
        { placeHolder: "NovaVerify", url: "/solutions/novaverify" },
        { placeHolder: "NovaConnect", url: "/solutions/novaconnect" },
      ],
    },
    {
      title: "Resources",
      links: [
        { placeHolder: "Case Study", url: "/case-studies" },
        { placeHolder: "Blog", url: "/blogs" },
        { placeHolder: "Videos", url: "/videos" },
      ],
    },
  ];
  return (
    <footer className="w-full flex flex-col justify-center items-center bg-themeGray py-10 lg:py-20">
      <div className="w-full px-5 md:px-10 slg:px-[60px] lg:px-[90px] justify-center items-center">
        <div className="w-full max-w-[1440px] grid grid-cols-1 md:grid-cols-7 mx-auto gap-10">
          {/* ---- Left Section ---- */}
          <div className="flex flex-col w-full max-w-[400px] gap-5 col-span-3 h-full">
            <div className="flex flex-col gap-5">
              <Link href="/" className="w-fit">
                <img
                  src="/assets/pages/landingpage/iona-logo.png"
                  className="w-28"
                  alt="iona-logo"
                />
              </Link>
              <p className="text-base text-primary font-lora">
                       "Trusted by enterprises for scalable, high-volume hiring.<br></br>iona.ai is a full-service AI-powered recruitment platform that automates the entire hiring process—saving time, reducing costs, and ensuring 100% data accuracy."
              </p>
            </div>

            <div className="w-fit flex flex-row justify-center items-center space-x-5 lg:mt-auto">
              {[
                
                {
                  icon: <FaLinkedinIn />,
                  url: "https://www.linkedin.com/company/iona-ai/",
                },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="md:text-2xl text-xl bg-white w-10 h-10 md:w-14 md:h-14 ease-in-out duration-150 rounded-full grid place-items-center text-primary hover:bg-primary hover:text-white"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* ---- Right Section (Dynamic) ---- */}
          <div className="w-full col-span-4 flex flex-col h-full">
            <div className="w-full grid gap-5 grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
              {footerLinks.map((section, index) => (
                <div key={index} className={`flex flex-col  ${section.title ? "gap-6" : "gap-0 -mt-2 sm:mt-0"} sm:gap-6`}>
                  <p
                    className={`text-xl font-medium font-lora text-[#0D0D0D] ${section.title ? "" : "md:h-[28px]"}`}
                  >
                    {section.title ? section.title : ""}
                  </p>
                  <div className="flex flex-col gap-3">
                    {section.links.map((link, idx) => {
                      const isActive = pathname === link.url;
                      return (
                        <Link
                          key={idx}
                          href={link.url}
                          className={`text-base font-lora  font-medium ease-linear duration-150 hover:translate-x-1 hover:text-primary w-fit ${
                            isActive ? "text-primary   " : "text-[#808080]"
                          }`}
                        >
                          {link.placeHolder}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>

            {/* ---- Newsletter ---- */}
            <div className="w-full flex flex-col gap-3 md:gap-7  mt-6 md:mt-12">
              <h3 className="font-lora text-primary text-xl">
                Subscribe Our Newsletter.
              </h3>
              <div className="flex flex-col md:flex-row gap-3 md:gap-5 w-full max-w-[550px]">
                <input
                  type="email"
                  placeholder="Email address"
                  className="bg-white font-normal rounded-lg w-full py-2 px-6 text-primary text-base outline-none font-lora placeholder:text-[#D6D6D6] border border-transparent focus-within:border-primary"
                />
                <button className="bg-primary font-lora font-medium w-fit px-5 py-3 text-[14px] text-white flex flex-row space-x-2 rounded hover:scale-95 ease-in-out duration-150">
                  <span>Subscribe</span>
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
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ---- Bottom Section ---- */}
      <div className="w-full border-t border-[#C9C9C9] my-4 mt-[60px]"></div>
      <div className="w-full px-5 md:px-10 slg:px-[60px] lg:px-[90px] flex justify-center items-center">
        <div className="w-full max-w-[1440px] flex flex-col gap-4 md:flex-row justify-between">
          <p className="text-xs text-black font-lora">
            Copyright © {new Date().getFullYear()} | All rights reserved.
          </p>
          <p className="text-xs text-black font-lora">
            <Link href="/privacy">Privacy policy</Link> |{" "}
            <Link href="/terms">Terms & conditions</Link> |{" "}
            <Link href="/cookies">Cookie Policy</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
