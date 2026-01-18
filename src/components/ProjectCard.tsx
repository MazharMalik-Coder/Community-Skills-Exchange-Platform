import Link from 'next/link';

interface ProjectProps {
  id: string;
  title: string;
  github_link?: string;
  thumbnail?: string | null;
}

export default function ProjectCard({ id, title, github_link, thumbnail }: ProjectProps) {
  return (
    // Card ka container puray size (h-full) aur purani padding ke saath
    <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 flex flex-col h-full">
      
      {/* 🖼️ Image Container: Height wahi rakhi hai (h-40) taake card bara lagay, 
          lekin 'object-contain' image ko katnay se bachaye ga */}
      <div className="relative w-full h-40 bg-gray-50 border-b border-gray-50 overflow-hidden flex items-center justify-center p-4">
        {thumbnail ? (
          <img 
            src={thumbnail} 
            alt={title} 
            className="max-w-full max-h-full object-contain transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex flex-col items-center justify-center text-gray-400 bg-gray-100 w-full h-full">
            <svg className="w-8 h-8 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
            </svg>
            <span className="text-[10px] uppercase font-bold tracking-wider">No Preview</span>
          </div>
        )}
      </div>

      {/* 📝 Content Section: Purani padding (p-5) aur font sizes wapas */}
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-1">
          {title}
        </h3>
        
        <p className="text-xs text-gray-600 mb-4 italic">Featured Project</p>

        {/* 🔗 Action Buttons */}
        <div className="mt-auto flex items-center gap-3">
          <Link 
            href={`/projects/${id}`} 
            className="flex-1 text-center bg-blue-600 text-white py-2.5 rounded-lg text-sm font-semibold hover:bg-blue-700 transition shadow-sm"
          >
            View Project
          </Link>
          
          {github_link && (
            <a 
              href={github_link}
              target="_blank"
              title="GitHub Repository"
              className="p-2.5 border border-gray-200 rounded-lg text-gray-600 hover:bg-gray-50 hover:text-black transition"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
              </svg>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}