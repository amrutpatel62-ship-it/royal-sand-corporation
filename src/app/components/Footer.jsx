"use client";

import React, { useState, useEffect } from 'react';
import { FaLinkedin, FaTwitter, FaFacebookF, FaEnvelope, FaPhone, FaMapMarkerAlt, FaChevronRight } from 'react-icons/fa';
import Link from "next/link";

const Footer = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const currentYear = new Date().getFullYear();
    const companyName = 'Royal Sand Corporation';
    const missionStatement = 'A brief mission statement explaining our unwavering commitment to quality materials and logistical excellence. We strive to be the most reliable and trusted supplier in the construction industry, ensuring project success from the ground up.';
    const officeNumber = '+91 9913264409';
    const professionalEmail = 'amrutpatel62@gmail.com';
    const fullAddress = '16, Ganesh Vivan, C link road, Radhanpur road, Panchot, Mahesana, Gujarat - 384002';

    const quickLinks = [
        { name: 'Home', url: '/' },
        { name: 'About Us', url: '#about' },
        { name: 'Services', url: '#services' },
        { name: 'Networks', url: '#networks' },
        { name: 'Contact Us', url: '#contact' },
    ];

    return (
        // --- ADDED THE SOLID BACKGROUND COLOR CLASS HERE ---
        <footer className="relative bg-[url('/images/footer.jpg')] bg-cover bg-center bg-no-repeat text-[#DBE1E8] shadow-xl">
            <div className="absolute inset-0 bg-black/70"></div>
            <div className="relative w-full mx-auto px-4 sm:px-6 lg:px-8 py-14">

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 border-b border-[#C49A6E] pb-12 mb-8">

                    {/* Column 1: Company Name & Mission */}
                    <div className="lg:col-span-2">
                        <div className="mb-8">
                            {/* COMPANY NAME TEXT */}
                            <Link href="/">
                                <h2 className="text-4xl sm:text-5xl font-extrabold text-[#C49A6E] tracking-tight hover:text-[#4A889A] transition-colors duration-300">
                                    {companyName}
                                </h2>
                            </Link>
                        </div>

                        {/* Content size increased to medium */}
                        <p className="text-base leading-relaxed mb-6 text-[#A8B3BF] pr-4">
                            {missionStatement}
                        </p>

                        <div className="flex space-x-5 mt-6">
                            {/* Social Media Icons remain stylish */}
                            <a href="#" aria-label="LinkedIn" className="w-11 h-11 flex items-center justify-center bg-[#15324A] text-[#C49A6E] rounded-full hover:bg-[#C49A6E] hover:text-[#0E2333] transition-all duration-300">
                                <FaLinkedin size={20} />
                            </a>
                            <a href="#" aria-label="Twitter" className="w-11 h-11 flex items-center justify-center bg-[#15324A] text-[#C49A6E] rounded-full hover:bg-[#C49A6E] hover:text-[#0E2333] transition-all duration-300">
                                <FaTwitter size={20} />
                            </a>
                            <a href="#" aria-label="Facebook" className="w-11 h-11 flex items-center justify-center bg-[#15324A] text-[#C49A6E] rounded-full hover:bg-[#C49A6E] hover:text-[#0E2333] transition-all duration-300">
                                <FaFacebookF size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div>
                        {/* Title size increased to text-xl */}
                        <h4 className="text-xl font-bold text-[#F7F7F7] mb-6 uppercase tracking-widest border-b border-[#C49A6E] pb-3">
                            Quick Links
                        </h4>
                        <ul className="space-y-4"> 
                            {quickLinks.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.url}
                                        className="flex items-center text-base text-[#DBE1E8] hover:text-[#C49A6E] transition duration-200"
                                        title={link.name}
                                    >
                                        <FaChevronRight className="w-3 h-3 mr-3 text-[#C49A6E] flex-shrink-0" />
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Contact Details */}
                    <div>
                        {/* Title size increased to text-xl */}
                        <h4 className="text-xl font-bold text-[#F7F7F7] mb-6 uppercase tracking-widest border-b border-[#C49A6E] pb-3">
                            Get In Touch
                        </h4>
                        <ul className="space-y-6"> {/* Increased spacing */}
                            {/* Address Detail */}
                            <li className="flex items-start">
                                <FaMapMarkerAlt className="flex-shrink-0 w-6 h-6 mr-3 mt-1 text-[#C49A6E]" />
                                <div>
                                    <span className="font-semibold text-[#DBE1E8] block text-base">Our Location</span>
                                    <p className="text-sm text-[#A8B3BF] leading-relaxed">{fullAddress}</p>
                                </div>
                            </li>
                            {/* Phone Detail */}
                            <li className="flex items-center">
                                <FaPhone className="flex-shrink-0 w-6 h-6 mr-3 text-[#C49A6E]" />
                                <div>
                                    <span className="font-semibold text-[#DBE1E8] block text-base">Call Us</span>
                                    {/* Link text size increased */}
                                    <a href={`tel:${officeNumber}`} className="text-sm text-[#A8B3BF] hover:text-[#4A889A] transition-colors">{officeNumber}</a>
                                </div>
                            </li>
                            {/* Email Detail */}
                            <li className="flex items-center">
                                <FaEnvelope className="flex-shrink-0 w-6 h-6 mr-3 text-[#C49A6E]" />
                                <div>
                                    <span className="font-semibold text-[#DBE1E8] block text-base">Email Us</span>
                                    {/* Link text size increased */}
                                    <a href={`mailto:${professionalEmail}`} className="text-sm text-[#A8B3BF] hover:text-[#4A889A] transition-colors">{professionalEmail}</a>
                                </div>
                            </li>
                        </ul>
                    </div>

                </div>

                <div className="text-center md:flex md:justify-between md:items-center text-sm text-[#A8B3BF] ">
                    <p>
                        Copyright &copy; {currentYear} | {companyName}. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
