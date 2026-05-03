"use client";

import { useRef, useState, ReactNode } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

type ButtonVariant = "primary" | "secondary" | "primary-small" | "inverted";

interface MagneticButtonProps {
  children: ReactNode;
  variant?: ButtonVariant;
  href?: string;
  onClick?: (e: React.MouseEvent) => void;
  type?: "button" | "submit" | "reset";
  className?: string;
}

export default function MagneticButton({
  children,
  variant = "primary",
  href,
  onClick,
  type = "button",
  className = "",
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * 0.3, y: middleY * 0.3 });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  let baseClass = "btn-primary";
  if (variant === "secondary") baseClass = "btn-secondary";
  if (variant === "primary-small") baseClass = "btn-primary-small";
  if (variant === "inverted") baseClass = "btn-inverted";

  const content = (
    <motion.div
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className={`${baseClass} ${className}`}
      style={{ display: "inline-flex", width: "100%", justifyContent: "center", alignItems: "center" }}
    >
      {children}
    </motion.div>
  );

  return (
    <div 
      ref={ref} 
      onMouseMove={handleMouse} 
      onMouseLeave={reset} 
      style={{ display: "inline-block", position: "relative", zIndex: 1, padding: "0.5rem", margin: "-0.5rem" }}
    >
      {href ? (
        href.startsWith("mailto:") ? (
          <a href={href} onClick={onClick} style={{ textDecoration: 'none', display: 'block', width: '100%' }}>{content}</a>
        ) : (
          <Link href={href} onClick={onClick} style={{ textDecoration: 'none', display: 'block', width: '100%' }}>{content}</Link>
        )
      ) : (
        <button type={type} onClick={onClick} style={{ all: "unset", cursor: "pointer", display: "block", width: "100%" }}>
          {content}
        </button>
      )}
    </div>
  );
}