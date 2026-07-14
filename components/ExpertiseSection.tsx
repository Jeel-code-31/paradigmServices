"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

function ExpertiseCard({ item, variants }: { item: any, variants: any }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div 
      layout
      variants={variants}
      whileHover={{ y: -5 }}
      className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col group border border-black/5 h-full cursor-pointer"
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <div className="h-48 overflow-hidden relative">
        <img 
          src={item.img} 
          alt={item.title} 
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-[#1A3013]/10 group-hover:bg-transparent transition-colors duration-500" />
      </div>
      <div className="p-8 flex flex-col flex-grow">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold text-[#1A3013] group-hover:text-green-750 transition-colors font-black uppercase tracking-tight">
            {item.title}
          </h3>
          <span className="text-xs font-mono font-bold text-green-800 bg-[#E3E9D3] px-2 py-0.5 rounded">
            {isExpanded ? "Collapse" : "Expand"}
          </span>
        </div>
        <p className="text-gray-650 leading-relaxed font-afaca text-sm md:text-base">
          {item.desc}
        </p>
        
        <AnimatePresence mode="wait">
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <p className="text-gray-500 leading-relaxed text-sm md:text-base pb-4 italic border-t border-gray-100 mt-4 pt-4 font-afaca">
                {item.longDesc || "Paradigm handles end-to-end execution of this process, aligning industry best practices to deliver measurable improvements in productivity."}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

export default function ExpertiseSection() {
  const items = [
    {
      title: "Technical Advisory",
      desc: "Project feasibility, technology selection, New product development, Sourcing, Food Safety Standards And global best practices",
      longDesc: "Deep assessment of technology options, processing lines, raw material sourcing pipelines, and global best practices for setup.",
      img: "/technical-advisory.png"
    },
    {
      title: "Regulatory Advisory",
      desc: "Compliance to food laws, Labels and Validation, risk analysis, Consumers compliance.",
      longDesc: "Ensuring your operations defend against legal liabilities and successfully meet local, national, and international standards.",
      img: "/regulatory-advisory.png"
    },
    {
      title: "Engineering",
      desc: "Basic & Detailed Engineering, Infrastructure design, Project Management Services, Supervision",
      longDesc: "Expert physical layouts, structural drafting, utility calculation, civil oversight, and mechanical line alignments.",
      img: "/engineering.png"
    },
    {
      title: "Operational Excellence",
      desc: "Optimize Cost and setting up highly efficient factory with aligning people to deliver the optimum output.",
      longDesc: "Process mapping, waste reduction, OEE optimization, and workforce training based on Lean manufacturing principles.",
      img: "/operational-excellence.png"
    }
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section className="bg-[#E3E9D3] py-24 px-4 md:px-6 border-b border-black/5">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center md:text-left">
          <span className="text-xs font-mono font-bold tracking-[0.25em] text-[#1A3013] uppercase block mb-3">
            Capabilities
          </span>
          <h2 className="text-4xl md:text-6xl font-black text-[#1A3013] mb-6 tracking-tighter font-black uppercase">
            Our Expertise
          </h2>
          <p className="text-lg md:text-2xl leading-relaxed text-gray-700 font-afaca max-w-4xl">
            We provide consulting services right from understanding market opportunities, Developing Products and processes, Setting up the plant infrastructure, Deploying food safety practices & improvising business operations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {items.map((item, idx) => (
            <ExpertiseCard key={idx} item={item} variants={cardVariants} />
          ))}
        </div>
      </div>
    </section>
  );
}
