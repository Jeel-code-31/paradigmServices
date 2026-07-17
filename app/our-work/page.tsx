"use client";

import { useState, useEffect, ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, X } from "lucide-react";

// Theme Colors
const COLORS = {
  primary: "#1A3013", // Deep Forest Green
  accent: "#1A3013",  // Updated to Forest Green for structural harmony
  bgSecondary: "#F4F6F0"
};

// Define the structure for a Client Project
type ClientProject = {
  id: string;
  category: string;
  title: string;
  description: string | ReactNode;
  Highlight?: string | ReactNode;
  featuredImage: string;
  gallery: { id: number; src: string; alt: string }[];
};

// Sample Data for Multiple Clients
const clientProjects: ClientProject[] = [
  {
    id: "project-1",
    category: "Client-1",
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
        Scope involved in equipment selection, Process engineering, Layouting, Utility designing.<br/>
        1Cr.Kcal Thermic fluid heaters, 4 MVA installed power,100%DG Backup.<br/>
        HVAC-1000 TR of Air conditioning with RH Control in Packaging Areas, 2 Stage Cooling(Over 2 L CFM) Systems rest of the areas.
      </>
    ),
    featuredImage: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80",
    gallery: [
      { id: 1, src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80", alt: "Lab testing facility" },
      { id: 2, src: "https://images.unsplash.com/photo-1531973576160-7125cd663d86?auto=format&fit=crop&q=80", alt: "Factory floor automation" },
      { id: 3, src: "https://images.unsplash.com/photo-1664575602276-acd073f104c1?auto=format&fit=crop&q=80", alt: "Quality control checks" },
    ]
  },
  {
    id: "project-2",
    category: "Client-2",
    title: "Haldiram's , Nagpur",
    description: (
      <>
        Project Cost: 80 cr. (Appx)<br />
        Total Build up area: 3.5 Lakh sq.ft.<br />
        Project Duration: 1.5 Years
      </>
    ),
    Highlight: (
      <>
        Multiple Lines with throughout planned for 300+ TPD<br />
        Plant designed to meet global food safety standards.<br />
        Invloved in process automation,utility designing and commissioning.<br/>
        2.5 Cr Kcal thermic fluid heaters.<br/>
        HVAC Using Waste heat in VAM Chillers for air conditioning with Rh control in Packaging areas.<br/>
        Packaging automation with robotic palletization and ASAS for @8000 Pallets location
      </>
    ),
    featuredImage: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&q=80",
    gallery: [
      { id: 1, src: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&q=80", alt: "Clean room research" },
      { id: 2, src: "https://images.unsplash.com/photo-1579165466741-7f35e4755660?auto=format&fit=crop&q=80", alt: "Scientific analysis" },
      { id: 3, src: "https://images.unsplash.com/photo-1582719478250-c89402617687?auto=format&fit=crop&q=80", alt: "Data monitoring" },
    ]
  },
  {
    id: "project-3",
    category: "Client-3",
    title: "Global Gourmet",
    description: (
      <>
      </>
    ),
    Highlight: (
      <>
        Global benchmark in Global Frozen food business<br />
        Designing of the factory as per international Standards/ Legislations, customer requirements and COPs-equipment selection, lay outing<br />
        Equipped with state-of-the-art infrastructure and latest processing technology.<br/>
        Got the US FDA approval, EU, BRC Certification(A) With-in 3 Months of commissioning. Currently Certified for A+.<br/>
        Got approval from the TESCO-UK, -one of the first India company to get so for frozen in 3P-currently tesco Blue Certified.<br/>
        Got Approval from other customers like Trader Joes, Pillsbury, Brakes Brothers,      
      </>
    ),
    featuredImage: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80",
    gallery: [
      { id: 1, src: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80", alt: "Team collaboration" },
      { id: 2, src: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=80", alt: "Campus exterior blueprint" },
      { id: 3, src: "https://images.unsplash.com/photo-1464938050520-ef2270bb8ce8?auto=format&fit=crop&q=80", alt: "Sustainable processing" },
    ]
  },
  {
    id: "project-4",
    category: "Client-4",
    title: "Everest Spices, Mumbai",
    description: (
      <>
      Project cost: 80 cr.(appx).<br/>
      Total built up area: 1.2 lakh sq. ft.<br/>
      Project Duration:2.0 Years.<br/>
      </>
    ),
    Highlight: (
      <>
        Production capacity-100 MT/Day of blended Species.<br />
        Involved in technology selection, pnat design, utility designing.<br />
        Sate-of-the-art infrastucture- Grinding, blending and automatic recipe management.<br/>
        Facility made to comoly with international standards & productivity<br/>
        High speed packaging lines, cryogenic grinding of high quality species.
      </>
    ),
    featuredImage: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80",
    gallery: [
      { id: 1, src: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80", alt: "Team collaboration" },
      { id: 2, src: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=80", alt: "Campus exterior blueprint" },
      { id: 3, src: "https://images.unsplash.com/photo-1464938050520-ef2270bb8ce8?auto=format&fit=crop&q=80", alt: "Sustainable processing" },
    ]
  },
  {
    id: "project-5",
    category: "Client-5",
    title: "Everest Spices, Umergaon, Gujarat",
    description: (
      <>
        Project Cost: 120 cr. (Appx)<br />
        Total Build up area: 2.5 Lakh sq.ft.<br />
        Project Duration: 1.5 Years
      </>
    ),
    Highlight: (
      <>
        Infrastructure designed for 400 MT/day blended Spices.<br />
        Design objective is major reduction is major reduction.<br />
        Invovled in process Engineering, Technology Selection, Utility Engineering, Project Management.<br/>
        High throughout grinding lines with recipe automation, esting lab.<br/>
        Automatic Storage & Retrieval Systems (ASRS) for raw materials for 2000 pallet & finished goods, Packaging materials for 9000 pallet locations.<br/>
      </>
    ),
    featuredImage: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80",
    gallery: [
      { id: 1, src: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80", alt: "Team collaboration" },
      { id: 2, src: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=80", alt: "Campus exterior blueprint" },
      { id: 3, src: "https://images.unsplash.com/photo-1464938050520-ef2270bb8ce8?auto=format&fit=crop&q=80", alt: "Sustainable processing" },
    ]
  },
  {
    id: "project-6",
    category: "Client-6",
    title: "Haldiram Maples More",
    description: (
      <>
      </>
    ),
    Highlight: (
      <>
      </>
    ),
    featuredImage: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80",
    gallery: [
      { id: 1, src: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80", alt: "Team collaboration" },
      { id: 2, src: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=80", alt: "Campus exterior blueprint" },
      { id: 3, src: "https://images.unsplash.com/photo-1464938050520-ef2270bb8ce8?auto=format&fit=crop&q=80", alt: "Sustainable processing" },
    ]
  },
  {
    id: "project-7",
    category: "Client-7",
    title: "Haldiram Delhi",
    description: (
      <>
      </>
    ),
    Highlight: (
      <>
      </>
    ),
    featuredImage: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80",
    gallery: [
      { id: 1, src: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80", alt: "Team collaboration" },
      { id: 2, src: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=80", alt: "Campus exterior blueprint" },
      { id: 3, src: "https://images.unsplash.com/photo-1464938050520-ef2270bb8ce8?auto=format&fit=crop&q=80", alt: "Sustainable processing" },
    ]
  },
  {
    id: "project-8",
    category: "Client-8",
    title: "Bikaji Bakery Bangalore",
    description: (
      <>
      </>
    ),
    Highlight: (
      <>
      </>
    ),
    featuredImage: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80",
    gallery: [
      { id: 1, src: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80", alt: "Team collaboration" },
      { id: 2, src: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=80", alt: "Campus exterior blueprint" },
      { id: 3, src: "https://images.unsplash.com/photo-1464938050520-ef2270bb8ce8?auto=format&fit=crop&q=80", alt: "Sustainable processing" },
    ]
  },
  {
    id: "project-9",
    category: "Client-9",
    title: "Capital Foods Banglore",
    description: (
      <>
      </>
    ),
    Highlight: (
      <>
      </>
    ),
    featuredImage: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80",
    gallery: [
      { id: 1, src: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80", alt: "Team collaboration" },
      { id: 2, src: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=80", alt: "Campus exterior blueprint" },
      { id: 3, src: "https://images.unsplash.com/photo-1464938050520-ef2270bb8ce8?auto=format&fit=crop&q=80", alt: "Sustainable processing" },
    ]
  },
  {
    id: "project-10",
    category: "Client-10",
    title: "Organic India Lucknow",
    description: (
      <>
      </>
    ),
    Highlight: (
      <>
      </>
    ),
    featuredImage: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80",
    gallery: [
      { id: 1, src: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80", alt: "Team collaboration" },
      { id: 2, src: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=80", alt: "Campus exterior blueprint" },
      { id: 3, src: "https://images.unsplash.com/photo-1464938050520-ef2270bb8ce8?auto=format&fit=crop&q=80", alt: "Sustainable processing" },
    ]
  },
  {
    id: "project-11",
    category: "Client-11",
    title: "Laxmi Snacks",
    description: (
      <>
      </>
    ),
    Highlight: (
      <>
      </>
    ),
    featuredImage: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80",
    gallery: [
      { id: 1, src: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80", alt: "Team collaboration" },
      { id: 2, src: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=80", alt: "Campus exterior blueprint" },
      { id: 3, src: "https://images.unsplash.com/photo-1464938050520-ef2270bb8ce8?auto=format&fit=crop&q=80", alt: "Sustainable processing" },
    ]
  }, 
  {
    id: "project-12",
    category: "Client-12",
    title: "Chitale Foods",
    description: (
      <>
      </>
    ),
    Highlight: (
      <>
      </>
    ),
    featuredImage: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80",
    gallery: [
      { id: 1, src: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80", alt: "Team collaboration" },
      { id: 2, src: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=80", alt: "Campus exterior blueprint" },
      { id: 3, src: "https://images.unsplash.com/photo-1464938050520-ef2270bb8ce8?auto=format&fit=crop&q=80", alt: "Sustainable processing" },
    ]
  },
];

export default function OurWork() {
  const [selectedProject, setSelectedProject] = useState<ClientProject | null>(null);

  // Prevent background scrolling when gallery is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => { document.body.style.overflow = "unset"; };
  }, [selectedProject]);

  return (
    <main className="min-h-screen bg-white text-[#1A3013]">
      
      {/* HEADER */}
      <section className="relative overflow-hidden pt-20 pb-12">
        <div className="absolute inset-x-1/2 -top-10 h-36 w-36 -translate-x-1/2 rounded-full bg-[#1A3013]/5 blur-3xl" />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <div className="inline-flex items-center justify-center gap-3 mb-6">
            <span className="block h-[2px] w-12 rounded-full bg-[#1A3013]" />
            <span style={{ color: COLORS.primary }} className="text-sm uppercase tracking-[0.2em] font-bold leading-normal">
              Our Work
            </span>
            <span className="block h-[2px] w-12 rounded-full bg-[#1A3013]" />
          </div>
          <h2 style={{ color: COLORS.primary }} className="text-4xl md:text-5xl font-black mb-6 leading-none tracking-tight break-words uppercase">
            Our Clients & Impact
          </h2>
          <p className="max-w-3xl font-afaca mx-auto text-lg md:text-xl text-gray-600/90 leading-relaxed break-words">
            Explore how our multidisciplinary teams have partnered with global brands across diverse sectors to deliver technical, regulatory, and operational excellence.
          </p>
        </div>
      </section>

      {/* CLIENT PROJECTS LIST */}
      <section className="max-w-7xl mx-auto px-6 pb-20 lg:pb-32 space-y-16 lg:space-y-24">
        {clientProjects.map((project, index) => {
          const isImageLeft = index % 2 !== 0;

          return (
            <motion.div 
              key={project.id} 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.7 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center rounded-3xl bg-gray-50 border-[2px] border-[#1A3013] p-6 lg:p-10 relative overflow-hidden shadow-[0_15px_30px_rgba(0,0,0,0.02)] hover:shadow-xl transition-shadow duration-300"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#1A3013]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4 pointer-events-none" />

              {/* TEXT CONTENT */}
              <div className={`order-2 z-10 ${isImageLeft ? 'lg:order-2' : 'lg:order-1'} break-words flex flex-col items-start`}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-[2px] w-8 bg-[#1A3013]" />
                  <span className="font-bold uppercase tracking-widest text-sm text-[#1A3013] leading-normal">
                    {project.category}
                  </span>
                </div>
                
                <h3 className="text-[#1A3013] text-3xl md:text-4xl font-black mb-6 leading-tight tracking-tight uppercase">
                  {project.title}
                </h3>

                <button 
                  onClick={() => setSelectedProject(project)}
                  style={{ backgroundColor: COLORS.primary }}
                  className="group inline-flex items-center gap-3 rounded-full px-8 py-4 font-afaca font-bold text-white shadow-md transition-all duration-300 hover:bg-black hover:scale-[1.02] shrink-0"
                >
                  <span className="leading-normal">See More Details</span>
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform shrink-0" />
                </button>
              </div>

              {/* FEATURED IMAGE */}
              <div className={`order-1 relative h-64 sm:h-80 lg:h-[400px] w-full z-10 ${isImageLeft ? 'lg:order-1' : 'lg:order-2'}`}>
                <div className="relative w-full h-full overflow-hidden rounded-2xl cursor-pointer border border-[#1A3013]/10 shadow-md" onClick={() => setSelectedProject(project)}>
                  <div className="absolute inset-0 bg-black/5 hover:bg-transparent transition-colors z-10" />
                  <img 
                    src={project.featuredImage} 
                    alt={project.title} 
                    loading="lazy"
                    decoding="async"
                    className="object-cover w-full h-full hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>

            </motion.div>
          );
        })}
      </section>

      {/* ========================================
        DYNAMIC FULL SCREEN GALLERY MODAL
        ========================================
      */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            initial={{ opacity: 0, y: 50, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.98 }}
            transition={{ 
              type: "spring", 
              stiffness: 260, 
              damping: 25 
            }}
            style={{ willChange: "opacity, transform" }}
            className="fixed inset-0 z-50 bg-white overflow-y-auto w-full min-h-screen text-[#1A3013]"
          >
            {/* Close Button Header */}
            <div className="sticky top-0 bg-white/90 backdrop-blur-md z-20 border-b border-gray-100 px-6 py-4 flex justify-between items-center">
              <span className="font-bold tracking-widest uppercase text-sm flex items-center gap-2 text-[#1A3013] break-words leading-tight">
                <span className="hidden sm:inline">Project Gallery:</span> {selectedProject.category}
              </span>
              <button 
                onClick={() => setSelectedProject(null)}
                className="p-2 bg-gray-100 rounded-full hover:bg-red-50 hover:text-red-600 transition-colors shrink-0"
                aria-label="Close Gallery"
              >
                <X size={24} className="text-[#1A3013] hover:text-current shrink-0" />
              </button>
            </div>

            <div className="max-w-[1400px] mx-auto px-6 py-12 lg:py-16">
              
              {/* Dynamic Image Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-16 lg:mb-24">
                {selectedProject.gallery.map((img, idx) => (
                  <div 
                    key={img.id} 
                    className={`${idx === 0 ? 'md:col-span-2 aspect-[21/9]' : 'aspect-[4/3]'} w-full overflow-hidden rounded-2xl bg-gray-50 border border-black/5 shadow-md`}
                  >
                    <img 
                      src={img.src} 
                      alt={img.alt} 
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                ))}
              </div>

              {/* Dynamic Modal Text */}
              <div className="max-w-4xl mx-auto text-center break-words flex flex-col items-center">
                <h3 className="text-3xl md:text-5xl font-black mb-6 uppercase tracking-tight leading-none text-[#1A3013]">
                  {selectedProject.title}
                </h3>
                
                <div className="font-afaca text-lg md:text-xl text-gray-700 mb-6 leading-relaxed w-full">
                  {selectedProject.description}
                </div>

                {/* Conditional Rendering for Highlights */}
                {selectedProject.Highlight && (
                  <div className="font-afaca text-lg md:text-xl text-gray-700 p-6 rounded-2xl bg-gray-50 border-2 border-[#1A3013] text-left mt-4 w-full">
                    <span className="font-black block mb-3 text-[#1A3013] uppercase tracking-wide leading-tight">Project Highlights:</span>
                    <div className="leading-relaxed">
                      {selectedProject.Highlight}
                    </div>
                  </div>
                )}
              </div>

              {/* Bottom Close Button */}
              <div className="mt-16 text-center pb-12">
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="px-10 py-4 rounded-full font-bold uppercase tracking-widest text-sm text-white transition-transform hover:scale-105 shrink-0 bg-[#1A3013] hover:bg-black shadow-md"
                >
                  Back to All Projects
                </button>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}