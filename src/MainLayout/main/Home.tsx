import Header from "../../components/layouts/Header";
import NavLink from "../../components/NavLink";
import Hero from "./Hero";
import Preview from "./Preview";
import PlanPreview from "./PlanPreview";
import FAQ from "./FAQ";
import Footer from "../../components/layouts/Footer";

function Home() {
    return(
        <>
            <Header>
                <NavLink href="#hero">HOME</NavLink>
                <NavLink href="#preview">FEATURES</NavLink>
                <NavLink href="#planpreview">PLANS</NavLink>
                <NavLink href="#faq">FAQ</NavLink>
            </Header>
            <Hero/>
            <Preview/>
            <PlanPreview/>
            <FAQ/>
            <Footer/>
        </>
    )
}

export default Home;