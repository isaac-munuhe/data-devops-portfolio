import * as React from "react"

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline";
  size?: "default" | "sm" | "lg" | "icon";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = "", variant = "default", size = "default", ...props }, ref) => {
    
    // Base styles
    let baseStyles = "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";
    
    // Variant styles
    let variantStyles = "";
    if (variant === "default") {
      variantStyles = "bg-primary text-primary-foreground hover:bg-primary/90";
    } else if (variant === "outline") {
      variantStyles = "border border-input bg-background hover:bg-accent hover:text-accent-foreground";
    }

    // Size styles
    let sizeStyles = "";
    if (size === "default") sizeStyles = "h-10 px-4 py-2";
    if (size === "lg") sizeStyles = "h-11 rounded-md px-8";
    if (size === "sm") sizeStyles = "h-9 rounded-md px-3";
    if (size === "icon") sizeStyles = "h-10 w-10";

    return (
      <button
        ref={ref}
        className={`${baseStyles} ${variantStyles} ${sizeStyles} ${className}`}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }