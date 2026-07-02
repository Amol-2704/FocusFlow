import { type HTMLAttributes } from "react";
import { cn } from "../../utils/cn";

interface CardProps extends HTMLAttributes<HTMLDivElement> {}

export default function Card({
    className,
    children,
    ...props
}: CardProps) {
    return (
        <div className={cn(
            "rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-xl",
            className
        )}
        {...props}
       >
        {children}
    </div>
    );
}