"use client";
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from "../../../public/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const pages = [
    { name: 'About', path: 'about' },
    { name: 'WhatWeOffer', path: 'whatweoffer' },
    { name: 'Terms & Condition', path: 'terms&condition' },
    { name: 'Contact', path: 'contact' },
  ];

  const handleLinkClick = () => setIsOpen(false);
  const handleHome = () => router.push('/');

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-[90px] flex items-center justify-between">
        {/* Logo */}
        <div className="flex-shrink-0 cursor-pointer" onClick={handleHome}>
          <Image
            src={logo}
            alt="Bugsprint Logo"
            width={130}
            height={40}
            priority
          />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 items-center">
          {pages.map((page) => (
            <Link key={page.path} href={page.path} scroll={false}>
              <span className="cursor-pointer text-gray-900 hover:text-[#4F46E5] font-medium transition">
                {page.name}
              </span>
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-900 hover:text-[#4F46E5] focus:outline-none"
          >
            {isOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
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

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white px-2 pt-2 pb-4 space-y-1 shadow-md">
          {pages.map((page) => (
            <Link
              key={page.path}
              href={page.path}
              scroll={false}
              onClick={handleLinkClick}
            >
              <span className="block cursor-pointer text-gray-900 hover:text-[#4F46E5] font-medium px-3 py-2 rounded-md transition">
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
