import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

// width: fit-content;
// min-height: 34px;
// padding: .875rem 1.5rem;
// zoom: 1;
// text-align: center;
// text-decoration: none;
// text-transform: uppercase;
// font-size: .875rem;
// font-weight: 400;
// color: #fff;
// line-height: normal;
// letter-spacing: 1px;
// outline: none;
// border: 1px solid currentColor;
// border-radius: 0;
// background-color: transparent;
// cursor: pointer;
// overflow: hidden;
// transition: all 0.6s ease-in-out;

const buttonVariants = cva(
  'relative inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-normal uppercase transition-colors ease-in-out shadow-none border focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
  {
    variants: {
      variant: {
        default: 'bg-transparent text-primary-foreground hover:bg-primary-foreground hover:text-white',
        secondary: 'bg-primary-foreground text-white hover:bg-transparent hover:text-primary-foreground'
        // destructive: 'bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90',
        // outline: 'border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground',
        // ghost: 'hover:bg-accent hover:text-accent-foreground',
        // link: 'text-primary underline-offset-4 hover:underline'
      },
      size: {
        default: 'h-11 px-6 py-2',
        icon: 'h-5 w-5'
      }
    },
    defaultVariants: {
      variant: 'default',
      size: 'default'
    }
  }
)

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({ className, variant, size, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : 'button'
  return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
})
Button.displayName = 'Button'

export { Button, buttonVariants }
