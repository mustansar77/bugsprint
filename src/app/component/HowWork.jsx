import React from 'react';
import { FaClipboardList, FaLaptopCode, FaCheckCircle } from 'react-icons/fa';

const HowWork = () => {
  const steps = [
    {
      icon: <FaClipboardList size={40} className="text-[#4F46E5]" />,
      title: 'Submit Your Task',
      description:
        'Describe your bug or small dev task, choose the category, and see the fixed price.',
    },
    {
      icon: <FaLaptopCode size={40} className="text-[#10B981]" />,
      title: 'We Assign a Developer',
      description:
        'Your task goes to a vetted developer. Work starts immediately.',
    },
    {
      icon: <FaCheckCircle size={40} className="text-[#FBBF24]" />,
      title: 'Get It Fixed & Approved',
      description:
        'Review the completed task, approve it, and release payment. Fast and hassle-free.',
    },
  ];

  return (
    <section id="howitworks" className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold text-[#4F46E5] mb-4">How It Works</h2>
        <p className="text-[#4B5563] text-lg mb-12">
          BugSprint makes fixing small tasks and bugs fast, simple, and reliable.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-[#F4F7FA] p-8 rounded-xl shadow-md hover:shadow-xl transition cursor-pointer"
            >
              <div className="mb-6 flex justify-center">{step.icon}</div>
              <h3 className="text-2xl font-semibold text-[#1F2937] mb-3">
                {step.title}
              </h3>
              <p className="text-[#4B5563]">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowWork;
