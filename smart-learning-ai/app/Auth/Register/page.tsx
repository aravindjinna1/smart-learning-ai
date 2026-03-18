"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import InputField from "../InputField";
import {
  registerSchema,
  RegisterFormData,
} from "./registerSchema";

export default function RegisterPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = async (data: RegisterFormData) => {
    console.log("Register Data:", data);

    try {
      const res = await fetch("http://localhost:5000/api/app/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          FullName: data.name,
          Email: data.email,
          Password: data.password,
        }),
      });

      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.message || "Signup failed");
      }

      const result = await res.json();
      console.log(result);

      // later → redirect to login
      // router.push("/login");
      alert("Signup sucessfull")
    } catch (error) {
      console.error("Signup failed", error);
    }
  };

  return (
    <div className="min-h-screen bg-[#0B0F19] flex items-center justify-center px-4">
      <div className="bg-[#111827] w-full max-w-md p-8 rounded-2xl border border-gray-800">

        {/* Branding */}
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-white">
            Smart Learning AI
          </h1>
          <p className="text-gray-400 mt-2">
            Create your account to start learning smarter
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">

          <InputField
            label="Full Name"
            type="text"
            placeholder="Your name"
            register={register("name")}
            error={errors.name?.message}
          />

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

          <InputField
            label="Confirm Password"
            type="password"
            placeholder="••••••••"
            register={register("confirmPassword")}
            error={errors.confirmPassword?.message}
          />

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-indigo-600 hover:bg-indigo-500 disabled:opacity-60 text-white py-2 rounded-lg font-medium transition"
          >
            {isSubmitting ? "Creating account..." : "Sign Up"}
          </button>
        </form>

        {/* Footer */}
        <p className="text-center text-gray-400 text-sm mt-6">
          Already have an account?{" "}
          <a href="/Auth/Login" className="text-indigo-400 hover:underline">
            Sign in
          </a>
        </p>

      </div>
    </div>
  );
}
