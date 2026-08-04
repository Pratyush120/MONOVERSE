import { Metadata } from "next";
import { 
  getFeaturedCinemaContent, 
  getLatestCinemaContent, 
  getMoviesByStatus, 
  getCinemaContentByType, 
  getCinemaLists, 
  getCinemaPeople 
} from "@/lib/actions/cinema";
import { EssayCard } from "../components/EssayCard";
import { SectionLabel } from "../components/SectionLabel";
import { MovieCard } from "../components/MovieCard";
import { ComingSoonCard } from "../components/ComingSoonCard";
import { CollectionCard } from "../components/CollectionCard";
import { PeopleCard } from "../components/PeopleCard";
import { ReviewCard } from "../components/ReviewCard";
import { CommunityCard } from "../components/CommunityCard";
import { SubmissionSection } from "../components/SubmissionSection";
import { Newsletter } from "../components/Newsletter";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cinema | Monoverse",
  description: "An independent editorial publication studying film as art, history, and philosophy.",
};

export default async function CinemaPage() {
  const featured = await getFeaturedCinemaContent();
  const latest = await getLatestCinemaContent(4);
  const nowShowing = await getMoviesByStatus("Now Showing", 4);
  const comingSoon = await getMoviesByStatus("Coming Soon", 2);
  const reviews = await getCinemaContentByType("review", 4);
  const features = await getCinemaContentByType("feature", 4);
  const lists = await getCinemaLists(2);
  const people = await getCinemaPeople(2);
  const community = await getCinemaContentByType("community", 4);

  return (
    <div className="bg-background pt-[120px] md:pt-[160px] pb-[80px]">
      {/* 1. HERO */}
      <section className="max-w-[1440px] mx-auto px-[24px] md:px-[64px] mb-[80px] md:mb-[120px] text-center">
        <h1 className="font-headline text-[64px] md:text-[96px] lg:text-[120px] leading-[1] text-foreground mb-[32px] tracking-tight">
          Cinema
        </h1>
        <p className="font-body text-[20px] md:text-[24px] leading-[1.6] text-text-secondary max-w-[700px] mx-auto">
          An independent editorial publication studying film as art, history, and philosophy.
        </p>
      </section>

      {/* 2. FEATURED STORY */}
      {featured && (
        <section className="max-w-[1440px] mx-auto px-[24px] md:px-[64px] mb-[120px]">
          <SectionLabel label="Featured Story" />
          <EssayCard
            slug={`/cinema/article/${featured.slug}`}
            title={featured.title}
            description={featured.description}
            author={featured.author}
            image={featured.image}
            date={featured.date}
            readTime={featured.readingTime.text}
            category={featured.editorialType}
            variant="featured"
          />
        </section>
      )}

      {/* 3. LATEST */}
      {latest.length > 0 && (
        <section className="bg-surface-low py-[80px] md:py-[120px] mb-[120px]">
          <div className="max-w-[1440px] mx-auto px-[24px] md:px-[64px]">
            <SectionLabel label="Latest" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[48px] md:gap-[64px]">
              {latest.map((article) => (
                <EssayCard
                  key={article.slug}
                  slug={`/cinema/article/${article.slug}`}
                  title={article.title}
                  description={article.description}
                  author={article.author}
                  image={article.image}
                  date={article.date}
                  readTime={article.readingTime.text}
                  category={article.editorialType}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 4. NOW SHOWING */}
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
                href={`/cinema/movie/${movie.slug}`}
              />
            ))}
          </div>
        </section>
      )}

      {/* 5. COMING SOON */}
      {comingSoon.length > 0 && (
        <section className="max-w-[1440px] mx-auto px-[24px] md:px-[64px] mb-[120px]">
          <SectionLabel label="Coming Soon" />
          <div className="flex flex-col gap-[32px]">
            {comingSoon.map((movie) => (
              <ComingSoonCard
                key={movie.slug}
                title={movie.title}
                poster={movie.poster}
                releaseDate={movie.releaseDate ? new Date(movie.releaseDate).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" }) : "TBA"}
                synopsis={movie.synopsis}
                director={movie.director}
                cast={movie.cast || []}
                href={`/cinema/movie/${movie.slug}`}
              />
            ))}
          </div>
        </section>
      )}

      {/* 6. REVIEWS & 7. FEATURES */}
      <section className="bg-surface-low py-[80px] md:py-[120px] mb-[120px]">
        <div className="max-w-[1440px] mx-auto px-[24px] md:px-[64px]">
          {reviews.length > 0 && (
            <div className="mb-[120px]">
              <SectionLabel label="Reviews" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-[48px] md:gap-[64px]">
                {reviews.map((article) => (
                  <ReviewCard
                    key={article.slug}
                    slug={`/cinema/article/${article.slug}`}
                    title={article.title}
                    description={article.description}
                    author={article.author}
                    image={article.image}
                    date={article.date}
                    readTime={article.readingTime.text}
                    variant="compact"
                  />
                ))}
              </div>
            </div>
          )}

          {features.length > 0 && (
            <div>
              <SectionLabel label="Features" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-[48px] md:gap-[64px]">
                {features.map((article) => (
                  <EssayCard
                    key={article.slug}
                    slug={`/cinema/article/${article.slug}`}
                    title={article.title}
                    description={article.description}
                    author={article.author}
                    image={article.image}
                    date={article.date}
                    readTime={article.readingTime.text}
                    category="Feature"
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* 8. LISTS */}
      {lists.length > 0 && (
        <section className="max-w-[1440px] mx-auto px-[24px] md:px-[64px] mb-[120px]">
          <SectionLabel label="Curated Lists" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[48px]">
            {lists.map((list) => (
              <CollectionCard
                key={list.slug}
                title={list.title}
                overview={list.description}
                itemCount={list.movies.length}
                readTime="Various"
                image={list.image}
                href={`/cinema/list/${list.slug}`}
              />
            ))}
          </div>
        </section>
      )}

      {/* 9. PEOPLE */}
      {people.length > 0 && (
        <section className="max-w-[1440px] mx-auto px-[24px] md:px-[64px] mb-[120px]">
          <SectionLabel label="People" />
          <div className="flex flex-col gap-[48px]">
            {people.map((person) => (
              <PeopleCard
                key={person.slug}
                name={person.name}
                portrait={person.portrait}
                bio={person.bio}
                role={person.role}
                signatureStyle={person.signatureStyle || ""}
                keyWorks={person.keyWorks || []}
                href={`/cinema/person/${person.slug}`}
              />
            ))}
          </div>
        </section>
      )}

      {/* 10. COMMUNITY */}
      {community.length > 0 && (
        <section className="bg-surface-low py-[80px] md:py-[120px] mb-[120px]">
          <div className="max-w-[1440px] mx-auto px-[24px] md:px-[64px]">
            <SectionLabel label="Community" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[48px] md:gap-[64px]">
              {community.map((article) => (
                <CommunityCard
                  key={article.slug}
                  slug={`/cinema/article/${article.slug}`}
                  title={article.title}
                  description={article.description}
                  author={article.author}
                  image={article.image}
                  date={article.date}
                  readTime={article.readingTime.text}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 11. WRITE FOR CINEMA */}
      <section className="max-w-[1440px] mx-auto px-[24px] md:px-[64px] mb-[120px]">
        <SubmissionSection />
      </section>

      {/* 12. NEWSLETTER */}
      <Newsletter />
    </div>
  );
}
