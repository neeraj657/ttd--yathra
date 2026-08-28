import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-maroon-700 text-white shadow hover:bg-maroon-800",
        secondary:
          "border-transparent bg-sand-200 text-ink hover:bg-sand-300",
        gold:
          "border-gold-300/80 bg-gold-50 text-gold-900 shadow-sm",
        goldSolid:
          "border-transparent bg-gradient-to-r from-gold-500 to-gold-600 text-ink font-semibold shadow-sm",
        outline:
          "text-ink border-sand-300 bg-white/70",
        maroonSoft:
          "border-maroon-200 bg-maroon-50 text-maroon-800",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
