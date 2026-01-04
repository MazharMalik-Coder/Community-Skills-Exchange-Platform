export default function SearchBar() {
  return (
    <div className="max-w-md mx-auto -mt-6 mb-10 px-4">
      <div className="relative flex items-center bg-white rounded-full shadow-lg border border-gray-200">
        <input 
          type="text" 
          placeholder="Search for a skill (e.g. Python, Yoga)..." 
          className="w-full px-6 py-3 rounded-full focus:outline-none text-gray-700"
        />
        <button className="bg-blue-600 text-white px-5 py-2 mr-1 rounded-full hover:bg-blue-700 transition">
          Search
        </button>
      </div>
    </div>
  );
}