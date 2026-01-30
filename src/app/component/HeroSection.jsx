import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../../../public/logo.png';
import bugwithai from '../../../public/bugwithai.png';

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative w-full min-h-screen flex items-center justify-center text-center py-16 md:py-24 overflow-hidden"
    >
      {/* Background illustration */}
      <div className="absolute inset-0 z-0">
        <Image
          src={bugwithai}
          alt="Bugsprint AI illustration"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          className="opacity-70"
          priority
        />
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-black bg-opacity-80"></div>
      </div>

      {/* Content */}
      <div className="relative w-full z-10 px-4 sm:px-6 lg:px-8">
        {/* Logo */}
       
        {/* Headline */}
        <h1 className="text-4xl font-heading sm:text-5xl md:text-6xl font-extrabold text-primary mb-6 leading-tight">
          AI helps, humans get it right.
          <span className="block text-secondary mt-2">Bugsprint fixes bugs faster, smarter, and safely.</span>
        </h1>

        {/* Subheadline */}
        <p className="text-gray-200 font-body text-lg sm:text-xl mb-8">
        Automated AI can’t handle every bug — we combine speed, expertise, and accountability to get it done right.
        </p>

        {/* CTA buttons */}
       <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-xl mx-auto">
  <Link href="#submitTask" scroll={false} className="flex-1">
    <button className="w-full font-body px-8 py-4 bg-[#10B981] text-white font-medium rounded-lg hover:bg-[#1e5543] transition text-lg text-center">
      Submit Your First Task
    </button>
  </Link>
  <Link href="#learnMore" scroll={false} className="flex-1">
    <button className="w-full font-body px-8 py-4 border-[1px] border-[#1e5543] text-white font-medium rounded-lg hover:bg-[#1e5543]  transition text-lg text-center">
      Learn More
    </button>
  </Link>
</div>

      </div>
    </section>
  );
};

export default HeroSection;
