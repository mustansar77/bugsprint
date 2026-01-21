"use client";
import { useState } from "react";

const dummyBugs = [
  {
    id: 1,
    title: "Login button not working",
    status: "Pending",
    deadline: "2026-02-28",
    priority: "High",
  },
  {
    id: 2,
    title: "API error on fetch",
    status: "In Progress",
    deadline: "2026-02-26",
    priority: "Medium",
  },
];

export default function AssignedBugs() {
  const [bugs, setBugs] = useState(dummyBugs);

  const handleUpload = (id) => {
    alert(`Upload fix for bug ID: ${id}`);
  };

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-[#4F46E5]">Assigned Bugs</h1>

      {/* Table for desktop */}
      <div className="hidden md:block overflow-x-auto">
        <table className="min-w-full bg-white rounded-xl shadow overflow-hidden">
          <thead>
            <tr className="bg-[#F4F7FA] text-left">
              <th className="px-4 py-3">ID</th>
              <th className="px-4 py-3">Title</th>
              <th className="px-4 py-3">Priority</th>
              <th className="px-4 py-3">Deadline</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {bugs.map((bug) => (
              <tr key={bug.id} className="border-t">
                <td className="px-4 py-3">{bug.id}</td>
                <td className="px-4 py-3">{bug.title}</td>
                <td className="px-4 py-3">{bug.priority}</td>
                <td className="px-4 py-3">{bug.deadline}</td>
                <td className="px-4 py-3">{bug.status}</td>
                <td className="px-4 py-3">
                  <button
                    onClick={() => handleUpload(bug.id)}
                    className="bg-[#4F46E5] text-white px-4 py-2 rounded-lg hover:bg-[#4338CA] transition"
                  >
                    Upload Fix
                  </button>
                </td>
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
              <strong>Priority:</strong> {bug.priority}
            </p>
            <p>
              <strong>Deadline:</strong> {bug.deadline}
            </p>
            <p>
              <strong>Status:</strong> {bug.status}
            </p>
            <button
              onClick={() => handleUpload(bug.id)}
              className="w-full bg-[#4F46E5] text-white py-2 rounded-lg hover:bg-[#4338CA] transition"
            >
              Upload Fix
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
