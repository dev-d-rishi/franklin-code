"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { RevealOnScroll } from "./RevealOnScroll";

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Parallax effects
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacityText = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#FEFAE0] text-[#1C1C1C] px-6"
    >
      {/* Background Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-200 h-200 bg-[#F35B04]/5 rounded-full blur-3xl pointer-events-none" />

      <motion.div
        style={{ y: yText, opacity: opacityText }}
        className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center gap-8"
      >
        {/* Badge */}
        <RevealOnScroll delay={0.1}>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#1C1C1C]/10 bg-white/50 backdrop-blur-sm text-sm font-medium text-[#6B6B6B]">
            <span className="w-2 h-2 rounded-full bg-[#F35B04] animate-pulse" />
            Product Studio for Startups
          </div>
        </RevealOnScroll>

        {/* Heading */}
        <RevealOnScroll delay={0.2}>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-[0.9]">
            Digital products <br />
            <span className="text-[#6B6B6B]">that define brands.</span>
          </h1>
        </RevealOnScroll>

        {/* Subheading */}
        <RevealOnScroll delay={0.3}>
          <p className="max-w-xl mx-auto text-lg md:text-xl text-[#6B6B6B] font-medium leading-relaxed">
            We help ambitious founders build premium web applications and
            websites that convert.
          </p>
        </RevealOnScroll>

        {/* CTA Buttons */}
        <RevealOnScroll delay={0.4}>
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <button className="group relative px-8 py-4 rounded-full bg-[#1C1C1C] text-white font-semibold overflow-hidden transition-all ">
              <span className="relative z-10">Start a Project</span>
              <div className="absolute inset-0 bg-[#333] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 ease-out" />
            </button>

            <button className="group px-8 py-4 rounded-full border border-[#1C1C1C]/20 text-[#1C1C1C] font-semibold hover:bg-[#1C1C1C]/5 transition-all ">
              View Work
            </button>
          </div>
        </RevealOnScroll>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-sm font-medium text-[#6B6B6B]"
      >
        <p>Scroll to explore</p>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M7 13L12 18L17 13M12 6L12 17" />
        </svg>
      </motion.div>
    </section>
  );
}
