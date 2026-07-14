"use client";

import { useState, useEffect, ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, X, Maximize2 } from "lucide-react";

const COLORS = {
  primary: "#1A3013", // Deep Forest Green
  accent: "#BAC291",  // Sage Green
};

type EventItem = {
  id: string;
  title: string;
  date: string;
  location: string;
  description: string;
  images: { id: number; src: string; alt: string }[];
};

const eventsData: EventItem[] = [
  {
    id: "event-1",
    title: "US FDA Audit-Everest",
    date: "Oct 2024",
    location: "Mumbai, India",
    description: "A landmark event showcasing the latest advancements in sustainable farming and agri-tech solutions. We focused on climate-resilient architecture and digital farm management tools.",
    images: [
      { id: 1, src: "https://images.unsplash.com/photo-1599818817290-7a0e1b21235b?auto=format&fit=crop&q=80", alt: "Expo 1" },
    ]
  },
  {
    id: "event-2",
    title: "Six Sigma Flag Off",
    date: "Nov 2024",
    location: "Mumbai",
    description: "Exploring the plant-based revolution. This summit brought together leading scientists and chefs to discuss the future of global food sustainability and innovation.",
    images: [
      { id: 1, src: "https://images.unsplash.com/photo-1540914124281-342587941389?auto=format&fit=crop&q=80", alt: "Summit 1" },
    ]
  },
  {
    id: "event-3",
    title: "US FDA Audit-Capital Nasik",
    date: "Oct 2024",
    location: "Mumbai, India",
    description: "A landmark event showcasing the latest advancements in sustainable farming and agri-tech solutions. We focused on climate-resilient architecture and digital farm management tools.",
    images: [
      { id: 1, src: "https://images.unsplash.com/photo-1599818817290-7a0e1b21235b?auto=format&fit=crop&q=80", alt: "Expo 1" },
        { id: 2, src: "https://images.unsplash.com/photo-1599818817290-7a0e1b21235b?auto=format&fit=crop&q=80", alt: "Expo 2" },
    ]
  },
  {
    id: "event-4",
    title: "Philipines Training",
    date: "Oct 2024",
    location: "Philipines",
    description: "A landmark event showcasing the latest advancements in sustainable farming and agri-tech solutions. We focused on climate-resilient architecture and digital farm management tools.",
    images: [
      { id: 1, src: "https://images.unsplash.com/photo-1599818817290-7a0e1b21235b?auto=format&fit=crop&q=80", alt: "Expo 1" },
      { id: 2, src: "https://images.unsplash.com/photo-1599818817290-7a0e1b21235b?auto=format&fit=crop&q=80", alt: "Expo 2" },
    ]
  },
  {
    id: "event-5",
    title: "2 Days Workshop on ISO 22000:2018 Awarness & Internal Auditor Training Program for Parle.",
    date: "Oct 2024",
    location: "Mumbai, India",
    description: "A landmark event showcasing the latest advancements in sustainable farming and agri-tech solutions. We focused on climate-resilient architecture and digital farm management tools.",
    images: [
      { id: 1, src: "https://images.unsplash.com/photo-1599818817290-7a0e1b21235b?auto=format&fit=crop&q=80", alt: "Expo 1" },
      { id: 2, src: "https://images.unsplash.com/photo-1599818817290-7a0e1b21235b?auto=format&fit=crop&q=80", alt: "Expo 2" },
    ]
  },
  {
    id: "event-6",
    title: "FSPCA , MUMBAI",
    date: "Oct 2024",
    location: "Mumbai, India",
    description: "A landmark event showcasing the latest advancements in sustainable farming and agri-tech solutions. We focused on climate-resilient architecture and digital farm management tools.",
    images: [
      { id: 1, src: "https://images.unsplash.com/photo-1599818817290-7a0e1b21235b?auto=format&fit=crop&q=80", alt: "Expo 1" },
      { id: 2, src: "https://images.unsplash.com/photo-1599818817290-7a0e1b21235b?auto=format&fit=crop&q=80", alt: "Expo 2" },
    ]
  },
  {
    id: "event-7",
    title: "FoSTac Training",
    date: "Oct 2024",
    location: "Mumbai, India",
    description: "A landmark event showcasing the latest advancements in sustainable farming and agri-tech solutions. We focused on climate-resilient architecture and digital farm management tools.",
    images: [
      { id: 1, src: "https://images.unsplash.com/photo-1599818817290-7a0e1b21235b?auto=format&fit=crop&q=80", alt: "Expo 1" },
    ]
  },
   {
    id: "event-8",
    title: "FoSTac Training",
    date: "Oct 2024",
    location: "Mumbai, India",
    description: "A landmark event showcasing the latest advancements in sustainable farming and agri-tech solutions. We focused on climate-resilient architecture and digital farm management tools.",
    images: [
      { id: 1, src: "https://images.unsplash.com/photo-1599818817290-7a0e1b21235b?auto=format&fit=crop&q=80", alt: "Expo 1" },
      { id: 2, src: "https://images.unsplash.com/photo-1599818817290-7a0e1b21235b?auto=format&fit=crop&q=80", alt: "Expo 2" },
    ]
  }, {
    id: "event-9",
    title: "Colambo",
    date: "Oct 2024",
    location: "Colambo",
    description: "A landmark event showcasing the latest advancements in sustainable farming and agri-tech solutions. We focused on climate-resilient architecture and digital farm management tools.",
    images: [
      { id: 1, src: "https://images.unsplash.com/photo-1599818817290-7a0e1b21235b?auto=format&fit=crop&q=80", alt: "Expo 1" },
    { id: 2, src: "https://images.unsplash.com/photo-1599818817290-7a0e1b21235b?auto=format&fit=crop&q=80", alt: "Expo 2" },
    ] 
  }, {
    id: "event-10",
    title:"Axion-Citra Mina",
    date: "Oct 2024",
    location: "Philipines",
    description: "A landmark event showcasing the latest advancements in sustainable farming and agri-tech solutions. We focused on climate-resilient architecture and digital farm management tools.",
    images: [
      { id: 1, src: "https://images.unsplash.com/photo-1599818817290-7a0e1b21235b?auto=format&fit=crop&q=80", alt: "Expo 1" },
    { id: 2, src: "https://images.unsplash.com/photo-1599818817290-7a0e1b21235b?auto=format&fit=crop&q=80", alt: "Expo 2" },
    ]
  }, {
    id: "event-11",
    title: "Axelum Resources",
    date: "June 2019",
    location: "Philipines",
    description: "A landmark event showcasing the latest advancements in sustainable farming and agri-tech solutions. We focused on climate-resilient architecture and digital farm management tools.",
    images: [
      { id: 1, src: "https://images.unsplash.com/photo-1599818817290-7a0e1b21235b?auto=format&fit=crop&q=80", alt: "Expo 1" },
    { id: 2, src: "https://images.unsplash.com/photo-1599818817290-7a0e1b21235b?auto=format&fit=crop&q=80", alt: "Expo 2" },
    ]
  }, {
    id: "event-12",
    title: "FSMS Implementation Awareness programme- AHAR",
    date: "Oct 2024",
    location: "AHAR",
    description: "A landmark event showcasing the latest advancements in sustainable farming and agri-tech solutions. We focused on climate-resilient architecture and digital farm management tools.",
    images: [
      { id: 1, src: "https://images.unsplash.com/photo-1599818817290-7a0e1b21235b?auto=format&fit=crop&q=80", alt: "Expo 1" },
    { id: 2, src: "https://images.unsplash.com/photo-1599818817290-7a0e1b21235b?auto=format&fit=crop&q=80", alt: "Expo 2" },
    ]
  }, {
    id: "event-13",
    title: "2 Days Champions Training Session- Chitale Dairy",
    date: "Oct 2024",
    location: "Bhilwadi",
    description: "A landmark event showcasing the latest advancements in sustainable farming and agri-tech solutions. We focused on climate-resilient architecture and digital farm management tools.",
    images: [
      { id: 1, src: "https://images.unsplash.com/photo-1599818817290-7a0e1b21235b?auto=format&fit=crop&q=80", alt: "Expo 1" },
      { id: 2, src: "https://images.unsplash.com/photo-1599818817290-7a0e1b21235b?auto=format&fit=crop&q=80", alt: "Expo 2" },
    ]
  }, {
    id: "event-14",
    title: "Value Stream Mapping Exercise-Chitale Dairy",
    date: "Oct 2024",
    location: "Paradigm",
    description: "A landmark event showcasing the latest advancements in sustainable farming and agri-tech solutions. We focused on climate-resilient architecture and digital farm management tools.",
    images: [
      { id: 1, src: "https://images.unsplash.com/photo-1599818817290-7a0e1b21235b?auto=format&fit=crop&q=80", alt: "Expo 1" },
    { id: 2, src: "https://images.unsplash.com/photo-1599818817290-7a0e1b21235b?auto=format&fit=crop&q=80", alt: "Expo 2" }
    ]
  }, {
    id: "event-15",
    title: "Kick off Session with Laxmi Snacks",
    date: "Oct 2024",
    location: "Paradigm",
    description: "A landmark event showcasing the latest advancements in sustainable farming and agri-tech solutions. We focused on climate-resilient architecture and digital farm management tools.",
    images: [
      { id: 1, src: "https://images.unsplash.com/photo-1599818817290-7a0e1b21235b?auto=format&fit=crop&q=80", alt: "Expo 1" },
    { id: 2, src: "https://images.unsplash.com/photo-1599818817290-7a0e1b21235b?auto=format&fit=crop&q=80", alt: "Expo 2" }
    ]
  }, {
    id: "event-16",
    title: "FoSTac Training in prashant corner",
    date: "Oct 2024",
    location: "India",
    description: "A landmark event showcasing the latest advancements in sustainable farming and agri-tech solutions. We focused on climate-resilient architecture and digital farm management tools.",
    images: [
      { id: 1, src: "https://images.unsplash.com/photo-1599818817290-7a0e1b21235b?auto=format&fit=crop&q=80", alt: "Expo 1" },
    { id: 2, src: "https://images.unsplash.com/photo-1599818817290-7a0e1b21235b?auto=format&fit=crop&q=80", alt: "Expo 2" }
    ]
  }, {
    id: "event-17",
    title: "Advance Manufacturing Training At Prashant Corner",
    date: "Oct 2024",
    location: "India",
    description: "A landmark event showcasing the latest advancements in sustainable farming and agri-tech solutions. We focused on climate-resilient architecture and digital farm management tools.",
    images: [
      { id: 1, src: "https://images.unsplash.com/photo-1599818817290-7a0e1b21235b?auto=format&fit=crop&q=80", alt: "Expo 1" },
    { id: 2, src: "https://images.unsplash.com/photo-1599818817290-7a0e1b21235b?auto=format&fit=crop&q=80", alt: "Expo 2" }
    ]
  }, {
    id: "event-18",
    title: "Food Defense And Food Fraud Training at Value",
    date: "Oct 2024",
    location: "Beverage",
    description: "A landmark event showcasing the latest advancements in sustainable farming and agri-tech solutions. We focused on climate-resilient architecture and digital farm management tools.",
    images: [
      { id: 1, src: "https://images.unsplash.com/photo-1599818817290-7a0e1b21235b?auto=format&fit=crop&q=80", alt: "Expo 1" },
    ]
  }, {
    id: "event-19",
    title: "BRC Global Standard For Packaging and Packaging material training at Yash Papers LTD",
    date: "Oct 2024",
    location: "Ayodhya",
    description: "A landmark event showcasing the latest advancements in sustainable farming and agri-tech solutions. We focused on climate-resilient architecture and digital farm management tools.",
    images: [
      { id: 1, src: "https://images.unsplash.com/photo-1599818817290-7a0e1b21235b?auto=format&fit=crop&q=80", alt: "Expo 1" },
    ]
  }, {
    id: "event-20",
    title: "Internal Auditor Training AT ITC Limited",
    date: "Oct 2024",
    location: "Ranjangaon",
    description: "A landmark event showcasing the latest advancements in sustainable farming and agri-tech solutions. We focused on climate-resilient architecture and digital farm management tools.",
    images: [
      { id: 1, src: "https://images.unsplash.com/photo-1599818817290-7a0e1b21235b?auto=format&fit=crop&q=80", alt: "Expo 1" },
    ]
  }, {
    id: "event-21",
    title: "Group Activity At Parle CMU ISO 22000",
    date: "2018",
    location: "India",
    description: "A landmark event showcasing the latest advancements in sustainable farming and agri-tech solutions. We focused on climate-resilient architecture and digital farm management tools.",
    images: [
      { id: 1, src: "https://images.unsplash.com/photo-1599818817290-7a0e1b21235b?auto=format&fit=crop&q=80", alt: "Expo 1" },
    ]
  }, {
    id: "event-22",
    title: "ISO 22000 Internal Audit at Iskon Annamrita Foundation Kitchen",
    date: "2018",
    location: "India",
    description: "A landmark event showcasing the latest advancements in sustainable farming and agri-tech solutions. We focused on climate-resilient architecture and digital farm management tools.",
    images: [
      { id: 1, src: "https://images.unsplash.com/photo-1599818817290-7a0e1b21235b?auto=format&fit=crop&q=80", alt: "Expo 1" },
    ]
  }, {
    id: "event-23",
    title: "Training Kitchen Staff At Iskcon Annamrita Foundation on Good Manufacturing Practies",
    date: "2018",
    location: "India",
    description: "A landmark event showcasing the latest advancements in sustainable farming and agri-tech solutions. We focused on climate-resilient architecture and digital farm management tools.",
    images: [
      { id: 1, src: "https://images.unsplash.com/photo-1599818817290-7a0e1b21235b?auto=format&fit=crop&q=80", alt: "Expo 1" },
    ]
  }, {
    id: "event-24",
    title: "Training Group Activity At yash Papers",
    date: "Oct 2024",
    location: "Mumbai, India",
    description: "A landmark event showcasing the latest advancements in sustainable farming and agri-tech solutions. We focused on climate-resilient architecture and digital farm management tools.",
    images: [
      { id: 1, src: "https://images.unsplash.com/photo-1599818817290-7a0e1b21235b?auto=format&fit=crop&q=80", alt: "Expo 1" },
    ]
  }, {
    id: "event-25",
    title: "Successful US FDA Audit Completion at Mapro",
    date: "Oct 2024",
    location: "Wai",
    description: "A landmark event showcasing the latest advancements in sustainable farming and agri-tech solutions. We focused on climate-resilient architecture and digital farm management tools.",
    images: [
      { id: 1, src: "https://images.unsplash.com/photo-1599818817290-7a0e1b21235b?auto=format&fit=crop&q=80", alt: "Expo 1" },
    ]
  },

];

