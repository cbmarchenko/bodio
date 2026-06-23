"use client";

import { motion, type Variants } from "framer-motion";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 25 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

type Props = {
  children: React.ReactNode;
  className?: string;
};

export function StaggeredGrid({ children, className = "" }: Props) {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-60px" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggeredItem({ children, className = "" }: Props) {
  return (
    <motion.div variants={item} className={className}>
      {children}
    </motion.div>
  );
}
