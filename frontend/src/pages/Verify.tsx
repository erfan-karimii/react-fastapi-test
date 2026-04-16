import { useState } from "react";
import { env } from "../config/env";
import { useNavigate } from "react-router";
import { useAuth } from "../context/AuthContext";

export default function Verify() {
    const navigate = useNavigate()
    const { setUser } = useAuth() 
    const [phone, setPhone] = useState("");
    const [code, setCode] = useState("");

    const verify = async () => {
        const res = await fetch(`${env.apiBaseUrl}/auth/verify`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phone, code }),
        });

        const data = await res.json();
        setUser(data.access_token) 
        navigate("/",{replace:true})
    };

    return (
        <div>
            <input placeholder="Phone" onChange={(e) => setPhone(e.target.value)} />
            <input placeholder="OTP" onChange={(e) => setCode(e.target.value)} />
            <button onClick={verify}>Verify</button>
        </div>
    );
}