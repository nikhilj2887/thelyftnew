"use client";

import { Award, Target, TrendingUp, Users as Users2 } from "lucide-react";
import { useInView } from "../hooks/useInView";

export default function About() {
  const highlights = [
    {
      icon: Award,
      title: "Integrity",
      description:
        "Building trust through honest and transparent partnerships",
    },
    {
      icon: Target,
      title: "Innovation",
      description:
        "Leveraging cutting-edge recruitment strategies and technology",
    },
    {
      icon: TrendingUp,
      title: "Dedication",
      description:
        "Committed to finding the perfect match for every position",
    },
    {
      icon: Users2,
      title: "Quality Focus",
      description:
        "Delivering exceptional talent that drives business success",
    },
  ];

  const { ref, isVisible } = useInView();

  return (
    <section
      id="about"
      className="relative py-24 lg:py-32 overflow-hidden bg-gray-50"
    >
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-5"
          style={{
            backgroundImage:
              "url(https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1920)",
          }}
        ></div>
      </div>

      <div
        ref={ref}
        className={`fade-in-section relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${
          isVisible ? "visible" : ""
        }`}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* LEFT CONTENT */}
          <div className="space-y-8">
            <div>
              <div className="inline-block px-4 py-2 bg-[#2F6FB3]/10 backdrop-blur-sm border border-[#2F6FB3]/30 rounded-full text-sm text-[#2F6FB3] mb-6 font-heading">
                About thelyft
              </div>

              <h2 className="text-3xl lg:text-5xl font-bold text-[#151515] mb-6 leading-tight font-heading">
                More Than Just a
                <span className="text-[#2F6FB3]"> Staffing Agency</span>
              </h2>
            </div>

            <div className="space-y-6 text-[#4A4A4A] text-lg font-body">
              <p>
  thelyft is a leading recruitment company in Hyderabad providing staffing services and HR consultancy solutions for businesses across IT, Finance, and Healthcare industries. 
  We are your strategic partner in building successful teams through integrity, innovation, and dedication.
</p>

              <p>
                As a trusted staffing services company in Hyderabad, we understand that finding the right people is more than just filling positions. 
  It is about building teams that drive your business forward.
              </p>

              <p>
                Whether you need permanent staffing, temporary solutions, executive search, 
                or full recruitment outsourcing, we provide tailored services.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <div className="px-6 py-3 bg-gradient-to-r from-[#5392d5]/10 to-[#f0c831]/10 border border-[#5392d5]/30 rounded-lg text-[#151515] font-heading">
                Staffing Solutions
              </div>
              <div className="px-6 py-3 bg-gradient-to-r from-[#5392d5]/10 to-[#f0c831]/10 border border-[#5392d5]/30 rounded-lg text-[#151515] font-heading">
                Executive Search
              </div>
              <div className="px-6 py-3 bg-gradient-to-r from-[#5392d5]/10 to-[#f0c831]/10 border border-[#5392d5]/30 rounded-lg text-[#151515] font-heading">
                HR Consulting
              </div>
            </div>
          </div>

          {/* RIGHT CARDS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {highlights.map((item, index) => {
              const { ref, isVisible } = useInView();

              return (
                <div
                  key={index}
                  ref={ref}
                  style={{ transitionDelay: `${index * 100}ms` }}
                  className={`fade-in-section group p-6 bg-white border border-[#5392d5]/20 rounded-2xl shadow-sm hover:border-[#5392d5]/50 hover:shadow-xl hover:shadow-[#5392d5]/10 transition-all duration-300 hover:-translate-y-1 ${
                    isVisible ? "visible" : ""
                  }`}
                >
                  <div className="inline-flex p-3 bg-gradient-to-br from-[#5392d5]/30 to-[#f0c831]/30 rounded-xl mb-4 shadow-sm group-hover:scale-110 group-hover:shadow-md group-hover:shadow-[#5392d5]/20 transition-all duration-300">
                    <item.icon className="w-6 h-6 text-[#5392d5]" strokeWidth={2} />
                  </div>

                  <h3 className="text-lg font-bold text-[#151515] mb-2 font-heading">
                    {item.title}
                  </h3>

                  <p className="text-[#4A4A4A] text-sm font-body">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}