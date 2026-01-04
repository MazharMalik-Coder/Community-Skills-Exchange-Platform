import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-10 py-5 bg-white shadow-md sticky top-0 z-50">
      <div className="text-xl font-bold text-blue-600">
        <Link href="/">SkillExchange</Link> 
      </div>
      
      <ul className="flex gap-8 font-medium text-gray-700 items-center">
        <li>
          <Link href="/" className="hover:text-blue-600 transition cursor-pointer">Home</Link>
        </li>
        
        <li>
          <Link href="/about" className="hover:text-blue-600 transition cursor-pointer">About Us</Link>
        </li>

        {/* Naya Link: Offer a Skill form ke liye */}
        <li>
          <Link href="/add-skill" className="hover:text-blue-600 transition cursor-pointer">
            Offer a Skill
          </Link>
        </li>
        
        <li className="hover:text-blue-600 transition cursor-pointer">Find Skills</li>
      </ul>

      <Link href="/login">
        <button className="bg-blue-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-700 transition shadow-sm active:scale-95">
          Login
        </button>
      </Link>
    </nav>
  );
}