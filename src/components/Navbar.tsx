import Link from 'next/link'; // Pehle ye import check karain

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-10 py-5 bg-white shadow-md">
      <div className="text-xl font-bold text-blue-600">
        <Link href="/">SkillExchange</Link> 
      </div>
      
      <ul className="flex gap-8 font-medium text-gray-700">
        {/* href="/" home page ke liye */}
        <li><Link href="/" className="hover:text-blue-600 cursor-pointer">Home</Link></li>
        
        {/* href="/about" about page ke liye (ye wahi folder name hai jo aapne banaya) */}
        <li><Link href="/about" className="hover:text-blue-600 cursor-pointer">About Us</Link></li>
        
        <li className="hover:text-blue-600 cursor-pointer">Find Skills</li>
      </ul>

      <button className="bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition">
        Login
      </button>
    </nav>
  );
}