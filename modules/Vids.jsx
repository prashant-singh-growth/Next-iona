'use client'

// src/pages/Videos.jsx
import { useState } from "react";
import { motion } from "framer-motion";
import Link from 'next/link';
import SeoHeader from "../components/utils/SeoHeader";

function Vids() {
  const [selectedVideo, setSelectedVideo] = useState(null);

  // Video data
  const videos = [
    {
      id: 1,
      title: "Do what you love doing! iona AI chatbot will take care of new hire onboarding",
      summary: "A comprehensive overview of our AI-driven recruitment solution and its benefits.",
      duration: "0:09",
      thumbnail: "/images/video-1.jpg",
      videoId: "NO5j7JUhTvk", // Updated YouTube video ID
    },
    {
      id: 2,
      title: "iona AI chatbot proactively engages with new hires",
      summary: "Watch our platform in action as it screens and ranks candidates in real-time.",
      duration: "0:31",
      thumbnail: "/images/video-2.jpg",
      videoId: "kR9OEC0SAYA", // Updated YouTube video ID
    },
    {
      id: 3,
      title: "Looking for AI chatbot for new hire onboarding?",
      summary: "Expert panel discussion on upcoming trends and innovations in HR technology.",
      duration: "0:09",
      thumbnail: "/images/video-3.jpg",
      videoId: "ao82oGSlr-4", // Updated YouTube video ID
    },
    {
      id: 4,
      title: "Wanna know why I am happy?",
      summary: "Explore the technical architecture behind our AI recruitment platform.",
      duration: "0:18",
      thumbnail: "/images/video-4.jpg",
      videoId: "pYQ-tY6vfGs", // New YouTube video ID
    },
    {
      id: 5,
      title: "iona Prime: AI Chabot + integrated Background Verifications",
      summary: "Hear from our enterprise customers about how ionAI has revolutionized their hiring process.",
      duration: "0:19",
      thumbnail: "/images/video-5.jpg",
      videoId: "egDPgvLpkPU", // New YouTube video ID
    },
    {
      id: 6,
      title: "iona.ai is an AI first new hire onboarding service designed for quality hiring at speed and scale",
      summary: "Get an exclusive preview of our upcoming features and enhancements for the year ahead.",
      duration: "3:51",
      thumbnail: "/images/video-6.jpg",
      videoId: "V1D6l8KHZDk", // Updated YouTube video ID
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

  // Handle opening a video
  const openVideo = (id) => {
    setSelectedVideo(videos.find(video => video.id === id));
    // Prevent scrolling when modal is open
    document.body.style.overflow = "hidden";
  };

  // Handle closing a video
  const closeVideo = () => {
    setSelectedVideo(null);
    // Re-enable scrolling
    document.body.style.overflow = "auto";
  };

  return (
    <div className="bg-background min-h-screen">
      <SeoHeader
      title={"Videos | Learn How IONA AI Transforms Hiring with AI"}
      description={"Watch demos, expert talks, and customer success stories. See how IONA AI’s intelligent solutions redefine how businesses hire, onboard, and engage talent."}
     
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
            Videos
          </motion.h1>
          <motion.p 
            className="text-white text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Watch demos, tutorials, and expert discussions about our AI recruiting solutions
          </motion.p>
        </div>
      </div>

      {/* Videos Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video, index) => (
            <motion.div
              key={video.id}
              className="bg-white rounded-xl overflow-hidden shadow-custom cursor-pointer transform transition-transform hover:scale-105"
              onClick={() => openVideo(video.id)}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="relative">
                <img 
                  src={`https://img.youtube.com/vi/${video.videoId}/hqdefault.jpg`}
                  alt={video.title}
                  className="w-full h-48 object-cover"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = `https://placehold.co/600x400/lightgray/darkgray?text=Video+${video.id}`;
                  }}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-primary text-white p-3 rounded-full cursor-pointer hover:bg-opacity-80 transition-all">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
                <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded">
                  {video.duration}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-primaryText">{video.title}</h3>
                <p className="text-secondaryText mb-4">{video.summary}</p>
                <div className="text-primary font-medium flex items-center">
                  WATCH NOW
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Video Modal */}
      {selectedVideo && (
        <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center p-4">
          <motion.div 
            className="bg-white rounded-xl shadow-lg max-w-5xl w-full overflow-hidden"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="sticky top-0 bg-white z-10 border-b border-gray-200">
              <div className="flex justify-between items-center p-6">
                <h2 className="text-2xl font-bold text-primaryText">{selectedVideo.title}</h2>
                <button 
                  onClick={closeVideo}
                  className="text-secondaryText hover:text-primary p-1"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
            
            <div className="aspect-w-16 aspect-h-9 w-full">
              <iframe
                src={`https://www.youtube.com/embed/${selectedVideo.videoId}?autoplay=1&rel=0`}
                title={selectedVideo.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-96"
              ></iframe>
            </div>
            
            <div className="p-6">
              <div className="flex items-center text-sm text-secondaryText mb-4">
                <span>{selectedVideo.duration}</span>
              </div>
              
              <p className="text-primaryText mb-6">{selectedVideo.summary}</p>
              
              <div className="mt-4 border-t border-gray-200 pt-6">
                <h3 className="text-xl font-bold mb-4">Want to see our platform in action?</h3>
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

export default Vids;
  