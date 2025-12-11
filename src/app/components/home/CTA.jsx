import React from 'react';
import { ArrowRight } from 'lucide-react'; 

const COLOR_PALE_BLUE_GRAY = '#DBE1E8';
const COLOR_NAVY_BLUE = '#15324A';
const COLOR_MUTED_TEAL = '#4A889A';
const COLOR_CLEAN_WHITE = '#FFFFFF';

export default function SecondaryCTA() {
  return (
    <section className="py-20 sm:py-28" style={{ backgroundColor: COLOR_PALE_BLUE_GRAY }}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <h2 
          className="text-3xl sm:text-4xl lg:text-5xl font-sans font-bold tracking-tight mb-8"
          style={{ color: COLOR_NAVY_BLUE }}
        >
          Ready to Scale Your Supply?
        </h2>

        <p className="text-lg mb-10" style={{ color: COLOR_NAVY_BLUE }}>
          Connect with our experts to discuss your project scale and receive a bespoke quote.
        </p>

        <div className="mt-8">
          <a
            href="#" 
            className="group inline-flex items-center justify-center 
                       px-10 py-4 border-2 border-transparent rounded-lg 
                       text-base font-semibold uppercase 
                       shadow-md transform transition-all duration-300 
                       hover:shadow-lg hover:-translate-y-0.5"
            style={{ 
              backgroundColor: COLOR_MUTED_TEAL, 
              color: COLOR_CLEAN_WHITE, 
            }}
          >
            <span className="relative z-10">
              Request a Free Consultation and Quote
            </span>
            
            {/* Lucide Arrow icon */}
            <ArrowRight 
              className="ml-3 w-5 h-5 relative z-10 transition-transform duration-300 group-hover:translate-x-1"
              aria-hidden="true"
            />
          </a>
        </div>
      </div>
    </section>
  );
}