import { type ButtonHTMLAttributes } from "react";
import { cn } from "../../utils/cn";

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
}
export default function Button({
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
        
        rounded-xl
        
        bg-gradient-to-r
        from-[#FF7324]
        to-[#FF5521]
        
        px-6
        py-3
        
        font-semibold
        text-white
        
        shadow-lg
        shadow-[#FF5521]/20
        
        transition-all
        duration-200
        
        hover:scale-[1.03]
        hover:shadow-sl
        hover-shadow-[#FFR5521]/30
        
        active:scale-95
        
        disabled:cursor-not-allowed
        disabled:opacity-50
        
        focus:outline-none
        focus:ring-2
        focus:ring-[#FF7324]/40
        `,
        className
      )}
      {...props}
      >
        {children}
      </button>
  );
}

