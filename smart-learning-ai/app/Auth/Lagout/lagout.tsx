"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import { useEffect, useState } from "react";

const Lagout = () => {
  const router = useRouter();
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    const t = localStorage.getItem("token");
    if (t) setToken(t);
  }, []);

  const HandleLagout = () => {
    localStorage.removeItem("token");
    router.push("/Auth/Login");
  };

  return (
    <div>
      {token ? (
        <button
          onClick={HandleLagout}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 7,
            background: "rgba(255,255,255,0.05)",
            border: "1px solid rgba(255,255,255,0.1)",
            color: "#94a3b8",
            padding: "9px 20px",
            borderRadius: 999,
            fontSize: 13,
            fontWeight: 700,
            fontFamily: "inherit",
            letterSpacing: "0.03em",
            cursor: "pointer",
            transition: "all 0.2s",
          }}
          onMouseEnter={(e) => {
            const el = e.currentTarget as HTMLButtonElement;
            el.style.background = "rgba(239,68,68,0.1)";
            el.style.borderColor = "rgba(239,68,68,0.3)";
            el.style.color = "#fca5a5";
          }}
          onMouseLeave={(e) => {
            const el = e.currentTarget as HTMLButtonElement;
            el.style.background = "rgba(255,255,255,0.05)";
            el.style.borderColor = "rgba(255,255,255,0.1)";
            el.style.color = "#94a3b8";
          }}
        >
          <span style={{ fontSize: 11, opacity: 0.6 }}>⏻</span>
          Logout
        </button>
      ) : (
        <Link
          href="/Auth/Login"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 7,
            background: "linear-gradient(135deg, #4f46e5, #7c3aed)",
            color: "#fff",
            padding: "9px 22px",
            borderRadius: 999,
            fontSize: 13,
            fontWeight: 700,
            letterSpacing: "0.03em",
            textDecoration: "none",
            transition: "all 0.25s",
            boxShadow: "0 4px 16px rgba(99,102,241,0.25)",
          }}
          onMouseEnter={(e) => {
            const el = e.currentTarget as HTMLAnchorElement;
            el.style.boxShadow = "0 0 24px rgba(99,102,241,0.5)";
            el.style.transform = "translateY(-1px)";
          }}
          onMouseLeave={(e) => {
            const el = e.currentTarget as HTMLAnchorElement;
            el.style.boxShadow = "0 4px 16px rgba(99,102,241,0.25)";
            el.style.transform = "translateY(0)";
          }}
        >
          Sign In →
        </Link>
      )}
    </div>
  );
};

export default Lagout;