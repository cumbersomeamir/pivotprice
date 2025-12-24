"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const sections = [
  {
    title: "1. Information We Collect",
    content: `We collect several types of information from and about users of our platform:`,
    items: [
      "Personal Information: Name, email address, phone number, and other contact details when you register or subscribe to our services.",
      "Payment Information: Financial data required for transactions and subscriptions.",
      "Usage Data: Information on how you interact with our website, platform, and products.",
      "Technical Information: IP address, browser type, operating system, and device information.",
    ],
  },
  {
    title: "2. How We Use Your Information",
    content: "We use your personal data to:",
    items: [
      "Provide and maintain our services.",
      "Process payments and manage transactions.",
      "Improve our products and user experience.",
      "Communicate with you regarding updates, promotions, or support.",
      "Comply with legal obligations.",
    ],
  },
  {
    title: "3. Sharing of Information",
    content: "We may share your personal data:",
    items: [
      "With third-party service providers essential for our operations (e.g., payment processors, analytics providers).",
      "To comply with applicable laws or respond to legal requests.",
      "In connection with a merger, acquisition, or sale of assets.",
    ],
  },
  {
    title: "4. Security of Your Data",
    content:
      "We implement robust security measures to protect your personal information from unauthorized access, alteration, or disclosure. These measures include encryption, secure servers, and regular security audits.",
  },
  {
    title: "5. Your Data Protection Rights",
    content: "You have the right to:",
    items: [
      "Access, update, or delete your personal data.",
      "Object to or restrict the processing of your data.",
      "Request data portability.",
      "Withdraw consent at any time.",
    ],
  },
  {
    title: "6. Cookies",
    content: "We use cookies and similar tracking technologies. For details, refer to our",
    link: { text: "Cookie Policy", href: "/cookies" },
  },
  {
    title: "7. Changes to This Policy",
    content:
      "We may update this Privacy Policy periodically. Changes will be posted here with an updated date. We encourage you to review this policy regularly.",
  },
  {
    title: "8. Contact Us",
    content:
      "If you have questions or concerns about our Privacy Policy, please contact us at:",
    email: "privacy@pivotprice.io",
  },
];

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero Section */}
      <section className="relative py-16 overflow-hidden bg-gradient-to-b from-pink-50/50 to-white">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-pink-200/20 rounded-full blur-3xl" />
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
              Privacy Policy
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-slate-500">
              Last updated: January 1, 2025
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
            className="prose prose-lg max-w-none"
          >
            <p className="text-lg text-slate-600 mb-8 pb-8 border-b border-pink-100">
              PivotPrice (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) values your privacy and is
              committed to protecting your personal data. This Privacy Policy
              explains how we collect, use, share, and protect your personal
              information.
            </p>

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
                <p className="text-slate-600 mb-3">
                  {section.content}
                  {section.link && (
                    <Link
                      href={section.link.href}
                      className="text-pink-600 hover:text-pink-700 font-medium ml-1"
                    >
                      {section.link.text}
                    </Link>
                  )}
                  {section.email && (
                    <a
                      href={`mailto:${section.email}`}
                      className="text-pink-600 hover:text-pink-700 font-medium"
                    >
                      {section.email}
                    </a>
                  )}
                </p>
                {section.items && (
                  <ul className="list-disc list-inside space-y-2 text-slate-600 pl-4">
                    {section.items.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                )}
              </motion.div>
            ))}

            <div className="mt-12 pt-8 border-t border-pink-100">
              <p className="text-slate-600">
                To exercise your rights, contact us at{" "}
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

