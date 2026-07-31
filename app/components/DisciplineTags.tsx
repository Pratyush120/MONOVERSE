import Link from "next/link";
import React from "react";

interface DisciplineTagsProps {
  disciplines: string[];
}

export function DisciplineTags({ disciplines }: DisciplineTagsProps) {
  return (
    <div className="flex flex-wrap items-center gap-2 md:gap-4">
      {disciplines.map((disc, i) => (
        <React.Fragment key={disc}>
          <Link 
            href={`/category/${disc.toLowerCase().replace(/\s+/g, '-')}`}
            className="font-mono text-[12px] uppercase tracking-[0.15em] px-4 py-2 rounded-full border border-border text-text-secondary hover:text-bronze hover:border-bronze transition-colors duration-300"
          >
            {disc}
          </Link>
          {i < disciplines.length - 1 && (
            <div className="hidden md:flex items-center gap-2">
              <div className="w-4 h-[1px] bg-bronze opacity-50" />
              <div className="w-1 h-1 rounded-full bg-bronze opacity-50" />
              <div className="w-4 h-[1px] bg-bronze opacity-50" />
            </div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
}
