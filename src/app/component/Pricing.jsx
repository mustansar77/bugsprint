import React from 'react';
import Link from 'next/link';

const Pricing = () => {
  const plans = [
    {
      name: 'Frontend / UI Bug',
      price: '$50',
      delivery: '24 Hours',
    },
    {
      name: 'Backend / API Fix',
      price: '$80',
      delivery: '48 Hours',
    },
    {
      name: 'Deployment Issue',
      price: '$120',
      delivery: '72 Hours',
    },
    {
      name: 'Performance Optimization',
      price: '$100',
      delivery: '48 Hours',
    },
  ];

  return (
    <section id="pricing" className="bg-[#F4F7FA] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold text-[#4F46E5] mb-4">Pricing</h2>
        <p className="text-[#4B5563] text-lg mb-12">
          Transparent fixed pricing. Know exactly what you pay, no surprises.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition flex flex-col justify-between"
            >
              <h3 className="text-2xl font-semibold text-[#1F2937] mb-4">
                {plan.name}
              </h3>
              <p className="text-[#4F46E3] text-3xl font-bold mb-2">{plan.price}</p>
              <p className="text-[#4B5563] mb-6">Delivery: {plan.delivery}</p>
              <Link href="#submitTask" scroll={false}>
                <span className="inline-block px-6 py-3 bg-[#4F46E5] text-white font-medium rounded-lg hover:bg-[#4338CA] cursor-pointer transition">
                  Submit Task
                </span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
