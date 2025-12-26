"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Truck,
  Shield,
  CheckCircle,
  MapPin,
  BarChart,
  Settings,
  Scaling,
  Box,
} from "lucide-react";

// --- Color Constants ---
const NAVY_BLUE = "#15324A";
const METALLIC_GOLD = "#C49A6E";
const ANTIQUE_BRONZE = "#9C7C58";
const LIGHT_GRAY = "#F8F9FA";
const DARK_GRAY_TEXT = "#343A40";
const OFF_WHITE = "#FFFFFF";

// --- Packaging Options ---
const packagingOptions = [
  {
    id: 1,
    icon: Scaling,
    title: "1 Ton Jumbo Bags",
    subtitle: "FIBC Solution",
    description:
      "Designed for high-volume operations with crane or forklift handling, ensuring efficient bulk transport.",
    features: [
      "Verified 1000 kg capacity",
      "Optimized lifting points for safety",
      "Cost-efficient for large-scale operations",
      "UV and moisture protected",
    ],
  },
  {
    id: 2,
    icon: Box,
    title: "Standard Bags (25kg/50kg)",
    subtitle: "Precision Units",
    description:
      "Ideal for precise batch mixing, easy on-site handling, and streamlined inventory management.",
    features: [
      "Verified unit weight (25kg/50kg)",
      "Ergonomic manual handling",
      "Sealed for consistent quality",
      "Simplified inventory tracking",
    ],
  },
  {
    id: 3,
    icon: Truck,
    title: "High-Volume Bulk Supply",
    subtitle: "Managed Fleet Delivery",
    description:
      "Direct truck-to-site delivery maximizes throughput while minimizing packaging waste and handling risks.",
    features: [
      "Real-time GPS tracking",
      "Customizable delivery scheduling",
      "Minimal packaging waste",
      "Rapid site discharge optimization",
      "Dedicated account support",
    ],
  },
];

// --- Animation Variants ---
const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" },
  }),
};

const logisticsVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.15 + 0.3, duration: 0.6, ease: "easeOut" },
  }),
};

// --- Logistics Panel ---
const logisticsCommitment = [
  {
    icon: Settings,
    title: "Process Control",
    description: "Quality checks integrated at loading, transit, and delivery.",
  },
  {
    icon: MapPin,
    title: "Tracked Fleet",
    description: "Real-time visibility of material location via dedicated tracking platform.",
  },
  {
    icon: Shield,
    title: "Risk Mitigation",
    description: "Ensured material integrity through professional handling and sealing.",
  },
];

// --- Main Component ---
export default function FeatureShowcaseRoyalSand() {
  return (
    <section className="relative bg-white py-16 lg:py-24" aria-labelledby="packaging-logistics-header">
      <div className="relative z-10 container mx-auto px-6 max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 mb-3 px-4 py-1.5 bg-white border border-gray-200 rounded-full shadow-sm">
            <BarChart className="w-4 h-4" style={{ color: ANTIQUE_BRONZE }} />
            <span
              className="text-xs font-bold tracking-widest uppercase"
              style={{ color: NAVY_BLUE }}
            >
              Supply Logistics & Packaging Tiers
            </span>
          </div>

          <h2
            id="packaging-logistics-header"
            className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4"
          >
            Compare Our <span style={{ color: NAVY_BLUE }}>Engineered</span>{" "}
            <br />
            <span style={{ color: METALLIC_GOLD }}>Delivery Solutions</span>
          </h2>
          <p className="text-lg mt-4" style={{ color: DARK_GRAY_TEXT }}>
            Explore key specifications for each packaging and delivery method offered by Royal Sand Corporation.
          </p>
        </div>

        {/* Packaging Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packagingOptions.map((option, index) => (
            <motion.div
              key={option.id}
              className="p-8 flex flex-col h-full rounded-xl shadow-lg cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2"
              style={{
                backgroundColor: OFF_WHITE,
                borderTop: `6px solid ${NAVY_BLUE}`,
                borderBottom: `2px solid ${METALLIC_GOLD}`,
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={cardVariants}
              custom={index}
              whileHover={{ y: -5, boxShadow: "0 10px 15px rgba(0,0,0,0.1)" }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
            >
              {/* Icon and Title */}
              <div className="mb-6 pb-4 border-b border-gray-100">
                <option.icon
                  className="w-10 h-10 mb-3"
                  style={{ color: METALLIC_GOLD }}
                  aria-hidden="true"
                />
                <h3 className="text-2xl font-extrabold mb-1" style={{ color: NAVY_BLUE }}>
                  {option.title}
                </h3>
                <p className="text-sm font-medium uppercase tracking-wider" style={{ color: ANTIQUE_BRONZE }}>
                  {option.subtitle}
                </p>
              </div>

              {/* Description */}
              <p className="text-base leading-relaxed mb-8" style={{ color: DARK_GRAY_TEXT }}>
                {option.description}
              </p>

              {/* Features */}
              <div className="flex-grow">
                <h4 className="text-lg font-bold mb-3" style={{ color: NAVY_BLUE }}>
                  Key Advantages:
                </h4>
                <ul className="space-y-3" role="list">
                  {option.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle
                        className="w-4 h-4 flex-shrink-0 mt-1"
                        style={{ color: ANTIQUE_BRONZE }}
                        aria-hidden="true"
                      />
                      <span className="text-sm" style={{ color: DARK_GRAY_TEXT }}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Logistics Summary */}
        <div className="mt-16 pt-8 border-t" style={{ borderColor: NAVY_BLUE }}>
          <h3 className="text-2xl font-extrabold mb-6 text-center" style={{ color: NAVY_BLUE }}>
            Our Logistics Framework: Accountability Built-in
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {logisticsCommitment.map((item, index) => (
              <motion.div
                key={index}
                className="flex items-start gap-4 p-6 rounded-lg shadow-md cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2"
                style={{ backgroundColor: LIGHT_GRAY, border: `1px solid ${ANTIQUE_BRONZE}` }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                variants={logisticsVariants}
                custom={index}
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
              >
                <item.icon className="w-6 h-6 flex-shrink-0" style={{ color: NAVY_BLUE }} aria-hidden="true" />
                <div>
                  <h4 className="text-lg font-bold mb-1" style={{ color: NAVY_BLUE }}>
                    {item.title}
                  </h4>
                  <p className="text-sm text-gray-700">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
