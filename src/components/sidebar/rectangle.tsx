import { cn } from "@/lib/utils";
import { VariantProps, cva } from "class-variance-authority";
import React from "react";

const rectVariant = cva(
  "absolute top-0 bottom-0 my-auto left-0 h-10 w-1 bg-white hidden",
  {
    variants: {
      variant: {
        default: "",
        rounded: "rounded-r-lg",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

const Rectangle = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div"> & VariantProps<typeof rectVariant>
>(({ className, variant, ...props }, ref) => {
  return <div className={cn(rectVariant({ variant }), className)} {...props} />;
});

export default Rectangle;
