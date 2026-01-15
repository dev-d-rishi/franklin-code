"use client";
import { RevealOnScroll } from "./RevealOnScroll";

const services = [
  {
    title: "Web Applications",
    desc: "Scalable React & Next.js dashboards built for performance.",
    icon: "💻" 
  },
  {
    title: "Mobile Development",
    desc: "Native-feel cross-platform apps using React Native.",
    icon: "📱"
  },
  {
    title: "Product Engineering",
    desc: "Full-cycle API design, database architecture, and cloud infra.",
    icon: "⚙️"
  }
];

export default function Services() {
  return (
    <section className="py-24 md:py-32 px-6 bg-[#FEFAE0]">
      <div className="max-w-7xl mx-auto">
        <RevealOnScroll>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-16">
            Our Expertise
          </h2>
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <RevealOnScroll key={index} delay={index * 0.1}>
              <div className="group p-8 rounded-3xl border border-[#1C1C1C]/10 hover:bg-white hover:shadow-xl hover:shadow-[#1C1C1C]/5 transition-all duration-300 ease-out">
                <div className="text-4xl mb-6">{service.icon}</div>
                
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-[#6B6B6B] leading-relaxed">
                  {service.desc}
                </p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}