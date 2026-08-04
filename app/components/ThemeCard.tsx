import Link from "next/link";

interface ThemeCardProps {
  title: string;
  href: string;
}

export function ThemeCard({ title, href }: ThemeCardProps) {
  return (
    <Link 
      href={href}
      className="glass-panel p-[32px] md:p-[48px] flex items-center justify-center text-center group hover:-translate-y-[4px] hover:shadow-float-high transition-transform duration-500 ease-out"
    >
      <h3 className="font-display text-[24px] md:text-[32px] text-text-secondary group-hover:text-foreground transition-colors duration-300">
        {title}
      </h3>
    </Link>
  );
}
