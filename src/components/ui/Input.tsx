import { forwardRef, type InputHTMLAttributes } from "react";
import { cn } from "../../utils/cn";

const Input = forwardRef<
  HTMLInputElement,
  InputHTMLAttributes<HTMLInputElement>
>(({ className, ...props }, ref) => {
  return (
    <input
      ref={ref}
      className={cn(
        `
        w-full
        rounded-2xl
        border
        border-[color:var(--border)]
        bg-[color:var(--surface)]
        px-4
        py-3

        text-[color:var(--foreground)]

        outline-none

        transition-all
        duration-300

        focus:border-[color:var(--primary)]
        focus:ring-2
        focus:ring-[#FF7324]/30
        `,
        className
      )}
      {...props}
    />
  );
});

Input.displayName = "Input";

export default Input;