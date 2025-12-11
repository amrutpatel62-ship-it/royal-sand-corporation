import React from 'react';
import { Target, TrendingUp, Users, Shield } from 'lucide-react';

const COLOR_NAVY_BLUE = '#15324A';
const COLOR_DEEP_MIDNIGHT = '#0E2333';
const COLOR_METALLIC_GOLD = '#C49A6E';
const COLOR_CLEAN_WHITE = '#FFFFFF'; 
const COLOR_PALE_BLUE_GRAY = '#DBE1E8';
const COLOR_COOL_GRAY = '#A8B3BF';
const COLOR_DARK_TEXT = COLOR_NAVY_BLUE; 

export default function ExecutiveVisionLeadership() {
    return (
        <div
            className="py-8 sm:py-12 relative overflow-hidden"
            style={{
                backgroundColor: COLOR_DEEP_MIDNIGHT,
                backgroundImage: `url('https://i.pinimg.com/736x/03/e6/07/03e607e329c4c76692b92b7af0560f29.jpg')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundAttachment: 'fixed',
            }}
        >
            <div
                className="absolute inset-0 z-0"
                style={{
                    backgroundColor: 'rgba(14, 35, 51, 0.7)',
                    backdropFilter: 'blur(0px)',
                    WebkitBackdropFilter: 'blur(1px)',
                }}
            ></div>

            <style>{`
                /* Shimmer effect for the gold line */
                @keyframes shimmer {
                    0% { background-position: -1000px 0; }
                    100% { background-position: 1000px 0; }
                }
                
                /* Pillar card slight lift/shadow on hover */
                .minimal-card:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
                }

                /* Whole content entrance animation: fade-in and slide-up */
                @keyframes fadeInSlideUp {
                    from {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                
                .animate-entrance {
                    animation: fadeInSlideUp 0.8s ease-out forwards;
                }
            `}</style>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 animate-entrance">
                {/* Main Header Section */}
                <div className="flex items-center justify-between mb-16 sm:mb-20 border-b pb-8" style={{ borderColor: COLOR_PALE_BLUE_GRAY }}>
                    <div className="text-left max-w-4xl">
                        <p className="text-lg uppercase tracking-widest mb-2" style={{ color: COLOR_METALLIC_GOLD }}>
                            Executive Leadership Board
                        </p>
                        <h1
                            className="text-4xl md:text-6xl font-extrabold tracking-tight"
                            style={{ color: COLOR_CLEAN_WHITE }}
                        >
                            The Momentum of Leadership
                        </h1>
                    </div>
                    <div className="hidden md:block w-32 h-16 border-l-4 pl-4" style={{ borderColor: COLOR_METALLIC_GOLD }}>
                        <p className="text-sm uppercase font-bold" style={{ color: COLOR_COOL_GRAY }}>
                            Unified Vision
                        </p>
                        <p className="text-sm uppercase font-bold" style={{ color: COLOR_COOL_GRAY }}>
                            Relentless Execution
                        </p>
                    </div>
                </div>

                <div
                    className="max-w-6xl mx-auto rounded-lg overflow-hidden transition-all duration-300 hover:scale-[1.005] cursor-pointer"
                    style={{
                        backgroundColor: COLOR_NAVY_BLUE,
                        border: `1px solid ${COLOR_METALLIC_GOLD}`,
                    }}
                >
                    <div className="flex flex-col md:flex-row divide-x" style={{ borderColor: COLOR_DEEP_MIDNIGHT }}>
                        <div className="flex-shrink-0 text-center p-8 md:w-64" style={{ backgroundColor: COLOR_DEEP_MIDNIGHT }}>
                            <div className="w-32 h-32 mx-auto mb-4 relative">
                                {/* Shadow block (behind) */}
                                <div
                                    className="absolute inset-0 z-10 rounded-full"
                                    style={{ transform: 'translate(5px, 5px)' }}
                                ></div>

                                {/* Image block (front) */}
                                <div
                                    className="absolute inset-0 z-20 border-2 rounded-full overflow-hidden flex items-center justify-center"
                                    style={{ borderColor: COLOR_METALLIC_GOLD, backgroundColor: 'transparent' }}
                                >
                                    <img
                                        src="/images/AP.jpg"
                                        alt="Founder"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>

                            <p className="text-xl font-bold" style={{ color: COLOR_CLEAN_WHITE }}>Amrut Bhai Patel</p>
                            <p className="text-sm tracking-widest uppercase" style={{ color: COLOR_METALLIC_GOLD }}>Founder & Visionary</p>
                        </div>

                        <div className="flex-1 p-8 md:p-12">
                            <h3 className="text-3xl font-light mb-4" style={{ color: COLOR_PALE_BLUE_GRAY }}>
                                The Vision: Precision and Partnership
                            </h3>

                            <div
                                className="h-0.5 w-full mb-6"
                                style={{
                                    backgroundColor: COLOR_METALLIC_GOLD,
                                    backgroundImage: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.4) 50%, transparent 100%)',
                                    backgroundSize: '1000px 100%',
                                    animation: 'shimmer 5s infinite linear',
                                }}
                            ></div>

                            <blockquote className="text-lg leading-relaxed italic" style={{ color: COLOR_PALE_BLUE_GRAY }}>
                                "Our foundation is built on the simple truth: exceptional quality demands meticulous attention to detail at every step. We lead with transparency, ensuring our clients receive not just a product, but a **guarantee of performance** supported by a committed partnership."
                            </blockquote>
                        </div>
                    </div>
                </div>

                {/* Leadership Pillars Section */}
                <div className="mt-10"> 
                    <h2 className="text-left text-4xl font-bold mb-10" style={{ color: COLOR_CLEAN_WHITE }}>
                        Operational Pillars
                    </h2>

                    <div className="grid md:grid-cols-4 gap-8">
                        {
                            [
                                { icon: TrendingUp, title: "Market Foresight", text: "Strategic planning based on deep market analysis ensures client needs are always met ahead of demand.", color: COLOR_METALLIC_GOLD },
                                { icon: Users, title: "Talent & Expertise", text: "A highly trained team specializing in materials science, logistics, and regulatory affairs.", color: COLOR_NAVY_BLUE },
                                { icon: Shield, title: "Compliance Guarantee", text: "Our commitment to ethical and compliant operations mitigates all sourcing risk for you.", color: COLOR_METALLIC_GOLD },
                                { icon: Target, title: "Operational Precision", text: "Engineered logistics ensuring every delivery is accurate and perfectly timed for your needs.", color: COLOR_NAVY_BLUE },
                            ].map((pillar, index) => (
                                <div
                                    key={index}
                                    className="p-5 rounded-lg text-left border transition-all duration-300 minimal-card" 
                                    style={{
                                        backgroundColor: COLOR_CLEAN_WHITE,
                                        borderColor: COLOR_PALE_BLUE_GRAY, 
                                        boxShadow: `0 4px 12px rgba(0, 0, 0, 0.1)`, 
                                    }}
                                >
                                    <div className="flex justify-between items-center mb-2">
                                        <h3 className="text-xl font-bold uppercase tracking-wide" style={{ color: COLOR_DARK_TEXT }}>{pillar.title}</h3> 
                                        <pillar.icon className="w-6 h-6" style={{ color: pillar.color }} />
                                    </div>
                                    <div className="w-full h-0.5 mb-2" style={{ backgroundColor: pillar.color }}></div>
                                    <p className="text-sm" style={{ color: COLOR_NAVY_BLUE }}> 
                                        {pillar.text}
                                    </p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}