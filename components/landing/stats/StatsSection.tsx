// components/ui/stats.tsx
"use client";

import NumberTicker from "@/components/ui/number-ticker";

const stats = [
  {
    value: "12",
    label: "YEARS EXPERIENCE",
  },
  {
    value: "500000",
    label: "TOTAL USER",
  },
  {
    value: "4.8",
    label: "AVERAGE REVIEW",
  },
  {
    value: "80",
    label: "PROFESSIONAL TEAM",
  },
];

export function Stats() {
  return (
    <div className="w-full max-w-4xl mx-auto px-4  sm:px-6 lg:px-8">
      <div
        className={`
        relative rounded-2xl px-6 py-8 sm:px-12
        bg-gradient-to-r from-gray-50/50 to-gray-100/50 dark:from-gray-900/50 dark:to-gray-800/50
        backdrop-blur-md
        border border-gray-200/20 dark:border-gray-700/20
      `}
      >
        {/* Stats grid */}
        <dl className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <dt className="text-xs tracking-wider text-gray-500 dark:text-gray-400 mt-2">
                {stat.label}
              </dt>
              <dd className="text-4xl font-semibold tracking-tight text-gray-900 dark:text-white">
                <NumberTicker value={+stat.value} />
                {stat.label === "TOTAL USER" ? "+" : ""}
              </dd>
            </div>
          ))}
        </dl>

        {/* Gradient overlay for shine effect */}
        <div className="absolute inset-x-0 top-0 h-full w-full rounded-2xl bg-gradient-to-r from-transparent via-white/5 to-transparent" />
      </div>
    </div>
  );
}
