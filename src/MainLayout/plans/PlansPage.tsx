import Card from "../../components/cards/Card";
import SectionCard from "../../components/cards/SectionCard";
import Checked from "../../components/CheckedList";
import Button from "../../components/Button";
import { useState } from "react";

function PlansPage() {
    const[isActive, setActive] = useState(0);
    const Plans = [
    {
        id: 1,
        name: "Free",
        desc: "Perfect for testing and personal use",
        price: 0,
        features: [
            "1 vCPU core",
            "512MB RAM",
            "10GB SSD Storage",
            "1TB Transfer",
            "Basic Support",
            "Community Access",
        ],
    },
    {
        id: 2,
        name: "Standard",
        desc: "Great for small and medium projects",
        price: 15,
        features: [
            "2 vCPU Core",
            "2GB RAM",
            "50GB SSD Storage",
            "3TB Transfer",
            "Priority Support",
            "Auto Backups",
            "DDoS Protection",
            "API Access",
        ],
    },
    {
        id: 3,
        name: "Premium",
        desc: "All-in-one tool for large projects",
        price: 49,
        features: [
            "4 vCPU core",
            "8GB RAM",
            "200GB SSD Storage",
            "8TB Transfer",
            "24/7 Support",
            "Advanced Monitoring",
            "Load Balancing",
            "Custom Domains",
            "Auto Backups",
            "DDoS Protection",
            "API Access",
            "Team collaboration",
        ],
    },
    {
        id: 4,
        name: "Enterprise",
        desc: "Tailored solutions for large organisations",
        price: 199,
        features: [
            "10 vCPU core",
            "32GB RAM",
            "1TB SSD Storage",
            "Unlimited Transfer",   
            "24/7 Dedicated Support",
            "Advanced Monitoring",
            "Auto Load Balancing",
            "SLA Guarantee",
            "Private Cloud",
            "Migration Assistance",
            "API Access",
            "Team collaboration",
        ],
    },
    ];

    return(
        <SectionCard className="h-auto mt-[10vh]">
            <h2 className="flex justify-center items-end text-4xl h-[10vh] text-(--main-text)">Choose Your plan</h2>
            <h2 className="flex justify-center items-center text-2xl h-[10vh] text-(--ghost-text)">Select the perfect plan for your needs. Upgrade or downgrade anytime.</h2>
            <div className="flex relative top-[25%] h-[90vh] w-full justify-around m-[2%]">
                {Plans.map((plan) => (
                    <Card
                    key={plan.id}
                    id={plan.id}
                    className={`w-[23%] h-full hover:scale-[1.03] hover:shadow-[0_0_15px_var(--glow-color)] ${
                        isActive === plan.id ? "ring-2 ring-blue-500" : "" 
                        }`}
                    >
                        <h2 className="text-2xl">{plan.name}</h2>
                        <p className="text-(--light-ghost)">{plan.desc}</p>
                        <div className="mt-[5%] mb-[5%]">
                            <span className="text-4xl">${plan.price}</span>
                            <span className="text-(--light-ghost)">/month</span>
                        </div>
                        <div>
                            {plan.features.map((f, i) =>
                                <Checked key={i}>{f}</Checked>
                            )}
                        </div>
                        <Button
                        onClick={() => setActive(plan.id)}
                        className="mt-auto"
                        style={{
                            background:
                                isActive === plan.id
                                ? "var(--gradient-neon)"
                                : "var(--background-color)"
                        }}>
                            {isActive === plan.id ? "Current Plan" : "Select Plan"}
                        </Button>
                    </Card>
                ))}
            </div>
        </SectionCard>
    )
}
export default PlansPage;