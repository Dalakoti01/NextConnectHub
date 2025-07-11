"use client"; // Needed for toast in Next.js App Router

import { toast } from "react-hot-toast";

export default function ToastButton({ 
  label = "Explore the Marketplace", 
  className = "" 
}) {
  const defaultClass =
    "bg-white cursor-pointer text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-300";

  return (
    <button
      onClick={() => toast.success("Coming Soon")}
      className={className || defaultClass} // use prop if passed
    >
      {label}
    </button>
  );
}
