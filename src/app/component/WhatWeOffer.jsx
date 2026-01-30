import React from 'react';
import { FaBolt, FaShieldAlt, FaUsers, FaClock } from 'react-icons/fa';

const WhatWeOffer = () => {
  const offers = [
    {
      icon: <FaBolt size={40} className="text-[#4F46E5]" />,
      title: 'Fast & Efficient',
      description:
        'Get your bugs and small dev tasks resolved quickly with our expert developers.',
    },
    {
      icon: <FaShieldAlt size={40} className="text-[#10B981]" />,
      title: 'Reliable & Secure',
      description:
        'All tasks are handled securely and transparently, giving you peace of mind.',
    },
    {
      icon: <FaUsers size={40} className="text-[#FBBF24]" />,
      title: 'Vetted Experts',
      description:
        'We assign only experienced and verified developers to your tasks.',
    },
    {
      icon: <FaClock size={40} className="text-[#F97316]" />,
      title: '24/7 Support',
      description:
        'Our team is always available to assist you with any questions or issues.',
    },
  ];

  return (
    <section id="whatweoffer" className="bg-[#F4F7FA]  py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold text-secondary mb-4">What We Offer</h2>
        <p className="text-[#4B5563] text-lg mb-12">
          Bugsprint is designed to make fixing bugs and small tasks simple, fast, and reliable.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {offers.map((offer, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition cursor-pointer flex flex-col items-center text-center"
            >
              <div className="mb-6">{offer.icon}</div>
              <h3 className="text-2xl font-semibold text-[#1F2937] mb-3">
                {offer.title}
              </h3>
              <p className="text-[#4B5563]">{offer.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeOffer;
