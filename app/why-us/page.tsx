"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import {
  ShieldCheck,
  ArrowRight,
  Maximize2,
  FileCheck,
  Compass,
  Layers,
  Award,
  X,
  Target,
  TrendingUp,
  Heart
} from "lucide-react";

const COLORS = {
  primary: "#1A3013", // Deep Forest Green
  accent: "#BAC291",  // Sage Green
  bgSecondary: "#F7F9EF"
};

const STATS = [
  { label: "Years Experience", value: "15+" },
  { label: "Projects Completed", value: "500+" },
  { label: "Global Clients", value: "120+" },
  { label: "Certified Audits", value: "1k+" },
];

const CERTIFICATES = [
  { id: 1, title: "ISO 9001:2015", issuer: "Quality Management System", src: "https://images.unsplash.com/photo-1589330694653-ded6df03f754?auto=format&fit=crop&q=80" },
  { id: 2, title: "HACCP Certified", issuer: "Food Safety Standards", src: "https://images.unsplash.com/photo-1621243804936-775306a8f2e3?auto=format&fit=crop&q=80" },
  { id: 3, title: "BRC Global Standard", issuer: "Food Safety Compliance", src: "https://images.unsplash.com/photo-1589330273594-fade1ee91647?auto=format&fit=crop&q=80" },
  { id: 4, title: "US FDA Compliant", issuer: "Regulatory Excellence", src: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80" },
];

export default function WhyUs() {
  const [activeCert, setActiveCert] = useState<typeof CERTIFICATES[0] | null>(null);

  // Parallax Effect for Hero
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);

  // Prevent background scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = activeCert ? "hidden" : "unset";
  }, [activeCert]);

  return (
    <main className="min-h-screen bg-white text-[#1A3013] selection:bg-[#BAC291] selection:text-[#1A3013]">

      {/* 1. TOP STATUS BAR */}
      <div style={{ backgroundColor: COLORS.accent }} className="w-full py-3 px-10 sticky top-0 z-[60] flex justify-between items-center shadow-sm">
        <span style={{ color: COLORS.primary }} className="text-[10px] font-black uppercase tracking-[0.4em]">
          The Paradigm Advantage // 2026
        </span>
        <div className="flex gap-4 items-center">
          <div className="w-2 h-2 rounded-full bg-[#1A3013] animate-pulse" />
          <span className="text-[10px] font-bold uppercase text-[#1A3013]">Global Compliance Active</span>
        </div>
      </div>

      {/* 2. HERO SECTION */}
      <section className="relative h-[80vh] flex items-center bg-[#1A3013] overflow-hidden">
        <motion.div style={{ y: y1 }} className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-[-10%] right-[-10%] w-[60%] h-[60%] bg-[#BAC291] rounded-full blur-[150px]" />
        </motion.div>

        <div className="relative z-10 max-w-7xl mx-auto px-10 w-full">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-6xl md:text-8xl font-black text-white leading-[0.9] tracking-tighter mb-8">
              PRECISION <br />
              <span style={{ color: COLORS.accent }}>IN PROCESS.</span>
            </h1>
            <p className="max-w-xl text-white/60 text-lg md:text-xl font-medium leading-relaxed font-afaca">
              We bridge the gap between regulatory complexity and operational reality through multidisciplinary engineering and uncompromising integrity.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 3. IMPACT STATS */}
      <section className="py-20 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-10 grid grid-cols-2 lg:grid-cols-4 gap-12">
          {STATS.map((stat, i) => (
            <div key={i} className="text-center lg:text-left">
              <h3 style={{ color: COLORS.primary }} className="text-5xl md:text-6xl font-black mb-2 tracking-tighter">{stat.value}</h3>
              <p className="text-gray-400 font-bold uppercase text-[10px] tracking-[0.3em]">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. REALISTIC VALUES SECTION */}
      <section className="py-32 max-w-7xl mx-auto px-10">
        <div className="grid lg:grid-cols-3 gap-16">
          <div className="space-y-6">
            <ShieldCheck className="text-[#BAC291]" size={48} />
            <h3 className="text-3xl font-bold tracking-tight">Technical Substance</h3>
            <p className="text-gray-500 font-medium leading-relaxed font-afaca">Our audits go beyond checklists. We analyze the root cause of non-compliance to ensure long-term facility safety.</p>
          </div>
          <div className="space-y-6">
            <TrendingUp className="text-[#BAC291]" size={48} />
            <h3 className="text-3xl font-bold tracking-tight">Global Connectivity</h3>
            <p className="text-gray-500 font-medium leading-relaxed font-afaca">Operating across India and international borders, we navigate BRC, US FDA, and FSSAI landscapes with local expertise.</p>
          </div>
          <div className="space-y-6">
            <Heart className="text-[#BAC291]" size={48} />
            <h3 className="text-3xl font-bold tracking-tight">Adaptive Learning</h3>
            <p className="text-gray-500 font-medium leading-relaxed font-afaca">The regulatory world changes daily. Our team stays at the forefront of global hygiene and pharmaceutical trends.</p>
          </div>
        </div>
      </section>

      {/* 5. RECENT CODE: THE 3D CERTIFICATE VAULT */}
      <section style={{ backgroundColor: COLORS.primary }} className="py-40 px-10 relative overflow-hidden">
        {/* Decorative Background for the Vault */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-[#BAC291] rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto flex flex-col items-center">
          <div className="text-center mb-24 relative z-10">
            <motion.h2
              initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
              style={{ color: COLORS.accent }}
              className="text-[10px] font-black uppercase tracking-[0.6em] mb-4"
            >
              Official Credentials
            </motion.h2>
            <h3 className="text-5xl md:text-7xl font-black text-white tracking-tighter uppercase">The Vault.</h3>
          </div>

          {/* 3D Perspective Container */}
          <div className="relative w-full h-[600px] flex items-center justify-center [perspective:2000px]">
            {CERTIFICATES.map((cert, index) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                whileHover={{
                  y: -40,
                  rotateY: 0,
                  scale: 1.05,
                  zIndex: 100,
                  transition: { type: "spring", stiffness: 300, damping: 20 }
                }}
                onClick={() => setActiveCert(cert)}
                className="absolute w-72 md:w-[320px] aspect-[6/5] cursor-pointer group"
                style={{
                  rotateY: (index - 1.5) * 15, // Creates the fanned effect
                  x: (index - 1.5) * 130,      // Spacing between cards
                  zIndex: index,
                  transformStyle: "preserve-3d"
                }}
              >
                {/* Acrylic Glass Frame / Recent Code Styling */}
                <div className="w-full h-full bg-white/5 backdrop-blur-xl border border-white/20 rounded-3xl p-4 shadow-[0_30px_60px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col">
                  <div className="flex-1 rounded-2xl bg-white relative overflow-hidden">
                    <img src={cert.src} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-700" alt={cert.title} />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1A3013]/60 to-transparent opacity-0 group-hover:opacity-100 transition-all" />
                    <Maximize2 className="absolute bottom-6 right-6 text-white opacity-0 group-hover:opacity-100" />
                  </div>
                  <div className="pt-6 pb-2 px-2">
                    <h4 style={{ color: COLORS.accent }} className="font-bold text-lg leading-tight mb-1">{cert.title}</h4>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. MODAL: SPLIT-SCREEN VERIFICATION */}
      <AnimatePresence>
        {activeCert && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-[#1A3013]/95 backdrop-blur-2xl flex items-center justify-center p-6"
          >
            <motion.div
              initial={{ scale: 0.9, y: 30 }} animate={{ scale: 1, y: 0 }}
              className="bg-white max-w-5xl w-full rounded-[3rem] overflow-hidden flex flex-col md:flex-row relative shadow-2xl"
            >
              <button onClick={() => setActiveCert(null)} className="absolute top-10 right-10 p-4 text-yellow-300 hover:text-white bg-green-700 transition-colors">
                <X size={32} strokeWidth={5} />
              </button>

              <div className="flex w-full items-center justify-center bg-[#F7F9EF] pt-10 p-6 md:w-5/5 md:p-12">
                <img
                  src={activeCert.src}
                  alt={activeCert.title || "Certification Display"}
                  className="h-auto max-w-full rounded-sm shadow-2xl transition-all duration-300 hover:scale-[1.02]"
                  loading="lazy"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}