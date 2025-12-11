"use client";

import React, { useState, useRef, useEffect } from 'react';
import { CheckCircle, Shield, Truck, Award, Briefcase, UserCheck } from 'lucide-react';

/**
 * AnimatedItem component uses Intersection Observer to trigger a smooth
 * Tailwind transition (fade-in and move-up) when the element scrolls into view.
 */
const AnimatedItem = ({ children, delay }) => {
    const ref = useRef(null);
    const [inView, setInView] = useState(false);

    useEffect(() => {
        const currentRef = ref.current;
        
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setInView(true);
                // Stop observing once the animation has been triggered
                observer.unobserve(currentRef);
            }
        }, { 
            threshold: 0.1, // Trigger when 10% of the item is visible
            rootMargin: '0px 0px -50px 0px' // Start slightly earlier for a smoother reveal
        });

        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, []);

    // Initial state: invisible and slightly offset down (translate-y-4)
    // Final state (inView): visible and in place (opacity-100 translate-y-0)
    const baseClasses = `transition-all duration-700 ease-out ${delay}`;
    const animationClass = inView 
        ? `${baseClasses} opacity-100 translate-y-0` 
        : `${baseClasses} opacity-0 translate-y-4`;

    return (
        <div ref={ref} className={animationClass}>
            {children}
        </div>
    );
};

