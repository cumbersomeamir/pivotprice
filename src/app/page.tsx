"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

// Price data for the calendar
const priceData = [
  { day: 1, price: 86, change: "+9%", count: 7 },
  { day: 2, price: 82, change: "+9%", count: 8 },
  { day: 3, price: 90, change: "+4%", count: 12 },
  { day: 4, price: 86, change: "+3%", count: 12 },
  { day: 5, price: 86, change: "+7%", count: 12 },
  { day: 6, price: 82, change: "+7%", count: 10 },
  { day: 7, price: 70, change: "+9%", count: 8 },
  { day: 8, price: 72, change: "+8%", count: 14 },
  { day: 9, price: 82, change: "+1%", count: 12 },
  { day: 10, price: 86, change: "+10%", count: 8 },
  { day: 11, price: 79, change: "+2%", count: 10 },
  { day: 12, price: 82, change: "+7%", count: 2 },
  { day: 13, price: 86, change: "+12%", count: 12 },
  { day: 14, price: 82, change: "+8%", count: 10 },
  { day: 15, price: 70, change: "+10%", count: 8 },
  { day: 16, price: 72, change: "+2%", count: 10 },
  { day: 17, price: 79, change: "+8%", count: 10 },
  { day: 18, price: 86, change: "+6%", count: 7 },
  { day: 19, price: 86, change: "+10%", count: 12 },
  { day: 20, price: 82, change: "+2%", count: 8 },
  { day: 21, price: 86, change: "+8%", count: 10 },
  { day: 22, price: 82, change: "+10%", count: 10 },
  { day: 23, price: 80, change: "+5%", count: 10 },
  { day: 24, price: 79, change: "+10%", count: 14 },
  { day: 25, price: 70, change: "+10%", count: 10 },
  { day: 26, price: 80, change: "+6%", count: 12 },
  { day: 27, price: 86, change: "+4%", count: 5 },
  { day: 28, price: 82, change: "+2%", count: 3 },
  { day: 29, price: 82, change: "+11%", count: 9 },
  { day: 30, price: 86, change: "+16%", count: 8 },
];

// Market Intelligence tabs data
const marketTabs = [
  {
    id: "pricing",
    title: "Pricing Insights",
    description:
      "Understand how your pricing strategy compares to products similar to yours in your markets.",
    image: "/images/pricing-insights.png",
  },
  {
    id: "competitive",
    title: "Competitive Benchmarking",
    description:
      "Quickly identify the fastest growing, top producing and new products entering the market.",
    image: "/images/competitive.png",
  },
  {
    id: "poi",
    title: "Point of Interest Analysis",
    description:
      "Identify emerging growth opportunities by always knowing what travelers want to see and do, and which points of interest are growing the fastest.",
    image: "/images/poi.png",
  },
];

// Partners/Backed by logos
const partners = [
  { name: "TechCrunch", logo: "TC" },
  { name: "Y Combinator", logo: "YC" },
  { name: "Sequoia", logo: "SQ" },
  { name: "a16z", logo: "a16z" },
  { name: "Stripe", logo: "Stripe" },
];

