import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-xl text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98]",
  {
    variants: {
      variant: {
        default:
          "bg-maroon-700 text-white shadow-md hover:bg-maroon-800 hover:shadow-lg border border-maroon-800/20",
        gold:
          "bg-gradient-to-r from-gold-500 via-gold-400 to-gold-600 text-ink font-semibold shadow-md hover:shadow-gold-500/20 hover:brightness-105 border border-gold-400/40",
        outline:
          "border border-sand-300 bg-white/80 backdrop-blur-sm text-ink hover:bg-sand-100/70 hover:border-sand-400 shadow-sm",
        outlineGold:
          "border-2 border-gold-500/60 bg-white/90 text-gold-800 hover:bg-gold-50 hover:border-gold-600 shadow-sm",
        secondary:
          "bg-sand-100 text-ink hover:bg-sand-200 border border-sand-200",
        ghost:
          "text-ink hover:bg-sand-100/60 hover:text-maroon-800",
        link:
          "text-maroon-700 underline-offset-4 hover:underline p-0 h-auto font-semibold",
      },
      size: {
        default: "h-11 px-5 py-2.5",
        sm: "h-9 rounded-lg px-3.5 text-xs",
        lg: "h-13 rounded-2xl px-7 py-3 text-base font-semibold",
        icon: "h-10 w-10 rounded-xl",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
