import Link from "next/link";

interface CategoryCardProps {
  name: string;
  description?: string;
  count?: number;
}

export function CategoryCard({ name, description, count }: CategoryCardProps) {
  const slug = name.toLowerCase().replace(/\s+/g, '-');
  
  return (
    <Link href={`/category/${slug}`} className="group block p-6 rounded-xl border border-border bg-card hover:border-bronze transition-colors duration-300">
      <div className="flex items-start justify-between mb-4">
        <h3 className="font-display text-2xl font-semibold group-hover:text-bronze transition-colors duration-300">{name}</h3>
        {count !== undefined && (
          <span className="font-mono text-xs text-text-secondary bg-background px-2 py-1 rounded-full border border-border">
            {count}
          </span>
        )}
      </div>
      {description && (
        <p className="font-body text-sm text-text-secondary leading-relaxed line-clamp-3">
          {description}
        </p>
      )}
      <div className="mt-6 flex items-center gap-2 font-mono text-[10px] uppercase tracking-wider text-text-secondary group-hover:text-bronze transition-colors">
        Explore <span className="group-hover:translate-x-1 transition-transform">→</span>
      </div>
    </Link>
  );
}
