"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const teamMembers = [
  {
    name: "Sarah Chen",
    role: "CEO & Co-founder",
    bio: "Former VP of Product at Booking.com with 15 years in travel tech.",
    avatar: "SC",
    gradient: "from-pink-500 to-pink-600",
  },
  {
    name: "Marcus Rodriguez",
    role: "CTO & Co-founder",
    bio: "Ex-Google engineer, specialized in ML and pricing algorithms.",
    avatar: "MR",
    gradient: "from-purple-500 to-purple-600",
  },
  {
    name: "Emily Watson",
    role: "Head of Product",
    bio: "10+ years building B2B SaaS products for the tourism industry.",
    avatar: "EW",
    gradient: "from-rose-500 to-rose-600",
  },
  {
    name: "David Kim",
    role: "Head of Data Science",
    bio: "PhD in Economics, former McKinsey pricing consultant.",
    avatar: "DK",
    gradient: "from-coral-500 to-coral-600",
  },
];

const values = [
  {
    title: "Data-Driven Decisions",
    description: "We believe the best business decisions are backed by solid data and real-time market insights.",
    icon: "📊",
  },
  {
    title: "Customer Success",
    description: "Your success is our success. We're committed to helping you grow your revenue.",
    icon: "🚀",
  },
  {
    title: "Continuous Innovation",
    description: "We constantly push the boundaries of what's possible with AI and pricing intelligence.",
    icon: "💡",
  },
  {
    title: "Transparency",
    description: "We believe in honest, open communication with our customers and partners.",
    icon: "🤝",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-pink-200/30 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-200/20 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            animate="animate"
            variants={{
              animate: { transition: { staggerChildren: 0.1 } },
            }}
            className="text-center"
          >
            <motion.h1
              variants={fadeInUp}
              className="text-5xl sm:text-6xl font-bold font-[family-name:var(--font-outfit)] text-slate-900 mb-6"
            >
              About <span className="gradient-text">PivotPrice</span>
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-xl text-slate-600 max-w-3xl mx-auto"
            >
              We&apos;re on a mission to help experience and attraction providers unlock
              their full revenue potential through intelligent pricing strategies.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-gradient-to-b from-white to-pink-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold font-[family-name:var(--font-outfit)] text-slate-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-lg text-slate-600">
                <p>
                  PivotPrice was born from a simple observation: tour and activity
                  operators were leaving money on the table. They lacked the tools
                  and data to optimize their pricing in real-time.
                </p>
                <p>
                  Founded in 2023 by a team of travel industry veterans and AI
                  experts, we set out to democratize pricing intelligence that was
                  previously only available to the largest players in the industry.
                </p>
                <p>
                  Today, we help hundreds of experience providers around the world
                  make smarter pricing decisions, increase their revenue, and focus
                  on what they do best — creating amazing experiences.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-pink-100 to-purple-100 rounded-3xl p-12 aspect-square flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">🎢</div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">
                    Empowering Experiences
                  </h3>
                  <p className="text-slate-600">Since 2023</p>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-pink-500/10 rounded-2xl -z-10" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-purple-500/10 rounded-2xl -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold font-[family-name:var(--font-outfit)] text-slate-900 mb-6">
              Our Values
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 border border-pink-100 hover:border-pink-300 hover:shadow-xl hover:shadow-pink-100/50 transition-all"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-slate-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-gradient-to-b from-white to-pink-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold font-[family-name:var(--font-outfit)] text-slate-900 mb-6">
              Meet the Team
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              A passionate group of experts dedicated to revolutionizing pricing
              intelligence
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="relative mb-6 mx-auto w-32 h-32">
                  <div
                    className={`w-full h-full rounded-2xl bg-gradient-to-br ${member.gradient} flex items-center justify-center text-3xl font-bold text-white shadow-lg group-hover:scale-105 transition-transform`}
                  >
                    {member.avatar}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-pink-600 font-medium mb-2">{member.role}</p>
                <p className="text-sm text-slate-500">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-pink-500 via-pink-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-4xl sm:text-5xl font-bold font-[family-name:var(--font-outfit)] text-white mb-6">
              Ready to transform your pricing?
            </h2>
            <p className="text-xl text-pink-100 max-w-2xl mx-auto mb-10">
              Join hundreds of experience providers who are already using PivotPrice
              to unlock their revenue potential.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/demo"
                className="px-8 py-4 bg-white text-pink-600 font-bold rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all"
              >
                Schedule a demo
              </Link>
              <Link
                href="/contact"
                className="px-8 py-4 border-2 border-white text-white font-bold rounded-full hover:bg-white/10 transition-all"
              >
                Contact us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

