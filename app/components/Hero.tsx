"use client";

import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";
import { useInView } from "../hooks/useInView";

export default function Hero() {
  const { ref, isVisible } = useInView(0.1);

  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 bg-gradient-to-br from-white via-[#5392d5]/5 to-white"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage:
              "url(https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1920)",
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/75 to-white/90"></div>
      </div>

      {/* Blobs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-[#5392d5] rounded-full blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute top-40 right-10 w-72 h-72 bg-[#f0c831] rounded-full blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-[#5392d5] rounded-full blur-3xl opacity-30 animate-blob animation-delay-4000"></div>

      {/* Content */}
      <div
        ref={ref}
        className={`fade-in-section relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 ${
          isVisible ? "visible" : ""
        }`}
      >
        <div className="text-center space-y-8">

          {/* Badge */}
          <div
            style={{ transitionDelay: "100ms" }}
            className="inline-flex items-center space-x-2 px-4 py-2 bg-white/90 backdrop-blur-md border-2 border-[#5392d5]/40 rounded-full text-sm text-[#5392d5] font-semibold font-heading shadow-md fade-in-section visible"
          >
            <Sparkles className="w-4 h-4 text-[#5392d5]" strokeWidth={2} />
            <span>Your Strategic Partner in Building Successful Teams</span>
          </div>

          {/* Heading */}
          <h1
            style={{ transitionDelay: "200ms" }}
            className={`text-4xl sm:text-5xl lg:text-7xl font-bold text-[#151515] leading-tight font-heading ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            } transition-all duration-700`}
          >
            Top Recruitment Company in Hyderabad
<br />
<span className="text-[#5392d5] font-extrabold">
  for Hiring & Job Placement
</span>
          </h1>

          {/* Description */}
          <p
            style={{ transitionDelay: "300ms" }}
            className={`text-lg sm:text-xl lg:text-2xl text-[#4A4A4A] max-w-3xl mx-auto font-body font-medium ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            } transition-all duration-700`}
          >
            Looking for a reliable recruitment company in Hyderabad? 
           We help businesses hire top talent and professionals find the right opportunities faster across IT, Finance, and Healthcare.
          </p>

          {/* Buttons */}
          <div
            style={{ transitionDelay: "400ms" }}
            className={`flex flex-col sm:flex-row items-center justify-center gap-4 pt-8 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            } transition-all duration-700`}
          >
            <Link
              href="/form"
              className="group w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-[#5392d5] to-[#2F6FB3] hover:from-[#2F6FB3] hover:to-[#1F4F85] text-white rounded-lg font-semibold text-lg shadow-sm hover:shadow-xl hover:shadow-[#5392d5]/40 transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center space-x-2 font-heading"
            >
              <span>Connect Now</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>

            <button
              onClick={() => scrollToSection("#services")}
              className="w-full sm:w-auto px-8 py-4 bg-white border-2 border-[#5392d5] text-[#5392d5] rounded-lg font-semibold text-lg hover:bg-[#5392d5] hover:text-white transition-all duration-300 font-heading"
            >
              Explore Services
            </button>
          </div>

          {/* Stats */}
          <div
            style={{ transitionDelay: "500ms" }}
            className={`grid grid-cols-2 lg:grid-cols-4 gap-8 pt-16 max-w-4xl mx-auto ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            } transition-all duration-700`}
          >
            {[
              { value: "Expert", label: "Talent Sourcing" },
              { value: "Fast", label: "Placement Process" },
              { value: "100%", label: "Dedicated Support" },
              { value: "24/7", label: "Available Support" },
            ].map((stat, index) => (
              <div
                key={index}
                className="p-6 bg-white border-2 border-[#5392d5]/30 rounded-xl shadow-md hover:border-[#5392d5] hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="text-3xl lg:text-4xl font-bold text-[#5392d5] mb-2 font-heading">
                  {stat.value}
                </div>
                <div className="text-sm text-[#4A4A4A] font-semibold font-heading">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}