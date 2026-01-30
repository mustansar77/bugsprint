"use client"
import React, { useState, useRef, useEffect } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const Faq = () => {
  const faqs = [
    {
      question: 'What is BugSprint?',
      answer: 'BugSprint is a platform where you can post bugs or small dev tasks, and our expert developers fix them quickly and efficiently.',
    },
    {
      question: 'How fast can my bug be fixed?',
      answer: 'Most tasks are completed within 24-72 hours depending on complexity and type of task.',
    },
    {
      question: 'Why should I choose humans over AI?',
      answer: 'While AI can handle some tasks, complex bugs require expertise, experience, and accountability that only human developers can provide.',
    },
    {
      question: 'How does payment work?',
      answer: 'You pay a fixed price upfront. Once the task is completed and approved, payment is released to the developer.',
    },
    {
      question: 'Can I track the progress of my task?',
      answer: 'Yes! You can see updates and communicate with the developer directly through our platform.',
    },
    {
      question: 'Is my project confidential?',
      answer: 'Absolutely. We ensure all tasks and data are handled securely and confidentially.',
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);
  const contentRefs = useRef([]);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-secondary text-center mb-4">Frequently Asked Questions</h2>
        <p className="text-gray-600 text-center text-lg mb-12">
          Get quick answers to the most common questions about BugSprint.
        </p>

        <div className="space-y-4 max-w-7xl mx-auto">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg overflow-hidden shadow-sm"
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none"
              >
                <span className="text-lg font-medium text-gray-800">{faq.question}</span>
                {openIndex === index ? (
                  <FaChevronUp className="text-gray-600 transition-transform duration-300" />
                ) : (
                  <FaChevronDown className="text-gray-600 transition-transform duration-300" />
                )}
              </button>

              {/* Smooth collapsible content */}
              <div
                ref={(el) => (contentRefs.current[index] = el)}
                style={{
                  maxHeight: openIndex === index ? contentRefs.current[index]?.scrollHeight : 0,
                  transition: 'max-height 0.5s ease',
                }}
                className="px-6 overflow-hidden bg-gray-50"
              >
                <p className="py-4 text-gray-600">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
