import { useState } from "react";
import { motion } from "framer-motion";

interface InteractiveBottleProps {
  size?: "small" | "large";
  volume?: string;
}

export const InteractiveBottle = ({
  size = "large",
  volume = "100ml",
}: InteractiveBottleProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const rotateX = (e.clientY - centerY) / 10;
    const rotateY = (e.clientX - centerX) / 10;

    setRotation({ x: -rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 });
    setIsHovered(false);
  };

  const isSmall = size === "small";

  // --- NEW: Conditionally set the bottle image source ---
  // IMPORTANT: Make sure you have a small bottle image at this path in your `public` folder.
  const bottleImageSrc = isSmall
    ? "/lovable-uploads/rbottel-removebg-preview2.png" // Path for SMALL bottle
    : "/lovable-uploads/rbootle-removebg-preview.png"; // Path for LARGE bottle

  // Responsive sizing with different breakpoints
  const containerSize = isSmall
    ? "w-24 h-32 sm:w-32 sm:h-44 md:w-40 md:h-52 lg:w-48 lg:h-64"
    : "w-32 h-44 sm:w-48 sm:h-64 md:w-64 md:h-80 lg:w-80 lg:h-96";

  const bottleSize = isSmall
    ? "w-12 h-24 sm:w-16 sm:h-32 md:w-20 md:h-40 lg:w-20 lg:h-48"
    : "w-16 h-32 sm:w-24 sm:h-48 md:w-32 md:h-64 lg:w-32 lg:h-80";

  const labelSize = isSmall
    ? "h-10 sm:h-14 md:h-16 lg:h-20"
    : "h-16 sm:h-24 md:h-28 lg:h-32";

  const labelPadding = isSmall
    ? "p-1 sm:p-1.5 md:p-2 lg:p-2"
    : "p-1.5 sm:p-2 md:p-2.5 lg:p-3";

  const titleSize = isSmall
    ? "text-xs sm:text-sm md:text-sm lg:text-sm"
    : "text-sm sm:text-base md:text-lg lg:text-lg";

  const contentSize = isSmall
    ? "text-[10px] sm:text-xs md:text-xs lg:text-xs"
    : "text-xs sm:text-xs md:text-sm lg:text-xs";

  const labelTop = isSmall
    ? "top-4 sm:top-6 md:top-7 lg:top-8"
    : "top-6 sm:top-10 md:top-12 lg:top-16";

  return (
    <div className="relative">
      <motion.div
        className={`${containerSize} relative cursor-pointer`}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onMouseEnter={() => setIsHovered(true)}
        style={{
          perspective: "1000px",
        }}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        whileHover={{ scale: 1.05 }}
      >
        <motion.div
          className="w-full h-full relative preserve-3d"
          animate={{
            rotateX: rotation.x,
            rotateY: rotation.y,
          }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          {/* Bottle Container */}
          <div className="relative w-full h-full">
            {/* Enhanced Glow Effect */}
            <motion.div
              //className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-yellow-600/20 rounded-2xl sm:rounded-3xl blur-lg sm:blur-xl"
              animate={{
                opacity: isHovered ? 0.8 : 0.4,
                scale: isHovered ? 1.2 : 1,
              }}
              transition={{ duration: 0.4 }}
            />

            {/* Additional floating glow particles */}
            {[...Array(isSmall ? 2 : 3)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 sm:w-3 sm:h-3 bg-yellow-400/30 rounded-full blur-sm"
                animate={{
                  x: [0, 15, -15, 0],
                  y: [0, -20, 20, 0],
                  opacity: [0.3, 0.8, 0.3],
                }}
                transition={{
                  duration: 3 + i,
                  repeat: Infinity,
                  delay: i * 0.5,
                }}
                style={{
                  left: `${30 + i * 20}%`,
                  top: `${40 + i * 10}%`,
                }}
              />
            ))}

            {/* Bottle Shape */}
            <div className="relative z-10 w-full h-full flex items-center justify-center">
              <motion.div
                // className={`${bottleSize} relative overflow-hidden shadow-xl sm:shadow-2xl`}
                whileHover={{
                  //boxShadow: "0 25px 50px -12px rgba(245, 197, 66, 0.25)"
                }}
                transition={{ duration: 0.3 }}
              >
                {/* === BOTTLE IMAGE === */}
                <motion.img
                  src={bottleImageSrc} // UPDATED: Using the dynamic variable here.
                  alt="Rholux Bottle"
                  // className="absolute inset-0 w-full h-full object-contain"
                  animate={{ scale: isHovered ? 1.02 : 1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                />

                {/* Label with hover animation */}
                {/* <motion.div 
                  className={`absolute ${labelTop} left-1 right-1 sm:left-2 sm:right-2 ${labelSize} bg-gradient-to-b from-white to-gray-100 rounded-md sm:rounded-lg shadow-md sm:shadow-lg`}
                  whileHover={{ scale: 1.02, y: -2 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <div className={`${labelPadding} text-center`}>
                    <motion.h3 
                      className={`font-playfair ${titleSize} font-bold text-gray-900 mb-0.5 sm:mb-1`}
                      animate={{ color: isHovered ? "#D4AF37" : "#1F2937" }}
                      transition={{ duration: 0.3 }}
                    >
                      RHOLUX
                    </motion.h3>
                    <p className={`${contentSize} text-gray-700 mb-0.5 sm:mb-1 md:mb-2`}>108</p>
                    <div className={`${contentSize} text-gray-600 leading-tight`}>
                      <p className="leading-tight">Rhodium Plating</p>
                      <p className="leading-tight">Solution</p>
                      <motion.p 
                        className={`mt-0.5 sm:mt-1 md:mt-2 text-yellow-600 font-semibold ${contentSize}`}
                        animate={{ scale: isHovered ? 1.1 : 1 }}
                        transition={{ type: "spring", stiffness: 400, damping: 17 }}
                      >
                        2g Rh/{volume}
                      </motion.p>
                    </div>
                  </div>
                </motion.div> */}

                {/* Animated Liquid */}
                {/* <motion.div
                  className="absolute bottom-0 left-1 right-1 sm:left-2 sm:right-2 bg-gradient-to-t from-yellow-500/30 to-yellow-300/20 rounded-b-lg"
                  style={{ height: "60%" }}
                  animate={{
                    height: isHovered ? "65%" : "60%",
                    background: isHovered 
                      ? "linear-gradient(to top, rgba(245, 158, 11, 0.4), rgba(252, 211, 77, 0.3))"
                      : "linear-gradient(to top, rgba(245, 158, 11, 0.3), rgba(252, 211, 77, 0.2))"
                  }}
                  transition={{ duration: 0.4 }}
                /> */}

                {/* Enhanced Reflection */}
                <motion.div
                  // className="absolute top-0 left-0 w-3 sm:w-4 md:w-6 h-full bg-gradient-to-r from-white/20 to-transparent rounded-l-lg"
                  animate={{ opacity: [0.6, 1, 0.6] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Volume Label */}
      {/* <motion.div
        className="absolute -bottom-6 sm:-bottom-8 left-1/2 transform -translate-x-1/2 text-center"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.3 }}
      >
        <p className="text-yellow-400 text-xs sm:text-sm font-medium">{volume}</p>
      </motion.div> */}
    </div>
  );
};