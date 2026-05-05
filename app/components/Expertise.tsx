"use client";

import {
  MessageSquare,
  Workflow,
  Building2,
  Gauge,
  Briefcase,
  Rocket,
} from "lucide-react";
import { useInView } from "../hooks/useInView";

export default function Expertise() {
  const expertiseAreas = [
    {
      icon: MessageSquare,
      title: "Information Technology",
      description: "Software developers, engineers, and IT professionals",
    },
    {
      icon: Workflow,
      title: "Manufacturing",
      description: "Production managers, quality control, and operations",
    },
    {
      icon: Building2,
      title: "Healthcare",
      description: "Medical professionals and healthcare administrators",
    },
    {
      icon: Gauge,
      title: "Finance & Banking",
      description:
        "Financial analysts, accountants, and banking professionals",
    },
    {
      icon: Briefcase,
      title: "Sales & Marketing",
      description:
        "Business development, marketing, and sales executives",
    },
    {
      icon: Rocket,
      title: "Startups & BFSI",
      description:
        "Dynamic talent for fast-growing organizations",
    },
  ];

  const { ref, isVisible } = useInView();

  return (
    <section
      id="expertise"
      className="relative py-24 lg:py-32 overflow-hidden bg-gray-50"
    >
      <div
        ref={ref}
        className={`fade-in-section relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${
          isVisible ? "visible" : ""
        }`}
      >
        
        {/* HEADING */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-white border border-[#5392d5]/30 rounded-full text-sm text-[#5392d5] mb-6 font-heading shadow-sm">
            Core Capabilities
          </div>

          <h2 className="text-3xl lg:text-5xl font-bold text-[#151515] mb-6 font-heading">
            Industries We
            <span className="text-[#5392d5]"> Serve</span>
          </h2>

          <p className="text-lg text-[#4A4A4A] max-w-2xl mx-auto font-body">
            Specialized recruitment expertise across diverse sectors and business functions
          </p>
        </div>

        {/* CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {expertiseAreas.map((area, index) => {
            const { ref, isVisible } = useInView();

            return (
              <div
                key={index}
                ref={ref}
                style={{ transitionDelay: `${index * 100}ms` }}
                className={`fade-in-section group relative ${
                  isVisible ? "visible" : ""
                }`}
              >
                <div className="relative p-8 bg-white border border-[#5392d5]/20 rounded-2xl shadow-sm hover:border-[#5392d5]/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 h-full">
                  
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 p-3 bg-gradient-to-br from-[#5392d5]/30 to-[#f0c831]/30 rounded-xl shadow-sm group-hover:scale-110 group-hover:shadow-md group-hover:shadow-[#5392d5]/30 transition-all duration-300">
                      <area.icon
                        className="w-6 h-6 text-[#5392d5]"
                        strokeWidth={2}
                      />
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-[#151515] mb-2 font-heading">
                        {area.title}
                      </h3>
                      <p className="text-[#4A4A4A] text-sm font-body">
                        {area.description}
                      </p>
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* STATS */}
        <div
          className={`fade-in-section mt-16 p-8 lg:p-12 bg-gradient-to-br from-white to-gray-50 border border-[#5392d5]/30 rounded-3xl shadow-lg ${
            isVisible ? "visible" : ""
          }`}
        >
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            
            <div className="text-center lg:text-left">
              <div className="text-4xl lg:text-5xl font-bold text-[#5392d5] mb-3 font-heading">
                50+
              </div>
              <div className="text-[#4A4A4A] font-body">
                Customers Served
              </div>
            </div>

            <div className="text-center lg:text-left">
              <div className="text-4xl lg:text-5xl font-bold text-[#5392d5] mb-3 font-heading">
                300+
              </div>
              <div className="text-[#4A4A4A] font-body">
                Resources Placed
              </div>
            </div>

            <div className="text-center lg:text-left">
              <div className="text-4xl lg:text-5xl font-bold text-[#5392d5] mb-3 font-heading">
                95%
              </div>
              <div className="text-[#4A4A4A] font-body">
                Client Retention Rate
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}