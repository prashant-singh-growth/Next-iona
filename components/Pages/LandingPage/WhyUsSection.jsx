

function WhyUsSection({ ctaText, ctaUrl }) {
  const WhyChooseJson = [
    {
        "image": "chip",
        "title": "AI-Powered Smart <br/> Document Verification",
        "description": "Automate ID and background checks with 99% accuracy, ensuring error-free documentation and faster hiring."
    },
    {
        "image": "db",
        "title": "Seamless <br/> Integrations",
        "description": "Connect effortlessly with your HRMS, ATS, payroll, and other HR tools for unified onboarding."
    },
    {
        "image": "paperless",
        "title": "Paperless <br/> Compliance",
        "description": "Automatically fill statutory forms with zero manual errors, keeping you compliant without the hassle."
    },
    {
        "image": "dashboard",
        "title": "Dashboard <br/> Insights",
        "description": "Gain real-time visibility into onboarding progress and track key metrics to optimize the experience."
    },
    {
        "image": "speed",
        "title": "Speed at <br/> Scale",
        "description": "Onboard hundreds of hires at once, reducing HR overhead while maintaining quality and speed."
    },
    {
        "image": "point",
        "title": "Enhanced Employee <br/> Engagement",
        "description": "Deliver a smooth, interactive, and guided onboarding experience that delights new hires from Day 1."
    },
    {
        "image": "Intelligent",
        "title": "Intelligent <br/> Automation",
        "description": "Automate offers, documents, and approvals so HR can focus on building relationships, not paperwork."
    },
    {
        "image": "roi",
        "title": "Faster <br/> ROI",
        "description": "Cuts HR overhead and expedite employee readiness with automated workflows and smarter processes."
    }
]
  return (
    <section className="w-full bg-white flex flex-col pt-16 pb-10 md:pt-[100px] px-5 md:px-10 slg:px-[60px] lg:px-[90px] justify-center items-center space-y-10">
      <div className="w-full max-w-[1440px] flex flex-col justify-center items-center space-y-10">
        {/* --- Heading --- */}
        <div className="flex flex-col max-w-[826px] justify-center items-center space-y-4">
          <h2 className="text-3xl md:text-4xl lg:text-[40px] lg:leading-[50px] text-[#2A2564] font-bold md:font-semibold text-center">
            Why Enterprises Choose iona.ai?
          </h2>
          <p className="text-base text-[#2A2564] text-center font-lora">
            Automating onboarding and verifications saves up to 90% of time and
            costs on recurring (admin-heavy) HR operations, enabling efficient
            hiring and scalable growth without increasing the budget.
          </p>
        </div>

        {/* --- Cards Grid --- */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 slg:grid-cols-3 gap-8 slg:gap-8 lg:gap-12">
          {WhyChooseJson.map((item, i) => (
            <div
              key={i}
              className="w-full flex flex-col"
            >
              <div className="w-12 h-12 bg-[#F3F3F5] rounded-md grid place-items-center">
                <img
                  src={`/assets/pages/landingpage/${item.image}.svg`}
                  alt={item.title}
                  className="w-8"
                />
              </div>
              <p
                className="text-[22px] leading-[30px] font-semibold text-left font-lora mt-3 md:mt-4 slg:mt-4 lg:mt-[26px]"
                dangerouslySetInnerHTML={{ __html: item.title }}
              />
              <p className="text-base text-[#677D64] mt-2 md:mt-4 slg:mt-4 lg:mt-[24px] font-lora">
                {item.description}
              </p>
            </div>
          ))}
        </div>

     
        <a
          href={ctaUrl ? ctaUrl : "#form"}
          className="bg-primary px-5 py-3 font-bold leading-5 text-[14px] text-white flex flex-row space-x-2 rounded hover:scale-95 ease-in-out duration-150"
        >
          <span>{ctaText ? ctaText : "Schedule a Demo"}</span>
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
  );
}

export default WhyUsSection;
