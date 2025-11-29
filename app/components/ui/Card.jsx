import React from "react";

export default function Card({ children, className = "" }) {
  return (
    <div
      className={`rounded-2xl p-6 shadow-md border 
      border-gray-200 dark:border-gray-800 bg-white 
      dark:bg-[#111] transition ${className}`}
    >
      {children}
    </div>
  );
}
