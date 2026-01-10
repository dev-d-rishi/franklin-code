"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const services = [
  "Web Application Development",
  "Mobile App Development",
  "Backend & System Architecture",
  "Long-term Product Engineering Support",
];

export default function Services() {
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
          className="space-y-12"
        >
          <div className="space-y-3">
            <h2 className="text-3xl font-semibold tracking-tight text-text-primary sm:text-4xl md:text-5xl">
              What We Do
            </h2>
            <motion.div
              initial={{ width: 0 }}
              animate={isInView ? { width: "120px" } : { width: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              className="h-0.5 bg-accent"
            />
          </div>

          <ul className="space-y-4">
            {services.map((service, index) => (
              <motion.li
                key={service}
                initial={{ opacity: 0, y: 6 }}
                animate={
                  isInView
                    ? { opacity: 1, y: 0 }
                    : { opacity: 0, y: 6 }
                }
                transition={{
                  duration: 0.5,
                  delay: 0.1 * index,
                  ease: "easeOut",
                }}
                className="text-lg text-text-primary sm:text-xl md:text-2xl"
              >
                {service}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
