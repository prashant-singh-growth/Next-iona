import React from "react";
import { FaCheck } from "react-icons/fa6";
import { VscClose } from "react-icons/vsc";
const novaFixesList = [
    {
        icon:` <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 8C0 3.58172 3.58172 0 8 0H32C36.4183 0 40 3.58172 40 8V32C40 36.4183 36.4183 40 32 40H8C3.58172 40 0 36.4183 0 32V8Z"
                  fill="url(#paint0_linear_599_1040)"
                />
                <path
                  d="M14.9997 28.3333C14.5576 28.3333 14.1337 28.1577 13.8212 27.8451C13.5086 27.5326 13.333 27.1087 13.333 26.6666V13.3333C13.333 12.8913 13.5086 12.4673 13.8212 12.1548C14.1337 11.8422 14.5576 11.6666 14.9997 11.6666H21.6663C21.9301 11.6662 22.1914 11.718 22.4351 11.8189C22.6788 11.9199 22.9001 12.0681 23.0863 12.255L26.0763 15.245C26.2637 15.4312 26.4123 15.6527 26.5136 15.8968C26.6149 16.1408 26.6668 16.4024 26.6663 16.6666V26.6666C26.6663 27.1087 26.4907 27.5326 26.1782 27.8451C25.8656 28.1577 25.4417 28.3333 24.9997 28.3333H14.9997Z"
                  stroke="white"
                  strokeWidth="1.66667"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M21.667 11.6666V15.8333C21.667 16.0543 21.7548 16.2663 21.9111 16.4225C22.0674 16.5788 22.2793 16.6666 22.5003 16.6666H26.667"
                  stroke="white"
                  strokeWidth="1.66667"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M18.3337 17.5H16.667"
                  stroke="white"
                  strokeWidth="1.66667"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M23.3337 20.8334H16.667"
                  stroke="white"
                  strokeWidth="1.66667"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M23.3337 24.1666H16.667"
                  stroke="white"
                  strokeWidth="1.66667"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_599_1040"
                    x1="20"
                    y1="0"
                    x2="20"
                    y2="40"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#160E38" />
                    <stop offset="1" stop-color="#2D1F5C" />
                  </linearGradient>
                </defs>
              </svg>`,
        title:" Heavy Admin & <br /> Operational Burden",
        description:"   Enterprises spend excessive time managing vendors, integrations, SLAs, and invoices.",
        details:"Nova Verify eliminates the need for internal management of the BGV process."
    },
    {
        icon:`<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 8C0 3.58172 3.58172 0 8 0H32C36.4183 0 40 3.58172 40 8V32C40 36.4183 36.4183 40 32 40H8C3.58172 40 0 36.4183 0 32V8Z" fill="url(#paint0_linear_599_1081)"/>
<path d="M25.0003 27.5C25.0003 25.7319 24.2979 24.0362 23.0477 22.786C21.7975 21.5358 20.1018 20.8334 18.3337 20.8334C16.5655 20.8334 14.8699 21.5358 13.6196 22.786C12.3694 24.0362 11.667 25.7319 11.667 27.5" stroke="white" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M18.3337 20.8333C20.6348 20.8333 22.5003 18.9679 22.5003 16.6667C22.5003 14.3655 20.6348 12.5 18.3337 12.5C16.0325 12.5 14.167 14.3655 14.167 16.6667C14.167 18.9679 16.0325 20.8333 18.3337 20.8333Z" stroke="white" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M28.3333 26.6666C28.3333 23.8583 26.6667 21.2499 25 19.9999C25.5478 19.5889 25.9859 19.0492 26.2755 18.4285C26.565 17.8078 26.6971 17.1253 26.66 16.4414C26.6229 15.7575 26.4178 15.0933 26.0629 14.5076C25.7079 13.9218 25.2141 13.4326 24.625 13.0833" stroke="white" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
<defs>
<linearGradient id="paint0_linear_599_1081" x1="20" y1="0" x2="20" y2="40" gradientUnits="userSpaceOnUse">
<stop stop-color="#160E38"/>
<stop offset="1" stop-color="#2D1F5C"/>
</linearGradient>
</defs>
</svg>
`,
        title:"Need for a Dedicated </br> Operational Team",
        description:"Use lots of valuable and expensive manpower to coordinate operations, negotiating rates, and reconciling invoices.",
        details:"With Nova Verify, they require zero internal operational overhead."
    },
    {
        icon:`<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 8C0 3.58172 3.58172 0 8 0H32C36.4183 0 40 3.58172 40 8V32C40 36.4183 36.4183 40 32 40H8C3.58172 40 0 36.4183 0 32V8Z" fill="url(#paint0_linear_599_1122)"/>
<path d="M20 11.6666V28.3333" stroke="white" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M24.1667 14.1666H17.9167C17.1431 14.1666 16.4013 14.4739 15.8543 15.0209C15.3073 15.5679 15 16.3097 15 17.0833C15 17.8568 15.3073 18.5987 15.8543 19.1457C16.4013 19.6927 17.1431 20 17.9167 20H22.0833C22.8569 20 23.5987 20.3073 24.1457 20.8542C24.6927 21.4012 25 22.1431 25 22.9166C25 23.6902 24.6927 24.432 24.1457 24.979C23.5987 25.526 22.8569 25.8333 22.0833 25.8333H15" stroke="white" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
<defs>
<linearGradient id="paint0_linear_599_1122" x1="20" y1="0" x2="20" y2="40" gradientUnits="userSpaceOnUse">
<stop stop-color="#160E38"/>
<stop offset="1" stop-color="#2D1F5C"/>
</linearGradient>
</defs>
</svg>
`,
        title:"High Costs of <br /> Verification",
        description:"Individual contracts and scattered processes make background verification expensive at scale.",
        details:"Nova Verify secures attractive rates by aggregating volume and partnering."
    },
    {
        icon:`<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 8C0 3.58172 3.58172 0 8 0H32C36.4183 0 40 3.58172 40 8V32C40 36.4183 36.4183 40 32 40H8C3.58172 40 0 36.4183 0 32V8Z" fill="url(#paint0_linear_599_1160)"/>
<g clip-path="url(#clip0_599_1160)">
<path d="M18.333 20.8333C18.6909 21.3118 19.1475 21.7077 19.6718 21.9941C20.1961 22.2806 20.7759 22.4509 21.3719 22.4936C21.9678 22.5363 22.566 22.4503 23.1258 22.2415C23.6856 22.0327 24.1939 21.7059 24.6163 21.2833L27.1163 18.7833C27.8753 17.9975 28.2953 16.945 28.2858 15.8525C28.2763 14.76 27.8381 13.715 27.0656 12.9424C26.2931 12.1699 25.248 11.7317 24.1555 11.7222C23.063 11.7127 22.0105 12.1327 21.2247 12.8917L19.7913 14.3167" stroke="white" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M21.6666 19.1667C21.3087 18.6882 20.8521 18.2923 20.3278 18.0059C19.8035 17.7194 19.2237 17.5491 18.6277 17.5064C18.0318 17.4637 17.4336 17.5497 16.8738 17.7585C16.314 17.9673 15.8057 18.2941 15.3833 18.7167L12.8833 21.2167C12.1243 22.0025 11.7043 23.055 11.7138 24.1475C11.7233 25.24 12.1615 26.285 12.934 27.0576C13.7065 27.8301 14.7516 28.2683 15.8441 28.2778C16.9366 28.2873 17.9891 27.8673 18.7749 27.1083L20.1999 25.6833" stroke="white" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<linearGradient id="paint0_linear_599_1160" x1="20" y1="0" x2="20" y2="40" gradientUnits="userSpaceOnUse">
<stop stop-color="#160E38"/>
<stop offset="1" stop-color="#2D1F5C"/>
</linearGradient>
<clipPath id="clip0_599_1160">
<rect width="20" height="20" fill="white" transform="translate(10 10)"/>
</clipPath>
</defs>
</svg>
`,
        title:"Cumbersome <br /> Integrations",
        description:"Traditional tools require complex HRMS/ATS connections that slow deployment.",
        details:"Plug into Nova Verify once and access every verification provider through one unified platform."
    },
    {
        icon:`<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 8C0 3.58172 3.58172 0 8 0H32C36.4183 0 40 3.58172 40 8V32C40 36.4183 36.4183 40 32 40H8C3.58172 40 0 36.4183 0 32V8Z" fill="url(#paint0_linear_599_1062)"/>
<path d="M25.8333 19.1666H14.1667C13.2462 19.1666 12.5 19.9128 12.5 20.8333V26.6666C12.5 27.5871 13.2462 28.3333 14.1667 28.3333H25.8333C26.7538 28.3333 27.5 27.5871 27.5 26.6666V20.8333C27.5 19.9128 26.7538 19.1666 25.8333 19.1666Z" stroke="white" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15.833 19.1666V15.8333C15.833 14.7282 16.272 13.6684 17.0534 12.887C17.8348 12.1056 18.8946 11.6666 19.9997 11.6666C21.1047 11.6666 22.1646 12.1056 22.946 12.887C23.7274 13.6684 24.1663 14.7282 24.1663 15.8333V19.1666" stroke="white" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
<defs>
<linearGradient id="paint0_linear_599_1062" x1="20" y1="0" x2="20" y2="40" gradientUnits="userSpaceOnUse">
<stop stop-color="#160E38"/>
<stop offset="1" stop-color="#2D1F5C"/>
</linearGradient>
</defs>
</svg>
`,
        title:"Lack of <br /> Flexibility",
        description:"Enterprises get locked into one vendor with no adaptability.",
        details:"Nova Verify allows you to select,manage, and switch multiple BGV vendors based on role,location or risk profile using a platform."
    },
    {
        icon:`<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 8C0 3.58172 3.58172 0 8 0H32C36.4183 0 40 3.58172 40 8V32C40 36.4183 36.4183 40 32 40H8C3.58172 40 0 36.4183 0 32V8Z" fill="url(#paint0_linear_599_1101)"/>
<g clip-path="url(#clip0_599_1101)">
<path d="M20.0003 28.3333C24.6027 28.3333 28.3337 24.6023 28.3337 20C28.3337 15.3976 24.6027 11.6666 20.0003 11.6666C15.398 11.6666 11.667 15.3976 11.667 20C11.667 24.6023 15.398 28.3333 20.0003 28.3333Z" stroke="white" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M23.3337 23.3333C23.3337 23.3333 22.0837 21.6666 20.0003 21.6666C17.917 21.6666 16.667 23.3333 16.667 23.3333" stroke="white" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M17.5 17.5H17.5083" stroke="white" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M22.5 17.5H22.5083" stroke="white" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<linearGradient id="paint0_linear_599_1101" x1="20" y1="0" x2="20" y2="40" gradientUnits="userSpaceOnUse">
<stop stop-color="#160E38"/>
<stop offset="1" stop-color="#2D1F5C"/>
</linearGradient>
<clipPath id="clip0_599_1101">
<rect width="20" height="20" fill="white" transform="translate(10 10)"/>
</clipPath>
</defs>
</svg>
`,
        title:"Poor Candidate <br /> Experience",
        description:"Lengthy or confusing verification steps frustrate candidates and increase drop-offs.",
        details:"Nova Verify personalizes the candidate journey with transparency, real-time status updates, and intuitive flows."
    },
    {
        icon:`<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 8C0 3.58172 3.58172 0 8 0H32C36.4183 0 40 3.58172 40 8V32C40 36.4183 36.4183 40 32 40H8C3.58172 40 0 36.4183 0 32V8Z" fill="url(#paint0_linear_599_1141)"/>
<g clip-path="url(#clip0_599_1141)">
<path d="M20 15V20L23.3333 21.6667" stroke="white" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M20.0003 28.3333C24.6027 28.3333 28.3337 24.6023 28.3337 20C28.3337 15.3976 24.6027 11.6666 20.0003 11.6666C15.398 11.6666 11.667 15.3976 11.667 20C11.667 24.6023 15.398 28.3333 20.0003 28.3333Z" stroke="white" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<linearGradient id="paint0_linear_599_1141" x1="20" y1="0" x2="20" y2="40" gradientUnits="userSpaceOnUse">
<stop stop-color="#160E38"/>
<stop offset="1" stop-color="#2D1F5C"/>
</linearGradient>
<clipPath id="clip0_599_1141">
<rect width="20" height="20" fill="white" transform="translate(10 10)"/>
</clipPath>
</defs>
</svg>
`,
        title:"Slow Speed and <br /> Delayed Hiring",
        description:"Manual or vendor-dependent verification slows down onboarding.",
        details:"Nova Verify turns verification into an instant, integrated process while maintaining 100% data integrity."
    },
    {
        icon:`<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 8C0 3.58172 3.58172 0 8 0H32C36.4183 0 40 3.58172 40 8V32C40 36.4183 36.4183 40 32 40H8C3.58172 40 0 36.4183 0 32V8Z" fill="url(#paint0_linear_599_1179)"/>
<path d="M17.5 12.5H13.3333C12.8731 12.5 12.5 12.8731 12.5 13.3333V17.5C12.5 17.9602 12.8731 18.3333 13.3333 18.3333H17.5C17.9602 18.3333 18.3333 17.9602 18.3333 17.5V13.3333C18.3333 12.8731 17.9602 12.5 17.5 12.5Z" stroke="white" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M26.667 12.5H22.5003C22.0401 12.5 21.667 12.8731 21.667 13.3333V17.5C21.667 17.9602 22.0401 18.3333 22.5003 18.3333H26.667C27.1272 18.3333 27.5003 17.9602 27.5003 17.5V13.3333C27.5003 12.8731 27.1272 12.5 26.667 12.5Z" stroke="white" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M26.667 21.6666H22.5003C22.0401 21.6666 21.667 22.0397 21.667 22.5V26.6666C21.667 27.1269 22.0401 27.5 22.5003 27.5H26.667C27.1272 27.5 27.5003 27.1269 27.5003 26.6666V22.5C27.5003 22.0397 27.1272 21.6666 26.667 21.6666Z" stroke="white" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M17.5 21.6666H13.3333C12.8731 21.6666 12.5 22.0397 12.5 22.5V26.6666C12.5 27.1269 12.8731 27.5 13.3333 27.5H17.5C17.9602 27.5 18.3333 27.1269 18.3333 26.6666V22.5C18.3333 22.0397 17.9602 21.6666 17.5 21.6666Z" stroke="white" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
<defs>
<linearGradient id="paint0_linear_599_1179" x1="20" y1="0" x2="20" y2="40" gradientUnits="userSpaceOnUse">
<stop stop-color="#160E38"/>
<stop offset="1" stop-color="#2D1F5C"/>
</linearGradient>
</defs>
</svg>
`,
        title:"Fragmented BGV <br /> Ecosystem",
        description:"HR teams manage multiple disconnected tools, losing visibility.",
        details:"Nova Verify consolidates data, provider performance, and reports into a single dashboard with end-to-end visibility."
    },
]
const resultList = [
    {
        title:"3000+",
        description:"Verifications handled monthly"
    },
    {
        title:"90%",
        description:"Improved Hiring Efficiency"
    },
    {
        title:"0%",
        description:"Operations team required"
    },
    {
        title:"80%",
        description:"Reduction in verification costs"
    },
    {
        title:"100%",
        description:"Accuracy in Document Verification"
    },
    {
        title:"90%",
        description:"Faster turnaround time"
    },
   
]

