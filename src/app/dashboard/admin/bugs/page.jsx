"use client";

const bugs = [
  {
    id: 1,
    title: "Login API crash",
    buyer: "Ali",
    budget: "$120",
    status: "Pending",
  },
  {
    id: 2,
    title: "UI not responsive",
    buyer: "Sarah",
    budget: "$80",
    status: "Pending",
  },
];

export default function AdminBugs() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-[#4F46E5]">
        Bug Requests
      </h1>

      {/* Responsive Table */}
      <div className="bg-white rounded-xl shadow overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-[700px] w-full border-collapse">
            <thead className="bg-[#F4F7FA]">
              <tr className="text-sm text-gray-600">
                <th className="p-3 text-left">Title</th>
                <th className="p-3 text-left">Buyer</th>
                <th className="p-3 text-left">Budget</th>
                <th className="p-3 text-left">Status</th>
                <th className="p-3 text-left">Action</th>
              </tr>
            </thead>

            <tbody>
              {bugs.map((bug) => (
                <tr
                  key={bug.id}
                  className="border-t text-sm text-gray-700 hover:bg-gray-50"
                >
                  <td className="p-3 whitespace-nowrap">
                    {bug.title}
                  </td>
                  <td className="p-3">{bug.buyer}</td>
                  <td className="p-3">{bug.budget}</td>
                  <td className="p-3">
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-700">
                      {bug.status}
                    </span>
                  </td>
                  <td className="p-3">
                    <button className="bg-[#4F46E5] text-white px-4 py-2 rounded-lg hover:bg-[#4338CA] transition whitespace-nowrap">
                      Assign Seller
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
