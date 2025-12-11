import React from 'react';

const CTA = () => {
    // Color Palette Reference
    const colors = {
        'pale-blue-gray': '#DBE1E8',        // Primary Background and Card Base
        'deep-midnight': '#0E2333',         // Primary Text / Button Text on Hover
        'muted-teal': '#4A889A',            // Primary Button Color (Unpressed)
        'metallic-gold-light': '#C49A6E',   // Subtle Accent / Button Color (Pressed)
    };

    // Custom shadow formula for the Card's "Raised" effect
    const neumorphicCardShadow = {
        boxShadow: `
            8px 8px 16px rgba(168, 179, 191, 0.5),      /* Cool Gray shadow (Darker) */
            -8px -8px 16px rgba(255, 255, 255, 0.8)     /* White shadow (Lighter) */
        `,
    };

    // Raised shadow for the button base:
    const buttonRaisedShadow = `
        4px 4px 8px rgba(168, 179, 191, 0.5), 
        -4px -4px 8px rgba(255, 255, 255, 0.8)
    `;

    // Inset shadow for the button pressed state:
    const buttonPressedShadow = `
        inset 4px 4px 8px rgba(168, 179, 191, 0.7), 
        inset -4px -4px 8px rgba(255, 255, 255, 0.5)
    `;


    return (
        // Outer Container: DECREASED HEIGHT (removed min-h-screen and reduced py-*)
        <div className="bg-[#DBE1E8] py-16 flex items-center justify-center">
            <div className="mx-auto max-w-4xl px-6 lg:px-8">

                {/* Neumorphic Card Container */}
                <div
                    className="relative isolate rounded-3xl p-12 text-center transition-all duration-500"
                    style={neumorphicCardShadow}
                >

                    {/* Subtle Accent Line */}
                    <div className="h-0.5 w-16 bg-[#C49A6E] mx-auto mb-5"></div>

                    {/* Headline: Decreased Font Size */}
                    <h2 className="mx-auto text-3xl font-extralight tracking-tight text-[#0E2333] sm:text-4xl lg:text-5xl">
                       See Our Track Record.
                    </h2>

                    {/* CTA Button Container (Simplified Logic and Decreased Font Size) */}
                    <div className="mt-8 flex items-center justify-center">
                        <a
                            href="#"
                            className="group inline-flex items-center rounded-full px-8 py-3 text-base font-semibold 
                            bg-[#4A889A] text-[#DBE1E8] transition-all duration-300 transform border-none
                            hover:text-[#0E2333] hover:bg-[#C49A6E]"
                            // Apply custom shadow styling for Neumorphism
                            style={{
                                transition: 'all 0.3s ease-in-out',
                                boxShadow: buttonRaisedShadow
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.boxShadow = buttonPressedShadow; // Apply inset shadow
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.boxShadow = buttonRaisedShadow; // Restore raised shadow
                            }}
                        >
                           View Partner Success Stories (or Request Case Study)

                            {/* Arrow: Geometric slide animation (Decreased size) */}
                            <svg
                                className="ml-3 h-5 w-5 transition-transform duration-300 group-hover:translate-x-3"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CTA;