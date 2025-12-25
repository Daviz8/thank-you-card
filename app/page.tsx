"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function HomeLayout() {
  const [Phone, SetPhone] = useState("");
  const [error, setError] = useState("");

  const PhoneNumbers: string[] = ["07047452529", "08166651591" , "08067036840" , "09032137908",
"09038201234","07068554257", "09159602240","08121346724","07087151106","07026258192","08130504853","07063292489","08064040279","09032626372","08133959248","09034067143"
,"08186937289", "08037252665"];

  const router = useRouter();

  const handlePhoneSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!PhoneNumbers.includes(Phone)) {
      setError("Invalid phone Number");
      return;
    }
    setError("");
    localStorage.setItem("validatedPhone", Phone);
    console.log("Number Submitted:", Phone);
    router.push("/home");
  };

  return (
    <section className="min-h-screen bg-[#0f172a] flex items-center justify-center p-6">
  <div className="w-full max-w-md bg-[#1e293b] rounded-2xl shadow-2xl p-8 border border-slate-700/50">
    <div className="mb-8 text-center">
      <h1 className="text-2xl font-bold text-white mb-2 font-cal "> merci  </h1>
      <p className="text-slate-400 text-sm">Please enter your WhatsApp number to continue</p>
    </div>

    <form onSubmit={handlePhoneSubmit} className="space-y-6">
      <div className="space-y-2">
        <label className="block text-sm font-medium text-slate-300 ml-1">
          WhatsApp Number
        </label>
        <input
          type="tel"
          placeholder="e.g. 09035058521"
          value={Phone}
          onChange={(e) => SetPhone(e.target.value)}
          className="w-full h-[58px] bg-[#0f172a] border border-slate-600 rounded-xl px-5 text-white 
                     placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-[#32CD32] 
                     focus:border-transparent transition-all duration-200"
          required
        />
        {error && (
          <p className="text-red-400 text-xs italic mt-1 ml-1 animate-pulse">
            {error}
          </p>
        )}
      </div>

      <button className="w-full h-14 bg-[#32CD32] hover:bg-[#2eb82e] active:scale-[0.98] 
                        text-[#0f172a] font-bold rounded-xl transition-all duration-200 
                        shadow-lg shadow-[#32cd32]/20">
        Access Content
      </button>
    </form>
  </div>
</section>
  );
}
