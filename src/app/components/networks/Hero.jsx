"use client";

import React from "react";
import { ArrowRight, BookOpen, Mail } from "lucide-react";

const COLOR_METALLIC_GOLD = "#C49A6E";
const COLOR_MUTED_TEAL = "#4A889A";
const COLOR_DEEP_MIDNIGHT = "#0E2333";
const COLOR_NAVY_BLUE = "#15324A";
const COLOR_LIGHT_STONE = "#F7F7F7";
const COLOR_CLEAN_WHITE = "#FFFFFF";
const COLOR_PALE_BLUE_GRAY = "#DBE1E8";
const COLOR_DARK_CHARCOAL = "#1A1A1A";
const COLOR_COOL_GRAY = "#A8B3BF";
const COLOR_CREAMY_SAND = "#F5EFE4";
const COLOR_NAVY_MIDNIGHT = "#15324A";

// UPDATED: Using the new external URL for the background image
const BACKGROUND_IMAGE_PATH = "https://buildwatchnews.com/wp-content/uploads/2025/06/ED_05.jpg"; 

export default function HeroSection() {
  const handleViewGrades = () => {
    console.log("Navigating to Product Grades Page...");
  };

  const handleContactSales = () => {
    console.log("Navigating to Contact Page...");
  };

  return (
    <div
      className="relative overflow-hidden min-h-[87vh] pt-24 sm:pt-40 pb-17 flex items-center"
      style={{
        // Using the updated BACKGROUND_IMAGE_PATH
        backgroundImage: `url('${BACKGROUND_IMAGE_PATH}')`, 
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* OVERLAY */}
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(135deg, ${COLOR_DEEP_MIDNIGHT}A0 0%, ${COLOR_NAVY_MIDNIGHT}D0 100%)`,
        }}
      ></div>
      {/* CONTENT */}
      <div className="relative z-10 container mx-auto px-6 h-full flex items-center justify-center">
        <div className="max-w-4xl mx-auto w-full text-center">
          <div className="space-y-3 mb-8">
            <h1
              className="text-4xl lg:text-6xl font-bold leading-tight"
              style={{ color: COLOR_CLEAN_WHITE }}
            >
              Certainty in Supply.
              <span
                className="block mt-2 bg-clip-text text-transparent"
                style={{
                  backgroundImage: `linear-gradient(to right, ${COLOR_CREAMY_SAND}, ${COLOR_METALLIC_GOLD})`,
                }}
              >
                Confidence in Quality.
              </span>
            </h1>

            {/* Accent line */}
            <div
              className="h-1 w-20 mx-auto rounded-full"
              style={{ backgroundColor: COLOR_METALLIC_GOLD }}
            ></div>
          </div>

          <p
            className="text-xl lg:text-2xl font-semibold mb-4"
            style={{ color: COLOR_PALE_BLUE_GRAY }}
          >
            We partner with leading infrastructure and real estate firms, offering scalable supply agreements and unparalleled consistency for high-value projects.
          </p>

          <p
            className="text-lg leading-relaxed max-w-2xl mx-auto"
            style={{ color: COLOR_PALE_BLUE_GRAY }}
          >
            {/* Keeping this description block but removing the text as it wasn't specified in the new content. */}
          </p>

          <div className="pt-8 flex justify-center space-x-4">
            <button
              onClick={handleViewGrades}
              className="group px-8 py-4 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 inline-flex items-center gap-2"
              style={{
                backgroundImage: `linear-gradient(to right, #9C7C58, ${COLOR_METALLIC_GOLD})`,
              }}
            >
              <Mail className="w-5 h-5" />
              Inquire About B2B Bulk Pricing and Partnership
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            {/* Removing the second button as there's only one CTA in the new content */}
          </div>
        </div>
      </div>

      <div
        className="absolute bottom-0 left-0 right-0 h-1"
        style={{
          backgroundImage: `linear-gradient(to right, ${COLOR_NAVY_BLUE}, ${COLOR_MUTED_TEAL}, ${COLOR_METALLIC_GOLD})`,
        }}
      ></div>
    </div>
  );
}