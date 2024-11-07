// components/ui/services.tsx
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ServicesGrid } from "@/components/ui/services-grid";
import AnimatedGradientText from "@/components/ui/animated-gradient-text";
import { cn } from "@/lib/utils";

export function Services() {
  return (
    <section className="py-20 pt-5 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto ">
      <div className="flex flex-col lg:flex-row gap-20">
        {/* Left Content */}
        <div className="flex-1">
          <AnimatedGradientText className="mx-0 mb-4 ">
            <span
              className={cn(
                `uppercase text-c group inline animate-gradient text-gradient-r bg-[length:var(--bg-size)_100%] bg-clip-text `
              )}
            >
              OUR SERVICES
            </span>
          </AnimatedGradientText>

          <h2 className="text-5xl sm:text-6xl font-bold tracking-tight mb-6 ">
            We offer the best
            <br />
            services for our
            <br />
            customer
          </h2>

          <p className="text-gray-400 mb-8 text-sm leading-relaxed max-w-lg">
            Find effective digital reach of your business, powered by
            human&apos;s behaviour and driven by data
          </p>

          <button className="inline-flex items-center text-sm font-medium group">
            LEARN MORE
            <svg
              className="ml-2 w-4 h-4 transform transition-transform group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </button>
        </div>

        {/* Right Image */}
        <div className="flex-1">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative h-[400px] rounded-2xl overflow-hidden"
          >
            <Image
              src="https://images.unsplash.com/photo-1552581234-26160f608093?q=80&w=2000"
              alt="Team discussing marketing strategy"
              fill
              className="object-cover rounded-2xl"
            />
          </motion.div>
        </div>
      </div>

      {/* Services Grid */}
      <ServicesGrid />
    </section>
  );
}
