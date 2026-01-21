"use client";
import { useState } from "react";

export default function Support() {
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([
    {
      id: 1,
      sender: "support",
      text: "Hi 👋 How can we help you today?",
      time: "10:00 AM",
    },
    {
      id: 2,
      sender: "user",
      text: "I have a question about my deposit.",
      time: "10:01 AM",
    },
  ]);

  const handleSend = () => {
    if (!message.trim()) return;

    setChat([
      ...chat,
      {
        id: chat.length + 1,
        sender: "user",
        text: message,
        time: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      },
    ]);
    setMessage("");
  };

  return (
    <div className="flex flex-col min-h-screen max-w-7xl mx-auto">
      {/* Page Title */}
      <h1 className="text-2xl font-bold text-[#4F46E5] mb-4">
        Support Chat
      </h1>

      {/* Chat Container */}
      <div className="flex-1 bg-white rounded-xl shadow flex flex-col overflow-hidden">
        {/* Header */}
        <div className="border-b p-4 font-semibold text-gray-800">
          BugSprint Support
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {chat.map((msg) => (
            <div
              key={msg.id}
              className={`flex ${
                msg.sender === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`max-w-[70%] rounded-2xl px-4 py-2 text-sm ${
                  msg.sender === "user"
                    ? "bg-[#4F46E5] text-white"
                    : "bg-gray-100 text-gray-800"
                }`}
              >
                <p>{msg.text}</p>
                <span className="block text-xs opacity-70 mt-1">
                  {msg.time}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Sticky Input Bar */}
      <div className="sticky bottom-0 bg-[#F4F7FA] pt-4">
        <div className="bg-white border rounded-xl shadow p-4 flex gap-3">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type your message..."
            className="flex-1 border rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#4F46E5] outline-none"
          />
          <button
            onClick={handleSend}
            className="bg-[#4F46E5] text-white px-6 rounded-lg hover:bg-[#4338CA] transition"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}
