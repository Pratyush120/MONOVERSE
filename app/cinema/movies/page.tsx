import { allMovies } from "contentlayer/generated";
import { MovieCard } from "../../components/MovieCard";
import { SectionLabel } from "../../components/SectionLabel";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Movies | Monoverse Cinema",
  description: "Browse all movies, now showing, streaming, and upcoming releases.",
};

export default function MoviesPage() {
  const nowShowing = allMovies.filter((m) => m.status === "Now Showing");
  const comingSoon = allMovies.filter((m) => m.status === "Coming Soon");

  return (
    <div className="bg-background pt-[120px] md:pt-[160px] pb-[80px]">
      <section className="max-w-[1440px] mx-auto px-[24px] md:px-[64px] mb-[80px] text-center">
        <h1 className="font-headline text-[48px] md:text-[80px] leading-[1] text-foreground mb-[24px]">Movies</h1>
        <p className="font-body text-[20px] text-text-secondary max-w-[600px] mx-auto">
          Browse the complete Monoverse Cinema database.
        </p>
      </section>

      {nowShowing.length > 0 && (
        <section className="max-w-[1440px] mx-auto px-[24px] md:px-[64px] mb-[120px]">
          <SectionLabel label="Now Showing" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[24px]">
            {nowShowing.map((movie) => (
              <MovieCard
                key={movie.slug}
                title={movie.title}
                poster={movie.poster}
                releaseStatus={movie.status}
                genres={movie.genres}
                platform={movie.platform || "Theaters"}
                communityReviewCount={movie.communityReviewCount}
                discussionCount={movie.discussionCount}
                href={`/cinema/movie/${movie.slug}`}
              />
            ))}
          </div>
        </section>
      )}

      {comingSoon.length > 0 && (
        <section className="max-w-[1440px] mx-auto px-[24px] md:px-[64px] mb-[120px]">
          <SectionLabel label="Coming Soon" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[24px]">
            {comingSoon.map((movie) => (
              <MovieCard
                key={movie.slug}
                title={movie.title}
                poster={movie.poster}
                releaseStatus={movie.status}
                genres={movie.genres}
                platform={movie.expectedPlatform || "Theaters"}
                href={`/cinema/movie/${movie.slug}`}
              />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
