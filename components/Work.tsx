"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { RevealOnScroll } from "./RevealOnScroll";

const projects = [
  {
    id: "leadherself",
    title: "LeadHerself",
    category: "Professional Growth App",
    year: "2025",
    description:
      "LeadHerself is an interactive self-leadership app designed to help early-career women and non-binary professionals build confidence, grow career skills, and shape meaningful paths forward with guided journeys and practical actions.  [oai_citation:0‡LeadHerself](https://www.leadherself.com/?utm_source=chatgpt.com)",
    highlights: [
      "Guided self-leadership journeys tailored to personal goals",
      "Skills building through assessments and real-world exercises",
      "Research-backed tools to grow confidence and clarity",
    ],
    tags: ["Professional Development", "Mobile App", "Career Growth"],
    image: "/work/leadherself.jpg",
    href: "/work/leadherself",
  },
  {
    id: "wooftag",
    title: "Wooftag",
    category: "Pet Identification System",
    year: "2024",
    description:
      "Wooftag offers a modern, battery-free pet tag system paired with a companion app that stores and displays key pet info via QR/NFC scan — making reunification faster and less stressful for pets and owners.  [oai_citation:1‡Wooftag](https://wooftag.eu/?utm_source=chatgpt.com)",
    highlights: [
      "Create digital profiles for pets with contact & health data",
      "Free app with real-time updates when tags are scanned",
      "Improves safety and reunification without battery or subscription",
    ],
    tags: ["Pet Safety", "NFC/QR Tech", "Mobile UX"],
    image: "/work/wooftag.jpg",
    href: "/work/wooftag",
  },
  {
    id: "abushakra",
    title: "Abu Shakra",
    category: "Luxury Retail & Lifestyle",
    year: "2025",
    description:
      "Abu Shakra is a leading luxury goods retail experience featuring high-end brands across fragrances, cosmetics, fashion accessories and more — paired with an app for shopping & offers.  [oai_citation:2‡Google Play](https://play.google.com/store/apps/details?hl=en_IN&id=com.abushakranewproject&utm_source=chatgpt.com)",
    highlights: [
      "Browse top global luxury brands in one place",
      "Weekly arrivals and special offers via app",
      "Easy product discovery, sort & search experience",
    ],
    tags: ["E-Commerce", "Luxury Brands", "Mobile Shopping"],
    image: "/work/abushakra.jpg",
    href: "/work/abushakra",
  },
  {
    id: "touq",
    title: "Touq",
    category: "Real Estate Rental & Management",
    year: "2025",
    description:
      "Touq is a property rental and management platform that connects renters with landlords directly — making the process of finding, listing, and managing properties simple and free of subscription fees. Users can browse listings, filter by key criteria, and communicate with owners instantly. ",
    highlights: [
      "Peer-to-peer connection between renters & landlords",
      "Filterable listings by location, price & features",
      "Free property listing & built-in messaging system",
    ],
    tags: ["PropTech", "Real Estate", "Mobile Platform"],
    image: "/work/touq.jpg",
    href: "/work/touq",
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
      observerOptions,
    );
    const elements = document.querySelectorAll(".project-block");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const activeProject = projects.find((p) => p.id === activeId) || projects[0];

  return (
    <section
      id="work"
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
