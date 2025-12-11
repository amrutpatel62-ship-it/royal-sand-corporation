"use client";

import React from "react";
import { motion } from "framer-motion";

// Define theme colors
const COLOR_NAVY = "#15324A";
const COLOR_GOLD = "#C49A6E";
const COLOR_TEXT_DARK = "#2C3E50";
const COLOR_TEXT_MEDIUM = "#6B7E98";
const COLOR_WHITE = "#FFFFFF";
const COLOR_LIGHT_GRAY = "#F0F3F7";
const COLOR_OFF_WHITE = "#FAFAFC";

// Animations
const headerVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const clientCardVariants = {
  hidden: { opacity: 0, y: 50, rotateZ: -2 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    rotateZ: 0,
    transition: { delay: i * 0.15 + 0.3, duration: 0.6, ease: "easeOut" },
  }),
};

const valueItemVariants = {
  hidden: { opacity: 0, y: 100 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.7, ease: "easeOut" },
  }),
};

const TargetAudience = () => {
  const clients = [
    {
      title: "Real Estate Developers",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      description: "Building tomorrow's landmarks with consistent, high-grade materials",
    },
    {
      title: "RMC Manufacturers",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
      description: "Powering production lines with dependable aggregate supply",
    },
    {
      title: "Infrastructure Contractors",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
        </svg>
      ),
      description: "Delivering on ambitious timelines with scalable solutions",
    }
  ];

  const values = [
    {
      title: "Scalability",
      subtitle: "Meeting Large, Time-Sensitive Demands",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
      description:
        "Our supply chains scale up instantly to meet your largest requirements without compromising quality or time.",
    },
    {
      title: "Compliance",
      subtitle: "Reducing Material-Related Project Risk",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      description:
        "Certified materials and documented quality control ensure full regulatory compliance at every stage.",
    },
    {
      title: "Reliability",
      subtitle: "Consistent Quality & Timeliness",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      description:
        "Dependable logistics and guaranteed technical standards mean total trust in our supply chain.",
    },
  ];

  return (
    <div className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden" style={{ backgroundColor: COLOR_WHITE }}>
      <div
        className="absolute top-0 left-0 w-full h-[60%]"
        style={{ backgroundColor: COLOR_LIGHT_GRAY, clipPath: "polygon(0 0, 100% 0, 100% 70%, 0% 100%)" }}
      />

      <div className="relative max-w-7xl mx-auto z-10">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={headerVariants}
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-10 h-[2px]" style={{ backgroundColor: COLOR_GOLD }}></div>
            <span className="text-xs font-bold tracking-[0.3em] uppercase" style={{ color: COLOR_NAVY }}>
              WHO WE PARTNER WITH
            </span>
            <div className="w-10 h-[2px]" style={{ backgroundColor: COLOR_GOLD }}></div>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4 leading-tight" style={{ color: COLOR_NAVY }}>
            Driving <span style={{ color: COLOR_GOLD }}>Structural</span> Excellence
          </h2>

          <p className="text-lg max-w-3xl mx-auto leading-relaxed" style={{ color: COLOR_TEXT_MEDIUM }}>
            We build long-term relationships with key players who demand uncompromising quality and supply assurance.
          </p>
        </motion.div>

        {/* Clients */}
        <h3 className="text-center text-3xl font-extrabold mb-12" style={{ color: COLOR_NAVY }}>
          Core Sector Focus
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {clients.map((client, index) => (
            <motion.div
              key={index}
              className="relative p-8 rounded-lg transition-all duration-300 group cursor-pointer h-full border-b-8"
              style={{
                backgroundColor: COLOR_WHITE,
                borderTop: `1px solid ${COLOR_LIGHT_GRAY}`,
                borderColor: COLOR_NAVY,
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={clientCardVariants}
              custom={index}
              whileHover={{
                y: -10,
                boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                borderColor: COLOR_GOLD,
              }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
            >
              <div className="flex items-center mb-5 pb-4 border-b border-opacity-30"
                style={{ borderColor: COLOR_LIGHT_GRAY }}>
                <div
                  className="p-3 rounded-md mr-4 transition-all duration-300"
                  style={{ backgroundColor: COLOR_GOLD, color: COLOR_NAVY }}
                >
                  {client.icon}
                </div>
                <h3 className="text-2xl font-extrabold leading-tight" style={{ color: COLOR_TEXT_DARK }}>
                  {client.title}
                </h3>
              </div>

              <p className="leading-relaxed text-base" style={{ color: COLOR_TEXT_MEDIUM }}>
                {client.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Values */}
        <div className="relative mt-20">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={headerVariants}
          >
            <span
              className="text-xs font-bold tracking-[0.3em] uppercase block mb-2"
              style={{ color: COLOR_GOLD }}
            >
              The Partner Advantage
            </span>

            <h3 className="text-3xl sm:text-4xl font-extrabold leading-tight max-w-3xl mx-auto" style={{ color: COLOR_NAVY }}>
              Our Three Pillars of Supply Chain Integrity
            </h3>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="group relative p-8 pl-12 transition-all duration-500 cursor-pointer overflow-hidden rounded-lg shadow-lg"
                style={{ backgroundColor: COLOR_WHITE, border: `1px solid ${COLOR_LIGHT_GRAY}` }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                variants={valueItemVariants}
                custom={index}
                whileHover={{
                  y: -5,
                  boxShadow: "0 10px 30px rgba(21,50,74,0.15)",
                }}
              >
                {/* Animated bar */}
                <motion.div
                  className="absolute top-0 left-0 h-full w-2"
                  initial={{ scaleY: 0 }}
                  whileInView={{
                    scaleY: 1,
                    originY: 1,
                  }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ delay: index * 0.2 + 0.5, duration: 0.8 }}
                  style={{ backgroundColor: COLOR_NAVY }}
                >
                  <motion.div
                    className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full"
                    style={{ backgroundColor: COLOR_GOLD }}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1, scale: [1, 1.3, 1] }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: index * 0.2 + 1.2, duration: 0.5 }}
                  />
                </motion.div>

                <div className="flex justify-between items-start mb-4">
                  <div
                    className="p-3 rounded-md transition-colors"
                    style={{ backgroundColor: COLOR_LIGHT_GRAY, color: COLOR_NAVY }}
                  >
                    {value.icon}
                  </div>

                  <span
                    className="text-4xl font-extrabold leading-none opacity-70"
                    style={{ color: COLOR_GOLD }}
                  >
                    0{index + 1}
                  </span>
                </div>

                <h4 className="text-xl font-bold mb-1 leading-snug" style={{ color: COLOR_TEXT_DARK }}>
                  {value.title}
                </h4>

                <p className="text-xs font-semibold tracking-wide uppercase mb-3" style={{ color: COLOR_NAVY }}>
                  {value.subtitle}
                </p>

                <p className="leading-relaxed text-sm" style={{ color: COLOR_TEXT_MEDIUM }}>
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TargetAudience;
