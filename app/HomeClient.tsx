"use client";

import Navbar from "./components/Navbar";
import AnimatedBackground from "./components/AnimatedBackground";
import Hero from "./components/Hero";
import Trust from "./components/Trust";
import About from "./components/About";
import Services from "./components/Services";
import Expertise from "./components/Expertise";
import Training from "./components/Training";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import FloatingWhatsApp from "./components/FloatingWhatsApp";

export default function HomeClient() {
  return (
    <div className="min-h-screen bg-[#050816] text-white overflow-x-hidden">
      <AnimatedBackground />
      <Navbar />

      <main>
        <Hero />
        <Trust />
        <About />
        <Services />
        <Expertise />
        <Training />
        <Contact />
      </main>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}