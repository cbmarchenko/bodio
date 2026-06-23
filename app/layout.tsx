import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Marquee from "@/components/sections/Marquee";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import { pageMeta } from "@/lib/content";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: pageMeta.home.title,
  description: pageMeta.home.description,
  metadataBase: new URL("https://bodioagency.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased bg-cream text-charcoal`}>
        <Marquee />
        <Navbar />
        <main className="pt-[100px]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
