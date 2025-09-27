import * as React from "react";
import * as SelectPrimitive from "@radix-ui/react-select@2.1.6";
import { cn } from "./ui/utils";

interface CustomSelectTriggerProps extends React.ComponentProps<typeof SelectPrimitive.Trigger> {
  className?: string;
  size?: "sm" | "default";
  children: React.ReactNode;
  icon?: React.ReactNode;
}

export function CustomSelectTrigger({
  className,
  size = "default", 
  children,
  icon,
  ...props
}: CustomSelectTriggerProps) {
  return (
    <SelectPrimitive.Trigger
      data-slot="select-trigger"
      data-size={size}
      className={cn(
        "border-input data-[placeholder]:text-muted-foreground [&_svg:not([class*='text-'])]:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 dark:hover:bg-input/50 flex w-full items-center justify-between gap-2 rounded-md border bg-input-background px-3 py-2 text-sm whitespace-nowrap transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 data-[size=default]:h-9 data-[size=sm]:h-8 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className,
      )}
      {...props}
    >
      {children}
      {icon && (
        <SelectPrimitive.Icon asChild>
          <span>{icon}</span>
        </SelectPrimitive.Icon>
      )}
    </SelectPrimitive.Trigger>
  );
}