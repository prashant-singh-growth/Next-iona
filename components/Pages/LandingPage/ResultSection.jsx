import React from 'react'

function ResultSection({headShow = true}) {

  return (
    <section className="w-full bg-white flex flex-col py-10 lg:py-20 px-5 md:px-10 slg:px-[60px] lg:px-[90px] justify-center items-center space-y-10">
        {headShow && (
          <div className="flex flex-col max-w-[826px] justify-center items-center space-y-4">
          <h2 className="text-3xl md:text-4xl lg:text-[40px] lg:leading-[50px] text-[#2A2564] font-bold md:font-semibold text-center  ">
            Results that Empower Businesses
          </h2>
          <p className="text-base text-[#2A2564] text-center font-lora">
           100,000+ elevated experiences delivered & 1.5 million+ accurate automated documentation performed.
          </p>
        </div>
        )}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 slg:grid-cols-4 lg:grid-cols-6 gap-8 lg:gap-12 max-w-[1440px]">
          {[
            {
              counter: "20x",
              title: "Faster Hiring Process",
            },
            {
              counter: "90%",
              title: "Improved Hiring Efficiency",
            },
            {
              counter: "95%",
              title: "Candidate Satisfaction Rate",
            },
            {
              counter: " 98% ",
              title: "Enterprise User Satisfaction Rate",
            },
            {
              counter: "100%",
              title: "Accuracy in Document Verification",
            },
            {
              counter: "100%",
              title: "Compliance in HR & Employment Regulations",
            },
          ].map((item,i) => {
            return (
              <div key={i} className="w-full flex flex-col">
                <p className="lg:text-5xl text-4xl slg:text-4xl text-primary font-medium border-b border-[#D6D6D6] pb-2 mb-3 font-lora">
                  {item.counter}
                </p>
                <p className="text-base text-[#808080] font-lora">
                  {item.title}
                </p>
              </div>
            );
          })}
        </div>
      </section>
  )
}

export default ResultSection