// components/ui/footer.tsx
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const footerLinks = {
  COMPANY: [
    { label: "ABOUT", href: "/about" },
    { label: "CAREERS", href: "/careers" },
    { label: "WE'RE HIRING", href: "/careers/hiring" },
    { label: "PRESS", href: "/press" },
    { label: "TERMS OF SERVICE", href: "/terms" },
    { label: "PRIVACY POLICY", href: "/privacy" },
    { label: "COOKIE POLICY", href: "/cookies" },
  ],
  PRODUCT: [
    { label: "SERVICES", href: "/services" },
    { label: "PRICING", href: "/pricing" },
    { label: "FEATURES", href: "/features" },
  ],
};

export function Footer() {
  return (
    <footer className="w-full py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-[2fr,1fr,1fr] gap-12 md:gap-24">
          {/* Left Column - Newsletter */}
          <div>
            <Link href="/" className="inline-block mb-8">
              <span className="text-xl font-bold">Starship</span>
            </Link>

            <p className="text-sm text-gray-600 mb-4">
              Subscribe to our weekly newsletter
            </p>

            <div className="relative max-w-md mb-6">
              <input
                type="email"
                placeholder="ENTER YOUR EMAIL"
                className="w-full px-4 py-3 rounded-full border  pr-12 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent dark:bg-neutral-900 dark: border-neutral-700"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-amber-400 rounded-full">
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <p className="text-sm text-gray-600 mb-4">
              Best sales management tool to boost your business.
            </p>

            <div className="flex items-center gap-2 text-sm">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <span className="text-gray-800">hello@starship.com</span>
            </div>
          </div>

          {/* Navigation Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="font-medium text-sm text-gray-400 mb-4">
                {title}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-600 hover:text-gray-900"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Copyright */}
        <div className="mt-20 pt-8 border-t  flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            © 2024 Starship Inc. All rights reserved
          </p>
          <p className="text-sm text-gray-500">Design by @design</p>
        </div>
      </div>
    </footer>
  );
}
