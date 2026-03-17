// app/reset-password/page.tsx
"use client";
import { useSearchParams } from "next/navigation";
import { useState } from "react";

export default function ResetPassword() {
  const params = useSearchParams();
  const token = params.get("token");
  const email = params.get("email");
  const [password, setPassword] = useState("");

  const submit = async () => {
    await fetch("http://localhost:5000/api/auth/reset-password", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token, email, password }),
    });
    alert("Password updated");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-black">
      <div className="w-96 space-y-4 bg-[#111827] w-full max-w-md p-8 rounded-2xl border border-gray-800  ">
        <h1 className="text-2xl font-bold text-blue-500">Reset Password</h1>
        <input
          type="password"
          className="w-full border text-white  p-2 bg-[#0B0F19] border border-gray-700 rounded-lg px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500"
          placeholder="New password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className="w-full bg-blue-600 rounded-2xl text-white py-2"
          onClick={submit}
        >
          Reset Password
        </button>
      </div>
    </div>
  );
}