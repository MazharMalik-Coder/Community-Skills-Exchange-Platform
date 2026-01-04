import { notFound } from "next/navigation";

const skillsData = [
  { id: "1", title: "Next.js Development", provider: "Ali Ahmed", category: "Programming", description: "Learn Next.js 14 basics.", timing: "Weekends", learning: ["SSR", "API"] },
  { id: "2", title: "Graphic Designing", provider: "Sara Khan", category: "Design", description: "Master Photoshop.", timing: "Mon-Wed", learning: ["Logos", "Colors"] },
  { id: "3", title: "English Speaking", provider: "John Doe", category: "Language", description: "Fluency tips.", timing: "Daily", learning: ["Grammar", "Speaking"] }
];

// Next.js 15+ ke liye params ko Promise ki tarah handle karna behtar hai
export default async function SkillDetailPage({ params }: { params: Promise<{ id: string }> }) {
  
  const resolvedParams = await params;
  const id = resolvedParams.id;

  const skill = skillsData.find((s) => s.id === id);

  if (!skill) {
    return notFound();
  }

  return (
    <main className="min-h-screen bg-gray-50 p-10">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-lg">
        <span className="text-blue-600 font-bold uppercase text-sm">{skill.category}</span>
        <h1 className="text-4xl font-extrabold text-gray-900 mt-2">{skill.title}</h1>
        <p className="text-gray-500 mt-1 text-lg italic">By {skill.provider}</p>
        
        <div className="mt-8 border-t pt-6">
          <h2 className="text-2xl font-bold text-gray-800">About this Skill</h2>
          <p className="text-gray-600 mt-4 leading-relaxed">{skill.description}</p>
        </div>

        <div className="mt-8 bg-blue-50 p-6 rounded-xl border border-blue-100">
          <h3 className="font-bold text-blue-800">Schedule & Timing</h3>
          <p className="text-blue-700 mt-2">{skill.timing}</p>
        </div>
      </div>
    </main>
  );
}