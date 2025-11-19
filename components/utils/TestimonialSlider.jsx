import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

function TestimonialSlider() {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      headshoturl: "client.jpg",
      position: "HR Talent Acquisition",
      company: "Leading Life Insurance Company",
      testimony:
        "Following iona.ai's technology has streamlined our onboarding process, even in a high-volume hiring setup. The system handles scale effortlessly and has significantly reduced our offer letter turnaround time. iona.ai's support team brings a rare blend of speed, precision, and reliability. Their partnership goes beyond tech—they work closely with our HR team to drive adoption through hands-on training and support. This collaboration has been key to our success.",
    },
    {
      headshoturl: "client.jpg",
      position: "Senior Officer",
      company: "Leading UAE Bank",
      testimony:
        "Partnering with iona.ai has elevated our background verification process end-to-end. Their approach is detailed, reliable, and consistently precise—every check, from criminal records to employment history, is handled with care and clarity. With seamless workflows and quick turnaround times, we've been able to onboard top talent faster and with greater confidence.",
    },
    {
      headshoturl: "client.jpg",
      position: "Chief Human Resources Officer",
      company: "Fast-growing Consumer Brand in India",
      testimony:
        "What impressed us most was how the system handled complex regulatory requirements specific to healthcare hiring. We've not only accelerated our hiring timeline but dramatically improved compliance, which is absolutely critical in our industry.",
    },
    {
      headshoturl: "client.jpg",
      position: "HR Director",
      company: "Leading Insurance Provider",
      testimony:
        "iona.ai has significantly improved our onboarding process and delivered with 0% downtime. We are now looking forward to implementing iona.ai across other entities as well.",
    },
  ];

  const handleRadioClick = (index) => {
    if (swiperRef.current && swiperRef.current.slideToLoop) {
      swiperRef.current.slideToLoop(index);
    }
  };

  return (
    <section className="w-full bg-white flex flex-col py-10 justify-center items-center">
      <div className="w-full px-5 md:px-10 slg:px-[60px] lg:px-[90px] lg:max-w-[1440px] mx-auto text-center">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl lg:text-[40px] lg:leading-[50px] text-[#2A2564] font-bold mb-10">
          Listen to Our Customer Experiences
        </h2>

        {/* Swiper Section */}
        <div className="w-full mx-auto overflow-hidden pb-6">
          <Swiper
            modules={[Autoplay]}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: true,
            }}
            spaceBetween={24}
            breakpoints={{
              0: { slidesPerView: 1, spaceBetween: 16 },
              768: { slidesPerView: 2, spaceBetween: 20 }, 
              1024: { slidesPerView: 2, spaceBetween: 24 },
            }}
            className="!m-0 w-full overflow-hidden"
          >
            {testimonials.map((item, i) => (
              <SwiperSlide
                key={i}
                className="flex flex-col justify-between border border-[#869085] rounded bg-white  shadow-sm transition-all duration-300  p-5  sm:p-6 sm:px-8 lg:py-10 h-full min-h-[450px] ssm:min-h-[350px] sm:min-h-[300px] md:min-h-[480px] lg:min-h-[320px]"
              >
                <div className="flex items-start gap-4 mb-4">
                  {/* <img
                    src={`/assets/pages/landingpage/${item.headshoturl}`}
                    alt={item.company}
                    className="w-10 h-10 rounded-full object-cover"
                  /> */}
                  <div className="text-left">
                    <p className="text-base font-bold text-black/80 font-lora">
                      {item.position}
                    </p>
                    <p className="text-sm text-left text-[#7F7F7F] font-lora">
                      {item.company}
                    </p>
                  </div>
                </div>
                <p className="text-base text-left text-black/80 font-lora font-medium leading-relaxed">
                  “{item.testimony}”
                </p>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Slider Indicators */}
          <div className="flex gap-3 mt-6 justify-center">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => handleRadioClick(i)}
                className={`h-2.5 transition-all duration-200 ${
                  i === activeIndex
                    ? "bg-[#2A2564] w-6 rounded-md"
                    : "bg-[#B5B5B5] w-2.5 rounded-full"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default TestimonialSlider;
