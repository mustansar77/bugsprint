import React from 'react';
import Link from 'next/link';

const Pricing = () => {
  const plans = [
    {
      name: 'Basic',
      price: '$50',
      delivery: '24 Hours',
      description: 'Fix small frontend/UI bugs quickly and efficiently.',
      popular: false,
    },
    {
      name: 'Standard',
      price: '$80',
      delivery: '48 Hours',
      description: 'Backend/API fixes and medium complexity tasks.',
      popular: true, // Highlight this plan
    },
    {
      name: 'Premium',
      price: '$120',
      delivery: '72 Hours',
      description: 'Full-stack bug fixes and performance optimization.',
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold text-secondary mb-4">Pricing Plans</h2>
        <p className="text-gray-600 text-lg mb-12">
          Transparent fixed pricing. Pay per task or subscribe monthly. No hidden fees.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`p-8 rounded-2xl shadow-lg transition transform hover:scale-105 ${
                plan.popular
                  ? 'bg-secondary text-white border-2 border-secondary'
                  : 'bg-[#F4F7FA] text-secondary'
              }`}
            >
              {plan.popular && (
                <span className="inline-block bg-[#FBBF24] text-black font-semibold px-3 py-1 rounded-full mb-4 text-sm uppercase">
                  Most Popular
                </span>
              )}
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <p className="text-lg text-[#4B5563]  mb-4">{plan.description}</p>
              <p className={`text-3xl font-extrabold mb-2 ${plan.popular ? 'text-white' : 'text-secondary'}`}>
                {plan.price}
              </p>
              <p className={`mb-6 ${plan.popular ? 'text-gray-200' : 'text-gray-600'}`}>Delivery: {plan.delivery}</p>
              <Link href="#submitTask" scroll={false}>
                <button
                  className={`w-full px-6 py-3 rounded-lg font-medium transition ${
                    plan.popular
                      ? 'bg-white text-secondary hover:bg-gray-100'
                      : 'bg-secondary text-white hover:bg-buttonhover'
                  }`}
                >
                  Submit Task
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
