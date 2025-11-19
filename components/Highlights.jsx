const Highlights = () => {
    const items = [
      {
        icon: "🌀",
        title: "Innovative Technology",
        desc: "We harness the power of GenAI to automate and optimize hiring at scale",
        aosDelay: "0"
      },
      {
        icon: "💼",
        title: "Industry Expertise",
        desc: "Deep understanding of recruitment challenges and opportunities",
        aosDelay: "150"
      },
      {
        icon: "🤝",
        title: "Candidate Experience",
        desc: "Commitment to a seamless and engaging hiring journey",
        aosDelay: "300"
      },
    ];
  
    return (
      <section className="py-16 px-6 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-10" data-aos="fade-down">What Sets Us Apart</h2>
        <div className="flex flex-col gap-6">
          {items.map((item) => (
            <div
              key={item.title}
              className="bg-card p-6 rounded-xl text-left flex items-start gap-4 border border-[#1C203B]"
              data-aos="fade-right"
              data-aos-delay={item.aosDelay}
            >
              <div className="text-2xl">{item.icon}</div>
              <div>
                <h4 className="font-semibold">{item.title}</h4>
                <p className="text-secondaryText text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default Highlights;
  