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
        rounded-3xl
        border
        border-[color:var(--border)]
        bg-[color:var(--card)]
        shadow-[0_20px_60px_rgba(0,0,0,0.35)]
        backdrop-blur-xl

        transition-all
        duration-300

        hover:-translate-y-1
        hover:border-[color:var(--primary)]
        hover:shadow-[0_20px_60px_rgba(255,115,36,0.15)]
        `,
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}