// "use client";
// import hero from '../assets/finall.png'
// import Image from "next/image";


// // ── Icon SVGs ─────────────────────────────────────────────────────────────────

// const AIIcon = () => (
//   <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
//     <text
//       x="18" y="27"
//       textAnchor="middle"
//       fontSize="24"
//       fontWeight="800"
//       fill="white"
//       fontFamily="Arial, sans-serif"
//     >
//       AI
//     </text>
//   </svg>
// );

// const GraduationIcon = () => (
//   <svg viewBox="0 0 40 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-9 h-8">
//     <polygon points="20,6 36,14 20,22 4,14" fill="#1e3a6e" />
//     <path d="M10 17 L10 26 Q20 31 30 26 L30 17" fill="#1e3a6e" opacity="0.85" />
//     <line x1="36" y1="14" x2="36" y2="23" stroke="#1e3a6e" strokeWidth="2.5" strokeLinecap="round" />
//     <circle cx="36" cy="25" r="2" fill="#1e3a6e" />
//   </svg>
// );

// const VideoIcon = () => (
//   <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
//     <polygon points="12,9 12,27 28,18" fill="white" />
//   </svg>
// );

// const ChartIcon = () => (
//   <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
//     <rect x="4"  y="22" width="5"  height="9"  rx="1.5" fill="#2563eb" />
//     <rect x="12" y="16" width="5"  height="15" rx="1.5" fill="#2563eb" />
//     <rect x="20" y="10" width="5"  height="21" rx="1.5" fill="#2563eb" />
//     <path d="M5 20 L14 13 L22 8 L30 4" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" fill="none" />
//     <circle cx="30" cy="4" r="2.5" fill="#2563eb" />
//   </svg>
// );

// const ChecklistIcon = () => (
//   <svg viewBox="0 0 46 38" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-8">
//     <polyline points="3,10  7,14 13,7"   stroke="#2563eb" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
//     <line x1="18" y1="10" x2="43" y2="10" stroke="#2563eb" strokeWidth="2.8" strokeLinecap="round" />
//     <polyline points="3,20  7,24 13,17"  stroke="#2563eb" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
//     <line x1="18" y1="20" x2="43" y2="20" stroke="#2563eb" strokeWidth="2.8" strokeLinecap="round" />
//     <polyline points="3,30  7,34 13,27"  stroke="#2563eb" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
//     <line x1="18" y1="30" x2="38" y2="30" stroke="#2563eb" strokeWidth="2.8" strokeLinecap="round" />
//   </svg>
// );

// const ChatIcon = () => (
//   <svg viewBox="0 0 46 34" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-8">
//     <line x1="5"  y1="9"  x2="41" y2="9"  stroke="#2563eb" strokeWidth="2.8" strokeLinecap="round" />
//     <line x1="5"  y1="18" x2="41" y2="18" stroke="#2563eb" strokeWidth="2.8" strokeLinecap="round" />
//     <line x1="5"  y1="27" x2="30" y2="27" stroke="#2563eb" strokeWidth="2.8" strokeLinecap="round" />
//   </svg>
// );

// // ── Icon card data ─────────────────────────────────────────────────────────────
// //   top / left are percentages of the 560×560 container

// interface IconCard {
//   id: number;
//   label: string;
//   icon: React.ReactNode;
//   bg: string;
//   size: number;        // px
//   borderRadius: number; // px
//   top: number;         // %
//   left: number;        // %
//   delay: number;       // float animation delay s
// }

// const ICON_CARDS: IconCard[] = [
//   {
//     id: 1, label: "AI",
//     icon: <AIIcon />,
//     bg: "#2563eb",
//     size: 72, borderRadius: 18,
//     top: 7,  left: 20,
//     delay: 0,
//   },
//   {
//     id: 2, label: "Graduation cap",
//     icon: <GraduationIcon />,
//     bg: "#bfdbfe",
//     size: 72, borderRadius: 18,
//     top: 5,  left: 56,
//     delay: 0.5,
//   },
//   {
//     id: 3, label: "Video play",
//     icon: <VideoIcon />,
//     bg: "#2563eb",
//     size: 78, borderRadius: 18,
//     top: 28, left: 4,
//     delay: 1.0,
//   },
//   {
//     id: 4, label: "Chart",
//     icon: <ChartIcon />,
//     bg: "#bfdbfe",
//     size: 62, borderRadius: 16,
//     top: 51, left: 10,
//     delay: 1.5,
//   },
//   {
//     id: 5, label: "Checklist",
//     icon: <ChecklistIcon />,
//     bg: "#bfdbfe",
//     size: 90, borderRadius: 22,
//     top: 27, left: 73,
//     delay: 0.7,
//   },
//   {
//     id: 6, label: "Chat",
//     icon: <ChatIcon />,
//     bg: "#bfdbfe",
//     size: 78, borderRadius: 20,
//     top: 54, left: 72,
//     delay: 1.2,
//   },
// ];

// // ── Main component ────────────────────────────────────────────────────────────

// export default function HeroCharacter() {
//   return (
//     <div
//       className="relative mx-auto select-none"
//       style={{ width: 560, height: 560 }}
//     >
//       {/* 1. Dashed arc — starts at bottom-left (laptop level), arcs over head, ends bottom-right */}
//       <svg
//         viewBox="0 0 560 560"
//         xmlns="http://www.w3.org/2000/svg"
//         className="absolute inset-0 w-full h-full pointer-events-none"
//         style={{ zIndex: 1 }}
//         aria-hidden="true"
//       >
//         <path
//           d="M 80 445 C 40 160, 520 160, 480 445"
//           fill="none"
//           stroke="white"
//           strokeWidth="1.6"
//           strokeDasharray="6 11"
//           opacity="0.45"
//         />
//       </svg>

//       {/* 2. Character image — centered, sitting just above table baseline */}
//       <div
//         className="absolute"
//         style={{
//           left: "50%",
//           top: "6%",
//           transform: "translateX(-50%)",
//           width: "60%",
//           zIndex: 2,
//         }}
//       >
//         <Image
//           src={hero}   // ← put your PNG in /public and update this path
//           alt="AI learning assistant character"
//           width={336}
//           height={448}
//           priority
//           className="w-full h-auto"
//         />
//       </div>

//       {/* 3. Floating icon cards */}
//       {ICON_CARDS.map((card) => (
//         <div
//           key={card.id}
//           aria-label={card.label}
//           className="absolute flex items-center justify-center"
//           style={{
//             top: `${card.top}%`,
//             left: `${card.left}%`,
//             width: card.size,
//             height: card.size,
//             background: card.bg,
//             borderRadius: card.borderRadius,
//             boxShadow: "0 8px 28px rgba(0,0,0,0.25), 0 2px 8px rgba(0,0,0,0.12)",
//             zIndex: 3,
//             animation: `heroFloat 3.4s ease-in-out ${card.delay}s infinite`,
//           }}
//         >
//           {card.icon}
//         </div>
//       ))}

//       {/* 4. Float keyframes */}
//       <style>{`
//         @keyframes heroFloat {
//           0%, 100% { transform: translateY(0px);  }
//           50%       { transform: translateY(-8px); }
//         }
//       `}</style>
//     </div>
//   );
// }