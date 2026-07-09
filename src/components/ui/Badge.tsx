import { type HTMLAttributes } from "react";
import { cn } from "../../utils/cn";

interface BadgeProps extends HTMLAttributes<HTMLDivElement> {}

export default function Badge({
  className,
  children,
  ...props
}: BadgeProps) {
  return (
    <div
      className={cn(
        `
        inline-flex
        items-center
        rounded-full

        border

        px-5
        py-2

        text-base
        font-semibold

        transition-all
        duration-300

        hover:border-[#FF7324]/60
        hover:bg-[#FF7324]/10
        
        `,
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}