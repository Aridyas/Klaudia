import Header from "../../components/layouts/Header";
import Footer from "../../components/layouts/Footer";
import PlansPage from "./PlansPage";
import NavLink from "../../components/NavLink";
import { useNavigate } from "react-router-dom";

function Plans() {
    const navigate = useNavigate()

    return(
        <>
            <Header>
                <NavLink onClick={() => {navigate("/#hero")}}>HOME</NavLink>
                <NavLink onClick={() => {navigate("/#preview")}}>FEATURES</NavLink>
                <NavLink onClick={() => {navigate("/#planpreview")}}>PLANS</NavLink>
                <NavLink onClick={() => {navigate("/#faq")}}>FAQ</NavLink>
            </Header>
            <PlansPage/>
            <Footer/>
        </>
    )
}

export default Plans;