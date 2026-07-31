import Image from "next/image";
import Link from "next/link";

interface AuthorBioProps {
  author: string;
  role: string;
  compact?: boolean;
  expanded?: boolean;
  image?: string;
}

export function AuthorBio({ author, role, compact = false, expanded = false, image }: AuthorBioProps) {
  const initials = author.split(" ").map(n => n[0]).join("").substring(0, 2);

  if (compact) {
    return (
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-bronze/20 flex items-center justify-center overflow-hidden">
          {image ? (
            <Image src={image} alt={author} width={40} height={40} className="w-full h-full object-cover" />
          ) : (
            <span className="font-display text-sm font-semibold text-bronze">{initials}</span>
          )}
        </div>
        <div>
          <p className="font-ui text-sm font-medium text-foreground">{author}</p>
          <p className="font-mono text-[10px] uppercase tracking-wider text-text-secondary">{role}</p>
        </div>
      </div>
    );
  }

  if (expanded) {
    return (
      <div className="flex flex-col md:flex-row gap-6 p-8 border border-border rounded-xl bg-card">
        <div className="w-20 h-20 rounded-full bg-bronze/20 flex items-center justify-center flex-shrink-0 overflow-hidden">
          {image ? (
            <Image src={image} alt={author} width={80} height={80} className="w-full h-full object-cover" />
          ) : (
            <span className="font-display text-2xl font-semibold text-bronze">{initials}</span>
          )}
        </div>
        <div>
          <h3 className="font-display text-2xl font-semibold mb-2">{author}</h3>
          <p className="font-mono text-xs uppercase tracking-wider text-bronze mb-4">{role}</p>
          <p className="font-body text-text-secondary leading-relaxed mb-4">
            {author} is a regular contributor to Monoverse, exploring the intersections of {role.toLowerCase()} and contemporary culture.
          </p>
          <Link href={`/author/${author.toLowerCase().replace(/\s+/g, '-')}`} className="font-mono text-[11px] uppercase tracking-wider text-text-secondary hover:text-bronze transition-colors">
            View all articles →
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-4 p-6 border border-border rounded-lg hover:border-bronze/50 transition-colors duration-300">
      <div className="w-12 h-12 rounded-full bg-bronze/20 flex items-center justify-center overflow-hidden">
        {image ? (
          <Image src={image} alt={author} width={48} height={48} className="w-full h-full object-cover" />
        ) : (
          <span className="font-display text-base font-semibold text-bronze">{initials}</span>
        )}
      </div>
      <div>
        <h4 className="font-display text-lg font-semibold">{author}</h4>
        <p className="font-mono text-[11px] uppercase tracking-wider text-text-secondary">{role}</p>
      </div>
    </div>
  );
}
