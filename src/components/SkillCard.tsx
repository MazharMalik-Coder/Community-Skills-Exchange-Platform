interface SkillProps {
  title: string;
  provider: string;
  category: string;
}

export default function SkillCard({ title, provider, category }: SkillProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md transition duration-300">
      <div className="inline-block px-3 py-1 text-xs font-semibold text-blue-600 bg-blue-50 rounded-full mb-3">
        {category}
      </div>
      <h3 className="text-xl font-bold text-gray-800 mb-1">{title}</h3>
      <p className="text-gray-500 text-sm">By: <span className="font-medium text-gray-700">{provider}</span></p>
      
      <div className="mt-5 pt-4 border-t border-gray-100 flex justify-between items-center">
        <button className="text-blue-600 font-semibold hover:underline">
          View Details
        </button>
        <button className="bg-gray-800 text-white text-sm px-4 py-2 rounded-lg hover:bg-black">
          Request Exchange
        </button>
      </div>
    </div>
  );
}