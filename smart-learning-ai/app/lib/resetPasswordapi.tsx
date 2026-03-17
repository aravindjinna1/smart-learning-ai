//   const API_BASE = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api";

//   export const authApi = {
//     forgotPassword: async (email: string) => {
//       const res = await fetch(`${API_BASE}/auth/forgot-password`, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ email }),
//       });
//       console.log("API_BASE:", API_BASE);
//       console.log("Calling:", `${API_BASE}/auth/forgot-password`);
//       const data = await res.json();
//       if (!res.ok) throw new Error(data.message || "Something went wrong.");
//       return data;
//     },

//     resetPassword: async (token: string, email: string, password: string) => {
//       const res = await fetch(`${API_BASE}/auth/reset-password`, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ token, email, password }),
//       });
//       const data = await res.json();
//       if (!res.ok) throw new Error(data.message || "Something went wrong.");
//       return data;
//     },
//   };
// // 


const API_BASE = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api";

export const authApi = {
  forgotPassword: async (email: string) => {
    console.log("Calling:", `${API_BASE}/auth/forgot-password`); // ✅ log before fetch

    let res: Response;
    try {
      res = await fetch(`${API_BASE}/auth/forgot-password`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
    } catch {
      throw new Error("Unable to connect. Please check your internet and try again.");
    }

    const contentType = res.headers.get("content-type");
    if (!contentType || !contentType.includes("application/json")) {
      throw new Error("Server error. Please try again later.");
    }

    const data = await res.json();
    if (!res.ok) throw new Error(data.message || "Something went wrong.");
    return data;
  },

  resetPassword: async (token: string, email: string, password: string) => {
    let res: Response;
    try {
      res = await fetch(`${API_BASE}/auth/reset-password`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token, email, password }),
      });
    } catch {
      throw new Error("Unable to connect. Please check your internet and try again.");
    }

    const contentType = res.headers.get("content-type");
    if (!contentType || !contentType.includes("application/json")) {
      throw new Error("Server error. Please try again later.");
    }

    const data = await res.json();
    if (!res.ok) throw new Error(data.message || "Something went wrong.");
    return data;
  },
};