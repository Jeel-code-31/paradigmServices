"use client";

import { motion } from "framer-motion";
import { 
  Target, ShieldCheck, Award, Zap, 
  Users, Lock, Heart, Leaf, 
  Briefcase, Star, Handshake, TrendingUp 
} from "lucide-react";

export default function ValueAndMission() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const missionPoints = [
    { text: "We are a consulting company specialized in process, project, and change management.", icon: <Briefcase className="w-5 h-5" /> },
    { text: "We develop long-term relationships with our customers and associates based on mutual trust.", icon: <Handshake className="w-5 h-5" /> },
    { text: "We promote the development of our employees by challenging assignments and value-based leadership.", icon: <TrendingUp className="w-5 h-5" /> },
    { text: "We consider the principles of sustainable development in all our operations.", icon: <Leaf className="w-5 h-5" /> },
  ];

  const values = [
    { title: "Technical Excellence", desc: "Continually demonstrate expertise in every solution.", icon: <Award className="w-6 h-6" /> },
    { title: "Integrity", desc: "Protect client interests and deliver true value for money.", icon: <ShieldCheck className="w-6 h-6" /> },
    { title: "Quality & Timelines", desc: "Growth through innovation and meeting every endeavor.", icon: <Zap className="w-6 h-6" /> },
    { title: "Client Satisfaction", desc: "Exceeding requirements in every business relationship.", icon: <Star className="w-6 h-6" /> },
    { title: "Innovation", desc: "Encouraging creative thinking in every aspect of business.", icon: <Target className="w-6 h-6" /> },
    { title: "Confidentiality", desc: "Maintain strict security of sensitive client information.", icon: <Lock className="w-6 h-6" /> },
    { title: "Dignity & Honor", desc: "Upholding individual dignity and honoring commitments.", icon: <Heart className="w-6 h-6" /> },
    { title: "Teamwork", desc: "Encourage a sense of pride, belonging, and collaboration.", icon: <Users className="w-6 h-6" /> },
  ];

  return (
    <div className="min-h-screen bg-white selection:bg-gray-300 selection:text-black pt-2 pb-32">
      <main className="max-w-[1440px] mx-auto px-6 lg:px-16">
        
        {/* SECTION 1: MISSION (THE PRECISION FOCUS) */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center py-20 pb-32">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-10"
          >
            <div className="space-y-4">
              <h2 className="text-gray-400 uppercase tracking-[0.4em] font-bold text-xs font-afaca leading-normal">The Purpose</h2>
              <h1 className="text-4xl md:text-5xl font-black text-black uppercase leading-[0.9] tracking-tighter break-words">
                Mission Driven
              </h1>
            </div>

            <div className="space-y-6">
              {missionPoints.map((point, i) => (
                <motion.div 
                  key={i} 
                  variants={itemVariants}
                  className="flex items-start gap-5 p-6 rounded-[2rem] bg-white border-[3px] border-black/5 hover:border-black transition-all duration-300 shadow-sm hover:shadow-xl group break-words"
                >
                  <div className="mt-1 w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center text-black transition-all duration-500 shrink-0">
                    {point.icon}
                  </div>
                  <p className="text-lg font-medium text-gray-800 font-afaca leading-relaxed">
                    {point.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Mission Visual Metaphor: Focus Pulse */}
          <div className="relative flex items-center justify-center pointer-events-none">
             <motion.div 
               animate={{ rotate: 360 }}
               transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
               className="w-72 h-72 md:w-96 md:h-96 border-2 border-dashed border-black/10 rounded-full flex items-center justify-center relative"
             >
                <div className="absolute inset-4 border border-gray-200 rounded-full" />
                <div className="absolute inset-12 border border-gray-100 rounded-full" />
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 bg-black rounded-full shadow-[0_0_8px_rgba(0,0,0,0.08)]" />
             </motion.div>
             <motion.div 
               animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
               transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
               className="absolute w-48 h-48 bg-gray-100 rounded-full blur-[100px]"
             />
             <div className="absolute z-10 p-12 bg-white rounded-full shadow-2xl border border-black/5">
                <Target className="w-24 h-24 text-black" />
             </div>
          </div>
        </section>

        {/* SECTION 2: VALUES (FOUNDATIONAL PILLARS) */}
        <section className="py-24 space-y-16">
          <div className="text-center space-y-4">
             <h3 className="text-4xl md:text-5xl font-black text-black uppercase tracking-tighter break-words">Our Core Values</h3>
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {values.map((v, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="bg-white/80 backdrop-blur-md p-10 rounded-[3rem] flex flex-col items-center text-center group transition-all duration-300 border-[3px] border-black/5 hover:border-black hover:bg-gray-50 hover:shadow-2xl text-black break-words"
              >
                <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center text-black mb-8 transition-all duration-500 shrink-0">
                  {v.icon}
                </div>
                <h4 className="text-xl font-black uppercase mb-4 tracking-tight leading-tight">{v.title}</h4>
                <p className="text-sm text-gray-500 font-medium font-afaca leading-relaxed">
                  {v.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </section>

      </main>
    </div>
  );
}