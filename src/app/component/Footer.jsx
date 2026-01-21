import React from 'react';
import Link from 'next/link';

const Footer = () => {
  const links = [
    { name: 'About', path: 'about' },
    { name: 'What We Offer', path: 'whatweoffer' },
    { name: 'Contact', path: 'contact' },
    { name: 'Terms & Conditions', path: 'terms&condition' },
  ];

  return (
    <footer className="bg-[#1F2937] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          {/* Logo */}
          <div className="text-2xl font-bold text-[#4F46E5]">BugSprint</div>

          {/* Links */}
          <div className="flex flex-wrap justify-center md:justify-end gap-6">
            {links.map((link, index) => (
              <Link key={index} href={link.path} scroll={false}>
                <span className="hover:text-[#4F46E5] cursor-pointer transition">{link.name}</span>
              </Link>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-600 mt-8 pt-6 text-center text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} BugSprint. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
