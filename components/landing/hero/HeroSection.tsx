"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

import { ChevronRight } from "lucide-react";
import GridPattern from "@/components/ui/grid-pattern";
import AnimatedGradientText from "@/components/ui/animated-gradient-text";
import ShimmerButton from "@/components/ui/shimmer-button";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import { Card } from "@/components/ui/focus-cards";

export function Hero() {
  return (
    <section className="relative max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 py-12">
      {/* Grid Background */}
      <GridPattern
        width={30}
        height={30}
        x={-1}
        y={-1}
        strokeDasharray={"4 2"}
        className={cn(
          "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]"
        )}
      />
      {/* Left side content */}
      <div className="max-w-2xl">
        {/* Badge */}
        <AnimatedGradientText className="mx-0 mb-4 ">
          <span
            className={cn(
              `uppercase text-c group inline animate-gradient text-gradient-r bg-[length:var(--bg-size)_100%] bg-clip-text `
            )}
          >
            We can help you
          </span>
          <ChevronRight className="ml-1 size-3 transition-transform duration-300 ease-in-out text-gradient-r" />
        </AnimatedGradientText>

        {/* Heading */}
        <h1 className="text-4xl max-w-md sm:text-5xl font-bold tracking-tight mb-6">
          Grow <span className="text-gradient-b ">faster</span>
          <br />
          with our all-in-one platform.
        </h1>

        {/* Subheading */}
        <p className="text-gray-600 dark:text-gray-300 mb-8 text-lg">
          We aren&apos;t your average run of the mill website designer--our
          services pack a serious punch. We are Digital agency for websites that
          achive goals.
        </p>

        {/* CTA Button */}

        <ShimmerButton className="shadow-2xl hover:scale-105">
          <span className="group whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
            <div className="flex items-center gap-2">
              Get Started
              <ChevronRight className="ml-1 size-4 transition-transform duration-300 group-hover:translate-x-1" />
            </div>
          </span>
        </ShimmerButton>

        {/* Trust Badge */}
        <div className="mt-12">
          <div className="flex">
            <AnimatedTooltip items={people} />
          </div>
          <div className="mt-3 flex items-center gap-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className="w-4 h-4 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              Trusted by 27,000+ creators
            </span>
          </div>
        </div>
      </div>

      {/* Right side image cards */}
      <div className="hidden lg:block relative w-[600px] h-[500px]">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="absolute right-0 top-0 w-52 rounded-xl overflow-hidden shadow-2xl"
        >
          <Card
            card={{
              title: "Image 1",
              src: "https://picsum.photos/288/400?random=1",
            }}
          />
        </motion.div>
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 20, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="absolute right-20 top-0 w-52 rounded-xl overflow-hidden shadow-2xl"
        >
          <Card
            card={{
              title: "Image 2",
              src: "https://picsum.photos/288/400?random=3",
            }}
          />
        </motion.div>
        <motion.div
          initial={{ y: 60, opacity: 0 }}
          animate={{ y: 40, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="absolute right-40 top-0 w-52 rounded-xl overflow-hidden shadow-2xl"
        >
          <Card
            card={{
              title: "Video 3",
              src: "https://picsum.photos/288/400?random=2",
            }}
          />
        </motion.div>
      </div>
    </section>
  );
}

const people = [
  {
    id: 1,
    name: "John Doe",
    designation: "Software Engineer",
    image:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
  },
  {
    id: 2,
    name: "Robert Johnson",
    designation: "Product Manager",
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 3,
    name: "Jane Smith",
    designation: "Data Scientist",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 4,
    name: "Emily Davis",
    designation: "UX Designer",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 5,
    name: "Tyler Durden",
    designation: "Soap Developer",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
  },
  {
    id: 6,
    name: "Dora",
    designation: "The Explorer",
    image:
      "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3534&q=80",
  },
];
