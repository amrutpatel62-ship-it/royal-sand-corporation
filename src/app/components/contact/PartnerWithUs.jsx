import React, { useState, useEffect, useRef } from 'react';
import { FaHandshake, FaAward, FaLightbulb, FaRocket } from 'react-icons/fa';
import { MdSecurity, MdTrendingUp, MdOutlineCheckCircle } from 'react-icons/md';

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
  ANTIQUE_BRONZE: '#9C7C58',
};

const useOnScreen = (options = { threshold: 0.1 }) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(ref.current);
      }
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    // Cleanup function
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [options]);

  return [ref, isVisible];
};

// ---------------------------------------

const PartnerWithUsSection = () => {
  const [hoveredValue, setHoveredValue] = useState(null);
  const [selectedValue, setSelectedValue] = useState(0); // Default to the first option selected

  // Animation References
  const [headerRef, headerVisible] = useOnScreen({ threshold: 0.1 });
  const [leftColRef, leftColVisible] = useOnScreen({ threshold: 0.1 });
  const [rightColRef, rightColVisible] = useOnScreen({ threshold: 0.1 });

  const partnershipValues = [
    {
      icon: FaHandshake,
      title: "Trust & Reliability",
      description: "Built on decades of consistent delivery and unwavering commitment to excellence in every project we undertake.",
      metric: "30+ Years",
      metricLabel: "Industry Experience",
      accentColor: COLORS.MUTED_TEAL,
    },
    {
      icon: FaAward,
      title: "Quality Standards",
      description: "Industry-leading quality benchmarks ensure every material meets the highest specifications and performance criteria.",
      metric: "100%",
      metricLabel: "Quality Assurance",
      accentColor: COLORS.METALLIC_GOLD,
    },
    {
      icon: FaLightbulb,
      title: "Innovation Focus",
      description: "Continuously evolving our processes and solutions to meet the dynamic needs of modern infrastructure projects.",
      metric: "24/7",
      metricLabel: "Support Available",
      accentColor: COLORS.ANTIQUE_BRONZE,
    },
    {
      icon: MdSecurity,
      title: "Safety First",
      description: "Comprehensive safety protocols and risk management systems protect every stakeholder in our supply chain.",
      metric: "Zero",
      metricLabel: "Compromise Policy",
      accentColor: COLORS.NAVY_MIDNIGHT,
    }
  ];

  const engagementOptions = [
    {
      icon: FaRocket,
      title: "Project Collaboration",
      description: "Partner with us on large-scale infrastructure projects that shape communities and drive progress.",
      features: ["Custom Solutions", "Flexible Terms", "Expert Consultation"],
      color: COLORS.NAVY_MIDNIGHT,
      secondaryColor: COLORS.METALLIC_GOLD,
    },
    {
      icon: MdTrendingUp,
      title: "Growth Partnership",
      description: "Join our network of suppliers, contractors, and stakeholders committed to excellence and mutual growth.",
      features: ["Strategic Alliance", "Shared Success", "Long-term Value"],
      color: COLORS.METALLIC_GOLD,
      secondaryColor: COLORS.NAVY_MIDNIGHT,
    }
  ];

  // Tailwind classes for the slide-in/fade-up effect
  const fadeIn = (isVisible, delay = 0) =>
    `${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'} transition-all duration-700 ease-out delay-${delay}`;


  return (
    <section
      className="relative py-16 sm:py-24"
      style={{ backgroundColor: COLORS.LIGHT_STONE }}
    >

      {/* 1. Full-Width Header Section (Animated) */}
      <div
        ref={headerRef} // <-- Added ref
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pb-12 ${fadeIn(headerVisible)}`} // <-- Added animation classes
      >
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4" style={{ color: COLORS.NAVY_MIDNIGHT }}>
          Partner With Us:
          <span style={{ color: COLORS.METALLIC_GOLD }}> Building Together</span>
        </h2>
        <p className="text-lg max-w-3xl mx-auto leading-relaxed" style={{ color: COLORS.DARK_CHARCOAL }}>
          Our partnerships are built on a foundation of proven **Value** and a shared commitment to **Growth**. Explore the core principles that guide every collaboration.
        </p>
      </div>

      {/* 2. The Grid Container (Animated) */}
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 min-h-[600px] shadow-2xl rounded-2xl overflow-hidden">

        <div
          ref={leftColRef}
          className={`p-8 sm:p-12 lg:p-16 flex flex-col justify-center relative ${fadeIn(leftColVisible, 200)}`} // <-- Added animation classes
          style={{ backgroundColor: COLORS.NAVY_MIDNIGHT }}
        >
          <div className="space-y-6">
            {partnershipValues.map((value, index) => {
              const Icon = value.icon;
              const isHovered = hoveredValue === index;

              return (
                <div
                  key={index}
                  onMouseEnter={() => setHoveredValue(index)}
                  onMouseLeave={() => setHoveredValue(null)}
                  className="flex items-start gap-4 group cursor-default"
                >
                  {/* Icon Column remains the same */}
                  <div className="flex flex-col items-center pt-1">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 transform group-hover:scale-110"
                      style={{
                        backgroundColor: isHovered ? value.accentColor : COLORS.METALLIC_GOLD,
                        border: `2px solid ${isHovered ? COLORS.CLEAN_WHITE : COLORS.NAVY_MIDNIGHT}`
                      }}
                    >
                      <Icon className="w-5 h-5" style={{ color: COLORS.CLEAN_WHITE }} />
                    </div>
                    {/* Vertical Line */}
                    {index < partnershipValues.length - 1 && (
                      <div
                        className="w-0.5 h-full"
                        style={{ backgroundColor: COLORS.DEEP_MIDNIGHT }}
                      ></div>
                    )}
                  </div>

                  {/* Content remains the same */}
                  <div className={`flex-1 ${index < partnershipValues.length - 1 ? 'pb-8' : 'pb-0'}`}>
                    <h3
                      className="text-xl font-bold mb-1 transition-colors duration-300"
                      style={{ color: isHovered ? COLORS.METALLIC_GOLD : COLORS.CLEAN_WHITE }}
                    >
                      {value.title}
                    </h3>
                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: COLORS.COOL_GRAY }}
                    >
                      {value.description}
                    </p>
                    <div className="flex items-baseline mt-2">
                      <span
                        className="text-xl font-extrabold mr-2"
                        style={{ color: COLORS.METALLIC_GOLD }}
                      >
                        {value.metric}
                      </span>
                      <span className="text-xs uppercase font-semibold" style={{ color: COLORS.COOL_GRAY }}>
                        {value.metricLabel}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Column: Engagement Options (Animated) */}
        <div
          ref={rightColRef} 
          className={`p-8 sm:p-12 lg:p-16 flex flex-col justify-center ${fadeIn(rightColVisible, 400)}`} // <-- Added animation classes
          style={{ backgroundColor: COLORS.CLEAN_WHITE }}
        >
          <h3 className="text-2xl font-bold mb-10 text-center" style={{ color: COLORS.NAVY_MIDNIGHT }}>
            Select Your Path to Collaboration
          </h3>

          <div className="space-y-8">
            {engagementOptions.map((option, index) => {
              const Icon = option.icon;
              const isSelected = selectedValue === index;
              const color = option.secondaryColor;

              return (
                <div
                  key={index}
                  onClick={() => setSelectedValue(index)}
                  className={`p-6 border-2 rounded-xl transition-all duration-300 cursor-pointer ${isSelected ? 'shadow-xl scale-[1.02]' : 'shadow-md hover:shadow-lg'}`}
                  style={{
                    borderColor: isSelected ? color : COLORS.PALE_BLUE_GRAY,
                    backgroundColor: isSelected ? `${color}10` : COLORS.LIGHT_STONE
                  }}
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div
                      className="w-12 h-12 rounded-lg flex items-center justify-center transition-all duration-300 transform"
                      style={{
                        backgroundColor: isSelected ? color : COLORS.COOL_GRAY,
                        opacity: isSelected ? 1 : 0.8
                      }}
                    >
                      <Icon className="w-6 h-6" style={{ color: COLORS.CLEAN_WHITE }} />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold" style={{ color: COLORS.NAVY_MIDNIGHT }}>
                        {option.title}
                      </h4>
                      <p className="text-sm" style={{ color: COLORS.COOL_GRAY }}>
                        {option.description}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-x-4 gap-y-2">
                    {option.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-1.5 text-sm" style={{ color: COLORS.NAVY_MIDNIGHT }}>
                        <MdOutlineCheckCircle className="w-4 h-4" style={{ color: color }} />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-8 text-center">
            <a
              href="#contact"
              className="inline-flex items-center font-medium transition-colors duration-300"
              style={{ color: COLORS.MUTED_TEAL }}
            >
              Need a custom approach? Contact our team &rarr;
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnerWithUsSection;