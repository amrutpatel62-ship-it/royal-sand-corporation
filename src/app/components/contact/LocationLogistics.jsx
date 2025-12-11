import React, { useState } from 'react';
import { FaMapMarkerAlt, FaShippingFast, FaRoute, FaIndustry } from 'react-icons/fa';

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

// Address used for the map visualization
const mapAddress = '16, Ganesh Vivan, C link road, Radhanpur road, Panchot, Mahesana, Gujarat - 384002';

const LocationLogisticsSection = () => {
  const [activeFeature, setActiveFeature] = useState(0);

  // Encode address for Google Maps embed
  const encodedAddress = encodeURIComponent(mapAddress);
  const mapEmbedUrl = `https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=${encodedAddress}&zoom=15`;

  const features = [
    {
      icon: FaShippingFast,
      title: "Logistical Advantage",
      description: "We are strategically positioned on the Radhanpur road corridor for unparalleled logistical efficiency and rapid, cost-effective distribution across Gujarat and the wider region.",
      color: COLORS.MUTED_TEAL
    },
    {
      icon: FaRoute,
      title: "Regional Hub",
      description: "Central access to major Gujarat markets and transportation networks, ensuring seamless connectivity for all our distribution needs.",
      color: COLORS.METALLIC_GOLD
    },
    {
      icon: FaIndustry,
      title: "Modern Facility",
      description: "State-of-the-art plant with optimized supply chain capabilities, equipped to handle large-scale infrastructure projects efficiently.",
      color: COLORS.NAVY_MIDNIGHT
    }
  ];

  return (
    <section 
      className="py-16 sm:py-20 relative overflow-hidden"
      style={{
        background: `linear-gradient(135deg, ${COLORS.CREAMY_SAND} 0%, ${COLORS.LIGHT_STONE} 50%, ${COLORS.PALE_BLUE_GRAY} 100%)`
      }}
    >
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
        <div
          className="absolute top-20 right-20 w-96 h-96 rounded-full"
          style={{
            background: `radial-gradient(circle, ${COLORS.METALLIC_GOLD} 0%, transparent 70%)`
          }}
        ></div>
        <div
          className="absolute bottom-20 left-20 w-80 h-80"
          style={{
            background: `linear-gradient(135deg, ${COLORS.MUTED_TEAL}40 0%, transparent 70%)`,
            clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)'
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <header className="text-center mb-12">
          <div className="inline-flex items-center gap-3 mb-6">
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center"
              style={{ 
                background: `linear-gradient(135deg, ${COLORS.METALLIC_GOLD} 0%, ${COLORS.ANTIQUE_BRONZE} 100%)` 
              }}
            >
              <FaMapMarkerAlt className="w-5 h-5" style={{ color: COLORS.CLEAN_WHITE }} />
            </div>
            <div className="h-px w-32" style={{ backgroundColor: `${COLORS.METALLIC_GOLD}40` }}></div>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4">
            <span style={{ color: COLORS.METALLIC_GOLD }}>Strategically Located:</span>{' '}
            <span style={{ color: COLORS.NAVY_MIDNIGHT }}>Our Mahesana Plant</span>
          </h2>

          <p 
            className="text-lg mt-3 max-w-2xl mx-auto"
            style={{ color: COLORS.DEEP_MIDNIGHT }}
          >
            Validating your physical presence and logistical strength.
          </p>
        </header>

        {/* Main Content - Full Width Map with Overlay Info */}
        <div className="relative">
          {/* Map Container with Gradient Border */}
          <div
            className="rounded-3xl p-[3px] overflow-hidden"
            style={{
              background: `linear-gradient(135deg, ${COLORS.METALLIC_GOLD} 0%, ${COLORS.MUTED_TEAL} 50%, ${COLORS.NAVY_MIDNIGHT} 100%)`
            }}
          >
            <div className="relative rounded-3xl overflow-hidden" style={{ backgroundColor: COLORS.CLEAN_WHITE }}>
              {/* Google Map */}
              <div className="relative w-full h-[500px] sm:h-[600px]">
                <iframe
                  src={mapEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Mahesana Plant Location"
                ></iframe>

                {/* Overlay Info Panel - Top Right */}
                <div 
                  className="absolute top-6 right-6 max-w-sm"
                  style={{
                    background: `linear-gradient(135deg, ${COLORS.CLEAN_WHITE}F5 0%, ${COLORS.LIGHT_STONE}F5 100%)`,
                    backdropFilter: 'blur(10px)',
                    borderRadius: '24px',
                    boxShadow: `0 20px 60px ${COLORS.NAVY_MIDNIGHT}30`,
                    border: `2px solid ${COLORS.METALLIC_GOLD}60`
                  }}
                >
                  <div className="p-6">
                    {/* Address */}
                    <div className="flex items-start gap-3 pb-5 border-b-2" style={{ borderColor: `${COLORS.METALLIC_GOLD}30` }}>
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                        style={{
                          background: `linear-gradient(135deg, ${COLORS.METALLIC_GOLD} 0%, ${COLORS.ANTIQUE_BRONZE} 100%)`
                        }}
                      >
                        <FaMapMarkerAlt className="w-5 h-5" style={{ color: COLORS.CLEAN_WHITE }} />
                      </div>
                      <div>
                        <p className="text-xs font-bold uppercase tracking-wider mb-1" style={{ color: COLORS.COOL_GRAY }}>
                          Our Location
                        </p>
                        <p className="text-sm font-semibold leading-relaxed" style={{ color: COLORS.NAVY_MIDNIGHT }}>
                          {mapAddress}
                        </p>
                      </div>
                    </div>

                    {/* Feature Tabs */}
                    <div className="mt-5">
                      <div className="flex gap-2 mb-4">
                        {features.map((feature, index) => (
                          <button
                            key={index}
                            onClick={() => setActiveFeature(index)}
                            className="flex-1 p-2 rounded-lg transition-all duration-300"
                            style={{
                              backgroundColor: activeFeature === index ? feature.color : `${feature.color}20`,
                              border: `2px solid ${activeFeature === index ? feature.color : 'transparent'}`
                            }}
                          >
                            {React.createElement(feature.icon, {
                              className: "w-5 h-5 mx-auto",
                              style: { color: activeFeature === index ? COLORS.CLEAN_WHITE : feature.color }
                            })}
                          </button>
                        ))}
                      </div>

                      {/* Active Feature Content */}
                      <div>
                        <h3 className="text-lg font-bold mb-2" style={{ color: COLORS.NAVY_MIDNIGHT }}>
                          {features[activeFeature].title}
                        </h3>
                        <p className="text-sm leading-relaxed" style={{ color: COLORS.COOL_GRAY }}>
                          {features[activeFeature].description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom Info Bar */}
                <div 
                  className="absolute bottom-0 left-0 right-0 p-6"
                  style={{
                    background: `linear-gradient(180deg, transparent 0%, ${COLORS.NAVY_MIDNIGHT}E6 50%, ${COLORS.NAVY_MIDNIGHT}F5 100%)`
                  }}
                >
                  <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="text-center sm:text-left">
                      <p className="text-sm font-semibold uppercase tracking-wider mb-1" style={{ color: COLORS.SOFT_BRONZE }}>
                        Ready to Connect?
                      </p>
                      <p className="text-base font-bold" style={{ color: COLORS.CLEAN_WHITE }}>
                        Visit our facility or reach out for more information
                      </p>
                    </div>
                    <button
                      className="px-6 py-3 rounded-xl font-bold text-sm transition-all duration-300 hover:scale-105 flex items-center gap-2 whitespace-nowrap"
                      style={{
                        background: `linear-gradient(135deg, ${COLORS.METALLIC_GOLD} 0%, ${COLORS.ANTIQUE_BRONZE} 100%)`,
                        color: COLORS.CLEAN_WHITE,
                        boxShadow: `0 10px 30px ${COLORS.METALLIC_GOLD}40`
                      }}
                    >
                      <FaMapMarkerAlt className="w-4 h-4" />
                      Get Directions
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Stats Bar */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="rounded-2xl p-6 transition-all duration-300 hover:scale-105 cursor-pointer"
                onClick={() => setActiveFeature(index)}
                style={{
                  backgroundColor: COLORS.CLEAN_WHITE,
                  border: `2px solid ${activeFeature === index ? feature.color : COLORS.PALE_BLUE_GRAY}`,
                  boxShadow: activeFeature === index 
                    ? `0 10px 30px ${feature.color}30` 
                    : `0 5px 15px ${COLORS.NAVY_MIDNIGHT}10`
                }}
              >
                <div className="flex items-center gap-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{
                      background: activeFeature === index 
                        ? `linear-gradient(135deg, ${feature.color} 0%, ${COLORS.DEEP_MIDNIGHT} 100%)`
                        : `${feature.color}20`
                    }}
                  >
                    <Icon 
                      className="w-6 h-6" 
                      style={{ color: activeFeature === index ? COLORS.CLEAN_WHITE : feature.color }}
                    />
                  </div>
                  <div>
                    <h4 className="text-base font-bold" style={{ color: COLORS.NAVY_MIDNIGHT }}>
                      {feature.title}
                    </h4>
                    <div
                      className={`h-1 w-12 rounded-full mt-2 transition-all duration-300 ${activeFeature === index ? 'w-16' : 'w-8'}`}
                      style={{ backgroundColor: feature.color }}
                    ></div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Decorative Element */}
        <div className="flex items-center justify-center mt-12">
          {[COLORS.METALLIC_GOLD, COLORS.MUTED_TEAL, COLORS.NAVY_MIDNIGHT].map((color, index) => (
            <div key={index} className="flex items-center">
              <div className="w-2 h-2 rounded-full mx-2" style={{ backgroundColor: color }}></div>
              {index < 2 && <div className="h-px w-8" style={{ backgroundColor: `${color}30` }}></div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LocationLogisticsSection;