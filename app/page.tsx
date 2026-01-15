import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Work from "@/components/Work";
import Process from "@/components/Process";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="bg-[#FEFAE0] min-h-screen">
      <Hero />
      <Services />
      <Work />
      <Process />
      <Contact />
    </main>
  );
}
