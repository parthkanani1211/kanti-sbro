import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Globe, Target, Users } from "lucide-react";
import { VideoBackground } from "./VideoBackground";

const reasons = [
  {
    icon: Award,
    title: "Purity Guarantee",
    description: "99.9% rhodium purity ensures consistent, high-quality results in every application."
  },
  {
    icon: Globe,
    title: "Global Shipping",
    description: "Worldwide delivery with secure packaging ."
  },
  {
    icon: Target,
    title: "Consistent Quality",
    description: "Rigorous quality control and testing protocols maintain product excellence."
  },
  {
    icon: Users,
    title: "Decades of Expertise",
    description: "Backed by years of research and development in precious metal chemistry."
  }
];

export const WhyChooseRholux = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 px-4 relative overflow-hidden">
      {/* Background Video */}
      <VideoBackground
        videoSources={{
          mp4: "/videos/jewelry-workshop.mp4",
          webm: "/videos/jewelry-workshop.webm"
        }}
        poster="/lovable-uploads/1a405a13-b3e7-4362-a25a-ef0294f16722.png"
        overlay="bg-black/75"
      />

      {/* Animated background elements (kept for enhancement) */}
      <motion.div
        className="absolute top-0 left-0 w-96 h-96 bg-yellow-400/10 rounded-full blur-3xl z-10"
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 20, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-64 h-64 bg-yellow-600/10 rounded-full blur-3xl z-10"
        animate={{
          x: [0, -80, 0],
          y: [0, -30, 0],
          scale: [1.2, 1, 1.2],
        }}
        transition={{ duration: 15, repeat: Infinity, delay: 5 }}
      />

      <div className="container mx-auto relative z-20">
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
            Why Choose <motion.span 
              className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent"
              animate={{ 
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                filter: ["hue-rotate(0deg)", "hue-rotate(30deg)", "hue-rotate(0deg)"]
              }}
              transition={{ duration: 6, repeat: Infinity }}
            >
              Rholux?
            </motion.span>
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Bring your jewelry back to life with the RHOLUX 108 Rhodium Pen Plating Solution – a high-concentration, ready-to-use plating fluid trusted by jewelers worldwide. Perfect for precision touch-ups, detailed repairs, and highlighting designs. Rholux 108 delivers a bright, tarnish-resistant white shine that lasts forever!
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 100, rotateY: -30 }}
              animate={isInView ? { opacity: 1, y: 0, rotateY: 0 } : {}}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.15,
                type: "spring",
                stiffness: 100
              }}
              className="group relative"
            >
              <motion.div
                className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-xl p-6 h-full text-center border border-gray-700/50 hover:border-yellow-400/50 transition-all duration-300 relative overflow-hidden"
                whileHover={{ 
                  scale: 1.05,
                  y: -10,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
                  background: "linear-gradient(135deg, rgba(31,41,55,0.9), rgba(17,24,39,0.9))"
                }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                {/* Animated hover glow effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-yellow-400/10 to-yellow-600/10 rounded-xl opacity-0 group-hover:opacity-100"
                  transition={{ duration: 0.3 }}
                />
                
                {/* Particle effects */}
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-yellow-400/40 rounded-full"
                    style={{
                      left: `${20 + i * 15}%`,
                      top: `${30 + i * 10}%`,
                    }}
                    animate={{
                      y: [0, -30, 0],
                      opacity: [0, 0.8, 0],
                      scale: [0, 1.5, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: i * 0.4,
                    }}
                  />
                ))}
                
                <div className="relative z-10">
                  <motion.div 
                    className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4"
                    whileHover={{ 
                      scale: 1.2, 
                      rotate: 360,
                      boxShadow: "0 0 30px rgba(245, 197, 66, 0.6)"
                    }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                  >
                    <reason.icon className="w-8 h-8 text-black" />
                  </motion.div>
                  
                  <motion.h3 
                    className="text-xl font-bold text-white mb-3 group-hover:text-yellow-400 transition-colors duration-300"
                    initial={{ y: 20, opacity: 0 }}
                    animate={isInView ? { y: 0, opacity: 1 } : {}}
                    transition={{ delay: index * 0.15 + 0.3, duration: 0.6 }}
                  >
                    {reason.title}
                  </motion.h3>
                  
                  <motion.p 
                    className="text-gray-300 text-sm leading-relaxed"
                    initial={{ y: 20, opacity: 0 }}
                    animate={isInView ? { y: 0, opacity: 1 } : {}}
                    transition={{ delay: index * 0.15 + 0.5, duration: 0.6 }}
                  >
                    {reason.description}
                  </motion.p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Enhanced CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <motion.div
            className="bg-gradient-to-r from-yellow-400/10 to-yellow-600/10 rounded-2xl p-8 border border-yellow-400/20 relative overflow-hidden"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            {/* Animated background gradient */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-yellow-400/5 via-yellow-500/10 to-yellow-600/5"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{ duration: 8, repeat: Infinity }}
            />
            
            <div className="relative z-10">
              <motion.h3 
                className="text-2xl font-bold text-white mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 1, duration: 0.6 }}
              >
                Ready to Experience Rholux Quality?
              </motion.h3>
              <motion.p 
                className="text-gray-300 mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 1.2, duration: 0.6 }}
              >
                Join industry leaders who trust Rholux for their precision plating needs.
              </motion.p>
              <motion.div 
                className="flex flex-col sm:flex-row gap-4 justify-center"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 1.4, duration: 0.6 }}
              >
                {/* --- MODIFIED BUTTON --- */}
                <motion.a 
                  href="tel:+919712849208"
                  className="bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-black font-semibold px-8 py-3 rounded-lg transition-all duration-300"
                  whileHover={{ 
                    scale: 1.05, 
                    y: -2,
                    boxShadow: "0 10px 25px rgba(245, 197, 66, 0.25)"
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get Quote
                </motion.a>
               {/* --- END OF MODIFICATION --- */}
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};