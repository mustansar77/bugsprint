"use client";

export default function Submissions() {
  return (
    <div className="bg-white p-6 rounded-xl shadow">
      <h1 className="text-xl font-bold text-[#4F46E5] mb-4">
        Seller Submissions
      </h1>

      <button className="bg-green-600 text-white px-4 py-2 rounded-lg mr-2">
        Approve Fix
      </button>
      <button className="bg-red-600 text-white px-4 py-2 rounded-lg">
        Reject
      </button>
    </div>
  );
}
