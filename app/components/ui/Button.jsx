"use client";

import React from "react";

export default function Button({ children, className = "", ...props }) {
  return (
    <button
      {...props}
      className={`px-6 py-3 rounded-xl font-medium transition 
      duration-300 bg-primary text-white hover:opacity-90 active:scale-95 
      dark:bg-[#1f1f1f] dark:text-white ${className}`}
    >
      {children}
    </button>
  );
}
