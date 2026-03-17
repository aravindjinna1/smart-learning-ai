// app/forgot-password/page.tsx
"use client";
import { useState } from "react";

export default function ForgotPassword() {

  const [email, setEmail] = useState("");

  const submit = async () => {
      try{
    await fetch("http://localhost:5000/api/auth/forgot-password", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });
    alert("Check your email");
    }catch (err) {
    console.error(err);
  }
  };
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-black text-black dark:text-white">
      <div className="w-96 space-y-4 bg-[#111827] w-full max-w-md p-8 rounded-2xl border border-gray-800  ">
        <h1 className="text-2xl font-bold text-blue-500">Forgot Password</h1>
        <input
          className="w-full border p-2 bg-[#0B0F19] border border-gray-700 rounded-lg px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <button
          className="w-full bg-blue-600 rounded-2xl cursor-pointer text-white py-2"
          onClick={submit}
        >
          Send Reset Link
        </button>
      </div>
    </div>
  );
}