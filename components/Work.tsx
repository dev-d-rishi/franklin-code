"use client";
import { RevealOnScroll } from "./RevealOnScroll";

export default function Work() {
  return (
    <section className="py-24 px-6 bg-[#FEFAE0]">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-16">
          <RevealOnScroll>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
              Selected Work
            </h2>
          </RevealOnScroll>
          <RevealOnScroll delay={0.2}>
            <a
              href="/work"
              className="hidden md:block text-lg underline decoration-[#F35B04] underline-offset-4"
            >
              View all projects
            </a>
          </RevealOnScroll>
        </div>

        <div className="space-y-12">
          {/* Featured Project - Full Width */}
          <RevealOnScroll>
            <div className="group relative w-full h-[60vh] rounded-3xl overflow-hidden cursor-pointer">
              <div className="absolute inset-0 bg-gray-200">
                {/* Replace with actual Next/Image */}
                <div className="w-full h-full bg-[#1C1C1C]/5 group-hover:scale-105 transition-transform duration-700 ease-out flex items-center justify-center text-[#1C1C1C]/20"></div>
              </div>
              <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full bg-linear-to-t from-black/60 to-transparent text-white">
                <div className="flex justify-between items-end">
                  <div>
                    <h3 className="text-3xl font-bold mb-2">
                      FinTech Dashboard
                    </h3>
                    <p className="text-white/80">
                      Product Design + Frontend Dev
                    </p>
                  </div>
                  <div className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity translate-y-4 group-hover:translate-y-0">
                    →
                  </div>
                </div>
              </div>
            </div>
          </RevealOnScroll>

          {/* Secondary Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {["E-Commerce Redesign", "Health App"].map((project, i) => (
              <RevealOnScroll key={i} delay={i * 0.1}>
                <div className="group relative aspect-4/3 rounded-3xl overflow-hidden cursor-pointer bg-white">
                  <div className="w-full h-full bg-[#1C1C1C]/5 group-hover:scale-105 transition-transform duration-700 ease-out flex items-center justify-center">
                    [Image of {project} Interface]
                  </div>
                  <div className="absolute top-6 right-6 px-4 py-2 bg-white/90 backdrop-blur rounded-full text-sm font-medium">
                    2024
                  </div>
                  <div className="absolute bottom-6 left-6">
                    <h3 className="text-xl font-bold">{project}</h3>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
