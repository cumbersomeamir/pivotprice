"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const cookieTypes = [
  {
    type: "Essential Cookies",
    description: "Necessary for website functionality and security.",
    icon: "🔐",
    required: true,
  },
  {
    type: "Performance Cookies",
    description:
      "Help us understand how visitors use our website and services to enhance performance.",
    icon: "📈",
    required: false,
  },
  {
    type: "Functional Cookies",
    description:
      "Allow us to remember your preferences and enhance user experience.",
    icon: "⚙️",
    required: false,
  },
  {
    type: "Targeting Cookies",
    description:
      "Used to deliver personalized content and ads relevant to your interests.",
    icon: "🎯",
    required: false,
  },
];

const sections = [
  {
    title: "1. What Are Cookies?",
    content:
      "Cookies are small text files placed on your device to collect and store information when you visit a website. They help websites remember your preferences and improve your experience.",
  },
  {
    title: "3. Third-Party Cookies",
    content:
      "We use third-party cookies from trusted providers like Google Analytics to understand user interactions. These third-party services have their own privacy policies available on their respective websites.",
  },
  {
    title: "4. Managing Cookies",
    content:
      "You can manage or disable cookies through your browser settings. However, disabling cookies may affect the functionality and user experience on our website.",
  },
  {
    title: "5. Consent to Cookies",
    content:
      "By using our website, you consent to the placement of cookies on your device, as described in this policy. You may withdraw your consent at any time by adjusting your browser settings.",
  },
  {
    title: "6. Changes to This Policy",
    content:
      "We may periodically update this Cookie Policy. All changes will be published here, with the effective date noted above.",
  },
];

export default function CookiesPage() {
  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero Section */}
      <section className="relative py-16 overflow-hidden bg-gradient-to-b from-pink-50/50 to-white">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            animate="animate"
            variants={{
              animate: { transition: { staggerChildren: 0.1 } },
            }}
            className="text-center mb-12"
          >
            <motion.h1
              variants={fadeInUp}
              className="text-4xl sm:text-5xl font-bold font-[family-name:var(--font-outfit)] text-slate-900 mb-4"
            >
              Cookie Policy
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-slate-500">
              Last updated: April 1, 2025
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-lg text-slate-600 mb-8 pb-8 border-b border-pink-100">
              This Cookie Policy describes how PivotPrice (&quot;we,&quot; &quot;us,&quot;
              &quot;our&quot;) uses cookies and similar technologies on pivotprice.io.
            </p>

            {/* What Are Cookies */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold font-[family-name:var(--font-outfit)] text-slate-900 mb-4">
                1. What Are Cookies?
              </h2>
              <p className="text-slate-600">
                Cookies are small text files placed on your device to collect and
                store information when you visit a website. They help websites
                remember your preferences and improve your experience.
              </p>
            </div>

            {/* Cookie Types */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold font-[family-name:var(--font-outfit)] text-slate-900 mb-6">
                2. Types of Cookies We Use
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {cookieTypes.map((cookie, index) => (
                  <motion.div
                    key={cookie.type}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="p-6 rounded-2xl border border-pink-100 hover:border-pink-300 hover:shadow-lg transition-all"
                  >
                    <div className="flex items-start gap-4">
                      <div className="text-3xl">{cookie.icon}</div>
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="font-semibold text-slate-900">
                            {cookie.type}
                          </h3>
                          {cookie.required && (
                            <span className="px-2 py-0.5 bg-pink-100 text-pink-600 text-xs font-medium rounded-full">
                              Required
                            </span>
                          )}
                        </div>
                        <p className="text-sm text-slate-600">
                          {cookie.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Other Sections */}
            {sections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="mb-10"
              >
                <h2 className="text-2xl font-bold font-[family-name:var(--font-outfit)] text-slate-900 mb-4">
                  {section.title}
                </h2>
                <p className="text-slate-600">{section.content}</p>
              </motion.div>
            ))}

            {/* Contact */}
            <div className="mt-12 pt-8 border-t border-pink-100">
              <h2 className="text-2xl font-bold font-[family-name:var(--font-outfit)] text-slate-900 mb-4">
                7. Contact Us
              </h2>
              <p className="text-slate-600">
                For any questions regarding this Cookie Policy, please reach out
                to:{" "}
                <a
                  href="mailto:privacy@pivotprice.io"
                  className="text-pink-600 hover:text-pink-700 font-medium"
                >
                  privacy@pivotprice.io
                </a>
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

