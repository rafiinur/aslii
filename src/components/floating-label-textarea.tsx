// src/components/ui/floating-label-textarea.tsx

"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

interface FloatingLabelTextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  id: string;
}

const FloatingLabelTextarea = React.forwardRef<
  HTMLTextAreaElement,
  FloatingLabelTextareaProps
>(({ className, label, id, value, ...props }, ref) => {
  const internalRef = React.useRef<HTMLTextAreaElement>(null);

  React.useImperativeHandle(ref, () => internalRef.current!);

  React.useEffect(() => {
    const textarea = internalRef.current;
    if (textarea) {
      textarea.style.height = "0px";
      const scrollHeight = textarea.scrollHeight;
      textarea.style.height = `${scrollHeight}px`;
    }
  }, [value]);

  return (
    <div className={cn("relative w-full", className)}>
      <Textarea
        ref={internalRef}
        id={id}
        placeholder=" "
        value={value}
        className={cn(
          "peer w-full min-h-[120px] max-h-[240px] pt-7 pb-3 px-4 resize-none overflow-y-auto break-all",
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
          "top-4 scale-100",
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

FloatingLabelTextarea.displayName = "FloatingLabelTextarea";

export { FloatingLabelTextarea };
