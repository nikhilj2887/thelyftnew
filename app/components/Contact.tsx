"use client";

import { Mail, Phone, MapPin } from "lucide-react";
import { FaWhatsapp, FaLinkedin, FaInstagram, FaYoutube } from "react-icons/fa";
import Link from "next/link";
import { useInView } from "../hooks/useInView";

export default function Contact() {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "Careers@thelyft.in",
      link: "mailto:Careers@thelyft.in",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+91 9642232781",
      link: "tel:+919642232781",
    },
    {
      icon: MapPin,
      title: "Location",
      value:
        "4th floor, Chikoti Garden Rd, Old Patigadda, Chikoti Gardens, Begumpet, Hyderabad, Telangana 500016",
      link: "#",
    },
  ];

  const socialLinks = [
    {
      icon: FaWhatsapp,
      link: "https://whatsapp.com/channel/0029VaqdQR6JENy4BsCCCD0I",
      color: "hover:text-green-400",
    },
    {
      icon: FaLinkedin,
      link: "https://www.linkedin.com/company/thelyft",
      color: "hover:text-blue-400",
    },
    {
      icon: FaInstagram,
      link: "https://www.instagram.com/the_lyft/",
      color: "hover:text-pink-400",
    },
    {
      icon: FaYoutube,
      link: "https://www.youtube.com/@thelyft_official",
      color: "hover:text-red-400",
    },
  ];

  const { ref, isVisible } = useInView();

  return (
    <section
      id="contact"
      className="relative py-24 lg:py-32 overflow-hidden bg-white"
    >
      <div
        ref={ref}
        className={`fade-in-section relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${
          isVisible ? "visible" : ""
        }`}
      >

        {/* HEADING */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 border border-[#5392d5]/30 rounded-full text-sm text-[#5392d5] mb-6 font-heading">
            Get in Touch
          </div>

          <h2 className="text-3xl lg:text-5xl font-bold text-[#151515] mb-6 font-heading">
            Ready to Build Your
            <span className="text-[#5392d5]"> Dream Team?</span>
          </h2>

          <p className="text-lg text-[#4A4A4A] max-w-2xl mx-auto font-body">
            Get in touch today and let us help you find the perfect talent
          </p>
        </div>

        {/* CONTACT CARDS */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {contactInfo.map((info, index) => {
            const { ref, isVisible } = useInView();

            return (
              <a
                key={index}
                ref={ref}
                href={info.link}
                style={{ transitionDelay: `${index * 100}ms` }}
                className={`fade-in-section group p-8 bg-white border border-[#5392d5]/20 rounded-2xl shadow-sm hover:border-[#5392d5]/50 hover:shadow-xl transition-all duration-300 text-center hover:-translate-y-1 ${
                  isVisible ? "visible" : ""
                }`}
              >
                <div className="inline-flex p-3 bg-gradient-to-br from-[#5392d5]/30 to-[#f0c831]/30 rounded-xl mb-4 shadow-sm group-hover:scale-110 group-hover:shadow-md transition-all duration-300">
                  <info.icon className="w-6 h-6 text-[#5392d5]" />
                </div>

                <h3 className="text-[#4A4A4A] text-sm mb-2 font-heading">
                  {info.title}
                </h3>

                <p className="text-[#151515] text-lg font-semibold font-body">
                  {info.value}
                </p>
              </a>
            );
          })}
        </div>

        {/* SOCIAL + CTA */}
        <div className="text-center">

          {/* SOCIAL */}
          <div className="flex justify-center space-x-6 mb-8">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-4 border border-[#5392d5]/20 rounded-xl text-[#4A4A4A] ${social.color} transition-all duration-300 hover:scale-110`}
              >
                <social.icon className="w-6 h-6" />
              </a>
            ))}
          </div>

          {/* CTA */}
          <div
            className={`fade-in-section p-8 lg:p-12 border border-[#5392d5]/30 rounded-3xl max-w-3xl mx-auto shadow-sm ${
              isVisible ? "visible" : ""
            }`}
          >
            <h3 className="text-2xl lg:text-3xl font-bold text-[#151515] mb-4 font-heading">
              Let's Discuss Your Staffing Needs
            </h3>

            <p className="text-[#4A4A4A] mb-8 font-body">
              Connect with us today to discuss your hiring requirements
            </p>

            <Link
              href="/form"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#5392d5] to-[#2F6FB3] hover:from-[#2F6FB3] hover:to-[#1F4F85] text-white rounded-lg font-semibold text-lg shadow-sm hover:shadow-xl transition-all duration-300"
            >
              Connect With Us →
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}