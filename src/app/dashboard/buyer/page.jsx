export default function BuyerDashboard() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-[#4F46E5] mb-8">
        Buyer Dashboard
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          { label: "Total Bugs", value: 12 },
          { label: "In Progress", value: 4 },
          { label: "Completed", value: 7 },
          { label: "Wallet Balance", value: "$320" },
        ].map((item) => (
          <div
            key={item.label}
            className="bg-white rounded-xl shadow p-6"
          >
            <p className="text-gray-500">{item.label}</p>
            <p className="text-2xl font-bold text-[#4F46E5]">
              {item.value}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
