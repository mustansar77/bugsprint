"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const menu = [
  { name: "Overview", path: "/dashboard/buyer" },
  { name: "Post a Bug", path: "/dashboard/buyer/post-bug" },
  { name: "My Bugs", path: "/dashboard/buyer/bugs" },
  { name: "Payments", path: "/dashboard/buyer/payments" },
  { name: "Wallet", path: "/dashboard/buyer/wallet" },
  { name: "Support", path: "/dashboard/buyer/support" },
];

export default function BuyerLayout({ children }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#F4F7FA]">
      {/* Navbar */}
      <header className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          {/* Logo */}
          <div className="text-2xl font-bold text-[#4F46E5]">
            BugSprint
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-6">
            {menu.map((item) => (
              <Link key={item.path} href={item.path}>
                <span
                  className={`font-medium cursor-pointer transition
                  ${
                    pathname === item.path
                      ? "text-[#4F46E5] border-b-2 border-[#4F46E5] pb-1"
                      : "text-gray-700 hover:text-[#4F46E5]"
                  }`}
                >
                  {item.name}
                </span>
              </Link>
            ))}
          </nav>

          {/* Mobile Button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setOpen(!open)}
          >
            ☰
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="md:hidden bg-white border-t px-4 py-4 space-y-2">
            {menu.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                onClick={() => setOpen(false)}
              >
                <div
                  className={`px-4 py-2 rounded-lg
                  ${
                    pathname === item.path
                      ? "bg-[#4F46E5] text-white"
                      : "text-gray-700 hover:bg-[#EEF2FF]"
                  }`}
                >
                  {item.name}
                </div>
              </Link>
            ))}
          </div>
        )}
      </header>

      {/* Page Content */}
      <main className="pt-24 px-4 md:px-8 max-w-7xl mx-auto">
        {children}
      </main>
    </div>
  );
}
