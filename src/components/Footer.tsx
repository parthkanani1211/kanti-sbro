import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";

export const Footer = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const socialLinks = [
    { name: "LinkedIn", url: "https://www.linkedin.com/in/your-profile" },
    { name: "Instagram", url: "https://www.instagram.com/rholux_official" }
  ];

  return (
    <motion.footer
      ref={ref}
      className="bg-black py-12 px-4 border-t border-gray-800 relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.8 }}
    >
      {/* Animated background elements */}
      <motion.div
        className="absolute top-0 left-0 w-32 h-32 bg-yellow-400/5 rounded-full blur-xl"
        animate={{
          x: [0, 50, 0],
          y: [0, 25, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 15, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-24 h-24 bg-yellow-600/5 rounded-full blur-xl"
        animate={{
          x: [0, -30, 0],
          y: [0, -15, 0],
          scale: [1.1, 1, 1.1],
        }}
        transition={{ duration: 12, repeat: Infinity, delay: 3 }}
      />

      <div className="container mx-auto relative z-10">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Logo and Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
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
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Precision. Purity. Brilliance.
            </motion.p>
            <motion.p
              className="text-gray-500 text-sm"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              The future of rhodium plating technology.
            </motion.p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
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
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                >
                  <motion.div
                    whileHover={{ x: 5, color: "#FDE047" }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <Link
                      to={link.path}
                      className="text-gray-400 hover:text-yellow-400 transition-colors duration-300"
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info and Social */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <div className="space-y-2 text-gray-400">
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.5 }}
                whileHover={{ x: 5, color: "#FDE047" }}
              >
                Email: gopinathjirholux@gmail.com
              </motion.p>
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.6 }}
                whileHover={{ x: 5, color: "#FDE047" }}
              >
                Phone: +91 9712849208
              </motion.p>
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.7 }}
                whileHover={{ x: 5, color: "#FDE047" }}
                className="text-sm"
              >
                2nd floor, Aval Complex, University Road, Rajkot, Gujarat, India 360005
              </motion.p>
              <motion.div
                className="flex space-x-4 mt-4"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-yellow-400 transition-colors duration-300 capitalize"
                    whileHover={{
                      scale: 1.1,
                      y: -2,
                      color: "#FDE047"
                    }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
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
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1.0 }}
        >
          <motion.p
            className="text-gray-500 text-sm"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            © 2025 Rholux. All rights reserved. | Engineered for Excellence | Made by Intency.
          </motion.p>
        </motion.div>
      </div>
    </motion.footer>
  );
};
