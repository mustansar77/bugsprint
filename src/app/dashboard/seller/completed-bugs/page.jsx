"use client";
import { useState } from "react";

const dummyCompleted = [
  {
    id: 101,
    title: "Navbar not responsive",
    fixedBy: "John Doe",
    completedOn: "2026-01-20",
    status: "Approved",
  },
  {
    id: 102,
    title: "API error fixed",
    fixedBy: "Jane Smith",
    completedOn: "2026-01-18",
    status: "Approved",
  },
];

export default function CompletedBugs() {
  const [bugs, setBugs] = useState(dummyCompleted);

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-[#4F46E5]">Completed Bugs</h1>

      {/* Table for desktop */}
      <div className="hidden md:block overflow-x-auto">
        <table className="min-w-full bg-white rounded-xl shadow overflow-hidden">
          <thead>
            <tr className="bg-[#F4F7FA] text-left">
              <th className="px-4 py-3">ID</th>
              <th className="px-4 py-3">Title</th>
              <th className="px-4 py-3">Fixed By</th>
              <th className="px-4 py-3">Completed On</th>
              <th className="px-4 py-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {bugs.map((bug) => (
              <tr key={bug.id} className="border-t">
                <td className="px-4 py-3">{bug.id}</td>
                <td className="px-4 py-3">{bug.title}</td>
                <td className="px-4 py-3">{bug.fixedBy}</td>
                <td className="px-4 py-3">{bug.completedOn}</td>
                <td className="px-4 py-3">{bug.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Cards for mobile */}
      <div className="md:hidden space-y-4">
        {bugs.map((bug) => (
          <div
            key={bug.id}
            className="bg-white rounded-xl shadow p-4 space-y-2"
          >
            <p>
              <strong>ID:</strong> {bug.id}
            </p>
            <p>
              <strong>Title:</strong> {bug.title}
            </p>
            <p>
              <strong>Fixed By:</strong> {bug.fixedBy}
            </p>
            <p>
              <strong>Completed On:</strong> {bug.completedOn}
            </p>
            <p>
              <strong>Status:</strong> {bug.status}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
