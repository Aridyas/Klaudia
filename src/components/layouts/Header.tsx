import {motion, useScroll, useMotionValueEvent} from "framer-motion";
import { useState } from "react";
import type React from "react"


interface HeaderProps{
    children?: React.ReactNode;
}

function Header({children}: HeaderProps) {

    const {scrollY} = useScroll();
    const[opacity, setOpacity] = useState(1);

    useMotionValueEvent(scrollY, "change", (latest) => {
        setOpacity(latest > 200 ? 0.6 : 1);
    });

    return(
        <motion.header
            animate={{opacity: opacity}}
            transition={{
                duration: 0.3
            }}
            className="flex flex-row justify-between items-center p-10 fixed z-999 w-full h-[10vh] top-0 bg-(--secondary-color)">
            <h2
                className="text-2xl font-[h2font]"
                style={{
                    background: "var(--gradient-neon)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text"
                }}
            >KLAUDIA</h2>
            <div className="flex flex-row gap-5 text-xl font-[h2font]">
                {children}
            </div>
        </motion.header>
    )
}

export default Header;