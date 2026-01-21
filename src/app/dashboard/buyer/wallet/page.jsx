"use client";
import { useState } from "react";

export default function Wallet() {
  const [open, setOpen] = useState(false);
  const [amount, setAmount] = useState("");

  const balance = 320;

  // Mock deposit history (later from backend)
  const deposits = [
    { id: 1, amount: 100, trx: "TXR123ABC", status: "Approved" },
    { id: 2, amount: 50, trx: "TXR456DEF", status: "Pending" },
    { id: 3, amount: 30, trx: "TXR789GHI", status: "Rejected" },
    { id: 4, amount: 100, trx: "TXR123ABC", status: "Approved" },
    { id: 5, amount: 50, trx: "TXR456DEF", status: "Pending" },
    { id: 6, amount: 30, trx: "TXR789GHI", status: "Rejected" },
    { id: 7, amount: 100, trx: "TXR123ABC", status: "Approved" },
    { id: 8, amount: 50, trx: "TXR456DEF", status: "Pending" },
    { id: 9, amount: 30, trx: "TXR789GHI", status: "Rejected" },
    { id: 10, amount: 100, trx: "TXR123ABC", status: "Approved" },
    { id: 11, amount: 50, trx: "TXR456DEF", status: "Pending" },
    { id: 12, amount: 30, trx: "TXR789GHI", status: "Rejected" },
  ];

  const handleDeposit = () => {
    if (amount < 10) {
      alert("Minimum deposit is $10");
      return;
    }

    alert("Deposit request submitted for admin review");
    setOpen(false);
    setAmount("");
  };

  const statusStyle = (status) => {
    if (status === "Approved") return "text-green-600 bg-green-100";
    if (status === "Pending") return "text-yellow-600 bg-yellow-100";
    return "text-red-600 bg-red-100";
  };

  return (
    <>
      <h1 className="text-2xl font-bold text-[#4F46E5] mb-6">Wallet</h1>

      {/* Wallet Card */}
      <div className="bg-white md:p-6 rounded-xl shadow max-w-lg mb-10">
        <p className="text-xl font-semibold text-gray-800">
          ${balance} Available
        </p>

        <button
          onClick={() => setOpen(true)}
          className="mt-4 bg-[#4F46E5] text-white px-6 py-2 rounded-lg hover:bg-[#4338CA] transition"
        >
          Add Funds
        </button>
      </div>

      {/* Deposit History */}
      <div className="bg-white rounded-xl shadow md:p-6">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">
          Deposit History
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-[#F4F7FA] text-left text-sm text-gray-600">
                <th className="p-3">SR</th>
                <th className="p-3">Amount</th>
                <th className="p-3">TRX ID</th>
                <th className="p-3">Status</th>
              </tr>
            </thead>
            <tbody>
              {deposits.map((item, index) => (
                <tr
                  key={item.id}
                  className="border-t text-sm text-gray-700 hover:bg-gray-50"
                >
                  <td className="p-3">{index + 1}</td>
                  <td className="p-3">${item.amount}</td>
                  <td className="p-3">{item.trx}</td>
                  <td className="p-3">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${statusStyle(
                        item.status
                      )}`}
                    >
                      {item.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {deposits.length === 0 && (
            <p className="text-center text-gray-500 py-6">
              No deposits found
            </p>
          )}
        </div>
      </div>

      {/* Deposit Modal */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4">
          <div className="bg-white rounded-2xl shadow-xl max-w-md w-full p-6">
            <h2 className="text-xl font-bold text-[#4F46E5] mb-4">
              Deposit Funds
            </h2>

            <p className="text-gray-600 mb-4">
              Current Balance: <strong>${balance}</strong>
            </p>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Deposit Amount (USD)
              </label>
              <input
                type="number"
                min="10"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="Minimum $10"
                className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#4F46E5] outline-none"
              />
            </div>

            <div className="bg-[#F4F7FA] p-4 rounded-lg mb-4 text-sm">
              <p><strong>Binance Account:</strong> BugSprint</p>
              <p><strong>Network:</strong> TRC20</p>
              <p className="break-all">
                <strong>Address:</strong> TX9JxK7YwQX5K9S2vXXXXXXX
              </p>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Transaction (TRX) ID
              </label>
              <input
                type="text"
                placeholder="Enter transaction hash"
                className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#4F46E5] outline-none"
              />
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => setOpen(false)}
                className="flex-1 border rounded-lg py-2 hover:bg-gray-100"
              >
                Cancel
              </button>
              <button
                onClick={handleDeposit}
                className="flex-1 bg-[#4F46E5] text-white rounded-lg py-2 hover:bg-[#4338CA]"
              >
                Deposit
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
