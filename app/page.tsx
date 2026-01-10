import Hero from "@/components/Hero";
import FeaturedWork from "@/components/FeaturedWork";
import HowWeWork from "@/components/HowWeWork";
import Services from "@/components/Services";
import About from "@/components/About";
import FinalCTA from "@/components/FinalCTA";

export default function Home() {
  return (
    <main className="min-h-screen bg-background bg-[#F4F1E8] text-text-primary">
      <Hero />
      <div className="border-t border-border" />
      <FeaturedWork />
      <div className="border-t border-border" />
      <HowWeWork />
      <div className="border-t border-border" />
      <Services />
      <div className="border-t border-border" />
      <About />
      <div className="border-t border-border" />
      <FinalCTA />
    </main>
  );
}
