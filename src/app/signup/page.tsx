"use client"; // 👈 Client-side interactivity ke liye ye lazmi hai

import { useState } from 'react';
import Link from 'next/link';

export default function SignupPage() {
  // 📦 1. State setup: User ka data store karne ke liye
  const [formData, setFormData] = useState({
    username: '', // Strapi 'username' mangta hai
    email: '',
    password: ''
  });

  // 🔄 2. Input handler: Har keypress par data update hoga
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // 🚀 3. Submit handler: Strapi ko data bhejne ke liye
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // Page refresh hone se rokne ke liye
    
    try {
      const response = await fetch('http://localhost:1337/api/auth/local/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Account Created Successfully! 🎉");
        // Yahan aap user ko login page par redirect kar sakte hain
      } else {
        alert("Error: " + data.error.message);
      }
    } catch (error) {
      console.error("Signup error:", error);
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50 px-4 py-12">
      <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-2xl shadow-xl">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">Create Account</h2>
        </div>
        
        {/* onSubmit event add kiya gaya hai */}
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Full Name</label>
              <input 
                name="username" // 👈 Strapi backend ke liye 'username' zaroori hai
                type="text" 
                required 
                value={formData.username}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email Address</label>
              <input 
                name="email" // 👈 backend field name
                type="email" 
                required 
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Password</label>
              <input 
                name="password" // 👈 backend field name
                type="password" 
                required 
                value={formData.password}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="••••••••"
              />
            </div>
          </div>

          <button type="submit" className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 transition">
            Create Account
          </button>
        </form>

        <p className="text-center text-sm text-gray-600 mt-4">
          Already have an account? <Link href="/login" className="font-medium text-blue-600 hover:text-blue-500">Log in</Link>
        </p>
      </div>
    </main>
  );
}