"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", path: "/" },
    { label: "Services", path: "/services" },
    { label: "Testimonials", path: "/testimonials" },
    { label: "About Us", path: "/aboutUs" },
    { label: "Get in Touch", path: "/getInTouch" },
    { label: "Freelancer Marketplace", path: "/freelanceMarketPlace" },
  ];

  return (
    <div className="w-full border-b">
      <div className="px-5 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center text-xl font-bold">
          <h1>NEXTCONNECT</h1>
          <span className="text-[#146fb9]">HUB</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-3">
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={`px-3 cursor-pointer py-1 rounded font-medium ${
                pathname === item.path
                  ? "bg-[#146fb9] text-white"
                  : "hover:bg-blue-100 text-black"
              }`}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="flex flex-col px-5 pb-4 gap-2 md:hidden">
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={`text-left px-3 py-2 rounded font-medium ${
                pathname === item.path
                  ? "bg-blue-600 text-white"
                  : "hover:bg-blue-100 text-black"
              }`}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Navbar;