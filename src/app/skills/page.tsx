"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import SkillCard from "@/components/SkillCard";

const allSkills = [
  { id: "1", title: "Software Development", provider: "Mazhar Malik", category: "Programming" },
  { id: "2", title: "Next.js Development", provider: "Ali Ahmed", category: "Programming" },
  { id: "3", title: "Graphic Designing", provider: "Sara Khan", category: "Design" },
  { id: "4", title: "Web Development", provider: "Saqib Ali", category: "Design" },
  { id: "5", title: "Digital Marketing", provider: "Mueen Khan", category: "Marketing" },
  { id: "6", title: "Cybersecurity", provider: "Shahzaib Malik", category: "Programming" },
];

function SkillsContent() {
  const searchParams = useSearchParams();
  const query = searchParams.get("query")?.toLowerCase() || "";

  // Filter Logic: Title ya Category mein search word dhoondna
  const filteredSkills = allSkills.filter((skill) =>
    skill.title.toLowerCase().includes(query) || 
    skill.category.toLowerCase().includes(query)
  );

  return (
    <>
      <header className="mb-12 text-center">
        <h1 className="text-4xl font-extrabold text-gray-900">
          {query ? `Search Results for "${query}"` : "Explore All Skills"}
        </h1>
        <p className="text-gray-600 mt-2">
          {filteredSkills.length} skills found matching your interest.
        </p>
      </header>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredSkills.length > 0 ? (
          filteredSkills.map((skill) => (
            <SkillCard 
              key={skill.id}
              id={skill.id}
              title={skill.title}
              provider={skill.provider}
              category={skill.category}
            />
          ))
        ) : (
          <div className="col-span-full text-center py-20">
            <h2 className="text-2xl font-bold text-gray-400">Oops! No skills found.</h2>
            <p className="text-gray-500">Try searching for something else like "Next.js" or "Design".</p>
          </div>
        )}
      </div>
    </>
  );
}

export default function FindSkills() {
  return (
    <main className="min-h-screen bg-gray-50 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Suspense zaroori hai Next.js mein searchParams use karne ke liye */}
        <Suspense fallback={<div className="text-center">Loading skills...</div>}>
          <SkillsContent />
        </Suspense>
      </div>
    </main>
  );
}