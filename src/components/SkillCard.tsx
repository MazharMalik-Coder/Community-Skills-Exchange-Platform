import Link from 'next/link';

interface SkillProps {
  id: string;
  title: string;
  provider: string;
  category: string;
}

export default function SkillCard({ id, title, provider, category }: SkillProps) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-all">
      <span className="text-xs font-semibold text-blue-600 uppercase tracking-wide">{category}</span>
      <h3 className="text-xl font-bold text-gray-900 mt-2">{title}</h3>
      <p className="text-gray-600 text-sm mb-4">By {provider}</p>
      
      {/* Ye hai wo halki line (Border Top) */}
      <div className="border-t border-gray-100 pt-4 mt-4 flex justify-between items-center">
        {/* View Details Link */}
        <Link href={`/skills/${id}`} className="text-blue-600 text-sm font-semibold hover:underline">
          View Details
        </Link>

        {/* Request Exchange Button */}
        <button className="bg-blue-50 text-blue-600 px-4 py-2 rounded-lg text-xs font-bold hover:bg-blue-600 hover:text-white transition">
          Request Exchange
        </button>
      </div>
    </div>
  );
}