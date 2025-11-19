import React from "react";

const novaverifyList = [
  {
    icon: `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21.3337 28V25.3333C21.3337 23.9188 20.7718 22.5623 19.7716 21.5621C18.7714 20.5619 17.4148 20 16.0003 20H8.00032C6.58584 20 5.22928 20.5619 4.22909 21.5621C3.2289 22.5623 2.66699 23.9188 2.66699 25.3333V28" stroke="white" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M21.333 4.17065C22.4767 4.46715 23.4895 5.13501 24.2126 6.0694C24.9356 7.0038 25.3279 8.15184 25.3279 9.33332C25.3279 10.5148 24.9356 11.6628 24.2126 12.5972C23.4895 13.5316 22.4767 14.1995 21.333 14.496" stroke="white" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M29.333 28V25.3333C29.3321 24.1516 28.9388 23.0037 28.2148 22.0698C27.4908 21.1358 26.4772 20.4688 25.333 20.1733" stroke="white" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12.0003 14.6667C14.9458 14.6667 17.3337 12.2789 17.3337 9.33333C17.3337 6.38781 14.9458 4 12.0003 4C9.05481 4 6.66699 6.38781 6.66699 9.33333C6.66699 12.2789 9.05481 14.6667 12.0003 14.6667Z" stroke="white" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

`,
    title: "Expert Management, Zero Effort",
    description: "No need for an internal verification team.",
  },
  {
    icon: `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16 29.3334V22.6667" stroke="white" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 10.6667V2.66675" stroke="white" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M20 10.6667V2.66675" stroke="white" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M24 10.6667V17.3334C24 18.7479 23.4381 20.1045 22.4379 21.1047C21.4377 22.1048 20.0812 22.6667 18.6667 22.6667H13.3333C11.9188 22.6667 10.5623 22.1048 9.5621 21.1047C8.5619 20.1045 8 18.7479 8 17.3334V10.6667H24Z" stroke="white" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

`,
    title: "Unified Plug-and-Play Integration",
    description: "Works with your existing HRMS and ATS.",
  },
  {
    icon:`<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16 2.66675V29.3334" stroke="white" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M22.6667 6.66675H12.6667C11.429 6.66675 10.242 7.15841 9.36684 8.03358C8.49167 8.90875 8 10.0957 8 11.3334C8 12.5711 8.49167 13.7581 9.36684 14.6332C10.242 15.5084 11.429 16.0001 12.6667 16.0001H19.3333C20.571 16.0001 21.758 16.4917 22.6332 17.3669C23.5083 18.2421 24 19.4291 24 20.6667C24 21.9044 23.5083 23.0914 22.6332 23.9666C21.758 24.8417 20.571 25.3334 19.3333 25.3334H8" stroke="white" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
`,
    title:"Immediate Cost Reduction",
    description:"Lower verification costs at higher scale."
  },
  {
    icon:`<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4 16C4 12.8174 5.26428 9.76516 7.51472 7.51472C9.76516 5.26428 12.8174 4 16 4C19.3547 4.01262 22.5747 5.32163 24.9867 7.65333L28 10.6667" stroke="white" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M27.9997 4V10.6667H21.333" stroke="white" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M28 16C28 19.1826 26.7357 22.2348 24.4853 24.4853C22.2348 26.7357 19.1826 28 16 28C12.6453 27.9874 9.42529 26.6784 7.01333 24.3467L4 21.3333" stroke="white" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10.6667 21.3333H4V27.9999" stroke="white" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
`,
    title:"Unrestricted Vendor Flexibility",
    description:"Choose or switch providers anytime."
  },
  {
    icon:`<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.333 18.6666C5.08068 18.6674 4.83331 18.5967 4.6196 18.4625C4.4059 18.3284 4.23464 18.1364 4.12573 17.9088C4.01682 17.6812 3.97472 17.4273 4.00433 17.1768C4.03394 16.9262 4.13404 16.6892 4.293 16.4932L17.493 2.89323C17.592 2.77893 17.7269 2.7017 17.8756 2.6742C18.0243 2.6467 18.178 2.67058 18.3113 2.7419C18.4446 2.81322 18.5498 2.92775 18.6094 3.0667C18.6691 3.20565 18.6798 3.36076 18.6397 3.50656L16.0797 11.5332C16.0042 11.7353 15.9788 11.9526 16.0058 12.1666C16.0327 12.3805 16.1112 12.5848 16.2345 12.7618C16.3577 12.9388 16.522 13.0832 16.7134 13.1828C16.9047 13.2823 17.1173 13.3339 17.333 13.3332H26.6663C26.9186 13.3324 27.166 13.4031 27.3797 13.5373C27.5934 13.6714 27.7647 13.8634 27.8736 14.091C27.9825 14.3186 28.0246 14.5724 27.995 14.823C27.9654 15.0736 27.8653 15.3106 27.7063 15.5066L14.5063 29.1066C14.4073 29.2208 14.2724 29.2981 14.1237 29.3256C13.975 29.3531 13.8214 29.3292 13.688 29.2579C13.5547 29.1866 13.4496 29.072 13.3899 28.9331C13.3302 28.7941 13.3196 28.639 13.3597 28.4932L15.9197 20.4666C15.9952 20.2645 16.0205 20.0472 15.9935 19.8332C15.9666 19.6192 15.8881 19.415 15.7649 19.238C15.6416 19.061 15.4773 18.9165 15.286 18.817C15.0946 18.7175 14.882 18.6659 14.6663 18.6666H5.333Z" stroke="white" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
`,
    title:"90% Cycle Time Reduction",
    description:"Verification cycles reduced by up to 90%."
  },
  {
    icon:`<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4 4V25.3333C4 26.0406 4.28095 26.7189 4.78105 27.219C5.28115 27.719 5.95942 28 6.66667 28H28" stroke="white" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M24 22.6667V12" stroke="white" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M17.333 22.6665V6.6665" stroke="white" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10.667 22.6665V18.6665" stroke="white" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
`,
    title:"Real-Time, Unified Reporting",
    description:"Real-time dashboards and SLA tracking."
  },

];
function NovaVerifySection() {
  return (
    <section
      id="solution"
      className={`w-full bg-white  flex flex-col py-[60px] px-5 md:px-10 slg:px-[60px] lg:px-[90px] justify-center items-center space-y-10`}
    >
      <div className="w-full max-w-[1440px] flex flex-col  justify-center items-center space-y-10">
        <div className="flex flex-col max-w-[1074px] justify-center items-center gap-5">
          <h2 className="text-3xl md:text-4xl lg:text-[40px] lg:leading-[50px] text-[#2A2564] font-bold md:font-semibold text-center font-lora">
            Nova Verify: The Fully Managed BGV Powerhouse, Engineered by iona.ai
          </h2>
          <p className="text-base text-[#2A2564] text-center font-lora">
            Inspired by unwavering clarity and powered by intelligent AI
            automation, Nova Verify reimagines background checks{" "}
            <span className="font-bold">
              as a completely seamless, zero-overhead service
            </span>
            . We handle the complexity; you focus purely on welcoming verified
            talent. Faster turnaround time.
          </p>
          <a
              href="#form"
            className="bg-primary px-4 py-2.5 font-bold leading-5 md:px-5 md:py-3 w-fit text-[14px] text-white flex flex-row space-x-2 rounded hover:scale-95 ease-in-out duration-150"
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
                stroke="#FCFCFC"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-y-12 gap-x-10 lg:gap-x-[250px]  max-w-[938.5px] relative">
          <svg
            className="w-[1px] h-full hidden md:block absolute top-0 left-1/2 -translate-x-1/2"
            viewBox="0 0 1 466"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              width="1"
              height="465.75"
              fill="url(#paint0_linear_599_1281)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_599_1281"
                x1="0.5"
                y1="0"
                x2="0.5"
                y2="465.75"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-opacity="0" />
                <stop offset="0.5" stop-color="#160E38" stop-opacity="0.3" />
                <stop offset="1" stop-opacity="0" />
              </linearGradient>
            </defs>
          </svg>

          {novaverifyList.map((list, ind) => (
            <div
              key={ind}
              className={`w-full flex gap-2 flex-col items-start ${
                ind % 2 === 0 ? "md:items-end" : "md:items-start"
              }`}
            >
              <div
                className="p-2 shadow-lg grid place-items-center bg-darkVoilet rounded-full border-[5px] border-[#D0CFD7]"
                dangerouslySetInnerHTML={{ __html: list.icon }}
              />
              <h3 className="text-xl text-[#2A2564] font-lora">{list.title}</h3>
              <p className="text-base text-[#63696F]">{list.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default NovaVerifySection;
