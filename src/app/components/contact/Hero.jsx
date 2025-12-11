"use client";

import React from 'react';
// Removed lucide imports as they are not needed for this non-interactive layout

const COLORS = {
  NAVY_MIDNIGHT: '#15324A',
  METALLIC_GOLD: '#C49A6E',
  CLEAN_WHITE: '#FFFFFF',
  PALE_BLUE_GRAY: '#DBE1E8',
  DEEP_MIDNIGHT: '#0E2333',
  ANTIQUE_BRONZE: '#9C7C58',
  CREAMY_SAND: '#F5EFE4',
};

export default function HeroSection() {
  // Removed handlers as no interactive elements are present

  return (
    <div
      className="relative py-20 sm:py-28 flex items-center justify-center overflow-hidden min-h-[67vh]"
      style={{
        backgroundImage: `url("https://t3.ftcdn.net/jpg/13/23/80/32/360_F_1323803268_uNU0yANGOUFMOdoiK11RzBuXha2j3Js9.jpg")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Dark overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: `linear-gradient(135deg, ${COLORS.DEEP_MIDNIGHT}A0 0%, ${COLORS.NAVY_MIDNIGHT}D0 100%)`,
        }}
      ></div>
      <div
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        <p
          className="text-base sm:text-lg font-semibold mb-3 tracking-wider uppercase" // mb-3 (tighter to h1)
          style={{ color: COLORS.METALLIC_GOLD }}
        >

        </p>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-3 leading-tight tracking-tight"> {/* mb-3 (tighter to separator) */}
          <span className="block mb-1" style={{ color: COLORS.CLEAN_WHITE }}>
            The Proven Partner
          </span>
          <span
            className="block"
            style={{
              background:
                `linear-gradient(135deg, ${COLORS.CREAMY_SAND} 0%, ${COLORS.METALLIC_GOLD} 100%)`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            For Infrastructure Excellence.
          </span>
        </h1>

        {/* Separator */}
        <div className="flex items-center justify-center mb-8"> 
          <div
            className="h-px w-16"
            style={{ backgroundColor: COLORS.METALLIC_GOLD }}
          ></div>
        </div>

        {/* Sub-headline: Mission Statement */}
        <p
          className="text-lg sm:text-xl mb-12 max-w-3xl mx-auto font-medium leading-relaxed" 
          style={{ color: COLORS.PALE_BLUE_GRAY }}
        >
          Two decades of dependable supply and quality control, ensuring every large-scale project begins on a solid, reliable foundation.
        </p>

        {/* --- Highlighted Commitment Block --- */}
        <div
          className="max-w-xl mx-auto p-2 rounded-xl shadow-2xl mt-10" 
          style={{
            backgroundColor: `${COLORS.NAVY_MIDNIGHT}D0`,
            border: `1px solid ${COLORS.METALLIC_GOLD}`,
          }}
        >
          <p
            className="text-xl font-extrabold"
            style={{ color: COLORS.CLEAN_WHITE }}
          >
            "Our Legacy is Built on Consistency."
          </p>
          <p
            className="text-sm mt-3 uppercase tracking-wider"
            style={{ color: COLORS.PALE_BLUE_GRAY }}
          >
            — Foundational Commitment
          </p>
        </div>
      </div>
    </div>
  );
}