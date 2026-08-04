import { allCinemaArticles } from "contentlayer/generated";
import { EssayCard } from "../../components/EssayCard";
import { SectionLabel } from "../../components/SectionLabel";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Features | Monoverse Cinema",
  description: "Deep dives, editorial essays, and industry analysis.",
};

export default function FeaturesPage() {
  const features = allCinemaArticles.filter((a) => a.editorialType === "Feature");

  return (
    <div className="bg-background pt-[120px] md:pt-[160px] pb-[80px]">
      <section className="max-w-[1440px] mx-auto px-[24px] md:px-[64px] mb-[80px] text-center">
        <h1 className="font-headline text-[48px] md:text-[80px] leading-[1] text-foreground mb-[24px]">Features</h1>
        <p className="font-body text-[20px] text-text-secondary max-w-[600px] mx-auto">
          Deep dives, editorial essays, and industry analysis.
        </p>
      </section>

      {features.length > 0 && (
        <section className="max-w-[1440px] mx-auto px-[24px] md:px-[64px] mb-[120px]">
          <SectionLabel label="All Features" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[48px]">
            {features.map((feature) => (
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
              />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
