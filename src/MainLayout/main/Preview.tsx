import SectionCard from "../../components/cards/SectionCard";
import { ArrowBigRight, MousePointerClick, Cloud, Cpu, MonitorSmartphone } from "lucide-react";

function Preview() {
    return (
        <SectionCard id="preview" className="justify-start h-auto bg-(--secbackground-color)">

            <h2 className="flex justify-center items-end text-3xl h-[9vh] text-(--main-text)">
                HOW DOES KLAUDIA WORK?
            </h2>

            <div className="mt-4">
                <h2 className="flex justify-center text-center text-2xl text-(--ghost-text)">
                    KLAUDIA offered browser-based virtual machine to let you have a virtual computer anytime and anywhere.
                </h2>
                <h2 className="flex justify-center text-center text-2xl mt-0 text-(--ghost-text)">
                    With optimised system, KLAUDIA minimalises latency and offers high-end performance experience.
                </h2>
            </div>

            <div className="flex flex-col justify-center items-center rounded-3xl gap-4 p-9 px-20 m-9 bg-(--secondary-color)">

                <div className="flex flex-row justify-center items-center gap-4">
                    <span className="flex justify-center items-center w-45 h-45 rounded-xl bg-(--background-color)">
                        <MousePointerClick className="h-27 w-27" />
                    </span>

                    <ArrowBigRight className="w-18 h-18" />

                    <span className="flex justify-center items-center w-45 h-45 rounded-xl bg-(--background-color)">
                        <Cloud className="h-27 w-27" />
                    </span>

                    <ArrowBigRight className="w-18 h-18" />

                    <span className="flex justify-center items-center w-45 h-45 rounded-xl bg-(--background-color)">
                        <Cpu className="h-27 w-27" />
                    </span>

                    <ArrowBigRight className="w-18 h-18" />

                    <span className="flex justify-center items-center w-45 h-45 rounded-xl bg-(--background-color)">
                        <MonitorSmartphone className="h-27 w-27" />
                    </span>
                </div>

                <div className="flex flex-row text-center gap-28">
                    <h2 className="w-45">Initiate KLAUDIA's VM through any browser</h2>
                    <h2 className="w-45">Virtual Machine runs on KLAUDIA's server</h2>
                    <h2 className="w-45">KLAUDIA uses high-end components for every VM</h2>
                    <h2 className="w-45">Enjoy high-end performance on any device</h2>
                </div>

            </div>
        </SectionCard>
    );
}

export default Preview;
