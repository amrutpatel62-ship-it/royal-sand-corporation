"use client";

import React, { useState } from 'react';
import { Droplets, Layers, Award, Check, ArrowRight, Sparkles } from 'lucide-react';

// =================================================================
// CUSTOM COLOR CONSTANTS
// =================================================================
const COLOR_NAVY_MIDNIGHT = "#15324A";
const COLOR_METALLIC_GOLD = "#C49A6E";
const COLOR_DARK_CHARCOAL = "#1A1A1A";
const COLOR_CLEAN_WHITE = "#FFFFFF";
const COLOR_LIGHT_STONE = "#F7F7F7"; // Using this as the primary light background
const COLOR_MUTED_TEAL = "#4A889A";
const COLOR_PALE_BLUE_GRAY = "#DBE1E8";
const COLOR_DEEP_MIDNIGHT = "#0E2333";
const COLOR_CREAMY_SAND = "#F5EFE4";
const COLOR_SOFT_BRONZE = "#DCD0B9";
const COLOR_ANTIQUE_BRONZE = "#9C7C58";

export default function ProductDetail() {
  const [activeFeature, setActiveFeature] = useState(null);

  const features = [
    {
      icon: Droplets,
      title: "Purity & Cleaning",
      description: "Washed to drastically reduce impurities like silt, clay, and organic matter, ensuring higher bond strength.",
      benefits: ["99.9% purity", "Enhanced bonding", "Minimal silt content"],
    },
    {
      icon: Layers,
      title: "Accurate Grading",
      description: "Available in multiple, consistent grain sizes, reducing the need for costly on-site screening and adjustments.",
      benefits: ["Multiple grain sizes", "Consistent quality", "No on-site screening"],
    },
    {
      icon: Award,
      title: "Compliance",
      description: "Guaranteed to meet or exceed relevant Indian Standard (IS) codes for specific structural applications.",
      benefits: ["IS certified", "Quality assured", "Structural grade"],
    }
  ];

  return (
    <div
      className="relative py-16 lg:py-24 overflow-hidden"
      style={{
        backgroundColor: COLOR_LIGHT_STONE, // Light, solid base color
      }}
    >
      {/* --- LIGHT BLURRED BACKGROUND EFFECT --- */}
      {/* This uses soft, semi-transparent light colors and a blur filter. */}
      <div
        className="absolute inset-0"
        style={{
          // Soft gradient from top-left (Pale Blue-Gray)
          background: `radial-gradient(
                circle at 10% 10%, 
                ${COLOR_PALE_BLUE_GRAY}50 0%, 
                transparent 40%
            ),
            // Accent gradient from bottom-right (Soft Bronze)
            radial-gradient(
                circle at 90% 90%, 
                ${COLOR_SOFT_BRONZE}50 0%, 
                transparent 40%
            )`,
          filter: 'blur(80px) opacity(0.8)' // Apply heavy blur
        }}
      />

      <style jsx>{`
        @keyframes scaleIn {
          from { transform: scale(0) rotate(-180deg); opacity: 0; }
          to { transform: scale(1) rotate(0deg); opacity: 1; }
        }
        @keyframes shimmer {
          0% { background-position: -1000px 0; }
          100% { background-position: 1000px 0; }
        }
        .animate-scale-in { animation: scaleIn 0.6s ease-out forwards; }
        .shimmer-effect {
          background: linear-gradient(90deg, transparent, ${COLOR_METALLIC_GOLD}40, transparent);
          background-size: 200% 100%;
          animation: shimmer 3s infinite;
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>

      <div className="relative z-10 container mx-auto px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">

          {/* Header Section - Text color reverted to dark for contrast */}
          <div className="text-center mb-16 animate-scale-in">
            <h2 className="text-4xl lg:text-5xl font-bold mt-8 mb-4" style={{ color: COLOR_DARK_CHARCOAL }}>
              Processed River Sand:
            </h2>
            <div
              className="text-3xl lg:text-4xl font-bold shimmer-effect bg-clip-text text-transparent"
              style={{
                backgroundImage: `linear-gradient(90deg, ${COLOR_ANTIQUE_BRONZE}, ${COLOR_METALLIC_GOLD}, ${COLOR_METALLIC_GOLD}, ${COLOR_ANTIQUE_BRONZE})`
              }}
            >
              Engineered for Excellence
            </div>

            {/* Decorative Diamond Line */}
            <div className="flex items-center justify-center gap-2 mt-6">
              <div className="w-3 h-3 rotate-45" style={{ backgroundColor: COLOR_METALLIC_GOLD }}></div>
              <div className="h-0.5 w-20" style={{ backgroundColor: COLOR_METALLIC_GOLD }}></div>
              <div className="w-4 h-4 rotate-45" style={{ backgroundColor: COLOR_METALLIC_GOLD }}></div>
              <div className="h-0.5 w-20" style={{ backgroundColor: COLOR_METALLIC_GOLD }}></div>
              <div className="w-3 h-3 rotate-45" style={{ backgroundColor: COLOR_METALLIC_GOLD }}></div>
            </div>

            <p className="mt-6 text-lg" style={{ color: COLOR_NAVY_MIDNIGHT }}>
              The core pillars of structural integrity.
            </p>
          </div>

          {/* Feature Cards - White cards still look great on a light stone background */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group relative animate-scale-in"
                style={{ animationDelay: `${index * 0.2}s` }}
                onMouseEnter={() => setActiveFeature(index)}
                onMouseLeave={() => setActiveFeature(null)}
              >
                <div className="relative p-0">
                  {/* Inner Content (The Card) - Added a subtle hover border for effect */}
                  <div
                    className="relative bg-white rounded-2xl p-6 shadow-xl transition-all duration-500 group-hover:shadow-2xl group-hover:scale-[1.02] border group-hover:border-4"
                    style={{
                      borderColor: activeFeature === index ? COLOR_METALLIC_GOLD : COLOR_PALE_BLUE_GRAY,
                      transitionProperty: 'border-color, transform, box-shadow'
                    }}
                  >
                    {/* Icon Circle */}
                    <div className="flex justify-center mb-4">
                      <div
                        className="relative w-20 h-20 flex items-center justify-center rounded-full transition-all duration-500 group-hover:scale-110"
                        style={{
                          backgroundColor: COLOR_PALE_BLUE_GRAY,
                          border: `4px solid ${COLOR_METALLIC_GOLD}`
                        }}
                      >
                        <feature.icon className="w-10 h-10" style={{ color: COLOR_NAVY_MIDNIGHT }} />

                        {/* Pulse Ring */}
                        <div
                          className={`absolute inset-0 rounded-full transition-all duration-300 ${activeFeature === index ? 'animate-ping' : ''}`}
                          style={{ border: `2px solid ${COLOR_METALLIC_GOLD}` }}
                        />
                      </div>
                    </div>

                    {/* Title with Underline Animation */}
                    <h3 className="text-xl font-bold text-center mb-3 relative" style={{ color: COLOR_DARK_CHARCOAL }}>
                      {feature.title}
                      <div
                        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 transition-all duration-300"
                        style={{
                          backgroundColor: COLOR_METALLIC_GOLD,
                          width: activeFeature === index ? '100%' : '0%'
                        }}
                      />
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-center mb-4 leading-relaxed" style={{ color: COLOR_NAVY_MIDNIGHT, opacity: 0.8 }}>
                      {feature.description}
                    </p>

                    {/* Benefits as Stacked Pills */}
                    <div className="space-y-2">
                      {feature.benefits.map((benefit, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-2 px-3 py-2 transition-all duration-300 hover:translate-x-2"
                          style={{
                            backgroundColor: COLOR_CREAMY_SAND,
                            borderLeft: `4px solid ${COLOR_METALLIC_GOLD}`,
                            borderRadius: '0 12px 12px 0'
                          }}
                        >
                          <div
                            className="w-5 h-5 flex items-center justify-center rounded-full flex-shrink-0"
                            style={{ backgroundColor: COLOR_METALLIC_GOLD }}
                          >
                            <Check className="w-3 h-3" style={{ color: COLOR_CLEAN_WHITE }} />
                          </div>
                          <span className="text-xs font-semibold" style={{ color: COLOR_NAVY_MIDNIGHT }}>
                            {benefit}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Corner Accent */}
                    <div
                      className="absolute top-0 right-0 w-12 h-12 opacity-10 transition-opacity group-hover:opacity-30"
                      style={{
                        background: `linear-gradient(135deg, ${COLOR_METALLIC_GOLD}, transparent)`,
                        borderRadius: '0 12px 0 0'
                      }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Circular Compliance Badges */}
          <div className="relative">
            <div className="flex flex-wrap justify-center items-center gap-6">
              {[
                { icon: Award, text: "IS Code Compliant" },
                { icon: Check, text: "Quality Tested" },
                { icon: Layers, text: "Grade Certified" }
              ].map((badge, idx) => (
                <div
                  key={idx}
                  className="group/badge relative animate-scale-in"
                  style={{ animationDelay: `${idx * 0.15 + 0.6}s` }}
                >
                  {/* Circular Badge */}
                  <div
                    className="relative w-32 h-32 flex flex-col items-center justify-center rounded-full transition-all duration-500 group-hover/badge:scale-110 group-hover/badge:rotate-12 cursor-pointer"
                    style={{
                      backgroundColor: COLOR_CLEAN_WHITE,
                      border: `4px solid ${COLOR_METALLIC_GOLD}`,
                      boxShadow: `0 10px 30px ${COLOR_METALLIC_GOLD}40`
                    }}
                  >
                    <badge.icon className="w-8 h-8 mb-2 transition-transform group-hover/badge:scale-125" style={{ color: COLOR_METALLIC_GOLD }} />
                    <span className="text-xs font-bold text-center px-2" style={{ color: COLOR_NAVY_MIDNIGHT }}>
                      {badge.text}
                    </span>

                    {/* Rotating Border Effect */}
                    <div
                      className="absolute inset-0 rounded-full opacity-0 group-hover/badge:opacity-100 transition-opacity"
                      style={{
                        border: `2px dashed ${COLOR_METALLIC_GOLD}`,
                        animation: 'spin 4s linear infinite'
                      }}
                    />
                  </div>

                  {/* Bottom Glow */}
                  <div
                    className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-4 rounded-full filter blur-lg opacity-50"
                    style={{ backgroundColor: COLOR_METALLIC_GOLD }}
                  />
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}