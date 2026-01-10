"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    title: "Think",
    description: "Understand the problem",
  },
  {
    title: "Build",
    description: "Engineer clean systems",
  },
  {
    title: "Scale",
    description: "Prepare for growth",
  },
];

export default function HowWeWork() {
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
          className="space-y-16"
        >
          <div className="space-y-3">
            <h2 className="text-3xl font-semibold tracking-tight text-text-primary sm:text-4xl md:text-5xl">
              How We Work
            </h2>
            <motion.div
              initial={{ width: 0 }}
              animate={isInView ? { width: "120px" } : { width: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              className="h-0.5 bg-accent"
            />
          </div>

          <div className="grid gap-12 sm:grid-cols-3 sm:gap-8 lg:gap-12">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 8 }}
                animate={
                  isInView
                    ? { opacity: 1, y: 0 }
                    : { opacity: 0, y: 8 }
                }
                transition={{
                  duration: 0.6,
                  delay: 0.1 * (index + 1),
                  ease: "easeOut",
                }}
                className="space-y-3 text-center sm:text-left"
              >
                <h3 className="text-2xl font-semibold text-text-primary text-[#f35b04] sm:text-3xl">
                  {step.title}
                </h3>
                <p className="text-base text-text-secondary sm:text-lg">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
