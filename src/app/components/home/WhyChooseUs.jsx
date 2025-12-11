"use client";

import React, { useState, useEffect } from 'react';
import { Award, Shield, TrendingUp, Sun } from 'lucide-react';

export default function App() { // Renamed from WhyChooseUs to App for default export
    const [activeIndex, setActiveIndex] = useState(0);

    const differentiators = [
        {
            id: 1,
            icon: Award,
            title: "Certified Quality",
            description: "Tested to meet all relevant Indian Standards (IS). Ensures durability and performance for every project.",
            accentColor: "#C49A6E" // Gold/Brown
        },
        {
            id: 2,
            icon: Shield,
            title: "Zero Wastage",
            description: "Tamper-proof, ready-to-use bags eliminate spillage, guarantee precise quantities, and prevent adulteration.",
            accentColor: "#4A889A" // Blue/Gray
        },
        {
            id: 3,
            icon: TrendingUp,
            title: "Optimal Grade",
            description: "We supply uniformly graded sand, ensuring superior concrete strength and reduced cement consumption.",
            accentColor: "#755E44" // Dark Brown/Olive
        },
        {
            id: 4,
            icon: Sun,
            title: "Moisture Controlled",
            description: "Advanced drying techniques ensure ideal moisture content, maximizing volumetric efficiency and mix stability.",
            accentColor: "#A9A9A9" // Light Gray
        }
    ];

    // Auto-cycling logic
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % differentiators.length);
        }, 3500);
        return () => clearInterval(interval);
    }, [differentiators.length]);

    // CSS Keyframes for the active ring pulse
    const Keyframes = () => (
        <style jsx>{`
            @keyframes pulse-ring {
                0% {
                    transform: scale(1);
                    opacity: 1;
                }
                100% {
                    transform: scale(1.6);
                    opacity: 0;
                }
            }
        `}</style>
    );

    const activeItem = differentiators[activeIndex];

    return (
        <section
            className="py-20 md:py-32 w-full min-h-screen flex items-center font-sans relative overflow-hidden"
            style={{
                background: '#FAF9F6',
                // Complex background pattern for professional texture
                backgroundImage: `
                    repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(196, 154, 110, 0.03) 35px, rgba(196, 154, 110, 0.03) 70px),
                    repeating-linear-gradient(-45deg, transparent, transparent 35px, rgba(74, 136, 154, 0.02) 35px, rgba(74, 136, 154, 0.02) 70px),
                    radial-gradient(circle at 20% 30%, rgba(196, 154, 110, 0.08) 0%, transparent 50%),
                    radial-gradient(circle at 80% 70%, rgba(74, 136, 154, 0.08) 0%, transparent 50%),
                    linear-gradient(135deg, #FAF9F6 0%, #F5F3EE 50%, #FAF9F6 100%)
                `,
            }}>

            <Keyframes />

            {/* Decorative texture elements */}
            <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C49A6E' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }} />

            {/* Floating accent shapes */}
            <div className="absolute top-20 left-10 w-40 h-40 rounded-full opacity-5"
                style={{ background: 'radial-gradient(circle, #C49A6E 0%, transparent 70%)', filter: 'blur(60px)' }} />
            <div className="absolute bottom-20 right-10 w-40 h-40 rounded-full opacity-5"
                style={{ background: 'radial-gradient(circle, #4A889A 0%, transparent 70%)', filter: 'blur(60px)' }} />
            <div className="absolute top-1/2 left-1/3 w-32 h-32 rounded-full opacity-5"
                style={{ background: 'radial-gradient(circle, #755E44 0%, transparent 70%)', filter: 'blur(50px)' }} />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                <div className="text-center mb-16 md:mb-20">
                    <p className="text-base font-semibold tracking-wider uppercase mb-3" 
                        style={{ color: '#C49A6E', letterSpacing: '0.15em' }}>
                        The Royal Standard
                    </p>
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-gray-900">
                        Why Leaders Choose <span style={{ color: '#C49A6E' }}>Royal Sand</span>
                    </h2>
                    <div className="flex items-center justify-center mt-6 gap-2">
                        <div className="w-12 h-1 rounded-full" style={{ background: '#C49A6E' }}></div>
                        <div className="w-2 h-2 rounded-full" style={{ background: '#C49A6E' }}></div>
                        <div className="w-12 h-1 rounded-full" style={{ background: '#C49A6E' }}></div>
                    </div>
                    <p className="text-lg mt-6 max-w-2xl mx-auto text-gray-600">
                        Delivering excellence through innovation, quality, and unwavering commitment to your success
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
                    {differentiators.map((item, index) => {
                        const Icon = item.icon;
                        const isActive = index === activeIndex;

                        return (
                            <div
                                key={item.id}
                                onClick={() => setActiveIndex(index)}
                                className="cursor-pointer relative group"
                                style={{
                                    transform: isActive ? 'translateY(-8px)' : 'translateY(0)',
                                    transition: 'all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)',
                                }}
                            >
                                <div
                                    className="relative h-full p-8 rounded-2xl overflow-hidden shadow-xl"
                                    style={{
                                        background: 'white',
                                        border: isActive ? `3px solid ${item.accentColor}` : '3px solid #E5E7EB',
                                        boxShadow: isActive
                                            ? `0 20px 60px ${item.accentColor}30, 0 10px 30px rgba(0,0,0,0.1)`
                                            : '0 4px 20px rgba(0, 0, 0, 0.08)',
                                        transition: 'all 0.5s ease'
                                    }}
                                >
                                    {/* Accent bar */}
                                    <div
                                        className="absolute top-0 left-0 right-0 h-1"
                                        style={{
                                            background: `linear-gradient(90deg, ${item.accentColor}, ${item.accentColor}80)`,
                                            opacity: isActive ? 1 : 0,
                                            transition: 'opacity 0.5s ease'
                                        }}
                                    />

                                    {/* Gradient overlay */}
                                    <div
                                        className="absolute inset-0 opacity-0 group-hover:opacity-100"
                                        style={{
                                            background: `linear-gradient(135deg, ${item.accentColor}05, transparent 60%)`,
                                            transition: 'opacity 0.5s ease'
                                        }}
                                    />

                                    <div className="relative z-10 flex flex-col items-center text-center">
                                        {/* Icon container */}
                                        <div className="relative mb-6">
                                            {/* Pulsing ring for active card */}
                                            {isActive && (
                                                <div
                                                    className="absolute inset-0 rounded-full"
                                                    style={{
                                                        border: `2px solid ${item.accentColor}`,
                                                        animation: 'pulse-ring 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                                                        // Ensure the ring is slightly bigger than the icon container
                                                        top: '-4px', left: '-4px', right: '-4px', bottom: '-4px'
                                                    }}
                                                />
                                            )}
                                            
                                            <div
                                                className="w-20 h-20 rounded-full flex items-center justify-center relative"
                                                style={{
                                                    background: isActive 
                                                        ? `linear-gradient(135deg, ${item.accentColor}20, ${item.accentColor}10)`
                                                        : '#F3F4F6',
                                                    transition: 'all 0.5s ease'
                                                }}>
                                                <Icon
                                                    className="w-10 h-10"
                                                    style={{
                                                        color: item.accentColor,
                                                        transform: isActive ? 'scale(1.1)' : 'scale(1)',
                                                        transition: 'transform 0.3s ease'
                                                    }}
                                                    strokeWidth={2}
                                                />
                                            </div>
                                        </div>

                                        {/* Title */}
                                        <h3
                                            className="text-xl font-bold mb-3 transition-colors duration-300"
                                            style={{
                                                color: isActive ? item.accentColor : '#1A1A1A'
                                            }}>
                                            {item.title}
                                        </h3>

                                        {/* Animated divider */}
                                        <div
                                            className="h-0.5 mb-4 rounded-full transition-all duration-500"
                                            style={{
                                                width: isActive ? '50px' : '30px',
                                                background: item.accentColor,
                                                opacity: isActive ? 1 : 0.5
                                            }}
                                        />

                                        {/* Description */}
                                        <p
                                            className="text-sm leading-relaxed text-gray-600">
                                            {item.description}
                                        </p>
                                    </div>

                                    {/* Corner accent */}
                                    <div
                                        className="absolute bottom-0 right-0 w-20 h-20 opacity-10"
                                        style={{
                                            background: `radial-gradient(circle at bottom right, ${item.accentColor}, transparent 70%)`,
                                            transition: 'opacity 0.5s ease'
                                        }}
                                    />
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Navigation dots */}
                <div className="flex justify-center gap-3 mt-16">
                    {differentiators.map((item, index) => (
                        <button
                            key={item.id}
                            onClick={() => setActiveIndex(index)}
                            className="relative group focus:outline-none"
                            aria-label={`View ${item.title}`}
                            style={{
                                width: activeIndex === index ? '40px' : '12px',
                                height: '12px',
                                background: activeIndex === index ? item.accentColor : '#D1D5DB',
                                borderRadius: '999px',
                                transition: 'all 0.5s ease',
                                opacity: activeIndex === index ? 1 : 0.6,
                            }}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}