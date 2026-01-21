"use client";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const chartData = [
  { name: "Jan", assigned: 2, completed: 1, earnings: 120 },
  { name: "Feb", assigned: 4, completed: 3, earnings: 200 },
  { name: "Mar", assigned: 6, completed: 5, earnings: 450 },
  { name: "Apr", assigned: 5, completed: 4, earnings: 350 },
  { name: "May", assigned: 8, completed: 7, earnings: 600 },
];

export default function SellerDashboard() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl sm:text-4xl font-bold text-[#4F46E5]">
        Seller Dashboard
      </h1>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
        {[
          { label: "Assigned Bugs", value: 12 },
          { label: "In Progress", value: 4 },
          { label: "Completed", value: 7 },
          { label: "Wallet Balance", value: "$320" },
        ].map((item) => (
          <div
            key={item.label}
            className="bg-white rounded-xl shadow p-4 sm:p-6 flex flex-col justify-between"
          >
            <p className="text-xs sm:text-sm text-gray-500">{item.label}</p>
            <p className="text-xl sm:text-2xl font-bold text-[#4F46E5]">
              {item.value}
            </p>
          </div>
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Line Chart: Assigned vs Completed */}
        <div className="bg-white rounded-xl shadow p-4 sm:p-6">
          <h2 className="text-base sm:text-lg font-semibold mb-3 text-gray-800">
            Bugs Over Time
          </h2>
          <div className="w-full h-[250px] sm:h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={chartData}>
                <XAxis dataKey="name" tick={{ fontSize: 12 }} />
                <YAxis tick={{ fontSize: 12 }} />
                <Tooltip />
                <Legend verticalAlign="top" height={36} />
                <Line
                  type="monotone"
                  dataKey="assigned"
                  name="Assigned Bugs"
                  stroke="#4F46E5"
                  strokeWidth={3}
                  dot={{ r: 4 }}
                />
                <Line
                  type="monotone"
                  dataKey="completed"
                  name="Completed Bugs"
                  stroke="#10B981"
                  strokeWidth={3}
                  dot={{ r: 4 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Bar Chart: Earnings */}
        <div className="bg-white rounded-xl shadow p-4 sm:p-6">
          <h2 className="text-base sm:text-lg font-semibold mb-3 text-gray-800">
            Earnings Over Time
          </h2>
          <div className="w-full h-[250px] sm:h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData}>
                <XAxis dataKey="name" tick={{ fontSize: 12 }} />
                <YAxis tick={{ fontSize: 12 }} />
                <Tooltip />
                <Legend verticalAlign="top" height={36} />
                <Bar
                  dataKey="earnings"
                  name="Earnings ($)"
                  fill="#FBBF24"
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
