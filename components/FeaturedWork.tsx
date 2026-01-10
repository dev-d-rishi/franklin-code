"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

interface Project {
  name: string;
  description: string;
  slug: string;
  imageUrl: string;
}

const projects: Project[] = [
  {
    name: "E-commerce Platform",
    description: "Scalable online marketplace built for a growing retail brand",
    slug: "ecommerce-platform",
    imageUrl: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
  },
  {
    name: "Healthcare Mobile App",
    description: "Patient management system with real-time appointment scheduling",
    slug: "healthcare-app",
    imageUrl: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop",
  },
  {
    name: "SaaS Analytics Dashboard",
    description: "Data visualization platform for enterprise customers",
    slug: "analytics-dashboard",
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
  },
];

export default function FeaturedWork() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="work" className="py-24 sm:py-32 lg:py-40">
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
              Selected Work
            </h2>
            <motion.div
              initial={{ width: 0 }}
              animate={isInView ? { width: "120px" } : { width: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              className="h-0.5 bg-accent"
            />
          </div>

          <div className="grid gap-12 sm:gap-16 md:grid-cols-2 lg:gap-20">
            {projects.map((project, index) => (
              <motion.div
                key={project.slug}
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
                className="group space-y-6"
              >
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="overflow-hidden rounded-lg border border-border bg-surface p-1"
                >
                  <div className="relative aspect-[4/3] w-full overflow-hidden rounded-md">
                    <Image
                      src={project.imageUrl}
                      alt={project.name}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                </motion.div>
                <div className="space-y-3">
                  <h3 className="text-xl font-medium text-text-primary sm:text-2xl">
                    {project.name}
                  </h3>
                  <p className="text-base leading-relaxed text-text-secondary sm:text-lg">
                    {project.description}
                  </p>
                  <a
                    href={`/work/${project.slug}`}
                    className="inline-flex items-center text-sm font-medium text-accent transition-colors hover:text-accent/80 sm:text-base"
                  >
                    → View Case Study
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
