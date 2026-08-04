const allCinemaArticles: any[] = [];
import { ReviewCard } from "../../components/ReviewCard";
import { SectionLabel } from "../../components/SectionLabel";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reviews | Monoverse Cinema",
  description: "Editorial reviews for movies, series, documentaries, and anime.",
};

export default function ReviewsPage() {
  const reviews = allCinemaArticles.filter((a) => a.editorialType === "Review");

  return (
    <div className="bg-background pt-[120px] md:pt-[160px] pb-[80px]">
      <section className="max-w-[1440px] mx-auto px-[24px] md:px-[64px] mb-[80px] text-center">
        <h1 className="font-headline text-[48px] md:text-[80px] leading-[1] text-foreground mb-[24px]">Reviews</h1>
        <p className="font-body text-[20px] text-text-secondary max-w-[600px] mx-auto">
          Analytical rigor over subjective ratings.
        </p>
      </section>

      {reviews.length > 0 && (
        <section className="max-w-[1440px] mx-auto px-[24px] md:px-[64px] mb-[120px]">
          <SectionLabel label="All Reviews" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[48px]">
            {reviews.map((review) => (
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
    </div>
  );
}
