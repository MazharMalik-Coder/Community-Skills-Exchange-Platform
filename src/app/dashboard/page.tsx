"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Dashboard() {
  const [title, setTitle] = useState('');
  const [level, setLevel] = useState('Beginner');
  const [provider, setProvider] = useState('');
  const [category, setCategory] = useState('');
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem('token');
    router.push('/login');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const token = localStorage.getItem('token');
    if (!token) {
      alert("Session expired. Please login again.");
      router.push('/login');
      return;
    }

    const formData = new FormData();
    
    // ✅ Step 1: Data ko sahi tarah se wrap karein
    const dataPayload = { 
      title, 
      level, 
      provider, 
      category 
    };
    
    // Strapi expects text data under the 'data' key as a string
    formData.append('data', JSON.stringify(dataPayload));

    // ✅ Step 2: File append karein
    if (file) {
      formData.append('files.icon', file); 
    }

    try {
      const res = await fetch('http://localhost:1337/api/skills', {
        method: 'POST',
        headers: {
          // ⚠️ 'Content-Type' yahan bilkul nahi likhna!
          'Authorization': `Bearer ${token}`,
        },
        body: formData,
      });

      const result = await res.json();

      if (res.ok) {
        alert("Skill Card Created Successfully! 🎉");
        // Reset form
        setTitle('');
        setProvider('');
        setCategory('');
        setFile(null);
        (document.getElementById('fileInput') as HTMLInputElement).value = "";
      } else {
        // Agar error aaye toh console mein check karein
        console.error("Strapi Response Error:", result);
        alert(`Error: ${result.error?.message || "Check Console"}`);
      }
    } catch (error) {
      console.error("Network Error:", error);
      alert("Network error. Please check your Strapi server.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="p-10 bg-gray-100 min-h-screen">
      <div className="max-w-2xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-800">User Dashboard</h1>
          <button onClick={handleLogout} className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition">
            Logout 🚪
          </button>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-lg">
          <h2 className="text-xl font-semibold mb-6 border-b pb-2">Create New Skill Card</h2>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Skill Title</label>
              <input type="text" required value={title} onChange={(e) => setTitle(e.target.value)} className="w-full border border-gray-300 p-2 rounded-md outline-none focus:ring-2 focus:ring-blue-500" placeholder="e.g. Next.js Developer" />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Provider</label>
                <input type="text" required value={provider} onChange={(e) => setProvider(e.target.value)} className="w-full border border-gray-300 p-2 rounded-md outline-none focus:ring-2 focus:ring-blue-500" placeholder="e.g. Google" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                <input type="text" required value={category} onChange={(e) => setCategory(e.target.value)} className="w-full border border-gray-300 p-2 rounded-md outline-none focus:ring-2 focus:ring-blue-500" placeholder="e.g. Technology" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Skill Level</label>
              <select value={level} onChange={(e) => setLevel(e.target.value)} className="w-full border border-gray-300 p-2 rounded-md outline-none focus:ring-2 focus:ring-blue-500">
                <option value="Beginner">Beginner</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Expert">Expert</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Icon / Image</label>
              <input id="fileInput" type="file" accept="image/*" onChange={(e) => setFile(e.target.files?.[0] || null)} className="w-full border border-gray-300 p-2 rounded-md" />
            </div>

            <button type="submit" disabled={loading} className={`w-full py-3 rounded-lg font-bold text-white transition ${loading ? 'bg-gray-400' : 'bg-blue-600 hover:bg-blue-700'}`}>
              {loading ? "Uploading..." : "Upload Skill Card 🚀"}
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}