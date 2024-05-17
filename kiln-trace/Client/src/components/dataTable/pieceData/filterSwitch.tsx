import * as React from "react";
import * as SwitchPrimitives from "@radix-ui/react-switch";

import { cn } from "@/lib/utils";

const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>
>(({ className, ...props }, ref) => (
  <SwitchPrimitives.Root
    className={cn(
      "relative peer inline-flex h-10 w-24 shrink-0 cursor-pointer items-center bg-background rounded border-2 border-transparent outline -outline-offset-[4px] outline-2 !outline-background focus:!outline-background focus:!outline-2 transition-colors disabled:cursor-not-allowed disabled:opacity-50",
      className
    )}
    {...props}
    ref={ref}
  >
    <span className="flex items-center justify-center h-full w-full z-10 text-sm font-semibold">
      Any
    </span>
    <SwitchPrimitives.Thumb
      className={cn(
        "absolute top-0 left-0 -translate-x-50 -translate-y-50 pointer-events-none block h-9 w-12 rounded bg-accent shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-11 data-[state=unchecked]:translate-x-0"
      )}
    />
    <span className="flex items-center justify-center w-full h-full z-10 text-sm font-semibold">
      All
    </span>
  </SwitchPrimitives.Root>
));
Switch.displayName = SwitchPrimitives.Root.displayName;

export { Switch };
