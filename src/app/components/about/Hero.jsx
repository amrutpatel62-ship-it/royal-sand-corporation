"use client";

import React from 'react';
import { ArrowRight } from 'lucide-react';

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
  return (
    <div
      className="relative py-24 sm:py-36 flex items-center justify-center overflow-hidden min-h-[70vh]"
      style={{
        backgroundImage: `url('images/about.jpg')`, 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <div
        className="absolute inset-0"
        style={{
          background:
            `linear-gradient(135deg, ${COLORS.DEEP_MIDNIGHT}A0 0%, ${COLORS.NAVY_MIDNIGHT}D0 100%)`, 
        }}
      ></div>
      <div
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
  
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 leading-tight tracking-tight">
          <span className="block mb-1" style={{ color: COLORS.CLEAN_WHITE }}>
            Setting the New
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
            Standard in Sand Supply
          </span>
        </h1>

        <div className="flex items-center justify-center mb-4">
          <div
            className="h-px w-16"
            style={{ backgroundColor: COLORS.METALLIC_GOLD }}
          ></div>
          <div
            className="w-2 h-2 mx-4 rotate-45"
            style={{ backgroundColor: COLORS.METALLIC_GOLD }}
          ></div>
          <div
            className="h-px w-16"
            style={{ backgroundColor: COLORS.METALLIC_GOLD }}
          ></div>
        </div>

        <p
          className="text-base sm:text-lg lg:text-xl mb-4 max-w-4xl mx-auto leading-relaxed"
          style={{ color: COLORS.PALE_BLUE_GRAY }}
        >
          Royal Sand Corporation was founded to solve the industry's greatest
          pain points:
          <span
            className="font-semibold"
            style={{ color: COLORS.CREAMY_SAND }} 
          >
            {' '}
            quality inconsistency
          </span>
          ,
          <span
            className="font-semibold"
            style={{ color: COLORS.CREAMY_SAND }}
          >
            {' '}
            regulatory risk
          </span>
          , and
          <span
            className="font-semibold"
            style={{ color: COLORS.CREAMY_SAND }}
          >
            {' '}
            logistical delays
          </span>
          .
        </p>

        <div
          className="pt-4 border-t"
          style={{
            borderColor: `${COLORS.METALLIC_GOLD}40`, 
          }}
        >
          <div className="grid grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="text-center group cursor-default">
              <div
                className="text-2xl font-bold mb-1 transition-colors"
                style={{ color: COLORS.METALLIC_GOLD }}
              >
                Premium
              </div>
              <div
                className="text-xs transition-colors"
                style={{ color: COLORS.PALE_BLUE_GRAY }}
              >
                Quality Standards
              </div>
            </div>
            <div className="text-center group cursor-default">
              <div
                className="text-2xl font-bold mb-1 transition-colors"
                style={{ color: COLORS.METALLIC_GOLD }}
              >
                Certified
              </div>
              <div
                className="text-xs transition-colors"
                style={{ color: COLORS.PALE_BLUE_GRAY }}
              >
                Regulatory Compliance
              </div>
            </div>
            <div className="text-center group cursor-default">
              <div
                className="text-2xl font-bold mb-1 transition-colors"
                style={{ color: COLORS.METALLIC_GOLD }}
              >
                Reliable
              </div>
              <div
                className="text-xs transition-colors"
                style={{ color: COLORS.PALE_BLUE_GRAY }}
              >
                Logistics Network
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}