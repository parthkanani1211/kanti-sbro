
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Footer } from "@/components/Footer";

const About = () => {
  const heroRef = useRef(null);
  const storyRef = useRef(null);
  const labRef = useRef(null);
  const valuesRef = useRef(null);

  const isHeroInView = useInView(heroRef, { once: true });
  const isStoryInView = useInView(storyRef, { once: true, margin: "-100px" });
  const isLabInView = useInView(labRef, { once: true, margin: "-100px" });
  const isValuesInView = useInView(valuesRef, { once: true, margin: "-100px" });

  const values = [
    {
      title: "Scientific Excellence",
      description: "Leveraging Japanese precision and scientific methodology for superior rhodium plating solutions.",
      icon: "🔬"
    },
    {
      title: "Innovation",
      description: "Continuous research and development to push the boundaries of plating technology.",
      icon: "💡"
    },
    {
      title: "Quality Assurance",
      description: "Rigorous testing and quality control measures ensure consistent, reliable results.",
      icon: "✨"
    },
    {
      title: "Customer Focus",
      description: "Understanding and exceeding customer expectations through tailored solutions.",
      icon: "🎯"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900">
      {/* Hero Section */}
      <section ref={heroRef} className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <motion.div 
          className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(245,197,66,0.1),transparent_50%)]"
          animate={{
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />

        <div className="container mx-auto px-4 text-center">
          <motion.h1 
            className="font-playfair text-4xl md:text-6xl lg:text-8xl font-bold bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-600 bg-clip-text text-transparent mb-6"
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={isHeroInView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            About Rholux
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <span className="text-yellow-400 font-semibold">JAPANESE SCIENTIFIC AIDED COLLABORATION</span>
            <br />
            Pioneering the future of rhodium plating technology through precision, innovation, and excellence.
          </motion.p>
        </div>
      </section>

      {/* Our Story Section */}
      <section ref={storyRef} className="py-20 px-4 relative">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isStoryInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-white mb-6">
              Our <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">Story</span>
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isStoryInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
                <p>
                  Rholux represents the culmination of decades of research and development in rhodium plating technology. 
                  Born from a collaboration between Japanese scientific expertise and cutting-edge chemical engineering, 
                  our RHOLUX 108 solution sets new standards in the industry.
                </p>
                <p>
                  Our journey began with a simple vision: to create the purest, most reliable rhodium plating solution 
                  that would enable manufacturers across industries to achieve unprecedented levels of quality and brilliance 
                  in their products.
                </p>
                <p>
                  Today, Rholux continues to push the boundaries of what's possible in surface treatment technology, 
                  serving clients in jewelry manufacturing, electronics, automotive, and luxury hardware industries worldwide.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isStoryInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative"
            >
              <Card className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm border-gray-700 overflow-hidden">
                <CardContent className="p-0">
                  <img 
                    src="/lovable-uploads/1a121dce-fd5b-4786-acd1-8afa9f9e4f5d.png" 
                    alt="Chemical laboratory research"
                    className="w-full h-64 md:h-80 object-cover"
                  />
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Laboratory Section */}
      <section ref={labRef} className="py-20 px-4 bg-gradient-to-b from-transparent to-gray-900/50 relative">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isLabInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-white mb-6">
              Our <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">Laboratory</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              State-of-the-art facilities equipped with cutting-edge technology for research, development, and quality control.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Precision Equipment */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={isLabInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm border-gray-700 overflow-hidden h-full">
                <CardContent className="p-0">
                  <img 
                    src="/lovable-uploads/1a405a13-b3e7-4362-a25a-ef0294f16722.png" 
                    alt="Precision laboratory equipment and scientist"
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-yellow-400 mb-3">Precision Equipment</h3>
                    <p className="text-gray-300">
                      Advanced microscopy and analysis equipment ensure every batch meets our exacting standards.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Advanced Testing */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={isLabInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Card className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm border-gray-700 overflow-hidden h-full">
                <CardContent className="p-0">
                  <img 
                    src="\public\images\rhodium.webp"
                    alt="Advanced laboratory testing equipment"
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-yellow-400 mb-3">Advanced Testing</h3>
                    <p className="text-gray-300">
                      Comprehensive testing protocols validate performance, consistency, and quality across all parameters.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Quality Control */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={isLabInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="md:col-span-2 lg:col-span-1"
            >
              <Card className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm border-gray-700 overflow-hidden h-full">
                <CardContent className="p-0">
                  <img 
                    src="/lovable-uploads/1c4b4052-2180-47f4-920f-cc320cc30b2d.png" 
                    alt="Quality control chemical analysis"
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-yellow-400 mb-3">Quality Control</h3>
                    <p className="text-gray-300">
                      Rigorous chemical analysis and quality control processes ensure consistent excellence in every bottle.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section ref={valuesRef} className="py-20 px-4 relative">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isValuesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-white mb-6">
              Our <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">Values</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isValuesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              >
                <Card className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm border-gray-700 h-full hover:border-yellow-400/50 transition-colors duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="text-4xl mb-4">{value.icon}</div>
                    <h3 className="text-xl font-semibold text-yellow-400 mb-3">{value.title}</h3>
                    <p className="text-gray-300">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
