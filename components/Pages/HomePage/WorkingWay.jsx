import React from 'react'

function WorkingWay() {
  return (
   <section className="w-full bg-[#f3f3f5] flex flex-col py-[60px] px-5 md:px-10 slg:px-[60px] lg:px-[90px] justify-center items-center space-y-10">
        <div className="w-full max-w-[1440px] flex flex-col  justify-center items-center space-y-10">
          <div className="flex flex-col max-w-[826px] justify-center items-center space-y-4">
            <h2 className="text-3xl md:text-4xl lg:text-[40px] lg:leading-[50px] text-[#2A2564] font-bold md:font-semibold text-center ">
              The iona.ai Way vs. The Old Way
            </h2>
            <p className="text-base text-[#2A2564] text-center">
              (Simplified, Scalable, and Error-Free Hiring)
            </p>
          </div>
          <img
            src="/assets/pages/homepage/iona-way.webp"
            alt="iona-way"
            title="iona-way"
            className="w-full max-w-[1100px]"
          />
        </div>
      </section>
  )
}

export default WorkingWay