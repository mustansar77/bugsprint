"use client";
import React from "react";
import { FaGoogle, FaFacebookF } from "react-icons/fa";
import Image from "next/image";
import loginIllustration from "../../../../public/pic-2.png"; // Replace with your animated image

const Login = () => {
  return (
    <section className="min-h-screen bg-white flex items-center justify-center py-28 sm:py-12 px-4">
      {/* Card Container */}
      <div className="bg-secondary rounded-3xl shadow-xl w-full max-w-6xl flex flex-col md:flex-row overflow-hidden">
        
        {/* Left Form Section */}
        <div className="md:w-1/2 bg-[#F4F7FA] p-6 sm:p-12 flex flex-col justify-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-secondary mb-2 text-center md:text-left">Login</h2>
          <p className="text-gray-500 mb-6 text-center md:text-left text-sm sm:text-base">
            Access your account to manage tasks and bugs quickly.
          </p>

          {/* Social Sign-ins */}
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <button className="flex-1 flex items-center justify-center px-4 py-2 bg-red-500 text-white rounded-lg shadow hover:bg-red-600 transition">
              <FaGoogle className="mr-2" /> Login With Google
            </button>
            <button className="flex-1 flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition">
              <FaFacebookF className="mr-2" /> Login With Facebook
            </button>
          </div>

          <div className="flex items-center my-4">
            <hr className="flex-1 border-gray-300" />
            <span className="px-2 text-gray-400 text-sm sm:text-base">or</span>
            <hr className="flex-1 border-gray-300" />
          </div>

          {/* Login Form */}
          <form className="flex flex-col gap-4">
            <input
              type="email"
              placeholder="Email"
              className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary text-sm sm:text-base"
            />
            <input
              type="password"
              placeholder="Password"
              className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary text-sm sm:text-base"
            />

            <button
              type="submit"
              className="mt-2 px-4 py-3 bg-secondary text-white font-medium rounded-lg hover:bg-buttonhover transition text-sm sm:text-base"
            >
              Login
            </button>
          </form>

          <p className="text-gray-500 text-center mt-4 text-sm sm:text-base">
            Don't have an account?{" "}
            <a href="/register" className="text-secondary font-medium hover:underline">
              Register
            </a>
          </p>
        </div>

        {/* Right Info Section */}
        <div className="md:w-1/2 p-8 sm:p-12 flex flex-col justify-center text-white text-center md:text-left bg-secondary">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-center">Welcome Back!</h1>
          <p className="text-base sm:text-lg mb-6 text-center">
            Fix your bugs faster, smarter, and safely. Join thousands of developers and founders who trust BugSprint for quick and reliable bug fixes.
          </p>
          <div className="w-full flex justify-center md:justify-center">
            <Image
              src={loginIllustration}
              alt="BugSprint Illustration"
              className="w-3/4 sm:w-2/3 md:w-full max-w-sm animate-fade-in"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
