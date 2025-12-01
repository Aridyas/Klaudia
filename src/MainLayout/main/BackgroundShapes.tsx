import { AnimatePresence, motion } from "framer-motion";
import { useMemo } from "react";

type ShapePreset = {
    size: number;
    x: number;
    y: number;
    color: string;
    blur: number;
    opacity: number;
};

const blobPresets1: Record<number, ShapePreset[]> = {
    1: [
        // FREE
        { size: 280, x: -150, y: -50, color: "#55c5ff", blur: 65, opacity: 0.25 },
        { size: 210, x: 120, y: 80, color: "#8bffff", blur: 55, opacity: 0.3 }
    ],
    2: [
        // STANDARD
        { size: 330, x: -180, y: -40, color: "#9b6bff", blur: 75, opacity: 0.3 },
        { size: 230, x: 130, y: 40, color: "#6fc7ff", blur: 55, opacity: 0.35 },
        { size: 180, x: -40, y: 160, color: "#b877ff", blur: 45, opacity: 0.25 }
    ],
    3: [
        // PREMIUM
        { size: 380, x: -220, y: -60, color: "#ff6bd6", blur: 80, opacity: 0.35 },
        { size: 270, x: 180, y: 20, color: "#b46bff", blur: 70, opacity: 0.4 },
        { size: 230, x: -40, y: 200, color: "#ff8afd", blur: 55, opacity: 0.3 }
    ],
    4: [
        // ENTERPRISE
        { size: 410, x: -250, y: -70, color: "#00e6de", blur: 95, opacity: 0.45 },
        { size: 290, x: 200, y: 20, color: "#006dff", blur: 80, opacity: 0.5 },
        { size: 250, x: -20, y: 230, color: "#00baff", blur: 65, opacity: 0.4 },
        { size: 210, x: 100, y: -140, color: "#00ffd0", blur: 60, opacity: 0.35 }
    ]
};

const blobPresets2: Record<number, ShapePreset[]> = {
    1: [
        // FREE
        { size: 230, x: 150, y: 50, color: "#55c5ff", blur: 65, opacity: 0.25 },
        { size: 160, x: -120, y: -80, color: "#8bffff", blur: 55, opacity: 0.3 }
    ],
    2: [
        // STANDARD
        { size: 280, x: 180, y: 40, color: "#9b6bff", blur: 75, opacity: 0.3 },
        { size: 180, x: -130, y: -40, color: "#6fc7ff", blur: 55, opacity: 0.35 },
        { size: 130, x: 40, y: -160, color: "#b877ff", blur: 45, opacity: 0.25 }
    ],
    3: [
        // PREMIUM
        { size: 330, x: 220, y: 60, color: "#ff6bd6", blur: 80, opacity: 0.35 },
        { size: 220, x: -180, y: -20, color: "#b46bff", blur: 70, opacity: 0.4 },
        { size: 180, x: 40, y: -200, color: "#ff8afd", blur: 55, opacity: 0.3 } 
    ],
    4: [
        // ENTERPRISE
        { size: 360, x: 250, y: 70, color: "#00e6de", blur: 95, opacity: 0.45 },
        { size: 240, x: -200, y: -20, color: "#006dff", blur: 80, opacity: 0.5 },
        { size: 200, x: 20, y: -230, color: "#00baff", blur: 65, opacity: 0.4 },
        { size: 160, x: -100, y: 140, color: "#00ffd0", blur: 60, opacity: 0.35 }
    ]
};

function Blobs({s}: {s: ShapePreset}) {

    const offset = useMemo(() => ({
        x: Math.random() * 20 - 10,
        y: Math.random() * 20 - 10,
    }), []);

    return(
        <motion.div
            initial={{ opacity: 0.5}}
            animate={{
            opacity: s.opacity,
            x: s.x + offset.x,
            y: s.y + offset.y,
            backgroundColor: s.color,
            filter: `blur(${s.blur * 2}px)`,
        }}
            transition={{
            duration: 8,
            repeatType: "mirror",
            ease: "easeInOut"
        }}
            style={{
            width: s.size,
            height: s.size,
            filter: `blur(${s.blur * 2}px)`,
            willChange: "transform, opacity",
            backgroundColor: s.color
        }}
        className="absolute rounded-full mix-blend-screen"
    />
    )
}

export default function BackgroundShapes({ plan }: { plan: number }) {
    const blobs1 = blobPresets1[plan];
    const blobs2 = blobPresets2[plan];

    return (
        <>
            <AnimatePresence mode="wait">
                <motion.div
                    key={plan}
                    initial={{opacity: 0, scale: 1}}
                    animate={{opacity: 1, scale: 1}}
                    exit={{opacity: 0, scale: 1.2}}
                    transition={{duration: 0.5}}
                    className="flex justify-start items-start absolute inset-0 pointer-events-none z-10"
                >
                    {blobs1.map((s, i) => <Blobs s={s} key={i}/>)}
                </motion.div>
            </AnimatePresence>
            <AnimatePresence mode="wait">
                <motion.div
                    key={plan + "-right"}
                    initial={{opacity: 0, scale: 1}}
                    animate={{opacity: 1, scale: 1}}
                    exit={{opacity: 0, scale: 1.2}}
                    transition={{duration: 0.5}}
                    className="flex justify-end items-center absolute inset-0 pointer-events-none z-20"
                >
                    {blobs2.map((s, i) => <Blobs s={s} key={i}/>)}
                </motion.div>
            </AnimatePresence>
        </>
    );
}
