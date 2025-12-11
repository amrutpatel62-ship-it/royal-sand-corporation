import React, { useState, useEffect } from 'react';
import { AlertCircle, ArrowRight, CheckCircle, Droplets, Filter, Layers } from 'lucide-react';

export default function ChallengeSolutionSection() {
  const [sectionInView, setSectionInView] = useState(false);
  const [processInView, setProcessInView] = useState(false);
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    // Trigger animations on mount
    const sectionTimer = setTimeout(() => setSectionInView(true), 100);
    const processTimer = setTimeout(() => setProcessInView(true), 500);

    return () => {
      clearTimeout(sectionTimer);
      clearTimeout(processTimer);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 3);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const processSteps = [
    { icon: Droplets, title: 'Washing', color: '#4A889A' },
    { icon: Filter, title: 'Screening', color: '#C49A6E' },
    { icon: Layers, title: 'Grading', color: '#9C7C58' }
  ];

  return (
    <div
      className="relative py-12 sm:py-16 overflow-hidden"
      style={{ backgroundColor: '#F7F7F7' }}
    >
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="wave" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <path
                d="M0 50 Q 25 30, 50 50 T 100 50"
                fill="none"
                stroke="#C49A6E"
                strokeWidth="1"
              >
                <animate
                  attributeName="d"
                  values="M0 50 Q 25 30, 50 50 T 100 50;M0 50 Q 25 70, 50 50 T 100 50;M0 50 Q 25 30, 50 50 T 100 50"
                  dur="4s"
                  repeatCount="indefinite"
                />
              </path>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#wave)" />
        </svg>
      </div>

      <style>{`
        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-50px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(50px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.1); opacity: 0.8; }
        }
        @keyframes slideInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center mb-3">
            <div className="h-px w-8" style={{ backgroundColor: '#C49A6E' }}></div>
            <span className="mx-3 text-xs font-semibold tracking-widest uppercase" style={{ color: '#9C7C58' }}>
              Our Approach
            </span>
            <div className="h-px w-8" style={{ backgroundColor: '#C49A6E' }}></div>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold mb-2" style={{ color: '#15324A' }}>
            From Problem to
          </h2>

          <h2
            className="text-3xl sm:text-4xl font-bold"
            style={{
              background: 'linear-gradient(135deg, #C49A6E 0%, #9C7C58 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            Processed Perfection
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 mb-10 relative">
          <div
            className="relative group"
            style={{
              animation: sectionInView ? 'slideInLeft 0.8s ease-out' : 'none'
            }}
          >
            <div
              className="relative overflow-hidden rounded-xl p-6 h-full transition-all duration-500"
              style={{
                backgroundColor: '#FFFFFF',
                boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
              }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: '#FFE5E5' }}
                >
                  <AlertCircle className="w-5 h-5" style={{ color: '#DC2626' }} />
                </div>
                <h3 className="text-xl font-bold" style={{ color: '#15324A' }}>
                  The Challenge
                </h3>
              </div>

              <div className="space-y-3">
                {[
                  'Inconsistent sand quality (high silt/clay)',
                  'Unregulated mining practices',
                  'Poor logistics leading to project delays'
                ].map((challenge, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <div
                      className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                      style={{ backgroundColor: '#DC2626' }}
                    />
                    <p className="text-sm" style={{ color: '#15324A' }}>
                      {challenge}
                    </p>
                  </div>
                ))}
              </div>

              <div
                className="absolute bottom-0 right-0 w-16 h-16 opacity-5"
                style={{ background: 'linear-gradient(135deg, transparent 50%, #DC2626 50%)' }}
              />
            </div>
          </div>

          <div className="hidden lg:flex absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
            <ArrowRight
              className="w-8 h-8"
              style={{
                color: '#C49A6E',
                animation: 'pulse 2s infinite'
              }}
            />
          </div>

          <div
            className="relative group"
            style={{
              animation: sectionInView ? 'slideInRight 0.8s ease-out' : 'none'
            }}
          >
            <div
              className="relative overflow-hidden rounded-xl p-6 h-full transition-all duration-500"
              style={{
                backgroundColor: '#FFFFFF',
                boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
              }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: '#E8F5E9' }}
                >
                  <CheckCircle className="w-5 h-5" style={{ color: '#16A34A' }} />
                </div>
                <h3 className="text-xl font-bold" style={{ color: '#15324A' }}>
                  Our Solution
                </h3>
              </div>

              <p className="text-sm leading-relaxed mb-4" style={{ color: '#15324A' }}>
                Sand is <span className="font-semibold" style={{ color: '#755E44' }}>sourced responsibly</span>, then passes through advanced machinery to remove impurities and achieve accurate grain size distribution.
              </p>

              <div
                className="absolute bottom-0 right-0 w-16 h-16 opacity-5"
                style={{ background: 'linear-gradient(135deg, transparent 50%, #16A34A 50%)' }}
              />
            </div>
          </div>
        </div>

        <div className="relative">
          <h3 className="text-xl font-bold text-center mb-6" style={{ color: '#15324A' }}>
            Our 3-Step Process
          </h3>

          <div className="grid sm:grid-cols-3 gap-4">
            {processSteps.map((step, idx) => {
              const Icon = step.icon;
              const isActive = activeStep === idx;

              return (
                <div
                  key={idx}
                  className="relative"
                  style={{
                    animation: processInView ? `slideInUp 0.6s ease-out ${idx * 0.2}s forwards` : 'none',
                    opacity: processInView ? 1 : 0
                  }}
                >
                  {idx < processSteps.length - 1 && (
                    <div className="hidden sm:block absolute top-12 left-1/2 w-full h-0.5 z-0" style={{ backgroundColor: '#DBE1E8' }}>
                      <div
                        className="h-full transition-all duration-500"
                        style={{
                          width: activeStep > idx ? '100%' : '0%',
                          backgroundColor: step.color
                        }}
                      />
                    </div>
                  )}

                  <div
                    className="relative z-10 text-center transition-all duration-500"
                    style={{
                      transform: isActive ? 'scale(1.05)' : 'scale(1)'
                    }}
                  >
                    <div
                      className="w-20 h-20 mx-auto mb-3 rounded-full flex items-center justify-center transition-all duration-500"
                      style={{
                        backgroundColor: isActive ? step.color : '#F5EFE4',
                        boxShadow: isActive ? `0 8px 24px ${step.color}40` : 'none',
                        transform: isActive ? 'rotate(360deg)' : 'rotate(0deg)'
                      }}
                    >
                      <Icon
                        className="w-8 h-8 transition-colors duration-500"
                        style={{ color: isActive ? '#FFFFFF' : step.color }}
                      />

                      {isActive && (
                        <div
                          className="absolute inset-0 rounded-full"
                          style={{
                            border: `2px solid ${step.color}`,
                            animation: 'pulse 2s infinite'
                          }}
                        />
                      )}
                    </div>

                    <div
                      className="inline-block px-3 py-1 rounded-full text-xs font-bold mb-2"
                      style={{
                        backgroundColor: isActive ? step.color : '#F5EFE4',
                        color: isActive ? '#FFFFFF' : step.color
                      }}
                    >
                      Step {idx + 1}
                    </div>

                    <h4
                      className="text-base font-bold transition-colors duration-500"
                      style={{ color: isActive ? step.color : '#15324A' }}
                    >
                      {step.title}
                    </h4>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="flex justify-center gap-2 mt-6">
            {processSteps.map((_, idx) => (
              <div
                key={idx}
                className="w-2 h-2 rounded-full transition-all duration-500"
                style={{
                  backgroundColor: activeStep === idx ? '#C49A6E' : '#DBE1E8',
                  transform: activeStep === idx ? 'scale(1.5)' : 'scale(1)'
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}