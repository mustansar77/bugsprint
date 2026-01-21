"use client"
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import Link from 'next/link';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  // Pages with their paths
  const pages = [
    { name: 'About', path: 'about' },
    { name: 'WhatWeOffer', path: 'whatweoffer' },
    { name: 'Terms & Condition', path: 'terms&condition' },
    { name: 'Contact', path: 'contact' },
  ];

  // Function to handle link click
  const handleLinkClick = () => {
    setIsOpen(false); // Close mobile menu
  };

 const handleHome = () => {
    router.push('/'); // Navigate to home page
  };


  return (
    <nav className="bg-[#F4F7FA] shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo / Brand */}
          <div className="flex-shrink-0 text-2xl font-bold cursor-pointer text-[#4F46E5]" onClick={handleHome}>
            BugSprint
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {pages.map((page) => (
              <Link key={page.path} href={page.path} scroll={false}>
                <span className="cursor-pointer text-[#1F2937] hover:text-[#4F46E5] font-medium">
                  {page.name}
                </span>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#1F2937] hover:text-[#4F46E5] focus:outline-none"
            >
              {isOpen ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-2 pt-2 pb-4 space-y-1 bg-[#F4F7FA]">
          {pages.map((page) => (
            <Link
              key={page.path}
              href={page.path}
              scroll={false}
              onClick={handleLinkClick} // Close menu on click
            >
              <span className="block cursor-pointer text-[#1F2937] hover:text-[#4F46E5] font-medium px-3 py-2 rounded-md">
                {page.name}
              </span>
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
