// components/ui/about.tsx
"use client";

import AnimatedGradientText from "@/components/ui/animated-gradient-text";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export function About() {
  return (
    <section className="py-20 pt-5 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div>
          <AnimatedGradientText className="mx-0 mb-4 ">
            <span
              className={cn(
                `uppercase text-c group inline animate-gradient text-gradient-r bg-[length:var(--bg-size)_100%] bg-clip-text `
              )}
            >
              About
            </span>
          </AnimatedGradientText>
          <h2 className="text-5xl sm:text-6xl font-bold tracking-tight mb-6">
            Grow with a the
            <br />
            digital marketing
            <br />
            agency?
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-8 text-sm leading-relaxed">
            Our digital marketing experts have put together thousands of
            successful digital marketing campaigns for businesses looking to
            increase leads.
          </p>
          <button className="inline-flex items-center text-sm font-medium text-black dark:text-white">
            LEARN MORE
            <svg
              className="ml-2 w-4 h-4"
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

        {/* Right Side Cards */}
        <div className="relative h-[400px]">
          {/* Recent Activity Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute top-0 right-0 w-80 bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-4"
          >
            <h3 className="text-sm font-medium mb-4">Recent activity</h3>
            <div className="space-y-4">
              {[
                {
                  name: "Zen Richardson",
                  time: "2 hours ago",
                  amount: "$12.50",
                },
                {
                  name: "Sam Scottwith",
                  time: "10 hours ago",
                  amount: "$25.75",
                },
                {
                  name: "Michelle Wright",
                  time: "27 Sep 2023",
                  amount: "$18.99",
                },
              ].map((activity, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700" />
                    <div>
                      <p className="text-sm font-medium">{activity.name}</p>
                      <p className="text-xs text-gray-500">{activity.time}</p>
                    </div>
                  </div>
                  <span className="text-sm font-medium">{activity.amount}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Total Sales Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 100 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="absolute left-0 top-0 w-64 bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-4"
          >
            <h3 className="text-sm font-medium mb-2">Total Sales</h3>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl font-bold">258</span>
              <span className="text-xs px-2 py-1 bg-black/10 dark:bg-white/10 rounded-full">
                +4.7%
              </span>
            </div>
            <div className="h-20 flex items-end gap-1">
              {[40, 70, 30, 80, 50, 90, 60, 100, 75, 85].map(
                (height, index) => (
                  <div
                    key={index}
                    className="flex-1 bg-gray-200 dark:bg-gray-700 rounded-t"
                    style={{ height: `${height}%` }}
                  />
                )
              )}
            </div>
          </motion.div>

          {/* Today's Order Card */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 200 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="absolute right-20 top-0 w-56 bg-gradient-to-br from-amber-50 to-amber-100 dark:from-amber-900 dark:to-amber-800 rounded-2xl shadow-lg p-4"
          >
            <h3 className="text-sm font-medium mb-2">Today&apos;s order</h3>
            <p className="text-3xl font-bold mb-4">$150</p>
            <div className="h-16 flex items-end gap-1">
              {[30, 60, 40, 70, 50, 80, 45].map((height, index) => (
                <div
                  key={index}
                  className="flex-1 bg-amber-200/50 dark:bg-amber-700/50 rounded-t"
                  style={{ height: `${height}%` }}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
