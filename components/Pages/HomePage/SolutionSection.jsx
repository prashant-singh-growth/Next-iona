const solutionListJson = [
    {
        "imgurl": "NovaCount",
        "title": "NovaCount – <br/> Headcount Planning and Monitoring",
        "description": "Plan and track your workforce effortlessly, with real-time visibility into headcount, budgets, and forecasts.",
        "url": "/solutions/novacount"
    },
    {
        "imgurl": "NovaAssist",
        "title": "NovaAssist – <br/> Recruiter Co-Pilot",
        "description": "Automates candidate sourcing, screening, and shortlisting, which saves time and ensures you never miss top talent.",
        "url": "/solutions/novaassist"
    },
    {
        "imgurl": "NovaTrack",
        "title": "NovaTrack –<br/> NextGen Application <br/> Tracking System",
        "description": "Seamlessly track and manage candidates through their journey with a state-of-the-art ATS from application to hire.",
        "url": "/solutions/speedboard"
    },
    {
        "imgurl": "NovaStart",
        "title": "NovaStart –<br/> Pre-Boarding of New Hires",
        "description": "Streamlines the pre-boarding process for new hires, preparing them for Day 1 with all essential onboarding tasks.",
        "url": "/solutions/novastart"
    },
    {
        "imgurl": "NovaDoc",
        "title": "NovaDoc –<br/> Documentation of New Hires",
        "description": "Automates all documentation needs for new hires, eliminating manual chasing of documents and enhancing compliance.",
        "url": "/solutions/novadoc"
    },
    {
        "imgurl": "NovaEngage",
        "title": "NovaEngage –<br/> Engagement of New Hires",
        "description": "Engages new hires even before Day 1, setting the tone for a positive and engaging employee journey.",
        "url": "/solutions/novaengage"
    },
    {
        "imgurl": "NovaTrain",
        "title": "NovaTrain –<br/> Mandatory Trainings and Induction of New Hires",
        "description": "Automates mandatory training assignments and induction processes, which reduces manual effort and ensures compliance with training requirements.",
        "url": "/solutions/trainplus"
    },
    {
        "imgurl": "NovaVerify",
        "title": "NovaVerify –<br/> Background Verifications of New Hires",
        "description": "Streamlines and automates background checks, speeding up the verification process for a quicker hiring experience.",
        "url": "/solutions/novaverify"
    },
    {
        "imgurl": "NovaConnect",
        "title": "NovaConnect –<br/> Premium WhatsApp-Based Support",
        "description": "Provides real-time, premium support via WhatsApp, answering questions, resolving issues, and keeping the hiring process smooth.",
        "url": "/solutions/novaconnect"
    }
]

function SolutionSection({ctatext,ctaurl,isLinkActive,bgcolor}) {
  return (
   <section id="solution" className={`w-full ${bgcolor}  flex flex-col py-[60px] px-5 md:px-10 slg:px-[60px] lg:px-[90px] justify-center items-center space-y-10`}>
        <div className="w-full max-w-[1440px] flex flex-col  justify-center items-center space-y-10">
          <div className="flex flex-col max-w-[826px] justify-center items-center space-y-4">
            <h2 className="text-3xl md:text-4xl lg:text-[40px] lg:leading-[50px] text-[#2A2564] font-bold md:font-semibold text-center font-lora">
              iona.ai - The Complete Solution for Precision Hiring at Scale
            </h2>
            <p className="text-base text-[#2A2564] text-center font-lora">
              From recruitment to employee engagement — helping you streamline
              your entire hiring journey with a 100% automated process while
              maintaining 100% data accuracy guarantee and zero compliance
              issues.
            </p>
          </div>
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 slg: xl:gap-12">
            {solutionListJson.map((item, i) => {
              return (
                <div
                  key={i}
                  className="w-full flex h-full  flex-col gap-y-4 md:gap-y-5 xl:gap-y-[30px]"
                >
                  <div className="w-full bg-black relative z-0 py-10 px-3 ">
                    <p
                      className="w-[70%] absolute left-5 bottom-5  text-xl slg:text-lg font-semibold text-white text-left font-lora"
                      dangerouslySetInnerHTML={{ __html: item.title }}
                    />
                    <img
                      src={`/assets/pages/landingpage/${item.imgurl}.svg`}
                      alt={item.imgurl}
                      className="h-28  ml-auto"
                    />
                  </div>
                  <p className="text-base text-black">{item.description}</p>
               {isLinkActive && (
                   <a
                    href={item.url}
                    className="mt-auto font-lora font-medium w-fit text-[14px] leading-5 text-[#252525] flex flex-row space-x-2   ease-in-out duration-150 border-b border-[#252525] pb-2 group"
                  >
                    <span>Learn More</span>{" "}
                    <svg
                      width="14"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="group-hover:translate-x-1 ease-linear duration-150"
                    >
                      <path
                        d="M4.16669 10H15.8334M15.8334 10L10.8334 5M15.8334 10L10.8334 15"
                        stroke="#252525"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
               )}
                </div>
              );
            })}
          </div>
          <a
            href={ctaurl ? ctaurl : "#form"}
            className="bg-primary font-bold leading-5 font-lora px-5 py-3 text-[14px] text-white flex flex-row space-x-2 rounded hover:scale-95 ease-in-out duration-150"
          >
            <span>{ctatext ? ctatext : "Explore Products"}</span>{" "}
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
      </section>
  )
}

export default SolutionSection