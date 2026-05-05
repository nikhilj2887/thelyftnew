import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Rajesh Kumar',
      role: 'VP of Operations',
      company: 'Tech Solutions Pvt Ltd',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400',
      text: 'thelyft helped us build a world-class tech team in record time. Their understanding of our culture and technical requirements was exceptional. The candidates they presented were all high-quality.',
      rating: 5,
    },
    {
      name: 'Priya Sharma',
      role: 'HR Director',
      company: 'Global Enterprises',
      image: 'https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=400',
      text: 'Working with thelyft has been a game-changer for our recruitment process. They understood our needs perfectly and delivered exceptional candidates. Highly professional and responsive team!',
      rating: 5,
    },
    {
      name: 'Amit Patel',
      role: 'Startup Founder',
      company: 'InnovateCo',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
      text: 'As a growing startup, we needed quick and reliable staffing solutions. thelyft delivered exactly what we needed—talented professionals who fit our culture and hit the ground running.',
      rating: 5,
    },
    {
      name: 'Sneha Reddy',
      role: 'Chief People Officer',
      company: 'Manufacturing Corp',
      image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400',
      text: 'The RPO service from thelyft transformed our hiring process. They handled everything from sourcing to onboarding seamlessly. Our time-to-hire reduced by 50%. Excellent partnership!',
      rating: 5,
    },
  ];

  return (
    <section className="relative py-20 lg:py-32 overflow-hidden bg-gray-50">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-white border border-[#5392d5]/30 rounded-full text-sm text-[#5392d5] mb-6 font-heading shadow-sm">
            Client Success Stories
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold text-[#151515] mb-6 font-heading">
            Trusted by
            <span className="text-[#5392d5]"> Industry Leaders</span>
          </h2>
          <p className="text-lg text-[#4A4A4A] max-w-2xl mx-auto font-body">
            See what our clients say about their transformation journey with us
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group relative p-8 bg-white border border-[#5392d5]/20 rounded-3xl hover:border-[#5392d5]/50 hover:shadow-xl transition-all duration-500"
            >
              <div className="absolute top-6 right-6 text-[#5392d5]/10 group-hover:text-[#5392d5]/20 transition-colors duration-300">
                <Quote className="w-12 h-12" />
              </div>

              <div className="relative z-10">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-[#f0c831] fill-current" />
                  ))}
                </div>

                <p className="text-[#4A4A4A] text-lg mb-6 leading-relaxed font-body">
                  "{testimonial.text}"
                </p>

                <div className="flex items-center space-x-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-[#5392d5]/30"
                  />
                  <div>
                    <div className="text-[#151515] font-bold font-heading">
                      {testimonial.name}
                    </div>
                    <div className="text-[#4A4A4A] text-sm font-body">
                      {testimonial.role}, {testimonial.company}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
