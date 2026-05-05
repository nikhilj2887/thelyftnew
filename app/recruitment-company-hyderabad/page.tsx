export const metadata = {
  title: "Top Recruitment Company in Hyderabad | thelyft",
  description:
    "Looking for a reliable recruitment company in Hyderabad? thelyft provides staffing, hiring, and HR consultancy services across IT, Finance, and Healthcare.",
};

export default function RecruitmentHyderabad() {
  return (
    <div className="bg-white text-[#151515]">

      {/* HERO */}
      <section className="py-20 px-4 text-center max-w-5xl mx-auto">
        <h1 className="text-4xl lg:text-6xl font-bold mb-6">
          Top Recruitment Company in Hyderabad
        </h1>

        <p className="text-lg text-gray-600 mb-8">
          thelyft is a trusted recruitment company in Hyderabad helping businesses hire top talent and professionals find the right opportunities across industries.
        </p>

        <a
          href="/form"
          className="inline-block px-8 py-4 bg-[#5392d5] text-white rounded-lg font-semibold hover:bg-[#2F6FB3] transition"
        >
          Hire Talent Now
        </a>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-16 bg-gray-50 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center">
            Why Choose thelyft?
          </h2>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="font-semibold text-xl mb-2">Expert Talent Sourcing</h3>
              <p className="text-gray-600">
                We connect you with highly skilled professionals across multiple industries.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-xl mb-2">Fast Hiring Process</h3>
              <p className="text-gray-600">
                Reduce hiring time with our streamlined recruitment solutions.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-xl mb-2">Dedicated Support</h3>
              <p className="text-gray-600">
                Our team supports you at every step of your hiring journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Our Recruitment Services in Hyderabad
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-6 border rounded-lg">
            <h3 className="font-semibold text-xl mb-2">Permanent Staffing</h3>
            <p className="text-gray-600">
              Hire full-time employees who align with your company culture and goals.
            </p>
          </div>

          <div className="p-6 border rounded-lg">
            <h3 className="font-semibold text-xl mb-2">Temporary Staffing</h3>
            <p className="text-gray-600">
              Flexible staffing solutions for short-term and project-based needs.
            </p>
          </div>

          <div className="p-6 border rounded-lg">
            <h3 className="font-semibold text-xl mb-2">Executive Search</h3>
            <p className="text-gray-600">
              Find top leadership talent to drive your business forward.
            </p>
          </div>

          <div className="p-6 border rounded-lg">
            <h3 className="font-semibold text-xl mb-2">HR Consulting</h3>
            <p className="text-gray-600">
              Optimize your hiring strategy with expert HR consulting services.
            </p>
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="py-16 bg-gray-50 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Industries We Serve
          </h2>

          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>Information Technology</div>
            <div>Finance & Banking</div>
            <div>Healthcare</div>
            <div>Manufacturing</div>
            <div>Sales & Marketing</div>
            <div>Startups</div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center px-4">
        <h2 className="text-3xl font-bold mb-4">
          Looking to Hire in Hyderabad?
        </h2>

        <p className="text-gray-600 mb-8">
          Partner with thelyft to find the right talent faster.
        </p>

        <a
          href="/form"
          className="inline-block px-8 py-4 bg-[#5392d5] text-white rounded-lg font-semibold hover:bg-[#2F6FB3] transition"
        >
          Get Started
        </a>
      </section>

    </div>
  );
}