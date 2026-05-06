import { Target, Users, GraduationCap, Compass, Briefcase, ArrowRight } from 'lucide-react';
import Navbar from './Navbar';

export default function FounderPage() {
  const initiatives = [
    {
      icon: Target,
      title: 'Perfect Job Matches',
      description: 'Bridging gaps between market demands and individual strengths for ideal career placements.',
    },
    {
      icon: GraduationCap,
      title: 'Skill Development',
      description: 'Training, workshops, and upskilling programs to prepare talent for modern roles.',
    },
    {
      icon: Users,
      title: 'Equal Opportunities',
      description: 'Championing underrepresented groups, fresh graduates, and career returnees.',
    },
    {
      icon: Compass,
      title: 'Career Guidance',
      description: 'Coaching, resume building, and interview preparation to build confidence.',
    },
    {
      icon: Briefcase,
      title: 'Reliable Staffing',
      description: 'Boosting business productivity and local economies with dependable talent solutions.',
    },
  ];

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      <Navbar />

      <section className="relative pt-28 lg:pt-36 pb-20 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-20 left-10 w-96 h-96 bg-[#5392d5] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
          <div className="absolute top-40 right-10 w-96 h-96 bg-[#f0c831] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-20 left-1/2 w-96 h-96 bg-[#5392d5] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="order-2 lg:order-1 space-y-8">
              <div>
                <div className="inline-block px-4 py-2 bg-[#5392d5]/10 backdrop-blur-sm border border-[#5392d5]/30 rounded-full text-sm text-[#5392d5] mb-6 font-heading font-semibold">
                  Meet the Founder
                </div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#151515] mb-4 leading-tight font-heading">
                  Nikhil Artham
                </h1>
                <p className="text-lg lg:text-xl text-[#5392d5] font-semibold font-heading">
                  Founder & CEO, thelyft Consulting
                </p>
              </div>

              <div className="space-y-5 text-[#4A4A4A] text-lg leading-relaxed font-body">
                <p>
                  Experienced senior manager with a proven track record in the information technology
                  and services industry. Skilled in recruiting, staffing, business development, people
                  management, account management, and business management.
                </p>
                <p>
                  Holds an MBA in Human Resources Management and Services from Matrix Institute of
                  Business Management.
                </p>
              </div>

              <div className="p-6 bg-gradient-to-r from-[#5392d5]/5 to-[#f0c831]/5 border border-[#5392d5]/20 rounded-2xl">
                <p className="text-[#151515] text-lg italic font-body leading-relaxed">
                  "For hiring needs that go the extra mile, turn to those who do their job with
                  passion for a purpose — lyft: We'll Get You There."
                </p>
              </div>
            </div>

            <div className="order-1 lg:order-2 flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#5392d5]/20 to-[#f0c831]/20 rounded-3xl blur-2xl scale-110"></div>
                <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-3xl overflow-hidden border-4 border-white shadow-2xl">
                  <img
                    src="https://images.pexels.com/photos/3184611/pexels-photo-3184611.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Nikhil Artham - Founder of thelyft"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-2xl shadow-xl border border-[#5392d5]/20">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-[#5392d5] font-heading">Dec 2024</p>
                    <p className="text-sm text-[#4A4A4A] font-body">Founded thelyft</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-20 lg:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-[#5392d5]/10 backdrop-blur-sm border border-[#5392d5]/30 rounded-full text-sm text-[#5392d5] mb-6 font-heading font-semibold">
              The Story
            </div>
            <h2 className="text-3xl lg:text-5xl font-bold text-[#151515] mb-6 font-heading">
              Why <span className="text-[#5392d5]">thelyft</span> Exists
            </h2>
            <p className="text-lg text-[#4A4A4A] max-w-3xl mx-auto font-body leading-relaxed">
              Founded in December 2024 to tackle India's unemployment crisis. With 99% of jobseekers
              expecting seamless experiences across multiple platforms, thelyft streamlines the process
              by bridging skilled talent with businesses.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="p-8 bg-white border border-[#5392d5]/20 rounded-3xl hover:border-[#5392d5]/40 hover:shadow-lg transition-all duration-300">
              <div className="inline-flex p-3 bg-gradient-to-br from-[#5392d5]/30 to-[#f0c831]/30 rounded-xl mb-5">
                <Target className="w-7 h-7 text-[#5392d5]" strokeWidth={2} />
              </div>
              <h3 className="text-xl font-bold text-[#151515] mb-3 font-heading">Our Mission</h3>
              <p className="text-[#4A4A4A] font-body leading-relaxed">
                To create a world where every skilled individual finds meaningful work, and every
                business finds the talent to thrive. We bridge the gap between potential and opportunity.
              </p>
            </div>
            <div className="p-8 bg-white border border-[#5392d5]/20 rounded-3xl hover:border-[#5392d5]/40 hover:shadow-lg transition-all duration-300">
              <div className="inline-flex p-3 bg-gradient-to-br from-[#5392d5]/30 to-[#f0c831]/30 rounded-xl mb-5">
                <Compass className="w-7 h-7 text-[#5392d5]" strokeWidth={2} />
              </div>
              <h3 className="text-xl font-bold text-[#151515] mb-3 font-heading">Our Vision</h3>
              <p className="text-[#4A4A4A] font-body leading-relaxed">
                To be India's most trusted workforce partner — empowering careers, transforming
                businesses, and building stronger communities through meaningful employment.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-[#5392d5]/10 backdrop-blur-sm border border-[#5392d5]/30 rounded-full text-sm text-[#5392d5] mb-6 font-heading font-semibold">
              Key Initiatives
            </div>
            <h2 className="text-3xl lg:text-5xl font-bold text-[#151515] mb-6 font-heading">
              Driving <span className="text-[#5392d5]">Impact</span> at Scale
            </h2>
            <p className="text-lg text-[#4A4A4A] max-w-3xl mx-auto font-body">
              Strategic initiatives designed to address India's workforce challenges head-on
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {initiatives.map((item, index) => (
              <div
                key={index}
                className="group p-8 bg-white border border-[#5392d5]/20 rounded-3xl hover:border-[#5392d5]/50 hover:shadow-lg transition-all duration-500 hover:transform hover:-translate-y-2"
              >
                <div className="inline-flex p-4 bg-gradient-to-br from-[#5392d5]/30 to-[#f0c831]/30 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="w-7 h-7 text-[#5392d5]" strokeWidth={2} />
                </div>
                <h3 className="text-xl font-bold text-[#151515] mb-3 font-heading">
                  {item.title}
                </h3>
                <p className="text-[#4A4A4A] font-body leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20 lg:py-28 bg-gradient-to-br from-[#5392d5] to-[#2F6FB3] overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full mix-blend-overlay filter blur-3xl opacity-10 animate-blob"></div>
          <div className="absolute bottom-10 right-10 w-64 h-64 bg-[#f0c831] rounded-full mix-blend-overlay filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6 font-heading">
            Ready to Build Your Dream Team?
          </h2>
          <p className="text-lg text-white/80 mb-10 font-body max-w-2xl mx-auto">
            Whether you're looking for top talent or your next career move, thelyft is here to
            bridge the gap between potential and opportunity.
          </p>
          <a
            href="/form"
            className="inline-flex items-center px-8 py-4 bg-[#f0c831] text-[#151515] rounded-lg font-semibold text-lg hover:bg-[#e3b721] hover:shadow-xl hover:shadow-black/20 transition-all duration-300 transform hover:-translate-y-1 font-heading"
          >
            Connect With Us
            <ArrowRight className="w-5 h-5 ml-2" />
          </a>
        </div>
      </section>
    </div>
  );
}
