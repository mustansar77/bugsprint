import React from 'react';
import { FaStar } from 'react-icons/fa';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Jane Doe',
      role: 'SaaS Founder',
      quote: 'I submitted a critical bug and it was fixed the next day. Saved me hours of frustration!',
      img: 'https://randomuser.me/api/portraits/women/44.jpg',
      rating: 5,
    },
    {
      name: 'Tom K.',
      role: 'Startup Founder',
      quote: 'BugSprint saved our launch — fast, reliable, no headaches.',
      img: 'https://randomuser.me/api/portraits/men/46.jpg',
      rating: 5,
    },
    {
      name: 'Sarah L.',
      role: 'Product Manager',
      quote: 'I love how simple and fast BugSprint is. Small tasks are done in no time!',
      img: 'https://randomuser.me/api/portraits/women/65.jpg',
      rating: 5,
    },
    {
      name: 'Michael B.',
      role: 'CTO',
      quote: 'The team assigned was professional and solved the backend issue quickly.',
      img: 'https://randomuser.me/api/portraits/men/52.jpg',
      rating: 5,
    },
    {
      name: 'Emily R.',
      role: 'UI/UX Designer',
      quote: 'Front-end bugs? Fixed in hours! The process is seamless.',
      img: 'https://randomuser.me/api/portraits/women/33.jpg',
      rating: 5,
    },
    {
      name: 'David H.',
      role: 'Full Stack Developer',
      quote: 'Bugsprint is my go-to for rapid bug fixing. Highly recommended!',
      img: 'https://randomuser.me/api/portraits/men/24.jpg',
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="bg-[#F4F7FA] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold text-[#4F46E5] mb-4">What Our Users Say</h2>
        <p className="text-gray-600 text-lg mb-12">
          Real feedback from founders and developers using BugSprint.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white cursor-pointer p-8 rounded-2xl shadow-lg hover:shadow-2xl transition flex flex-col items-center"
            >
              {/* Avatar */}
              <img
                src={testimonial.img}
                alt={testimonial.name}
                className="w-20 h-20 rounded-full mb-4 object-cover"
              />

              {/* Quote */}
              <p className="text-gray-800 italic mb-4 text-center">"{testimonial.quote}"</p>

              {/* Stars */}
              <div className="flex mb-4">
                {Array(testimonial.rating)
                  .fill(0)
                  .map((_, i) => (
                    <FaStar key={i} className="text-yellow-400 mx-1" />
                  ))}
              </div>

              {/* Name and Role */}
              <h3 className="text-secondary font-semibold text-lg">{testimonial.name}</h3>
              <p className="text-gray-500 text-sm">{testimonial.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
