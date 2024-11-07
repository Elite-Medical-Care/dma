// components/ui/testimonials.tsx
"use client";

import AnimatedGradientText from "@/components/ui/animated-gradient-text";
import Marquee from "@/components/ui/marquee";
import { cn } from "@/lib/utils";
import Image from "next/image";

const reviews = [
  {
    name: "Pavel Solomin",
    username: "@pavel",
    body: "This is my first time working with a marketing company and I had a fantastic experience. Business is doing better than ever and I am very grateful for Toolaf. Highly recommend!",
    img: "https://avatar.vercel.sh/pavel",
  },
  {
    name: "Sarah Chen",
    username: "@sarah",
    body: "Working with this team has transformed our digital presence. Their strategic approach and dedication to results made all the difference.",
    img: "https://avatar.vercel.sh/sarah",
  },
  {
    name: "Mark Anderson",
    username: "@mark",
    body: "The level of expertise and attention to detail is outstanding. Our marketing ROI has increased significantly since partnering with them.",
    img: "https://avatar.vercel.sh/mark",
  },
  {
    name: "Emma Wilson",
    username: "@emma",
    body: "Incredible results and amazing customer service. They truly understand digital marketing.",
    img: "https://avatar.vercel.sh/emma",
  },
  {
    name: "David Kim",
    username: "@david",
    body: "Their innovative approach to marketing has helped us reach new audiences we never thought possible.",
    img: "https://avatar.vercel.sh/david",
  },
  {
    name: "Lisa Thompson",
    username: "@lisa",
    body: "The best marketing team we've ever worked with. They deliver results consistently.",
    img: "https://avatar.vercel.sh/lisa",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-80 cursor-pointer overflow-hidden rounded-xl border p-6",
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
        "transition-colors duration-300"
      )}
    >
      <div className="flex flex-row items-center gap-3">
        <Image
          className="rounded-full"
          width={40}
          height={40}
          alt={name}
          src={img}
        />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium text-gray-500 dark:text-white/40">
            {username}
          </p>
        </div>
      </div>
      <blockquote className="mt-4 text-sm leading-relaxed text-gray-700 dark:text-gray-300">
        {body}
      </blockquote>
    </figure>
  );
};

export function Testimonials() {
  return (
    <section className="py-20 pt-5 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <AnimatedGradientText className="mb-4 ">
          <span
            className={cn(
              `uppercase text-c group inline animate-gradient text-gradient-r bg-[length:var(--bg-size)_100%] bg-clip-text `
            )}
          >
            Our Testimonials
          </span>
        </AnimatedGradientText>
        <h2 className="text-3xl font-bold tracking-tight   sm:text-4xl">
          What our clients say
        </h2>
      </div>

      <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-2xl ">
        <Marquee pauseOnHover className="[--duration:40s]" repeat={2}>
          {firstRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:40s]" repeat={2}>
          {secondRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>

        {/* Gradient Fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-black"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-black"></div>
      </div>
    </section>
  );
}
