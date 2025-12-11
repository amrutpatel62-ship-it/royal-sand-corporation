"use client";

import React, { useState } from 'react';
import { Droplet, Shield, CheckCircle, Sparkles, Waves, ChevronDown } from 'lucide-react';

export default function ImpuritiesShowcase() {
    const [hoveredStep, setHoveredStep] = useState(null);

    // --- PROFESSIONAL COLOR PALETTE ---
    const COLOR_PRIMARY = "#15324A"; // Dark Navy/Midnight - Main text, BG accent
    const COLOR_ACCENT_1 = "#C49A6E"; // Metallic Gold/Bronze - Highlight
    const COLOR_ACCENT_2 = "#4A889A"; // Muted Teal/Blue - Secondary Accent
    const COLOR_LIGHT_BG = "#F7F7F7"; // Light Stone/Off-White - Main BG
    const COLOR_CARD_BG = "#FFFFFF"; // Clean White - Card BG
    const COLOR_SECONDARY_TEXT = "#757575"; // Mid-Gray - Description text

    const impurities = [
        {
            id: 1,
            name: 'Silt and Clay',
            effect: 'Hindering the adhesion of cement and sand.',
            color: COLOR_ACCENT_2,
            gradient: `linear-gradient(135deg, ${COLOR_ACCENT_2}, ${COLOR_PRIMARY})`
        },
        {
            id: 2,
            name: 'Organic Matters',
            effect: 'Can retard the setting time of cement and reduce strength and durability.',
            details: 'Decayed vegetation, humus, coal, industrial waste, etc.',
            color: COLOR_ACCENT_1,
            gradient: `linear-gradient(135deg, ${COLOR_ACCENT_1}, #9C7C58)`
        },
        {
            id: 3,
            name: 'Salts and Chlorides',
            effect: 'Lead to corrosion of steel reinforcement.',
            color: COLOR_ACCENT_2,
            gradient: `linear-gradient(135deg, ${COLOR_ACCENT_2}, ${COLOR_PRIMARY})`
        },
        {
            id: 4,
            name: 'Mica',
            effect: 'Leads to poor adhesion to cement paste.',
            color: COLOR_ACCENT_1,
            gradient: `linear-gradient(135deg, ${COLOR_ACCENT_1}, #755E44)`
        },
        {
            id: 5,
            name: 'Light Materials',
            effect: 'Also cause poor adhesion.',
            details: 'Shells, shales, soft fragments',
            color: COLOR_ACCENT_2,
            gradient: `linear-gradient(135deg, ${COLOR_ACCENT_2}, #9C7C58)`
        },
        {
            id: 6,
            name: 'Sulfides and Sulfates',
            effect: 'Can corrode the cement and decrease the durability of the structure.',
            details: 'Iron pyrites, gypsum',
            color: COLOR_ACCENT_1,
            gradient: `linear-gradient(135deg, ${COLOR_ACCENT_1}, ${COLOR_PRIMARY})`
        },
        {
            id: 7,
            name: 'Fine Dust / Mud',
            effect: 'These particles coat the sand particle and interfere with the bonding process.',
            color: COLOR_ACCENT_2,
            gradient: `linear-gradient(135deg, ${COLOR_ACCENT_2}, #755E44)`
        }
    ];

    return (
        <div className="min-h-screen" style={{ background: COLOR_LIGHT_BG }}>

            {/* --- HERO SECTION (Reduced Font Size) --- */}
            <div className="relative overflow-hidden pt-12" style={{ backgroundColor: COLOR_PRIMARY }}>
                {/* Subtle Background Blur Effects */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute -top-10 -right-10 w-64 h-64 rounded-full filter blur-3xl" style={{ backgroundColor: COLOR_ACCENT_1 }}></div>
                    <div className="absolute -bottom-10 -left-10 w-64 h-64 rounded-full filter blur-3xl" style={{ backgroundColor: COLOR_ACCENT_2 }}></div>
                </div>

                <div className="relative container mx-auto px-6 py-12">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-4 border backdrop-blur-sm" style={{ backgroundColor: `rgba(74, 136, 154, 0.1)`, borderColor: `rgba(196, 154, 110, 0.3)` }}>
                            <Droplet className="w-3 h-3" style={{ color: COLOR_ACCENT_1 }} />
                            <span className="text-xs font-semibold tracking-wider" style={{ color: '#DBE1E8' }}>ADVANCED PURIFICATION</span>
                        </div>

                        {/* Font size decreased to 3xl/4xl */}
                        <h1 className="text-3xl md:text-4xl font-extrabold mb-4 leading-snug" style={{ color: COLOR_CARD_BG }}>
                            Impurities Removed by Our{' '}
                            <span style={{ color: COLOR_ACCENT_1 }}>Washing Process</span>
                        </h1>

                        {/* Font size decreased to base */}
                        <p className="text-base leading-relaxed max-w-3xl mx-auto" style={{ color: '#A8B3BF' }}>
                            The removal of organic and inorganic materials ensures superior concrete quality and structural durability.
                        </p>
                    </div>
                </div>
            </div>

            {/* --- STATS SECTION (Compacted) --- */}
            <div className="container mx-auto px-6 -mt-8 mb-12 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
                    {[
                        { icon: Shield, label: 'Protection', value: '100%', gradient: `linear-gradient(135deg, ${COLOR_ACCENT_2}, ${COLOR_PRIMARY})` },
                        { icon: Sparkles, label: 'Purity Achieved', value: '99.9%', gradient: `linear-gradient(135deg, ${COLOR_ACCENT_1}, #9C7C58)` },
                        { icon: CheckCircle, label: 'Impurities Removed', value: '7 Types', gradient: `linear-gradient(135deg, #755E44, ${COLOR_PRIMARY})` }
                    ].map((stat, i) => (
                        <div key={i} className="rounded-xl p-4 shadow-lg flex items-center gap-3" style={{ background: stat.gradient }}>
                            <stat.icon className="w-6 h-6 flex-shrink-0" style={{ color: COLOR_CARD_BG }} />
                            <div>
                                {/* Font size decreased to xl */}
                                <div className="text-xl font-bold leading-none" style={{ color: COLOR_CARD_BG }}>
                                    {stat.value}
                                </div>
                                {/* Font size decreased to xs */}
                                <div className="text-xs font-medium" style={{ color: '#DBE1E8' }}>{stat.label}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* --- MAIN CONTENT (Reduced Font Size & Compact Cards) --- */}
            <div className="container mx-auto px-6 pb-16">

                {/* Section Title (Reduced Font Size) */}
                <div className="text-center mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold mb-3" style={{ color: COLOR_PRIMARY }}>
                        Major Impurities and Their Structural Impact
                    </h2>
                    <div className="w-24 h-1 mx-auto rounded-full" style={{ background: `linear-gradient(to right, ${COLOR_ACCENT_2}, ${COLOR_ACCENT_1})` }}></div>
                </div>

                {/* Stepwell Design - Cascading Steps */}
                <div className="max-w-5xl mx-auto relative">
                    {/* Central connecting line */}
                    <div className="absolute left-1/2 top-0 bottom-0 w-0.5 hidden lg:block" style={{ background: `linear-gradient(to bottom, ${COLOR_ACCENT_2}, ${COLOR_ACCENT_1})`, transform: 'translateX(-50%)' }}></div>

                    <div className="space-y-6">
                        {impurities.map((impurity, index) => {
                            const isEven = index % 2 === 0;

                            return (
                                <div key={impurity.id} className="relative">
                                    {/* Connector dot on the line (Smaller) */}
                                    <div
                                        className="absolute left-1/2 top-6 w-4 h-4 rounded-full border-2 hidden lg:block transition-all duration-300 z-20"
                                        style={{
                                            backgroundColor: hoveredStep === impurity.id ? impurity.color : COLOR_CARD_BG,
                                            borderColor: impurity.color,
                                            transform: `translateX(-50%) scale(${hoveredStep === impurity.id ? 1.5 : 1})`
                                        }}
                                    ></div>

                                    <div
                                        className={`grid lg:grid-cols-2 gap-4 items-start ${isEven ? '' : 'lg:flex-row-reverse'}`}
                                        onMouseEnter={() => setHoveredStep(impurity.id)}
                                        onMouseLeave={() => setHoveredStep(null)}
                                    >
                                        {/* Number and Title Side (Compacted) */}
                                        <div className={`relative ${isEven ? 'lg:text-right lg:pr-10' : 'lg:order-2 lg:text-left lg:pl-10'}`}>
                                            <div className={`inline-flex items-center gap-3 ${isEven ? 'lg:flex-row-reverse' : ''}`}>
                                                {/* Number Marker (Smaller) */}
                                                <div
                                                    className="w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold shadow-md transition-all duration-300 flex-shrink-0"
                                                    style={{
                                                        background: hoveredStep === impurity.id ? impurity.gradient : COLOR_CARD_BG,
                                                        color: hoveredStep === impurity.id ? COLOR_CARD_BG : impurity.color,
                                                        transform: hoveredStep === impurity.id ? 'scale(1.1)' : 'scale(1)',
                                                        border: `2px solid ${impurity.color}`
                                                    }}
                                                >
                                                    {index + 1}
                                                </div>
                                                {/* Font size decreased to xl */}
                                                <h3
                                                    className="text-xl font-bold transition-colors duration-300"
                                                    style={{ color: hoveredStep === impurity.id ? impurity.color : COLOR_PRIMARY }}
                                                >
                                                    {impurity.name}
                                                </h3>
                                            </div>
                                        </div>

                                        {/* Content Side (Smaller Card, Smaller Text) */}
                                        <div className={`${isEven ? 'lg:pl-10' : 'lg:order-1 lg:pr-10'}`}>
                                            <div
                                                className="rounded-xl p-4 shadow-md transition-all duration-300"
                                                style={{
                                                    backgroundColor: COLOR_CARD_BG,
                                                    borderLeft: `4px solid ${impurity.color}`,
                                                    transform: hoveredStep === impurity.id ? 'scale(1.02)' : 'scale(1)',
                                                    boxShadow: hoveredStep === impurity.id ? `0 10px 20px ${impurity.color}20` : '0 2px 4px rgba(0,0,0,0.1)'
                                                }}
                                            >
                                                {/* Font size decreased to sm */}
                                                <p className="text-sm leading-snug mb-3" style={{ color: COLOR_PRIMARY }}>
                                                    {impurity.effect}
                                                </p>

                                                {impurity.details && (
                                                    <div className="p-3 rounded-lg" style={{ backgroundColor: COLOR_LIGHT_BG, borderLeft: `2px solid ${impurity.color}` }}>
                                                        {/* Font size decreased to xs */}
                                                        <p className="text-xs font-medium" style={{ color: COLOR_SECONDARY_TEXT }}>
                                                            <span style={{ color: impurity.color, fontWeight: 'bold' }}>Found in:</span> {impurity.details}
                                                        </p>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Connecting arrow for mobile */}
                                    {index < impurities.length - 1 && (
                                        <div className="flex justify-center my-4 lg:hidden">
                                            <ChevronDown className="w-5 h-5" style={{ color: impurity.color }} />
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Final Summary Section (Compact) */}
                <div className="max-w-5xl mx-auto mt-16">
                    <div
                        className="relative overflow-hidden rounded-2xl p-8 shadow-2xl"
                        style={{ background: `linear-gradient(135deg, ${COLOR_PRIMARY} 0%, #0E2333 100%)` }}
                    >
                        {/* Decorative circles */}
                        <div className="absolute top-0 right-0 w-64 h-64 rounded-full filter blur-3xl opacity-10" style={{ backgroundColor: COLOR_ACCENT_1 }}></div>

                        <div className="relative z-10">
                            <div className="flex flex-col md:flex-row items-center gap-6">
                                {/* Icon (Smaller) */}
                                <div className="flex-shrink-0">
                                    <div
                                        className="w-16 h-16 rounded-xl flex items-center justify-center shadow-lg"
                                        style={{ background: `linear-gradient(135deg, ${COLOR_ACCENT_2}, ${COLOR_ACCENT_1})` }}
                                    >
                                        <Waves className="w-8 h-8" style={{ color: COLOR_CARD_BG }} />
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="flex-1 text-center md:text-left">
                                    {/* Font size decreased to 2xl */}
                                    <h3 className="text-2xl font-bold mb-2" style={{ color: COLOR_CARD_BG }}>
                                        Final Summary: Quality Assurance
                                    </h3>

                                    {/* Font size decreased to sm */}
                                    <p className="text-sm leading-relaxed mb-4" style={{ color: '#DBE1E8' }}>
                                        Washing with clean water removes all above harmful substances, ensuring the sand meets **acceptable standards** for all construction applications.
                                    </p>

                                    <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                                        <div className="px-3 py-1 rounded-md backdrop-blur-sm" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', borderLeft: `3px solid ${COLOR_ACCENT_2}` }}>
                                            <div className="text-xs font-medium" style={{ color: '#DBE1E8' }}>Clean Process</div>
                                        </div>
                                        <div className="px-3 py-1 rounded-md backdrop-blur-sm" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', borderLeft: `3px solid ${COLOR_ACCENT_1}` }}>
                                            <div className="text-xs font-medium" style={{ color: '#DBE1E8' }}>IS Certified</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}