"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { RevealOnScroll } from "./RevealOnScroll";

const projects = [
  {
    id: "nexus-finance",
    title: "Nexus Finance",
    category: "FinTech Platform",
    year: "2024",
    description:
      "A wealth management dashboard built for modern investors—real-time insights, portfolio allocation, and clean performance tracking.",
    highlights: [
      "Real-time portfolio analytics",
      "Interactive charts + KPI panels",
      "Fast UI with modular design system",
    ],
    tags: ["Product Design", "Next.js", "Dashboard UI"],
    image: "https://picsum.photos/id/48/1400/1000",
    href: "/work/nexus-finance",
  },
  {
    id: "lumina-health",
    title: "Lumina Health",
    category: "AI Diagnostic Tool",
    year: "2024",
    description:
      "A clinical interface for AI-assisted imaging workflows—built for speed, clarity, and confidence in decision-making.",
    highlights: [
      "Doctor-first UX",
      "Case review + history timeline",
      "Annotation-ready layout",
    ],
    tags: ["UX Strategy", "React", "AI Workflow"],
    image: "https://picsum.photos/id/60/1400/1000",
    href: "/work/lumina-health",
  },
  {
    id: "vantage-commerce",
    title: "Vantage Commerce",
    category: "E-Commerce Experience",
    year: "2023",
    description:
      "A luxury shopping redesign focused on conversion, premium visuals, and a seamless checkout experience.",
    highlights: [
      "Modern product discovery",
      "High-converting PDP layout",
      "Optimized checkout funnel",
    ],
    tags: ["Frontend", "Motion UI", "Conversion"],
    image: "https://picsum.photos/id/20/1400/1000",
    href: "/work/vantage-commerce",
  },
  {
    id: "orbit-saas",
    title: "Orbit SaaS",
    category: "Productivity Suite",
    year: "2023",
    description:
      "A remote team workspace for planning, tracking, and shipping faster—designed for daily use at scale.",
    highlights: [
      "Kanban + sprint planning",
      "Team roles + permissions",
      "Component-driven UI system",
    ],
    tags: ["Design System", "Full Stack", "SaaS UI"],
    image: "https://picsum.photos/id/119/1400/1000",
    href: "/work/orbit-saas",
  },
  {
    id: "atlas-logistics",
    title: "Atlas Logistics",
    category: "Fleet & Ops Dashboard",
    year: "2022",
    description:
      "A dispatch dashboard for managing fleets, routes, and deliveries—built for operations teams under pressure.",
    highlights: [
      "Live tracking + route overview",
      "Ops-friendly information density",
      "Performance monitoring panels",
    ],
    tags: ["Dashboard", "Maps UI", "Operations"],
    image: "https://picsum.photos/id/1011/1400/1000",
    href: "/work/atlas-logistics",
  },
];

export default function Work() {
  const [activeId, setActiveId] = useState(projects[0].id);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0% -40% 0%",
      threshold: 0.5,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveId(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );
    const elements = document.querySelectorAll(".project-block");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const activeProject = projects.find((p) => p.id === activeId) || projects[0];

  return (
    <section
      ref={sectionRef}
      className="bg-[#FEFAE0] text-[#1C1C1C] py-24 px-6 md:px-12"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-20">
          <RevealOnScroll>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4">
              Selected Work
            </h2>
            <div className="w-20 h-1 bg-[#F35B04]" />
          </RevealOnScroll>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          {/* Left Column: Content */}
          <div className="w-full lg:w-[55%] space-y-[30vh] lg:space-y-[40vh] pb-[20vh]">
            {projects.map((project) => (
              <div
                key={project.id}
                id={project.id}
                className="project-block flex flex-col items-start transition-opacity duration-500"
                style={{ opacity: activeId === project.id ? 1 : 0.3 }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <span className="px-4 py-1.5 rounded-full bg-white border border-[#1C1C1C]/10 text-xs font-bold uppercase tracking-widest">
                    {project.category}
                  </span>
                  <span className="text-[#6B6B6B] font-medium">
                    {project.year}
                  </span>
                </div>

                <h3 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
                  {project.title}
                </h3>

                <p className="text-lg md:text-xl text-[#6B6B6B] leading-relaxed mb-8 max-w-xl">
                  {project.description}
                </p>

                <ul className="space-y-3 mb-8">
                  {project.highlights.map((highlight, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-3 text-[#1C1C1C] font-medium"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#F35B04]" />
                      {highlight}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 mb-10">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-md bg-[#1C1C1C]/5 text-[#6B6B6B] text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <Link
                  href={project.href}
                  className="group flex items-center gap-2 text-lg font-bold hover:text-[#F35B04] transition-colors"
                >
                  View case study
                  <span className="group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </Link>

                {/* Mobile Image (Visible only on small screens) */}
                <div className="mt-12 w-full lg:hidden rounded-2xl overflow-hidden aspect-video relative shadow-xl">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Sticky Image */}
          <div className="hidden lg:block w-[45%]">
            <div className="sticky top-28 h-[60vh] w-full">
              <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden shadow-2xl border border-[#1C1C1C]/5">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeProject.id}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute inset-0 w-full h-full"
                  >
                    <Image
                      src={activeProject.image}
                      alt={activeProject.title}
                      fill
                      className="object-cover"
                      priority
                      unoptimized
                    />
                    {/* Subtle Overlay for contrast */}
                    <div className="absolute inset-0 bg-gradient-to-br from-black/10 to-transparent" />
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Active Indicator Line */}
              <div className="mt-8 flex gap-2 justify-center">
                {projects.map((p) => (
                  <div
                    key={p.id}
                    className={`h-1 transition-all duration-500 rounded-full ${
                      activeId === p.id
                        ? "w-8 bg-[#F35B04]"
                        : "w-2 bg-[#1C1C1C]/10"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
