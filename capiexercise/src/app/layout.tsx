"use client";
import "react-toastify/dist/ReactToastify.css";
import { Geist, Geist_Mono } from "next/font/google";
import { AuthProvider } from "@/../src/app/store/AuthContext";
import "./globals.css";
import "boxicons/css/boxicons.min.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthProvider>
      <html lang="es" className={`${geistSans.variable} ${geistMono.variable}`} suppressHydrationWarning>
        <body>
          {children}
        </body>
      </html>
    </AuthProvider>
  );
}
