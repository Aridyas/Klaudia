import type React from "react";
import { twMerge } from "tailwind-merge";


interface SectionProps{
    className?: string;
    children?: React.ReactNode;
    id?: string;
}

function SectionCard({className, children, id}: SectionProps) {
    return(
        <section id={id} className={twMerge(`flex h-screen w-screen justify-center items-center flex-col bg-(--background-color) text-(--main-text) m-0 ${className}`)}>
            {children}
        </section>
    )
}

export default SectionCard; 