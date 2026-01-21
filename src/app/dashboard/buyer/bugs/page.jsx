const bugs = [
  { id: 1, title: "Login issue", status: "In Progress" },
  { id: 2, title: "Payment bug", status: "Completed" },
];

export default function MyBugs() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-[#4F46E5] mb-6">
        My Bugs
      </h1>

      <div className="space-y-4">
        {bugs.map((bug) => (
          <div
            key={bug.id}
            className="bg-white p-5 rounded-xl shadow flex justify-between"
          >
            <p className="font-medium">{bug.title}</p>
            <span className="text-sm text-[#4F46E5]">
              {bug.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
