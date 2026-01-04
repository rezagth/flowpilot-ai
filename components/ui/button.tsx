"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { forwardRef, ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    const baseStyles = "inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed";
    
    const variants = {
      primary: "bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 hover:scale-105",
      secondary: "bg-gradient-to-r from-cyan-600 to-cyan-700 text-white shadow-lg shadow-cyan-500/30 hover:shadow-xl hover:shadow-cyan-500/40 hover:scale-105",
      ghost: "bg-white/5 text-white/90 border border-white/20 hover:bg-white/10 hover:border-white/30",
      outline: "border-2 border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white"
    };
    
    const sizes = {
      sm: "px-4 py-2 text-sm",
      md: "px-6 py-3 text-base",
      lg: "px-8 py-4 text-lg"
    };
    
    return (
      <motion.button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        {...props}
      >
        {children}
      </motion.button>
    );
  }
);

Button.displayName = "Button";

export default Button;
