// components/ui/team.tsx
"use client";

import { Carousel, Card } from "../../ui/apple-cards-carousel";

const teamData = [
  {
    category: "Communication",
    title: "We are team with enthusiasm for communication",
    src: "https://images.unsplash.com/photo-1552581234-26160f608093",
    content: (
      <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
        <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
          <span className="font-bold text-neutral-700 dark:text-neutral-200">
            Transforming ideas into impactful communication.
          </span>{" "}
          Your business has a story to tell—I&apos;ll help you tell it.
        </p>
      </div>
    ),
  },
  {
    category: "Expertise",
    title: "Industry leading professionals at your service",
    src: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf",
    content: (
      <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
        <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
          <span className="font-bold text-neutral-700 dark:text-neutral-200">
            Excellence in every detail.
          </span>{" "}
          We won&apos;t settle for less than perfect.
        </p>
      </div>
    ),
  },
  {
    category: "Collaboration",
    title: "Building success through teamwork",
    src: "https://images.unsplash.com/photo-1517048676732-d65bc937f952",
    content: (
      <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
        <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
          <span className="font-bold text-neutral-700 dark:text-neutral-200">
            Together we achieve more.
          </span>{" "}
          We&apos;re better when we work together.
        </p>
      </div>
    ),
  },
  {
    category: "Innovation",
    title: "Pushing boundaries in digital marketing",
    src: "https://images.unsplash.com/photo-1553877522-43269d4ea984",
    content: (
      <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
        <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
          <span className="font-bold text-neutral-700 dark:text-neutral-200">
            Leading the digital transformation.
          </span>{" "}
          We&apos;re shaping the future of marketing.
        </p>
      </div>
    ),
  },
];

export function Team() {
  const cards = teamData.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <section className="w-full pt-5  py-20">
      <div className="max-w-7xl mx-auto px-4 mb-12">
        <div className="flex  justify-between">
          <div>
            <h2 className="text-4xl sm:text-5xl font-bold  mb-6">
              We are team with
              <br />
              enthusiasm for
              <br />
              communication
            </h2>
          </div>

          <div>
            <p className="text-gray-400 max-w-xl mb-8 text-sm leading-relaxed">
              Your business has a story to tell—I&apos;ll help you tell it. Our
              team features a roster of industry experts and highly-skilled
              creatives because we won&apos;t settle for less.
            </p>

            <button className="inline-flex items-center text-sm font-medium  group">
              VIEW MORE
              <svg
                className="ml-2 w-4 h-4 transform transition-transform group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </button>
          </div>
        </div>
        <Carousel items={cards} />
      </div>
    </section>
  );
}
