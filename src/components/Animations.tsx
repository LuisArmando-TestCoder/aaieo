"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

export const FadeIn = ({ children, delay = 0, className, style }: { children: ReactNode, delay?: number, className?: string, style?: React.CSSProperties }) => (
  <motion.div
    className={className}
    style={style}
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay }}
  >
    {children}
  </motion.div>
);

export const StaggerContainer = ({ children, className, style }: { children: ReactNode, className?: string, style?: React.CSSProperties }) => (
  <motion.div
    className={className}
    style={style}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-50px" }}
    variants={{
      hidden: {},
      visible: {
        transition: {
          staggerChildren: 0.15
        }
      }
    }}
  >
    {children}
  </motion.div>
);

export const StaggerItem = ({ children, className, style }: { children: ReactNode, className?: string, style?: React.CSSProperties }) => (
  <motion.div
    className={className}
    style={style}
    variants={{
      hidden: { opacity: 0, y: 30 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
    }}
  >
    {children}
  </motion.div>
);