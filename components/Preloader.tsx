"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface PreloaderProps {
  onComplete: () => void;
}

export default function Preloader({ onComplete }: PreloaderProps) {
  const [isVisible, setIsVisible] = useState(true);

  const handleVideoEnded = () => {
    setIsVisible(false); 
    setTimeout(onComplete, 800);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="preloader-root"
        >
          {/* Background Video */}
          <video
            className="preloader-video"
            src="/preloader.mp4"
            autoPlay
            muted
            playsInline
            preload="auto"
            aria-hidden="true"
            onEnded={handleVideoEnded}
          />
          
        
          <div className="preloader-overlay" />

          <style>{`
            .preloader-root {
              position: fixed;
              inset: 0;
              z-index: 9999;
              overflow: hidden;
            }

            .preloader-video {
              position: absolute;
              inset: 0;
              width: 100%;
              height: 100%;
              object-fit: cover;
            }

          `}</style>
        </motion.div>
      )}
    </AnimatePresence>
  );
}