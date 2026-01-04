"use client";

import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "success" | "warning";
}

export default function Badge({ children, className, variant = "primary" }: BadgeProps) {
  const variants = {
    primary: "bg-blue-500/20 text-blue-300 border-blue-500/30",
    secondary: "bg-cyan-500/20 text-cyan-300 border-cyan-500/30",
    success: "bg-green-500/20 text-green-300 border-green-500/30",
    warning: "bg-yellow-500/20 text-yellow-300 border-yellow-500/30"
  };
  
  return (
    <span className={cn(
      "inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold border backdrop-blur-sm",
      variants[variant],
      className
    )}>
      {children}
    </span>
  );
}
