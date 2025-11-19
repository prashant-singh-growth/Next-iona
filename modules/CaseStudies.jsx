'use client'

// src/pages/CaseStudies.jsx
import { useState } from "react";
import { motion } from "framer-motion";
import Link from 'next/link';
import SeoHeader from "../components/utils/SeoHeader";

function CaseStudies() {
  const [selectedCaseStudy, setSelectedCaseStudy] = useState(null);

  // Case study data
  const caseStudies = [
    {
      id: 1,
      title: "From Prospect to Productive Powerhouse",
      subtitle: "How a Leading Life Insurance Titan has Revolutionized Hiring",
      summary: "Faced with the imperative of scaling its salesforce by a staggering 500 professionals monthly to fuel ambitious expansion, a leading Indian life insurance titan sought more than just a software solution. They demanded a complete, ironclad service capable of delivering quality hiring at unprecedented speed and scale. iona.ai answered this call with a revolutionary, end-to-end automated hiring journey, powered by cutting-edge AI/ML. We transform their recruitment from a cumbersome manual process plagued by third-party dependencies and administrative burdens into a streamlined, error-free engine of growth. The result? A dramatic 90% reduction in onboarding turnaround time, 95% accuracy in AI-driven document verification, and an astounding 89% plummet in candidate onboarding costs, catapulting their hiring efficiency into a new era.",
      image: `/assets/cstudy.jpg`,
      industry: "Insurance",
      stats: [
        { value: "90%", label: "Faster Onboarding" },
        { value: "95%", label: "AI Document Accuracy" },
        { value: "89%", label: "Cost Reduction" }
      ],
      content: `
        <h3 class="text-2xl font-bold mb-4">About the Client: A Legacy of Trust, Poised for Unprecedented Expansion</h3>
        <p>
          A distinguished Indian life insurance provider, forged from the robust partnership of a prominent Indian conglomerate and a globally recognized financial services organization, has been a cornerstone of India's burgeoning life insurance sector for over a decade. With a formidable presence spanning over 500 cities and a network of more than 560 branches, the client ensures unwavering accessibility to a diverse portfolio of life insurance solutions.
        </p>
        <p class="mb-4">
          Their comprehensive offerings, ranging from vital Term Insurance Plans to strategic Savings and Retirement options, alongside innovative Unit Linked Insurance Plans (ULIPs), Child Plans, and Health Plans, cater to the multifaceted financial aspirations of millions across India. Driven by ambitious growth objectives, the client embarked on a mission to rapidly augment its salesforce, necessitating the efficient and accurate onboarding of 500 new sales professionals each month.
        </p>

        <h3 class="text-2xl font-bold mb-4">The Challenge: The Bottleneck of Manual Processes in a Race against Time</h3>
        <p>
          To realize their ambitious growth trajectory, the client confronted a critical bottleneck in their hiring process. The sheer volume of frontline sales recruitment, demanding the onboarding of 500 individuals monthly across a vast geographical landscape, was straining their existing infrastructure to its breaking point. The predominantly manual nature of their hiring workflow, heavily reliant on multiple third-party vendors, was proving to be a significant impediment.
        </p>
        <p>
          HR teams were overwhelmed by a deluge of administrative tasks, inevitably leading to human errors and inconsistencies in critical hiring data. Furthermore, the cumbersome process of manual document submission (encompassing over 25 essential documents per candidate) was time-consuming and frustrating for both the HR personnel and the prospective hires.
        </p>
        <p class="mb-4">
          Candidates often found themselves navigating a labyrinth of queries with the Recruitment Process Outsourcing (RPO) team, further exacerbating delays and impacting the overall candidate experience. The need for a solution that could deliver not just speed and scale, but also unwavering accuracy and a superior candidate journey, became paramount.
        </p>

        <h3 class="text-2xl font-bold mb-4">The Solution: Architecting an Intelligent Hiring Ecosystem</h3>
        <p>
          iona.ai stepped in to architect a paradigm shift in the client's hiring process, deploying a completely automated journey powered by the latest advancements in AI/ML. From the initial job posting to the final background verification, the entire spectrum of recruitment was reimagined and automated.
        </p>
        <p>
          Our AI-driven engine seamlessly manages digital document submission and executes real-time, hyper-accurate document verification, ensuring 100% data integrity. Real-time offer generation, requiring minimal human input, dramatically accelerated the final stages of the hiring process.
        </p>
        <p class="mb-4">
          To ensure a consistent and positive candidate experience across diverse linguistic demographics, iona.ai implemented a multilingual portal and an AI-powered chatbot, providing instant support and guidance. The automation of previously manual tasks freed up the HR team to focus on strategic initiatives, while a 24/7 AI-powered chatbot addressed candidate queries in real-time, eliminating delays and enhancing engagement.
        </p>

        <h3 class="text-2xl font-bold mb-4">Implementation: A Foundation of Expertise, Forged in Challenging Times</h3>
        <p>
          Adopting a first-principles approach, iona.ai meticulously analyzed every facet of the client's existing hiring process, leaving no stone unturned in our pursuit of optimization. As our inaugural client, the stakes were high, but our deep-rooted process expertise, cutting-edge digital competence, and unwavering client support enabled us to hit the ground running with remarkable speed.
        </p>
        <p class="mb-4">
          Launching amidst the unprecedented challenges of the COVID-19 pandemic in August 2021, we delivered a fully automated new hire onboarding. This remote onboarding tool, now known as NovaStart: Pre-Boarding of New Hires and NovaDoc: Documentation of New Hires, proved instrumental in enabling the client to seamlessly transition to remote onboarding. Building on this initial success, we have consistently expanded our offerings, adding a new module each year.
        </p>
        <p class="mb-4">
          Today, in 2025, a comprehensive hiring suite, encompassing everything from Headcount Planning and Monitoring to Integrated Background Verification, stands as a testament to our commitment. iona.ai has delivered on its promise: a true "Prospect to Productive" hiring automation solution, meticulously tailored to the client's evolving needs.
        </p>

        <h3 class="text-2xl font-bold mb-4">Results: Quantifiable Transformation, Unprecedented Efficiency</h3>
        <p class="mb-4">
          The implementation of iona.ai's intelligent automation has yielded transformative results for the client, demonstrating a profound impact across key hiring metrics:
        </p>
        <ul class="list-disc pl-6 mb-6">
          <li><strong>90% Decrease in Onboarding Turnaround Time (TAT):</strong> Slashing the time taken to onboard new hires by an astounding 90%, enabling the client to rapidly integrate new talent into their salesforce.</li>
          <li><strong>95% AI Accuracy in Document Verifications:</strong> Achieving near-perfect accuracy in the verification of over 25 critical candidate documents, significantly reducing errors and ensuring compliance.</li>
          <li><strong>90% Candidates Indicated Their Experience as 'Excellent' in Surveys:</strong> Elevating the candidate journey to an exceptional level, fostering positive brand perception and attracting top talent.</li>
          <li><strong>89% Reduction in Candidate Onboarding Cost:</strong> Delivering substantial cost savings by automating manual processes and optimizing resource allocation.</li>
          <li><strong>90% Reduction in Candidate Dropout Rates:</strong> Enhancing candidate engagement and streamlining the onboarding process, leading to a dramatic decrease in attrition.</li>
        </ul>

        <blockquote class="p-6 bg-blue-gradient text-white rounded-lg mb-8 italic">
          "iona.ai has significantly improved the Onboarding process and has been able to deliver with 0% down time. Considering this success, we are looking forward to implement iona.ai for other entities as well."
          <p class="mt-2 font-semibold text-white">- HR Director, Leading Insurance Provider</p>
        </blockquote>
      `
    },
    {
      id: 2,
      title: "Transforming Recruitment: How iona.ai Is Simplifying Hiring For A Leading Consumer Brand",
      subtitle: "Scaling Feet-on-Street Recruitment for Nationwide Growth",
      summary: "Faced with the herculean task of onboarding 300–400 Feet-on-Street (FOS) associates every month across the country, the Assistant General Manager–HR at one of India's most dynamic consumer brands knew the traditional recruitment playbook would no longer suffice. These associates (key touchpoints for thousands of dealers, contractors, and customers) were mission-critical to the brand's ambitious growth goals. But without the technology to scale and streamline hiring, the process was buckling under pressure.That's when iona.ai stepped in. Through FindX, iona.ai's next-gen, agentic AI solution, the company overhauled its high-volume recruitment operations, bringing speed, structure, and intelligence into a once-manual process. The result? A fully optimized, insight-driven hiring engine built for India-scale recruitment",
      image: `/assets/cstudy2.jpg`,
      industry: "Consumer Goods",
      stats: [
        { value: "4X", label: "Faster JD Turnaround" },
        { value: "70%", label: "Less Manual Screening" },
        { value: "3X", label: "Interview Coordination Efficiency" }
      ],
      content: `
        <h3 class="text-2xl font-bold mb-4">About the Client: Building India's Fastest-Growing Consumer Brand</h3>
        <p class="mb-4">
          A homegrown powerhouse in the Indian consumer goods space, the client is on a meteoric rise. With an ever-expanding distribution footprint, the brand is racing to become the second-largest in its category nationwide. To support this scale, they rely on a vast network of FOS associates, the face of the brand who drive dealer relationships and customer connections daily. Their ability to hire hundreds of field professionals every month is vital to achieving market dominance.
        </p>
        
        <h3 class="text-2xl font-bold mb-4">The Challenge: Scaling Talent Without Losing Control</h3>
        <p class="mb-4">To meet monthly hiring targets, the HR team faced several systemic bottlenecks:</p>
        <ul class="list-disc pl-6 mb-4">
          <li><strong>Manual JD Creation</strong> slowed time-to-hire due to inconsistencies and delays across regions.</li>
          <li><strong>Exhaustive Resume Screening</strong> across disparate sources drained productivity.</li>
          <li><strong>Overwhelming Interview Coordination</strong> with over 1,200 interviews monthly, led to endless follow-ups and scheduling chaos.</li>
          <li><strong>Error-Prone Trackers</strong> made performance monitoring difficult and unreliable.</li>
          <li><strong>No Unified View</strong> of hiring metrics hampered agility and transparency.</li>
        </ul>
        <p class="mb-4">
          In a high-stakes, high-volume hiring environment, these inefficiencies threatened not just timelines but also candidate experience and hiring quality.
        </p>
        
        <h3 class="text-2xl font-bold mb-4">The Solution: Painting a Bright Future with FindX and AI-Led Hiring</h3>
        <p class="mb-4">
          Enter FindX by iona.ai—an AI-powered, agentic hiring platform built to eliminate friction and elevate results. Using intuitive, human-language prompts, FindX empowered the AGM-HR's team to redefine its entire recruitment workflow, turning a labour-intensive operation into an intelligent, end-to-end hiring ecosystem.
        </p>
        <p class="mb-4">Here's how FindX delivered impact:</p>
        <ul class="list-disc pl-6 mb-4">
          <li><strong>AI-Powered Job Descriptions:</strong> Auto-generates accurate, role-specific JDs tailored by region and function, ensuring consistency and speed.</li>
          <li><strong>Intelligent Resume Matching:</strong> Automated candidate screening from multiple channels, instantly surfacing top talent.</li>
          <li><strong>Joining Risk Predictions:</strong> Identifies early signals of potential dropouts or offer rejections, helping teams act proactively.</li>
          <li><strong>Centralized Candidate Profiles:</strong> Offers complete visibility into candidate history, past interviews, feedback, and selection outcomes.</li>
          <li><strong>Automated Interview Scheduling:</strong> Sends smart notifications and reminders to candidates and interviewers, eliminating the need for manual follow-ups.</li>
          <li><strong>Real-Time Dashboards:</strong> Unified hiring pipeline views, with live data on offer rollouts, acceptances, and recruiter performance.</li>
          <li><strong>Actionable Analytics:</strong> Provides deep insights into selection ratios, funnel drops, offer declines, and interview efficiency.</li>
          <li><strong>Accurate Candidate Data:</strong> Automated documentation ensures zero errors, increasing confidence and compliance.</li>
          <li><strong>Time & Resource Efficiency:</strong> With manual tasks eliminated, the HR team now focuses on strategic hiring and relationship building.</li>
          <li><strong>Aligned to Growth Vision:</strong> The recruitment transformation directly supports the company's mission to become a market leader in its segment.</li>
        </ul>
        
        <h3 class="text-2xl font-bold mb-4">Implementation: Built for Scale, Designed for Agility</h3>
        <p class="mb-4">
          FindX was deployed with minimal disruption. The platform's natural-language interface ensured ease of use for recruiters, while its seamless integration with existing systems ensure no duplication of effort. Within weeks, the HR team had full control over a sophisticated, AI-powered hiring engine without the need for steep learning curves or heavy IT involvement.
        </p>
        
        <h3 class="text-2xl font-bold mb-4">Results: A Recruitment Revolution at Scale</h3>
        <p class="mb-4">The client now experiences:</p>
        <ul class="list-disc pl-6 mb-4">
          <li><strong>4X Faster JD Turnaround Time</strong></li>
          <li><strong>70% Reduction in Manual Screening Hours</strong></li>
          <li><strong>3X Improvement in Interview Coordination Efficiency</strong></li>
          <li><strong>Real-time Visibility Across All Hiring Metrics</strong></li>
          <li><strong>Significantly Lower Dropout and Rejection Rates</strong></li>
          <li><strong>Higher Candidate Satisfaction and Brand Perception</strong></li>
        </ul>
        
        <blockquote class="p-6 bg-blue-gradient text-white rounded-lg mb-8 italic">
          "Our manual hiring process couldn't keep up with the volume, making it hard to track key metrics like interviews, selection ratios, and offer rejections. We chose iona.ai for its simplicity, cost-effectiveness, and customization options. The analytics fetched from iona.ai allow my team to work quickly and more efficiently."
          <p class="mt-2 font-semibold text-white">- AGM-HR, a fast-growing consumer brand in India</p>
        </blockquote>
      `
    },
    {
      id: 3,
      title: "Scaling with Precision",
      subtitle: "How a Fast-Growing Healthcare Network Cut Onboarding Time by 83%",
      summary: "A rapidly expanding healthcare network leveraged our AI-driven solution to streamline credential verification and build specialized teams while ensuring compliance.",
      image: `/assets/cstudy3.jpg`,
      industry: "Healthcare",
      stats: [
        { value: "83%", label: "Faster Onboarding" },
        { value: "95%", label: "Documentation Accuracy" },
        { value: "$2.1M", label: "Annual Savings" }
      ],
      content: `
        <h3 class="text-2xl font-bold mb-4">Client Overview</h3>
        <p class="mb-4">A rapidly expanding healthcare network with 28 facilities across three states was undertaking an ambitious growth initiative. Their five-year plan included opening 15 new specialized care centers and expanding their workforce by over 4,000 healthcare professionals, including specialized nurses, physicians, technicians, and administrative staff.</p>
        
        <h3 class="text-2xl font-bold mb-4">The Challenge</h3>
        <p class="mb-4">The healthcare network faced several significant challenges in their hiring process:</p>
        <ul class="list-disc pl-6 mb-4">
          <li>Complex credential verification requirements for medical professionals causing major delays</li>
          <li>Decentralized hiring processes across different facilities leading to inconsistent standards</li>
          <li>Critical compliance and regulation adherence needed for healthcare accreditation</li>
          <li>Average time-to-fill for specialized roles exceeding 120 days</li>
          <li>30% of qualified candidates dropping out due to lengthy onboarding processes</li>
          <li>Increasing competition for qualified healthcare professionals in key markets</li>
        </ul>
        
        <h3 class="text-2xl font-bold mb-4">The Solution</h3>
        <p class="mb-4">We deployed our healthcare-specific hiring and onboarding solution with several specialized components:</p>
        <ul class="list-disc pl-6 mb-4">
          <li><strong>AI-powered credential verification:</strong> Automated authentication of licenses, certifications, and educational qualifications</li>
          <li><strong>Compliance documentation automation:</strong> Streamlined collection and verification of mandatory healthcare documentation</li>
          <li><strong>Centralized hiring platform:</strong> Unified recruiting across all facilities while maintaining location-specific requirements</li>
          <li><strong>Specialized healthcare candidate matching:</strong> Matching algorithms specifically designed for clinical and support roles</li>
          <li><strong>Digital onboarding portal:</strong> Enabling new hires to complete onboarding requirements remotely and securely</li>
        </ul>
        
        <h3 class="text-2xl font-bold mb-4">Implementation</h3>
        <p class="mb-4">The implementation was carefully planned to ensure minimal disruption to ongoing operations:</p>
        <p class="mb-4"><strong>Phase 1:</strong> Discovery and system design with key stakeholders from HR, compliance, and clinical leadership</p>
        <p class="mb-4"><strong>Phase 2:</strong> Integration with existing HRMS and credential verification systems</p>
        <p class="mb-4"><strong>Phase 3:</strong> Pilot program across three facilities focusing on nursing positions</p>
        <p class="mb-4"><strong>Phase 4:</strong> Full system deployment with continuous monitoring and compliance checks</p>
        
        <h3 class="text-2xl font-bold mb-4">Quantified Results</h3>
        <ul class="list-disc pl-6 mb-4">
          <li><strong>83% Reduction in Onboarding Time:</strong> From 42 days to just 7 days for fully verified and compliant onboarding</li>
          <li><strong>66% Decrease in Time-to-Fill Critical Roles:</strong> Specialized positions now filled in 41 days vs. previous 120 days</li>
          <li><strong>95% Documentation Accuracy:</strong> Significant reduction in compliance risks through automated verification</li>
          <li><strong>78% Decrease in Candidate Dropout Rate:</strong> Streamlined process kept qualified candidates engaged</li>
          <li><strong>$2.1M Annual Savings:</strong> Through reduced reliance on temporary staffing and improved efficiency</li>
        </ul>
        
        <blockquote class="p-6 bg-blue-gradient text-white rounded-lg mb-8 italic">
          "What impressed us most was how the system handled the complex regulatory requirements specific to healthcare hiring. We've not only accelerated our hiring timeline but dramatically improved compliance, which is absolutely critical in our industry. The system has been a game-changer for our expansion plans."
          <p class="mt-2 font-semibold text-white">- Chief Human Resources Officer</p>
        </blockquote>
      `
    }
  ];

  // Animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } }
  };

  // Handle opening a case study
  const openCaseStudy = (id) => {
    setSelectedCaseStudy(caseStudies.find(study => study.id === id));
    // Prevent scrolling when modal is open
    document.body.style.overflow = "hidden";
  };

  // Handle closing a case study
  const closeCaseStudy = () => {
    setSelectedCaseStudy(null);
    // Re-enable scrolling
    document.body.style.overflow = "auto";
  };

  return (
    <div className="bg-background min-h-screen">
       <SeoHeader
      title={"Case Studies | Real Hiring Success Stories by IONA AI"}
      description={"Explore how leading organizations transformed their hiring with IONA AI. Real-world results that prove the impact of purposeful, AI-powered talent solutions."}
     
      />
      {/* Hero Section */}
      <div className="bg-purple-gradient py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold mb-6 text-white"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Client Case Studies
          </motion.h1>
          <motion.p 
            className="text-white text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Real-world examples of how our AI-driven solutions have transformed hiring processes
          </motion.p>
        </div>
      </div>

      {/* Case Studies Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.id}
              className="bg-white rounded-xl overflow-hidden shadow-custom cursor-pointer transform transition-transform hover:scale-105"
              onClick={() => openCaseStudy(study.id)}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="absolute top-3 right-3 z-10 bg-accent/90 text-white text-xs py-1 px-2 rounded-full">
                {study.industry}
              </div>
              <img 
                src={study.image}
                alt={`Case Study ${study.id}`}
                className="w-full h-48 object-cover"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = `https://placehold.co/600x400/lightgray/darkgray?text=Case+Study+${study.id}`;
                }}
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1 text-primaryText">{study.title}</h3>
                <p className="text-sm text-accent mb-3">{study.subtitle}</p>
                <p className="text-secondaryText mb-4 text-sm">{study.summary}</p>
                
                <div className="flex justify-between mb-4">
                  {study.stats.map((stat, i) => (
                    <div key={i} className="text-center">
                      <div className="text-accent text-lg font-bold">{stat.value}</div>
                      <div className="text-xs text-gray-500">{stat.label}</div>
                    </div>
                  ))}
                </div>
                
                <div className="text-primary font-medium flex items-center text-sm">
                  VIEW FULL CASE STUDY
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Case Study Modal */}
      {selectedCaseStudy && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <motion.div 
            className="bg-white rounded-xl shadow-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="sticky top-0 bg-white z-10 border-b border-gray-200">
              <div className="flex justify-between items-center p-6">
                <div>
                  <div className="text-xs text-accent font-medium uppercase mb-1">{selectedCaseStudy.industry} Case Study</div>
                  <h2 className="text-2xl font-bold text-primaryText">{selectedCaseStudy.title}</h2>
                  <p className="text-secondaryText">{selectedCaseStudy.subtitle}</p>
                </div>
                <button 
                  onClick={closeCaseStudy}
                  className="text-secondaryText hover:text-primary p-1"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
            
            <div className="p-6">
              <img 
                src={selectedCaseStudy.image} 
                alt={selectedCaseStudy.title}
                className="w-full h-64 object-cover rounded-lg mb-6"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = `https://placehold.co/1200x600/lightgray/darkgray?text=Case+Study+${selectedCaseStudy.id}`;
                }}
              />
              
              <div className="flex justify-between mb-8">
                {selectedCaseStudy.stats.map((stat, i) => (
                  <div key={i} className="text-center bg-gray-50 px-6 py-4 rounded-lg">
                    <div className="text-accent text-2xl font-bold">{stat.value}</div>
                    <div className="text-sm text-gray-500">{stat.label}</div>
                  </div>
                ))}
              </div>
              
              <div 
                className="prose max-w-none text-primaryText"
                dangerouslySetInnerHTML={{ __html: selectedCaseStudy.content }}
              />
              
              <div className="mt-8 border-t border-gray-200 pt-6">
                <h3 className="text-xl font-bold mb-4">Do you want to be the Next Success Story?</h3>
                <div className="flex space-x-4">
                  <Link href="/schedule-demo" className="bg-accent hover:bg-accent-dark text-white px-6 py-3 rounded-lg transition-colors">Book a Demo</Link>
                  <Link href="/contact" className="border-2 border-accent text-accent px-6 py-3 rounded-lg hover:bg-accent/5 transition-colors">Schedule a Call</Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}

export default CaseStudies;
  