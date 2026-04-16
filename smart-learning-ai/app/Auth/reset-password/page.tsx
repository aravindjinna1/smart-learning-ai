// // app/reset-password/page.tsx
// "use client";

// import { useSearchParams } from "next/navigation";
// import { useState } from "react";
// import Link from "next/link";

// export default function ResetPassword() {
//   const params = useSearchParams();
//   const token = params.get("token");
//   const email = params.get("email");

//   const [password, setPassword] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [done, setDone] = useState(false);

//   const submit = async () => {
//     if (!password || !token || !email) return;

//     setLoading(true);
//     try {
//       await fetch("http://localhost:5000/api/auth/reset-password", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ token, email, password }),
//       });
//       setDone(true);
//     } catch (err) {
//       console.error(err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <>
//       <style>{`
//         .auth-root * { box-sizing: border-box; }
//         .dot-bg {
//           background-image: radial-gradient(rgba(99,102,241,0.18) 1px, transparent 1px);
//           background-size: 28px 28px;
//         }
//         .auth-card {
//           background: rgba(255,255,255,0.04);
//           border: 1px solid rgba(255,255,255,0.09);
//           border-radius: 24px;
//           padding: 40px 36px;
//           width: 100%;
//           max-width: 420px;
//           position: relative;
//           overflow: hidden;
//         }
//         .auth-card::before {
//           content: '';
//           position: absolute; top: 0; left: 0; right: 0; height: 1px;
//           background: linear-gradient(90deg, transparent, #22d3ee, #6366f1, transparent);
//           opacity: 0.6;
//         }
//         .auth-input {
//           background: rgba(255,255,255,0.04);
//           border: 1px solid rgba(255,255,255,0.09);
//           border-radius: 12px;
//           padding: 12px 16px;
//           color: #f1f5f9;
//           font-size: 14px;
//           width: 100%;
//           outline: none;
//         }
//         .auth-input:focus {
//           border-color: rgba(99,102,241,0.55);
//           box-shadow: 0 0 0 3px rgba(99,102,241,0.12);
//         }
//         .auth-btn {
//           width: 100%;
//           padding: 13px;
//           border-radius: 13px;
//           background: linear-gradient(135deg, #4f46e5, #7c3aed);
//           color: #fff;
//           font-weight: 700;
//           font-size: 14px;
//           border: none;
//           cursor: pointer;
//         }
//         .auth-btn:disabled {
//           opacity: 0.5;
//           cursor: not-allowed;
//         }
//       `}</style>

//       <div
//         className="auth-root dot-bg"
//         style={{
//           minHeight: "100vh",
//           background: "#090721",
//           color: "#f1f5f9",
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "center",
//           padding: "24px 16px",
//           position: "relative",
//           overflow: "hidden",
//         }}
//       >
//         {/* Orbs */}
//         <div aria-hidden style={{
//           position: "absolute", top: -120, right: -120,
//           width: 460, height: 460, borderRadius: "50%",
//           background: "radial-gradient(circle, #22d3ee 0%, #0891b2 50%, transparent 70%)",
//           opacity: 0.15, filter: "blur(70px)",
//         }} />
//         <div aria-hidden style={{
//           position: "absolute", bottom: -80, left: -80,
//           width: 380, height: 380, borderRadius: "50%",
//           background: "radial-gradient(circle, #6366f1 0%, #4f46e5 50%, transparent 70%)",
//           opacity: 0.12, filter: "blur(60px)",
//         }} />

//         <div className="auth-card">
//           {done ? (
//             /* Success */
//             <div style={{ textAlign: "center", padding: "16px 0" }}>
//               <div style={{
//                 width: 64, height: 64, borderRadius: "50%",
//                 background: "rgba(99,102,241,0.15)",
//                 display: "flex", alignItems: "center", justifyContent: "center",
//                 fontSize: 28, margin: "0 auto 20px",
//               }}>
//                 ✓
//               </div>
//               <h2 style={{ fontSize: 22, fontWeight: 800 }}>Password Updated</h2>
//               <p style={{ fontSize: 13, color: "#64748b", margin: "12px 0 24px" }}>
//                 Your password has been reset successfully.
//               </p>
//               <Link href="/Auth/Login" style={{ color: "#818cf8", fontWeight: 700 }}>
//                 → Go to Sign In
//               </Link>
//             </div>
//           ) : (
//             /* Form */
//             <>
//               <div style={{ textAlign: "center", marginBottom: 32 }}>
//                 <h1 style={{ fontSize: 26, fontWeight: 800 }}>Set New Password</h1>
//                 <p style={{ fontSize: 13, color: "#64748b" }}>
//                   Enter a new password for <b>{email}</b>
//                 </p>
//               </div>

