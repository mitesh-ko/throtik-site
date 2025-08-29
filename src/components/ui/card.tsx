"use client";

import * as React from "react";

export const Card = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ className = "", ...props }, ref) => (
    <div
        ref={ref}
        className={`rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition ${className}`}
        {...props}
    />
));
Card.displayName = "Card";

export const CardContent = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ className = "", ...props }, ref) => (
    <div ref={ref} className={`p-6 ${className}`} {...props} />
));
CardContent.displayName = "CardContent";
