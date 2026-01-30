import React from 'react';
import Link from 'next/link';

const Cta = () => {
  return (
    <section className="bg-secondary py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Ready to Get Your Task Fixed Fast?
        </h2>
        <p className="text-[#E0E7FF] text-lg md:text-xl mb-10">
          Submit your bug or small dev task now and get it done in 16–24 hours. No hassle, no bidding, just results.
        </p>
        <Link href="#submitTask" scroll={false}>
          <span className="inline-block px-8 py-4 bg-white text-secondary font-semibold rounded-lg hover:bg-gray-100 cursor-pointer transition text-lg">
            Submit Your First Task
          </span>
        </Link>
      </div>
    </section>
  );
};

export default Cta;
