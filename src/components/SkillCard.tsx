import Link from 'next/link';

interface SkillProps {
  id: string;
  title: string;
  provider: string;
  category: string;
  image?: string | null; // Naya prop add kiya
}

export default function SkillCard({ id, title, provider, category, image }: SkillProps) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-all flex flex-col justify-between">
      <div>
        <div className="flex justify-between items-start mb-4">
          <span className="text-xs font-semibold text-blue-600 uppercase tracking-wide">
            {category}
          </span>
          
          {/* Skill Image/Icon Section */}
          <div className="w-12 h-12 relative flex-shrink-0">
            {image ? (
              <img 
                src={image} 
                alt={title} 
                className="w-full h-full object-contain rounded-md"
              />
            ) : (
              // Agar image na ho to ye placeholder dikhega
              <div className="w-full h-full bg-blue-50 rounded-md flex items-center justify-center">
                <span className="text-blue-400 text-[10px] font-bold text-center">No Icon</span>
              </div>
            )}
          </div>
        </div>

          <h3 className="text-xl font-bold text-gray-900 mt-2">{title}</h3>
        <p className="text-gray-600 text-sm mb-4">By {provider}</p>
      </div>
      
      {/* Bottom Action Area */}
      <div className="border-t border-gray-100 pt-4 mt-4 flex justify-between items-center">
        <Link href={`/skills/${id}`} className="text-blue-600 text-sm font-semibold hover:underline">
          View Details
        </Link>

        <button className="bg-blue-50 text-blue-600 px-4 py-2 rounded-lg text-xs font-bold hover:bg-blue-600 hover:text-white transition">
          Request Exchange
        </button>
      </div>
    </div>
  );
}