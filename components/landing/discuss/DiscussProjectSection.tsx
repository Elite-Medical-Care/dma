// components/ui/discuss-project.tsx
"use client";

import OrbitingCircles from "@/components/ui/orbiting-circles";
import {
  IconBrandGithub,
  IconBrandGoogleDrive,
  IconBrandNotion,
  IconBrandWhatsapp,
} from "@tabler/icons-react";

export function DiscussProject() {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 py-20 pt-0">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#E6EEF0] to-[#F0EDE4] p-12 dark:from-gray-900/50 dark:to-gray-800/50">
        {/* Content */}
        <div className="max-w-xl relative z-10">
          <h2 className="text-4xl font-semibold mb-4">
            Let&apos;s discuss your
            <br />
            project
          </h2>
          <p className="text-gray-600 text-sm mb-8">
            The essential to combine empathy, creativity and rationality to meet
            user needs and business success
          </p>
          <button className=" px-6 py-3 rounded-full inline-flex items-center gap-2 group">
            GET STARTED
            <svg
              className="w-4 h-4 transform transition-transform group-hover:translate-x-1"
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

        {/* Circles Pattern */}
        <div className="absolute top-0 right-0 w-1/2 h-full">
          <div className="relative flex h-[300px] w-full flex-col items-center justify-center overflow-hidden rounded-lg ">
            <OrbitingCircles
              className="size-[30px] border-none bg-transparent"
              duration={20}
              delay={20}
              radius={80}
            >
              <IconBrandWhatsapp />
            </OrbitingCircles>
            <OrbitingCircles
              className="size-[30px] border-none bg-transparent"
              duration={20}
              delay={10}
              radius={80}
            >
              <IconBrandNotion />
            </OrbitingCircles>

            {/* Outer Circles (reverse) */}
            <OrbitingCircles
              className="size-[50px] border-none bg-transparent"
              radius={190}
              duration={20}
              reverse
            >
              <IconBrandGoogleDrive />
            </OrbitingCircles>
            <OrbitingCircles
              className="size-[50px] border-none bg-transparent"
              radius={190}
              duration={20}
              delay={20}
              reverse
            >
              <IconBrandGithub />
            </OrbitingCircles>
          </div>
        </div>
      </div>
    </section>
  );
}
