import SectionCard from "../cards/SectionCard";

function Footer() {
    return (
        <SectionCard className="flex-row justify-between h-fit p-20">
            <h2
                className="text-4xl place-self-start font-[h2font]"
                style={{
                    background: "var(--gradient-neon)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text"
                }}
            >
                KLAUDIA
            </h2>

            <div className="flex flex-row gap-20">
                
                <div className="space-y-6">
                    <p className="font-semibold">ADDRESS</p>
                    <div>
                        <p className="font-semibold">WHITESTERLING OFFICE</p>
                        <p>VOLENTR 4<br/>9950 ROSWELT<br/>AGARTHA</p>
                    </div>
                    <div>
                        <p className="font-semibold">POSEIDON OFFICE</p>
                        <p>PACIFIC SEA<br/>3233 NEPTUNE HALL<br/>ATLANTIS</p>
                    </div>
                </div>

                <div className="flex flex-col space-y-6">
                    <p className="font-semibold">SOCIALS</p>
                    <div className="flex flex-col space-y-3">
                        <a href="#">TWITTER</a>
                        <a href="#">INSTAGRAM</a>
                        <a href="#">FACEBOOK</a>
                    </div>
                </div>

                <div className="flex flex-col space-y-6">
                    <p className="font-semibold">CONTACTS</p>
                    <div className="flex flex-col space-y-3">
                        <a href="mailto:HELLO@KLAUDIA.HELP">HELLO@KLAUDIA.HELP</a>
                        <a href="#">+62 88 0000 1111</a>
                    </div>
                </div>

                <div className="flex flex-col space-y-6">
                    <p className="font-semibold">PAGES</p>
                    <div className="flex flex-col space-y-3">
                        <a href="#">HOME</a>
                        <a href="#">ABOUT</a>
                        <a href="#">PLANS</a>
                        <a href="#">FAQ</a>
                    </div>
                </div>

            </div>
        </SectionCard>
    );
}

export default Footer;
