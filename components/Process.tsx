"use client";
import { RevealOnScroll } from "./RevealOnScroll";

const steps = [
  { id: "01", title: "Discover", desc: "We deep dive into your business goals and user needs." },
  { id: "02", title: "Design", desc: "High-fidelity wireframes and interactive prototypes." },
  { id: "03", title: "Build", desc: "Clean, scalable code using Next.js and Tailwind." },
  { id: "04", title: "Launch", desc: "QA testing, deployment, and post-launch support." },
];

export default function Process() {
  return (
    <section className="py-24 px-6 bg-white rounded-[3rem] text-[#1C1C1C]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          
          {/* Sticky Left Column */}
          <div className="hidden lg:block">
            <div className="sticky top-32">
              <RevealOnScroll>
                <h2 className="text-5xl font-bold tracking-tight mb-6">
                  How we work
                </h2>
                <p className="text-xl text-[#6B6B6B] max-w-sm">
                  A transparent, agile process designed to deliver results rapidly without compromising quality.
                </p>
                {/* <div className="mt-8">
                  <button className="px-6 py-3 border border-[#1C1C1C] rounded-full hover:bg-[#1C1C1C] hover:text-white transition-colors">
                    Download Capability Deck
                  </button>
                </div> */}
              </RevealOnScroll>
            </div>
          </div>

          {/* Scrollable Right Column */}
          <div className="space-y-24 lg:space-y-32 pb-24">
            {steps.map((step, index) => (
              <RevealOnScroll key={index} width="100%">
                <div className="flex flex-col gap-4 border-t border-[#1C1C1C]/10 pt-8">
                  <span className="text-[#F35B04] font-mono text-lg font-bold">
                    {step.id}
                  </span>
                  <h3 className="text-3xl md:text-4xl font-bold">
                    {step.title}
                  </h3>
                  <p className="text-lg text-[#6B6B6B] leading-relaxed">
                    {step.desc}
                  </p>
                  
                </div>
              </RevealOnScroll>
            ))}
          </div>
          
        </div>
      </div>
    </section>
  );
}