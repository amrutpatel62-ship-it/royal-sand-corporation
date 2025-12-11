import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Clock, MessageSquare } from 'lucide-react';

const COLORS = {
  NAVY_MIDNIGHT: '#15324A',
  METALLIC_GOLD: '#C49A6E',
  DARK_CHARCOAL: '#1A1A1A',
  CLEAN_WHITE: '#FFFFFF',
  LIGHT_STONE: '#F7F7F7',
  MUTED_TEAL: '#4A889A',
  PALE_BLUE_GRAY: '#DBE1E8',
  COOL_GRAY: '#A8B3BF',
  DEEP_MIDNIGHT: '#0E2333',
  ALMOST_BLACK: '#07131D',
  CREAMY_SAND: '#F5EFE4',
  SOFT_BRONZE: '#DCD0B9',
  ANTIQUE_BRONZE: '#9C7C58',
  DEEP_OLIVE: '#755E44',
};

export default function Contact() {
  const [activeContact, setActiveContact] = useState(0);

  const contactInfo = [
    {
      icon: Mail,
      title: "Sales & Inquiries",
      content: "amrutpatel62@gmail.com",
      description: "Get in touch for business inquiries",
      color: COLORS.MUTED_TEAL
    },
    {
      icon: Phone,
      title: "Phone",
      content: "+91 9913264409",
      description: "Mon-Fri, 9:00 AM - 6:00 PM IST",
      color: COLORS.METALLIC_GOLD
    },
    {
      icon: MapPin,
      title: "Head Office/Plant",
      content: "16, Ganesh Vivan, C link road, Radhanpur road, Panchot, Mahesana, Gujarat - 384002",
      description: "Visit our facility",
      color: COLORS.NAVY_MIDNIGHT
    }
  ];

  return (
    <div
      className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      style={{
        background: `linear-gradient(135deg, ${COLORS.CREAMY_SAND} 0%, ${COLORS.LIGHT_STONE} 50%, ${COLORS.PALE_BLUE_GRAY} 100%)`
      }}
    >
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-0 left-1/4 w-1 h-full opacity-5"
          style={{ backgroundColor: COLORS.METALLIC_GOLD }}
        ></div>
        <div
          className="absolute top-0 right-1/4 w-1 h-full opacity-5"
          style={{ backgroundColor: COLORS.MUTED_TEAL }}
        ></div>
        <div
          className="absolute top-1/3 left-0 right-0 h-1 opacity-5"
          style={{ backgroundColor: COLORS.NAVY_MIDNIGHT }}
        ></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-block mb-4">
            <div className="flex items-center gap-3">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center"
                style={{
                  background: `linear-gradient(135deg, ${COLORS.METALLIC_GOLD} 0%, ${COLORS.ANTIQUE_BRONZE} 100%)`
                }}
              >
                <MessageSquare className="w-5 h-5" style={{ color: COLORS.CLEAN_WHITE }} />
              </div>
              <div
                className="h-px w-24"
                style={{
                  background: `linear-gradient(90deg, ${COLORS.METALLIC_GOLD} 0%, transparent 100%)`
                }}
              ></div>
            </div>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span
              style={{
                background: `linear-gradient(135deg, ${COLORS.NAVY_MIDNIGHT} 0%, ${COLORS.MUTED_TEAL} 100%)`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              Connect Directly
            </span>
          </h2>

          <p
            className="text-base max-w-2xl mx-auto leading-relaxed"
            style={{ color: COLORS.DEEP_MIDNIGHT }}
          >
            We're here to help. Reach out through any of our channels and experience seamless communication.
          </p>
        </div>

        {/* Interactive Contact Section - New Horizontal Layout */}
        <div className="mb-12">
          {/* Tab Navigation */}
          <div className="flex flex-col md:flex-row gap-3 mb-8">
            {contactInfo.map((item, index) => {
              const Icon = item.icon;
              const isActive = activeContact === index;

              return (
                <button
                  key={index}
                  onClick={() => setActiveContact(index)}
                  className="flex-1 relative group text-left transition-all duration-500"
                >
                  {/* Background Shape */}
                  <div
                    className={`
                      absolute inset-0 transition-all duration-500 
                      ${isActive ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}
                    `}
                    style={{
                      background: `linear-gradient(135deg, ${item.color}15 0%, ${item.color}08 100%)`,
                      borderRadius: '24px'
                    }}
                  ></div>

                  {/* Border */}
                  <div
                    className={`
                      absolute inset-0 transition-all duration-500 rounded-3xl
                      ${isActive ? 'opacity-100' : 'opacity-30'}
                    `}
                    style={{
                      border: `2px solid ${item.color}`,
                    }}
                  ></div>

                  {/* Content */}
                  <div className="relative p-4 flex items-center gap-3">
                    {/* Icon Circle */}
                    <div
                      className={`
                        w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-500
                        ${isActive ? 'scale-110' : 'scale-100'}
                      `}
                      style={{
                        background: isActive
                          ? `linear-gradient(135deg, ${item.color} 0%, ${COLORS.DEEP_MIDNIGHT} 100%)`
                          : `${item.color}20`,
                      }}
                    >
                      <Icon
                        className="w-5 h-5"
                        style={{ color: isActive ? COLORS.CLEAN_WHITE : item.color }}
                      />
                    </div>

                    {/* Text */}
                    <div className="flex-1">
                      <h3
                        className={`
                          font-bold transition-all duration-300
                          ${isActive ? 'text-base' : 'text-sm'}
                        `}
                        style={{ color: COLORS.NAVY_MIDNIGHT }}
                      >
                        {item.title}
                      </h3>
                    </div>

                    {/* Active Indicator */}
                    <div
                      className={`
                        w-2 h-2 rounded-full transition-all duration-500
                        ${isActive ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}
                      `}
                      style={{ backgroundColor: item.color }}
                    ></div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Content Display Area - Large Unified Card */}
          <div className="relative">
            {/* Gradient Border Frame */}
            <div
              className="rounded-3xl p-[3px]"
              style={{
                background: `linear-gradient(135deg, ${contactInfo[activeContact].color} 0%, ${COLORS.METALLIC_GOLD} 100%)`
              }}
            >
              <div
                className="rounded-3xl p-8 md:p-10 relative overflow-hidden transition-all duration-500"
                style={{
                  backgroundColor: COLORS.CLEAN_WHITE,
                  boxShadow: `0 30px 80px ${contactInfo[activeContact].color}20`
                }}
              >
                {/* Decorative Background */}
                <div
                  className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-5 transition-all duration-1000"
                  style={{
                    background: `radial-gradient(circle at top right, ${contactInfo[activeContact].color} 0%, transparent 70%)`
                  }}
                ></div>
                <div
                  className="absolute bottom-0 left-0 w-56 h-56 opacity-5 transition-all duration-1000"
                  style={{
                    background: `radial-gradient(circle at bottom left, ${COLORS.METALLIC_GOLD} 0%, transparent 70%)`,
                    transform: 'rotate(180deg)'
                  }}
                ></div>

                {/* Content */}
                <div className="relative z-10">
                  <div className="flex items-start gap-4 mb-6">
                    <div
                      className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{
                        background: `linear-gradient(135deg, ${contactInfo[activeContact].color} 0%, ${COLORS.DEEP_MIDNIGHT} 100%)`
                      }}
                    >
                      {React.createElement(contactInfo[activeContact].icon, {
                        className: "w-7 h-7",
                        style: { color: COLORS.CLEAN_WHITE }
                      })}
                    </div>
                    <div className="flex-1">
                      <h3
                        className="text-xl md:text-2xl font-bold mb-2"
                        style={{ color: COLORS.NAVY_MIDNIGHT }}
                      >
                        {contactInfo[activeContact].title}
                      </h3>
                      <p
                        className="text-sm"
                        style={{ color: COLORS.COOL_GRAY }}
                      >
                        {contactInfo[activeContact].description}
                      </p>
                    </div>
                  </div>

                  {/* Contact Information Display */}
                  <div
                    className="p-5 rounded-xl"
                    style={{
                      backgroundColor: `${contactInfo[activeContact].color}10`,
                      border: `2px solid ${contactInfo[activeContact].color}30`
                    }}
                  >
                    <p
                      className="text-lg md:text-xl font-bold break-words"
                      style={{
                        color: contactInfo[activeContact].color,
                        lineHeight: '1.6'
                      }}
                    >
                      {contactInfo[activeContact].content}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action Banner - Asymmetric Design */}
        <div className="relative">
          <div className="grid md:grid-cols-5 gap-6">
            {/* Left Content Area */}
            <div className="md:col-span-3">
              <div
                className="rounded-3xl p-[3px] h-full"
                style={{
                  background: `linear-gradient(135deg, ${COLORS.METALLIC_GOLD} 0%, ${COLORS.MUTED_TEAL} 100%)`
                }}
              >
                <div
                  className="rounded-3xl p-6 md:p-8 h-full flex flex-col justify-center relative overflow-hidden"
                  style={{ backgroundColor: COLORS.CLEAN_WHITE }}
                >
                  {/* Background Decoration */}
                  <div
                    className="absolute inset-0 opacity-5"
                    style={{
                      backgroundImage: `repeating-linear-gradient(45deg, ${COLORS.METALLIC_GOLD} 0, ${COLORS.METALLIC_GOLD} 2px, transparent 2px, transparent 20px)`
                    }}
                  ></div>

                  <div className="relative z-10">
                    <div className="flex items-center gap-2 mb-3">
                      <Clock
                        className="w-6 h-6"
                        style={{ color: COLORS.METALLIC_GOLD }}
                      />
                      <h3
                        className="text-xl md:text-2xl font-bold"
                        style={{ color: COLORS.NAVY_MIDNIGHT }}
                      >
                        Ready to Connect?
                      </h3>
                    </div>
                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: COLORS.COOL_GRAY }}
                    >
                      Our team is available to assist you with any inquiries or support you need.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Button Area */}
            <div className="md:col-span-2 flex items-stretch">
              <button
                className="group relative w-full rounded-3xl font-bold text-base transform transition-all duration-300 hover:scale-105 flex flex-col items-center justify-center gap-3 overflow-hidden p-6"
                style={{
                  background: `linear-gradient(135deg, ${COLORS.METALLIC_GOLD} 0%, ${COLORS.ANTIQUE_BRONZE} 100%)`,
                  color: COLORS.CLEAN_WHITE,
                  boxShadow: `0 20px 60px ${COLORS.METALLIC_GOLD}40`
                }}
              >
                {/* Animated Background */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `linear-gradient(135deg, ${COLORS.SOFT_BRONZE} 0%, ${COLORS.METALLIC_GOLD} 100%)`
                  }}
                ></div>

                {/* Icon Circle */}
                <a
                  href="https://wa.me/919913264409?text=Hello%2C%20I%20want%20to%20know%20more"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative inline-flex items-center gap-2 group"
                >
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center relative z-10 transition-transform duration-300 group-hover:scale-110"
                    style={{
                      backgroundColor: `${COLORS.CLEAN_WHITE}30`,
                    }}
                  >
                    <Send className="w-6 h-6" />
                  </div>

                  <span className="relative z-10">Send Message</span>

                  {/* Shine Effect */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-all duration-700 group-hover:translate-x-full"
                    style={{
                      background: `linear-gradient(90deg, transparent 0%, ${COLORS.CLEAN_WHITE} 50%, transparent 100%)`,
                    }}
                  ></div>
                </a>

              </button>
            </div>
          </div>
        </div>

        {/* Bottom Decorative Navigation Dots */}
        <div className="flex items-center justify-center mt-16 gap-3">
          {[COLORS.METALLIC_GOLD, COLORS.MUTED_TEAL, COLORS.NAVY_MIDNIGHT].map((color, index) => (
            <div key={index} className="flex items-center gap-1">
              <div
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: color }}
              ></div>
              {index < 2 && (
                <div
                  className="h-px w-8"
                  style={{ backgroundColor: `${color}30` }}
                ></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}