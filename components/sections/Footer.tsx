import Link from "next/link";
import { navLinks, siteConfig } from "@/lib/content";
import SocialIcons from "@/components/ui/SocialIcons";

export default function Footer() {
  return (
    <footer className="bg-sapphire text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <p className="text-xl font-bold mb-2" style={{ fontFamily: "Calibri, sans-serif" }}>bodioagency</p>
            <p className="text-white/60 text-sm">
              Marketing, operations, and AI training for teams that want to work
              smarter.
            </p>
          </div>

          <div>
            <p className="font-semibold mb-3 text-sm uppercase tracking-wider text-white/40">
              Pages
            </p>
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-white/60 hover:text-gold text-sm transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="font-semibold mb-3 text-sm uppercase tracking-wider text-white/40">
              Get in touch
            </p>
            <a
              href={`mailto:${siteConfig.email}`}
              className="text-gold hover:text-gold/80 text-sm transition-colors"
            >
              {siteConfig.email}
            </a>
            <SocialIcons
              className="mt-4"
              iconClassName="text-white/50 hover:text-gold"
            />
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 text-center text-white/40 text-xs">
          &copy; 2026 <span style={{ fontFamily: "Calibri, sans-serif" }}>bodioagency</span>. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
