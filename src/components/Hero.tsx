// src/components/Hero.tsx

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { InteractiveBottle } from "./InteractiveBottle";
import { Link } from "react-router-dom";
import { VideoBackground } from "./VideoBackground"; 

// Define your contact phone number here for easy updating
const CONTACT_PHONE = "+919712849208";

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 sm:px-6 lg:px-8 bg-gray-900">
      
      <VideoBackground
        videoSources={{
          // Ensure these video files exist in your `public/Video/` directory
          mp4: "/Video/jewelry-workshop.mp4",
          webm: "/Video/jewelry-workshop.webm"
        }}
        // Ensure this poster image exists in your `public` directory
        poster="/lovable-uploads/1a121dce-fd5b-4786-acd1-8afa9f9e4f5d.png" 
        overlay="bg-black/60"
      />

      {/* Animated Background Pattern */}
      <motion.div 
        className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(245,197,66,0.1),transparent_50%)] z-10"
        animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
      
      {/* Floating Particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 sm:w-2 sm:h-2 bg-yellow-400/20 rounded-full z-10"
          animate={{
            y: [0, -100, 0],
            x: [0, Math.random() * 100 - 50, 0],
            opacity: [0, 1, 0]
          }}
          transition={{ duration: 8 + Math.random() * 4, repeat: Infinity, delay: Math.random() * 5 }}
          style={{ left: `${10 + Math.random() * 80}%`, top: `${20 + Math.random() * 60}%` }}
        />
      ))}
      
      {/* Main Content Container */}
      <div className="container mx-auto grid lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-7xl relative z-20">
        
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center lg:text-left order-2 lg:order-1 space-y-4 sm:space-y-6"
        >
          <motion.h1
            className="font-playfair text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-600 bg-clip-text text-transparent leading-tight"
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.3, duration: 1, ease: "easeOut" }}
            whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
          >
            Rholux
          </motion.h1>
          
          <motion.p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-2xl mx-auto lg:mx-0" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 1, ease: "easeOut" }}>
            <motion.span className="text-yellow-400 font-semibold block sm:inline" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8, duration: 0.8 }}>
              JAPANESE SCIENTIFIC AIDED COLLABORATION
            </motion.span>
            <br className="hidden sm:block" />
            <motion.span className="text-gray-400 block sm:inline mt-2 sm:mt-0" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2, duration: 0.8 }}>
              The Future of Rhodium Plating.
            </motion.span>
          </motion.p>
          
          <motion.div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.0, duration: 0.8, ease: "easeOut" }}>
            <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }} transition={{ type: "spring", stiffness: 400, damping: 17 }} className="w-full sm:w-auto">
              <Link to="/products" className="block">
                <Button size="lg" className="w-full sm:w-auto bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-black font-semibold px-4 sm:px-6 md:px-8 py-3 rounded-lg transition-all duration-300 shadow-lg hover:shadow-yellow-400/25 text-sm md:text-base">
                  Explore RHOLUX 108
                </Button>
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }} transition={{ type: "spring", stiffness: 400, damping: 17 }} className="w-full sm:w-auto">
              {/* This link now triggers a phone call */}
              <a href={`tel:${CONTACT_PHONE}`}>
                <Button variant="outline" size="lg" className="w-full sm:w-auto border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black px-4 sm:px-6 md:px-8 py-3 rounded-lg transition-all duration-300 shadow-lg hover:shadow-yellow-400/25 text-sm md:text-base">
                  Request a Sample
                </Button>
              </a>
            </motion.div>
          </motion.div>

          <motion.p className="text-base sm:text-lg md:text-xl text-yellow-300 font-medium italic pt-2" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.4, duration: 0.8, ease: "easeOut" }}>
            Precision. Purity. Brilliance.
          </motion.p>
        </motion.div>
        
        {/* Right Content - Interactive Bottles */}
        <motion.div
          initial={{ opacity: 0, x: 50, scale: 0.8 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ delay: 1.2, duration: 1, ease: "easeOut" }}
          className="flex justify-center order-1 lg:order-2"
        >
          <div className="flex gap-2 sm:gap-4 md:gap-6 lg:gap-8 items-end">
            <InteractiveBottle size="large" volume="100ml" />
            <InteractiveBottle size="small" volume="10ml" />
          </div>
        </motion.div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.8 }}
      >
        {/* You can add a scroll-down icon or text here if you wish */}
      </motion.div>
    </section>
  );
};