"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import Navbar from "../components/Navbar";
import emailjs from "@emailjs/browser";

export default function FormPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    role: "",
    service: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        "service_mpv2zhy",
        "template_3wocfs1",
        formData,
        "eJavp4TkqXR9RoRJR"
      );

      setSubmitStatus("success");

      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        role: "",
        service: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
      setSubmitStatus("error");
    }

    setIsSubmitting(false);

    setTimeout(() => setSubmitStatus("idle"), 5000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-white">
      <Navbar />

      <div className="pt-28 px-4 flex justify-center">
        <div className="w-full max-w-2xl">

          {/* FORM CARD */}
          <div className="bg-white border border-[#5392d5]/20 rounded-2xl shadow-xl p-8">

            {submitStatus === "success" && (
              <div className="mb-6 p-4 bg-green-100 text-green-700 rounded-lg">
                Request submitted successfully. We will contact you soon.
              </div>
            )}

            {submitStatus === "error" && (
              <div className="mb-6 p-4 bg-red-100 text-red-700 rounded-lg">
                Something went wrong. Please try again.
              </div>
            )}

            <form
              onSubmit={handleSubmit}
              className={`space-y-6 ${
                isSubmitting ? "opacity-70 pointer-events-none" : ""
              }`}
            >

              {/* INPUT STYLE */}
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg text-[#151515] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#5392d5]"
              />

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg text-[#151515] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#5392d5]"
              />

              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg text-[#151515] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#5392d5]"
              />

              <input
                type="text"
                name="company"
                placeholder="Company Name"
                value={formData.company}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg text-[#151515] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#5392d5]"
              />

              <input
                type="text"
                name="role"
                placeholder="Your Role"
                value={formData.role}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg text-[#151515] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#5392d5]"
              />

              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white text-[#151515] focus:outline-none focus:ring-2 focus:ring-[#5392d5]"
              >
                <option>Select Service</option>
<option>Permanent Staffing</option>
<option>Executive Search</option>
<option>Recruitment Process Outsourcing</option>
<option>Temporary Staffing</option>
<option>Consulting Services</option>
              </select>

              <textarea
                name="message"
                placeholder="Tell us about your needs"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg text-[#151515] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#5392d5]"
              />

              {/* BUTTON */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-[#5392d5] to-[#2F6FB3] hover:from-[#2F6FB3] hover:to-[#1F4F85] text-white py-3 rounded-lg font-semibold shadow-sm hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
              >
                {isSubmitting ? "Sending..." : "Submit Request"}
                <Send className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}