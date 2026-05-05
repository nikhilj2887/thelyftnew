import { CheckCircle2, Users, TrendingUp, Award } from 'lucide-react';

export default function Training() {
  const benefits = [
    {
      title: 'Quality Talent Pool',
      description: 'Access to pre-screened, highly qualified candidates across all industries and levels',
      topics: [
        'Extensive talent database',
        'Industry-specific expertise',
        'Multi-level recruitment',
        'Diverse candidate sourcing',
      ],
    },
    {
      title: 'Efficient Process',
      description: 'Streamlined recruitment process that saves you time and reduces hiring costs',
      topics: [
        'Rapid candidate screening',
        'Automated workflow management',
        'Reduced time-to-hire',
        'Cost-effective solutions',
      ],
    },
    {
      title: 'Partnership Approach',
      description: 'We become an extension of your team, understanding your culture and business needs',
      topics: [
        'Dedicated account management',
        'Cultural fit assessment',
        'Long-term partnerships',
        'Ongoing support & consultation',
      ],
    },
  ];

  return (
    <section className="relative py-20 lg:py-32 overflow-hidden bg-gray-50">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-white border border-[#5392d5]/30 rounded-full text-sm text-[#5392d5] mb-6 font-heading shadow-sm">
            Why Partner With Us
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold text-[#151515] mb-6 font-heading">
            thelyft
            <span className="text-[#5392d5]"> Advantage</span>
          </h2>
          <p className="text-lg text-[#4A4A4A] max-w-3xl mx-auto font-body">
            Experience the difference of working with a dedicated staffing partner who truly understands your needs
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group relative p-8 bg-white border border-[#5392d5]/20 rounded-3xl hover:border-[#5392d5]/50 hover:shadow-xl transition-all duration-500"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#5392d5]/0 to-[#f0c831]/0 group-hover:from-[#5392d5]/5 group-hover:to-[#f0c831]/5 rounded-3xl transition-all duration-500"></div>

              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-[#151515] mb-4 font-heading">
                  {benefit.title}
                </h3>

                <p className="text-[#4A4A4A] mb-6 font-body">
                  {benefit.description}
                </p>

                <div className="border-t border-[#5392d5]/20 pt-6">
                  <ul className="space-y-3">
                    {benefit.topics.map((topic, i) => (
                      <li key={i} className="flex items-start space-x-3 text-[#4A4A4A] font-body">
                        <CheckCircle2 className="w-5 h-5 text-[#5392d5] mt-0.5 flex-shrink-0" strokeWidth={2.5} />
                        <span>{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: Award, title: 'Proven Track Record', description: 'Successful placements across industries' },
            { icon: Users, title: 'Expert Team', description: 'Experienced recruitment professionals' },
            { icon: CheckCircle2, title: 'Quality Assurance', description: 'Thorough vetting and verification' },
            { icon: TrendingUp, title: 'Scalable Solutions', description: 'Grow with your business needs' },
          ].map((feature, index) => (
            <div
              key={index}
              className="p-6 bg-white border border-[#5392d5]/20 rounded-2xl hover:border-[#5392d5]/50 hover:shadow-lg transition-all duration-300 text-center"
            >
              <div className="inline-flex p-3 bg-gradient-to-br from-[#5392d5]/30 to-[#f0c831]/30 rounded-xl mb-4">
                <feature.icon className="w-6 h-6 text-[#5392d5]" strokeWidth={2} />
              </div>
              <h4 className="text-[#151515] font-bold mb-2 font-heading">{feature.title}</h4>
              <p className="text-[#4A4A4A] text-sm font-body">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
