"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 sm:py-32 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-12">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 8 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="space-y-8"
        >
          <h2 className="text-3xl font-semibold tracking-tight text-text-primary sm:text-4xl md:text-5xl">
            About FranklinCodes
          </h2>

          <div className="max-w-3xl space-y-4">
            <p className="text-lg leading-relaxed text-text-secondary sm:text-xl">
              FranklinCodes is a product-focused engineering studio. We work
              with brands and startups to build digital products that are
              reliable, scalable, and built to last.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