export default function EventGallery() {
  const [activeGallery, setActiveGallery] = useState<{event: EventItem, index: number} | null>(null);

  // Smooth Scroll Lock
  useEffect(() => {
    document.body.style.overflow = activeGallery ? "hidden" : "unset";
  }, [activeGallery]);

  const navigate = (dir: number) => {
    if (!activeGallery) return;
    const { event, index } = activeGallery;
    const newIdx = (index + dir + event.images.length) % event.images.length;
    setActiveGallery({ event, index: newIdx });
  };

  return (
    <main className="min-h-screen bg-[#FDFDFD] selection:bg-[#BAC291]">
      
      {/* MINIMALIST HEADER */}
      <section className="pt-24 pb-16 px-6 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-block px-4 py-1 rounded-full border border-[#BAC291] text-[#1A3013] text-xs font-bold uppercase tracking-widest mb-6"
        >
          Our Moments
        </motion.div>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-6xl font-black text-[#1A3013] mb-4"
        >
          Event Gallery
        </motion.h1>
      </section>

      {/* ALTERNATING CONTENT SECTION */}
      <section className="max-w-7xl mx-auto px-6 pb-32 space-y-24">
        {eventsData.map((event, idx) => (
          <motion.div 
            key={event.id}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ type: "spring", damping: 25, stiffness: 100 }}
            className={`flex flex-col ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}
          >
            {/* IMAGE SIDE */}
            <div className="w-full lg:w-3/5 grid grid-cols-2 gap-4">
              <div 
                className="col-span-2 relative aspect-video overflow-hidden rounded-3xl cursor-pointer group"
                onClick={() => setActiveGallery({ event, index: 0 })}
              >
                <img src={event.images[0].src} loading="lazy" decoding="async" className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110" alt="" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all" />
                <Maximize2 className="absolute top-6 right-6 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              {event.images.slice(1, 3).map((img, i) => (
                <div 
                  key={i} 
                  className="relative aspect-square overflow-hidden rounded-xl cursor-pointer group"
                  onClick={() => setActiveGallery({ event, index: i + 1 })}
                >
                  <img src={img.src} loading="lazy" decoding="async" className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110" alt="" />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all" />
                </div>
              ))}
            </div>

            {/* TEXT SIDE */}
            <div className="w-full lg:w-2/5 space-y-6">
              <div className="space-y-2">
                <h2 className="text-3xl md:text-4xl font-black text-[#1A3013] leading-tight">{event.title}</h2>
              </div>
              <button 
                onClick={() => setActiveGallery({ event, index: 0 })}
                className="flex items-center mt-20 gap-4 text-[#1A3013] font-bold group"
              >
                Open Image Full Screen
                <span className="w-10 h-[2px] bg-[#BAC291] transition-all group-hover:w-16" />
              </button>
            </div>
          </motion.div>
        ))}
      </section>

      {/* THEMED FULLSCREEN MODAL */}
      <AnimatePresence>
        {activeGallery && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-[#1A3013] flex flex-col items-center justify-center p-6"
          >
            {/* Close Button */}
            <button 
              onClick={() => setActiveGallery(null)}
              className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors"
            >
              <X size={40} strokeWidth={1} />
            </button>

            {/* Main Display */}
            <div className="relative w-full max-w-5xl aspect-video flex items-center justify-center">
              <motion.img 
                key={activeGallery.index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                src={activeGallery.event.images[activeGallery.index].src} 
                className="max-h-full max-w-full rounded-xl object-contain"
              />

              {/* Navigation */}
              <button 
                onClick={() => navigate(-1)}
                className="absolute left-0 p-4 text-white/30 hover:text-white transition-all hover:translate-x-[-10px]"
              >
                <ArrowLeft size={48} strokeWidth={1} />
              </button>
              <button 
                onClick={() => navigate(1)}
                className="absolute right-0 p-4 text-white/30 hover:text-white transition-all hover:translate-x-[10px]"
              >
                <ArrowRight size={48} strokeWidth={1} />
              </button>
            </div>

            {/* Counter */}
            <div className="mt-8 text-[#BAC291] font-bold tracking-widest text-sm">
              {activeGallery.index + 1} / {activeGallery.event.images.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}