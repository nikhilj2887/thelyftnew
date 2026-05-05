import { UserCheck, Clock, Search, Headphones as HeadphonesIcon } from 'lucide-react';

export default function Trust() {
  const process = [
    {
      icon: UserCheck,
      title: 'Consultation',
      description: 'We understand your specific staffing needs, company culture, and business goals',
    },
    {
      icon: Search,
      title: 'Talent Sourcing',
      description: 'Using our extensive networks and advanced recruiting tools to find the perfect match',
    },
    {
      icon: HeadphonesIcon,
      title: 'Follow-Up',
      description: 'Post-placement support to ensure smooth transitions and resolve any issues',
    },
    {
      icon: Clock,
      title: 'Quick Turnaround',
      description: 'Efficient processes that get you quality candidates faster than traditional methods',
    },
  ];

  return (
    <section className="relative py-20 lg:py-32 overflow-hidden bg-white">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-white border border-[#5392d5]/30 rounded-full text-sm text-[#5392d5] mb-6 font-heading shadow-sm">
            Our Process
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold text-[#151515] mb-6 font-heading">
            Why Choose
            <span className="text-[#5392d5]"> thelyft</span>
          </h2>
          <p className="text-lg text-[#4A4A4A] max-w-2xl mx-auto font-body">
            Built on principles of integrity, innovation, and dedication to connect exceptional talent with outstanding companies
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {process.map((item, index) => (
            <div
              key={index}
              className="group relative p-8 bg-white border border-[#5392d5]/20 rounded-2xl hover:border-[#5392d5]/50 hover:shadow-xl transition-all duration-500 hover:transform hover:-translate-y-2"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#5392d5]/0 via-[#5392d5]/0 to-[#f0c831]/0 group-hover:from-[#5392d5]/5 group-hover:to-[#f0c831]/5 rounded-2xl transition-all duration-500"></div>

              <div className="relative z-10">
                <div className="inline-flex p-3 bg-gradient-to-br from-[#5392d5]/30 to-[#f0c831]/30 rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="w-8 h-8 text-[#5392d5]" strokeWidth={2} />
                </div>

                <h3 className="text-xl font-bold text-[#151515] mb-3 font-heading">
                  {item.title}
                </h3>

                <p className="text-[#4A4A4A] font-body">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
