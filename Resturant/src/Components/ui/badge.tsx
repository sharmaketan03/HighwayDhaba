import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

// cn helper, agar tumhare utils me missing hai to ye temporary fix hai
export const cn = (...classes: (string | undefined | boolean)[]) =>
  classes.filter(Boolean).join(" ");

const badgeVariants = cva(
  "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "bg-gray-200 text-gray-800",
        secondary: "bg-green-100 text-green-800",
        destructive: "bg-red-100 text-red-800",
        outline: "border border-gray-300 text-gray-800",
        popular: "bg-yellow-100 text-yellow-800",
        spicy: "bg-orange-100 text-orange-800",
        veg: "bg-green-100 text-green-800",
        nonveg: "bg-red-100 text-red-800",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

const Badge = ({ className, variant, ...props }: BadgeProps) => {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
};

export { Badge, badgeVariants };
