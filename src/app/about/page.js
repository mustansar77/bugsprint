import React from 'react';
import { FaBolt, FaShieldAlt, FaEye } from 'react-icons/fa';

const About = () => {
  // Mission & Vision data
  const sections = [
    {
      title: 'Our Mission',
      description:
        'To make small development tasks fast, simple, and reliable for businesses of any size.',
    },
    {
      title: 'Our Vision',
      description:
        'To become the most trusted platform for rapid, high-quality bug fixes and small dev tasks worldwide.',
    },
  ];

  // Values data
  const values = [
    {
      icon: <FaBolt size={40} className="text-[#FBBF24] mb-4" />,
      title: 'Speed',
      description: 'Fast task completion without sacrificing quality.',
    },
    {
      icon: <FaShieldAlt size={40} className="text-[#10B981] mb-4" />,
      title: 'Reliability',
      description: 'Trusted developers and guaranteed results.',
    },
    {
      icon: <FaEye size={40} className="text-[#4F46E5] mb-4" />,
      title: 'Transparency',
      description: 'Clear pricing and no hidden surprises.',
    },
  ];

  return (
    <div className="bg-[#F4F7FA] max-w-7xl mx-auto min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 pt-36 pb-10">
      {/* Heading */}
      <h1 className="text-4xl md:text-5xl font-bold text-[#4F46E5] mb-6 text-center">
        About BugSprint
      </h1>

      <p className="text-[#4B5563] text-lg md:text-xl mb-16 text-center max-w-3xl mx-auto leading-relaxed">
        BugSprint is a fast, reliable platform for fixing small bugs and development tasks. 
        We connect businesses and developers to get tasks done in 24–72 hours, without the 
        hassle of hiring, bidding, or long delays. Our mission is to make software development 
        simple, predictable, and stress-free.
      </p>

      {/* Mission & Vision Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20 w-full">
        {sections.map((section, index) => (
          <div
            key={index}
            className="bg-white cursor-pointer p-10 rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2"
          >
            <h2 className="text-2xl font-semibold text-[#4F46E5] mb-4">{section.title}</h2>
            <p className="text-[#4B5563] text-base leading-relaxed">{section.description}</p>
          </div>
        ))}
      </div>

      {/* Values Section */}
      <div className="text-center w-full">
        <h2 className="text-3xl font-bold text-[#4F46E5] mb-12">Our Core Values</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-white cursor-pointer p-8 rounded-2xl shadow-md hover:shadow-xl transition transform hover:-translate-y-2 flex flex-col items-center"
            >
              {value.icon}
              <h3 className="text-xl font-semibold text-[#1F2937] mb-2">{value.title}</h3>
              <p className="text-[#4B5563] text-center">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
