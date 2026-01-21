"use client";
import { useState } from "react";

export default function PostBug() {
  const [form, setForm] = useState({
    title: "",
    description: "",
    tech: "",
    deadline: "",
  });

  return (
    <div className="max-w-3xl">
      <h1 className="text-2xl font-bold text-[#4F46E5] mb-6">
        Post a Bug
      </h1>

      <div className="bg-white rounded-xl shadow p-6 space-y-4">
        <input
          placeholder="Bug Title"
          className="w-full border rounded-lg px-4 py-2"
        />

        <textarea
          placeholder="Describe the bug"
          rows={4}
          className="w-full border rounded-lg px-4 py-2"
        />

        <input
          placeholder="Tech Stack (React, Laravel, etc.)"
          className="w-full border rounded-lg px-4 py-2"
        />

        <input
          type="date"
          className="w-full border rounded-lg px-4 py-2"
        />

        <button className="bg-[#4F46E5] text-white px-6 py-3 rounded-lg hover:bg-[#4338CA]">
          Submit Bug
        </button>
      </div>
    </div>
  );
}
