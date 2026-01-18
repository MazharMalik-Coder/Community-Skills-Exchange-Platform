import Hero from "@/components/Hero";
import SearchBar from "@/components/SearchBar";
import SkillCard from "@/components/SkillCard";
import ProjectCard from "@/components/ProjectCard"; // Import naya component

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";

// Fetch Functions
async function getSkills() {
  const res = await fetch(`${STRAPI_URL}/api/skills?populate=*`, { cache: "no-store" });
  const result = await res.json();
  return result.data || [];
}

async function getProjects() {
  const res = await fetch(`${STRAPI_URL}/api/projects?populate=*`, { cache: "no-store" });
  const result = await res.json();
  return result.data || [];
}

export default async function Home() {
  const skills = await getSkills();
  const projects = await getProjects();

  return (
    <main className="min-h-screen bg-gray-50 pb-20">
      <Hero />
      <div className="max-w-6xl mx-auto px-6">
        <SearchBar />

        {/* --- Skills Section --- */}
        <section className="mt-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Available Skills</h2>
            <div className="h-1 flex-1 bg-gray-100 ml-6 hidden md:block"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill: any) => (
              <SkillCard 
                key={skill.id} 
                id={skill.documentId} 
                title={skill.title} 
                provider={skill.provider} 
                category={skill.category}
                image={skill.icon?.[0]?.url || skill.icon?.url || null}
              />
            ))}
          </div>
        </section>

        {/* --- Projects Section --- */}
        <section className="mt-24">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Featured Projects</h2>
            <div className="h-1 flex-1 bg-gray-200 ml-6 hidden md:block"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project: any) => (
              <ProjectCard 
                key={project.id}
                id={project.documentId}
                title={project.title}
                github_link={project.github_link}
                // Thumbnail handle karna
                thumbnail={project.thumbnail?.url || project.thumbnail?.[0]?.url || null}
              />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}