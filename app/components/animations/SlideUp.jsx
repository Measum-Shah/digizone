"use client";

import { motion } from "framer-motion";

export default function SlideUp({ children, delay = 0, duration = 0.6, offset = 40 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: offset }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
