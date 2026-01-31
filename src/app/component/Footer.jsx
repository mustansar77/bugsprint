"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../../../public/logo.png'; // Replace with your logo path

const Footer = () => {
  const links = [
    { name: 'About', path: 'about' },
    { name: 'What We Offer', path: 'whatweoffer' },
    { name: 'Contact', path: 'contact' },
    { name: 'Terms & Conditions', path: 'terms&condition' },
  ];

  return (
    <footer className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          {/* Logo */}
          <div className="flex justify-center md:justify-start w-full md:w-auto">
            <Image
              src={logo}
              alt="BugSprint Logo"
              width={150} // adjust as needed
              height={50}
              className="object-contain"
              priority
            />
          </div>

          {/* Links */}
          <div className="flex flex-wrap justify-center md:justify-end gap-6 w-full md:w-auto">
            {links.map((link, index) => (
              <Link key={index} href={link.path} scroll={false}>
                <span className="text-gray-700 hover:text-[#4F46E5] cursor-pointer transition text-sm sm:text-base">
                  {link.name}
                </span>
              </Link>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 mt-8 pt-6 text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} BugSprint. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
