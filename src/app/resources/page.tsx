"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const resources = [
  {
    category: "Guides",
    items: [
      {
        title: "The Complete Guide to Dynamic Pricing",
        description:
          "Learn how to implement dynamic pricing strategies that maximize revenue without sacrificing customer experience.",
        icon: "📚",
        readTime: "12 min read",
        gradient: "from-pink-500 to-pink-600",
      },
      {
        title: "Competitive Analysis Playbook",
        description:
          "A step-by-step guide to analyzing your competitors and positioning your pricing effectively.",
        icon: "🎯",
        readTime: "8 min read",
        gradient: "from-purple-500 to-purple-600",
      },
      {
        title: "Seasonal Pricing Strategies",
        description:
          "Master the art of adjusting prices based on seasonality and demand patterns.",
        icon: "📅",
        readTime: "10 min read",
        gradient: "from-rose-500 to-rose-600",
      },
    ],
  },
  {
    category: "Case Studies",
    items: [
      {
        title: "How Adventure Tours Increased Revenue by 40%",
        description:
          "Discover how a leading tour operator used PivotPrice to transform their pricing strategy.",
        icon: "🏔️",
        readTime: "6 min read",
        gradient: "from-emerald-500 to-emerald-600",
      },
      {
        title: "Theme Park Success Story",
        description:
          "See how a regional theme park optimized ticket pricing during peak seasons.",
        icon: "🎢",
        readTime: "5 min read",
        gradient: "from-amber-500 to-amber-600",
      },
    ],
  },
  {
    category: "Webinars",
    items: [
      {
        title: "AI in Pricing: What You Need to Know",
        description:
          "Join our experts as they discuss how AI is revolutionizing pricing in the experience industry.",
        icon: "🎥",
        readTime: "45 min",
        gradient: "from-blue-500 to-blue-600",
        upcoming: true,
      },
      {
        title: "Pricing Psychology Deep Dive",
        description:
          "Understand the psychology behind consumer pricing perception and how to leverage it.",
        icon: "🧠",
        readTime: "30 min",
        gradient: "from-indigo-500 to-indigo-600",
      },
    ],
  },
];

const featuredResource = {
  title: "2024 Pricing Intelligence Report",
  description:
    "Our annual report analyzing pricing trends across 10,000+ experience providers. Get insights into average price movements, competitive dynamics, and emerging strategies.",
  icon: "📊",
  gradient: "from-pink-500 via-purple-500 to-indigo-500",
};

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-pink-200/30 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            animate="animate"
            variants={{
              animate: { transition: { staggerChildren: 0.1 } },
            }}
            className="text-center mb-16"
          >
            <motion.h1
              variants={fadeInUp}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold font-[family-name:var(--font-outfit)] text-slate-900 mb-6"
            >
              Resources & <span className="gradient-text">Insights</span>
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-xl text-slate-600 max-w-3xl mx-auto"
            >
              Explore our collection of guides, case studies, and insights to
              master pricing intelligence and grow your revenue.
            </motion.p>
          </motion.div>

          {/* Featured Resource */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div
              className={`relative overflow-hidden rounded-3xl bg-gradient-to-r ${featuredResource.gradient} p-1`}
            >
              <div className="relative bg-white rounded-[22px] p-8 sm:p-12 flex flex-col lg:flex-row items-center gap-8">
                <div className="w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br from-pink-100 to-purple-100 rounded-2xl flex items-center justify-center text-5xl sm:text-6xl flex-shrink-0">
                  {featuredResource.icon}
                </div>
                <div className="text-center lg:text-left flex-1">
                  <span className="inline-block px-3 py-1 bg-pink-100 text-pink-600 text-sm font-medium rounded-full mb-4">
                    Featured Resource
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-bold font-[family-name:var(--font-outfit)] text-slate-900 mb-3">
                    {featuredResource.title}
                  </h2>
                  <p className="text-slate-600 mb-6">
                    {featuredResource.description}
                  </p>
                  <button className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-pink-500 to-pink-600 text-white font-semibold rounded-full shadow-lg shadow-pink-500/30 hover:shadow-pink-500/50 hover:scale-105 transition-all">
                    Download Report
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-20 bg-gradient-to-b from-white to-pink-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {resources.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="mb-16"
            >
              <h2 className="text-2xl font-bold font-[family-name:var(--font-outfit)] text-slate-900 mb-8">
                {category.category}
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.items.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                    className="group bg-white rounded-2xl border border-pink-100 hover:border-pink-300 hover:shadow-xl hover:shadow-pink-100/50 transition-all overflow-hidden"
                  >
                    <div className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div
                          className={`w-14 h-14 bg-gradient-to-br ${item.gradient} rounded-xl flex items-center justify-center text-2xl shadow-lg group-hover:scale-110 transition-transform`}
                        >
                          {item.icon}
                        </div>
                        {item.upcoming && (
                          <span className="px-2 py-1 bg-pink-100 text-pink-600 text-xs font-medium rounded-full">
                            Upcoming
                          </span>
                        )}
                      </div>
                      <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-pink-600 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-slate-600 text-sm mb-4">
                        {item.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-slate-400">
                          {item.readTime}
                        </span>
                        <button className="text-pink-600 font-medium text-sm hover:text-pink-700 flex items-center gap-1">
                          Read more
                          <svg
                            className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gradient-to-br from-pink-500 via-pink-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-3xl sm:text-4xl font-bold font-[family-name:var(--font-outfit)] text-white mb-4">
              Stay ahead of the curve
            </h2>
            <p className="text-xl text-pink-100 mb-8">
              Subscribe to our newsletter for the latest pricing insights and
              strategies.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-full border-0 focus:ring-4 focus:ring-white/30 transition-all"
              />
              <button
                type="submit"
                className="px-8 py-4 bg-white text-pink-600 font-bold rounded-full hover:scale-105 transition-all shadow-xl"
              >
                Subscribe
              </button>
            </form>
            <p className="text-sm text-pink-200 mt-4">
              No spam, unsubscribe at any time.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

