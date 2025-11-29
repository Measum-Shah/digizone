"use client";

import React from "react";

export default function Input({ className = "", ...props }) {
  return (
    <input
      {...props}
      className={`w-full p-3 rounded-xl border border-gray-300 
      dark:border-gray-700 bg-white dark:bg-[#1a1a1a] 
      focus:outline-none focus:border-primary dark:text-white 
      transition ${className}`}
    />
  );
}
