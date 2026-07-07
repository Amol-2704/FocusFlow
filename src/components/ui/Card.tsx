import { type HTMLAttributes } from "react";
import { cn } from "../../utils/cn";

interface CardProps extends HTMLAttributes<HTMLDivElement> {}

export default function Card({
  className,
  children,
  ...props
}: CardProps) {
  return (
    <div
      className={cn(
        `
        relative
        overflow-hidden

        rounded-[32px]

        border
        border-white/5

        bg-[#24181D]

        shadow-[0_30px_80px_rgba(0,0,0,.45)]

        transition-all
        duration-300

        hover:-translate-y-1
        hover:shadow-[0_40px_90px_rgba(0,0,0,.55)]
        `,
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
