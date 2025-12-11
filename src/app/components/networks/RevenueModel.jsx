"use client";

import React, { useState } from 'react';
import { Handshake, Users, Settings, TrendingUp, ArrowRight, CheckCircle2 } from 'lucide-react';
// Import motion and AnimatePresence from framer-motion
import { motion, AnimatePresence } from 'framer-motion';

// Define theme colors for easy reference (Original colors preserved)
const COLOR_NAVY = '#15324A';
const COLOR_GOLD = '#C49A6E';
const COLOR_TEXT_DARK = '#2C3E50';
const COLOR_TEXT_MEDIUM = '#6B7E98'; // Used for paragraph text
const COLOR_WHITE = '#FFFFFF';
const COLOR_LIGHT_GRAY = '#F0F3F5';
const COLOR_ACCENT_LIGHT = '#EAEFF5'; // Light divider color

// Animation variants for scroll-based entrance
const scrollVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

// Animation variants for content change when tabs are clicked
const contentVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.2 } },
};


export default function RevenueModel() {
  // Use a key to force AnimatePresence to detect a change when the tab switches
  const [activeIndex, setActiveIndex] = useState(0);

  const models = [
    {
      icon: Handshake,
      title: "Direct B2B Sales",
      subtitle: "Securing Long-Term Contracts",
      description: "Focus on securing long-term supply agreements with major developers and contractors, ensuring predictable revenue streams and optimized logistics.",
      features: ["Long-term agreements", "Predictable revenue", "Optimized logistics"]
    },
    {
      icon: Users,
      title: "Channel Partnerships",
      subtitle: "Expanding Local Reach",
      description: "Strategic partnerships with regional dealers, distributors, and RMC plants to maximize localized market penetration and inventory efficiency.",
      features: ["Regional dealers", "Local penetration", "Inventory efficiency"]
    },
    {
      icon: Settings,
      title: "Custom Orders",
      subtitle: "Specialized Project Fulfillment",
      description: "High-margin revenue from custom material blending, unique sizing, and tailored delivery schedules for highly specialized, complex infrastructure projects.",
      features: ["Custom blending", "Unique sizing", "Tailored delivery"]
    }
  ];

  const activeModel = models[activeIndex];

  return (
    <div className="min-h-screen py-20" style={{ backgroundColor: COLOR_LIGHT_GRAY }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Section Header - ADDED SCROLL ANIMATION */}
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
              FINANCIAL ARCHITECTURE
            </span>
          </div>
          <h1 className="text-5xl font-extrabold mb-4" style={{ color: COLOR_TEXT_DARK }}>
            Strategic <span style={{ color: COLOR_NAVY }}>Revenue Tiers</span>
          </h1>
          <p className="text-lg max-w-3xl mx-auto" style={{ color: COLOR_TEXT_MEDIUM }}>
            Each pillar is engineered to provide predictable, high-margin contributions to the overall corporate valuation.
          </p>
        </motion.div>

        {/* Interactive Tab Navigation - ADDED SCROLL ANIMATION */}
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
                  // The tab's styling already had a great transition
                  className={`flex flex-col items-center p-6 transition-all duration-300 ${isActive
                      ? 'bg-white shadow-inner-top'
                      : 'bg-white/90 hover:bg-white/100'
                    }`}
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
                    Pillar 0{index + 1}
                  </span>
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Dynamic Content Display - ADDED ANIMATEPRESENCE FOR CONTENT TRANSITION */}
        {/* AnimatePresence allows components to animate out when they are removed from the React tree */}
        <AnimatePresence mode='wait'>
          {/* The key is CRITICAL here. When the key changes (activeIndex), framer-motion detects a new component and runs the animation. */}
          <motion.div
            key={activeIndex}
            className="bg-white p-12 rounded-b-xl shadow-2xl"
            variants={contentVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

              {/* Left Column: Title and Description */}
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

              {/* Right Column: Key Features */}
              <div className="lg:col-span-1 border-l-4 p-6 rounded-lg" style={{ borderColor: COLOR_ACCENT_LIGHT, backgroundColor: COLOR_ACCENT_LIGHT }}>
                <h3 className="text-sm font-bold uppercase tracking-wider mb-4" style={{ color: COLOR_NAVY }}>
                  Key Performance Drivers
                </h3>

                {/* Feature List */}
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


        {/* CTA/Summary Footer - ADDED SCROLL ANIMATION */}
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
            Engineered for Consistent High Growth.
          </p>
          <p className="mt-2 text-base" style={{ color: COLOR_ACCENT_LIGHT }}>
            This diversified approach secures your market position and financial stability.
          </p>
        </motion.div>

      </div>
    </div>
  );
}