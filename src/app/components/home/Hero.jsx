"use client";

import React, { useState, useEffect } from 'react';
import { ArrowRight, Award, Shield, Truck } from 'lucide-react';

export default function HeroSection() {
  const [bgLoaded, setBgLoaded] = useState(false);

  useEffect(() => {
    // Ensure this only runs on client after hydration
    setBgLoaded(true);
  }, []);

  return (
    <section className="min-h-[50vh] relative">
      <div className="absolute inset-0 opacity-50">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://cdn.britannica.com/32/185632-138-B842D4F6/formation-sand-quartz-role-processes-weathering-grains.jpg?w=800&h=450&c=crop')`,
            backgroundAttachment: 'fixed',
          }}
        />
      </div>

      <div className="relative overflow-hidden pt-24 md:pt-0">
        <div className="relative max-w-7xl mx-auto px-6 pt-20 pb-16 md:pt-28 md:pb-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center space-x-2 bg-blue-50 border border-blue-200 rounded-full px-4 py-3">
                <Award className="w-4 h-4 text-green-600" />
                <span className="text-sm font-semibold text-blue-900">Certified & Compliant</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight">
                Premium Sand for
                <span className="block text-blue-950 mt-2">World-Class Construction.</span>
              </h1>

              <p className="text-lg text-gray-700 leading-relaxed max-w-xl">
                From riverbed to construction site — delivering{' '}
                <span className="font-semibold text-gray-800">naturally washed</span>,{' '}
                <span className="font-semibold text-gray-800">graded river sand</span> that meets the highest industry standards for strength and durability.
              </p>

              <div className="flex flex-wrap gap-6 pt-6 border-t border-gray-200">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center">
                    <Shield className="w-6 h-6 text-blue-900" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-gray-800">Ethical Sourcing</div>
                    <div className="text-xs text-gray-500">100% Compliant</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center">
                    <Truck className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-gray-800">Reliable Supply</div>
                    <div className="text-xs text-gray-500">On-Time Delivery</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Visual */}
            <div className="relative hidden md:block">
              <div className="relative">
                <div className="absolute -top-8 -right-8 w-72 h-72 bg-gradient-to-br from-amber-100 to-amber-50 rounded-3xl transform rotate-6"></div>
                <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-gradient-to-br from-blue-100 to-blue-50 rounded-3xl transform -rotate-6"></div>

                {/* Hydration-safe background */}
                {bgLoaded && (
                  <div
                    className="relative bg-cover bg-center rounded-2xl shadow-2xl overflow-hidden h-80"
                    style={{
                      backgroundImage: "url('/images/hero2.jpg')",
                    }}
                  >
                    <div className="absolute inset-0"></div>
                    <div className="absolute inset-0 flex items-center justify-center z-20">
                      <div className="text-center text-white p-8">
                        <div className="text-5xl font-bold mb-2">River Sand</div>
                        <div className="text-base opacity-90">Naturally Processed | Construction Ready</div>
                      </div>
                    </div>
                  </div>
                )}

                <div className="absolute -bottom-4 left-8 bg-white rounded-xl shadow-xl p-6 border border-gray-100">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <Award className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-gray-800">500+</div>
                      <div className="text-sm text-gray-500">Projects Delivered</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path
              d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
              fill="#1F2937"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
