import { Routes, Route } from "react-router-dom";
import Home from "./MainLayout/main/Home";
import Plans from "./MainLayout/plans/Plans";
import ScrollToTop from "./components/ScrollToTop";
import TestGround from "./MainLayout/Testground";
import TempRouter from "./MainLayout/TempRouter";
import Login from "./LoginPage/Login";

function App() {

  return(
    <>
      <ScrollToTop/>
      <Routes>
        <Route path="/home" element={<Home/>} />
        <Route path="/plans" element={<Plans/>} />
        <Route path="/login" element={<Login/>} />
      </Routes>
    </>
  );
}

export default App;