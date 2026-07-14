"use client";

import { useState, useEffect, ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, X } from "lucide-react";

// Theme Colors
const COLORS = {
  primary: "#1A3013", // Deep Forest Green
  accent: "#BAC291",  // Sage/Lime Green
};

// --- DATA TYPES ---
type ClientProject = {
  id: string;
  category: string;
  title: string;
  description: string | ReactNode;
  Highlight?: string | ReactNode;
  featuredImage: string;
  gallery: { id: number; src: string; alt: string }[];
};

// --- CLIENT LOGOS DATA ---
// Add your actual image paths in the 'src' field
const CLIENTS = [
  { name: "Amul", src: "/logos/amul.png" },
  { name: "Everest", src: "/logos/everest.png" },
  { name: "ITC", src: "/logos/itc.png" },
  { name: "Organic India", src: "/logos/organic.png" },
  { name: "Parle", src: "/logos/parle.png" },
  { name: "Godrej", src: "/logos/godrej.png" },
  { name: "Fazlani", src: "/logos/fazlani.png" },
  { name: "Unilever", src: "/logos/unilever.png" },
  { name: "Bikaji", src: "/logos/bikaji.png" },
  { name: "ADF Foods", src: "/logos/adf.png" },
  { name: "Ferrero", src: "/logos/ferrero.png" },
  { name: "Almarai", src: "/logos/almarai.png" },
  { name: "Capricorn", src: "/logos/capricorn.png" },
  { name: "Ching's Secret", src: "/logos/chings.png" },
  { name: "Chitale", src: "/logos/chitale.png" },
  { name: "Jubilant", src: "/logos/jubilant.png" },
  { name: "Diageo", src: "/logos/diageo.png" },
  { name: "Döhler", src: "/logos/dohler.png" },
  { name: "Foodland", src: "/logos/foodland.png" },
  { name: "Frooti", src: "/logos/frooti.png" },
  { name: "Global Gourmet", src: "/logos/global.png" },
  { name: "Haldiram's", src: "/logos/haldirams.png" },
  { name: "IBM", src: "/logos/ibm.png" },
  { name: "Infosys", src: "/logos/infosys.png" },
  { name: "Kellogg's", src: "/logos/kelloggs.png" },
  { name: "Mapro", src: "/logos/mapro.png" },
  { name: "Walmart", src: "/logos/walmart.png" },
  { name: "Vadilal", src: "/logos/vadilal.png" },
];

