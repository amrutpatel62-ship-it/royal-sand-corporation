"use client";

import React from 'react';
import { TrendingUp, Target, Globe, Zap, ArrowRight, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

// --- Color Palette ---
const COLOR_NAVY = '#15324A'; // Primary Dark
const COLOR_GOLD = '#C49A6E'; // Accent Gold
const COLOR_TEXT_DARK = '#2C3E50';
const COLOR_LIGHT_GRAY = '#F0F3F5'; // Lighter than F8F9FA for contrast

// Define the scroll animation variants for a clean fade-up effect
const scrollVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

// Variants for the cards to stagger their appearance slightly
const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.2, // Stagger the cards slightly (0.2s delay between them)
            duration: 0.6,
            ease: "easeOut"
        }
    }),
};

export default function GrowthScalability() {
    return (
        <div className="min-h-screen relative" style={{ backgroundColor: COLOR_LIGHT_GRAY }}>

            {/* Background Swoosh/Accent */}
            <div
                className="absolute top-0 left-0 w-full h-[300px] sm:h-[400px] opacity-10"
                style={{
                    background: `linear-gradient(90deg, ${COLOR_NAVY}, ${COLOR_GOLD}50)`,
                    clipPath: 'polygon(0 0, 100% 0, 100% 60%, 0 100%)' // Creates a slanted bottom edge
                }}
            ></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24 relative z-10">

                {/* --- Section Header --- */}
                <motion.div
                    className="text-center mb-16"
                    variants={scrollVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    <div className="inline-flex items-center gap-2 mb-3">
                        <Clock className="w-5 h-5" style={{ color: COLOR_GOLD }} />
                        <span className="text-sm font-bold uppercase tracking-[0.2em]" style={{ color: COLOR_GOLD }}>
                            FUTURE GROWTH PATH
                        </span>
                    </div>
                    <h1 className="text-4xl sm:text-5xl font-extrabold mb-4" style={{ color: COLOR_NAVY }}>
                        Growth & Scalability
                    </h1>
                    <p className="text-lg max-w-3xl mx-auto text-gray-600">
                        Investing in Your Future: Our two-phase approach ensures rapid market mastery followed by sustainable national expansion.
                    </p>
                </motion.div>

                {/* Equal Cards Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

                    {/* --- Card 1 - Short Term (Theme: Gold Accent) --- */}
                    <motion.div
                        className="relative group"
                        custom={0}
                        variants={cardVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        <div className="h-full bg-white rounded-3xl p-6 sm:p-8 shadow-xl transition-all duration-500 border-t-8 border-l-2" style={{ borderColor: COLOR_GOLD }}>

                            {/* Top Section */}
                            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-0 mb-6">
                                <div className="flex items-center gap-4">
                                    <div className="relative">
                                        {/* Icon Container 1 */}
                                        <div className="w-14 h-14 rounded-full flex items-center justify-center shadow-lg" style={{ backgroundColor: COLOR_NAVY }}>
                                            <Target className="w-6 h-6" style={{ color: COLOR_GOLD }} />
                                        </div>
                                        {/* Number Badge 1 */}
                                        <div className="absolute -top-1 -right-1 w-6 h-6 rounded-full flex items-center justify-center text-xs font-black text-white shadow-md" style={{ backgroundColor: COLOR_GOLD }}>
                                            1
                                        </div>
                                    </div>
                                    <div>
                                        <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest block mb-1" style={{ color: COLOR_GOLD }}>
                                            Phase One
                                        </span>
                                        <h3 className="text-xl sm:text-2xl font-bold" style={{ color: COLOR_NAVY }}>
                                            Short-Term Focus
                                        </h3>
                                    </div>
                                </div>
                            </div>

                            {/* Description */}
                            <p className="text-gray-700 mb-6 sm:mb-8 text-base leading-relaxed">
                                Achieving **full market penetration** and optimizing logistics across **Gujarat**.
                            </p>

                            {/* Horizontal Stats */}
                            <div className="flex flex-col sm:flex-row gap-4">
                                <div className="flex-1 p-5 rounded-xl transition-all group-hover:bg-gray-100" style={{ border: `1px solid ${COLOR_LIGHT_GRAY}` }}>
                                    <div className="flex items-center gap-3 mb-2">
                                        <div className="w-8 h-8 rounded-full flex items-center justify-center bg-gray-200">
                                            <Zap className="w-4 h-4" style={{ color: COLOR_NAVY }} />
                                        </div>
                                        <span className="text-[10px] sm:text-xs font-semibold text-gray-500 uppercase">Focus Area</span>
                                    </div>
                                    <p className="text-lg font-bold" style={{ color: COLOR_TEXT_DARK }}>Gujarat</p>
                                </div>
                                <div className="flex-1 p-5 rounded-xl transition-all group-hover:bg-gray-100" style={{ border: `1px solid ${COLOR_LIGHT_GRAY}` }}>
                                    <div className="flex items-center gap-3 mb-2">
                                        <div className="w-8 h-8 rounded-full flex items-center justify-center bg-gray-200">
                                            <TrendingUp className="w-4 h-4" style={{ color: COLOR_NAVY }} />
                                        </div>
                                        <span className="text-[10px] sm:text-xs font-semibold text-gray-500 uppercase">Goal</span>
                                    </div>
                                    <p className="text-lg font-bold" style={{ color: COLOR_TEXT_DARK }}>Full Penetration</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* --- Card 2 - Long Term (Theme: Navy Accent) --- */}
                    <motion.div
                        className="relative group"
                        custom={1}
                        variants={cardVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        <div className="h-full bg-white rounded-3xl p-6 sm:p-8 shadow-xl transition-all duration-500 border-t-8 border-l-2" style={{ borderColor: COLOR_NAVY }}>

                            {/* Top Section */}
                            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-0 mb-6">
                                <div className="flex items-center gap-4">
                                    <div className="relative">
                                        {/* Icon Container 2 */}
                                        <div className="w-14 h-14 rounded-full flex items-center justify-center shadow-lg" style={{ backgroundColor: COLOR_GOLD }}>
                                            <Globe className="w-6 h-6 text-white" />
                                        </div>
                                        {/* Number Badge 2 */}
                                        <div className="absolute -top-1 -right-1 w-6 h-6 rounded-full flex items-center justify-center text-xs font-black text-white shadow-md" style={{ backgroundColor: COLOR_NAVY }}>
                                            2
                                        </div>
                                    </div>
                                    <div>
                                        <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest block mb-1" style={{ color: COLOR_NAVY }}>
                                            Phase Two
                                        </span>
                                        <h3 className="text-xl sm:text-2xl font-bold" style={{ color: COLOR_NAVY }}>
                                            Long-Term Focus
                                        </h3>
                                    </div>
                                </div>
                            </div>

                            {/* Description */}
                            <p className="text-gray-700 mb-6 sm:mb-8 text-base leading-relaxed">
                                **Geographical expansion** into neighboring states and **significant capacity scaling** to support national infrastructure demands.
                            </p>

                            {/* Horizontal Stats */}
                            <div className="flex flex-col sm:flex-row gap-4">
                                <div className="flex-1 p-5 rounded-xl transition-all group-hover:bg-gray-100" style={{ border: `1px solid ${COLOR_LIGHT_GRAY}` }}>
                                    <div className="flex items-center gap-3 mb-2">
                                        <div className="w-8 h-8 rounded-full flex items-center justify-center bg-gray-200">
                                            <Globe className="w-4 h-4" style={{ color: COLOR_GOLD }} />
                                        </div>
                                        <span className="text-[10px] sm:text-xs font-semibold text-gray-500 uppercase">Expansion</span>
                                    </div>
                                    <p className="text-lg font-bold" style={{ color: COLOR_TEXT_DARK }}>National</p>
                                </div>
                                <div className="flex-1 p-5 rounded-xl transition-all group-hover:bg-gray-100" style={{ border: `1px solid ${COLOR_LIGHT_GRAY}` }}>
                                    <div className="flex items-center gap-3 mb-2">
                                        <div className="w-8 h-8 rounded-full flex items-center justify-center bg-gray-200">
                                            <TrendingUp className="w-4 h-4" style={{ color: COLOR_GOLD }} />
                                        </div>
                                        <span className="text-[10px] sm:text-xs font-semibold text-gray-500 uppercase">Capacity</span>
                                    </div>
                                    <p className="text-lg font-bold" style={{ color: COLOR_TEXT_DARK }}>Significant Scale</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}