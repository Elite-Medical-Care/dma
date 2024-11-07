import { Footer } from "@/components/common/Footer";
import { About } from "@/components/landing/about/AboutSection";
import { DiscussProject } from "@/components/landing/discuss/DiscussProjectSection";
import { Hero } from "@/components/landing/hero/HeroSection";
import { Services } from "@/components/landing/services/ServicesSection";
import { Stats } from "@/components/landing/stats/StatsSection";
import { Team } from "@/components/landing/team/TeamSection";
import { Testimonials } from "@/components/landing/testimonial/TestimonialSection";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Stats />
      <About />
      <Services />
      <Testimonials />
      <Team />
      <DiscussProject />
      <Footer />
    </main>
  );
}
