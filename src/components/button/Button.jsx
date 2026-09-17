import React from "react";

export default function Button({ children, variant = "primary", className = "", ...props }) {
    const variants = {
        primary: "bg-[#4A6FA5] text-white hover:bg-[#3A5F95] focus:ring-[#4A6FA5]",
        secondary: "bg-[#6B7280] text-white hover:bg-[#5B6370] focus:ring-[#6B7280]",
        danger: "bg-[#DC2626] text-white hover:bg-[#B91C1C] focus:ring-[#DC2626]",
        outline: "border-2 border-[#4A6FA5] text-[#4A6FA5] bg-transparent hover:bg-[#4A6FA5] hover:text-white focus:ring-[#4A6FA5]",
    };

    return (
        <button
            className={`
                inline-flex items-center justify-center gap-2
                px-6 py-2.5 rounded-lg
                text-base font-medium
                transition-colors duration-200
                focus:outline-none focus:ring-2 focus:ring-offset-2
                cursor-pointer
                ${variants[variant] || variants.primary}
                ${className}
            `}
            {...props}
        >
            {children}
        </button>
    );
}
