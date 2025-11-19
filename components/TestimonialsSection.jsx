import { memo } from "react";
import TestimonialCard from "./TestimonialCard";

const TestimonialsSection = memo(() => {
  const testimonials = [
    {
      testimonial: "Following iona.ai's technology has streamlined our onboarding process, even in a high-volume hiring setup. The system handles scale effortlessly and has significantly reduced our offer letter turnaround time. iona.ai's support team bring a rare blend of speed, precision, and reliability. Their partnership goes beyond tech—they work closely with our HR team to drive adoption through hands-on training and support. This collaboration has been key to our success.",
      author: "HR Talent Acquisition",
      position: "Leading Life Insurance Company",
      image: "3",
      animationDirection: "right",
      delay: 0
    },
    {
      testimonial: "Partnering with IONA.AI has elevated our background verification process end-to-end. Their approach is detailed, reliable, and consistently precise—every check, from criminal records to employment history, is handled with care and clarity. With seamless workflows and quick turnaround times, we've been able to onboard top talent faster and with greater confidence. IONA.AI's focus on accuracy and trust makes them a valued partner in maintaining the integrity of our workforce",
      author: "Senior Officer",
      position: "Leading UAE Bank",
      image: "4",
      animationDirection: "left",
      delay: 100
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16" data-aos="fade-up">Stories of Impact</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="h-full"
              data-aos={`fade-${testimonial.animationDirection}`}
              data-aos-delay={testimonial.delay}
            >
              <TestimonialCard 
                testimonial={testimonial.testimonial}
                author={testimonial.author}
                position={testimonial.position}
                image={testimonial.image}
                animationDirection={testimonial.animationDirection}
                delay={testimonial.delay}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

export default TestimonialsSection; 