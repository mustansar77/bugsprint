"use client";
import React, { useState } from "react";
import { FaWhatsapp, FaArrowUp, FaCommentDots } from "react-icons/fa";

const FloatingIcons = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  return (
    <>
      {/* Floating Icons */}
      <div className="fixed bottom-8 right-8 flex flex-col gap-4 z-50">
        {/* WhatsApp */}
        <a
          href="https://wa.me/+923115170829"
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 flex items-center justify-center rounded-full bg-green-500 shadow-lg text-white cursor-pointer hover:scale-110 hover:shadow-green-400/60 transition-transform duration-300 animate-pulse-slow"
          title="Chat on WhatsApp"
        >
          <FaWhatsapp size={24} />
        </a>

        {/* Go to Top */}
        <button
          onClick={scrollToTop}
          className="w-14 h-14 flex items-center justify-center rounded-full bg-blue-500 shadow-lg text-white cursor-pointer hover:scale-110 hover:shadow-blue-400/60 transition-transform duration-300 animate-pulse-slow"
          title="Go to Top"
        >
          <FaArrowUp size={24} />
        </button>

        {/* Live Chat */}
        <button
          onClick={toggleChat}
          className="w-14 h-14 flex items-center justify-center rounded-full bg-purple-500 shadow-lg text-white cursor-pointer hover:scale-110 hover:shadow-purple-400/60 transition-transform duration-300 animate-pulse-slow"
          title="Live Chat"
        >
          <FaCommentDots size={24} />
        </button>
      </div>

      {/* Chat Popup */}
      {isChatOpen && (
        <div className="fixed bottom-24 right-8 w-80 max-w-xs bg-white shadow-xl rounded-lg flex flex-col z-50">
          {/* Header */}
          <div className="flex justify-between items-center bg-purple-500 text-white px-4 py-2 rounded-t-lg">
            <span>Live Chat</span>
            <button onClick={toggleChat} className="text-white font-bold">
              ✕
            </button>
          </div>

          {/* Chat messages */}
          <div className="p-4 flex-1 overflow-y-auto h-60 flex flex-col gap-2">
            <div className="bg-gray-100 text-gray-800 p-2 rounded-lg self-start">
              Hello! How can we help you today?
            </div>
          </div>

          {/* Input box */}
          <div className="flex p-2 border-t border-gray-200">
            <input
              type="text"
              placeholder="Type a message..."
              className="flex-1 px-3 py-2 border border-gray-300 rounded-l-lg focus:outline-none"
            />
            <button className="bg-purple-500 px-4 text-white rounded-r-lg hover:bg-purple-600 transition">
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default FloatingIcons;
