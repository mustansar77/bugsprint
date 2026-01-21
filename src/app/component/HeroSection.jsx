import React from 'react';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="bg-[#F4F7FA] min-h-screen flex items-center relative overflow-hidden py-16 md:py-24"
    >
      {/* Decorative shapes */}
      <div className="absolute top-0 left-0 w-56 h-56 md:w-72 md:h-72 bg-[#4F46E5] rounded-full mix-blend-multiply opacity-20 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 md:w-96 md:h-96 bg-[#10B981] rounded-full mix-blend-multiply opacity-20 animate-pulse"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between">
          {/* Left Content */}
          <div className="md:w-1/2 text-center md:text-left mt-12 md:mt-0">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#4F46E5] mb-6 leading-tight">
              Get Your Bugs & Small Dev Tasks Fixed in 24–72 Hours
            </h1>
            <p className="text-[#4B5563] text-base sm:text-lg md:text-xl mb-8">
              No hiring, no bidding, no delays. Submit your task, pay a fixed price, and get it done fast.
            </p>
            <Link href="#submitTask" scroll={false}>
              <span className="inline-block px-6 sm:px-8 py-3 sm:py-4 bg-[#4F46E5] text-white font-medium rounded-lg hover:bg-[#4338CA] cursor-pointer transition text-sm sm:text-base">
                Submit Your First Task
              </span>
            </Link>
          </div>

          {/* Right Content: Decorative abstract blocks */}
          <div className="md:w-1/2 flex justify-center relative w-full">
            <div className="w-48 h-48 sm:w-64 sm:h-64 md:w-64 md:h-64 bg-gradient-to-tr from-[#4F46E5] to-[#4338CA] rounded-3xl shadow-xl transform rotate-12 animate-pulse"></div>
            <div className="w-32 h-32 sm:w-48 sm:h-48 md:w-48 md:h-48 bg-gradient-to-tr from-[#10B981] to-[#06B6D4] rounded-2xl shadow-lg transform -rotate-12 absolute top-16 sm:top-20 right-0 animate-pulse"></div>
            <div className="w-20 h-20 sm:w-32 sm:h-32 md:w-32 md:h-32 bg-gradient-to-tr from-[#FBBF24] to-[#F59E0B] rounded-full shadow-md absolute bottom-8 sm:bottom-10 left-4 sm:left-10 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
