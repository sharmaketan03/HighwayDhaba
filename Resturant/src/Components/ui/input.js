import { jsx as _jsx } from "react/jsx-runtime";
import * as React from "react";
import { cn } from "../../lib/utils";
; // optional: className merge helper
const Input = React.forwardRef(({ className, variant = "default", ...props }, ref) => {
    const baseClasses = "px-3 py-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-offset-1";
    const variantClasses = {
        default: "border-gray-300 focus:ring-blue-500 focus:border-blue-500",
        heritage: "border-heritage-brown bg-white/80 focus:ring-traditional-gold focus:border-traditional-gold",
    };
    return (_jsx("input", { ref: ref, className: cn(baseClasses, variantClasses[variant], className), ...props }));
});
Input.displayName = "Input";
export { Input };
