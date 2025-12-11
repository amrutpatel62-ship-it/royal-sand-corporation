"use client";
import React, { useState } from 'react';

const CTA = () => {
    const [isHovered, setIsHovered] = useState(false);

    const colors = {
        'pale-blue-gray': '#DBE1E8',
        'deep-midnight': '#0E2333',
        'muted-teal': '#4A889A',
        'metallic-gold-light': '#C49A6E',
    };

    const neumorphicCardShadow = {
        boxShadow:
            "8px 8px 16px rgba(168, 179, 191, 0.5), -8px -8px 16px rgba(255, 255, 255, 0.8)",
    };

    const buttonRaisedShadow =
        "4px 4px 8px rgba(168, 179, 191, 0.5), -4px -4px 8px rgba(255, 255, 255, 0.8)";

    const buttonPressedShadow =
        "inset 4px 4px 8px rgba(168, 179, 191, 0.7), inset -4px -4px 8px rgba(255, 255, 255, 0.5)";

    return (
        <div className="bg-[#DBE1E8] py-16 flex items-center justify-center">
            <div className="mx-auto max-w-4xl px-6 lg:px-8">
                <div
                    className="relative isolate rounded-3xl p-12 text-center transition-all duration-500"
                    style={neumorphicCardShadow}
                >
                    <div className="h-0.5 w-16 bg-[#C49A6E] mx-auto mb-5"></div>

                    <h2 className="mx-auto text-3xl font-extralight tracking-tight text-[#0E2333] sm:text-4xl lg:text-5xl">
                        Need a Custom Grade?
                    </h2>

                    <div className="mt-8 flex items-center justify-center">
                        <a
                            href="#"
                            className="group inline-flex items-center rounded-full px-8 py-3 text-base font-semibold 
                            bg-[#4A889A] text-[#DBE1E8] transition-all duration-300 transform border-none
                            hover:text-[#0E2333] hover:bg-[#C49A6E]"
                            style={{
                                transition: "all 0.3s ease-in-out",
                                boxShadow: isHovered ? buttonPressedShadow : buttonRaisedShadow,
                            }}
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                        >
                            Contact Our Technical Sales Team

                            <svg
                                className="ml-3 h-5 w-5 transition-transform duration-300 group-hover:translate-x-3"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                                />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CTA;