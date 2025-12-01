import SectionCard from "../components/cards/SectionCard";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

interface FormData {
    email: string;
    password: string;
}

function Login() {

    const tellThem = () => {
        alert("Username: Admin123, password: Admin")
    }

    const navigate = useNavigate();

    const[formData, setFormData] = useState<FormData>({email: '', password: ''});

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        if (formData.email === "Admin123" && formData.password === "Admin") {
            navigate("/home")
        } else {
            alert("Click forgot password")
        }
    }

    //  --gradient-neon: linear-gradient(135deg, [#56cfe1], #4ea8de, #6930c3);//

    return(
        <SectionCard className="bg-linear-to-br from-[#6C63FF] to-[#A95EFF]">
            <div className="flex flex-row w-[85%] h-[85%] rounded-3xl  shadow-[0_0_15px_rgba(0,0,0,0.3)] shadow-black/50 overflow-clip">
                <div className="flex flex-col justify-center items-center w-[60%] h-full bg-linear-to-br from-[#6C63FF] via-[#A95EFF] to-[#FF6F3C]">
                    <h2 className="text-7xl">KLAUDIA</h2>
                    <p className="text-sm">Everything in your hand. Anytime, anywhere.</p>
                </div>
                <div className="flex flex-col justify-center items-center w-[40%] h-full bg-[#edf2f4]">
                        <h2 className="text-4xl text-black">WELCOME</h2>
                        <form
                            className="flex flex-col justify-center items-center w-[60%] h-[50%] gap-5"
                            onSubmit={handleSubmit}
                            >
                                <input
                                className="flex justify-center items-center w-full h-[15%] bg-gray-300 rounded-3xl text-gray-600 p-3"
                                    type="text"
                                    id="email"
                                    name="email"
                                    placeholder="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                                <input
                                    className="flex justify-center items-center w-full h-[15%] bg-gray-300 rounded-3xl text-gray-600 p-3"
                                    type="password"
                                    id="password"
                                    name="password"
                                    placeholder="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                />
                                <div className="flex flex-row w-full justify-between"> 
                                    <div>
                                        <input
                                            className="translate-y-0.5"
                                            type="checkbox"
                                            name="remember"
                                        />
                                        <label className="text-black" htmlFor="remember">Remember me</label>
                                    </div>
                                    <button
                                        type="button"
                                        className="text-black"
                                        onClick={tellThem}
                                        >Forgot Password</button>
                                </div>
                            <button
                                className="flex justify-center items-center rounded-4xl w-[40%] h-[15%] text-white text-lg bg-linear-to-r from-[#A259FF] to-[#FF66C4]"
                                type="submit" 
                                onClick={handleSubmit}
                                >
                                    LOGIN
                                </button>
                        </form>
                    
                </div>
            </div>
        </SectionCard>
    )
}

export default Login;