import { useRef, useState, useEffect } from "react";
import SectionCard from "../components/cards/SectionCard";
import { Cpu } from "lucide-react";
import { MemoryStick } from "lucide-react";
import { Database } from "lucide-react";
import { Headset } from "lucide-react";
import { HardDriveDownload } from "lucide-react";
import { HardDriveUpload } from "lucide-react";
import { Play } from "lucide-react";
import Checked from "../components/CheckedList";
import BackgroundShapes from "./main/BackgroundShapes";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

function TestGround() {
    const[animate, setAnimate] = useState(false);
    const[isSelected, setIsSelected] = useState(3)
    const btnRefs = useRef<HTMLButtonElement[]>([]);
    const [highlight, setHighlight] = useState<{ width: number; x: number }>({
        width: 0,
        x: 0,
    });

    const moveHighlight = (index: number) => {
        const btn = btnRefs.current[index];
        if (!btn) return;

        const { offsetWidth, offsetLeft } = btn;

        setHighlight({
            width: offsetWidth,
            x: offsetLeft,
        });
    };

    useEffect(() => {
        moveHighlight(2);

        const t = setTimeout(() => {
            setAnimate(true);
        }, 10);

        return() => clearTimeout(t);

    },[]);

    const labels = [
        {
            id: 1,
            name: "FREE",
            price: 0,
            desc: "Perfect for testing and personal use",
            cpu: "1 vCPU Core",
            ram: "512MB RAM",
            storage: "10GB SSD Storage",
            support: "Basic Support",
            download: "Up to 25 Mbps Download Speed",
            upload: "Up to 10 Mbps Upload Speed",
            features: [
                "1TB Transfer",
                "Community Access",
                "Status Page Access"
            ]
        },
        {
            id: 2,
            name: "STANDARD",
            price: 15,
            desc: "Great for small and medium projects",
            cpu: "2 vCPU Core",
            ram: "2GB RAM",
            storage: "50GB SSD Storage",
            support: "Priority Support",
            download: "Up to 100 Mbps Download Speed",
            upload: "Up to 50 Mbps Upload Speed",
            features: [
                "3TB Transfer",
                "Auto Backups",
                "DDoS Protection",
                "API Access",
                "Basic Monitoring"
            ]
        },
        {
            id: 3,
            name: "PREMIUM",
            price: 49,
            desc: "All-in-one tool for large projects",
            cpu: "4 vCPU Core",
            ram: "8GB RAM",
            storage: "200GB SSD Storage",
            support: "24/7 Support",
            download: "Up to 500 Mbps Download Speed",
            upload: "Up to 200 Mbps Upload Speed",
            features: [
                "8TB Transfer",
                "Advanced Monitoring",
                "Load Balancing",
                "Custom Domains",
                "Auto Backups",
                "DDoS Protection",
                "API Access",
                "Team Collaboration"
            ]
        },
        {
            id: 4,
            name: "ENTERPRISE",
            price: 199,
            desc: "Tailored solutions for large organisations",
            cpu: "10 vCPU Core",
            ram: "32GB RAM",
            storage: "1TB SSD Storage",
            support: "24/7 Dedicated Support",
            download: "Up to 2 Gbps Download Speed",
            upload: "Up to 2 Gbps Upload Speed",
            features: [
                "Unlimited Transfer",
                "Advanced Monitoring",
                "Auto Load Balancing",
                "SLA Guarantee",
                "Private Cloud",
                "Migration Assistance",
                "API Access",
                "Team Collaboration"
            ]
        },
    ];

    const navigate = useNavigate();

    const goPlans = () => {
        navigate("/plans")
    }

    return (
        <SectionCard className="relative justify-start">
            <div className="absolute h-full w-full"> 
                <BackgroundShapes plan={isSelected}/>
            </div>
            <div
                className="relative border-3 rounded-full border-(--secondary-color) px-2 py-1 m-5"
            >
                {/* HIGHLIGHT */}
                <div
                    className={`absolute top-1/2 -translate-y-1/2 h-[80%] bg-(--filler-color) rounded-full
                        ${animate ? "transition-all duration-300" : ""}`}
                    style={{
                        width: highlight.width,
                        transform: `translate(${highlight.x}px)`,
                    }}
                />

                {/* BUTTONS */}
                <div className="flex flex-row gap-5 relative z-10">
                    {labels.map((label, i) => (
                        <button
                            key={i}
                            ref={(el) => {
                                if (el) btnRefs.current[i] = el;
                            }}
                            onClick={() => {
                                moveHighlight(i);
                                setIsSelected(label.id)
                            }}
                            className="px-7 py-3 rounded-full cursor-pointer"
                        >
                            {label.name}
                        </button>
                    ))}
                </div>
            </div>
            <div className="flex flex-col justify-center items-center mb-5">
                <h2
                    className="text-5xl"
                >{labels[isSelected - 1].name}
                </h2>
                <p className="text-xl text-(--light-ghost)">
                    {labels[isSelected - 1].desc}
                </p>
                <div>
                    <span className="text-4xl">${labels[isSelected - 1].price}</span>
                    <span className="text-(--light-ghost)">/month</span>
                </div>
            </div>
            <div className="flex flex-row gap-5">
                <div className="flex flex-col justify-between items-start w-100 h-100 flex-wrap px-10 py-5 rounded-2xl bg-(--secondary-color) shadow-sm shadow-cyan-500">
                    <h3 className="text-3xl mb-3 font-semibold">Specifications</h3>
                    <span className=" flex flex-row my-2 gap-2">
                        <Cpu />
                        <span>{labels[isSelected - 1].cpu}</span>
                    </span>

                    <span className=" flex flex-row my-2 gap-2">
                        <MemoryStick />
                        <span>{labels[isSelected - 1].ram}</span>
                    </span>

                    <span className=" flex flex-row my-2 gap-2">
                        <Database />
                        <span>{labels[isSelected - 1].storage}</span>
                    </span>

                    <span className=" flex flex-row my-2 gap-2">
                        <Headset />
                        <span>{labels[isSelected - 1].support}</span>
                    </span>

                    <span className=" flex flex-row my-2 gap-2">
                        <HardDriveDownload />
                        <span>{labels[isSelected - 1].download}</span>
                    </span>

                    <span className=" flex flex-row my-2 gap-2">
                        <HardDriveUpload />
                        <span>{labels[isSelected - 1].upload}</span>
                    </span>
                </div>
                <div className="flex flex-col items-start w-100 flex-wrap px-10 py-5 rounded-2xl bg-(--secondary-color) shadow-sm shadow-cyan-500">
                    <h3 className="text-3xl mb-3 font-semibold">Features</h3>
                    {labels[isSelected - 1].features.map((label) => (
                        <Checked className=" flex flex-row gap-2">{label}</Checked>
                    ))}
                </div>
            </div>
            <div className="flex flex-col items-end w-205 flex-wrap my-4 relative z-10">
                    <Button
                        className="bg-(--secondary-color) w-50"
                        onClick={goPlans}
                    >
                        <span>LEARN MORE</span><span><Play className="ml-1 w-4 h-4"/></span>
                    </Button>
            </div>
        </SectionCard>
    );
}

export default TestGround;