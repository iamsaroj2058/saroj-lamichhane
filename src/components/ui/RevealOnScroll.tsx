import { ReactNode } from "react";
import { motion } from "framer-motion";

interface RevealOnScrollProps {
  children: ReactNode;
  className?: string;
}

export const RevealOnScroll = ({ children, className = "" }: RevealOnScrollProps) => {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};
