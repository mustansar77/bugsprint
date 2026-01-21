import React from 'react';
import { FaCode, FaBug, FaServer, FaRocket, FaMobileAlt, FaPaintBrush, FaDatabase, FaTools } from 'react-icons/fa';

const WhatWeOffer = () => {
  const services = [
  {
    icon: <FaBug size={40} className="text-[#F87171] mb-4" />,
    title: 'Bug Fixes',
    description: 'Fix frontend and backend bugs quickly and reliably.',
  },
  {
    icon: <FaCode size={40} className="text-[#4F46E5] mb-4" />,
    title: 'Small Dev Tasks',
    description: 'Implement minor features or enhancements efficiently.',
  },
  {
    icon: <FaServer size={40} className="text-[#10B981] mb-4" />,
    title: 'Backend/API',
    description: 'Fix server, database, or API issues with ease.',
  },
  {
    icon: <FaRocket size={40} className="text-[#FBBF24] mb-4" />,
    title: 'Deployment & Performance',
    description: 'Deploy updates and optimize app performance.',
  },
  {
    icon: <FaMobileAlt size={40} className="text-[#3B82F6] mb-4" />,
    title: 'Mobile Support',
    description: 'Resolve issues or add features to iOS and Android apps.',
  },
  {
    icon: <FaPaintBrush size={40} className="text-[#F472B6] mb-4" />,
    title: 'UI/UX Tweaks',
    description: 'Improve app design with small UI/UX enhancements.',
  },
  {
    icon: <FaDatabase size={40} className="text-[#06B6D4] mb-4" />,
    title: 'Database Tasks',
    description: 'Handle minor database fixes and optimizations.',
  },
  {
    icon: <FaTools size={40} className="text-[#F59E0B] mb-4" />,
    title: 'Maintenance & Updates',
    description: 'Keep your app updated and running smoothly.',
  },
];


  return (
    <section className="bg-[#F4F7FA]  min-h-screen px-4 sm:px-6 lg:px-8 pt-36 pb-10 max-w-7xl mx-auto">
      <h2 className="text-4xl md:text-5xl font-bold text-[#4F46E5] mb-6 text-center">
        What We Offer
      </h2>
      <p className="text-[#4B5563] text-lg md:text-xl mb-12 text-center max-w-3xl mx-auto leading-relaxed">
        BugSprint offers fast, reliable, and hassle-free solutions for small development tasks. 
        No hiring, no bidding, just fixed bugs and completed tasks in 24–72 hours. 
        From frontend tweaks to backend fixes, mobile apps, UI improvements, and maintenance, 
        we handle it all so you can focus on growing your business.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition transform hover:-translate-y-2 flex flex-col items-center text-center"
          >
            {service.icon}
            <h3 className="text-xl font-semibold text-[#1F2937] mb-2">{service.title}</h3>
            <p className="text-[#4B5563]">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhatWeOffer;
