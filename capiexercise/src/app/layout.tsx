"use client";

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Sidebar from "./Components/Navigation/Sidebar/Sidebar";
import Navbar from "./Components/Navigation/Navbar";
import "boxicons/css/boxicons.min.css";



const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <div style={{ display: "flex" }}>
          <Sidebar />
          <main style={{ marginLeft: "256px", padding: "2rem", flex: 1 }}>
            {children}
          </main>
          <Navbar /> 
        </div>
      </body>
    </html>
  );
}
