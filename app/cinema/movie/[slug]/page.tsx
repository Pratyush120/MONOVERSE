import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getMovieBySlug, getCoverageForMovie, getAllMovies } from "@/lib/actions/cinema";
import { SectionLabel } from "../../../components/SectionLabel";
import { EssayCard } from "../../../components/EssayCard";
import { ReviewCard } from "../../../components/ReviewCard";
import { CommunityCard } from "../../../components/CommunityCard";
import { ImageReveal } from "../../../components/ImageReveal";
import { Newsletter } from "../../../components/Newsletter";
import Link from "next/link";

interface MoviePageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  const allMovies = await getAllMovies();
  return allMovies.map((movie) => ({
    slug: movie.slug,
  }));
}

export async function generateMetadata({ params }: MoviePageProps): Promise<Metadata> {
  const p = await params;
  const movie = await getMovieBySlug(p.slug);
  if (!movie) return { title: "Not Found" };

  return {
    title: `${movie.title} | Monoverse Cinema`,
    description: movie.synopsis,
  };
}

export default async function MoviePage({ params }: MoviePageProps) {
  const p = await params;
  const movie = await getMovieBySlug(p.slug);
  if (!movie) notFound();

  // Related coverage
  const coverage = await getCoverageForMovie(p.slug);
  const reviews = coverage.filter(a => a.editorialType === "Review");
  const features = coverage.filter(a => a.editorialType === "Feature");
  const community = coverage.filter(a => a.editorialType === "Community");

  const isBeforeRelease = movie.lifecycle === "Before Release";
  const isReleaseWeek = movie.lifecycle === "Release Week";
  const isAfterRelease = movie.lifecycle === "After Release";
  const isArchive = movie.lifecycle === "Archive";

  // SEO JSON-LD
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Movie",
    "name": movie.title,
    "image": movie.poster,
    "description": movie.synopsis,
    "director": {
      "@type": "Person",
      "name": movie.director
    },
    "datePublished": movie.releaseDate,
    "genre": movie.genres
  };

  return (
    <div className="bg-background pt-[120px] md:pt-[160px] pb-[80px]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <article className="max-w-[1440px] mx-auto px-[24px] md:px-[64px] mb-[120px]">
        {/* Movie Header block */}
        <div className="flex flex-col lg:flex-row gap-[48px] md:gap-[80px]">
          {/* Poster */}
          <div className="w-[240px] md:w-[320px] lg:w-[400px] flex-shrink-0 aspect-[2/3] mx-auto lg:mx-0">
            <div className="w-full h-full glass-panel overflow-hidden">
              <ImageReveal src={movie.poster} alt={movie.title} width={800} height={1200} />
            </div>
          </div>
          
          {/* Metadata */}
          <div className="flex-grow flex flex-col justify-center">
            <span className="font-label text-[12px] uppercase tracking-[0.25em] text-bronze-accent block mb-[16px]">
              {movie.status}
            </span>
            <h1 className="font-headline text-[48px] md:text-[64px] lg:text-[80px] leading-[1.1] text-foreground mb-[24px]">
              {movie.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-[16px] mb-[32px] font-meta text-[11px] uppercase tracking-[0.15em] text-text-secondary">
              <span>{movie.genres.join(" · ")}</span>
              <span className="w-[4px] h-[4px] rounded-full bg-outline-variant"></span>
              <span>Director: {movie.director}</span>
              <span className="w-[4px] h-[4px] rounded-full bg-outline-variant"></span>
              <span>{movie.platform || "Theaters"}</span>
            </div>

            <div className="font-body text-[18px] leading-[1.75] text-text-secondary mb-[48px] max-w-[700px]">
              {movie.synopsis}
            </div>

            {movie.cast && movie.cast.length > 0 && (
              <div className="mb-[48px]">
                <h4 className="font-meta text-[11px] uppercase tracking-[0.2em] text-foreground mb-[12px]">Starring</h4>
                <p className="font-body text-[16px] text-text-secondary">{movie.cast.join(", ")}</p>
              </div>
            )}

            {movie.trailerUrl && (
              <Link href={movie.trailerUrl} target="_blank" className="btn-primary self-start text-[12px] py-[12px] px-[32px]">
                Watch Trailer
              </Link>
            )}
          </div>
        </div>
      </article>

      {/* Dynamic Lifecycle Sections */}
      
      {isBeforeRelease && (
        <section className="bg-surface-low py-[80px] md:py-[120px]">
          <div className="max-w-[1440px] mx-auto px-[24px] md:px-[64px]">
            <SectionLabel label="Predictions & Discussion" />
            <div className="glass-panel p-[48px] border border-bronze-accent/20 text-center">
              <h3 className="font-display text-[24px] text-foreground mb-[16px]">Anticipation is building.</h3>
              <p className="font-body text-[16px] text-text-secondary max-w-[600px] mx-auto mb-[32px]">
                The editorial team is preparing our coverage. Join the Monoverse community in discussing predictions and expectations before the official release.
              </p>
              <Link href="/write" className="btn-primary inline-block">Join Discussion</Link>
            </div>
          </div>
        </section>
      )}

      {isReleaseWeek && (
        <div className="flex flex-col gap-[120px]">
          {reviews.length > 0 && (
            <section className="max-w-[1440px] mx-auto px-[24px] md:px-[64px]">
              <SectionLabel label="Release Week Reviews" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-[48px]">
                {reviews.map(review => (
                  <ReviewCard
                    key={review.slug}
                    slug={`/cinema/article/${review.slug}`}
                    title={review.title}
                    description={review.description}
                    author={review.author}
                    image={review.image}
                    date={review.date}
                    readTime={review.readingTime.text}
                    variant="compact"
                  />
                ))}
              </div>
            </section>
          )}
          {community.length > 0 && (
            <section className="bg-surface-low py-[80px] md:py-[120px]">
              <div className="max-w-[1440px] mx-auto px-[24px] md:px-[64px]">
                <SectionLabel label="Spoiler-Free Community Reactions" />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-[48px]">
                  {community.map(comm => (
                    <CommunityCard
                      key={comm.slug}
                      slug={`/cinema/article/${comm.slug}`}
                      title={comm.title}
                      description={comm.description}
                      author={comm.author}
                      image={comm.image}
                      date={comm.date}
                      readTime={comm.readingTime.text}
                    />
                  ))}
                </div>
              </div>
            </section>
          )}
        </div>
      )}

      {(isAfterRelease || isArchive) && (
        <div className="flex flex-col gap-[120px]">
          {isArchive && (
            <section className="max-w-[1440px] mx-auto px-[24px] md:px-[64px] text-center">
              <span className="inline-block border border-bronze-accent/30 text-bronze-accent px-[16px] py-[8px] font-label text-[12px] uppercase tracking-[0.2em] rounded-full mb-[48px]">
                Monoverse Cinema Archive
              </span>
            </section>
          )}

          {reviews.length > 0 && (
            <section className="max-w-[1440px] mx-auto px-[24px] md:px-[64px]">
              <SectionLabel label="Editorial Reviews" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-[48px]">
                {reviews.map(review => (
                  <ReviewCard
                    key={review.slug}
                    slug={`/cinema/article/${review.slug}`}
                    title={review.title}
                    description={review.description}
                    author={review.author}
                    image={review.image}
                    date={review.date}
                    readTime={review.readingTime.text}
                    variant="compact"
                  />
                ))}
              </div>
            </section>
          )}

          {features.length > 0 && (
            <section className="bg-surface-low py-[80px] md:py-[120px]">
              <div className="max-w-[1440px] mx-auto px-[24px] md:px-[64px]">
                <SectionLabel label={isArchive ? "Retrospective Analysis" : "Deep Dives & Analysis"} />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-[48px]">
                  {features.map(feature => (
                    <EssayCard
                      key={feature.slug}
                      slug={`/cinema/article/${feature.slug}`}
                      title={feature.title}
                      description={feature.description}
                      author={feature.author}
                      image={feature.image}
                      date={feature.date}
                      readTime={feature.readingTime.text}
                      category="Feature"
                      variant="compact"
                    />
                  ))}
                </div>
              </div>
            </section>
          )}

          {community.length > 0 && (
            <section className="max-w-[1440px] mx-auto px-[24px] md:px-[64px]">
              <SectionLabel label={isArchive ? "Legacy Discussion" : "Community Consensus"} />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-[48px]">
                {community.map(comm => (
                  <CommunityCard
                    key={comm.slug}
                    slug={`/cinema/article/${comm.slug}`}
                    title={comm.title}
                    description={comm.description}
                    author={comm.author}
                    image={comm.image}
                    date={comm.date}
                    readTime={comm.readingTime.text}
                  />
                ))}
              </div>
            </section>
          )}
        </div>
      )}

      {/* NEWSLETTER */}
      <div className="mt-[120px]">
        <Newsletter />
      </div>
    </div>
  );
}
