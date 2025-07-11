import type { Metadata } from "next";
import "./globals.css";
import Navbar from '../components/Navbar';

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-brand-cream font-sans text-brand-green">
        <Navbar />
        <main className="min-h-screen pt-16"> {/* pt-16 for sticky nav offset */}
          {children}
        </main>
      </body>
    </html>
  )
}
