import { notFound } from "next/navigation";

// Updated list with 6 skills to match your Home Page
const skillsData = [
  { 
    id: "1", 
    title: "Software Development", 
    provider: "Mazhar Malik", 
    category: "Programming", 
    description: "Learn full-stack software development from industry experts. This course covers everything from logic building to deployment.", 
    timing: "Mon-Fri (9 AM - 11 AM)", 
    learning: ["Algorithms", "Data Structures", "System Design"] 
  },
  { 
    id: "2", 
    title: "Next.js Development", 
    provider: "Ali Ahmed", 
    category: "Programming", 
    description: "Master Next.js 14 and build lightning-fast web applications using the latest App Router features.", 
    timing: "Weekends (8 PM - 10 PM)", 
    learning: ["App Router", "Server Components", "API Routes"] 
  },
  { 
    id: "3", 
    title: "Graphic Designing", 
    provider: "Sara Khan", 
    category: "Design", 
    description: "Create stunning visuals and professional branding using Adobe Photoshop and Illustrator.", 
    timing: "Tue-Thu (4 PM - 6 PM)", 
    learning: ["Logo Design", "Typography", "Color Theory"] 
  },
  { 
    id: "4", 
    title: "Web Development", 
    provider: "Saqib Ali", 
    category: "Design", 
    description: "Start your journey in web development. Learn how to create responsive websites from scratch.", 
    timing: "Daily (6 PM - 7 PM)", 
    learning: ["HTML5 & CSS3", "Responsive Design", "JavaScript Basics"] 
  },
  { 
    id: "5", 
    title: "Digital Marketing", 
    provider: "Mueen Khan", 
    category: "Language", 
    description: "Master the art of online growth. Learn SEO, Social Media Marketing, and Google Ads.", 
    timing: "Mon-Wed (10 PM - 11 PM)", 
    learning: ["Search Engine Optimization", "Content Strategy", "Email Marketing"] 
  },
  { 
    id: "6", 
    title: "Cybersecurity", 
    provider: "Shahzaib Malik", 
    category: "Language", 
    description: "Protect digital assets and learn the fundamentals of ethical hacking and network security.", 
    timing: "Friday (5 PM - 8 PM)", 
    learning: ["Network Security", "Ethical Hacking", "Digital Forensics"] 
  }
];

export default async function SkillDetailPage({ params }: { params: Promise<{ id: string }> }) {
  
  const resolvedParams = await params;
  const id = resolvedParams.id;

  const skill = skillsData.find((s) => s.id === id);

  if (!skill) {
    return notFound();
  }

  return (
    <main className="min-h-screen bg-gray-50 p-6 md:p-10">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
        {/* Header Header */}
        <div className="bg-blue-600 p-8 text-white">
          <span className="bg-blue-500 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
            {skill.category}
          </span>
          <h1 className="text-3xl md:text-4xl font-extrabold mt-4">{skill.title}</h1>
          <p className="mt-2 opacity-90 text-lg italic text-blue-100">By {skill.provider}</p>
        </div>
        
        <div className="p-8">
          {/* About Section */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 border-b pb-2">About this Skill</h2>
            <p className="text-gray-600 mt-4 leading-relaxed text-lg">
              {skill.description}
            </p>
          </section>

          {/* Learning Points Section */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 border-b pb-2">What you will learn</h2>
            <ul className="mt-4 space-y-3">
              {skill.learning.map((item, index) => (
                <li key={index} className="flex items-center text-gray-700">
                  <span className="h-2 w-2 bg-blue-600 rounded-full mr-3"></span>
                  {item}
                </li>
              ))}
            </ul>
          </section>

          {/* Timing Box */}
          <div className="bg-blue-50 p-6 rounded-xl border border-blue-100 flex flex-col md:flex-row md:items-center justify-between">
            <div>
              <h3 className="font-bold text-blue-800 text-lg">Schedule & Timing</h3>
              <p className="text-blue-700 mt-1">{skill.timing}</p>
            </div>
            <button className="mt-4 md:mt-0 bg-blue-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-blue-700 transition shadow-md">
              Contact {skill.provider.split(' ')[0]}
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}