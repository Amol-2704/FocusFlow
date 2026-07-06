import { cn } from "../../utils/cn";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

export default function Badge({
  children,
  className,
}: BadgeProps) {
  return (
    <span
      className={cn(
        `
        inline-flex
        items-center
        rounded-full
        border
        border-[color:var(--border)]
        bg-[color:var(--surface)]
        px-3
        py-1
        text-xs
        font-semibold
        uppercase
        tracking-wider
        text-[color:var(--foreground-secondary)]
        `,
        className
      )}
    >
      {children}
    </span>
  );
}