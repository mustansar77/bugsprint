"use client";
import { useState } from "react";

export default function Withdraw() {
  const [open, setOpen] = useState(false);
  const [amount, setAmount] = useState("");
  const [wallet, setWallet] = useState("");
  const [network, setNetwork] = useState("");
  const [address, setAddress] = useState("");

  const balance = 320;

  // Mock withdraw history (later from backend)
  const withdrawals = [
    { id: 1, amount: 100, wallet: "Binance", status: "Approved" },
    { id: 2, amount: 50, wallet: "MetaMask", status: "Pending" },
    { id: 3, amount: 30, wallet: "TrustWallet", status: "Rejected" },
    { id: 4, amount: 200, wallet: "Binance", status: "Approved" },
  ];

  const handleWithdraw = () => {
    if (amount <= 0) {
      alert("Please enter a valid amount");
      return;
    }
    if (!wallet || !network || !address) {
      alert("Please fill all fields");
      return;
    }

    alert("Withdraw request submitted for admin review");
    setOpen(false);
    setAmount("");
    setWallet("");
    setNetwork("");
    setAddress("");
  };

  const statusStyle = (status) => {
    if (status === "Approved") return "text-green-600 bg-green-100";
    if (status === "Pending") return "text-yellow-600 bg-yellow-100";
    return "text-red-600 bg-red-100";
  };

  return (
    <>
      <h1 className="text-2xl font-bold text-[#4F46E5] mb-6">Withdraw</h1>

      {/* Withdraw Card */}
      <div className="bg-white px-2 py-4 md:p-6 rounded-xl shadow max-w-lg mb-10">
        <p className="text-xl font-semibold text-gray-800">
          Current Balance: ${balance}
        </p>

        <button
          onClick={() => setOpen(true)}
          className="mt-4 bg-[#4F46E5] text-white px-6 py-2 rounded-lg hover:bg-[#4338CA] transition"
        >
          Withdraw Funds
        </button>
      </div>

      {/* Withdraw History */}
     {/* Withdraw History */}
<div className="bg-white rounded-xl shadow p-2 md:p-6">
  <h2 className="text-lg font-semibold text-gray-800 mb-4">
    Withdraw History
  </h2>

  <div className="overflow-x-auto">
    <table className="min-w-full border-collapse">
      <thead>
        <tr className="bg-[#F4F7FA] text-left text-sm text-gray-600">
          <th className="p-3">SR</th>
          <th className="p-3">Amount</th>
          <th className="p-3">Wallet</th>
          <th className="p-3">Status</th>
        </tr>
      </thead>
      <tbody>
        {withdrawals.map((item, index) => (
          <tr
            key={item.id}
            className="border-t text-sm text-gray-700 hover:bg-gray-50"
          >
            <td className="p-3">{index + 1}</td>
            <td className="p-3">${item.amount}</td>
            <td className="p-3">{item.wallet}</td>
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

    {withdrawals.length === 0 && (
      <p className="text-center text-gray-500 py-6">
        No withdrawals found
      </p>
    )}
  </div>
</div>


      {/* Withdraw Modal */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4">
          <div className="bg-white rounded-2xl shadow-xl max-w-md w-full p-6">
            <h2 className="text-xl font-bold text-[#4F46E5] mb-4">
              Withdraw Funds
            </h2>

            <p className="text-gray-600 mb-4">
              Current Balance: <strong>${balance}</strong>
            </p>

            <div className="mb-4 space-y-3">
              {/* Amount */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Amount (USD)
                </label>
                <input
                  type="number"
                  min="1"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  placeholder="Enter amount"
                  className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#4F46E5] outline-none"
                />
              </div>

              {/* Wallet */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Select Wallet
                </label>
                <select
                  value={wallet}
                  onChange={(e) => setWallet(e.target.value)}
                  className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#4F46E5] outline-none"
                >
                  <option value="">Select Wallet</option>
                  <option value="Binance">Binance</option>
                  <option value="MetaMask">MetaMask</option>
                  <option value="TrustWallet">TrustWallet</option>
                </select>
              </div>

              {/* Network */}
             {/* Network */}
<div>
  <label className="block text-sm font-medium text-gray-700 mb-1">
    Network
  </label>
  <select
    value={network}
    onChange={(e) => setNetwork(e.target.value)}
    className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#4F46E5] outline-none"
  >
    <option value="">Select Network</option>
    <option value="TRC20">TRC20</option>
    <option value="BSC">BSC</option>
    <option value="ERC20">ERC20</option>
    <option value="Polygon">Polygon</option>
  </select>
</div>


              {/* Wallet Address */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Wallet Address
                </label>
                <input
                  type="text"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="Enter wallet address"
                  className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#4F46E5] outline-none"
                />
              </div>
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => setOpen(false)}
                className="flex-1 border rounded-lg py-2 hover:bg-gray-100"
              >
                Cancel
              </button>
              <button
                onClick={handleWithdraw}
                className="flex-1 bg-[#4F46E5] text-white rounded-lg py-2 hover:bg-[#4338CA]"
              >
                Withdraw
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
