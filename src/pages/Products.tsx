// src/components/Products.tsx

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { Badge, Beaker, Droplets, Zap, Shield, Thermometer, Timer, Award, ArrowRight, ShoppingCart, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { InteractiveBottle } from "@/components/InteractiveBottle";
// Make sure the file exists at the specified path, or update the path if necessary.
import Inquiry from "../components/ui/Inquiry";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const Products = () => {
  const heroRef = useRef(null);
  const featuresRef = useRef(null);
  const specsRef = useRef(null);
  const usageRef = useRef(null);
  const comingSoonRef = useRef(null);
  const footerRef = useRef(null); // Ref for the footer
  
  // State to control the visibility of the inquiry popup
  const [openInquiry, setOpenInquiry] = useState(false);

  const isHeroInView = useInView(heroRef, { once: true });
  const isFeaturesInView = useInView(featuresRef, { once: true, margin: "-100px" });
  const isSpecsInView = useInView(specsRef, { once: true, margin: "-100px" });
  const isUsageInView = useInView(usageRef, { once: true, margin: "-100px" });
  const isComingSoonInView = useInView(comingSoonRef, { once: true, margin: "-100px" });
  const isFooterInView = useInView(footerRef, { once: true, margin: "-50px" }); // In-view hook for the footer

  const specifications = [
    { property: "Rhodium Content", value: "2 g Rh" },
    { property: "Operating Temperature", value: "20–40 °C" },
    { property: "pH Level", value: "< 1 (strongly acidic)" },
    { property: "Voltage Range", value: "6-8V (Max 10V)" },
    { property: "Deposition Speed", value: "0.1 μm / 30 sec @ 1cm²" },
    { property: "Coating Quality", value: "99.9% Rh, Brilliant White" },
    { property: "Hardness", value: "800–850 HV" },
    { property: "Available Sizes", value: "10ml, 100ml" },
    { property: "Shelf Life", value: "24 months" },
    { property: "Storage", value: "Room temperature, dark place" }
  ];

  const features = [
    { icon: Droplets, title: "High Concentration Formula", description: "Premium rhodium concentration for professional-grade results" },
    { icon: Zap, title: "Fast Application", description: "Quick deposition speed for efficient workflow" },
    { icon: Shield, title: "Nickel-Free", description: "Safe for sensitive skin and hypoallergenic applications" },
    { icon: Thermometer, title: "Room Temperature", description: "No heating required, works at ambient temperature" },
    { icon: Timer, title: "Long-Lasting", description: "Durable coating that maintains brilliance over time" },
    { icon: Award, title: "Professional Grade", description: "Trusted by jewelers and manufacturers worldwide" }
  ];

  const usageSteps = [
    "Clean the surface thoroughly with degreasing agent",
    "Connect the pen plating equipment to power supply",
    "Dip the felt tip into RHOLUX 108 solution",
    "Apply steady voltage (6-8V) and move pen smoothly",
    "Rinse with distilled water after plating",
    "Dry and polish for optimal finish"
  ];
  
  const socialLinks = [
    { name: "LinkedIn", url: "https://www.linkedin.com/in/your-profile" },
    { name: "Instagram", url: "https://www.instagram.com/rholux_official" }
  ];

  return (
    <div className="relative">
      <div className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900">
        
        {/* Hero Section */}
        <section ref={heroRef} className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(245,197,66,0.1),transparent_50%)]"
            animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
          
          <div className="container mx-auto grid lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-7xl">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isHeroInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 1 }}
              className="space-y-4 sm:space-y-6"
            >
              <motion.h1 
                className="font-playfair text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3, duration: 1 }}
              >
                RHOLUX 108
              </motion.h1>
              
              <motion.h2 
                className="text-xl sm:text-2xl md:text-3xl text-yellow-400 font-semibold"
                initial={{ opacity: 0, y: 20 }}
                animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                Rhodium Pen Plating Solution
              </motion.h2>
              
              <motion.p 
                className="text-base sm:text-lg text-gray-300 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.7, duration: 0.8 }}
              >
                Elevate your jewelry finishing with RHOLUX 108, the industry's premium rhodium pen plating solution designed for professionals who demand nothing but excellence. Formulated with the highest purity Rhodium metal, RHOLUX 108 delivers a dazzling white finish, exceptional durability, and precise application every time.
              </motion.p>
              
              <motion.div 
                className="flex flex-col sm:flex-row gap-3 sm:gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.9, duration: 0.8 }}
              >
                <Button
                  onClick={() => setOpenInquiry(true)}
                  className="w-full sm:w-auto bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-black font-semibold px-6 sm:px-8 py-3"
                >
                  <ShoppingCart className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  Order Now
                </Button>
              </motion.div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50, scale: 0.8 }}
             animate={isHeroInView ? { opacity: 1, x: 0, scale: 1 } : {}}
              transition={{ delay: 1, duration: 1 }}
              className="flex justify-center"
            >
              <div className="flex gap-2 sm:gap-4 md:gap-6 lg:gap-8 items-end">
                <InteractiveBottle size="large" volume="100ml" />
                <InteractiveBottle size="small" volume="10ml" />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section ref={featuresRef} className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={isFeaturesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center mb-12 sm:mb-16 space-y-4"
            >
              <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
                Product <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">Features</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
                Discover what makes RHOLUX 108 the preferred choice for professional rhodium plating
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 80 }}
                  animate={isFeaturesInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.15 }}
                  className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-gray-700/50 hover:border-yellow-400/50 transition-all duration-300"
                >
                  <feature.icon className="w-10 h-10 sm:w-12 sm:h-12 text-yellow-400 mb-3 sm:mb-4" />
                  <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 sm:mb-3">{feature.title}</h3>
                  <p className="text-sm sm:text-base text-gray-300">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Technical Specifications */}
        <section ref={specsRef} className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-900/50 to-black">
          <div className="container mx-auto max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={isSpecsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center mb-12 sm:mb-16 space-y-4"
            >
              <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
                Technical <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">Specifications</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
                Detailed technical data for professional applications
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isSpecsInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-2xl p-4 sm:p-6 lg:p-8 border border-gray-700/50"
            >
              <div className="overflow-x-auto -mx-2 sm:mx-0">
                <div className="min-w-full inline-block align-middle">
                  <Table>
                    <TableHeader>
                      <TableRow className="border-gray-700 hover:bg-gray-800/50">
                        <TableHead className="text-yellow-400 font-semibold text-sm sm:text-base lg:text-lg whitespace-nowrap px-2 sm:px-4">Property</TableHead>
                        <TableHead className="text-yellow-400 font-semibold text-sm sm:text-base lg:text-lg whitespace-nowrap px-2 sm:px-4">Value</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {specifications.map((spec, index) => (
                        <motion.tr
                          key={spec.property}
                          initial={{ opacity: 0, x: -20 }}
                          animate={isSpecsInView ? { opacity: 1, x: 0 } : {}}
                          transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                          className="border-gray-700 hover:bg-gray-800/30 transition-colors"
                        >
                          <TableCell className="text-white font-medium text-xs sm:text-sm lg:text-base py-2 sm:py-3 lg:py-4 px-2 sm:px-4">{spec.property}</TableCell>
                          <TableCell className="text-gray-300 text-xs sm:text-sm lg:text-base py-2 sm:py-3 lg:py-4 px-2 sm:px-4">{spec.value}</TableCell>
                        </motion.tr>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Usage Instructions */}
        <section ref={usageRef} className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={isUsageInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center mb-12 sm:mb-16 space-y-4"
            >
              <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
                Usage <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">Instructions</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
                Step-by-step guide for optimal results
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={isUsageInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <div className="space-y-4 sm:space-y-6">
                  {usageSteps.map((step, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isUsageInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                      className="flex items-start gap-3 sm:gap-4 bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-lg p-3 sm:p-4 border border-gray-700/30"
                    >
                      <div className="w-7 h-7 sm:w-8 sm:h-8 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center text-black font-bold text-xs sm:text-sm flex-shrink-0 mt-0.5">
                        {index + 1}
                      </div>
                      <p className="text-sm sm:text-base text-gray-300 flex-1 leading-relaxed">{step}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={isUsageInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="bg-gradient-to-br from-yellow-400/10 to-yellow-600/10 rounded-2xl p-6 sm:p-8 border border-yellow-400/30"
              >
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">Safety Guidelines</h3>
                <ul className="space-y-3 sm:space-y-4 text-sm sm:text-base text-gray-300">
                  <li className="flex items-start gap-2 sm:gap-3">
                    <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                    <span>Wear appropriate PPE including gloves and eye protection</span>
                  </li>
                  <li className="flex items-start gap-2 sm:gap-3">
                    <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                    <span>Work in well-ventilated area</span>
                  </li>
                  <li className="flex items-start gap-2 sm:gap-3">
                    <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                    <span>Store in original container, away from heat and light</span>
                  </li>
                  <li className="flex items-start gap-2 sm:gap-3">
                    <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                    <span>Dispose of waste according to local regulations</span>
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Coming Soon Section */}
        <section ref={comingSoonRef} className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900/50 to-black">
          <div className="container mx-auto max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={isComingSoonInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center space-y-6 sm:space-y-8"
            >
              <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
                More Products <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">Coming Soon</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
                We're continuously developing new solutions to meet your plating needs. Stay tuned for exciting additions to our product line!
              </p>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isComingSoonInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="bg-gradient-to-r from-yellow-400/10 to-yellow-600/10 rounded-2xl p-6 sm:p-8 border border-yellow-400/20 max-w-2xl mx-auto"
              >
                <div className="flex items-center justify-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                  <Badge className="w-10 h-10 sm:w-12 sm:h-12 text-yellow-400" />
                  <ArrowRight className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-400" />
                  <Beaker className="w-10 h-10 sm:w-12 sm:h-12 text-yellow-400" />
                </div>
                
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">Stay Updated</h3>
                <p className="text-sm sm:text-base text-gray-300 mb-4 sm:mb-6">
                  Be the first to know about new product launches, updates, and special offers.
                </p>
                
                <Button
                  onClick={() => window.open("https://www.instagram.com/rholux_official", "_blank")}
                  className="w-full sm:w-auto bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-black font-semibold"
                >
                  Subscribe to Updates
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* --- FOOTER SECTION --- */}
        <motion.footer
          ref={footerRef}
          className="bg-black py-12 px-4 border-t border-gray-800 relative overflow-hidden"
          initial={{ opacity: 0 }}
          animate={isFooterInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
        >
          {/* Animated background elements */}
          <motion.div
            className="absolute top-0 left-0 w-32 h-32 bg-yellow-400/5 rounded-full blur-xl"
            animate={{ x: [0, 50, 0], y: [0, 25, 0], scale: [1, 1.1, 1] }}
            transition={{ duration: 15, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-0 right-0 w-24 h-24 bg-yellow-600/5 rounded-full blur-xl"
            animate={{ x: [0, -30, 0], y: [0, -15, 0], scale: [1.1, 1, 1.1] }}
            transition={{ duration: 12, repeat: Infinity, delay: 3 }}
          />

          <div className="container mx-auto relative z-10">
            <div className="grid md:grid-cols-3 gap-8">
              {/* Logo and Tagline */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isFooterInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <motion.h3
                  className="font-playfair text-3xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent mb-4"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  Rholux
                </motion.h3>
                <motion.p
                  className="text-gray-400 mb-4"
                  initial={{ opacity: 0 }}
                  animate={isFooterInView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  Precision. Purity. Brilliance.
                </motion.p>
                <motion.p
                  className="text-gray-500 text-sm"
                  initial={{ opacity: 0 }}
                  animate={isFooterInView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  The future of rhodium plating technology.
                </motion.p>
              </motion.div>

              {/* Quick Links */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isFooterInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h4 className="text-white font-semibold mb-4">Quick Links</h4>
                <ul className="space-y-2">
                  {[
                    { name: "Home", path: "/" },
                    { name: "About", path: "/about" },
                    { name: "Product", path: "/#product" },
                    { name: "Industries", path: "/#industries" },
                    { name: "Contact", path: "/#contact" }
                  ].map((link, index) => (
                    <motion.li
                      key={link.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isFooterInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                    >
                      <motion.div
                        whileHover={{ x: 5, color: "#FDE047" }}
                        transition={{ type: "spring", stiffness: 400, damping: 17 }}
                      >
                        <a
                          href={link.path}
                          className="text-gray-400 hover:text-yellow-400 transition-colors duration-300"
                        >
                          {link.name}
                        </a>
                      </motion.div>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              {/* Contact Info and Social */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isFooterInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <h4 className="text-white font-semibold mb-4">Contact</h4>
                <div className="space-y-2 text-gray-400">
                  <motion.p
                    initial={{ opacity: 0, x: -20 }}
                    animate={isFooterInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.5 }}
                    whileHover={{ x: 5, color: "#FDE047" }}
                  >
                    Email: gopinathjirholux@gmail.com
                  </motion.p>
                  <motion.p
                    initial={{ opacity: 0, x: -20 }}
                    animate={isFooterInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.6 }}
                    whileHover={{ x: 5, color: "#FDE047" }}
                  >
                    Phone: +91 9712849208
                  </motion.p>
                  <motion.p
                    initial={{ opacity: 0, x: -20 }}
                    animate={isFooterInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.7 }}
                    whileHover={{ x: 5, color: "#FDE047" }}
                    className="text-sm"
                  >
                    2nd floor, Aval Complex, University Road, Rajkot, Gujarat, India 360005
                  </motion.p>
                  <motion.div
                    className="flex space-x-4 mt-4"
                    initial={{ opacity: 0 }}
                    animate={isFooterInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.6, delay: 0.8 }}
                  >
                    {socialLinks.map((social, index) => (
                      <motion.a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-yellow-400 transition-colors duration-300 capitalize"
                        whileHover={{ scale: 1.1, y: -2, color: "#FDE047" }}
                        transition={{ type: "spring", stiffness: 400, damping: 17 }}
                        initial={{ opacity: 0, y: 10 }}
                        animate={isFooterInView ? { opacity: 1, y: 0 } : {}}
                        style={{ transitionDelay: `${0.9 + index * 0.1}s` }}
                      >
                        {social.name}
                      </motion.a>
                    ))}
                  </motion.div>
                </div>
              </motion.div>
            </div>

            <motion.div
              className="border-t border-gray-800 mt-8 pt-8 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={isFooterInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 1.0 }}
            >
              <motion.p
                className="text-gray-500 text-sm"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                © {new Date().getFullYear()} Rholux. All rights reserved. | Engineered for Excellence | Made by Intency.
              </motion.p>
            </motion.div>
          </div>
        </motion.footer>

      </div>

      {/* Inquiry Modal */}
      <AnimatePresence>
        {openInquiry && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpenInquiry(false)}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 50 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-gray-800/80 border border-gray-700 rounded-2xl p-8 w-full max-w-lg text-white relative"
            >
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setOpenInquiry(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-white"
              >
                <X className="h-6 w-6" />
              </Button>
              <h2 className="font-playfair text-3xl font-bold mb-2 text-center">
                Order <span className="text-yellow-400">Inquiry</span>
              </h2>
              <p className="text-gray-300 mb-6 text-center">
                Fill out the form below and we'll get back to you shortly.
              </p>
              <Inquiry onClose={() => setOpenInquiry(false)} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Products;