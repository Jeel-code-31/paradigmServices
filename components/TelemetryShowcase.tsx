"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, ChevronDown, Compass, Cpu, Settings, Activity, Layers, Wind } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const BOOT_MESSAGES = [
  "FEASIBILITY & MARKET ADVISORY",
  "DETAILED PROCESS & ENGINEERING DESIGN",
  "REGULATORY COMPLIANCE & SAFETY STANDARDS",
  "OPERATIONAL EXCELLENCE & LEAN MODELING",
  "COMMISSIONING & INTEGRATED SOLUTIONS",
  "SYSTEM DEPLOYED. READY FOR LAUNCH"
];

const PARTS = [
  {
    id: "conveyor",
    name: "FEEDBAND INTAKE CONVEYOR",
    spec: "SUS304 FLIGHT BELT // 2.2KW POWER",
    desc: "Automated conveyor line designed for sanitary food transport, featuring quick-tensioning controls and high-load capacity flights.",
    icon: Settings,
    x: 20,
    y: 35,
    scale: 2.2,
    tx: 66,
    ty: 33,
    labelAlign: "right", // place text on the right
    start: 0.15,
    peak: 0.22,
    end: 0.35,
  },
  {
    id: "drum",
    name: "ROTARY SEPARATION DRUM",
    spec: "DYNAMIC DEWATERING // 980 RPM MAX",
    desc: "Centrifugal separation drum with micro-perforated stainless screen panels, ensuring efficient liquid extraction and product sorting.",
    icon: Cpu,
    x: 53,
    y: 22,
    scale: 2.5,
    tx: -7.5,
    ty: 70,
    labelAlign: "left", // place text on the left
    start: 0.38,
    peak: 0.45,
    end: 0.58,
  },
  {
    id: "flume",
    name: "PNEUMATIC COLLECTION FLUME",
    spec: "LAMINAR TRANSPORT // INTEGRATED CIP",
    desc: "Closed-loop horizontal collection flume utilizing vacuum pressure and high-pressure spray headers for active sanitization (Clean-In-Place).",
    icon: Wind,
    x: 35,
    y: 75,
    scale: 2.4,
    tx: 36,
    ty: -60,
    labelAlign: "right", // place text on the right
    start: 0.61,
    peak: 0.68,
    end: 0.81,
  },
  {
    id: "chute",
    name: "VERTICAL DISCHARGE ELEVATOR",
    spec: "CLEATED ELEVATOR // COMPLIANT FLIGHTS",
    desc: "Vertical discharge bucket elevator transferring processed product to high-altitude packaging headers with zero material bruising.",
    icon: Layers,
    x: 80,
    y: 20,
    scale: 2.2,
    tx: -66,
    ty: 66,
    labelAlign: "left", // place text on the left
    start: 0.84,
    peak: 0.90,
    end: 0.98,
  },
];

// --- Boot Loader Component ---
interface BootLoaderProps {
  progress: number;
  isFinished: boolean;
  onComplete: () => void;
}

