import Link from "next/link";

type ButtonProps = {
  href: string;
  variant?: "primary" | "outline" | "cta";
  children: React.ReactNode;
  className?: string;
};

export default function Button({
  href,
  variant = "primary",
  children,
  className = "",
}: ButtonProps) {
  const base =
    "inline-block px-6 py-3 rounded-lg font-medium text-sm transition-all duration-200";
  const variants = {
    primary: "bg-sapphire text-white hover:bg-sapphire/90",
    cta: "bg-pink text-white font-semibold hover:bg-pink/90",
    outline: "border-2 border-white/40 text-white hover:bg-white/10",
  };

  return (
    <Link href={href} className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </Link>
  );
}
