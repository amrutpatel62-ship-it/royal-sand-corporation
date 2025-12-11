"use client";

import React, { useState } from 'react';
import { Building2, Paintbrush, Blocks, CheckCircle, ChevronDown, TrendingUp, Sparkles, Database } from 'lucide-react';
import Link from "next/link";

// --- Custom Component for Accordion Row ---

const MatrixRow = ({ item, index, isActive, onClick }) => {
  const goldGradient = "from-[#C49A6E] to-[#9C7C58]";
  const navyBlue = "text-[#15324A]";

  return (
    <div className={`border-b border-gray-200 transition-all duration-300 ${isActive ? 'bg-[#F9FAFB] shadow-inner' : 'hover:bg-gray-50'}`}>
      {/* Header Row (Always Visible) */}
      <button
        className="w-full p-4 md:p-6 flex items-center justify-between text-left focus:outline-none"
        onClick={onClick}
      >
        <div className="flex items-center gap-4 flex-1">
          {/* Icon & Application */}
          <div className={`w-10 h-10 flex-shrink-0 bg-[#DBE1E8] rounded-full flex items-center justify-center`}>
            <item.icon className={`w-5 h-5 ${navyBlue}`} />
          </div>
          <h3 className={`text-lg font-semibold ${navyBlue} transition-colors duration-300 group-hover:text-[#9C7C58]`}>
            {item.application}
          </h3>
        </div>

        {/* Grade Badge (Quick View) */}
        <div className="hidden sm:block flex-shrink-0 w-1/4">
          <span className={`text-sm font-medium text-gray-600`}>{item.grade}</span>
        </div>

        {/* Accordion Toggle Icon */}
        <div className="flex-shrink-0 w-8 flex justify-end">
          <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${isActive ? 'rotate-180 text-[#9C7C58]' : ''}`} />
        </div>
      </button>

      {/* Detailed Content (Collapsible) */}
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${isActive ? 'max-h-96 opacity-100 py-4' : 'max-h-0 opacity-0'}`}
      >
        <div className="px-4 pb-4 md:px-6 md:pb-6 grid lg:grid-cols-3 gap-4 border-l-4 border-l-[#C49A6E] mx-4 sm:mx-0">

          <div className="lg:col-span-2">
            <p className="text-gray-700 leading-relaxed italic text-base">
              <span className={`font-bold ${navyBlue}`}>Key Benefit: </span>
              {item.benefit}
            </p>
          </div>

          <div className="lg:col-span-1 flex flex-col justify-end items-start lg:items-end">
            <Link href={`/specifications/${item.id}`} passHref>
              <button className={`inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${goldGradient} text-white font-semibold text-sm rounded-lg shadow-md hover:shadow-lg transition-all duration-300`}>
                <Database className="w-4 h-4" />
                View Full Data Sheet
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- Main Component ---

export default function ProfessionalProductMatrix() {
  const [activeIndex, setActiveIndex] = useState(null);

  const applications = [
    {
      id: 1,
      icon: Building2,
      application: "Structural Concrete & RMC",
      grade: "Coarse/Fine Aggregate (IS:383)",
      benefit: "Precision-graded for superior mix design, ensuring maximum **compressive strength** and optimal early-age durability required for major structural works.",
    },
    {
      id: 2,
      icon: Paintbrush,
      application: "Surface Finishing & Plastering",
      grade: "Fine Grade (P-Sand)",
      benefit: "Engineered for a **high-fidelity, smooth finish**, providing excellent surface characteristics, reduced shrinkage, and lower material wastage.",
    },
    {
      id: 3,
      icon: Blocks,
      application: "Masonry & Mortar",
      grade: "Medium Grade (M-Sand)",
      benefit: "Optimally balanced for cohesive and robust mortar, resulting in stable, durable **brickwork and block laying** with reliable bond strength.",
    }
  ];

  const navyBlue = "text-[#15324A]";
  const goldGradientHeader = "from-[#C49A6E] via-[#9C7C58] to-[#C49A6E]";

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="relative bg-white py-16 lg:py-24">

      {/* Subtle Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-gray-50/50 to-white/50 pointer-events-none"></div>

      <div className="relative z-10 container mx-auto px-6 max-w-6xl">

        {/* Header Block */}
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <div className={`inline-flex items-center gap-2 px-5 py-1.5 bg-[#DBE1E8] text-xs font-bold tracking-widest uppercase rounded-full`}>
            <CheckCircle className={`w-4 h-4 ${navyBlue}`} />
            <span className={navyBlue}>Certified Applications Guide</span>
          </div>

          <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mt-4 mb-3">
            Optimal <span className={`bg-gradient-to-r ${goldGradientHeader} bg-clip-text text-transparent`}>Grade Selection</span>
          </h2>

          <p className="text-gray-600 text-lg mt-3">
            A structured view of our precision-engineered sand grades matched to industry-specific construction requirements.
          </p>
        </div>

        {/* Main Professional Matrix Card */}
        <div className="bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden">

          {/* Table Header (Desktop/Tablet) */}
          <div className={`hidden sm:flex p-4 md:p-6 ${navyBlue} bg-[#DBE1E8] font-bold uppercase text-sm border-b border-gray-300`}>
            <div className="flex-1">Application Type</div>
            <div className="w-1/4">Recommended Grade</div>
            <div className="w-8"></div> {/* Spacer for chevron */}
          </div>

          {/* Accordion Rows */}
          {applications.map((item, index) => (
            <MatrixRow
              key={item.id}
              item={item}
              index={index}
              isActive={activeIndex === index}
              onClick={() => toggleAccordion(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}