"use client"; // Client-side interaction ke liye zaroori hai

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SearchBar() {
  const [query, setQuery] = useState(""); // Input text save karne ke liye
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault(); // Page refresh hone se rokne ke liye
    
    if (query.trim()) {
      // User ko skills page par bhej raha hai search word ke sath
      router.push(`/skills?query=${encodeURIComponent(query)}`);
    } else {
      // Agar kuch nahi likha to saari skills dikhao
      router.push("/skills");
    }
  };

  return (
    <div className="max-w-md mx-auto -mt-6 mb-10 px-4">
      <form 
        onSubmit={handleSearch}
        className="relative flex items-center bg-white rounded-full shadow-lg border border-gray-200 focus-within:ring-2 focus-within:ring-blue-400 transition"
      >
        <input 
          type="text" 
          value={query}
          onChange={(e) => setQuery(e.target.value)} // Har lafz likhne par state update hogi
          placeholder="Search for a skill (e.g. Next.js)..." 
          className="w-full px-6 py-3 rounded-full focus:outline-none text-gray-700"
        />
        
        <button 
          type="submit"
          className="bg-blue-600 text-white px-5 py-2 mr-1 rounded-full hover:bg-blue-700 transition font-medium active:scale-95"
        >
          Search
        </button>
      </form>
    </div>
  );
}