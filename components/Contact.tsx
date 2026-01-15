"use client";
import { RevealOnScroll } from "./RevealOnScroll";

export default function Contact() {
  return (
    <section className="py-24 px-6 bg-[#1C1C1C] text-[#FEFAE0] rounded-t-[3rem] mt-[-3rem] relative z-10">
      <div className="max-w-5xl mx-auto text-center flex flex-col items-center">
        <RevealOnScroll>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6">
            Have an idea?
          </h2>
        </RevealOnScroll>

        <RevealOnScroll delay={0.2}>
          <p className="text-lg md:text-xl text-[#FEFAE0]/70 mb-10 max-w-lg mx-auto leading-relaxed">
            Let’s build something great together. Now booking new projects.
          </p>
        </RevealOnScroll>

        <RevealOnScroll delay={0.3}>
          <a
            href="mailto:hello@franklincodes.com"
            className="group relative inline-flex items-center gap-3 text-2xl md:text-4xl font-bold hover:text-[#F35B04] transition-colors"
          >
            <span>hello@franklincodes.com</span>
            <span className="text-xl md:text-3xl group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300">
              ↗
            </span>
            <div className="absolute left-0 bottom-0 w-full h-[2px] bg-[#F35B04] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
          </a>
        </RevealOnScroll>
      </div>

      <div className="max-w-5xl mx-auto mt-20 pt-8 border-t border-[#FEFAE0]/10 flex flex-col md:flex-row justify-between items-center text-sm text-[#FEFAE0]/40">
        <p>&copy; 2024 FranklinCodes. All rights reserved.</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-white transition-colors">
            Twitter
          </a>
          <a href="#" className="hover:text-white transition-colors">
            LinkedIn
          </a>
          <a href="#" className="hover:text-white transition-colors">
            Instagram
          </a>
        </div>
      </div>
    </section>
  );
}
