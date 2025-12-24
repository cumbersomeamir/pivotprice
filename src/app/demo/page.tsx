"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const features = [
  {
    icon: "🎯",
    title: "Personalized Demo",
    description: "See how PivotPrice works for your specific market and needs",
  },
  {
    icon: "📊",
    title: "Live Data Insights",
    description: "Get real-time competitor pricing data during your demo",
  },
  {
    icon: "💬",
    title: "Expert Consultation",
    description: "Discuss your pricing challenges with our specialists",
  },
];

const bookingSoftwareOptions = [
  "Rezdy",
  "FareHarbor",
  "Peek",
  "Bokun",
  "Checkfront",
  "Regiondo",
  "TrekkSoft",
  "Xola",
  "Bookeo",
  "Other",
];

export default function DemoPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    phone: "",
    countryCode: "+1",
    location: "",
    bookingSoftware: "",
    numberOfProducts: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-white pt-20 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center max-w-md mx-auto px-4"
        >
          <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-pink-500 to-pink-600 rounded-full flex items-center justify-center">
            <svg className="w-12 h-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-3xl font-bold font-[family-name:var(--font-outfit)] text-slate-900 mb-4">
            Demo Scheduled!
          </h2>
          <p className="text-lg text-slate-600 mb-8">
            Thank you for your interest in PivotPrice. Our team will reach out within
            24 hours to confirm your demo time.
          </p>
          <Link
            href="/"
            className="inline-block px-6 py-3 bg-gradient-to-r from-pink-500 to-pink-600 text-white font-semibold rounded-full hover:shadow-lg hover:scale-105 transition-all"
          >
            Back to Home
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white pt-20">
      <section className="relative py-16 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-pink-200/30 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left Side - Info */}
            <motion.div
              initial="initial"
              animate="animate"
              variants={{
                animate: { transition: { staggerChildren: 0.1 } },
              }}
            >
              <motion.h1
                variants={fadeInUp}
                className="text-4xl sm:text-5xl font-bold font-[family-name:var(--font-outfit)] text-slate-900 mb-6"
              >
                Schedule a <span className="gradient-text">Demo</span>
              </motion.h1>
              <motion.p
                variants={fadeInUp}
                className="text-xl text-slate-600 mb-10"
              >
                See how PivotPrice can transform your pricing strategy and help
                you unlock hidden revenue.
              </motion.p>

              {/* Features */}
              <motion.div variants={fadeInUp} className="space-y-6">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-pink-100 to-pink-200 rounded-xl flex items-center justify-center text-2xl flex-shrink-0">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-1">
                        {feature.title}
                      </h3>
                      <p className="text-slate-600">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Testimonial */}
              <motion.div
                variants={fadeInUp}
                className="mt-12 p-6 bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl border border-pink-100"
              >
                <p className="text-slate-700 italic mb-4">
                  &quot;PivotPrice helped us increase our revenue by 23% in just 3
                  months. The demo showed us exactly how to optimize our
                  pricing.&quot;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-pink-600 rounded-full flex items-center justify-center text-white font-bold">
                    JD
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">Jane Davis</p>
                    <p className="text-sm text-slate-500">
                      CEO, Adventure Tours Co.
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Side - Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-3xl shadow-2xl shadow-pink-200/50 border border-pink-100 p-8"
            >
              <h2 className="text-2xl font-bold font-[family-name:var(--font-outfit)] text-slate-900 mb-6">
                Book your free demo
              </h2>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name Fields */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">
                      First Name <span className="text-pink-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2.5 rounded-xl border-2 border-pink-100 focus:border-pink-400 focus:ring-4 focus:ring-pink-100 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">
                      Last Name <span className="text-pink-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2.5 rounded-xl border-2 border-pink-100 focus:border-pink-400 focus:ring-4 focus:ring-pink-100 transition-all"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">
                    Work Email <span className="text-pink-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2.5 rounded-xl border-2 border-pink-100 focus:border-pink-400 focus:ring-4 focus:ring-pink-100 transition-all"
                  />
                </div>

                {/* Company */}
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">
                    Company <span className="text-pink-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2.5 rounded-xl border-2 border-pink-100 focus:border-pink-400 focus:ring-4 focus:ring-pink-100 transition-all"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">
                    Phone <span className="text-pink-500">*</span>
                  </label>
                  <div className="flex gap-2">
                    <select
                      name="countryCode"
                      value={formData.countryCode}
                      onChange={handleChange}
                      className="w-20 px-2 py-2.5 rounded-xl border-2 border-pink-100 focus:border-pink-400 focus:ring-4 focus:ring-pink-100 transition-all bg-white text-sm"
                    >
                      <option value="+1">+1</option>
                      <option value="+44">+44</option>
                      <option value="+91">+91</option>
                      <option value="+61">+61</option>
                      <option value="+49">+49</option>
                    </select>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="flex-1 px-4 py-2.5 rounded-xl border-2 border-pink-100 focus:border-pink-400 focus:ring-4 focus:ring-pink-100 transition-all"
                    />
                  </div>
                </div>

                {/* Location */}
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">
                    Where do you operate? <span className="text-pink-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    required
                    placeholder="e.g., Hawaii, USA"
                    className="w-full px-4 py-2.5 rounded-xl border-2 border-pink-100 focus:border-pink-400 focus:ring-4 focus:ring-pink-100 transition-all"
                  />
                </div>

                {/* Booking Software */}
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">
                    Which booking software do you use?
                  </label>
                  <select
                    name="bookingSoftware"
                    value={formData.bookingSoftware}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-xl border-2 border-pink-100 focus:border-pink-400 focus:ring-4 focus:ring-pink-100 transition-all bg-white"
                  >
                    <option value="">Select an option</option>
                    {bookingSoftwareOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 bg-gradient-to-r from-pink-500 to-pink-600 text-white font-semibold rounded-full shadow-lg shadow-pink-500/30 hover:shadow-pink-500/50 hover:scale-[1.02] transition-all disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="animate-spin w-5 h-5" viewBox="0 0 24 24" fill="none">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Scheduling...
                    </span>
                  ) : (
                    "Schedule Demo"
                  )}
                </button>

                <p className="text-xs text-slate-500 text-center">
                  By submitting, you agree to our{" "}
                  <Link href="/privacy" className="text-pink-600 hover:underline">
                    Privacy Policy
                  </Link>{" "}
                  and{" "}
                  <Link href="/terms" className="text-pink-600 hover:underline">
                    Terms of Service
                  </Link>
                </p>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

