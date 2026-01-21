import React from 'react';

const TermsAndConditions = () => {
  const sections = [
    {
      title: '1. Services',
      description:
        'BugSprint provides a platform for submitting small development tasks and bug fixes. All tasks are performed as described on the platform within the estimated timeframe.',
    },
    {
      title: '2. Payment',
      description:
        'Payment for each task must be completed upfront through our secure platform. Tasks will be completed once payment is received.',
    },
    {
      title: '3. User Responsibilities',
      description:
        'Users must provide accurate task details and necessary resources. BugSprint is not responsible for delays caused by incomplete or inaccurate task information.',
    },
    {
      title: '4. Limitation of Liability',
      description:
        'BugSprint is not liable for indirect, incidental, or consequential damages. We strive for high-quality service but cannot guarantee absolute error-free results.',
    },
    {
      title: '5. Termination',
      description:
        'We reserve the right to suspend or terminate accounts for violation of these Terms & Conditions or misuse of the platform.',
    },
    {
      title: '6. Changes to Terms',
      description:
        'BugSprint may update these Terms & Conditions at any time. Users will be notified of significant changes, and continued use of the platform constitutes acceptance of the updated terms.',
    },
    {
      title: '7. Contact',
      description:
        'For any questions regarding these Terms & Conditions, please contact us at support@bugsprint.com.',
    },
  ];

  return (
    <div className="bg-[#F4F7FA] min-h-screen flex flex-col px-4 sm:px-6 lg:px-8 pt-36 pb-10 max-w-7xl mx-auto">
      <h1 className="text-4xl md:text-5xl font-bold text-[#4F46E5] mb-12 text-center">
        Terms & Conditions
      </h1>

      <p className="text-[#4B5563] text-lg md:text-xl mb-12 text-center max-w-3xl mx-auto leading-relaxed">
        Welcome to BugSprint! By accessing or using our platform, you agree to comply with these Terms & Conditions. 
        Please read them carefully. Each section is summarized for easy understanding.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {sections.map((section, index) => (
          <div
            key={index}
            className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition transform hover:-translate-y-2"
          >
            <h2 className="text-xl md:text-2xl font-semibold text-[#4F46E5] mb-4">
              {section.title}
            </h2>
            <p className="text-[#4B5563] leading-relaxed">{section.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TermsAndConditions;
