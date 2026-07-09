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
        border-[#3B262B]

        bg-[#24181D]/90
        backdrop-blur-xl

        shadow-[0_10px_40px_rgba(0,0,0,.35)]

        transition-all
        duration-300
        ease-out

        hover:-translate-y-1
        hover:border-[#FF7324]/40
        hover:shadow-[0_15px_50px_rgba(0,0,0,.08)]
        `,
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
