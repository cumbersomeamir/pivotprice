"use client";

import { motion } from "framer-motion";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const sections = [
  {
    title: "1. Definitions",
    content: `In this Agreement:`,
    items: [
      '"Service" refers to the PivotPrice pricing intelligence platform and all associated features, tools, and services.',
      '"Customer" or "you" refers to the individual or entity that subscribes to our Service.',
      '"Content" refers to all data, information, text, graphics, or other materials uploaded, downloaded, or appearing on the Service.',
    ],
  },
  {
    title: "2. Service Description",
    content:
      "PivotPrice provides an AI-powered pricing intelligence platform designed for experience and attraction providers. Our Service includes real-time competitor tracking, price recommendations, and market intelligence tools to help optimize your pricing strategy.",
  },
  {
    title: "3. Account Registration",
    content: "To access our Service, you must:",
    items: [
      "Register for an account with accurate and complete information",
      "Maintain the security of your account credentials",
      "Promptly notify us of any unauthorized use of your account",
      "Be at least 18 years old or the age of majority in your jurisdiction",
    ],
  },
  {
    title: "4. Subscription and Payment",
    content: "By subscribing to our Service:",
    items: [
      "You agree to pay all applicable fees as described in your subscription plan",
      "Subscriptions automatically renew unless cancelled before the renewal date",
      "We reserve the right to modify pricing with 30 days advance notice",
      "Refunds are provided in accordance with our refund policy",
    ],
  },
  {
    title: "5. Acceptable Use",
    content: "You agree not to:",
    items: [
      "Use the Service for any unlawful purpose or in violation of any laws",
      "Attempt to gain unauthorized access to any systems or networks",
      "Interfere with or disrupt the integrity or performance of the Service",
      "Reproduce, duplicate, copy, sell, or resell any portion of the Service",
      "Use automated systems or software to extract data from the Service",
    ],
  },
  {
    title: "6. Intellectual Property",
    content:
      "The Service and its original content, features, and functionality are owned by PivotPrice and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws. You retain ownership of any data you submit to the Service.",
  },
  {
    title: "7. Data Protection",
    content:
      'We process your data in accordance with our Privacy Policy and applicable data protection laws. By using our Service, you consent to such processing and you warrant that all data provided by you is accurate. For more details, please refer to our Privacy Policy.',
  },
  {
    title: "8. Limitation of Liability",
    content:
      "To the maximum extent permitted by law, PivotPrice shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses.",
  },
  {
    title: "9. Indemnification",
    content:
      "You agree to defend, indemnify, and hold harmless PivotPrice and its officers, directors, employees, and agents from any claims, damages, obligations, losses, liabilities, costs, or debt arising from your use of the Service or violation of these terms.",
  },
  {
    title: "10. Termination",
    content:
      "We may terminate or suspend your account and access to the Service immediately, without prior notice, for conduct that we determine violates this Agreement, is harmful to other users, or is harmful to our business interests.",
  },
  {
    title: "11. Changes to Terms",
    content:
      "We reserve the right to modify or replace these terms at any time. If a revision is material, we will provide at least 30 days notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.",
  },
  {
    title: "12. Governing Law",
    content:
      "These terms shall be governed by and construed in accordance with the laws of the State of Delaware, United States, without regard to its conflict of law provisions.",
  },
];

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero Section */}
      <section className="relative py-16 overflow-hidden bg-gradient-to-b from-pink-50/50 to-white">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/3 w-96 h-96 bg-pink-200/20 rounded-full blur-3xl" />
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
              Master Services Agreement
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
              This Master Services Agreement (&quot;Agreement&quot;) is entered into between
              PivotPrice Inc. (&quot;PivotPrice,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) and the
              customer (&quot;Customer,&quot; &quot;you,&quot; or &quot;your&quot;) accessing or using our
              services. By accessing or using our Service, you agree to be bound
              by these terms.
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
                <p className="text-slate-600 mb-3">{section.content}</p>
                {section.items && (
                  <ul className="list-disc list-inside space-y-2 text-slate-600 pl-4">
                    {section.items.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                )}
              </motion.div>
            ))}

            {/* Contact */}
            <div className="mt-12 pt-8 border-t border-pink-100">
              <h2 className="text-2xl font-bold font-[family-name:var(--font-outfit)] text-slate-900 mb-4">
                13. Contact Information
              </h2>
              <p className="text-slate-600">
                If you have any questions about this Agreement, please contact us
                at:{" "}
                <a
                  href="mailto:legal@pivotprice.io"
                  className="text-pink-600 hover:text-pink-700 font-medium"
                >
                  legal@pivotprice.io
                </a>
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

