"use client";

import { cn } from "@/lib/utils";
import { forwardRef, InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, type = "text", ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "w-full px-4 py-3 rounded-lg",
          "bg-white/5 border border-white/20",
          "text-white placeholder:text-slate-400",
          "focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent",
          "transition-all duration-300",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";

export default Input;