function NovaFixesSection() {

  return (
    <section
    
   
      className={`w-full bg-[linear-gradient(180deg,#FFFFFF_0%,#F8F7FB_100%)]  flex flex-col py-[60px] px-5 md:px-10 slg:px-[60px] lg:px-[90px] justify-center items-center space-y-10`}
    >
      <div className="w-full max-w-[1440px] flex flex-col  justify-center items-center space-y-10">
        <div className="flex flex-col max-w-[1074px] justify-center items-center space-y-4">
          <h2 className="text-3xl md:text-4xl lg:text-[40px] lg:leading-[50px] text-[#2A2564] font-bold md:font-semibold text-center font-lora">
            Why Enterprises Struggle with Onboarding And Background Verification
            & How Nova Verify Fixes Them
          </h2>
        </div>
        <div className="w-full grid grid-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {novaFixesList.map((list,ind)=>(
            <div key={ind} className="w-full hover:shadow-md ease-linear duration-150 hover:-translate-y-1 hover:scale-[0.98] bg-white flex flex-col gap-4 py-[22px] px-[20px] border-2 border-[#160E381A] rounded-[12px]">
            <div className="flex gap-2 flex-row border-b border-[#160E381A] pb-3 items-center">
             <div className="w-10" dangerouslySetInnerHTML={{__html:list.icon}} />
              <h3 className="text-base font-lora text-darkVoilet font-medium" dangerouslySetInnerHTML={{__html:list.title}}/>
            </div>
           
            <div className="flex flex-row gap-1">
              <VscClose className="text-xs  text-red-700 flex-none mt-1"/>
              <p className="text-xs font-lora text-[#5A4E7A]  leading-5">
            {list.description}
            </p>
            </div>
            
            <svg
              className="w-full"
              viewBox="0 0 239 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                width="105.5"
                height="1"
                transform="translate(0 9.5)"
                fill="url(#paint0_linear_599_1051)"
              />
              <path
                d="M116 10H123"
                stroke="#160E38"
                strokeOpacity="0.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M119.5 6.5L123 10L119.5 13.5"
                stroke="#160E38"
                strokeOpacity="0.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <rect
                width="105.5"
                height="1"
                transform="translate(133.5 9.5)"
                fill="url(#paint1_linear_599_1051)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_599_1051"
                  x1="0"
                  y1="0.5"
                  x2="105.5"
                  y2="0.5"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-opacity="0" />
                  <stop offset="0.5" stop-color="#160E38" stop-opacity="0.2" />
                  <stop offset="1" stop-opacity="0" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_599_1051"
                  x1="0"
                  y1="0.5"
                  x2="105.5"
                  y2="0.5"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-opacity="0" />
                  <stop offset="0.5" stop-color="#160E38" stop-opacity="0.2" />
                  <stop offset="1" stop-opacity="0" />
                </linearGradient>
              </defs>
            </svg>
            <div className="flex flex-row gap-1">
              <FaCheck  className="text-xs  text-green-700 flex-none mt-1"/>
             <p className="text-xs font-lora text-darkVoilet leading-5">{list.details}</p>
            </div>
            
          </div>
          ))}
        </div>
        <div className="w-full bg-darkVoilet  flex flex-col justify-center items-center py-[60px] px-5 rounded-xl !mt-[60px] lg:!mt-[80px]">
          <div className="w-full gap-6 max-w-[1032px] flex flex-col justify-center items-center">
              <div className="flex flex-col max-w-[692px] justify-center items-center gap-3">
                <h3 className="font-lora text-2xl text-white text-center">Results that Empower Businesses</h3>
                <p className="text-base font-lora text-white text-center">Nova Verify powers high-volume hiring for enterprises that process thousands of verifications every month — without increasing headcount or complexity.</p>
            </div>
            <div className="w-full grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-6 gap-6 ">
                
                   {resultList.map((item,ind)=>(
                    <div key={ind} className="w-full flex flex-col justify-start items-center gap-1 ">
                     <h4 className="font-lora text-3xl text-white">{item.title}</h4>
                    <p className="font-lora text-sm text-[#FFFFFFB2] text-center">{item.description}</p>
                     </div>
                   ))}
               
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NovaFixesSection;
