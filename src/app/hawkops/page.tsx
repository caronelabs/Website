"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const features = [
  "Real-time IT service management scenarios",
  "AI-powered incident management",
  "Team collaboration features",
  "Business simulation for UW-Whitewater",
];

export default function HawkOpsPage() {
  return (
    <>
      {/* Hero Section with Logo */}
      <section className="bg-carone-dark py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center text-center"
          >
            {/* Logo - 6 inch x 6 inch (576px x 576px at 96 DPI) */}
            <div className="w-[576px] h-[576px] relative mb-8">
              <Image
                src="/hawkops-logo.png"
                alt="HawkOps Logo"
                fill
                className="object-contain"
                priority
              />
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              HawkOps
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              An immersive ITSM business simulation for UW-Whitewater
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl shadow-lg overflow-hidden"
          >
            <div className="p-8 md:p-12">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-carone-dark">
                      About HawkOps
                    </h2>
                    <span className="px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                      Available
                    </span>
                  </div>
                  <p className="text-gray-600 text-lg mb-6">
                    Experience real-time IT service management scenarios with
                    AI-powered incidents and team collaboration. HawkOps provides
                    an immersive learning environment for students to develop
                    practical ITSM skills.
                  </p>

                  <h3 className="text-xl font-semibold text-carone-dark mb-4">
                    Features
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                    {features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <svg
                          className="w-5 h-5 text-carone-orange flex-shrink-0"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex-shrink-0">
                  <a
                    href="https://hawkops.caronelabs.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary inline-flex items-center gap-2"
                  >
                    Launch HawkOps
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
