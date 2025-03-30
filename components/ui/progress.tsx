'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';

// Create a simple version of the Radix UI Progress component without the dependency
const Root = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      'relative h-4 w-full overflow-hidden rounded-full bg-secondary',
      className
    )}
    role="progressbar"
    {...props}
  />
));
Root.displayName = "ProgressRoot";

const Indicator = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, style, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("h-full w-full flex-1 bg-primary transition-all", className)}
    style={style}
    {...props}
  />
));
Indicator.displayName = "ProgressIndicator";

// Recreate the same API as the original Progress component
const Progress = React.forwardRef<
  React.ElementRef<typeof Root>,
  React.ComponentPropsWithoutRef<typeof Root> & { value?: number }
>(({ className, value, ...props }, ref) => (
  <Root
    ref={ref}
    className={cn(
      'relative h-4 w-full overflow-hidden rounded-full bg-secondary',
      className
    )}
    {...props}
  >
    <Indicator
      className="h-full w-full flex-1 bg-primary transition-all"
      style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
    />
  </Root>
));
Progress.displayName = "Progress";

export { Progress };