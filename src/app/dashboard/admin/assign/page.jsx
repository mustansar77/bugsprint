"use client";
import { useState } from "react";

export default function AssignBug() {
  const [seller, setSeller] = useState("");

  return (
    <div className="max-w-xl bg-white p-6 rounded-xl shadow">
      <h1 className="text-xl font-bold text-[#4F46E5] mb-4">
        Assign Bug
      </h1>

      <select
        value={seller}
        onChange={(e) => setSeller(e.target.value)}
        className="w-full border rounded-lg px-4 py-2 mb-4"
      >
        <option value="">Select Seller</option>
        <option value="john">John (Frontend)</option>
        <option value="alex">Alex (Backend)</option>
      </select>

      <button className="w-full bg-[#4F46E5] text-white py-2 rounded-lg">
        Assign
      </button>
    </div>
  );
}
