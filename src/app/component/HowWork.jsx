import React from 'react';
import { 
  FaClipboardList, 
  FaSearch, 
  FaLaptopCode, 
  FaTools, 
  FaCheckCircle, 
  FaCommentDots 
} from 'react-icons/fa';

const HowWork = () => {
  const steps = [
    {
      icon: <FaClipboardList size={40} className="text-[#4F46E5]" />,
      title: 'Submit Your Task',
      description:
        'Describe your bug or small dev task, choose the category, and see the fixed price.',
    },
    {
      icon: <FaSearch size={40} className="text-[#4338CA]" />,
      title: 'We Review Your Task',
      description:
        'Our team reviews the task for clarity and assigns it the correct category.',
    },
    {
      icon: <FaLaptopCode size={40} className="text-[#10B981]" />,
      title: 'We Assign a Developer',
      description:
        'Your task goes to a vetted developer. Work starts immediately.',
    },
    {
      icon: <FaTools size={40} className="text-[#06B6D4]" />,
      title: 'Development & Testing',
      description:
        'The developer fixes the bug and tests it thoroughly to ensure quality.',
    },
    {
      icon: <FaCheckCircle size={40} className="text-[#FBBF24]" />,
      title: 'Get It Fixed & Approved',
      description:
        'Review the completed task, approve it, and release payment. Fast and hassle-free.',
    },
    {
      icon: <FaCommentDots size={40} className="text-[#F97316]" />,
      title: 'Feedback & Repeat',
      description:
        'Leave feedback and submit more tasks anytime. Continuous improvement guaranteed.',
    },
  ];

  return (
    <section id="howitworks" className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold text-secondary mb-4">How It Works</h2>
        <p className="text-[#4B5563] text-lg mb-12">
          BugSprint makes fixing small tasks and bugs fast, simple, and reliable.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-[#F4F7FA] p-8 rounded-xl shadow-md hover:shadow-xl transition cursor-pointer flex flex-col items-center text-center"
            >
              <div className="mb-6">{step.icon}</div>
              <h3 className="text-2xl font-semibold text-[#1F2937] mb-3">{step.title}</h3>
              <p className="text-[#4B5563]">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowWork;
