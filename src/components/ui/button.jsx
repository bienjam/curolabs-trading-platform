import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-[12px] leading-[18px] font-medium ring-offset-background transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "border border-[#0E9F6E] text-[#0E9F6E]",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outlineGreen:
          "border border-[#0E9F6E] text-[#0E9F6E]",
        outlineRed:
          "border border-[#F05252] text-[#F05252]",
        primary:
          "bg-[#0E9F6E] text-white",
        secondary:
          "bg-[#F05252] text-white",
        tertiary:
          "bg-[#B93876] text-white",
        icon:
          "border border-[#2F2C2D] text-white bg-[#151314] p-0 h-[28px] w-[28px]",
        iconSecondary:
          "border border-[#E74694] text-white p-0 h-[20px] w-[20px]",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "px-3 py-1",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

const Button = React.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button"
  return (
    (<Comp
      className={cn(buttonVariants({ variant, size, className }))}
      ref={ref}
      {...props} />)
  );
})
Button.displayName = "Button"

export { Button, buttonVariants }