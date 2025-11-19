'use client'

import React, { useState } from "react";
import Link from 'next/link';

const solutionButtonList = [
  "NovaCount",
  "NovaAssist",
  "NovaTrack",
  "NovaStart",
  "NovaDoc",
  "NovaEngage",
  "NovaTrain",
  "NovaVerify",
  "NovaConnect",
];

const solutionCardData = [
  {
    tabName: "NovaCount",
    title: "Headcount Planning & Monitoring",
    description:
      "Track and manage your workforce seamlessly with real-time visibility into headcount, budgets, and forecasts.",
    list: [
      "Real-time workforce tracking",
      "Automated workforce forecasting",
      "Quick insights into recruitment needs",
    ],
    btnURL: "/novacount",
    image: "1.webp",
  },
  {
    tabName: "NovaAssist",
    title: "Recruiter Co-Pilot",
    description:
      "Automate candidate sourcing, screening, and shortlisting to save time and never miss top talent.",
    list: [
      "AI-powered candidate sourcing and ranking",
      "Automated resume screening",
      "Integration with HR tools",
    ],
    btnURL: "/novaassist",
    image: "2.webp",
  },
  {
    tabName: "NovaTrack",
    title: "NextGen Application Tracking System",
    description:
      "Simplify your recruitment workflow and track candidates through every stage, from application to hire.",
    list: [
      "Automated candidate notifications and updates",
      "Collaborative tools for hiring teams",
      "Real-time candidate progress tracking",
    ],
    btnURL: "/novatrack",
    image: "3.webp",
  },
  {
    tabName: "NovaStart",
    title: "Pre-Boarding of New Hires",
    description:
      "Automate the pre-boarding process using an AI chatbot to ensure new hires are prepared and ready for Day 1.",
    list: [
      "Automated document collection",
      "Pre-boarding task management",
      "Instant preparation for Day 1",
    ],
    btnURL: "/novastart",
    image: "4.webp",
  },
  {
    tabName: "NovaDoc",
    title: "Documentation of New Hires",
    description:
      "Automate document management to ensure compliance and reduce errors in HR paperwork.",
    list: [
      "Contract and compliance form automation",
      "Eliminate manual document chasing",
      "Ensure compliance and timely document collection",
    ],
    btnURL: "/novadoc",
    image: "5.webp",
  },
  {
    tabName: "NovaEngage",
    title: "New Hire Engagement",
    description:
      "Engage new hires before Day 1 with personalized content and welcome experiences.",
    list: [
      "AI-driven engagement and communication",
      "Personalized pre-boarding information",
      "Builds excitement and sets the tone for Day 1",
    ],
    btnURL: "/novaengage",
    image: "6.webp",
  },
  {
    tabName: "NovaTrain",
    title: "Mandatory Trainings & Induction",
    description:
      "Automate training assignments and ensure new hires are ready for success with AI chatbots.",
    list: [
      "Automate training schedules and compliance tracking",
      "Seamless integration with training platforms",
      "Reduce manual effort and compliance risk",
    ],
    btnURL: "/novatrain",
    image: "7.webp",
  },
  {
    tabName: "NovaVerify",
    title: "Background Verifications of New Hires",
    description:
      "Streamline and automate background checks to speed up hiring without compromising quality.",
    list: [
      "Real-time background verification",
      "Comprehensive checks (education, employment, etc.)",
      "Fast processing and instant results",
    ],
    btnURL: "/novaverify",
    image: "8.webp",
  },
  {
    tabName: "NovaConnect",
    title: "Premium Support",
    description:
      "Provide real-time personalized support to keep candidates and HR teams engaged.",
    list: [
      "24/7 dedicated support",
      "Real-time updates for candidates",
      "Instant issue resolution",
    ],
    btnURL: "/novaconnect",
    image: "9.webp",
  },
];

