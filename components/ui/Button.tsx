"use client";

import React from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "natural";
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", isLoading, children, ...props }, ref) => {
    const variants = {
      primary: "bg-brand-green hover:bg-brand-green/90 text-white shadow-lg shadow-brand-green/20 hover:shadow-xl hover:shadow-brand-green/30",
      secondary: "bg-brand-light-green hover:bg-brand-light-green/90 text-white",
      outline: "bg-transparent border-2 border-brand-green text-brand-green hover:bg-brand-green hover:text-white",
      ghost: "bg-transparent hover:bg-brand-green/5 text-brand-green",
      natural: "bg-brand-beige hover:bg-brand-mint text-brand-green border border-brand-green/10",
    };

    const sizes = {
      sm: "px-4 py-2 text-xs",
      md: "px-6 py-3 text-sm font-bold",
      lg: "px-10 py-4 text-lg font-bold",
    };

    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center rounded-2xl transition-all duration-300 disabled:opacity-50 disabled:pointer-events-none active:scale-95 uppercase tracking-wide",
          variants[variant],
          sizes[size],
          className
        )}
        disabled={isLoading || props.disabled}
        {...props}
      >
        {isLoading ? (
          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
        ) : null}
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
