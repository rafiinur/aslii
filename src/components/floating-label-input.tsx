// src/components/ui/floating-label-input.tsx

"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface FloatingLabelInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  id: string;
}

const FloatingLabelInput = React.forwardRef<
  HTMLInputElement,
  FloatingLabelInputProps
>(({ className, label, id, ...props }, ref) => {
  return (
    <div className={cn("relative w-full", className)}>
      <Input
        ref={ref}
        id={id}
        placeholder=" "
        className={cn(
          "peer w-full h-12 pt-6 pb-2 px-4",
          "transition-colors duration-200 ease-in-out",
          "focus:border-primary focus:ring-1 focus:ring-primary/20",
          "border-input bg-background"
        )}
        {...props}
      />
      <Label
        htmlFor={id}
        className={cn(
          "absolute left-4 text-sm text-muted-foreground pointer-events-none z-10",
          "transition-all duration-200 ease-out origin-top-left",
          "top-3 scale-100",
          "peer-focus:top-2 peer-focus:scale-75 peer-focus:text-primary peer-focus:font-medium",
          "peer-[:not(:placeholder-shown)]:top-2 peer-[:not(:placeholder-shown)]:scale-75",
          "peer-[:not(:placeholder-shown)]:text-primary peer-[:not(:placeholder-shown)]:font-medium"
        )}
      >
        {label}
      </Label>
    </div>
  );
});

FloatingLabelInput.displayName = "FloatingLabelInput";

export { FloatingLabelInput };
