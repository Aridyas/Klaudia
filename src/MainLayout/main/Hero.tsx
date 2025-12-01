import SectionCard from "../../components/cards/SectionCard";
import {motion, useAnimationControls} from "framer-motion"
import { useEffect, useState } from "react";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";

function Hero() {

    const navigate = useNavigate();

    const goLogin = () => {
        navigate("/login")
    }

    const klaudiaControls = useAnimationControls();
    const isControl = useAnimationControls();
    const wordControl = useAnimationControls();
    const descControl = useAnimationControls();

    const words = ["FAST", "EFFICIENT","RELIABLE"]
    const [index, setIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    const sequence = async() => {
        if (isAnimating) return;
        setIsAnimating(true);

        await descControl.start({
            opacity: 0
        })

        await klaudiaControls.start({
            x: -270,
            opacity: 1,
            scale: 1,
            transition: {duration: 0.6, delay: 0.5}
        });

        await isControl.start({
            opacity: 1,
            transition: {duration: 0.4}
        })

        for (let i = 0; i < words.length; i++) {
            setIndex(i);
            await wordControl.start({
                opacity: [0, 1, 1, 0],
                x: 190,
                y: [10, 0, 0, -10],
                transition: { duration: 1.2 }
            })
        }

        await wordControl.start({ opacity: 0, transition: { duration: 0.3 } });

        await isControl.start({ opacity: 0, transition: { duration: 0.3 } });

         await klaudiaControls.start({
            x: 0,
            transition: {duration: 0.6}
        });

        await klaudiaControls.start({scale: 1.3})

        await descControl.start({
            opacity: 1
        })

        setIsAnimating(false);
    }

    useEffect(() =>{
        sequence();
    },[])

    return(
        <SectionCard id="hero" className="mb-40 relative">
            <div className="flex relative items-center justify-center gap-3 font-bold text-8xl"
                onClick={sequence}
            >
                <motion.span
                    className="absolute"
                    initial={{x: 0, opacity: 1, scale: 1}}
                    animate={klaudiaControls}
                >
                    KLAUDIA
                </motion.span>

                <motion.span
                    className="absolute"
                    initial={{opacity: 0}}
                    animate={isControl}
                >
                        IS
                </motion.span>

                <div
                    className="absolute w-[200px] left-1/2 -translate-x-2/3 text-left"
                >
                    <motion.span
                        initial={{opacity: 0, x: 190}}
                        animate={wordControl}
                        className="inline-block"
                        style={{
                            background: "var(--gradient-neon)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            backgroundClip: "text"
                        }}
                        >
                            {words[index]}
                    </motion.span>
                </div>
            </div>
            <div className="flex flex-col items-center gap-3 justify-center translate-y-18">
                <motion.p
                    className=" text-xl"
                    animate={descControl}
                >
                    Everything in your hand. Anytime, anywhere
                </motion.p>
                <motion.div
                    className="text-lg"
                    initial={{
                        opacity: 0,
                    }}
                    animate={descControl}
                >
                    <Button
                        onClick={goLogin}
                        className="w-fit pl-3 pr-3"
                        style={{background: "var(--gradient-neon)"}}
                    >
                        Sign in now
                    </Button>
                </motion.div>
            </div>
            <div className="absolute inset-x-0 -bottom-40 h-40 z-10
                bg-linear-to-b from-transparent via-black/70 to-(--secbackground-color)">
            </div>
        </SectionCard>
    )
}

export default Hero;