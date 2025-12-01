import type React from "react";
import { twMerge } from "tailwind-merge";

interface ButtonProps{
    children?: React.ReactNode;
    className?: string;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    style?: React.CSSProperties;
}

function Button({children, className, onClick, style}: ButtonProps) {
    const handleClick: React.MouseEventHandler<HTMLButtonElement> = (e) => {
        onClick?.(e);
    }

    return(
        <button className={twMerge(`flex justify-center items-center p-2 rounded-xl border-none hover:scale-[1.03] cursor-pointer ${className}`)} onClick={handleClick} style={style}>
            {children}
        </button>
    )
}

export default Button;