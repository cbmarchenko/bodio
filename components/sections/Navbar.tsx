"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navLinks } from "@/lib/content";
import SocialIcons from "@/components/ui/SocialIcons";

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-9 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        <Link href="/" className="text-xl font-bold text-sapphire" style={{ fontFamily: "Calibri, sans-serif" }}>
          bodioagency
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm transition-colors ${
                pathname === link.href
                  ? "text-pink font-semibold"
                  : "text-charcoal/70 hover:text-charcoal"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <SocialIcons iconClassName="text-charcoal/50 hover:text-charcoal" />
          <Link
            href="/contact"
            className="bg-pink text-white text-sm font-semibold px-4 py-2 rounded-lg hover:bg-pink/90 transition-colors"
          >
            Book a Call
          </Link>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 text-charcoal"
          aria-label="Toggle menu"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            {mobileOpen ? (
              <path d="M6 6l12 12M6 18L18 6" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 px-4 pb-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className={`block py-2 text-sm ${
                pathname === link.href
                  ? "text-pink font-semibold"
                  : "text-charcoal/70"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setMobileOpen(false)}
            className="block mt-2 bg-pink text-white text-sm font-semibold px-4 py-2 rounded-lg text-center"
          >
            Book a Call
          </Link>
        </div>
      )}
    </nav>
  );
}
