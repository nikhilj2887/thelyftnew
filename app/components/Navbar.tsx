"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );
  }, []);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#expertise", label: "Expertise" },
    { href: "#contact", label: "Contact" },
  ];

  const handleNavigation = (href: string) => {

    // If not on homepage
    if (
      pathname === "/form" ||
      pathname === "/resume-builder" ||
      pathname === "/founder"
    ) {
      router.push("/" + href);
      setIsMobileMenuOpen(false);
      return;
    }

    // Smooth scroll on homepage
    const element =
      document.querySelector(href);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      });

      setIsMobileMenuOpen(false);
    }
  };

  const navItemStyle =
    "px-3 xl:px-4 py-2 text-[#4A4A4A] hover:text-[#151515] transition-all duration-300 relative group font-medium text-sm xl:text-base";

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-xl border-b border-[#5392d5]/10 shadow-md"
          : "bg-white/90 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex items-center justify-between h-16 lg:h-20">

          {/* Logo */}
          <Link
            href="/"
            className="flex items-center group flex-shrink-0"
          >
            <img
              src="/thelyft-logo.png"
              alt="thelyft"
              className="h-10 sm:h-11 lg:h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center">

            {/* Main Nav */}
            <div className="flex items-center space-x-1">

              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() =>
                    handleNavigation(link.href)
                  }
                  className={navItemStyle}
                >
                  <span className="relative z-10">
                    {link.label}
                  </span>

                  <div className="absolute inset-0 bg-gradient-to-r from-[#5392d5]/0 via-[#5392d5]/10 to-[#f0c831]/0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </button>
              ))}

              {/* Founder */}
              <Link
                href="/founder"
                className={`${navItemStyle} ${
                  pathname === "/founder"
                    ? "text-[#151515] font-semibold"
                    : ""
                }`}
              >
                Founder
              </Link>

              {/* Resume Builder */}
              <Link
                href="/resume-builder"
                className={`${navItemStyle} ${
                  pathname === "/resume-builder"
                    ? "text-[#151515] font-semibold"
                    : ""
                }`}
              >
                Resume Builder
              </Link>

            </div>

            {/* CTA */}
            <Link
              href="/form"
              className="ml-4 xl:ml-6 px-5 xl:px-6 py-2.5 xl:py-3 bg-[#f0c831] text-[#151515] rounded-xl font-semibold text-sm xl:text-base hover:bg-[#e3b721] hover:shadow-lg hover:shadow-[#f0c831]/30 transition-all duration-300 transform hover:-translate-y-0.5 whitespace-nowrap"
            >
              Connect With Us
            </Link>

          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() =>
              setIsMobileMenuOpen(
                !isMobileMenuOpen
              )
            }
            className="lg:hidden p-2 text-[#151515] hover:bg-[#5392d5]/10 rounded-lg transition-colors"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>

        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-[#5392d5]/10 shadow-lg animate-in slide-in-from-top duration-300">

          <div className="px-4 py-5 space-y-2">

            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() =>
                  handleNavigation(link.href)
                }
                className="block w-full text-left px-4 py-3 rounded-xl text-[#4A4A4A] hover:text-[#151515] hover:bg-[#5392d5]/10 transition-all duration-300 font-medium"
              >
                {link.label}
              </button>
            ))}

            {/* Founder */}
            <Link
              href="/founder"
              onClick={() =>
                setIsMobileMenuOpen(false)
              }
              className={`block px-4 py-3 rounded-xl transition-all duration-300 font-medium ${
                pathname === "/founder"
                  ? "bg-[#5392d5]/10 text-[#151515]"
                  : "text-[#4A4A4A] hover:bg-[#5392d5]/10"
              }`}
            >
              Founder
            </Link>

            {/* Resume Builder */}
            <Link
              href="/resume-builder"
              onClick={() =>
                setIsMobileMenuOpen(false)
              }
              className={`block px-4 py-3 rounded-xl transition-all duration-300 font-medium ${
                pathname === "/resume-builder"
                  ? "bg-[#5392d5]/10 text-[#151515]"
                  : "text-[#4A4A4A] hover:bg-[#5392d5]/10"
              }`}
            >
              Resume Builder
            </Link>

            {/* CTA */}
            <Link
              href="/form"
              onClick={() =>
                setIsMobileMenuOpen(false)
              }
              className="block mt-3 px-4 py-3 bg-[#f0c831] text-[#151515] rounded-xl font-semibold text-center hover:bg-[#e3b721] transition-all duration-300"
            >
              Connect With Us
            </Link>

          </div>
        </div>
      )}
    </nav>
  );
}