export default function App() {

    // Helper component for CSS transition-delay and Keyframes (for CTA pulse, though not currently used)
    const Animations = () => (
        <style>
            {`
            /* Staggered delays using transition-delay utility */
            .delay-100 { transition-delay: 100ms; }
            .delay-200 { transition-delay: 200ms; }
            .delay-300 { transition-delay: 300ms; }
            .delay-400 { transition-delay: 400ms; }
            .delay-500 { transition-delay: 500ms; }
            .delay-600 { transition-delay: 600ms; }
            
            /* Keyframes for the CTA pulse (for potential future use) */
            @keyframes pulse-once {
                0% { box-shadow: 0 0 0 0 rgba(196, 154, 110, 0.7); }
                70% { box-shadow: 0 0 0 10px rgba(196, 154, 110, 0); }
                100% { box-shadow: 0 0 0 0 rgba(196, 154, 110, 0); }
            }
            .animate-cta-pulse {
                animation: pulse-once 2s ease-out 1.2s 1; /* Fires once after a delay */
            }
            `}
        </style>
    );

    const markerStyle = (isLast) => `relative flex items-center mb-12 last:mb-0 
        before:content-[''] before:absolute before:left-[-35px] before:top-1 before:w-5 before:h-5 before:rounded-full before:bg-[#C49A6E] before:border-4 before:border-white before:shadow-md before:transition-all before:duration-300 before:group-hover:scale-125 before:group-hover:bg-[#15324A]
        ${!isLast ? 'after:content-[""] after:absolute after:left-[-26px] after:top-6 after:bottom-[-20px] after:w-px after:bg-[#15324A] after:opacity-50' : ''}`;

    return (
        <>
            <Animations />
            <section className="py-24 bg-white relative overflow-hidden font-sans">

                {/* Subtle top gradient for visual depth */}
                <div className="absolute top-0 left-0 right-0 h-48 bg-gradient-to-b from-gray-50 to-white"></div>

                <div className="max-w-7xl mx-auto px-6 relative z-10">

                    {/* Header Row */}
                    <div className="grid md:grid-cols-12 gap-10 mb-10 md:mb-16">
                        
                        {/* Header Title (Delay 100) */}
                        <div className="md:col-span-6">
                            <AnimatedItem delay="delay-100" >
                                <div className="text-sm font-semibold uppercase tracking-widest text-[#C49A6E] mb-3">
                                    OUR OPERATIONAL EDGE
                                </div>
                                <h2 className="text-4xl md:text-5xl font-extrabold text-[#1A1A1A] leading-tight">
                                    A Four-Point <span className="text-[#15324A]">Standard of Excellence.</span>
                                </h2>
                            </AnimatedItem>
                        </div>

                        {/* Header Description (Delay 200) */}
                        <div className="md:col-span-6 flex items-end">
                            <AnimatedItem delay="delay-200">
                                <p className="text-lg text-gray-600">
                                    Our commitment is built into every step, ensuring integrity, quality, and reliability from our source to your final structure.
                                </p>
                            </AnimatedItem>
                        </div>
                    </div>

                    {/* Value Points - Process Timeline Layout */}
                    <div className="grid md:grid-cols-2 gap-x-16 gap-y-6">

                        {/* Left Column */}
                        <div className="md:col-span-1 border-l-4 border-[#ffffff] pl-10 pt-4">

                            {/* Point 1: Unrivaled Consistency (Delay 300) */}
                            <AnimatedItem delay="delay-300">
                                <div className={`group transition-all duration-300 p-4 -ml-14 rounded-lg hover:bg-gray-50 hover:shadow-lg`} >
                                    <div className={markerStyle()}>
                                        <div className="w-full">
                                            <h3 className="text-2xl font-bold text-[#15324A] mb-2">
                                                1. Unrivaled Consistency
                                            </h3>
                                            <p className="text-gray-700 leading-relaxed mb-2">
                                                We exceed standards. Every cubic meter is meticulously processed, washed, and graded to ensure **zero material risk** on your site.
                                            </p>
                                            <div className="inline-flex items-center space-x-2 text-sm font-medium text-[#C49A6E] bg-gray-50 px-3 py-1 rounded-full border border-gray-100">
                                                <Award className="w-4 h-4" />
                                                <span>IS Certified Quality</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </AnimatedItem>

                            {/* Point 2: Ethical & Legal Sourcing (Delay 500) */}
                            <AnimatedItem delay="delay-500">
                                <div className={`group transition-all duration-300 p-4 -ml-14 rounded-lg hover:bg-gray-50 hover:shadow-lg`} >
                                    <div className={markerStyle()}>
                                        <div className="w-full">
                                            <h3 className="text-2xl font-bold text-[#15324A] mb-2">
                                                2. Ethical & Legal Sourcing
                                            </h3>
                                            <p className="text-gray-700 leading-relaxed mb-2">
                                                Full **regulatory compliance** is non-negotiable. Our operations are fully traceable and environmentally responsible.
                                            </p>
                                            <div className="inline-flex items-center space-x-2 text-sm font-medium text-[#C49A6E] bg-gray-50 px-3 py-1 rounded-full border border-gray-100">
                                                <Shield className="w-4 h-4" />
                                                <span>100% Compliant</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </AnimatedItem>
                        </div>

                        {/* Right Column */}
                        <div className="md:col-span-1 border-l-4 border-[#ffffff] pl-10 pt-4">

                            {/* Point 3: Supply Chain Certainty (Delay 400) */}
                            <AnimatedItem delay="delay-400">
                                <div className={`group transition-all duration-300 p-4 -ml-14 rounded-lg hover:bg-gray-50 hover:shadow-lg`} >
                                    <div className={markerStyle()}>
                                        <div className="w-full">
                                            <h3 className="text-2xl font-bold text-[#15324A] mb-2">
                                                3. Supply Chain Certainty
                                            </h3>
                                            <p className="text-gray-700 leading-relaxed mb-2">
                                                Our robust logistics network guarantees **on-time delivery** of the exact quantity and grade you need, every time.
                                            </p>
                                            <div className="inline-flex items-center space-x-2 text-sm font-medium text-[#C49A6E] bg-gray-50 px-3 py-1 rounded-full border border-gray-100">
                                                <Truck className="w-4 h-4" />
                                                <span>Guaranteed Logistics</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </AnimatedItem>

                            <AnimatedItem delay="delay-400">
                                <div className={`group transition-all duration-300 p-4 -ml-14 rounded-lg hover:bg-gray-50 hover:shadow-lg`} >
                                    <div className={markerStyle()}>
                                        <div className="w-full">
                                            <h3 className="text-2xl font-bold text-[#15324A] mb-2">
                                                4. Dedicated Support
                                            </h3>
                                            <p className="text-gray-700 leading-relaxed mb-2">
                                                A dedicated account manager provides **specialized grade consultation** and real-time updates for optimal project planning.
                                            </p>
                                            <div className="inline-flex items-center space-x-2 text-sm font-medium text-[#C49A6E] bg-gray-50 px-3 py-1 rounded-full border border-gray-100">
                                                <Truck className="w-4 h-4" />
                                                <span>24/7 Consultation</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </AnimatedItem>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}