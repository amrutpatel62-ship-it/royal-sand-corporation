import React, { useState, useEffect } from 'react';
import { Target, Eye } from 'lucide-react';

export default function MissionVisionSection() {
  const [activeCard, setActiveCard] = useState(null);
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const newParticles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 3 + Math.random() * 2,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="relative py-12 sm:py-16 overflow-hidden" style={{ backgroundColor: '#F7F7F7' }}>
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute w-1 h-1 rounded-full opacity-20"
          style={{
            left: `${particle.left}%`,
            backgroundColor: '#C49A6E',
            animation: `rise ${particle.duration}s linear infinite`,
            animationDelay: `${particle.delay}s`,
          }}
        ></div>
      ))}

      <div className="absolute inset-0 opacity-30">
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(45deg, #F5EFE4 0%, #DBE1E8 50%, #F5EFE4 100%)',
            backgroundSize: '400% 400%',
            animation: 'gradientShift 15s ease infinite',
          }}
        ></div>
      </div>

      <style>{`
        @keyframes rise {
          0% {
            bottom: -10%;
            opacity: 0;
          }
          10% {
            opacity: 0.3;
          }
          90% {
            opacity: 0.3;
          }
          100% {
            bottom: 110%;
            opacity: 0;
          }
        }
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.05); opacity: 0.8; }
        }
        @keyframes slideIn {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-slide-in {
          animation: slideIn 0.6s ease-out forwards;
        }
      `}</style>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center mb-3">
            <div className="h-px w-8" style={{ backgroundColor: '#C49A6E' }}></div>
            <span className="mx-3 text-xs font-semibold tracking-widest uppercase" style={{ color: '#9C7C58' }}>
              Our Purpose
            </span>
            <div className="h-px w-8" style={{ backgroundColor: '#C49A6E' }}></div>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold" style={{ color: '#15324A' }}>
            Mission & Vision
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {/* Mission Card */}
          <div
            className="relative group cursor-pointer"
            onMouseEnter={() => setActiveCard('mission')}
            onMouseLeave={() => setActiveCard(null)}
          >
            <div
              className="relative overflow-hidden rounded-xl p-6 sm:p-8 h-full transition-all duration-500"
              style={{
                backgroundColor: '#FFFFFF',
                boxShadow: activeCard === 'mission' ? '0 20px 60px rgba(196, 154, 110, 0.3)' : '0 4px 20px rgba(0,0,0,0.08)',
                transform: activeCard === 'mission' ? 'translateY(-8px)' : 'translateY(0)',
              }}
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: 'linear-gradient(90deg, transparent, rgba(196, 154, 110, 0.2), transparent)',
                  animation: activeCard === 'mission' ? 'shimmer 2s infinite' : 'none',
                }}
              ></div>

              <div className="relative mb-4">
                <div
                  className="inline-flex items-center justify-center w-12 h-12 rounded-lg transition-all duration-500"
                  style={{
                    backgroundColor: activeCard === 'mission' ? '#C49A6E' : '#F5EFE4',
                    transform: activeCard === 'mission' ? 'rotate(360deg) scale(1.1)' : 'rotate(0deg) scale(1)',
                  }}
                >
                  <Target
                    className="w-6 h-6 transition-colors duration-500"
                    style={{ color: activeCard === 'mission' ? '#FFFFFF' : '#9C7C58' }}
                  />
                </div>
                {activeCard === 'mission' && (
                  <div
                    className="absolute inset-0 rounded-lg"
                    style={{
                      border: '2px solid #C49A6E',
                      animation: 'pulse 2s infinite',
                    }}
                  ></div>
                )}
              </div>

              <h3 className="text-xl sm:text-2xl font-bold mb-3" style={{ color: '#15324A' }}>
                Our Mission
              </h3>

              <div
                className="h-0.5 mb-4 rounded-full transition-all duration-500"
                style={{
                  width: activeCard === 'mission' ? '60px' : '40px',
                  backgroundColor: '#C49A6E'
                }}
              ></div>

              <p className="text-sm sm:text-base leading-relaxed" style={{ color: '#15324A' }}>
                To deliver <span className="font-semibold" style={{ color: '#755E44' }}>high-quality, responsibly processed river sand</span> that fuels superior construction and adheres to the highest <span className="font-semibold" style={{ color: '#755E44' }}>ethical and environmental standards</span>.
              </p>

              {/* Corner decoration */}
              <div
                className="absolute bottom-0 right-0 w-20 h-20 opacity-10 transition-all duration-500"
                style={{
                  background: 'linear-gradient(135deg, transparent 50%, #C49A6E 50%)',
                  transform: activeCard === 'mission' ? 'scale(1.2)' : 'scale(1)',
                }}
              ></div>
            </div>
          </div>

          {/* Vision Card */}
          <div
            className="relative group cursor-pointer"
            onMouseEnter={() => setActiveCard('vision')}
            onMouseLeave={() => setActiveCard(null)}
          >
            <div
              className="relative overflow-hidden rounded-xl p-6 sm:p-8 h-full transition-all duration-500"
              style={{
                backgroundColor: '#FFFFFF',
                boxShadow: activeCard === 'vision' ? '0 20px 60px rgba(74, 136, 154, 0.3)' : '0 4px 20px rgba(0,0,0,0.08)',
                transform: activeCard === 'vision' ? 'translateY(-8px)' : 'translateY(0)',
              }}
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: 'linear-gradient(90deg, transparent, rgba(74, 136, 154, 0.2), transparent)',
                  animation: activeCard === 'vision' ? 'shimmer 2s infinite' : 'none',
                }}
              ></div>

              <div className="relative mb-4">
                <div
                  className="inline-flex items-center justify-center w-12 h-12 rounded-lg transition-all duration-500"
                  style={{
                    backgroundColor: activeCard === 'vision' ? '#4A889A' : '#DBE1E8',
                    transform: activeCard === 'vision' ? 'rotate(360deg) scale(1.1)' : 'rotate(0deg) scale(1)',
                  }}
                >
                  <Eye
                    className="w-6 h-6 transition-colors duration-500"
                    style={{ color: activeCard === 'vision' ? '#FFFFFF' : '#15324A' }}
                  />
                </div>
                {activeCard === 'vision' && (
                  <div
                    className="absolute inset-0 rounded-lg"
                    style={{
                      border: '2px solid #4A889A',
                      animation: 'pulse 2s infinite',
                    }}
                  ></div>
                )}
              </div>

              <h3 className="text-xl sm:text-2xl font-bold mb-3" style={{ color: '#15324A' }}>
                Our Vision
              </h3>

              <div
                className="h-0.5 mb-4 rounded-full transition-all duration-500"
                style={{
                  width: activeCard === 'vision' ? '60px' : '40px',
                  backgroundColor: '#4A889A'
                }}
              ></div>

              <p className="text-sm sm:text-base leading-relaxed" style={{ color: '#15324A' }}>
                To be <span className="font-semibold" style={{ color: '#0E2333' }}>India's most trusted, consistent, and scalable supplier</span> of essential construction materials.
              </p>

              {/* Corner decoration */}
              <div
                className="absolute bottom-0 right-0 w-20 h-20 opacity-10 transition-all duration-500"
                style={{
                  background: 'linear-gradient(135deg, transparent 50%, #4A889A 50%)',
                  transform: activeCard === 'vision' ? 'scale(1.2)' : 'scale(1)',
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}