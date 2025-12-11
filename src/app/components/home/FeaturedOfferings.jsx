"use client";

import React, { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';
// 1. Import Framer Motion components and AnimatePresence
import { motion, AnimatePresence } from 'framer-motion';
// 2. Import hook for scroll-based animation
import { useInView } from 'react-intersection-observer';


// Transition variants for the content and visual blocks
const contentVariants = {
    initial: { opacity: 0, x: -20 },
    animate: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
    exit: { opacity: 0, x: 20, transition: { duration: 0.3, ease: "easeIn" } }
};

const visualVariants = {
    initial: { opacity: 0, y: 50, scale: 0.95 },
    animate: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: "easeOut" } },
    exit: { opacity: 0, y: -50, scale: 0.95, transition: { duration: 0.4, ease: "easeIn" } }
};


const ProductTabButton = ({ product, index, activeTab, setActiveTab }) => {
    return (
        // *Optional: You could also add a subtle hover scale effect here using motion.button*
        <button
            key={product.id}
            onClick={() => setActiveTab(index)}
            className="group relative px-8 py-4 rounded-full font-semibold transition-all duration-300"
            style={{
                background: activeTab === index ? product.bgColor : '#FFFFFF',
                color: activeTab === index ? '#FFFFFF' : '#15324A',
                border: `2px solid ${activeTab === index ? product.bgColor : '#DBE1E8'}`,
                boxShadow: activeTab === index ? `0 8px 24px ${product.bgColor}40` : 'none'
            }}
        >
            <span className="relative z-10 ">{product.category}</span>
        </button>
    );
};

