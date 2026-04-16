import { useState } from "react";
import { useNavigate } from "react-router";
import { env } from "../config/env";

export default function Login() {
  const navigate = useNavigate()
  const [phone, setPhone] = useState("");

  const sendOtp = async () => {
    await fetch(`${env.apiBaseUrl}/auth/send_otp`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ phone }),
    });
    navigate("/verify", { replace: true });
  };

  return (
    <div>
      <input
        className="bg-transparent border-black px-2 w-full email-box-input"
        placeholder="Phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <button onClick={sendOtp}>Send OTP</button>
    </div>
  );
}
