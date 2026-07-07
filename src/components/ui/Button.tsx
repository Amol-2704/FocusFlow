import { type ButtonHTMLAttributes } from "react";
import { cn } from "../../utils/cn";

type ButtonVariant = "primary" | "secondary" | "danger";

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
}

const variants: Record<ButtonVariant, string> = {
  primary: `
    bg-gradient-to-r from-[#FF6A3D] to-[#FF8C42]
    hover:scale-[1.02]
    hover:shadow-orange-500/30
    active:scale-[0.98]
    transition-all
    duration-200
  `,

  secondary: `
    bg-[color:var(--surface)]
    border
    border-[color:var(--border)]
    text-[color:var(--foreground)]
    hover:border-[color:var(--primary)]
    hover:bg-[color:var(--elevated)]
  `,

  danger: `
    bg-red-500
    text-white
    hover:bg-red-400
    hover:shadow-[0_0_25px_rgba(239,68,68,0.35)]
  `,
};

export default function Button({
  variant = "primary",
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        `
        inline-flex
        items-center
        justify-center

        rounded-2xl

        px-6
        py-3

        text-sm
        font-semibold

        transition-all
        duration-300

        hover:-translate-y-1
        hover:scale-[1.02]

        active:scale-95

        disabled:pointer-events-none
        disabled:opacity-50

        focus:outline-none
        focus:ring-2
        focus:ring-[#FF7324]
        focus:ring-offset-2
        focus:ring-offset-[color:var(--background)]
        `,
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}