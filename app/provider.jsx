"use client";

import { AnimatePresence } from "framer-motion";
import useLenis from "@/hooks/useLenis";

export default function Providers({ children }) {
  useLenis(); // enable smooth scrolling

  return <AnimatePresence>{children}</AnimatePresence>;
}
