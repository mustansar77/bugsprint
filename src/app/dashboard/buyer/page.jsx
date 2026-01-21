"use client";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const chartData = [
  { name: "Jan", bugs: 2, completed: 1 },
  { name: "Feb", bugs: 4, completed: 3 },
  { name: "Mar", bugs: 6, completed: 5 },
  { name: "Apr", bugs: 5, completed: 4 },
  { name: "May", bugs: 8, completed: 7 },
];

export default function BuyerDashboard() {
  return (
    <div className="w-full space-y-8 px-2 py-4 sm:px-0">
      {/* Title */}
      <h1 className="text-2xl sm:text-3xl font-bold text-[#4F46E5]">
        Buyer Dashboard
      </h1>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
        {[
          { label: "Total Bugs", value: 12 },
          { label: "In Progress", value: 4 },
          { label: "Completed", value: 7 },
          { label: "Wallet Balance", value: "$320" },
        ].map((item) => (
          <div
            key={item.label}
            className="bg-white rounded-xl shadow p-4 sm:p-6"
          >
            <p className="text-xs sm:text-sm text-gray-500">
              {item.label}
            </p>
            <p className="text-xl sm:text-2xl font-bold text-[#4F46E5]">
              {item.value}
            </p>
          </div>
        ))}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Line Chart */}
        <div className="bg-white rounded-xl shadow p-4 sm:p-6">
          <h2 className="text-base sm:text-lg font-semibold mb-3 text-gray-800">
            Bugs Over Time
          </h2>

          <div className="w-full h-[220px] sm:h-[250px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={chartData}>
                <XAxis dataKey="name" tick={{ fontSize: 12 }} />
                <YAxis tick={{ fontSize: 12 }} />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="bugs"
                  stroke="#4F46E5"
                  strokeWidth={3}
                  dot={{ r: 3 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Bar Chart */}
        <div className="bg-white rounded-xl shadow p-4 sm:p-6">
          <h2 className="text-base sm:text-lg font-semibold mb-3 text-gray-800">
            Completed Bugs
          </h2>

          <div className="w-full h-[220px] sm:h-[250px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData}>
                <XAxis dataKey="name" tick={{ fontSize: 12 }} />
                <YAxis tick={{ fontSize: 12 }} />
                <Tooltip />
                <Bar
                  dataKey="completed"
                  fill="#10B981"
                  radius={[6, 6, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}