//               <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
//                 <input
//                   type="password"
//                   className="auth-input"
//                   placeholder="New password"
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                   onKeyDown={(e) => e.key === "Enter" && submit()}
//                 />

//                 <button
//                   className="auth-btn"
//                   onClick={submit}
//                   disabled={loading || !password}
//                 >
//                   {loading ? "Updating…" : "Reset Password →"}
//                 </button>
//               </div>
//             </>
//           )}
//         </div>
//       </div>
//     </>
//   );
// }












// app/Auth/reset-password/page.tsx
"use client";

import { useSearchParams } from "next/navigation";
import { useState, Suspense } from "react";
import Link from "next/link";

function ResetPasswordInner() {
  const params = useSearchParams();
  const token = params.get("token");
  const email = params.get("email");

  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  const submit = async () => {
    if (!password || !token || !email) return;

    setLoading(true);
    try {
      await fetch("http://localhost:5000/api/auth/reset-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token, email, password }),
      });
      setDone(true);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <style>{`
        .auth-root * { box-sizing: border-box; }
        .dot-bg {
          background-image: radial-gradient(rgba(99,102,241,0.18) 1px, transparent 1px);
          background-size: 28px 28px;
        }
        .auth-card {
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.09);
          border-radius: 24px;
          padding: 40px 36px;
          width: 100%;
          max-width: 420px;
          position: relative;
          overflow: hidden;
        }
        .auth-card::before {
          content: '';
          position: absolute; top: 0; left: 0; right: 0; height: 1px;
          background: linear-gradient(90deg, transparent, #22d3ee, #6366f1, transparent);
          opacity: 0.6;
        }
        .auth-input {
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.09);
          border-radius: 12px;
          padding: 12px 16px;
          color: #f1f5f9;
          font-size: 14px;
          width: 100%;
          outline: none;
        }
        .auth-input:focus {
          border-color: rgba(99,102,241,0.55);
          box-shadow: 0 0 0 3px rgba(99,102,241,0.12);
        }
        .auth-btn {
          width: 100%;
          padding: 13px;
          border-radius: 13px;
          background: linear-gradient(135deg, #4f46e5, #7c3aed);
          color: #fff;
          font-weight: 700;
          font-size: 14px;
          border: none;
          cursor: pointer;
        }
        .auth-btn:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }
      `}</style>

      <div
        className="auth-root dot-bg"
        style={{
          minHeight: "100vh",
          background: "#090721",
          color: "#f1f5f9",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "24px 16px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Orbs */}
        <div aria-hidden style={{
          position: "absolute", top: -120, right: -120,
          width: 460, height: 460, borderRadius: "50%",
          background: "radial-gradient(circle, #22d3ee 0%, #0891b2 50%, transparent 70%)",
          opacity: 0.15, filter: "blur(70px)",
        }} />
        <div aria-hidden style={{
          position: "absolute", bottom: -80, left: -80,
          width: 380, height: 380, borderRadius: "50%",
          background: "radial-gradient(circle, #6366f1 0%, #4f46e5 50%, transparent 70%)",
          opacity: 0.12, filter: "blur(60px)",
        }} />

        <div className="auth-card">
          {done ? (
            <div style={{ textAlign: "center", padding: "16px 0" }}>
              <div style={{
                width: 64, height: 64, borderRadius: "50%",
                background: "rgba(99,102,241,0.15)",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 28, margin: "0 auto 20px",
              }}>
                ✓
              </div>
              <h2 style={{ fontSize: 22, fontWeight: 800 }}>Password Updated</h2>
              <p style={{ fontSize: 13, color: "#64748b", margin: "12px 0 24px" }}>
                Your password has been reset successfully.
              </p>
              <Link href="/Auth/Login" style={{ color: "#818cf8", fontWeight: 700 }}>
                → Go to Sign In
              </Link>
            </div>
          ) : (
            <>
              <div style={{ textAlign: "center", marginBottom: 32 }}>
                <h1 style={{ fontSize: 26, fontWeight: 800 }}>Set New Password</h1>
                <p style={{ fontSize: 13, color: "#64748b" }}>
                  Enter a new password for <b>{email}</b>
                </p>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                <input
                  type="password"
                  className="auth-input"
                  placeholder="New password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && submit()}
                />

                <button
                  className="auth-btn"
                  onClick={submit}
                  disabled={loading || !password}
                >
                  {loading ? "Updating…" : "Reset Password →"}
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default function ResetPassword() {
  return (
    <Suspense fallback={
      <div style={{
        minHeight: "100vh",
        background: "#090721",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#f1f5f9",
        fontSize: 14,
      }}>
        Loading…
      </div>
    }>
      <ResetPasswordInner />
    </Suspense>
  );
}




