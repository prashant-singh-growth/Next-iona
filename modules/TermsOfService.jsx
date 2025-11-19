"use client"
import { motion } from "framer-motion";
import SeoHeader from "../components/utils/SeoHeader";

const TermsOfService = () => {
  return (
    <div className="bg-background">
       <SeoHeader
      title={"Terms of Use | Iona AI"}
      description={"Read Iona AI's Terms of Use to understand our commitment to ethical AI, fairness, and transparency in all hiring solutions."}
     
      />
      {/* Hero Section */}
      <div className="bg-lightGray py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{
              background: "linear-gradient(90deg, #4F46E5 0%, #9333EA 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              textShadow: "0 0 15px rgba(104, 85, 224, 0.4)",
            }}
          >
            Terms of Service
          </motion.h1>
          <motion.p 
            className="text-secondaryText text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Please read these terms and conditions carefully before using our website and services.
          </motion.p>
        </div>
      </div>

      {/* Terms of Service Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white p-8 rounded-lg shadow-custom" data-aos="fade-up">
          <div className="space-y-8">
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-primaryText">1. Acceptance of Terms</h2>
              <p className="text-secondaryText">
                Welcome to the iona.ai website, [www.iona.ai] (the "Website"). By accessing or using our Website, 
                you ("User," "you," or "your") agree to be bound by these Terms of Service ("Terms") and our 
                Privacy Policy, which is incorporated herein by reference. If you do not agree to all of these 
                Terms, do not access or use our Website.
              </p>
            </section>
            
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-primaryText">2. Description of Service</h2>
              <p className="text-secondaryText">
                iona.ai provides information about its AI-powered solutions for high-volume hiring, including 
                software, services, and related resources (collectively, the "Service"). The Website is primarily 
                intended to provide information to potential clients, partners, and individuals interested in 
                learning more about iona.ai.
              </p>
            </section>
            
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-primaryText">3. User Conduct</h2>
              <p className="text-secondaryText">
                You agree to use the Website only for lawful purposes and in a manner that does not infringe the rights of, 
                restrict, or inhibit anyone else's use and enjoyment of the Website. Prohibited conduct includes, but is not limited to:
              </p>
              <ul className="list-disc pl-5 text-secondaryText space-y-2">
                <li>Using the Website in any way that is unlawful, illegal, fraudulent, or harmful.</li>
                <li>Attempting to gain unauthorized access to any part of the Website, servers, or networks.</li>
                <li>Transmitting any viruses, worms, or other malicious code.</li>
                <li>Collecting or harvesting any personally identifiable information from the Website without our express written consent.</li>
                <li>Using the Website to distribute unsolicited or unauthorized advertising or promotional material.</li>
                <li>Impersonating any person or entity or falsely stating or misrepresenting your affiliation with any person or entity.</li>
                <li>Interfering with or disrupting the operation of the Website or the servers or networks used to make the Website available.</li>
              </ul>
            </section>
            
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-primaryText">4. Intellectual Property</h2>
              <p className="text-secondaryText">
                All content included on the Website, such as text, graphics, logos, images, audio clips, video clips, 
                data compilations, software, and other material (collectively, the "Content"), is the property of iona.ai 
                or its licensors and is protected by copyright, trademark, patent, and other intellectual property laws.
              </p>
              <p className="text-secondaryText">
                You may access and view the Content for your personal, non-commercial use only. You may not modify, copy, 
                reproduce, republish, upload, post, transmit, distribute, or otherwise use the Content in any way for 
                public or commercial purposes without our prior written consent.
              </p>
              <p className="text-secondaryText">
                iona.ai, the iona.ai logo, and all related names, logos, product and service names, designs, and slogans 
                are trademarks of iona.ai or its affiliates or licensors. You may not use such marks without our prior 
                written permission.
              </p>
            </section>
            
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-primaryText">5. Disclaimer of Warranties</h2>
              <p className="text-secondaryText">
                THE WEBSITE AND THE CONTENT ARE PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS WITHOUT ANY WARRANTIES 
                OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS 
                FOR A PARTICULAR PURPOSE, NON-INFRINGEMENT, AND ANY WARRANTIES ARISING OUT OF COURSE OF DEALING OR 
                USAGE OF TRADE.
              </p>
              <p className="text-secondaryText">
                IONA.AI DOES NOT WARRANT THAT THE WEBSITE WILL BE UNINTERRUPTED, ERROR-FREE, SECURE, OR FREE OF 
                VIRUSES OR OTHER HARMFUL COMPONENTS. IONA.AI DOES NOT WARRANT THE ACCURACY, COMPLETENESS, OR 
                TIMELINESS OF THE CONTENT. ANY RELIANCE YOU PLACE ON SUCH INFORMATION IS STRICTLY AT YOUR OWN RISK.
              </p>
            </section>
            
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-primaryText">6. Limitation of Liability</h2>
              <p className="text-secondaryText">
                TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL IONA.AI, ITS AFFILIATES, OFFICERS, 
                DIRECTORS, EMPLOYEES, AGENTS, SUPPLIERS, OR LICENSORS BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, 
                CONSEQUENTIAL, OR PUNITIVE DAMAGES (INCLUDING, WITHOUT LIMITATION, DAMAGES FOR LOSS OF PROFITS, DATA, 
                USE, GOODWILL, OR OTHER INTANGIBLE LOSSES) ARISING OUT OF OR RELATING TO YOUR ACCESS TO OR USE OF, OR 
                INABILITY TO ACCESS OR USE, THE WEBSITE OR THE CONTENT, WHETHER BASED ON WARRANTY, CONTRACT, TORT 
                (INCLUDING NEGLIGENCE), STATUTE, OR ANY OTHER LEGAL THEORY, EVEN IF IONA.AI HAS BEEN ADVISED OF THE 
                POSSIBILITY OF SUCH DAMAGES.
              </p>
              <p className="text-secondaryText">
                IN ANY CASE, THE TOTAL AGGREGATE LIABILITY OF IONA.AI TO YOU FOR ALL CLAIMS ARISING OUT OF OR RELATING 
                TO THE WEBSITE OR THE CONTENT SHALL NOT EXCEED FIFTY POUNDS (£50).
              </p>
              <p className="text-secondaryText">
                Some jurisdictions do not allow the exclusion or limitation of certain types of damages, so these 
                limitations may not apply to you.
              </p>
            </section>
            
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-primaryText">7. Links to Third-Party Websites</h2>
              <p className="text-secondaryText">
                The Website may contain links to third-party websites that are not owned or controlled by iona.ai. 
                We have no control over, and assume no responsibility for, the content, privacy policies, or practices 
                of any third-party websites. You acknowledge and agree that iona.ai shall not be responsible or liable, 
                directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with 
                the use of or reliance on any content, goods, or services available on or through any such third-party 
                websites. We encourage you to review the terms of service and privacy policies of any third-party 
                websites you visit.
              </p>
            </section>
            
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-primaryText">8. Indemnification</h2>
              <p className="text-secondaryText">
                You agree to indemnify, defend, and hold harmless iona.ai, its affiliates, officers, directors, 
                employees, agents, suppliers, and licensors from and against any and all claims, liabilities, damages, 
                losses, costs, expenses, or fees (including reasonable attorneys' fees) arising out of or relating to 
                your breach of these Terms or your use of the Website.
              </p>
            </section>
            
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-primaryText">9. Governing Law and Jurisdiction</h2>
              <p className="text-secondaryText">
                These Terms shall be governed by and construed in accordance with the laws of England and Wales, 
                without regard to its conflict of law principles. You agree that the courts of England and Wales 
                shall have exclusive jurisdiction to hear and determine any disputes arising out of or relating to 
                these Terms or your use of the Website, and you hereby consent to the personal jurisdiction of such courts.
              </p>
            </section>
            
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-primaryText">10. Modifications to Terms</h2>
              <p className="text-secondaryText">
                iona.ai reserves the right to modify or revise these Terms at any time without notice. By continuing 
                to access or use the Website after any such modifications or revisions become effective, you agree to 
                be bound by the revised Terms. It is your responsibility to review these Terms periodically for any 
                changes. The "Last Updated" date at the top of this page indicates when these Terms were last revised.
              </p>
            </section>
            
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-primaryText">11. Termination</h2>
              <p className="text-secondaryText">
                iona.ai may terminate or suspend your access to all or any part of the Website at any time, with or 
                without cause, and without prior notice or liability. All provisions of these Terms which by their 
                nature should survive termination shall survive termination, including, without limitation, intellectual 
                property provisions, disclaimers of warranties, limitations of liability, and indemnification.
              </p>
            </section>
            
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-primaryText">12. Entire Agreement</h2>
              <p className="text-secondaryText">
                These Terms, together with our Privacy Policy, constitute the entire agreement between you and iona.ai 
                regarding your use of the Website and supersede all prior and contemporaneous agreements, representations, 
                and understandings, whether oral or written.
              </p>
            </section>
            
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-primaryText">13. Contact Us</h2>
              <p className="text-secondaryText">
                If you have any questions about these Terms of Service, please contact us via our <a href="/contact" className="text-accent hover:underline">Contact Us</a> page.
              </p>
              <p className="text-secondaryText mt-4">
                By using our Website, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.
              </p>
            </section>
          </div>
          
          {/* Last updated date */}
          <div className="mt-10 pt-8 border-t border-gray-200">
            <p className="text-sm text-secondaryText">Last updated: May 13, 2025</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService; 