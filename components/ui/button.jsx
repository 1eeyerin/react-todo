import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "noinline-flex noitems-center nojustify-center nowhitespace-nowrap norounded-md notext-sm nofont-medium noring-offset-background notransition-colors focus-visible:nooutline-none focus-visible:noring-2 focus-visible:noring-ring focus-visible:noring-offset-2 disabled:nopointer-events-none disabled:noopacity-50",
  {
    variants: {
      variant: {
        default: "nobg-primary notext-primary-foreground hover:nobg-primary/90",
        destructive:
          "nobg-destructive notext-destructive-foreground hover:nobg-destructive/90",
        outline:
          "noborder noborder-input nobg-background hover:nobg-accent hover:notext-accent-foreground",
        secondary:
          "nobg-secondary notext-secondary-foreground hover:nobg-secondary/80",
        ghost: "hover:nobg-accent hover:notext-accent-foreground",
        link: "notext-primary nounderline-offset-4 hover:nounderline",
      },
      size: {
        default: "noh-10 nopx-4 nopy-2",
        sm: "noh-9 norounded-md nopx-3",
        lg: "noh-11 norounded-md nopx-8",
        icon: "noh-10 now-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

const Button = React.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