export default function Home() {
  const [activeTab, setActiveTab] = useState("pricing");

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Animated Background */}
        <div className="absolute inset-0">
          {/* Gradient Orbs */}
          <div className="absolute top-20 left-10 w-96 h-96 bg-pink-300/30 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-300/20 rounded-full blur-3xl animate-pulse delay-1000" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-pink-200/20 via-purple-200/20 to-coral-200/20 rounded-full blur-3xl" />
          
          {/* Dot Pattern */}
          <div className="absolute inset-0 dot-pattern opacity-30" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div
            initial="initial"
            animate="animate"
            variants={staggerContainer}
            className="text-center"
          >
            {/* Main Heading */}
            <motion.h1
              variants={fadeInUp}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold font-[family-name:var(--font-outfit)] leading-tight"
            >
              <span className="text-slate-900">Price smarter,</span>
              <br />
              <span className="gradient-text">grow faster,</span>
              <br />
              <span className="text-slate-900">unlock revenue</span>
            </motion.h1>

            {/* Subheading */}
            <motion.p
              variants={fadeInUp}
              className="mt-8 text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed"
            >
              PivotPrice is the first AI-powered growth platform for experience and
              attraction providers. Price with confidence, track your competitors,
              and uncover new ways to increase revenue.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={fadeInUp}
              className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link
                href="/demo"
                className="group relative px-8 py-4 bg-gradient-to-r from-pink-500 to-pink-600 text-white font-semibold rounded-full shadow-xl shadow-pink-500/30 hover:shadow-pink-500/50 hover:scale-105 transition-all duration-300 overflow-hidden"
              >
                <span className="relative z-10">Schedule a demo</span>
                <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
            </motion.div>

            {/* Backed By */}
            <motion.div variants={fadeInUp} className="mt-20">
              <p className="text-sm text-slate-400 mb-6">Backed by</p>
              <div className="flex items-center justify-center gap-8 flex-wrap">
                {partners.map((partner) => (
                  <div
                    key={partner.name}
                    className="px-6 py-3 bg-white/50 backdrop-blur-sm rounded-xl border border-pink-100 text-slate-400 font-medium hover:border-pink-300 hover:text-pink-600 transition-all cursor-default"
                  >
                    {partner.logo}
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-pink-300 rounded-full flex items-start justify-center p-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-pink-500 rounded-full"
            />
          </div>
        </motion.div>
      </section>

      {/* Pricing Intelligence Section */}
      <section id="pricing-intelligence" className="py-24 bg-gradient-to-b from-white to-pink-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold font-[family-name:var(--font-outfit)] text-slate-900 mb-6">
              Pricing intelligence
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Let our AI track and benchmark competitor pricing in real-time. Save
              hours of manual work and stay one step ahead with smarter, data-driven
              pricing strategies.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center"
          >
            <Link
              href="/trial"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white border-2 border-pink-200 text-pink-600 font-semibold rounded-full hover:bg-pink-50 hover:border-pink-400 transition-all shadow-lg shadow-pink-100"
            >
              <span>Start a 7 day trial</span>
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Price Recommendations Section */}
      <section id="recommendations" className="py-24 bg-pink-50/30 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold font-[family-name:var(--font-outfit)] text-slate-900 mb-6">
              Price recommendations that adapt to your market
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              While our AI tracks the market, it also tells you exactly what to do
              next. Get automated price recommendations that adapt to market changes
              in real-time.
            </p>
          </motion.div>

          {/* Animated Price Calendar */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Infinite scroll container */}
            <div className="overflow-hidden py-4">
              <div className="flex gap-4 animate-marquee">
                {[...priceData, ...priceData].map((item, index) => (
                  <motion.div
                    key={`${item.day}-${index}`}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="flex-shrink-0 w-32 bg-white rounded-2xl p-4 border border-pink-100 shadow-lg shadow-pink-100/50 hover:shadow-xl hover:shadow-pink-200/50 transition-all cursor-pointer"
                  >
                    <div className="text-2xl font-bold text-pink-600 mb-1">
                      {item.day}
                    </div>
                    <div className="text-xl font-semibold text-slate-900">
                      ${item.price}
                    </div>
                    <div className="text-sm text-emerald-500 font-medium">
                      {item.change} vs Comp.
                    </div>
                    <div className="text-xs text-slate-400 mt-1">
                      ({item.count})
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            
            {/* Gradient overlays */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-pink-50/80 to-transparent pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-pink-50/80 to-transparent pointer-events-none" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex justify-center mt-12"
          >
            <Link
              href="/pricing"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white border-2 border-pink-200 text-pink-600 font-semibold rounded-full hover:bg-pink-50 hover:border-pink-400 transition-all shadow-lg shadow-pink-100"
            >
              <span>Optimize your pricing</span>
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Market Intelligence Section */}
      <section id="market-insights" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold font-[family-name:var(--font-outfit)] text-slate-900 mb-6">
              Market Intelligence at your fingertips
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              PivotPrice offers advanced data and tools tailored to optimize your
              business in the markets you operate in.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Tabs */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              {marketTabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full text-left p-6 rounded-2xl transition-all duration-300 ${
                    activeTab === tab.id
                      ? "bg-gradient-to-r from-pink-500 to-pink-600 text-white shadow-xl shadow-pink-500/30"
                      : "bg-white border-2 border-pink-100 hover:border-pink-300 hover:shadow-lg"
                  }`}
                >
                  <h3
                    className={`text-xl font-bold mb-2 ${
                      activeTab === tab.id ? "text-white" : "text-slate-900"
                    }`}
                  >
                    {tab.title}
                  </h3>
                  <p
                    className={`${
                      activeTab === tab.id ? "text-pink-100" : "text-slate-500"
                    }`}
                  >
                    {tab.description}
                  </p>
                </button>
              ))}
            </motion.div>

            {/* Tab Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-pink-100 to-purple-100 rounded-3xl p-8 aspect-square flex items-center justify-center">
                <div className="text-center">
                  {activeTab === "pricing" && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-pink-500 to-pink-600 rounded-2xl flex items-center justify-center shadow-xl">
                        <svg className="w-16 h-16 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg>
                      </div>
                      <h4 className="text-2xl font-bold text-slate-900 mb-2">Pricing Insights</h4>
                      <p className="text-slate-600">Visualize your competitive position</p>
                    </motion.div>
                  )}
                  {activeTab === "competitive" && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-xl">
                        <svg className="w-16 h-16 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                        </svg>
                      </div>
                      <h4 className="text-2xl font-bold text-slate-900 mb-2">Competitive Analysis</h4>
                      <p className="text-slate-600">Track market leaders and trends</p>
                    </motion.div>
                  )}
                  {activeTab === "poi" && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-coral-500 to-rose-500 rounded-2xl flex items-center justify-center shadow-xl">
                        <svg className="w-16 h-16 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <h4 className="text-2xl font-bold text-slate-900 mb-2">Location Intelligence</h4>
                      <p className="text-slate-600">Discover growth opportunities</p>
                    </motion.div>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        {/* Decorative background */}
        <div className="absolute inset-0 bg-gradient-to-br from-pink-500 via-pink-600 to-purple-600">
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-0 left-0 w-full h-full">
              {/* Static positioned decorative circles to avoid hydration mismatch */}
              <div className="absolute w-4 h-4 bg-white/10 rounded-full top-[10%] left-[15%] animate-pulse" />
              <div className="absolute w-4 h-4 bg-white/10 rounded-full top-[25%] left-[85%] animate-pulse delay-100" />
              <div className="absolute w-4 h-4 bg-white/10 rounded-full top-[40%] left-[5%] animate-pulse delay-200" />
              <div className="absolute w-4 h-4 bg-white/10 rounded-full top-[60%] left-[70%] animate-pulse delay-300" />
              <div className="absolute w-4 h-4 bg-white/10 rounded-full top-[75%] left-[25%] animate-pulse delay-500" />
              <div className="absolute w-4 h-4 bg-white/10 rounded-full top-[85%] left-[90%] animate-pulse delay-700" />
              <div className="absolute w-3 h-3 bg-white/10 rounded-full top-[15%] left-[50%] animate-pulse delay-150" />
              <div className="absolute w-3 h-3 bg-white/10 rounded-full top-[50%] left-[35%] animate-pulse delay-400" />
              <div className="absolute w-3 h-3 bg-white/10 rounded-full top-[70%] left-[55%] animate-pulse delay-600" />
              <div className="absolute w-3 h-3 bg-white/10 rounded-full top-[30%] left-[10%] animate-pulse delay-800" />
            </div>
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-4xl sm:text-5xl font-bold font-[family-name:var(--font-outfit)] text-white mb-6">
              Experience pricing insights, made easy
            </h2>
            <p className="text-xl text-pink-100 max-w-3xl mx-auto mb-10">
              See PivotPrice&apos;s pricing intelligence platform in action. Schedule
              a demo to discover how we help tour and activity operators make
              data-driven pricing decisions.
            </p>
            <Link
              href="/demo"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-pink-600 font-bold rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all"
            >
              <span>Schedule a demo</span>
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
