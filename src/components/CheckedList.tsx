import { Check } from "lucide-react";
import { twMerge } from "tailwind-merge";

interface CheckProps{
    children?: string;
    className?: string;
}

function Checked({children, className}: CheckProps) {
    return(
        <p className={twMerge(`flex flex-row items-center ${className}`)}>
            <span className="flex items-center justify-center w-5 h-5 rounded-full bg-cyan-950 mr-2 mt-2 mb-2"><Check className="w-3 h-3 text-cyan-500"/></span>
            <span>{children}</span>
        </p>
    )
}

export default Checked;