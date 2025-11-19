import { memo } from "react";
import { ResponsiveContainer, Customized } from 'recharts';

const StatsSection = memo(() => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4" data-aos="fade-up">Empower Your Hiring with AI/ML-Driven Value</h2>
        <p className="text-secondaryText max-w-3xl mx-auto mb-12" data-aos="fade-up" data-aos-delay="100">
          Deliver visibility, rapid onboarding, and delightful experiences for every employee.
        </p>

        <div className="grid md:grid-cols-2 gap-8" data-aos="fade-up" data-aos-delay="200">
          {/* Graph 1 */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:scale-[1.02] hover:from-blue-100 hover:to-indigo-200 hover:shadow-blue-200/50 group">
            <h3 className="text-accent font-bold text-lg mb-2">Hiring Time Reduction</h3>
            <div className="h-64 group-hover:opacity-90 transition-opacity duration-300">
              <ResponsiveContainer width="100%" height="100%">
                <Customized
                  component={() => (
                    <img
                      src={"/assets/graph1.png"}
                      alt="Hiring TATs Comparison Graph"
                      style={{ width: '100%', height: '100%', objectFit: 'contain', borderRadius: 12 }}
                    />
                  )}
                />
              </ResponsiveContainer>
            </div>
          </div>

          {/* Graph 2 */}
          <div className="bg-gradient-to-br from-indigo-50 to-blue-100 p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:scale-[1.02] hover:from-indigo-100 hover:to-blue-200 hover:shadow-blue-200/50 group">
            <h3 className="text-accent font-bold text-lg mb-2">Cost per Hire Comparison</h3>
            <div className="h-64 group-hover:opacity-90 transition-opacity duration-300">
              <ResponsiveContainer width="100%" height="100%">
                <Customized
                  component={() => (
                    <img
                      src={"/assets/graph2.png"}
                      alt="Cost per Hire Comparison Graph"
                      style={{ width: '100%', height: '100%', objectFit: 'contain', borderRadius: 12 }}
                    />
                  )}
                />
              </ResponsiveContainer>
            </div>
          </div>

          {/* Graph 3 */}
          <div className="bg-gradient-to-br from-indigo-50 to-blue-100 p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:scale-[1.02] hover:from-indigo-100 hover:to-blue-200 hover:shadow-blue-200/50 group">
            <h3 className="text-accent font-bold text-lg mb-2">Employee Experience</h3>
            <div className="h-64 group-hover:opacity-90 transition-opacity duration-300">
              <ResponsiveContainer width="100%" height="100%">
                <Customized
                  component={() => (
                    <img
                      src={"/assets/graph3.png"}
                      alt="Employee Experience Gauge"
                      style={{ width: '100%', height: '100%', objectFit: 'contain', borderRadius: 12 }}
                    />
                  )}
                />
              </ResponsiveContainer>
            </div>
          </div>

          {/* Graph 4 */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:scale-[1.02] hover:from-blue-100 hover:to-indigo-200 hover:shadow-blue-200/50 group">
            <h3 className="text-accent font-bold text-lg mb-2">Client Ratings</h3>
            <div className="h-64 group-hover:opacity-90 transition-opacity duration-300">
              <ResponsiveContainer width="100%" height="100%">
                <Customized
                  component={() => (
                    <img
                      src={"/assets/graph4.png"}
                      alt="Client 5-Star Rating"
                      style={{ width: '100%', height: '100%', objectFit: 'contain', borderRadius: 12 }}
                    />
                  )}
                />
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

export default StatsSection; 