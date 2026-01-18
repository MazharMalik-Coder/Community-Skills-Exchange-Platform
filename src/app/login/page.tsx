"use client";

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation'; // 👈 1. Ye import zaroori hy

export default function LoginPage() {
  const router = useRouter(); // 👈 2. Router ko initialize karein

  const [formData, setFormData] = useState({
    identifier: '',
    password: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await fetch('http://localhost:1337/api/auth/local', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem('token', data.jwt);
        // ✅ Ab ye line sahi se kaam kare gi
        router.push('/dashboard'); 
      } else {
        alert("Invalid Email or Password! 🚫");
      }
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  return (
    // ... baqi code same hy (return wala)
    <main className="min-h-screen flex items-center justify-center bg-gray-50 px-4 py-12">
      {/* Form and UI content */}
       <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-2xl shadow-xl">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">Welcome Back!</h2>
        </div>
        
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Email Address</label>
              <input 
                name="identifier"
                type="email" 
                required 
                value={formData.identifier}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Password</label>
              <input 
                name="password"
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
            Sign In
          </button>
        </form>

        <p className="text-center text-sm text-gray-600 mt-4">
          Don't have an account? <Link href="/signup" className="font-medium text-blue-600 hover:text-blue-500">Sign up for free</Link>
        </p>
      </div>
    </main>
  );
}