"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function FinalCTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-24 sm:py-32 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-12">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 8 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="space-y-8 text-center"
        >
          <p className="text-2xl font-medium text-text-primary sm:text-3xl md:text-4xl">
            Have a product in mind?
            <br />
            Let's talk.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 6 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            <a
              href="mailto:hello@franklincodes.com"
              className="inline-flex h-12 items-center justify-center rounded-lg bg-accent px-8 text-sm font-medium text-[#f35b04] transition-colors sm:h-14 sm:px-10 sm:text-base"
            >
              Start a Conversation
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
