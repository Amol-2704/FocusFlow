import type { ButtonHTMLAttributes } from "react";
import { cn } from "../../utils/cn";

interface IconButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {}

export default function IconButton({
  className,
  children,
  ...props
}: IconButtonProps) {
  return (
    <button
      className={cn(
        `
        flex
        h-11
        w-11
        items-center
        justify-center

        rounded-xl

        border
        border-[color:var(--border)]

        bg-[color:var(--surface)]

        transition-all
        duration-300

        hover:bg-[color:var(--elevated)]
        hover:border-[color:var(--primary)]
        hover:scale-105

        active:scale-95
        `,
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}