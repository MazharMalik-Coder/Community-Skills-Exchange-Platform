import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer"; // 1. Footer ko import kiya

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Community Skill Exchange",
  description: "Exchange your skills with the community",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Navbar sab se oopar rahega */}
        <Navbar />

        {/* children ka matlab hai aapka main page ka content (Hero, Cards etc.) */}
        <main>
          {children}
        </main>

        {/* Footer ko children ke niche rakha taake ye page ke aakhir mein aaye */}
        <Footer />
      </body>
    </html>
  );
}