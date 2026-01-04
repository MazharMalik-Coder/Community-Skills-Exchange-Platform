"use client"; // Form handling ke liye client component zaroori hai

export default function AddSkillPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-12 px-6">
      <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="bg-blue-600 p-6 text-white text-center">
          <h1 className="text-3xl font-bold">Offer Your Skill</h1>
          <p className="mt-2 opacity-90">Share your talent with the community</p>
        </div>

        <form className="p-8 space-y-6">
          {/* Skill Title */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Skill Title</label>
            <input 
              type="text" 
              placeholder="e.g. React.js for Beginners"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none transition"
            />
          </div>

          {/* Category Dropdown */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Category</label>
            <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none transition bg-white">
              <option>Programming</option>
              <option>Design</option>
              <option>Language</option>
              <option>Marketing</option>
              <option>Business</option>
            </select>
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Description</label>
            <textarea 
              rows={4}
              placeholder="Tell us more about what you will teach..."
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none transition"
            ></textarea>
          </div>

          {/* Timing */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Available Timing</label>
            <input 
              type="text" 
              placeholder="e.g. Weekends, 6 PM - 9 PM"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none transition"
            />
          </div>

          {/* Submit Button */}
          <button 
            type="button"
            className="w-full bg-blue-600 text-white font-bold py-4 rounded-xl hover:bg-blue-700 transition shadow-lg"
          >
            Post Skill
          </button>
        </form>
      </div>
    </main>
  );
}