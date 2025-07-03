// src/components/ProductFeatures.tsx

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Zap, Shield, Target, Award } from "lucide-react";
import { VideoBackground } from "./VideoBackground";

const features = [
  {
    icon: Zap,
    title: "High Concentration",
    description: "Premium rhodium content for superior coverage and finish quality."
  },
  {
    icon: Shield,
    title: "Exceptional Durability",
    description: "Long-lasting protection against tarnish and wear."
  },
  {
    icon: Target,
    title: "Precision Application",
    description: "Perfect for detailed work and intricate jewelry pieces."
  },
  {
    icon: Award,
    title: "Professional Grade",
    description: "Trusted by jewelry professionals worldwide."
  }
];

export const ProductFeatures = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 px-4 relative overflow-hidden bg-gray-900">
      <VideoBackground
        videoSources={{
          // --- CORRECTION BASED ON YOUR SCREENSHOT 
          mp4: "rholux-visual-alchemy-main\src\ideo\rhodium-plating-process.mp4", 
          
          
          webm: "rholux-visual-alchemy-main\src\ideo\jewelry-workshop.mp4", 
        }}
        
        poster="/images/jewelry-palting-poster.jpg" 
        overlay="bg-black/80" 
      />
      
      {/* z-10 ensures this content sits on top of the background video */}
      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="font-playfair text-4xl lg:text-5xl font-bold text-white mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
          >
            What is <motion.span 
              className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent"
              animate={{ 
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{ duration: 6, repeat: Infinity }}
            >
              RHOLUX 108?
            </motion.span>
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Elevate your jewelry finishing with RHOLUX 108, the industry's premium rhodium pen plating solution designed for professionals who demand nothing but excellence. Formulated with the highest purity Rhodium metal, RHOLUX 108 delivers a dazzling white finish, exceptional durability, and precise application every time.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 100 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.15 + 0.5 }}
              className="group"
            >
              <motion.div
                className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-xl p-6 h-full text-center border border-gray-700/50 hover:border-yellow-400/50 transition-all duration-300"
                whileHover={{ 
                  scale: 1.05,
                  y: -10,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.3)"
                }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-yellow-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-300 text-sm">
                  {feature.description}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};