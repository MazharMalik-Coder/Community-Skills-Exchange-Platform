// import Image from "next/image";

// export default function Home() {
//   return (
//     <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
//       <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
//         <Image
//           className="dark:invert"
//           src="/next.svg"
//           alt="Next.js logo"
//           width={100}
//           height={20}
//           priority
//         />
//         <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
//           <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
//             To get started, edit the page.tsx file.
//           </h1>
//           <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
//             Looking for a starting point or more instructions? Head over to{" "}
//             <a
//               href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//               className="font-medium text-zinc-950 dark:text-zinc-50"
//             >
//               Templates
//             </a>{" "}
//             or the{" "}
//             <a
//               href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//               className="font-medium text-zinc-950 dark:text-zinc-50"
//             >
//               Learning
//             </a>{" "}
//             center.
//           </p>
//         </div>
//         <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
//           <a
//             className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
//             href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <Image
//               className="dark:invert"
//               src="/vercel.svg"
//               alt="Vercel logomark"
//               width={16}
//               height={16}
//             />
//             Deploy Now
//           </a>
//           <a
//             className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
//             href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Documentation
//           </a>
//         </div>
//       </main>
//     </div>
//   );
// }


// export default function Home() {
//   return (
//     <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-gray-50">
//       <div className="text-center">
//         <h1 className="text-4xl font-bold text-blue-600 mb-4">
//           Community Skill Exchange
//         </h1>
//         <p className="text-lg text-gray-600">
//           Welcome to your FYP! Yahan log apne skills ek doosre se exchange kar saken ge.
//         </p>
//         <div className="mt-8 px-6 py-3 bg-blue-600 text-white rounded-lg inline-block font-medium">
//           Get Started
//         </div>
//       </div>
//     </main>
//   );
// }


// import Link from 'next/link';

// export default function Navbar() {
//   return (
//     <nav className="flex justify-between items-center px-10 py-5 bg-white shadow-md">
//       <div className="text-xl font-bold text-blue-600">
//         Community SkillExchange Platform
//       </div>
      
//       <ul className="flex gap-8 font-medium text-gray-700">
//         <li className="hover:text-blue-600 cursor-pointer">Home</li>
//         <li className="hover:text-blue-600 cursor-pointer">Find Skills</li>
//         <li className="hover:text-blue-600 cursor-pointer">Teach a Skill</li>
//       </ul>

//       <button className="bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition">
//         Login
//       </button>
//     </nav>
//   );
// }

// import Hero from "@/components/Hero";
// import SearchBar from "@/components/SearchBar"; // Step 1: SearchBar ko import kiya
// import SkillCard from "@/components/SkillCard";

// export default function Home() {
//   return (
//     <main className="min-h-screen bg-gray-50 p-10">
//       <div className="max-w-6xl mx-auto">
        
//         {/* Pehle Hero Section dikhega */}
//         <Hero /> 

//         {/* Phir uske bilkul niche Search Bar dikhega */}
//         <SearchBar /> 

//         <header className="mb-10 text-center">
//           <h1 className="text-4xl font-extrabold text-gray-900 mb-2">
//             Available Skills for Exchange
//           </h1>
//           <p className="text-gray-600">Explore skills and connect with the community.</p>
//         </header>

//         {/* Uske niche saare Skill Cards dikhenge */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           <SkillCard title="Software Development" provider="Mazhar Malik" category="Programming" />
//           <SkillCard title="Next.js Development" provider="Ali Ahmed" category="Programming" />
//           <SkillCard title="Graphic Designing" provider="Sara Khan" category="Design" />
//           <SkillCard title="web development" provider="Saqib Ali" category="Design" />
//           <SkillCard title="digital marketing" provider="Mueen Khan" category="Language" />
//           <SkillCard title="Cybersecurity" provider="Shahzaib Malik" category="Language" />
//           {/* ... baki cards ... */}
//         </div>

//       </div>
//     </main>
//   );
// }
import React from 'react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Navbar */}
      <nav className="flex justify-between items-center p-6 bg-white shadow-sm">
        <div className="text-2xl font-bold text-blue-600">SkillExchange</div>
        <div className="space-x-6 hidden md:flex">
          <a href="#" className="hover:text-blue-600">Find Skills</a>
          <a href="#" className="hover:text-blue-600">Offer Skills</a>
          <a href="#" className="hover:text-blue-600">How it Works</a>
        </div>
        <button className="bg-blue-600 text-white px-5 py-2 rounded-lg font-medium">Sign In</button>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-6 text-center bg-gradient-to-b from-white to-blue-50">
        <h1 className="text-5xl font-extrabold text-gray-900 mb-6">
          Unlock Your Potential, <br /> <span className="text-blue-600">Share Your Skills</span>
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Connect with a community of learners. Learn new skills, teach what you know, and grow together.
        </p>
        <div className="flex justify-center gap-4">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-md text-lg font-semibold shadow-lg hover:bg-blue-700">Find Skills</button>
          <button className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-md text-lg font-semibold hover:bg-blue-50">Offer Your Skills</button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 grid md:grid-cols-3 gap-8 px-10">
        <div className="bg-white p-8 rounded-xl shadow-sm border text-center">
          <div className="text-4xl mb-4">💡</div>
          <h3 className="text-xl font-bold mb-2">Learn Anything</h3>
          <p className="text-gray-500">Access thousands of skills from experts in your community.</p>
        </div>
        <div className="bg-white p-8 rounded-xl shadow-sm border text-center">
          <div className="text-4xl mb-4">🤝</div>
          <h3 className="text-xl font-bold mb-2">Collaborate</h3>
          <p className="text-gray-500">Teach what you love and build meaningful connections.</p>
        </div>
        <div className="bg-white p-8 rounded-xl shadow-sm border text-center">
          <div className="text-4xl mb-4">🚀</div>
          <h3 className="text-xl font-bold mb-2">Grow Network</h3>
          <p className="text-gray-500">Join a global network of passionate creators and learners.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12 text-center">
        <h2 className="text-3xl font-bold mb-6">Join Thousands of Skill-Sharers Today!</h2>
        <button className="bg-blue-500 hover:bg-blue-400 px-10 py-3 rounded-full text-lg font-bold transition">Sign Up For Free</button>
        <div className="mt-10 text-gray-400 border-t border-gray-800 pt-6">
          © 2026 Community Skill Exchange. All rights reserved.
        </div>
      </footer>
    </div>
  );
}