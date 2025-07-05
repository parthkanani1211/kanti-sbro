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
  ? "w-32 h-44 sm:w-40 sm:h-56 md:w-48 md:h-64 lg:w-56 lg:h-72"
  : "w-44 h-60 sm:w-56 sm:h-80 md:w-64 md:h-[22rem] lg:w-[22rem] lg:h-[26rem]";


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

  // Displayed volume label based on prop
const volumeLabel =
  volume === "10ml" ? (
    <div className="leading-snug">
      <div>0.2 gm Rh / 10 ml Pack</div>
      <div className="text-yellow-500 font-semibold">First in Industry</div>
    </div>
  ) : volume === "100ml" ? (
    "2 gm Rh / 100 ml Pack"
  ) : (
    volume
  );


  return (
    <div className="relative flex flex-col items-center">
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
                  ... (optional label here)
                </motion.div> */}

                {/* Animated Liquid */}
                {/* <motion.div
                  className="absolute bottom-0 left-1 right-1 sm:left-2 sm:right-2 bg-gradient-to-t from-yellow-500/30 to-yellow-300/20 rounded-b-lg"
                  ... */}
                {/* /> */}

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
      {/* Volume Label (Always visible below bottle) */}
<motion.div
  className="mt-6 text-center"
  initial={{ opacity: 0, y: 10 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.5, duration: 0.3 }}
>
  <p className="text-yellow-400 text-xs sm:text-sm font-medium">
    {volumeLabel}
  </p>
</motion.div>


    </div>
  );
};
