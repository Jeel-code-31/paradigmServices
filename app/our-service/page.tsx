"use client";

import { motion } from "framer-motion";
import { BookOpen, Building2, ShieldCheck, Scale, Cpu, ArrowRight } from "lucide-react";
import Link from "next/link";

interface ServiceHubItem {
  id: string;
  title: string;
  desc: string;
  icon: React.ReactNode;
  href: string;
  tag: string;
}

const servicesList: ServiceHubItem[] = [
  {
    id: "strategy-technical",
    title: "Strategy & Technical",
    desc: "Define product pathways, equipment configurations, raw material pipelines, and global best practices during conceptualization.",
    icon: <BookOpen className="w-10 h-10" />,
    href: "/our-service/technical&stratergy",
    tag: "Planning & Strategy"
  },
  {
    id: "epcm-solutions",
    title: "EPCM Solutions",
    desc: "Comprehensive engineering layout planning, construction oversight, utility sizing, process pipelines, and commissioning support.",
    icon: <Building2 className="w-10 h-10" />,
    href: "/our-service/EPCM-solution",
    tag: "Engineering & Build"
  },
  {
    id: "food-safety",
    title: "Food Safety & compliance",
    desc: "GFSI-recognized food safety systems (FSSC 22000, BRCGS), FSSAI compliance, US FDA and EU regulatory validation, and audit readiness.",
    icon: <ShieldCheck className="w-10 h-10" />,
    href: "/our-service/Food-safety",
    tag: "Quality & Regulatory"
  },
  {
    id: "legal-advisory",
    title: "Legal Advisory",
    desc: "Comprehensive legal counsel, corporate representation, regulatory compliance tracking, risk mitigation, and licensing audits.",
    icon: <Scale className="w-10 h-10" />,
    href: "/our-service/legal-advisory",
    tag: "Corporate Law"
  },
  {
    id: "smart-manufacturing",
    title: "Smart Manufacturing",
    desc: "Industry 4.0 automation, IoT floor integrations, OEE optimization, real-time analytics, and operational excellence audits.",
    icon: <Cpu className="w-10 h-10" />,
    href: "/our-service/smrt-manufacturing",
    tag: "Digital & Operations"
  }
];

export default function OurServicesHub() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 20 } }
  };

  return (
    <div className="min-h-screen bg-paradigm-bg selection:bg-[#1A3013] selection:text-white pt-2 pb-24 font-afaca overflow-x-hidden">
      <main className="max-w-[1440px] mx-auto px-6 lg:px-16 relative z-20">
        
        {/* HERO SECTION */}
        <section className="py-20 md:py-36 space-y-8 flex flex-col items-center text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }} 
            animate={{ opacity: 1, scale: 1 }} 
            className="space-y-4"
          >
            <span className="text-xs font-mono font-bold tracking-[0.3em] text-gray-500 uppercase block">
              Core Capabilities
            </span>
            <h1 className="text-3xl md:text-6xl font-black text-[#1A3013] uppercase leading-none tracking-tighter">
              Our Services
            </h1>
          </motion.div>
          <motion.p 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ delay: 0.2 }}
            className="max-w-3xl text-lg md:text-2xl text-gray-600 font-medium leading-relaxed"
          >
            We provide end-to-end consulting, engineering, food safety validation, and smart manufacturing services. 
            From initial strategy and structural layouts through to regulatory alignment and operational handholding, 
            we ensure compliance, efficiency, and scale.
          </motion.p>
        </section>

        {/* SERVICES GRID */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-16"
        >
          {servicesList.map((service) => (
            <motion.div 
              key={service.id} 
              variants={cardVariants}
              whileHover={{ y: -6 }}
              className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between group border border-black/5"
            >
              <div className="space-y-6">
                {/* Icon & Tag */}
                <div className="flex justify-between items-start">
                  <div className="w-16 h-16 rounded-2xl bg-[#BAC291]/20 flex items-center justify-center text-[#1A3013] group-hover:bg-[#1A3013] group-hover:text-white transition-all duration-300">
                    {service.icon}
                  </div>
                  <span className="text-[10px] font-mono font-bold tracking-widest text-[#1A3013]/60 uppercase bg-gray-100 px-3 py-1 rounded-full">
                    {service.tag}
                  </span>
                </div>

                {/* Content */}
                <div className="space-y-3">
                  <h3 className="text-xl md:text-2xl font-black text-[#1A3013] uppercase tracking-tight">
                    {service.title}
                  </h3>
                  <p className="text-gray-605 text-sm md:text-base leading-relaxed">
                    {service.desc}
                  </p>
                </div>
              </div>

              {/* Action Link */}
              <div className="pt-8 border-t border-black/5 mt-8">
                <Link 
                  href={service.href} 
                  className="flex items-center gap-3 text-[#1A3013] font-bold text-xs uppercase tracking-wider group/link hover:text-opacity-80 transition-all"
                >
                  Explore Details
                  <ArrowRight className="w-4 h-4 text-[#BAC291] group-hover/link:translate-x-2 transition-transform duration-300" />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </main>
    </div>
  );
}
