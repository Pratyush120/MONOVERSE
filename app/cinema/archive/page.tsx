const allMovies: any[] = [], allCinemaArticles: any[] = [], allCinemaLists: any[] = [];
import { MovieCard } from "../../components/MovieCard";
import { SectionLabel } from "../../components/SectionLabel";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Archive | Monoverse Cinema",
  description: "Classic cinema and historical retrospectives.",
};

export default function ArchivePage() {
  const classicMovies = allMovies.filter((m) => m.lifecycle === "Archive");

  return (
    <div className="bg-background pt-[120px] md:pt-[160px] pb-[80px]">
      <section className="max-w-[1440px] mx-auto px-[24px] md:px-[64px] mb-[80px] text-center">
        <h1 className="font-headline text-[48px] md:text-[80px] leading-[1] text-foreground mb-[24px]">Archive</h1>
        <p className="font-body text-[20px] text-text-secondary max-w-[600px] mx-auto">
          Classic cinema and historical retrospectives.
        </p>
      </section>

      {classicMovies.length > 0 && (
        <section className="max-w-[1440px] mx-auto px-[24px] md:px-[64px] mb-[120px]">
          <SectionLabel label="Classic Cinema" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[24px]">
            {classicMovies.map((movie) => (
              <MovieCard
                key={movie.slug}
                title={movie.title}
                poster={movie.poster}
                releaseStatus="Classic"
                genres={movie.genres}
                platform={movie.platform || "Archive"}
                href={`/cinema/movie/${movie.slug}`}
              />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
