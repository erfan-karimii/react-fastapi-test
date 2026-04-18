import { useState } from "react";
import { env } from "../config/env";
import { useNavigate } from "react-router";

export default function Login() {
  const navigate = useNavigate() 
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");
  const iranPhoneRegex = /^09\d{9}$/;

  const sendOtp = async () => {
    if (!iranPhoneRegex.test(phone)) {
      setError("شماره موبایل معتبر نیست");
    } else {
      setError("");
      await fetch(`${env.apiBaseUrl}/auth/send_otp`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phone }),
      });
      navigate(`/verify?phoneNumber=${phone}`,{replace:true})
    }
  };

  return (
  <section className="relative flex items-center justify-center min-h-screen w-full">
    <div className="pointer-events-none absolute inset-0 flex w-screen items-center justify-center overflow-hidden 
  [mask-image:radial-gradient(circle_at_center,rgba(255,255,255,1)_0%,rgba(255,255,255,0)_85%)]">

      <svg
        className="absolute left-0 top-0 h-full w-full stroke-black/10 stroke-[2] 
    [mask-image:radial-gradient(circle_at_center,rgba(255,255,255,1)_20%,rgba(255,255,255,0)_95%)] dark:stroke-white/10">
        <rect width="100%" height="100%" strokeWidth="0" fill="url(#grid-pattern)"></rect>
        <defs>
          <pattern id="grid-pattern" viewBox="0 0 64 64" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M64 0H0V64" fill="none"></path>
          </pattern>
        </defs>
      </svg>
    </div>

    <div className="relative w-[27rem] mx-5 flex flex-col justify-center py-12 px-4 md:px-8 bg-white dark:bg-gray-800 shadow-md rounded-xl">
      <div className="flex items-center justify-center">
        <button className="toggle-theme absolute left-2 top-2 flex-center p-1.5 rounded-full text-gray-300">
          <svg className="inline-block dark:hidden size-5">
            <use href="#moon" />
          </svg>
          <svg className="hidden dark:inline size-5">
            <use href="#sun" />
          </svg>
        </button>
        <a className="flex flex-col text-center">
          <span className="font-MorabbaMedium text-4xl flex items-center">
            <span className="text-blue-500">کارین</span> شاپ
          </span>
        </a>
      </div>
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <p className="mb-2 text-gray-800 dark:text-gray-100 font-DanaMedium text-lg">ورود | ثبت‌نام </p>
        <form className="space-y-5" onSubmit={(e)=>e.preventDefault()}>
          <div>
            <label className="block text-sm/6 font-medium text-gray-500 dark:text-gray-300">لطفا شماره موبایل یا
              ایمیل خود را وارد کنید </label>
            <div className="mt-3">
              <input type="text" name="phoneNumber" required value={phone} onChange={(e) => setPhone(e.target.value)}
                className="block w-full p-3 text-base outline dark:outline-none outline-1 -outline-offset-1 placeholder:text-gray-400  sm:text-sm/6 transition-all
                text-gray-800 dark:text-gray-100 dark:bg-gray-900 bg-slate-100 border border-transparent hover:border-slate-200 appearance-none rounded-md outline-none focus:bg-white focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 dark:focus:ring-blue-400
                "/>
            </div>
            {error &&
             <p className="text-error">{error}</p>
            }
          </div>
          <div>
            <button type="submit" className="submit-btn" onClick={sendOtp}>تایید شماره تلفن</button>
          </div>
        </form>
        <p className="mt-8 text-center text-sm/6 text-gray-500 dark:text-gray-300">
          ورود شما به معنای پذیرش <span className="text-blue-400">قوانین سایت</span> است
        </p>
      </div>
    </div>
  </section>

  );
}
