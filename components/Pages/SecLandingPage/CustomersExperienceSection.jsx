import React from 'react'


const testimonialList = [
    {
        position:"HR Team",
        company:"Acqknowledge",
        testimonial:"Following iona.ai's technology has streamlined our onboarding process and improved efficiency significantly."
        },
    {
        position:"Operations Lead",
        company:"Tech Solutions Inc",
        testimonial:"The support team brings a rare blend of agile, precision, and reliability. The product training was seamless."
        },
    {
        position:"Talent Director",
        company:"Global Enterprises",
        testimonial:"We've been able to drive adoption through hands-on training and support. The collaboration has been key to our success."
        },
]
function CustomersExperienceSection() {
  return (
    <section
    
   
      className={`w-full bg-white  flex flex-col py-[60px] px-5 md:px-10 slg:px-[60px] lg:px-[90px] justify-center items-center space-y-10`}
    >
      <div className="w-full max-w-[1440px] flex flex-col  justify-center items-center space-y-10">
        <div className="flex flex-col max-w-[1074px] justify-center items-center space-y-4">
          <h2 className="text-3xl md:text-4xl lg:text-[40px] lg:leading-[50px] text-[#2A2564] font-bold md:font-semibold text-center font-lora">
          Listen to Our Customer Experiences
          </h2>
        </div>
       <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
{
    testimonialList.map((item,ind)=>(
        <div key={ind} className="w-full flex flex-col bg-[#FAF9FC] border-l-4 border-darkVoilet rounded-xl p-8 gap-7">
            <p className='text-base text-[#63696F]'>"{item.testimonial}"</p>
            <div className="w-full flex flex-col">
                <h3 className='font-semibold text-base text-darkVoilet'>{item.position}</h3>
                <p className='text-sm text-[#5A4E7A]  italic'>{item.company}</p>
            </div>
        </div>
    ))
}
       </div>
      
      </div>
    </section>
  )
}

export default CustomersExperienceSection