import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import { FaWhatsapp, FaLinkedin, FaInstagram, FaYoutube } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
  ];

  const services = [
    'Permanent Staffing',
    'Temporary Staffing',
    'Executive Search',
    'RPO',
    'Consulting',
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative bg-[#5392d5] overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#f0c831] rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <span className="text-2xl font-bold text-white font-['Space_Grotesk']">
                thelyft
              </span>
            </div>
            <p className="text-sm text-white font-body">
              Where Opportunity Meets Growth
            </p>
            <p className="text-white/90 font-body">
              Your strategic partner in building successful teams through integrity, innovation, and dedication.
            </p>
            <div className="flex items-center space-x-4">
              <a
                href="https://www.linkedin.com/company/thelyft"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white hover:bg-white/20 hover:border-white/40 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/the_lyft/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white hover:bg-white/20 hover:border-white/40 transition-all duration-300"
                aria-label="Instagram"
              >
                <FaInstagram className="w-5 h-5" />
              </a>
              <a
                href="https://whatsapp.com/channel/0029VaqdQR6JENy4BsCCCD0I"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white hover:bg-white/20 hover:border-white/40 transition-all duration-300"
                aria-label="WhatsApp Channel"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
              <a
                href="https://www.youtube.com/@thelyft_official"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white hover:bg-white/20 hover:border-white/40 transition-all duration-300"
                aria-label="YouTube"
              >
                <FaYoutube className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4 font-body">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href)}
                    className="text-white/90 hover:text-white transition-colors duration-300 font-body"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4 font-body">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-white/90 font-body">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4 font-body">Contact Us</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:Careers@thelyft.in"
                  className="flex items-start space-x-3 text-white/90 hover:text-white transition-colors duration-300 font-body"
                >
                  <Mail className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <span>Careers@thelyft.in</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+919642232781"
                  className="flex items-start space-x-3 text-white/90 hover:text-white transition-colors duration-300 font-body"
                >
                  <Phone className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <span>+91 9642232781</span>
                </a>
              </li>
              <li>
                <div className="flex items-start space-x-3 text-white/90 font-body">
                  <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <span>4th floor, Chikoti Garden Rd, Old Patigadda, Chikoti Gardens, Begumpet, Hyderabad, Telangana 500016</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/20">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex flex-col items-center md:items-start space-y-2">
              <p className="text-white/90 text-sm font-body">
                © {currentYear} thelyft. All rights reserved.
              </p>
              <p className="text-white/80 text-sm font-body">
                Powered by:{' '}
                <a
                  href="https://therapidnest.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-[#f0c831] transition-colors duration-300 underline"
                >
                  therapidnest
                </a>
              </p>
            </div>
            <div className="flex items-center space-x-6">
              <a href="#" className="text-white/90 hover:text-white text-sm transition-colors duration-300 font-body">
                Privacy Policy
              </a>
              <a href="#" className="text-white/90 hover:text-white text-sm transition-colors duration-300 font-body">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
