"use client";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useEffect, useState } from "react";

const Lagout = () => {
  const router = useRouter();
   
  const [token, setToken] = useState();

  useEffect(() => {
    const token = localStorage.getItem("token");
    setToken(token)
  });

  const HandleLagout = () => {
    localStorage.removeItem("token");

    // window.location.href = "/Auth/Login"

    router.push("/Auth/Login");
  };

  return (
    <div>
      {token ? (
        <button
          onClick={HandleLagout}
          className="text-black bg-[#111827] text-white  rounded-[10px] px-10 py-2 border border-gray-800 hover:border-indigo-500"
        >
          Lagout
        </button>
      ) : (
        <Link
          href="/Auth/Login"
          className="text-black bg-[#111827] text-white  rounded-[10px] px-10 py-2 border border-gray-800 hover:border-indigo-500"
        >
          Login
        </Link>
      )}
    </div>
  );
};

export default Lagout;