const clientProjects: ClientProject[] = [
  {
    id: "project-1",
    category: "Food & FMCG",
    title: "Bikaji Foods, Bikaner",
    description: (
      <>
        Project Cost: 140 cr. (Appx)
        <br />
        Total Build up area: 5.5 Lakh sq.ft.
        <br />
        Project Duration: 2 Years
      </>
    ),
    Highlight: (
      <>
        16 snacks lines (Phase 1) with throughout planned for 480 TPD
        <br />
        Plant Designed to meet US FDA and global food safety- BRC Standards.<br />
        Scope involved in equipment selection, Process engineering, Layouting, Utility designing.
      </>
    ),
    featuredImage: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80",
    gallery: [
      { id: 1, src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80", alt: "Lab testing facility" },
    ]
  },
  // ... other projects remain the same
];

export default function OurWork() {
  const [selectedProject, setSelectedProject] = useState<ClientProject | null>(null);

  useEffect(() => {
    if (selectedProject) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "unset";
    return () => { document.body.style.overflow = "unset"; };
  }, [selectedProject]);

  return (
    <main className="min-h-screen bg-paradigm-bg">
      <section className="max-w-7xl mx-auto px-6 pb-10">
        <div style={{ backgroundColor: COLORS.accent }} className="w-full py-3 px-6 rounded-t-xl mb-4">
          <h2 style={{ color: COLORS.primary }} className="font-bold text-lg uppercase tracking-wider">
            Major Clients in Food & FMCG
          </h2>
        </div>
        
        <motion.div 
          variants={{
            hidden: { opacity: 0 },
            show: { opacity: 1, transition: { staggerChildren: 0.05 } }
          }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4"
        >
          {CLIENTS.map((client, idx) => (
            <motion.div
              key={idx}
              variants={{
                hidden: { opacity: 0, scale: 0.8 },
                show: { opacity: 1, scale: 1 }
              }}
              whileHover={{ scale: 1.05, borderColor: COLORS.accent }}
              className="aspect-square bg-white border border-gray-100 rounded-lg flex items-center justify-center p-4 shadow-sm transition-colors hover:shadow-md cursor-pointer"
            >
              {/* Replace with actual <img> tag when you have logos */}
              <div className="text-center">
                <p className="text-[10px] uppercase font-bold text-gray-400 mb-1">{client.name}</p>
                <div className="w-12 h-12 bg-gray-50 rounded flex items-center justify-center text-xs font-bold text-gray-300">
                  LOGO
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>
       
      <section className="max-w-7xl mx-auto px-6 pb-32">
        {/* Styled Title Bar similar to your screenshot */}
        <div style={{ backgroundColor: COLORS.accent }} className="w-full py-3 px-6 rounded-t-xl mb-4">
          <h2 style={{ color: COLORS.primary }} className="font-bold text-lg uppercase tracking-wider">
            Major Clients in Pharma & Chemicals
          </h2>
        </div>
      

        {/* Responsive Grid */}
        <motion.div 
          variants={{
            hidden: { opacity: 0 },
            show: { opacity: 1, transition: { staggerChildren: 0.05 } }
          }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4"
        >
          {CLIENTS.map((client, idx) => (
            <motion.div
              key={idx}
              variants={{
                hidden: { opacity: 0, scale: 0.8 },
                show: { opacity: 1, scale: 1 }
              }}
              whileHover={{ scale: 1.05, borderColor: COLORS.accent }}
              className="aspect-square bg-white border border-gray-100 rounded-lg flex items-center justify-center p-4 shadow-sm transition-colors hover:shadow-md cursor-pointer"
            >
              {/* Replace with actual <img> tag when you have logos */}
              <div className="text-center">
                <p className="text-[10px] uppercase font-bold text-gray-400 mb-1">{client.name}</p>
                <div className="w-12 h-12 bg-gray-50 rounded flex items-center justify-center text-xs font-bold text-gray-300">
                  LOGO
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* MODAL (Existing logic) */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            initial={{ opacity: 0, y: 50, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.98 }}
            transition={{ type: "spring", stiffness: 260, damping: 25 }}
            className="fixed inset-0 z-50 bg-white overflow-y-auto w-full min-h-screen"
          >
             {/* ... Modal content remains exactly as before ... */}
             <div className="sticky top-0 bg-white/90 backdrop-blur-md z-20 border-b border-gray-100 px-6 py-4 flex justify-between items-center">
              <span style={{ color: COLORS.primary }} className="font-bold uppercase text-sm">Project Gallery: {selectedProject.category}</span>
              <button onClick={() => setSelectedProject(null)} className="p-2 bg-gray-100 rounded-full hover:bg-red-50 transition-colors">
                <X size={24} style={{ color: COLORS.primary }} />
              </button>
            </div>
            <div className="max-w-4xl mx-auto px-6 py-16 text-center">
                <h3 style={{ color: COLORS.primary }} className="text-4xl font-black mb-6">{selectedProject.title}</h3>
                <div className="text-lg text-gray-700 mb-8">{selectedProject.description}</div>
                {selectedProject.Highlight && (
                  <div className="bg-gray-50 p-8 rounded-2xl text-left border-l-4" style={{ borderColor: COLORS.accent }}>
                    <p className="font-bold mb-2">Project Highlights:</p>
                    <div className="text-gray-600">{selectedProject.Highlight}</div>
                  </div>
                )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}