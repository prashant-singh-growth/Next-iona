
"use client"

import { memo } from "react";

// Import all the extracted components
import AboutHeroBanner from "../components/AboutHeroBanner";
import VisionMissionSection from "../components/VisionMissionSection";
import ValuesSection from "../components/ValuesSection";
import TeamSection from "../components/TeamSection";
import DifferenceSection from "../components/DifferenceSection";

const AboutSection = memo(() => {
  return (
    <div className="bg-background">
      {/* Hero Banner */}
      <AboutHeroBanner />
      
      {/* Vision & Mission */}
      <VisionMissionSection />

      {/* Values Section */}
      <ValuesSection />

      {/* Team Members Section */}
      <TeamSection />

      {/* iona.ai Difference */}
      <DifferenceSection />
    </div>
  );
});

export default AboutSection; 