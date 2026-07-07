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
        `inline-flex items-center gap-2
         rounded-full
         bg-[#FF5521]/15
         border border-[#FF5521]/40
         px-5 py-2
         text-sm font-semibold text-[#FFC300]`,
        className
      )}
    >
      {children}
    </span>
  );
}