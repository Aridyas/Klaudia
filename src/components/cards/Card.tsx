import type React from "react";

interface CardProps{
    className?: string;
    children?: React.ReactNode;
    id?: number;
}

function Card({className, children}: CardProps) {

    return(
        <div className={`flex p-[2%] rounded-3xl flex-col bg-(--secondary-color) text-(--main-text) duration-200 ${className}`}>
            {children}
        </div>
    )
}

export default Card;