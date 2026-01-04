export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-10 px-6 text-center rounded-xl shadow-lg mb-8">
  {/* Font size text-5xl se text-3xl kar diya gaya hai */}
  <h1 className="text-3xl md:text-4xl font-extrabold leading-tight mb-3">
    Community Skills Exchange Platform
  </h1>
  
  {/* Text size aur margin kam kiya gaya hai */}
  <p className="text-base md:text-lg mb-6 opacity-90 max-w-2xl mx-auto">
    Discover, Learn, Share. Connect with local experts and exchange your unique talents.
  </p>
  
  <div className="flex flex-col sm:flex-row justify-center gap-3">
    {/* Buttons ki padding (px, py) aur font size kam kar di gayi hai */}
    <button className="bg-white text-blue-700 px-6 py-2 rounded-full text-sm font-semibold hover:bg-gray-100 transition duration-300 shadow-md">
      Explore Skills
    </button>
    <button className="bg-transparent border-2 border-white text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-white hover:text-blue-700 transition duration-300 shadow-md">
      Offer Your Skill
    </button>
  </div>
</section>
  );
}