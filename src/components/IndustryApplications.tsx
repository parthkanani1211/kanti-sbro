
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Gem, Cpu, Car, Home } from "lucide-react";

const industries = [
  {
    icon: Gem,
    title: "Jewelry Manufacturing",
    description: "Create stunning, hypoallergenic jewelry pieces with brilliant white rhodium finishes that resist tarnishing and provide long-lasting beauty.",
    benefits: ["Nickel-free coating", "Mirror-like finish", "Tarnish resistance"]
  },
  {
    icon: Cpu,
    title: "Electronics",
    description: "Enhance electronic components with precise, thin-film rhodium deposits that offer superior conductivity and corrosion resistance.",
    benefits: ["Precise deposition", "Enhanced conductivity", "Corrosion protection"]
  },
  {
    icon: Home,
    title: "Luxury Hardware",
    description: "Elevate architectural and decorative hardware with premium rhodium plating that delivers unmatched durability and aesthetic appeal.",
    benefits: ["Premium aesthetics", "Exceptional durability", "Abrasion resistance"]
  },
  {
    icon: Car,
    title: "Automotive Trims",
    description: "Transform automotive components with rhodium plating that withstands harsh conditions while maintaining a sophisticated appearance.",
    benefits: ["Weather resistance", "Scratch resistance", "Luxury appearance"]
  }
];

export const IndustryApplications = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 px-4 relative overflow-hidden">
      <motion.div 
        className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(245,197,66,0.05),transparent_70%)]"
        animate={{
          background: [
            "radial-gradient(circle at 30% 50%, rgba(245,197,66,0.05), transparent 70%)",
            "radial-gradient(circle at 70% 50%, rgba(245,197,66,0.05), transparent 70%)",
            "radial-gradient(circle at 30% 50%, rgba(245,197,66,0.05), transparent 70%)"
          ]
        }}
        transition={{ duration: 10, repeat: Infinity }}
      />
      
      {/* Floating geometric shapes */}
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-4 h-4 border border-yellow-400/20 rotate-45"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            rotate: [45, 225, 45],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: 8 + i * 2,
            repeat: Infinity,
            delay: i * 2,
          }}
          style={{
            left: `${20 + i * 20}%`,
            top: `${30 + i * 15}%`,
          }}
        />
      ))}
      
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="font-playfair text-4xl lg:text-5xl font-bold text-white mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Industry <motion.span 
              className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent"
              animate={{ 
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{ duration: 5, repeat: Infinity }}
            >
              Applications
            </motion.span>
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Trusted across industries for precision, quality, and performance in demanding applications.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.title}
              initial={{ opacity: 0, y: 100, rotateX: -15 }}
              animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.2,
                type: "spring",
                stiffness: 100
              }}
              className="group relative"
            >
              <motion.div
                className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-sm rounded-2xl p-8 h-full border border-gray-700/50 hover:border-yellow-400/50 transition-all duration-500 overflow-hidden relative"
                whileHover={{ 
                  scale: 1.03,
                  y: -5,
                  boxShadow: "0 25px 50px rgba(0,0,0,0.25)"
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                {/* Animated background pattern */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-yellow-400/5 to-transparent opacity-0 group-hover:opacity-100"
                  transition={{ duration: 0.5 }}
                />
                
                {/* Animated border highlight */}
                <motion.div
                  className="absolute inset-0 rounded-2xl"
                  style={{
                    background: "linear-gradient(90deg, transparent, rgba(245,197,66,0.2), transparent)",
                  }}
                  animate={{
                    x: ["-100%", "100%"],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatDelay: 2,
                  }}
                />
                
                <div className="relative z-10">
                  <motion.div 
                    className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-2xl flex items-center justify-center mb-6"
                    whileHover={{ 
                      scale: 1.15, 
                      rotate: [0, -10, 10, 0],
                      boxShadow: "0 0 30px rgba(245, 197, 66, 0.4)"
                    }}
                    transition={{ 
                      duration: 0.6,
                      rotate: { duration: 0.5, ease: "easeInOut" }
                    }}
                  >
                    <industry.icon className="w-8 h-8 text-black" />
                  </motion.div>
                  
                  <motion.h3 
                    className="text-2xl font-bold text-white mb-4 group-hover:text-yellow-400 transition-colors duration-300"
                    initial={{ x: -30, opacity: 0 }}
                    animate={isInView ? { x: 0, opacity: 1 } : {}}
                    transition={{ delay: index * 0.2 + 0.3, duration: 0.6 }}
                  >
                    {industry.title}
                  </motion.h3>
                  
                  <motion.p 
                    className="text-gray-300 mb-6 leading-relaxed"
                    initial={{ x: -30, opacity: 0 }}
                    animate={isInView ? { x: 0, opacity: 1 } : {}}
                    transition={{ delay: index * 0.2 + 0.5, duration: 0.6 }}
                  >
                    {industry.description}
                  </motion.p>
                  
                  <div className="space-y-2">
                    {industry.benefits.map((benefit, benefitIndex) => (
                      <motion.div
                        key={benefit}
                        initial={{ opacity: 0, x: -30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ 
                          duration: 0.6, 
                          delay: (index * 0.2) + (benefitIndex * 0.1) + 0.7 
                        }}
                        className="flex items-center text-sm text-gray-400"
                        whileHover={{ x: 10, color: "#FDE047" }}
                      >
                        <motion.div 
                          className="w-2 h-2 bg-yellow-400 rounded-full mr-3"
                          animate={{ 
                            scale: [1, 1.3, 1],
                            boxShadow: ["0 0 0px rgba(245,197,66,0)", "0 0 10px rgba(245,197,66,0.5)", "0 0 0px rgba(245,197,66,0)"]
                          }}
                          transition={{ 
                            duration: 2, 
                            repeat: Infinity, 
                            delay: benefitIndex * 0.3 
                          }}
                        />
                        {benefit}
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
