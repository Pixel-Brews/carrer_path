import * as React from "react";
import { cn } from "@/lib/utils";

interface FrostedPanelProps extends React.HTMLAttributes<HTMLDivElement> {
  intensity?: "light" | "medium" | "heavy";
  border?: boolean;
  hoverable?: boolean;
}

const FrostedPanel = React.forwardRef<HTMLDivElement, FrostedPanelProps>(
  (
    {
      className,
      intensity = "medium",
      border = false,
      hoverable = false,
      children,
      ...props
    },
    ref,
  ) => {
    const intensityClasses = {
      light: "bg-white/30 backdrop-blur-sm",
      medium: "bg-white/40 backdrop-blur-md",
      heavy: "bg-white/50 backdrop-blur-lg",
    };

    return (
      <div
        ref={ref}
        className={cn(
          "rounded-lg",
          intensityClasses[intensity],
          border && "border border-white/20",
          hoverable &&
            "transition-all duration-300 hover:bg-white/50 hover:shadow-lg",
          className,
        )}
        {...props}
      >
        {children}
      </div>
    );
  },
);

FrostedPanel.displayName = "FrostedPanel";

export { FrostedPanel };
