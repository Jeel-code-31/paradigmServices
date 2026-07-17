"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import {
  Lightbulb,
  Shield,
  TrendingUp,
  CheckCircle,
  Clock,
  Leaf,
  Eye,
  Target,
  HeartHandshake
} from "lucide-react";

export default function VisionMissionValues() {
  const [activeTab, setActiveTab] = useState<"vision" | "mission">("vision");

  const values = [
    {
      title: "Technical Excellence",
      desc: "We continuously build our expertise to deliver innovative, practical and future-ready solutions.",
      icon: Lightbulb,
    },
    {
      title: "Integrity & Trust",
      desc: "We act with honesty, transparency and professionalism, earning trust through every engagement.",
      icon: Shield,
    },
    {
      title: "Client Success",
      desc: "We measure our success by the lasting value we create for our clients.",
      icon: TrendingUp,
    },
    {
      title: "Quality Without Compromise",
      desc: "We deliver solutions that meet the highest standards of engineering, safety and compliance.",
      icon: CheckCircle,
    },
    {
      title: "Accountability",
      desc: "We take ownership of our commitments and deliver with discipline, responsibility and respect for timelines.",
      icon: Clock,
    },
    {
      title: "Sustainability",
      desc: "We promote responsible engineering that balances business performance with environmental stewardship.",
      icon: Leaf,
    },
  ];

  return (
    <section className="bg-white py-24 px-4 sm:px-6 md:px-12 relative overflow-hidden border-b border-black/5">
      {/* Decorative background shapes */}
      <div className="absolute top-1/2 left-[-10%] w-[400px] h-[400px] bg-gray-100/30 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-white/40 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs font-mono font-bold tracking-[0.25em] text-[#1A3013] uppercase block mb-3">
              Who We Are
            </span>
            <h2 className="text-4xl md:text-6xl font-black text-black tracking-tighter uppercase font-black">
              Vision, Mission & Values
            </h2>
            <div className="w-24 h-1.5 bg-black mx-auto mt-4 rounded-full" />
          </motion.div>
        </div>

        {/* Vision & Mission Side-by-Side Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-28">
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div className="space-y-6">
              <span className="text-xs font-mono font-bold tracking-widest text-[#1A3013]/60 uppercase block">
                Foundations
              </span>
              <h3 className="text-xl md:text-2xl font-black text-[#1A3013] uppercase tracking-tight font-black leading-none">
                Transforming the Manufacturing Landscape
              </h3>
              <p className="text-gray-700 font-afaca text-base md:text-lg leading-relaxed">
                Helping organizations design, build, improve, and sustain world-class manufacturing facilities.
              </p>
            </div>

            {/* Toggle Switches */}
            <div className="flex bg-gray-50 p-1.5 rounded-xl border-2 border-green/20 mt-8 max-w-[280px]">
              <button
                onClick={() => setActiveTab("vision")}
                className={`flex-1 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all duration-300 flex items-center justify-center space-x-2 ${activeTab === "vision"
                    ? "bg-black text-white shadow-lg"
                    : "text-black hover:bg-black/5"
                  }`}
              >
                <Eye className="w-4 h-4" />
                <span>Vision</span>
              </button>
              <button
                onClick={() => setActiveTab("mission")}
                className={`flex-1 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all duration-300 flex items-center justify-center space-x-2 ${activeTab === "mission"
                    ? "bg-black text-white shadow-lg"
                    : "text-black hover:bg-black/5"
                  }`}
              >
                <Target className="w-4 h-4" />
                <span>Mission</span>
              </button>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="bg-white backdrop-blur-md p-8 md:p-12 rounded-[2rem] border-2 border-black/50  min-h-[350px] flex flex-col justify-center relative overflow-hidden group hover:border-black transition-colors duration-500">
              {activeTab === "vision" ? (
                <motion.div
                  key="vision"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.5 }}
                  className="space-y-4"
                >
                  <span className="text-xs font-mono text-green-800 uppercase tracking-widest font-bold block">
                    Our Vision
                  </span>
                  <h4 className="text-2xl md:text-3xl font-black text-[#1A3013] uppercase tracking-tight font-black leading-tight">
                    To be the world’s most trusted partner in manufacturing transformation.
                  </h4>
                  <p className="text-gray-600 font-afaca text-base md:text-lg leading-relaxed pt-2">
                    Enabling organisations to build safer, smarter, more sustainable and globally competitive manufacturing enterprises.
                  </p>
                </motion.div>
              ) : (
                <motion.div
                  key="mission"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.5 }}
                  className="space-y-4"
                >
                  <span className="text-xs font-mono text-green-800 uppercase tracking-widest font-bold block">
                    Our Mission
                  </span>
                  <h4 className="text-2xl font-black text-[#1A3013] uppercase tracking-tight font-black leading-tight">
                    We partner with Organisations to Design, Build, Improve and Transform Manufacturing Businesses.
                  </h4>
                  <p className="text-gray-600 font-afaca text-base md:text-lg leading-relaxed pt-2">
                    Through integrated engineering, technology, food safety, regulatory, legal and operational excellence solutions.
                  </p>
                  <p className="text-gray-500 font-afaca text-sm md:text-base italic pt-2 border-t-2 border-black/5">
                    By combining multidisciplinary expertise with practical execution, we deliver measurable improvements in quality, compliance, productivity and business performance across the entire manufacturing lifecycle — from concept and strategy through engineering, commissioning, and continuous improvement.
                  </p>
                </motion.div>
              )}
            </div>
          </div>
        </div>

        {/* Our Values Grid */}
        <div className="mb-28">
          <div className="text-center md:text-left mb-12">
            <h3 className="text-2xl md:text-3xl font-black text-[#1A3013] uppercase tracking-tight font-black">
              Our Core Values
            </h3>
            <div className="w-16 h-1 bg-black/20 mt-2 rounded-full hidden md:block" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((val, idx) => {
              const Icon = val.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  whileHover={{ y: -6 }}
                  className="bg-white rounded-2xl p-8 border-2 border-black/50 hover:border-black transition-all duration-500 group flex flex-col justify-between cursor-default  hover:shadow-md"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl border-2 border-black/10 group-hover:border-black bg-gray-50 flex items-center justify-center mb-6 transition-all duration-300">
                      <Icon className="w-5 h-5 text-black transition-transform duration-500 group-hover:rotate-12" />
                    </div>
                    <h4 className="text-lg font-black text-[#1A3013] uppercase tracking-tight font-black mb-3 transition-colors duration-300">
                      {val.title}
                    </h4>
                    <p className="text-gray-600 font-afaca text-sm md:text-base leading-relaxed transition-colors duration-300">
                      {val.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Our Promise Callout */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-[2.5rem] p-8 md:p-16 border-2 border-black relative overflow-hidden"
        >
          {/* Subtle line background decoration */}
          <div className="absolute right-0 top-0 w-48 h-48 border-r-2 border-t-2 border-[#1A3013]/10 rounded-tr-[2.5rem] pointer-events-none" />
          <div className="absolute left-0 bottom-0 w-48 h-48 border-l-2 border-b-2 border-[#1A3013]/10 rounded-bl-[2.5rem] pointer-events-none" />

          <div className="max-w-4xl mx-auto text-center flex flex-col items-center space-y-6">
            <div className="w-16 h-16 rounded-2xl border-2 border-black flex items-center justify-center bg-gray-50 mb-2">
              <HeartHandshake className="w-8 h-8 text-black" />
            </div>
            <span className="text-xs font-mono font-bold tracking-[0.3em] text-[#1A3013] uppercase">
              Our Promise
            </span>
            <h3 className="text-2xl md:text-4xl font-black text-[#1A3013] uppercase tracking-tight font-black">
              Every client is unique. Every project presents different challenges.
            </h3>

            <div className="w-16 h-[2px] bg-black my-4" />

            <p className="text-gray-700 font-afaca text-lg md:text-xl leading-relaxed italic">
              &ldquo;Our promise remains the same—to deliver independent advice, practical engineering and measurable outcomes that help our clients build world-class manufacturing businesses with confidence.&rdquo;
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}