const ProductContent = ({ activeProduct }) => {
    // 3. Wrap content in motion.div and apply AnimatePresence props
    return (
        <motion.div
            key={activeProduct.id} // Key is crucial for AnimatePresence to detect a change
            variants={contentVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="space-y-8"
        >
            <div>
                <div className="text-sm font-bold uppercase tracking-widest mt-3"
                    style={{ color: activeProduct.bgColor }}>
                    {activeProduct.category} Solution
                </div>
                <h3 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#15324A' }}>
                    {activeProduct.title}
                </h3>
                <p className="text-xl mb-6" style={{ color: activeProduct.bgColor }}>
                    {activeProduct.subtitle}
                </p>
                <p className="text-lg leading-relaxed" style={{ color: '#755E44' }}>
                    {activeProduct.description}
                </p>
            </div>

            {/* Specifications */}
            <div>
                <h4 className="text-lg font-bold mb-4 uppercase tracking-wide" style={{ color: '#15324A' }}>
                    Key Specifications
                </h4>
                <div className="space-y-3">
                    {/* Optional: Add a stagger effect to specs if needed */}
                    {activeProduct.specs.map((spec, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                            <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                                style={{ background: `${activeProduct.bgColor}20` }}>
                                <Check className="w-4 h-4" style={{ color: activeProduct.bgColor }} strokeWidth={3} />
                            </div>
                            <span className="text-base" style={{ color: '#1A1A1A' }}>
                                {spec}
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Applications */}
            <div>
                <h4 className="text-lg font-bold mb-4 uppercase tracking-wide" style={{ color: '#15324A' }}>
                    Ideal Applications
                </h4>
                <div className="flex flex-wrap gap-3">
                    {activeProduct.applications.map((app, idx) => (
                        <div key={idx} className="px-4 py-2 rounded-full text-sm font-medium"
                            style={{
                                background: `${activeProduct.bgColor}15`,
                                color: activeProduct.bgColor,
                                border: `1px solid ${activeProduct.bgColor}30`
                            }}>
                            {app}
                        </div>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

const ProductVisual = ({ activeProduct }) => {

    const overlayGradient = `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6))`;
    const imageUrl = activeProduct.backgroundImage ? `url(${activeProduct.backgroundImage})` : null;

    const visualBackgroundStyle = imageUrl
        ? {
            backgroundImage: `${overlayGradient}, ${imageUrl}`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
        }
        : {
            background: `linear-gradient(135deg, ${activeProduct.bgColor} 0%, ${activeProduct.bgColor}dd 100%)`,
        };

    const accentColor = '#FFC300';

    // 4. Wrap visual in motion.div and apply AnimatePresence props
    return (
        <motion.div
            key={activeProduct.id} // Key is crucial for AnimatePresence to detect a change
            variants={visualVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="relative"
        >
            <div className="relative aspect-square rounded-3xl overflow-hidden"
                style={{
                    ...visualBackgroundStyle,
                    boxShadow: `0 24px 64px ${activeProduct.bgColor}40`,
                }}>

                {/* Content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-12">
                    <div className="text-white">
                        <div className="text-8xl font-bold mb-4 opacity-90"
                            style={{ color: accentColor }}>
                            {String(activeProduct.id + 1).padStart(2, '0')}
                        </div>
                        <div className="text-3xl font-bold mb-2">
                            {activeProduct.category}
                        </div>
                        <div className="text-lg opacity-80">
                            Premium Grade
                        </div>
                    </div>
                </div>

                {/* Floating Stats */}
                <div className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-sm rounded-2xl p-6"
                    style={{ boxShadow: '0 8px 32px rgba(0,0,0,0.1)' }}>
                    <div className="grid grid-cols-3 gap-4 text-center">
                        <div>
                            <div className="text-2xl font-bold" style={{ color: activeProduct.bgColor }}>
                                IS 383
                            </div>
                            <div className="text-xs font-medium" style={{ color: '#755E44' }}>
                                Certified
                            </div>
                        </div>
                        <div>
                            <div className="text-2xl font-bold" style={{ color: activeProduct.bgColor }}>
                                100%
                            </div>
                            <div className="text-xs font-medium" style={{ color: '#755E44' }}>
                                Quality
                            </div>
                        </div>
                        <div>
                            <div className="text-2xl font-bold" style={{ color: activeProduct.bgColor }}>
                                24/7
                            </div>
                            <div className="text-xs font-medium" style={{ color: '#755E44' }}>
                                Available
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default function FeaturedOfferings() {
    const [activeTab, setActiveTab] = useState(0);

    // 5. Setup Intersection Observer for scroll reveal
    const [ref, inView] = useInView({
        triggerOnce: true, // Only animate once
        threshold: 0.1,    // Start animation when 10% of the element is visible
    });

    const products = [
        // ... (product data remains the same)
        {
            "id": 0,
            "category": "Concrete",
            "title": "Processed Concrete Sand",
            "subtitle": "High-Strength Aggregate",
            "description": "Premium quality sand specifically processed for Ready-Mix Concrete (RMC) and structural concrete applications. Engineered to meet the demanding requirements of modern construction.",
            "specs": [
                "Consistent particle size distribution",
                "High compressive strength performance",
                "Meets IS 383 standards",
                "Optimal for RMC plants"
            ],
            "applications": ["High-rise buildings", "Infrastructure projects", "Commercial structures"],
            "bgColor": "#15324A",
            "backgroundImage": "/images/concrete.jpg"
        },
        {
            "id": 1,
            "category": "Plaster",
            "title": "Processed Plaster Sand",
            "subtitle": "Fine-Grade Excellence",
            "description": "Carefully graded fine sand designed for superior plastering work. Delivers smooth finishes and excellent bonding properties for both interior and exterior applications.",
            "specs": [
                "Ultra-fine consistent grading",
                "Superior adhesion properties",
                "Minimal shrinkage cracking",
                "Smooth finish guarantee"
            ],
            "applications": ["Interior plastering", "Exterior rendering", "Decorative finishes"],
            "bgColor": "#4A889A",
            "backgroundImage": "/images/plaster.jpg"
        },
        {
            "id": 2,
            "category": "Packaging",
            "title": "Standardized Packaging",
            "subtitle": "Flexible Solutions",
            "description": "Industry-leading packaging options designed for efficiency and convenience. From bulk orders to smaller quantities, we provide packaging that suits your project scale.",
            "specs": [
                "1 Ton Jumbo Bags for bulk orders",
                "50kg bags for medium projects",
                "25kg bags for retail/small works",
                "Moisture-protected packaging"
            ],
            "applications": ["Large-scale projects", "Medium contractors", "Retail customers"],
            "bgColor": "#C49A6E",
            "backgroundImage": "/images/packaging.jpg"
        }
    ];

    const activeProduct = products[activeTab];

    // Animation properties for the main section container
    const sectionVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
    };

    return (
        // 6. Use motion.section and apply scroll reveal logic
        <motion.section
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={sectionVariants}
            className="py-14 relative" 
            style={{ background: 'linear-gradient(180deg, #FFFFFF 0%, #F7F7F7 50%, #FFFFFF 100%)' }}
        >
            <div className="max-w-7xl mx-auto px-6">

                {/* Header */}
                <div className="max-w-3xl mb-20 w-full mx-auto text-center">
                    <div className="inline-block mb-6">
                        <div className="px-5 py-2 rounded-full text-xs font-bold uppercase tracking-widest"
                            style={{ background: '#F5EFE4', color: '#755E44', border: '1px solid #DCD0B9' }}>
                            Product Range
                        </div>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-extrabold text-[#1A1A1A] leading-tight">
                        Solutions for<span className="text-[#15324A]"> Every Project</span>
                    </h2>
                    <p className="text-xl leading-relaxed mt-8" style={{ color: '#755E44' }}>
                        Premium sand products engineered for excellence across all construction applications
                    </p>
                </div>

                {/* Tab Navigation */}
                {/* Optional: Add a subtle scroll animation to tabs here if desired */}
                <div className="flex flex-wrap gap-4 mb-12 justify-center">
                    {products.map((product, index) => (
                        <ProductTabButton
                            key={product.id}
                            product={product}
                            index={index}
                            activeTab={activeTab}
                            setActiveTab={setActiveTab}
                        />
                    ))}
                </div>

                {/* Content Display: Wrap dynamic content in AnimatePresence */}
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* AnimatePresence manages the exit and enter of components based on the key change */}
                    <AnimatePresence mode="wait"> 
                        <ProductContent activeProduct={activeProduct} />
                    </AnimatePresence>
                    <AnimatePresence mode="wait">
                        <ProductVisual activeProduct={activeProduct} />
                    </AnimatePresence>
                </div>
            </div>
        </motion.section>
    );
}