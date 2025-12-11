"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const colors = {
    bgWhite: "bg-[#FFFFFF]",
    textDarkGray: "text-[#1F2937]",
    textMainBlue: "text-[#0E6BA8]",
    bgSandMain: "bg-[#C49A6E]",
    bgSandDark: "bg-[#8C6F4F]",
    textWhite: "text-[#FFFFFF]",
    borderLightBlue: "border-[#E1F0F8]",
  };

  // Handle scroll event
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Networks", href: "/networks" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 left-1/2 -translate-x-1/2 z-50 transition-all duration-400 border-b ${colors.bgWhite} ${colors.borderLightBlue} ${
        scrolled
          ? "py-3 sm:py-4 md:py-6 shadow-lg rounded-2xl sm:rounded-3xl w-[90%] sm:w-[95%]"
          : "py-4 sm:py-6 md:py-8 w-full"
      }`}
    >
      <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-16">
        <nav className="grid grid-cols-3 items-center gap-2 md:gap-0">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-start z-10 h-[25px] sm:h-[30px]"
          >
            <Link href="/" className="flex items-center justify-center h-full">
              <img
                src="/images/logo.png"
                alt="Company Logo"
                className={`object-contain transition-transform duration-300 ${
                  scrolled
                    ? "w-[65px] sm:w-[90px] md:w-[168px]"
                    : "w-[75px] sm:w-[110px] md:w-[210px] lg:w-[250px]"
                }`}
              />
            </Link>
          </motion.div>

          {/* Company Name */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center items-center"
          >
            <Link href="/">
              <div
                className={`font-serif font-bold text-center transition-all duration-300 whitespace-nowrap ${
                  scrolled
                    ? "text-[10px] xs:text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl"
                    : "text-[10px] xs:text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl"
                }`}
                style={{ color: "#1F2937" }}
              >
                ROYAL SAND CORPORATION
              </div>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="flex justify-end items-center">
            <ul className="hidden md:flex space-x-1 lg:space-x-2 xl:space-x-4 2xl:space-x-6 font-bold">
              {navItems.map((item, i) => (
                <motion.li
                  key={item.name}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
                  className="relative group cursor-pointer"
                >
                  <Link href={item.href}>
                    <motion.span
                      className={`font-sans text-[10px] lg:text-xs xl:text-sm tracking-wider whitespace-nowrap inline-block ${colors.textDarkGray}`}
                      whileHover={{ scale: 1.05, y: -2 }}
                      transition={{ type: "spring", stiffness: 300, damping: 15 }}
                    >
                      {item.name}
                      <motion.span
                        className={`absolute bottom-0 left-0 right-0 h-0.5 ${colors.textMainBlue}`}
                        initial={{ scaleX: 0 }}
                        whileHover={{ scaleX: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                    </motion.span>
                  </Link>
                </motion.li>
              ))}
            </ul>

            {/* Mobile Menu Toggle */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              className={`md:hidden text-xl sm:text-2xl z-50 p-1 ${colors.textDarkGray}`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? "✕" : "☰"}
            </motion.button>
          </div>
        </nav>

        {/* Mobile Menu */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{
            opacity: mobileMenuOpen ? 1 : 0,
            y: mobileMenuOpen ? 0 : -20,
          }}
          transition={{ duration: 0.4 }}
          className={`md:hidden transition-all duration-300 ${
            mobileMenuOpen
              ? "max-h-96 opacity-100 pt-2"
              : "max-h-0 opacity-0 overflow-hidden"
          } ${colors.bgWhite} text-right pr-4 sm:pr-6`}
        >
          <ul className="py-3 space-y-3">
            {navItems.map((item, i) => (
              <motion.li
                key={item.name}
                initial={{ opacity: 0, x: 20 }}
                animate={{
                  opacity: mobileMenuOpen ? 1 : 0,
                  x: mobileMenuOpen ? 0 : 20,
                }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ x: -8 }}
              >
                <Link
                  href={item.href}
                  className={`font-sans block py-2 text-lg ${colors.textDarkGray}`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </motion.header>
  );
}
