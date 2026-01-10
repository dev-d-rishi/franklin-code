"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="py-24 sm:py-32 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="space-y-8"
        >
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          >
            <div className="text-2xl font-semibold tracking-tight text-text-primary text-[#f35b04] sm:text-3xl">
              FranklinCodes
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="max-w-4xl text-3xl font-semibold leading-tight tracking-tight text-text-primary sm:text-4xl md:text-5xl lg:text-6xl"
          >
            We help brands and startups build reliable, scalable web and mobile
            products.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            className="text-lg text-text-secondary sm:text-xl"
          >
            Web Applications · Mobile Apps · Product Engineering
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            className="flex flex-col gap-4 sm:flex-row sm:gap-6"
          >
            <a
              href="#work"
              // className="inline-flex h-12 items-center justify-center rounded-lg bg-accent px-8 text-sm font-medium text-[#f35b04] transition-colors hover:bg-accent/90 sm:h-14 sm:px-10 sm:text-base"
              className="inline-flex h-8 items-center justify-center rounded-full border border-accent bg-transparent px-8 text-sm font-medium text-[#f35b04] transition-colors hover:bg-accent/5 sm:h-14 sm:px-10 sm:text-base"
            >
              View Work
            </a>
            <a
              href="#contact"
              className="inline-flex h-8 items-center justify-center rounded-full border border-accent bg-transparent px-8 text-sm font-medium text-accent transition-colors hover:bg-accent/5 sm:h-14 sm:px-10 sm:text-base"
            >
              Start a Project
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
