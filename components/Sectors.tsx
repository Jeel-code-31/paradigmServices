"use client"

import { motion } from "framer-motion";
import { Factory, FlaskConical, Boxes, Package, UtensilsCrossed, CheckCircle2 } from "lucide-react";

const sectors = [
  {
    title: "Food & Beverage Manufacturing",
    icon: <Factory className="w-8 h-8 text-[#1A3013]" />,
    items: [
      "Biscuits & Confectionery",
      "Dairies",
      "Sugar & Tea",
      "Spices & Seasonings",
      "Meat & Poultry",
      "Retort, Frozen RTS",
      "Food Ingredients",
      "Beverages – Fruits & Carbonated soft drinks",
      "Milling – Wheat , Besan & Rice"
    ]
  },
  {
    title: "Pharmaceuticals & Chemicals",
    icon: <FlaskConical className="w-8 h-8 text-[#1A3013]" />,
    items: [
      "API & bulk drugs",
      "Chemicals",
      "Solvent distillation"
    ]
  },
  {
    title: "Warehousing & cold chain",
    icon: <Boxes className="w-8 h-8 text-[#1A3013]" />,
    items: [
      "Warehousing",
      "Cold storage"
    ]
  },
  {
    title: "Packaging",
    icon: <Package className="w-8 h-8 text-[#1A3013]" />,
    items: [
      "Paper",
      "Plastic"
    ]
  },
  {
    title: "Food Services",
    icon: <UtensilsCrossed className="w-8 h-8 text-[#1A3013]" />,
    items: [
      "Hotel & Restaurants",
      "Cafeterias"
    ]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

export default function Sectors() {
  return (
    <section className="py-20 md:py-32 !bg-paradigm-bg px-6 md:px-16" id="sectors">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-black text-[#1A3013] mb-6 tracking-tighter font-black">
            Industries We Serve
          </h2>
         <div className="w-24 h-2 bg-[#BAC291] mx-auto rounded-full mb-8"></div>
          <p className="text-xl text-[#1A3013]/70 font-afaca max-w-2xl mx-auto">
           We have undertaken consulting and engineering assignments across a wide specturm of manufacturing and allied sectors.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {sectors.map((sector, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                y: -10,
                backgroundColor: "rgba(255, 255, 255, 0.8)",
                boxShadow: "0 20px 40px rgba(26, 48, 19, 0.1)"
              }}
              className={`p-8 rounded-[2.5rem] bg-white/40 backdrop-blur-sm border border-[#1A3013]/5 transition-all duration-300 flex flex-col h-full group ${
                index === 0 ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <div className="mb-6 flex items-center justify-between">
                <div className="p-4 rounded-2xl bg-[#BAC291]/20 group-hover:bg-[#BAC291]/40 transition-colors">
                  {sector.icon}
                </div>
                <div className="h-[1px] flex-grow bg-gradient-to-r from-transparent via-[#1A3013]/10 to-transparent mx-4 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              
              <h3 className="text-2xl font-black text-[#1A3013] mb-6 font-black uppercase tracking-tight">
                {sector.title}
              </h3>
              
              <ul className="space-y-4 flex-grow font-afaca">
                {sector.items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 group/item">
                    <CheckCircle2 className="w-5 h-5 text-[#BAC291] mt-0.5 shrink-0 transition-transform group-hover/item:scale-120" />
                    <span className="text-[#1A3013]/80 font-semibold text-sm md:text-base transition-colors group-hover/item:text-[#1A3013]">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
