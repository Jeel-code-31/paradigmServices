"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export default function ScrollToTop() {
  const { scrollYProgress } = useScroll();
  const [isVisible, setIsVisible] = useState(false);
  
  // Smooth the scroll percentage
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const percentage = useTransform(smoothProgress, [0, 1], [0, 100]);
  const [percentText, setPercentText] = useState(0);

  useEffect(() => {
    const unsubscribe = percentage.on("change", (latest) => {
      setPercentText(Math.round(latest));
    });
    return () => unsubscribe();
  }, [percentage]);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const text = "PARADIGM • MANAGING QUALITY • ";

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.5 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="fixed bottom-8 right-8 z-[100] cursor-pointer group select-none"
      onClick={scrollToTop}
    >
      <div className="relative w-24 h-24 flex items-center justify-center">
        {/* Rotating Circular Text */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
          className="absolute inset-0"
        >
          <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible">
            <defs>
              <path
                id="textPath"
                d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
              />
            </defs>
            <text className="text-[7.5px] font-bold uppercase tracking-[0.2em] fill-gray-500 group-hover:fill-[#4CAF50] transition-colors">
              <textPath href="#textPath">
                {text}
              </textPath>
            </text>
          </svg>
        </motion.div>

        {/* Progress Ring */}
        <svg className="w-16 h-16 transform -rotate-90">
          <circle
            cx="32"
            cy="32"
            r="28"
            stroke="currentColor"
            strokeWidth="2"
            fill="transparent"
            className="text-gray-100"
          />
          <motion.circle
            cx="32"
            cy="32"
            r="28"
            stroke="currentColor"
            strokeWidth="3"
            fill="transparent"
            strokeDasharray="175.93"
            style={{ pathLength: smoothProgress }}
            className="text-[#4CAF50] drop-shadow-[0_0_8px_rgba(76,175,80,0.3)] shadow-success-green"
          />
        </svg>

        {/* Percentage Score */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <span className="text-sm font-numbers font-bold text-gray-800">
            {percentText}%
          </span>
        </div>
        
        {/* Subtle Inner Pulse */}
        <div className="absolute inset-0 flex items-center justify-center -z-10 group-hover:scale-110 transition-transform duration-500">
          <div className="w-12 h-12 bg-white rounded-full shadow-2xl" />
        </div>
      </div>
    </motion.div>
  );
}
