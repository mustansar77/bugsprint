"use client"
import React, { useState } from 'react';
import { FaEnvelope, FaPhone } from 'react-icons/fa';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    taskType: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Integrate with backend or email API here
    alert(`Thank you, ${formData.name}! Your message has been sent.`);
    setFormData({ name: '', email: '', company: '', taskType: '', message: '' });
  };

  return (
    <section
      id="contact"
      className="bg-[#F4F7FA] relative overflow-hidden pt-36 pb-20 px-4 sm:px-6 lg:px-8"
    >
      {/* Decorative shapes */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-[#4F46E5] rounded-full mix-blend-multiply opacity-20 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#10B981] rounded-full mix-blend-multiply opacity-20 animate-pulse"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-[#4F46E5] mb-4 text-center">
          Contact Us
        </h2>
        <p className="text-[#4B5563] text-lg md:text-xl mb-12 text-center max-w-3xl mx-auto leading-relaxed">
          Have questions, want to submit your first task, or just want to get in touch? Fill out the form below and we’ll respond within 24 hours.
        </p>

        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-6 w-full">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-[#4F46E5] font-medium mb-2">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name || ''}
                onChange={handleChange}
                required
                placeholder="Your full name"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#4F46E5]"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-[#4F46E5] font-medium mb-2">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email || ''}
                onChange={handleChange}
                required
                placeholder="you@example.com"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#4F46E5]"
              />
            </div>

            {/* Company / Project */}
            <div>
              <label htmlFor="company" className="block text-[#4F46E5] font-medium mb-2">
                Company / Project
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company || ''}
                onChange={handleChange}
                placeholder="Your company or project name"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#4F46E5]"
              />
            </div>

            {/* Type of Task */}
            <div>
              <label htmlFor="taskType" className="block text-[#4F46E5] font-medium mb-2">
                Type of Task
              </label>
              <select
                id="taskType"
                name="taskType"
                value={formData.taskType || ''}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#4F46E5]"
              >
                <option value="">Select a task type</option>
                <option value="Bug Fix">Bug Fix</option>
                <option value="Small Feature">Small Feature</option>
                <option value="UI/UX Tweak">UI/UX Tweak</option>
                <option value="Backend/API">Backend/API</option>
                <option value="Other">Other</option>
              </select>
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-[#4F46E5] font-medium mb-2">
                Message <span className="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message || ''}
                onChange={handleChange}
                required
                placeholder="Write your message here"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#4F46E5]"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="px-8 py-4 bg-[#4F46E5] text-white font-medium rounded-lg hover:bg-[#4338CA] transition"
              >
                Send Message
              </button>
            </div>
          </form>

          {/* Info */}
          <div className="mt-8 text-center text-[#4B5563] text-sm space-y-1">
            <p className="flex items-center justify-center gap-2">
              <FaEnvelope /> <span>support@bugsprint.com</span>
            </p>
            <p className="flex items-center justify-center gap-2">
              <FaPhone /> <span>+1 (555) 123-4567</span>
            </p>
            <p>We usually respond within 24 hours.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
