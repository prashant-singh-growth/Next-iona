import React from 'react'
 const logos = [
    "/assets/pages/landingpage/metropolis.png",
    "/assets/pages/landingpage/fab.png",
    "/assets/pages/landingpage/ness.png",
    "/assets/pages/landingpage/hdfc.png",
    "/assets/pages/landingpage/birla-sun.png",
    "/assets/pages/landingpage/aditya.png",
  ];
function ClientBadgeSection() {
  return (
  <section className="w-full flex flex-col mt-[60px] pb-5 overflow-hidden gap-5 justify-center items-center px-5 md:px-10">
        <p className="text-sm font-normal font-sora text-center text-[#808080] font-lora">
          Trusted by leading brands and customers
        </p>
        <div className="flex  gap-5 whitespace-nowrap   flex-wrap justify-center items-center">
        {[...logos].map((logo, i) => (
<img
  key={i}
  src={logo}
  alt={`logo-${i}`}
  className="
    transition-all
    h-10 sm:h-10 md:h-14 lg:h-16
    px-3 sm:px-4 md:px-6 lg:px-[34px]
    py-1.5 sm:py-2 md:py-3 lg:py-[14px]
    border border-[#D6D6D6]
    rounded-md sm:rounded-lg md:rounded-xl lg:rounded-[20px]
    object-contain

    w-auto max-w-max inline-block 
  "
/>

))}

        </div>
      </section>
  )
}

export default ClientBadgeSection