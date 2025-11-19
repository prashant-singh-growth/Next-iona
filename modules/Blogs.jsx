'use client'

// src/pages/Blogs.jsx
import { useState } from "react";
import { motion } from "framer-motion";
import Link from 'next/link';


function Blogs() {
  const [selectedBlog, setSelectedBlog] = useState(null);

  // Blog data
  const blogs = [
    {
      id: 1,
      title: "Prospect to Productive: An Important Journey (And How To Elevate It)",
      summary: "Here is the journey of a 'Prospect,' a potential candidate for an organization, becoming a 'Productive' employee who contributes to the organization.",
      author: "Admin",
      date: "Jul 18, 2024",
      image: `/assets/ionablog1.png`,
      tags: ["AI", "Recruitment", "Future of Work"],
      content: `
        <h2 class="text-2xl font-bold mb-4">The First Spark – Engaging the Prospect</h2>
        <p class="mb-4">The journey begins with capturing the prospect's interest through engaging recruitment campaigns. Then comes perhaps the most crucial part, compelling job descriptions, so that the prospect knows this is the role he/she is looking for. Once interest is captured you will engage your prospect through a seamless application process. Effective communication and timely updates will help build trust in the prospects for your organization – scheduling interactions, appearing for interviews etc. It is also important for you to highlight what makes your organisation unique and desirable as an employer. Advanced AI tools can assist in this phase by matching the right talent to the right job requirements.</p>
        
        <h3 class="text-xl font-bold mb-3 mt-6">The in-between – Seamless Onboarding</h3>
        <p class="mb-4">When the prospect accepts the offer letter the focus moves towards ensuring they are integrated well with your oiled system. A well-structured onboarding program is essential to ensure a smooth transition.</p>
        <p class="mb-4">It includes pre-boarding activities like the collection of basic details, document submission, finance-related compliances like PF, and Background verification. Utilizing AI-driven onboarding platforms, you can personalize the experience, automate mundane tasks, and provide real-time support. This sets the tone for the new hire's experience, ensuring they feel welcomed, informed, and equipped to start their new role.</p>
        
        <h3 class="text-xl font-bold mb-3 mt-6">The Final Leg – Training to Productive</h3>
        <p class="mb-4">The final stage of the Prospect to Productive journey is when the new hire has completed all their formalities and compliances and becomes aware of his roles and responsibilities, finally being able to contribute to the organization. To get to this stage, the new hire must undergo multiple trainings like orientation, compliance sessions, and departmental training. Regular check-ins, mentorship programs, and performance feedback help to align the new employee's goals with those of the organization. Leveraging AI-powered tools companies can monitor the progress, predict potential challenges, and provide tailored resources to enhance productivity.</p>
        
        <h3 class="text-xl font-bold mb-3 mt-6">AI Conversations-based Prospect to Productive Solution by iona.ai</h3>
        <p class="mb-4">Revolutionising the entire Hiring and Onboarding journeys for all the 3 stakeholders in the journey i.e. the prospects, hires and recruiters, iona.ai brings to you a 3-step "Prospect to Productive" solution that uses new-age AI technology and small Language Mode based tech to elevate experiences using conversational AI. Making everyone in the value chain an ambassador of your organization.</p>
        <p class="mb-4">Particularly useful in the Craft of Volume Hiring, iona.ai's Prospect to Productive solution transforms the hiring process enabling quality hiring at speed and scale with absolutely no human intervention required. With guaranteed 100% accuracy and 100% automation.</p>
        <p class="mb-4">Also fondly called the P2P solution, this acts as a recruiter Co-pilot, where our AI does the heavy lifting by accurately matching candidates to job descriptions, assessing their skills, and even predicting their growth potential. You no longer must sift through endless resumes or second-guess your hiring decisions. It means you can make informed hiring decisions faster than before without compromising on quality. iona.ai platform is designed to learn and adapt thus ensuring that it only gets better with every hire.</p>
        
        <h3 class="text-xl font-bold mb-3 mt-6">Let's look at the iona.ai P2P solutions:</h3>
        <p class="mb-4"><strong>(1) Nova Count</strong> is a prospect mapping and GenAI-based Application Tracking System that serves as an assistant to the recruiter and takes care of all the manual and cognitive tasks on behalf of the recruiter under the recruiter's guidance. Using AI-based systems, taxonomies and ontologies are used to categorise and match job skills with candidate profiles, enabling more efficient and accurate recruitment processes.</p>
        <p class="mb-4"><strong>(2) Nova Track</strong> not only transforms your onboarding processes at a fraction of time with 100% data accuracy all the while transforming the experiences your team has. With iona.ai Speed Board you can handle Offer Letter Management, Conversational and Engaging communication, Streamlined & Automated Data collection & verification, Workflow Approvals, Integrated Background Verification and Customizable Journeys</p>
        <p class="mb-4"><strong>(3) Nova Board</strong> is designed to enhance the new hire journey by providing customised and compliant Microlearning approach with training content in digestible increments. Its efficiency, easy-to-use interface and customisable approach ensure that the new hire is ready and productive from Day 1.</p>
      `
    },
    {
      id: 2,
      title: "The Rise of Virtual Recruiting: Transforming the Talent Acquisition Landscape",
      summary: "Practical tips to enhance your recruitment process and leave candidates with a positive impression of your company.",
      author: "Sarah Williams",
      date: "April 3, 2023",
      image: `/assets/ionablog2.jpeg`,
      tags: ["Candidate Experience", "Recruitment", "HR Tips"],
      content: `
        <h2 class="text-2xl font-bold mb-4">The Shift to Virtual Recruiting</h2>
        <p class="mb-4">Talent acquisition or Recruitment has been crucial component of setting up the stage for success for any organisation. It has always been important whom to choose and for what specific work. In the corporate landscape too, the entire recruitment process is extremely important and has become fairly standard.</p>
        
        <p class="mb-4">The word Recruitment is derived from French word "recrue", meaning fresh levy of soldiers. It is claimed to have been used in 17th century while modern recruitment as we know it began during WW2.</p>
        
        <p class="mb-4">Modern recruitment meant scouting for talents that may fit into your needs, and this scouting was done through paper-based applications, shortlisting based on what is written in applications, multiple in-person interviews, assessments (in case you want to test a skill) and selection. In recent years, however, with the exponential evolution of the digital landscape along with the need for flexibility owing to factors like the COVID-19 pandemic, the way talent acquisition is being done has evolved considerably. Traditional methods often proved time-consuming, costly, and geographically limiting. This accelerated the shift towards virtual recruiting as organizations were forced to adapt to remote work models, pushing virtual recruiting to the forefront of talent acquisition strategies.</p>
        
        <h3 class="text-xl font-bold mb-3 mt-6">Benefits of Virtual Recruiting</h3>
        <p class="mb-4"><strong>Broader Talent Pool:</strong> Virtual recruiting means there is no geographical barriers, thus no longer limited to local candidates. Organisations can tap into diverse skill sets from accross the world.</p>
        
        <p class="mb-4"><strong>Cost-Effectiveness:</strong> There is no need for travel or physical meeting spaces for interview processes thus reducing the costs for employers.</p>
        
        <p class="mb-4"><strong>Time Efficiency:</strong> Automated tools and AI-driven platforms streamline tasks such as resume screening and initial assessments saving time.</p>
        
        <p class="mb-4"><strong>Enhanced Candidate Experience:</strong> Virtual recruiting platforms can provide a seamless and engaging experience for the candidates.</p>
        
        <p class="mb-4"><strong>Data-Driven Decisions:</strong> Digital recruiting tools offer analytics and insights, enabling recruiters to make more informed decisions. Metrics such as time-to-hire, source effectiveness, and candidate engagement can be easily tracked and analyzed.</p>
        
        <h3 class="text-xl font-bold mb-3 mt-6">5 Components of Virtual Recruiting that are getting attention</h3>
        <p class="mb-4"><strong>AI and Machine Learning:</strong> AI-driven tools are revolutionizing virtual recruiting by not just automating repetitive tasks but also performing complex tasks such as matching candidates to job requirements more accurately and providing predictive analytics to forecast hiring needs.</p>
        
        <p class="mb-4"><strong>Video Interviewing:</strong> Video platforms that include features like recording, playback, and real-time collaboration, make the interview process more dynamic, flexible and personal while being Virtual.</p>
        
        <p class="mb-4"><strong>Chatbot in the recruiting process:</strong> Use of personal chatbots to create job descriptions, match candidates from the pool based on skills, handle the scheduling etc make virtual recruiting a more elevated experience for recruiters making this type of Recruiter Co-pilot system such as iona.ai a go-to solution.</p>
        
        <p class="mb-4"><strong>Online Assessments:</strong> Digital assessments allow recruiters to evaluate candidates' skills, personality traits, and cultural fit remotely. These assessments can be standardized and tailored to specific job roles, providing a consistent evaluation framework.</p>
        
        <p class="mb-4"><strong>Onboarding and Integration:</strong> Virtual recruiting doesn't end at giving an offer letter; it also extends into onboarding. Digital onboarding platforms such as iona.ai Speedboard facilitate the seamless integration of new hires ensuring that the experiences of candidates and employers are elevated.</p>
        
        <h3 class="text-xl font-bold mb-3 mt-6">What next?</h3>
        <p class="mb-4">As remote work continues to become more common and as technology evolves, virtual recruiting is at the forefront of becoming a must-have feature in organisations' Talent Acquisition strategy.</p>
        
        <p class="mb-4">The future of Virtual Recruiting is in the way technology is becoming sharper and smarter to be able to do the exact work at a fraction of the cost and time as compared to the pre-virtual recruiting era. Technology such as Customised small language models are slowly replacing large language models for this desired effect.</p>
        
        <p class="mb-4">We also see that advanced technologies such as virtual reality (VR) and augmented reality (AR) could be cherries on the cake to enhance the recruitment experience, offering immersive and interactive candidate engagements.</p>
        
        <p class="mb-4">Organizations that embrace virtual recruiting will likely have a competitive edge in attracting and retaining top talent. By leveraging the power of AI, and digital platforms, organizations can transform the way they attract, assess and onboard talent, ensuring it is beneficial for all stakeholders in the process.</p>
        
        <p class="mb-4">Embrace virtual recruiting and unlock the full potential of your talent acquisition strategy with iona.ai</p>
      `
    },
    {
      id: 3,
      title: "The 5 Spheres of Challenges In High-Volume Hiring",
      summary: "A deep dive into how HR departments are leveraging data to make smarter, more strategic people decisions.",
      author: "Michael Chen",
      date: "March 10, 2023",
      image: `/assets/ionablog3.jpeg`,
      tags: ["HR Analytics", "Data-Driven HR", "People Analytics"],
      content: `
        <h2 class="text-2xl font-bold mb-4">What is high-volume hiring?</h2>
        <p class="mb-4">High-volume or mass hiring refers to the process of recruiting many candidates within a short period, often conducted by organizations with substantial workforce needs. This type of hiring is common in industries such as retail, customer service, healthcare, and seasonal businesses. Mass hiring can be driven by factors like business expansion, seasonal demands, or the need to replace a significant number of employees.</p>
        
        <h3 class="text-xl font-bold mb-3 mt-6">The Varied challenges based on alignments</h3>
        <p class="mb-4">"It is all about the Perspective."</p>
        
        <p class="mb-4">It is not an uncommon thought that different entities in an organisation face different challenges. The worries or concerns are primarily driven by what their goals, priorities, KPIs, and job functions are.</p>
        
        <p class="mb-4">The entire process of recruitment too goes through this fundamental concept of 'Varied alignment-based challenges'. For Instance, in the hiring scenario, while the Finance controller is particularly worried about the cost of onboarding per hire, the senior management of the brand team is particularly concerned about creating Brand endorsers through an impeccable brand image. The Internal Training team, however, is concerned about the quality of training grasped by the new hire.</p>
        
        <h3 class="text-xl font-bold mb-3 mt-6">The 5 Spheres of Challenges in Volume-Hiring</h3>
        <p class="mb-4">Let's look deeper into Volume Hiring Challenges – we have broken it down into 5 distinct spheres of challenges. Playing any part of the Recruitment function, direct or indirect, you will be able to resonate with one or more of these Spheres.</p>
        
        <h4 class="text-lg font-semibold mb-2 mt-4">1. Challenges for the Brand – Impacted employer branding</h4>
        <ul class="list-disc pl-6 mb-4">
          <li>Poor experience for both candidates & recruiters</li>
          <li>Employees do not become brand endorsers due to poor experience</li>
          <li>Low affinity to the company</li>
          <li>Impacted brand image.</li>
        </ul>
        
        <h4 class="text-lg font-semibold mb-2 mt-4">2. Challenges for the HR team – admin heavy processes</h4>
        <ul class="list-disc pl-6 mb-4">
          <li>No Efficient resource utilization</li>
          <li>Lower early-stage attrition</li>
          <li>Low offer to Joining ratio</li>
          <li>Low visibility on Candidate sentiments for example offer letter rejection reasons</li>
          <li>Lack of solutions catering to Volume</li>
          <li>Not Getting the new resources productive from Day 1</li>
        </ul>
        
        <h4 class="text-lg font-semibold mb-2 mt-4">3. Challenges for the Finance team – Escalating hiring costs affecting the bottom line</h4>
        <ul class="list-disc pl-6 mb-4">
          <li>Every new solution to improve the system is an added cost to the company</li>
          <li>Many solutions involve high upfront capex</li>
          <li>The business bottom line is affected</li>
        </ul>
        
        <h4 class="text-lg font-semibold mb-2 mt-4">4. Challenges in Operations – Affected Deadlines & TAT</h4>
        <ul class="list-disc pl-6 mb-4">
          <li>Multiple Admin headache</li>
          <li>No way of verifying thousands of data quickly</li>
          <li>Cumbersome process</li>
          <li>No accuracy in Data being filled in by Candidates</li>
          <li>Too many Manual Interventions</li>
          <li>Lack of customisation in existing solutions</li>
        </ul>
        
        <h4 class="text-lg font-semibold mb-2 mt-4">5. Challenges in Compliance & Reputation – Inefficiencies & Risks</h4>
        <ul class="list-disc pl-6 mb-4">
          <li>Compliance issues</li>
          <li>Integration & compatibility scare with existing systems</li>
          <li>Data breach & Safety Concerns</li>
          <li>Inefficiencies</li>
        </ul>
        
        <p class="mb-4">Did you excitedly nodded your head in agreement at any of the above? Did one of more spheres resonate with you?</p>
        <p class="mb-4">Whatever the Challenge, figuring out and implementing the solution has been the only true mark of great professionals – it gives satisfaction along with the obvious Business Growth.</p>
        
        <p class="mb-4">At iona.ai, we have looked at these challenges in detail, and have been helping businesses that engage in high-volume recruitment to transform their recruitment process. We transform the hiring process with our cutting-edge AI technology, enabling quality hiring at speed and scale with no human intervention needed. With guaranteed 100% accuracy through 100% automation.</p>
        
        <p class="mb-4">One no longer must sift through endless resumes or second-guess your hiring decisions. Working as a recruiter Co-pilot, our AI does the heavy lifting by accurately matching candidates to job descriptions, assessing their skills, and even predicting their growth potential. It means one can make informed hiring decisions faster than ever before, without compromising on quality. Our platform is designed to learn and adapt, ensuring that it only gets better with every hire.</p>
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

  // Handle opening a blog post
  const openBlog = (id) => {
    setSelectedBlog(blogs.find(blog => blog.id === id));
    // Prevent scrolling when modal is open
    document.body.style.overflow = "hidden";
  };

  // Handle closing a blog post
  const closeBlog = () => {
    setSelectedBlog(null);
    // Re-enable scrolling
    document.body.style.overflow = "auto";
  };

  return (
    <div className="bg-background min-h-screen">
      
      {/* Hero Section */}
      <div className="bg-purple-gradient py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold mb-6 text-white"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Blog
          </motion.h1>
          <motion.p 
            className="text-white text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Insights, strategies, and industry trends for recruitment and HR professionals
          </motion.p>
        </div>
      </div>

      {/* Blog Posts Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <motion.div
              key={blog.id}
              className="bg-white rounded-xl overflow-hidden shadow-custom cursor-pointer transform transition-transform hover:scale-105"
              onClick={() => openBlog(blog.id)}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <img 
                src={blog.image}
                alt={blog.title}
                className="w-full h-48 object-cover"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = `https://placehold.co/600x400/lightgray/darkgray?text=Blog+Post+${blog.id}`;
                }}
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-primaryText">{blog.title}</h3>
                <p className="text-secondaryText mb-4">{blog.summary}</p>
                <div className="text-primary font-medium flex items-center">
                  READ MORE
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Blog Post Modal */}
      {selectedBlog && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <motion.div 
            className="bg-white rounded-xl shadow-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="sticky top-0 bg-white z-10 border-b border-gray-200">
              <div className="flex justify-between items-center p-6">
                <h2 className="text-2xl font-bold text-primaryText">{selectedBlog.title}</h2>
                <button 
                  onClick={closeBlog}
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
                src={selectedBlog.image} 
                alt={selectedBlog.title}
                className="w-full h-64 object-cover rounded-lg mb-6"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = `https://placehold.co/1200x600/lightgray/darkgray?text=Blog+Post+${selectedBlog.id}`;
                }}
              />
              
              <div className="flex flex-wrap gap-2 mb-6">
                {selectedBlog.tags.map((tag, index) => (
                  <span key={index} className="bg-lightGray text-primaryText px-3 py-1 rounded-full text-xs">
                    {tag}
                  </span>
                ))}
              </div>
              
              <div 
                className="prose max-w-none text-primaryText"
                dangerouslySetInnerHTML={{ __html: selectedBlog.content }}
              />
              
              <div className="mt-8 border-t border-gray-200 pt-6">
                <h3 className="text-xl font-bold mb-4">Want to optimize your recruitment process?</h3>
                <div className="flex space-x-4">
                  <Link href="/schedule-demo" className="bg-purple-gradient text-white px-6 py-2 rounded-lg">Schedule a Demo</Link>
                  <Link href="/contact" className="border border-primary text-primary px-6 py-2 rounded-lg">Contact Us</Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}

export default Blogs;
  