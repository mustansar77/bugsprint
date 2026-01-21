import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Jane Doe',
      role: 'SaaS Founder',
      quote: 'I submitted a critical bug and it was fixed the next day. Saved me hours of frustration!',
    },
    {
      name: 'Tom K.',
      role: 'Startup Founder',
      quote: 'BugSprint saved our launch — fast, reliable, no headaches.',
    },
    {
      name: 'Sarah L.',
      role: 'Product Manager',
      quote: 'I love how simple and fast BugSprint is. Small tasks are done in no time!',
    },
  ];

  return (
    <section id="testimonials" className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold text-[#4F46E5] mb-4">What Our Users Say</h2>
        <p className="text-[#4B5563] text-lg mb-12">
          Real feedback from founders and developers using BugSprint.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-[#F4F7FA] p-8 rounded-xl shadow-md hover:shadow-xl transition"
            >
              <p className="text-[#1F2937] mb-6">"{testimonial.quote}"</p>
              <h3 className="text-[#4F46E5] font-semibold text-lg">{testimonial.name}</h3>
              <p className="text-[#4B5563] text-sm">{testimonial.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