function BootLoader({ progress, isFinished, onComplete }: BootLoaderProps) {
  const [activeMsgIdx, setActiveMsgIdx] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const targetMsgIdx = Math.min(
      Math.floor((progress / 100) * BOOT_MESSAGES.length),
      BOOT_MESSAGES.length - 1
    );
    if (targetMsgIdx !== activeMsgIdx) {
      setActiveMsgIdx(targetMsgIdx);
      setCharIndex(0);
    }
  }, [progress, activeMsgIdx]);

  useEffect(() => {
    const currentMsg = BOOT_MESSAGES[activeMsgIdx];
    if (charIndex < currentMsg.length) {
      const timer = setTimeout(() => {
        setDisplayedText(currentMsg.slice(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
      }, 15);
      return () => clearTimeout(timer);
    }
  }, [charIndex, activeMsgIdx]);

  return (
    <AnimatePresence onExitComplete={onComplete}>
      {!isFinished && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05, filter: "blur(8px)" }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#F2F5E3] text-[#1A3013]"
        >
          {/* Ambient radial glow */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(186,194,145,0.15)_0%,rgba(0,0,0,0.15)_100%)] pointer-events-none" />
          
          <div className="w-full max-w-lg px-8 flex flex-col items-center z-10 text-center">
            
            {/* Elegant Spinning Icon */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
              className="w-16 h-16 mb-8 text-[#1A3013]/70 flex items-center justify-center"
            >
              <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2" className="w-full h-full">
                <circle cx="50" cy="50" r="40" strokeDasharray="10 5 15 5" />
                <path d="M50 20 V80 M20 50 H80" strokeWidth="1" strokeDasharray="4 4" />
                <circle cx="50" cy="50" r="8" fill="currentColor" className="animate-pulse" />
              </svg>
            </motion.div>

            {/* Logo */}
            <motion.h1 
              initial={{ letterSpacing: "0.1em", opacity: 0 }}
              animate={{ letterSpacing: "0.3em", opacity: 1 }}
              transition={{ duration: 1 }}
              className="text-4xl md:text-5xl font-black tracking-[0.3em] uppercase text-[#1A3013] mb-2 font-black"
            >
              PARADIGM
            </motion.h1>
            
            <p className="text-[10px] tracking-[0.25em] font-mono text-[#1A3013]/60 uppercase mb-12">
              Manufacturing Consulting & Engineering
            </p>

            {/* Clean Progress Box */}
            <div className="w-64 flex flex-col items-center space-y-4">
              {/* Progress Line */}
              <div className="w-full h-[2px] bg-[#1A3013]/10 rounded-full overflow-hidden relative">
                <motion.div
                  className="h-full bg-[#1A3013]"
                  style={{ width: `${progress}%` }}
                  transition={{ ease: "easeOut" }}
                />
              </div>

              {/* Progress Percentage & Status */}
              <div className="w-full flex justify-between items-center text-[10px] font-mono text-[#1A3013]/70 uppercase tracking-widest px-1">
                <span>{Math.round(progress)}%</span>
                <span className="animate-pulse">Loading</span>
              </div>

              {/* Dynamic engineering phase */}
              <div className="h-6 flex items-center justify-center">
                <p className="font-mono text-[9px] text-[#1A3013]/55 uppercase tracking-wider select-none">
                  {displayedText}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// --- HUD Compass & Status Overlay ---
interface HUDOverlayProps {
  scrollProgress: number;
}

function HUDOverlay({ scrollProgress }: HUDOverlayProps) {
  const [rpm, setRpm] = useState(940);
  const [temp, setTemp] = useState(42.5);

  useEffect(() => {
    const interval = setInterval(() => {
      setRpm((prev) => Math.round(prev + (Math.random() - 0.5) * 6));
      setTemp((prev) => +(prev + (Math.random() - 0.5) * 0.2).toFixed(1));
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 z-10 pointer-events-none select-none overflow-hidden font-mono">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="absolute top-8 left-8 w-4 h-4 border-l border-t border-white/10" />
      <div className="absolute top-8 right-8 w-4 h-4 border-r border-t border-white/10" />
      <div className="absolute bottom-8 left-8 w-4 h-4 border-l border-b border-white/10" />
      <div className="absolute bottom-8 right-8 w-4 h-4 border-r border-b border-white/10" />

      {/* Top HUD bar */}
      <div className="absolute top-8 left-12 flex flex-col space-y-1.5 text-left">
        <div className="flex items-center space-x-2">
          <Activity className="w-3.5 h-3.5 text-[#00d6ff] animate-pulse" />
          <span className="text-xs font-bold tracking-[0.15em] text-white">
            PARADIGM DIGITAL TWIN ANALYSIS
          </span>
        </div>
        <span className="text-[9px] text-white/50">MODEL: PROCESSING_LINE_P1</span>
      </div>

      <div className="absolute top-8 right-12 flex flex-col space-y-1 text-right items-end">
        <span className="text-xs font-medium tracking-[0.1em] text-white">
          HD DIAGNOSTICS STREAM
        </span>
        <div className="flex items-center space-x-2 text-[9px] text-[#00d6ff] mt-1">
          <Compass className="w-3.5 h-3.5 animate-[spin_12s_linear_infinite]" />
          <span>SCAN RATE: 120Hz</span>
        </div>
      </div>

      {/* Bottom HUD stats bar */}
      <div className="absolute bottom-8 left-12 right-12 flex justify-between items-center text-[9px] text-white/50 tracking-wider">
        <div className="flex space-x-6">
          <div className="flex items-center space-x-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
            <span>COMM: ONLINE</span>
          </div>
          <div>DRUM_SPEED: <span className="text-white font-bold">{rpm} RPM</span></div>
          <div>TEMP: <span className="text-white font-bold">{temp}°C</span></div>
        </div>
        <div>
          SCROLL TO ZOOM IN DETAILS // TRACK: {(scrollProgress * 100).toFixed(0)}%
        </div>
      </div>
    </div>
  );
}

// --- Interactive Connected Part Labels ---
interface PartLabelsProps {
  scrollProgress: number;
}

function PartLabels({ scrollProgress }: PartLabelsProps) {
  return (
    <div className="absolute inset-0 z-20 pointer-events-none w-full h-full font-mono">
      <svg className="absolute inset-0 w-full h-full hidden md:block">
        <defs>
          <linearGradient id="line-glow-machine" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00D6FF" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#0050FF" stopOpacity="0.2" />
          </linearGradient>
        </defs>

        {PARTS.map((part) => {
          let opacity = 0;
          const r = scrollProgress;

          if (r >= part.start && r <= part.end) {
            opacity = r < part.peak ? (r - part.start) / (part.peak - part.start) : 1;
          } else if (r > part.end && r < part.end + 0.03) {
            opacity = 1 - (r - part.end) / 0.03;
          }

          if (opacity === 0) return null;

          // Target point is always center (50%, 50%) when zoomed!
          const tx = window.innerWidth / 2;
          const ty = window.innerHeight / 2;

          // Label point is on left or right
          const lx = part.labelAlign === "right" ? window.innerWidth * 0.75 : window.innerWidth * 0.25;
          const ly = window.innerHeight * 0.45;

          const startX = part.labelAlign === "right" ? lx - 15 : lx + 15;
          const dx = tx - startX;
          const dy = ty - ly;
          const distance = Math.sqrt(dx * dx + dy * dy);

          return (
            <g key={`line-${part.id}`} style={{ opacity }} className="transition-opacity duration-300">
              <line
                x1={startX}
                y1={ly}
                x2={tx}
                y2={ty}
                stroke="url(#line-glow-machine)"
                strokeWidth="1"
                strokeDasharray={distance}
                strokeDashoffset={distance * (1 - opacity)}
                className="transition-all duration-300"
              />
              <circle
                cx={tx}
                cy={ty}
                r="4"
                fill="#00D6FF"
                className="animate-ping"
                style={{ transformOrigin: `${tx}px ${ty}px` }}
              />
              <circle cx={tx} cy={ty} r="2" fill="#00D6FF" />
            </g>
          );
        })}
      </svg>

      {PARTS.map((part) => {
        let opacity = 0;
        const r = scrollProgress;

        if (r >= part.start && r <= part.end) {
          opacity = r < part.peak ? (r - part.start) / (part.peak - part.start) : 1;
        } else if (r > part.end && r < part.end + 0.03) {
          opacity = 1 - (r - part.end) / 0.03;
        }

        if (opacity === 0) return null;

        const leftPos = part.labelAlign === "left" ? "8%" : "auto";
        const rightPos = part.labelAlign === "right" ? "8%" : "auto";
        const topPos = "35%";

        const IconComponent = part.icon;

        return (
          <div
            key={`label-${part.id}`}
            style={{
              left: leftPos,
              right: rightPos,
              top: topPos,
              opacity,
              transform: `translateY(${(1 - opacity) * 15}px)`,
            }}
            className="absolute flex flex-col max-w-[280px] md:max-w-[340px] transition-all duration-300 pointer-events-auto z-30"
          >
            <div className={`flex flex-col ${part.labelAlign === "left" ? "items-start text-left" : "items-end text-right"}`}>
              <div className="flex items-center space-x-2 text-[#00d6ff] font-bold text-[10px] tracking-widest uppercase">
                <IconComponent className="w-4 h-4 text-[#00d6ff] animate-pulse" />
                <span>{"// "}{part.spec}</span>
              </div>
              <h4 className="text-base md:text-lg font-black tracking-tight text-white mt-1.5">
                {part.name}
              </h4>
              <p className="text-[11px] leading-relaxed text-white/70 mt-2.5 backdrop-blur-md bg-[#050505]/70 border border-white/10 p-3 rounded-sm glass-panel shadow-2xl">
                {part.desc}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

// --- Main Showcase Component ---
export default function TelemetryShowcase({ onComplete }: { onComplete: () => void }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  const [loadingProgress, setLoadingProgress] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [started, setStarted] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Simulated high-tech scan preload (since we only load 1 local file, it's instant, but this adds flavor)
  useEffect(() => {
    const img = new Image();
    img.src = "/machine.jpg";
    img.onload = () => {
      // Fast progress simulation
      let progress = 0;
      const interval = setInterval(() => {
        progress += 8;
        if (progress >= 100) {
          setLoadingProgress(100);
          setImageLoaded(true);
          clearInterval(interval);
        } else {
          setLoadingProgress(progress);
        }
      }, 50);
    };
    img.onerror = () => {
      setImageLoaded(true);
    };
  }, []);

  // Main Zoom & Scroll Pinning Logic
  useEffect(() => {
    if (!started) return;

    const img = imgRef.current;
    if (!img) return;

    // GSAP ScrollTrigger timeline to handle zooming & translating to parts
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=400%",
        scrub: 0.5,
        pin: true,
        pinSpacing: true,
        onUpdate: (self) => {
          setScrollProgress(self.progress);
        },
      },
    });

    // Animate machine image transform relative to scroll progress
    tl.to(img, { scale: 1, xPercent: 0, yPercent: 0, duration: 1 })
      
      // Zoom into part 1: Feedband Conveyor
      .to(img, {
        scale: 2.2,
        xPercent: 66,
        yPercent: 33,
        duration: 2.5,
        ease: "power2.inOut",
      })
      .to({}, { duration: 1.5 }) // Hold
      
      // Zoom into part 2: Separation Drum
      .to(img, {
        scale: 2.5,
        xPercent: -7.5,
        yPercent: 70,
        duration: 2.5,
        ease: "power2.inOut",
      })
      .to({}, { duration: 1.5 }) // Hold

      // Zoom into part 3: Collection Flume
      .to(img, {
        scale: 2.4,
        xPercent: 36,
        yPercent: -60,
        duration: 2.5,
        ease: "power2.inOut",
      })
      .to({}, { duration: 1.5 }) // Hold

      // Zoom into part 4: Discharge Elevator
      .to(img, {
        scale: 2.2,
        xPercent: -66,
        yPercent: 66,
        duration: 2.5,
        ease: "power2.inOut",
      })
      .to({}, { duration: 1.5 }) // Hold

      // Zoom out back to full overview
      .to(img, {
        scale: 1,
        xPercent: 0,
        yPercent: 0,
        duration: 2.5,
        ease: "power2.inOut",
      });

    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 200);

    return () => {
      clearTimeout(timer);
      if (tl.scrollTrigger) tl.scrollTrigger.kill();
      tl.kill();
    };
  }, [started]);

  const onBootComplete = () => {
    setStarted(true);
    onComplete();
  };

  const overlayGlowOpacity = Math.min(scrollProgress / 0.1, 1) * (1 - scrollProgress);

  return (
    <>
      {/* Boot Loading Screen */}
      <BootLoader
        progress={loadingProgress}
        isFinished={imageLoaded}
        onComplete={onBootComplete}
      />

      {/* Main Interactive Telemetry Frame */}
      {started && (
        <div ref={containerRef} className="relative w-full h-screen bg-[#020202] overflow-hidden">
          
          {/* Zoomable Image Container */}
          <div className="absolute inset-0 w-full h-full flex items-center justify-center overflow-hidden bg-black">
            <img
              ref={imgRef}
              src="/machine.jpg"
              alt="Industrial Processing Machine"
              className="w-full h-full object-cover origin-center"
              style={{
                filter: "brightness(1.1) contrast(1.05) saturate(1.05)",
              }}
            />
            {/* Ambient Dark Vignette overlay */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,rgba(0,0,0,0.35)_100%)] pointer-events-none" />
          </div>

          {/* Exploded Radial Glow Overlay */}
          <div
            style={{ opacity: overlayGlowOpacity * 0.15 }}
            className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,214,255,0.2)_0%,rgba(0,80,255,0.05)_60%,transparent_90%)] mix-blend-screen pointer-events-none transition-opacity duration-500"
          />

          {/* HUD Compasses, Coordinates, and Grid overlays */}
          <HUDOverlay scrollProgress={scrollProgress} />

          {/* Interactive Connected Part Labels */}
          <PartLabels scrollProgress={scrollProgress} />

          {/* Scroll Indicator Prompt (only shows at beginning) */}
          {scrollProgress < 0.1 && (
            <div className="absolute bottom-16 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-2 text-white/50 text-[10px] font-mono tracking-[0.2em] uppercase transition-opacity duration-300">
              <span>EXPLORE INDUSTRIAL HARDWARE</span>
              <ChevronDown className="w-4 h-4 animate-bounce text-[#00d6ff]" />
            </div>
          )}

          {/* Final CTA Screen to guide scroll down to content */}
          {scrollProgress > 0.95 && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 bg-black/60 backdrop-blur-sm z-30"
            >
              <span className="text-xs md:text-sm font-bold text-[#00d6ff] tracking-[0.25em] uppercase mb-4 font-mono text-shadow-glow">
                SYSTEM CALIBRATION COMPLETE
              </span>
              <h2 className="text-3xl md:text-6xl font-extrabold tracking-tighter text-white leading-none uppercase max-w-4xl mb-4 font-mono">
                ENGINEERING BEYOND EXCELLENCE
              </h2>
              <p className="text-sm md:text-base text-white/70 max-w-xl font-medium tracking-wide mb-10 font-mono">
                Paradigm combines advanced process automation with structural integrity.
              </p>

              <button
                onClick={() => {
                  const nextSection = document.getElementById("main-site-content");
                  if (nextSection) {
                    nextSection.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="group relative flex items-center justify-center px-8 py-4 bg-[#0050ff]/80 hover:bg-[#0050ff] text-white font-semibold text-sm rounded-sm border border-[#00d6ff]/40 transition-all duration-300 backdrop-blur-md shadow-lg shadow-[#0050ff]/20 overflow-hidden"
              >
                <span className="relative z-10 flex items-center space-x-2 font-mono">
                  <span>ENTER PARADIGM HOME</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-0 bg-gradient-to-r from-[#00d6ff]/20 to-transparent transition-transform duration-500 ease-out" />
              </button>
            </motion.div>
          )}

        </div>
      )}
    </>
  );
}
