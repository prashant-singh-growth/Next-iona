import React from "react";
import "./css/HowWeWork.css";


function HowWeWork() {
  return (
    <section className="w-full bg-transparent flex flex-col py-[60px] px-5 md:px-10 slg:px-[60px] lg:px-[90px] justify-center items-center space-y-10 fade-in-section">
      <div className="w-full max-w-[1440px] flex flex-col justify-center items-center space-y-10">
        {/* Heading */}
        <div className="flex flex-col max-w-[650px] justify-center items-center space-y-4">
          <h2 className="text-3xl md:text-4xl lg:text-[40px] lg:leading-[50px] text-[#2A2564] font-bold md:font-semibold text-center">
            See How We Transform Your HR Operations
          </h2>
        </div>

        {/* Image */}
        <img
          src="/assets/pages/homepage/banner-3.png"
          alt="how iona work"
          title="how iona work"
          className="w-full max-w-[1440px] object-contain fade-in-delay"
          loading="lazy"
        />

        {/* Animated Line Section */}
        {/* <div className="w-full h-fit relative">
<div className="p-40 bg-[#5a55e8] absolute top-[30%] left-[30%] rounded-full blur-3xl"></div>

          <div className="min-w-[1000px] min-h-[800px] relative w-full h-full max-h-[800px] max-w-[1000px] mx-auto bg-white/40 z-10">
        
          <img src="/assets/pages/homepage/main.png" alt="" className="absolute w-[350px]  !top-1/2 !-translate-x-1/2 !left-1/2 !-translate-y-1/2 z-[10] box-appear1"/>

      
          <div className="absolute w-[400px] h-[1px] bg-[#5a55e8] top-1/2 -translate-x-1/2 left-1/2 -translate-y-1/2 z-[9] line-draw">
     
            <div className="absolute w-[200px] h-[1px] bg-[#5a55e8] rotate-[65deg] right-0 top-0 translate-x-full origin-left arrow-draw delay-1">
              <img
                src="/assets/pages/homepage/handclick.svg"
                alt=""
                className="absolute origin-right -right-9 -top-28  rotate-[295deg] w-28  object-contain rounded  opacity-0 icon-popup z-[3] "
              />

              <div className="absolute bg-[#5a55e8] bottom-0 right-0 w-[80px] h-[1px] rotate-[113deg] origin-right z-[2] arrow-draw-2">
                <img
                  src="/assets/pages/homepage/ai-agent.svg"
                  alt=""
                  className="absolute min-w-[180px] rotate-[182deg] translate-y-[5rem] origin-left bottom-[0%] left-[15px] opacity-0 sub-image-animation"
                />
              </div>
            </div>
        
            <div className="absolute w-[200px] h-[1px] bg-[#5a55e8] rotate-[290deg] right-0 top-0 translate-x-full origin-left arrow-draw delay-1">
              <img
                src="/assets/pages/homepage/hand.svg"
                alt=""
                className="absolute origin-right -right-3 -top-0  rotate-[70deg] w-24  object-contain rounded  opacity-0 icon-popup z-[3] "
              />

              <div className="absolute bg-[#5a55e8] bottom-0 right-0 w-[80px] h-[1px] rotate-[250deg] origin-right z-[2] arrow-draw-2">
                <img
                  src="/assets/pages/homepage/attention.svg"
                  alt=""
                  className="absolute min-w-[230px] rotate-180 translate-y-[12rem] origin-left bottom-[0%] left-[35px] opacity-0 sub-image-animation"
                />
              </div>
            </div>
          
            <div className="absolute w-[100px] h-[1px] bg-[#5a55e8]  right-0 top-0 translate-x-full origin-left arrow-draw delay-1 arrow-draw-2">
              <img
                src="/assets/pages/homepage/amezon.svg"
                alt=""
                className="absolute min-w-[200px]  translate-y-[6rem] origin-right bottom-[0%] right-[-178px] opacity-0 sub-image-animation"
              />
            </div>

         
            <div className="absolute w-[200px] h-[1px] bg-[#5a55e8] rotate-[65deg] left-0 top-0 -translate-x-full origin-right arrow-draw delay-1">
              <img
                src="/assets/pages/homepage/click-2.svg"
                alt=""
                className="absolute origin-left -left-3 -top-0  rotate-[-68deg] w-28  object-contain rounded   opacity-0 icon-popup z-[3] "
              />

              <div className="absolute bg-[#5a55e8] bottom-0 left-0 w-[80px] h-[1px] rotate-[115deg] origin-left z-[2] arrow-draw-2">
                <img
                  src="/assets/pages/homepage/anayaltics.svg"
                  alt=""
                  className="absolute min-w-[200px] rotate-[180deg] translate-y-[0rem] origin-left bottom-[-130px] right-[-400px] opacity-0 sub-image-animation"
                />
              </div>
            </div>

         
            <div className="absolute w-[200px] h-[1px] bg-[#5a55e8] rotate-[290deg] left-0 bottom-0 -translate-x-full origin-right  arrow-draw delay-1">
              <img
                src="/assets/pages/homepage/check.svg"
                alt=""
                className="absolute origin-left -left-3 -top-[92px]  rotate-[70deg] w-24  object-contain rounded  opacity-0 icon-popup  z-[3] "
              />

              <div className="absolute bg-[#5a55e8] bottom-0 left-0 w-[80px] h-[1px] rotate-[-110deg] origin-left z-[2] arrow-draw-2">
                <img
                  src="/assets/pages/homepage/recruitment.svg"
                  alt=""
                  className="absolute min-w-[400px] rotate-[180deg] translate-y-[0rem] origin-left bottom-[-130px] right-[-750px] opacity-0 sub-image-animation"
                />
              </div>
            </div>
          </div>
        </div>
        </div> */}
      </div>
    </section>
  );
}

export default HowWeWork;
