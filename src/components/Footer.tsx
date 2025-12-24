"use client";

import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { name: "Master Services Agreement", href: "/terms" },
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Cookie Policy", href: "/cookies" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <footer className="relative bg-gradient-to-b from-white to-pink-50/50 border-t border-pink-100">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-pink-200/30 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 right-0 w-60 h-60 bg-purple-200/20 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Left Side - Links */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 md:gap-6">
            {footerLinks.map((link, index) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm text-slate-500 hover:text-pink-600 transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Right Side - Logo and Copyright */}
          <div className="flex items-center gap-4">
            <p className="text-sm text-slate-400">
              PivotPrice. All rights reserved. © {currentYear}
            </p>
            <Link
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white rounded-full shadow-md hover:shadow-lg hover:scale-110 transition-all border border-pink-100"
            >
              <svg
                className="w-5 h-5 text-slate-600 hover:text-pink-600 transition-colors"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

