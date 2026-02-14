"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import InputField from "../InputField";
import { loginSchema, LoginFormData } from "./loginSchema";

export default function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginFormData) => {
    console.log("Login Data:", data);
    try {
      // later: API call → auth → redirect to /dashboard

      const res = await fetch("http://localhost:5000/api/app/signin", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          Email: data.email,
          Password: data.password,
        }),
      });

      if (!res.ok) {
        throw new Error("Signin failed");
      }

      const result = await res.json();
      console.log(result);
      alert("Signin sucessfull");
    } catch (error) {
      console.error("Signin failed", error);
    }
  };

  return (
    <div className="min-h-screen bg-[#0B0F19] flex items-center justify-center px-4">
      <div className="bg-[#111827] w-full max-w-md p-8 rounded-2xl border border-gray-800">
        {/* Branding */}
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-white">Smart Learning AI</h1>
          <p className="text-gray-400 mt-2">
            Learn smarter. Build your future.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <InputField
            label="Email"
            type="email"
            placeholder="you@example.com"
            register={register("email")}
            error={errors.email?.message}
          />

          <InputField
            label="Password"
            type="password"
            placeholder="••••••••"
            register={register("password")}
            error={errors.password?.message}
          />

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-indigo-600 hover:bg-indigo-500 disabled:opacity-60 text-white py-2 rounded-lg font-medium transition"
          >
            {isSubmitting ? "Signing in..." : "Sign In"}
          </button>
        </form>

        {/* Footer */}
        <p className="text-center text-gray-400 text-sm mt-6">
          Don’t have an account?{" "}
          <Link
            href="/Auth/Register"
            className="text-indigo-400 hover:underline"
          >
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}
