"use client";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Jan", bugs: 20 },
  { name: "Feb", bugs: 35 },
  { name: "Mar", bugs: 50 },
  { name: "Apr", bugs: 42 },
  { name: "May", bugs: 60 },
];

export default function AdminDashboard() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-[#4F46E5]">
        Admin Dashboard
      </h1>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: "Total Bugs", value: 120 },
          { label: "Pending Review", value: 18 },
          { label: "Active Sellers", value: 42 },
          { label: "Platform Revenue", value: "$12,400" },
        ].map((item) => (
          <div
            key={item.label}
            className="bg-white rounded-xl shadow p-4"
          >
            <p className="text-gray-500 text-sm">{item.label}</p>
            <p className="text-2xl font-bold text-[#4F46E5]">
              {item.value}
            </p>
          </div>
        ))}
      </div>

      {/* Chart */}
      <div className="bg-white rounded-xl shadow p-6">
        <h2 className="font-semibold mb-4">Bug Requests Trend</h2>
        <div className="h-[250px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="bugs"
                stroke="#4F46E5"
                strokeWidth={3}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
