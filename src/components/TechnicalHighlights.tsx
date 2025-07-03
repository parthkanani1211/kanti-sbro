
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";

const specifications = [
  { property: "Rhodium Content", value: "2 g Rh", unit: "" },
  { property: "Operating Temperature", value: "20–40", unit: "°C" },
  { property: "pH Level", value: "< 1", unit: "(strongly acidic)" },
  { property: "Voltage Range", value: "6-8 V", unit: "(Max 10V)" },
  { property: "Deposition Speed", value: "0.1 μm / 30 sec", unit: "@ 1cm²" },
  { property: "Coating Quality", value: "99.9% Rh", unit: "Brilliant White" },
  { property: "Hardness", value: "800–850", unit: "HV" },
  { property: "Available Sizes", value: "10ml,100ml", unit: "HV" },
  { property: "Shelf Life", value: "24 months", unit: "" },
  { property: "storage", value: "Room temperature, dark place", unit: "" },

];

export const TechnicalHighlights = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeSpec, setActiveSpec] = useState<number | null>(null);

  return (
    <section ref={ref} className="py-12 md:py-20 px-4 bg-gradient-to-b from-transparent to-gray-900/50 relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div
        className="absolute top-10 right-10 w-32 h-32 bg-yellow-400/5 rounded-full blur-xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{ duration: 4, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-10 left-10 w-24 h-24 bg-yellow-600/5 rounded-full blur-xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.6, 0.3, 0.6],
        }}
        transition={{ duration: 3, repeat: Infinity, delay: 1 }}
      />

      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 md:mb-16"
        >
          <motion.h2 
            className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Technical <motion.span 
              className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent"
              animate={{ 
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                textShadow: ["0 0 0px transparent", "0 0 20px rgba(245,197,66,0.3)", "0 0 0px transparent"]
              }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              Excellence
            </motion.span>
          </motion.h2>
          <motion.p 
            className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Precision-engineered specifications for consistent, reliable results in professional applications.
          </motion.p>
        </motion.div>

        <motion.div 
          className="w-full"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {/* Mobile Card Layout */}
          <div className="block md:hidden space-y-4">
            {specifications.map((spec, index) => (
              <motion.div
                key={spec.property}
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
              >
                <Card className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm border-gray-700">
                  <CardContent className="p-4">
                    <div className="flex flex-col space-y-2">
                      <h3 className="text-yellow-400 font-semibold text-sm">
                        {spec.property}
                      </h3>
                      <div className="flex items-baseline gap-2 flex-wrap">
                        <span className="text-white font-bold text-lg">
                          {spec.value}
                        </span>
                        {spec.unit && (
                          <span className="text-gray-400 text-sm">
                            {spec.unit}
                          </span>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Desktop and Tablet Grid Layout */}
          <div className="hidden md:block">
            <Card className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm border-gray-700">
              <CardContent className="p-0">
                <div className="w-full">
                  {/* Header */}
                  <motion.div 
                    className="bg-gradient-to-r from-yellow-400/20 to-yellow-600/20 p-6 border-b border-gray-700/50"
                    initial={{ opacity: 0, y: -20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.5 }}
                  >
                    <div className="grid grid-cols-2 gap-4">
                      <h3 className="text-yellow-400 font-semibold text-lg">Property</h3>
                      <h3 className="text-yellow-400 font-semibold text-lg text-right">Value</h3>
                    </div>
                  </motion.div>

                  {/* Specifications */}
                  <div className="divide-y divide-gray-700/50">
                    {specifications.map((spec, index) => (
                      <motion.div
                        key={spec.property}
                        initial={{ opacity: 0, x: -50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                        className={`grid grid-cols-2 gap-4 p-6 hover:bg-yellow-400/5 transition-all duration-300 cursor-pointer relative overflow-hidden ${
                          activeSpec === index ? 'bg-yellow-400/10' : ''
                        }`}
                        onMouseEnter={() => setActiveSpec(index)}
                        onMouseLeave={() => setActiveSpec(null)}
                      >
                        {/* Animated background highlight */}
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-yellow-400/10 to-transparent"
                          initial={{ x: "-100%" }}
                          animate={{ x: activeSpec === index ? "0%" : "-100%" }}
                          transition={{ duration: 0.3 }}
                        />
                        
                        <div className="relative z-10">
                          <motion.span
                            animate={{ color: activeSpec === index ? "#FDE047" : "#D1D5DB" }}
                            transition={{ duration: 0.2 }}
                            className="text-base font-medium"
                          >
                            {spec.property}
                          </motion.span>
                        </div>
                        
                        <div className="relative z-10 text-right">
                          <div className="flex items-center justify-end gap-2 flex-wrap">
                            <motion.span 
                              className="text-white font-bold text-lg"
                              animate={{ 
                                scale: activeSpec === index ? 1.05 : 1,
                                color: activeSpec === index ? "#FDE047" : "#FFFFFF"
                              }}
                              transition={{ duration: 0.2 }}
                            >
                              {spec.value}
                            </motion.span>
                            {spec.unit && (
                              <motion.span 
                                className="text-gray-400 text-sm"
                                animate={{ opacity: activeSpec === index ? 1 : 0.7 }}
                                transition={{ duration: 0.2 }}
                              >
                                {spec.unit}
                              </motion.span>
                            )}
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
