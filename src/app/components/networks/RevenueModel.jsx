"use client";

import React, { useState } from 'react';
import { Handshake, Users, Settings, TrendingUp, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Theme colors
const COLOR_NAVY = '#15324A';
const COLOR_GOLD = '#C49A6E';
const COLOR_TEXT_DARK = '#2C3E50';
const COLOR_TEXT_MEDIUM = '#6B7E98';
const COLOR_WHITE = '#FFFFFF';
const COLOR_LIGHT_GRAY = '#F0F3F5';
const COLOR_ACCENT_LIGHT = '#EAEFF5';

// Animations
const scrollVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const contentVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.2 } },
};

export default function SupplyModel() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Updated content for Royal Sand Corporation
  const models = [
    {
      icon: Handshake,
      title: "Direct Supply to Builders & Contractors",
      subtitle: "Reliable Regional Delivery",
      description:
        "We provide premium quality M-Sand, river sand, and aggregates directly to construction companies in Gujarat, ensuring timely delivery and consistent material quality.",
      features: ["High-quality sand", "On-time delivery", "Trusted by builders"]
    },
    {
      icon: Users,
      title: "Regional Distribution Partnerships",
      subtitle: "Expanding Local Reach",
      description:
        "Partnering with local dealers and RMC plants to ensure smooth supply, better inventory management, and faster access to materials across multiple regions.",
      features: ["Dealer network", "Efficient logistics", "Regional expertise"]
    },
    {
      icon: Settings,
      title: "Customized Material Solutions",
      subtitle: "Tailored Blends & Sizes",
      description:
        "Offering customized sand grading, gravel sizes, and material solutions to meet the specific needs of infrastructure and large-scale construction projects.",
      features: ["Custom sand blends", "Specialized gravel", "Project-specific delivery"]
    }
  ];

  const activeModel = models[activeIndex];

  return (
    <div className="min-h-screen py-20" style={{ backgroundColor: COLOR_LIGHT_GRAY }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          variants={scrollVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="inline-flex items-center gap-2 mb-3">
            <div className="w-1 h-6 rounded" style={{ backgroundColor: COLOR_NAVY }}></div>
            <span className="text-sm font-bold uppercase tracking-[0.2em]" style={{ color: COLOR_GOLD }}>
              OUR SUPPLY MODEL
            </span>
          </div>
          <h1 className="text-5xl font-extrabold mb-4" style={{ color: COLOR_TEXT_DARK }}>
            Supply & <span style={{ color: COLOR_NAVY }}>Distribution Strategy</span>
          </h1>
          <p className="text-lg max-w-3xl mx-auto" style={{ color: COLOR_TEXT_MEDIUM }}>
            Royal Sand Corporation delivers top-quality sand and aggregates with efficiency, reliability, and regional expertise.
          </p>
        </motion.div>

        {/* Tabs */}
        <motion.div
          className="bg-white rounded-t-xl shadow-md border-b-4"
          style={{ borderColor: COLOR_ACCENT_LIGHT }}
          variants={scrollVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="grid grid-cols-3 divide-x" style={{ borderColor: COLOR_ACCENT_LIGHT }}>
            {models.map((model, index) => {
              const Icon = model.icon;
              const isActive = index === activeIndex;

              return (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`flex flex-col items-center p-6 transition-all duration-300 ${isActive ? 'bg-white shadow-inner-top' : 'bg-white/90 hover:bg-white/100'}`}
                  style={{
                    borderBottom: isActive ? `4px solid ${COLOR_GOLD}` : '4px solid transparent',
                    transform: isActive ? 'translateY(0px)' : 'translateY(2px)',
                    zIndex: isActive ? 10 : 5,
                  }}
                >
                  <Icon className="w-6 h-6 mb-2 transition-colors duration-300" style={{ color: isActive ? COLOR_GOLD : COLOR_NAVY }} />
                  <span className="text-lg font-bold transition-colors duration-300" style={{ color: isActive ? COLOR_NAVY : COLOR_TEXT_MEDIUM }}>
                    {model.title}
                  </span>
                  <span className="text-xs uppercase tracking-wider mt-1" style={{ color: COLOR_TEXT_MEDIUM }}>
                    Step 0{index + 1}
                  </span>
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Dynamic Content */}
        <AnimatePresence mode='wait'>
          <motion.div
            key={activeIndex}
            className="bg-white p-12 rounded-b-xl shadow-2xl"
            variants={contentVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
              {/* Left Column */}
              <div className="lg:col-span-2">
                <span className="text-7xl font-extrabold leading-none block mb-4" style={{ color: COLOR_GOLD }}>
                  0{activeIndex + 1}
                </span>
                <h2 className="text-4xl font-extrabold mb-2" style={{ color: COLOR_NAVY }}>
                  {activeModel.title}
                </h2>
                <p className="text-lg font-semibold uppercase tracking-[0.2em] mb-6" style={{ color: COLOR_TEXT_DARK }}>
                  {activeModel.subtitle}
                </p>
                <p className="text-xl leading-relaxed" style={{ color: COLOR_TEXT_MEDIUM }}>
                  {activeModel.description}
                </p>
              </div>

              {/* Right Column */}
              <div className="lg:col-span-1 border-l-4 p-6 rounded-lg" style={{ borderColor: COLOR_ACCENT_LIGHT, backgroundColor: COLOR_ACCENT_LIGHT }}>
                <h3 className="text-sm font-bold uppercase tracking-wider mb-4" style={{ color: COLOR_NAVY }}>
                  Key Features
                </h3>
                <div className="flex flex-col gap-4">
                  {activeModel.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-3 text-base">
                      <CheckCircle2 className="w-5 h-5 flex-shrink-0" style={{ color: COLOR_GOLD }} />
                      <span className="font-medium" style={{ color: COLOR_TEXT_DARK }}>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Footer CTA */}
        <motion.div
          className="mt-16 text-center py-10 rounded-xl"
          style={{
            backgroundColor: COLOR_NAVY,
            background: `linear-gradient(90deg, ${COLOR_NAVY} 0%, #3a5775 100%)`,
            boxShadow: `0 15px 30px ${COLOR_NAVY}40`
          }}
          variants={scrollVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
        >
          <TrendingUp className="w-10 h-10 mx-auto mb-3" style={{ color: COLOR_GOLD }} />
          <p className="text-3xl font-extrabold" style={{ color: COLOR_WHITE }}>
            Reliable Supply. Quality Materials. Regional Expertise.
          </p>
          <p className="mt-2 text-base" style={{ color: COLOR_ACCENT_LIGHT }}>
            Royal Sand Corporation ensures timely delivery and superior quality for all construction projects.
          </p>
        </motion.div>

      </div>
    </div>
  );
}
