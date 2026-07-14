"use client";

import { Sign } from "crypto";
import { motion } from "framer-motion";
import { Shield, Eye, Users, CheckCircle, ArrowRight, Star, Download, Wind } from "lucide-react";

const COLORS = {
  primary: "#1A3013",
  accent: "#BAC291",
};


export default function SafetySigns() {
  const openPdf = () => {
    window.open('/food-safety-signage.pdf', '_blank');
  };

  return (
    <main className="min-h-screen bg-[#FDFDFD]">
      {/* THEMED TOP BAR */}
      <div style={{ backgroundColor: COLORS.accent }} className="w-full py-4 px-10 shadow-sm">
        <h1 style={{ color: COLORS.primary }} className="text-sm font-black uppercase tracking-[0.3em]">
          Food Safety Signages
        </h1>
      </div>

      {/* HERO SECTION */}
      <section style={{ backgroundColor: COLORS.primary }} className="relative py-24 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
              Food Safety Signage Catelogue<br /> 
            </h2>
            <p className="text-lg md:text-xl text-white/70 leading-relaxed font-afaca">
              Awarness of Food Hygiene is very important. Poor hygiene process will spread germs that are harmful to health which can cause food poisoining.<br/>
              We are here with food safty Posters to help nudge your employees and family members to take action against disease spreading germs.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={openPdf}
                style={{ backgroundColor: COLORS.accent, color: COLORS.primary }}
                className="px-12 py-5 rounded-full text-lg font-black uppercase tracking-widest hover:bg-white hover:scale-105 transition-all flex items-center gap-4"
              >
                <Download size={24} />
              View More
              </button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative opacity-20 hidden lg:block"
          >
           <img src="/food-safety-signage.png" alt="Food Safety Signage" className="w-full h-auto" />
          </motion.div>
        </div>
      </section>

            <section style={{ backgroundColor: COLORS.primary }} className="relative py-24 pt-25 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
              Safety Signages<br /> 
      
            </h2>
            <p className="text-lg md:text-xl text-white/70 leading-relaxed font-afaca">
             Safety Signages for the Food And company is a crucial aspect of ensuring the well-being of employees, customers, and visitors. These signages serve as visual cues to communicate important safety information, guidelines, and warnings related to food handling, preparation, and storage. They play a vital role in preventing accidents, promoting hygiene practices, and maintaining a safe environment within the food industry. By effectively conveying safety messages through clear and concise signage, businesses can enhance awareness and compliance with food safety standards, ultimately contributing to the overall health and safety of everyone involved in the food service process.
             <br/>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={openPdf}
                style={{ backgroundColor: COLORS.accent, color: COLORS.primary }}
                className="px-12 py-5 rounded-full text-lg font-black uppercase tracking-widest hover:bg-white hover:scale-105 transition-all flex items-center gap-4"
              >
                <Download size={24} />
                Download Catalogue
              </button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative opacity-20 hidden lg:block"
          >
            <img src="/food-safety-signage.png" alt="Food Safety Signage" className="w-full h-auto" />
          </motion.div>
        </div>
      </section>

    </main>
  );
}