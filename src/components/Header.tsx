"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProductOpen, setIsProductOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Product", href: "#", hasDropdown: true },
    { name: "About", href: "/about" },
    { name: "Resources", href: "/resources" },
  ];

  const productItems = [
    {
      title: "Pricing Intelligence",
      description: "AI-powered competitor tracking and benchmarking",
      icon: "📊",
      href: "/#pricing-intelligence",
    },
    {
      title: "Price Recommendations",
      description: "Automated pricing suggestions that adapt to market",
      icon: "💡",
      href: "/#recommendations",
    },
    {
      title: "Market Insights",
      description: "Deep analytics on market trends and opportunities",
      icon: "🎯",
      href: "/#market-insights",
    },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 backdrop-blur-xl shadow-lg shadow-pink-100/50"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative w-10 h-10 bg-gradient-to-br from-pink-500 to-pink-600 rounded-xl flex items-center justify-center shadow-lg shadow-pink-500/30 group-hover:shadow-pink-500/50 transition-all duration-300 group-hover:scale-105">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                className="text-white"
              >
                <path
                  d="M12 2L2 7L12 12L22 7L12 2Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M2 17L12 22L22 17"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M2 12L12 17L22 12"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <span className="text-xl font-bold font-[family-name:var(--font-outfit)] bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
              PivotPrice
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <div key={item.name} className="relative">
                {item.hasDropdown ? (
                  <button
                    onClick={() => setIsProductOpen(!isProductOpen)}
                    onMouseEnter={() => setIsProductOpen(true)}
                    className="flex items-center gap-1 px-4 py-2 text-slate-600 hover:text-pink-600 font-medium transition-colors rounded-full hover:bg-pink-50"
                  >
                    {item.name}
                    <svg
                      className={`w-4 h-4 transition-transform ${
                        isProductOpen ? "rotate-180" : ""
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                ) : (
                  <Link
                    href={item.href}
                    className="px-4 py-2 text-slate-600 hover:text-pink-600 font-medium transition-colors rounded-full hover:bg-pink-50"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}

            <Link
              href="/login"
              className="flex items-center gap-2 px-4 py-2 text-slate-600 hover:text-pink-600 font-medium transition-colors rounded-full hover:bg-pink-50"
            >
              Login
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </Link>
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/login"
              className="flex items-center gap-2 px-5 py-2.5 text-slate-700 font-medium transition-all rounded-full border-2 border-slate-200 hover:border-pink-300 hover:bg-pink-50"
            >
              Login
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </Link>
            <Link
              href="/demo"
              className="px-6 py-2.5 bg-gradient-to-r from-pink-500 to-pink-600 text-white font-medium rounded-full shadow-lg shadow-pink-500/30 hover:shadow-pink-500/50 hover:scale-105 transition-all"
            >
              Schedule a demo
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-xl hover:bg-pink-50 transition-colors"
          >
            <svg
              className="w-6 h-6 text-slate-700"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Product Dropdown */}
        <AnimatePresence>
          {isProductOpen && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.2 }}
              className="absolute left-1/2 -translate-x-1/2 mt-2 w-[480px] bg-white rounded-2xl shadow-2xl shadow-pink-200/50 border border-pink-100 p-4 hidden md:block"
              onMouseLeave={() => setIsProductOpen(false)}
            >
              <div className="grid gap-2">
                {productItems.map((item) => (
                  <Link
                    key={item.title}
                    href={item.href}
                    className="flex items-start gap-4 p-4 rounded-xl hover:bg-pink-50 transition-colors group"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-pink-100 to-pink-200 rounded-xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-800 group-hover:text-pink-600 transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-sm text-slate-500">{item.description}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-pink-100"
          >
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.hasDropdown ? "#" : item.href}
                  className="block px-4 py-3 text-slate-700 font-medium hover:text-pink-600 hover:bg-pink-50 rounded-xl transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 space-y-3 border-t border-pink-100">
                <Link
                  href="/login"
                  className="block w-full px-4 py-3 text-center text-slate-700 font-medium border-2 border-slate-200 rounded-full hover:border-pink-300 hover:bg-pink-50 transition-all"
                >
                  Login
                </Link>
                <Link
                  href="/demo"
                  className="block w-full px-4 py-3 text-center text-white font-medium bg-gradient-to-r from-pink-500 to-pink-600 rounded-full shadow-lg shadow-pink-500/30"
                >
                  Schedule a demo
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;