function CompleteSolutionSection() {
  const [activeTab, setActiveTab] = useState("NovaCount");

  const setActiveTabFunc = (btn) => {
    setActiveTab(btn);
  };

  return (
    <section id="solution" className="w-full bg-white flex flex-col py-10 lg:py-16 px-5 md:px-10 slg:px-[60px] lg:px-[90px] justify-center items-center">
      <div className="w-full max-w-[1440px] flex flex-col justify-center items-center gap-[50px]">
        <div className="flex flex-col max-w-[752px] justify-center items-center space-y-4 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-[40px] lg:leading-[50px] text-[#2A2564] font-bold md:font-semibold">
            iona.ai: The Complete Solution for High-Volume Hiring
          </h2>
          <p className="text-base text-[#2A2564] text-center font-lora">
            iona.ai’s NovaSuite automates the hiring process from sourcing to
            onboarding, ensuring faster, more accurate hiring with complete
            compliance.
          </p>
        </div>

        <div className="w-full bg-transparent sm:bg-[#160E381A] rounded-[14px] sm:border border-[#F1EEE3] sm:px-5 sm:py-10 flex flex-col gap-5">
          <div className="w-full hidden sm:grid md:grid-cols-5 slg:grid-cols-7 lg:grid-cols-9 lg:rounded-[14px] overflow-hidden gap-[1px]">
            {solutionButtonList.map((btn, ind) => (
              <button
                key={ind}
                onClick={() => setActiveTabFunc(btn)}
                className={`w-full font-lora font-bold text-base slg:text-sm lg:text-sm xl:text-base py-3 hover:text-white hover:bg-[#160E38] text-center slg:px-1 px-2 transition-all duration-200 ${
                  activeTab === btn
                    ? "text-white bg-[#160E38]"
                    : "bg-[#160E381A] text-[#636262]"
                }`}
              >
                {btn}
              </button>
            ))}
          </div>
          <div className="w-full hidden sm:flex flex-row">
            <div className="w-full bg-[#160E38] rounded-[14px] px-5 pt-5 sm:px-10 sm:pt-10 lg:px-[60px] lg:pt-[60px] pb-[20px] flex flex-col gap-5 lg:gap-10">
              <h3 className="text-2xl sm:text-3xl lg:text-[34px] lg:leading-[42px] font-lora font-bold text-white">
                NovaSuite Modules for High-Volume Hiring
              </h3>
              {solutionCardData.map((item, val) => (
                <div
                  key={val}
                  className={`w-full ${item.tabName === activeTab ? "flex" : "hidden"} flex-col lg:flex-row justify-between`}
                >
                  <div className="w-full flex flex-col lg:max-w-[460px]">
                    <h4 className=" text-xl sm:text-2xl font-lora text-[#FBFBFB]">
                      {item.title}
                    </h4>
                    <img
                      src={`/assets/pages/solutionpage/${item.image}`}
                      alt={item.tabName}
                      className="w-full max-w-[400px]  block lg:hidden pt-6"
                    />
                    <p className="font-lora text-[#FBFBFB] text-base pt-5 pb-4">
                      {item.description}
                    </p>

                    <ul className="font-lora font-normal gap-2 flex flex-col list-disc pl-5 text-[#FBFBFB] text-base">
                      {item.list.map((list, ind) => (
                        <li key={`${item.tabName}-desktop-${ind}`}>{list}</li>
                      ))}
                    </ul>
                    <Link
                      href={`/solutions${item.btnURL}`}
                      className="bg-transparent w-fit border-white border px-5 py-3 text-[14px] text-white  flex flex-row space-x-2 rounded hover:scale-95 ease-in-out duration-150 mt-10"
                    >
                      <span>Learn More</span>{" "}
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M4.16669 10H15.8334M15.8334 10L10.8334 5M15.8334 10L10.8334 15"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </Link>
                  </div>
                  <img
                    src={`/assets/pages/solutionpage/${item.image}`}
                    alt={item.tabName}
                    className="w-full max-w-[471px] object-contain hidden lg:block"
                  />
                </div>
              ))}
            </div>{" "}
          </div>
          <div className="w-full flex sm:hidden flex-col gap-5 ">
            {solutionCardData.map((item, ind) => (
              <div key={ind} className="w-full flex flex-col rounded overflow-hidden ">
                <button
                  onClick={() => setActiveTabFunc(item.tabName)}
                  className={`w-full font-lora font-bold text-lg py-3 text-left pl-5 transition-all hover:text-white hover:bg-[#160E38] duration-200 ${
                    activeTab === item.tabName
                      ? "!text-white bg-[#160E38]"
                      : "bg-[#160E381A] text-[#636262]"
                  }`}
                >
                  {item.tabName}
                </button>
                <div
                  className={`w-full bg-[#160E38]  px-5   pb-[20px] ${item.tabName === activeTab ? "flex" : "hidden"} flex-col  gap-1`}
                >
                  <h3 className="text-xs font-lora font-medium pt-3  rounded-md text-white">
                    NovaSuite Modules for High-Volume Hiring
                  </h3>

                  <div
                    className={`w-full flex flex-col lg:flex-row justify-between`}
                  >
                    <div className="w-full flex flex-col lg:max-w-[460px]">
                      <h4 className=" text-2xl font-lora text-[#FBFBFB]">
                        {item.title}
                      </h4>
                      <img
                         src={`/assets/pages/solutionpage/${item.image}`}
                        alt={item.tabName}
                        className="w-full max-w-[400px] object-contain block lg:hidden pt-4"
                      />
                      <p className="font-lora text-[#FBFBFB] text-base pt-3 pb-2">
                        {item.description}
                      </p>

                      <ul className="font-lora font-normal gap-2 flex flex-col list-disc pl-5 text-[#FBFBFB] text-base">
                        {item.list.map((list, ind) => (
                          <li key={`${item.tabName}-mobile-${ind}`}>{list}</li>
                        ))}
                      </ul>
                      <Link
                        href={`/solutions${item.btnURL}`}
                        className="bg-transparent w-fit border-white border px-5 py-3 text-[14px] text-white  flex flex-row space-x-2 rounded hover:scale-95 ease-in-out duration-150 mt-6"
                      >
                        <span>Learn More</span>{" "}
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M4.16669 10H15.8334M15.8334 10L10.8334 5M15.8334 10L10.8334 15"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </Link>
                    </div>
                  
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default CompleteSolutionSection;
