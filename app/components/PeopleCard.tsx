import Link from "next/link";
import { ImageReveal } from "./ImageReveal";

interface PeopleCardProps {
  name: string;
  portrait: string;
  bio: string;
  role: string;
  signatureStyle: string;
  keyWorks: string[];
  href: string;
}

export function PeopleCard({ name, portrait, bio, role, signatureStyle, keyWorks, href }: PeopleCardProps) {
  return (
    <div className="glass-panel overflow-hidden group flex flex-col md:flex-row gap-[32px] p-[32px] md:p-[40px] items-center md:items-start transition-transform duration-500 ease-out hover:shadow-float-high hover:-translate-y-[4px]">
      <div className="w-[160px] h-[200px] md:w-[200px] md:h-[260px] flex-shrink-0 grayscale group-hover:grayscale-0 transition-all duration-[800ms]">
        <ImageReveal
          src={portrait}
          alt={name}
          width={300}
          height={400}
        />
      </div>
      <div className="flex flex-col flex-grow text-center md:text-left">
        <h3 className="font-display text-[32px] leading-[1.1] text-foreground mb-[16px]">{name}</h3>
        <p className="font-body text-[16px] leading-[1.65] text-text-secondary mb-[24px]">
          {bio}
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[24px] mb-[32px] border-t border-outline-variant pt-[24px] text-left">
          <div>
            <span className="font-meta text-[10px] uppercase tracking-[0.15em] text-bronze-accent block mb-[8px]">Signature Style</span>
            <span className="font-body text-[14px] text-foreground">{signatureStyle}</span>
          </div>
          <div>
            <span className="font-meta text-[10px] uppercase tracking-[0.15em] text-bronze-accent block mb-[8px]">Key Works</span>
            <span className="font-body text-[14px] text-foreground">{keyWorks.join(", ")}</span>
          </div>
        </div>

        <Link href={href} className="font-label text-[11px] uppercase tracking-[0.2em] text-bronze-accent font-semibold hover:text-foreground transition-colors self-center md:self-start">
          Read Profile
        </Link>
      </div>
    </div>
  );
}
