"use client";

import Link from "next/link";
import { motion } from "framer-motion";

type ServiceStatus = "active" | "beta" | "coming-soon";

interface Service {
  id: string;
  title: string;
  description: string;
  features: string[];
  href: string;
  status: ServiceStatus;
}

// Configure your render.com services here
const services: Service[] = [
  {
    id: "service-1",
    title: "Service One",
    description:
      "A comprehensive description of your first service. Explain the key features, benefits, and use cases.",
    features: [
      "Feature one of the service",
      "Feature two of the service",
      "Feature three of the service",
      "Feature four of the service",
    ],
    // Replace with your actual render.com service URL
    href: "https://your-service-1.onrender.com",
    status: "active",
  },
  {
    id: "service-2",
    title: "Service Two",
    description:
      "Description of your second service. Add details about what makes this service valuable.",
    features: [
      "Key feature one",
      "Key feature two",
      "Key feature three",
      "Key feature four",
    ],
    href: "https://your-service-2.onrender.com",
    status: "coming-soon",
  },
  {
    id: "service-3",
    title: "Service Three",
    description:
      "Another service offering. Customize this based on your actual services.",
    features: [
      "Capability one",
      "Capability two",
      "Capability three",
      "Capability four",
    ],
    href: "#",
    status: "coming-soon",
  },
];

const statusBadge = {
  active: {
    text: "Available",
    className: "bg-green-100 text-green-800",
  },
  beta: {
    text: "Beta",
    className: "bg-carone-orange/20 text-carone-orange-dark",
  },
  "coming-soon": {
    text: "Coming Soon",
    className: "bg-gray-100 text-gray-600",
  },
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-carone-dark py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Services
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Explore the tools and platforms we&apos;ve built to help your
              business succeed.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden"
              >
                <div className="p-8 md:p-12">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-4">
                        <h2 className="text-2xl md:text-3xl font-bold text-carone-dark">
                          {service.title}
                        </h2>
                        <span
                          className={`px-3 py-1 rounded-full text-sm font-medium ${
                            statusBadge[service.status].className
                          }`}
                        >
                          {statusBadge[service.status].text}
                        </span>
                      </div>
                      <p className="text-gray-600 text-lg mb-6">
                        {service.description}
                      </p>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {service.features.map((feature, i) => (
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
                      {service.status === "active" ? (
                        <a
                          href={service.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-primary inline-flex items-center gap-2"
                        >
                          Launch Service
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
                      ) : (
                        <button
                          disabled
                          className="px-6 py-3 bg-gray-200 text-gray-500 font-medium rounded-lg cursor-not-allowed"
                        >
                          Coming Soon
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-carone-dark mb-4">
            Need a Custom Solution?
          </h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto">
            We can build tailored solutions to meet your specific business
            needs.
          </p>
          <Link href="/contact" className="btn-secondary">
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}
