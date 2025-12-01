import SectionCard from "../../components/cards/SectionCard";

function FAQ() {
    return(
        <SectionCard id="faq" className="justify-start h-auto bg-(--secbackground-color)">
            <h2 className="flex justify-center items-end text-4xl h-[10vh] text-(--main-text)">FREQUENTLY ASKED QUESTIONS</h2>
            <div className="flex flex-col items-start w-full pt-20 pb-20 space-y-6">
                <div>
                    <p className="text-xl font-semibold">Q: Do i need to install anything?</p>
                    <p className="text-xl">A: No, KLAUDIA works fully on browser. KLAUDIA's side did the install.</p>
                </div>
                <div>
                   <p className="text-xl font-semibold">Q: Will this fry my laptop?</p>
                   <p className="text-xl">A: No, KLAUDIA's entire virtual machine runs on our side. If your laptop could run YouTube, you're safe.</p>
                </div>
                <div>
                    <p className="text-xl font-semibold">Q: Is my VM isolated?</p>
                   <p className="text-xl">A: Yes, every VM is isolated to ensure security and privacy for every user.</p>
                </div>
                <div>
                    <p className="text-xl font-semibold">Q: How long do sessions last?</p>
                   <p className="text-xl">A: Except for free tier, sessions last forever. You decide when to end it.</p>
                </div>
            </div>
        </SectionCard>
    )
}

export default FAQ;