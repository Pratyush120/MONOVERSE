import { getCinemaContentByType } from "@/lib/actions/cinema";
import { CommunityCard } from "../../components/CommunityCard";
import { SectionLabel } from "../../components/SectionLabel";
import { SubmissionSection } from "../../components/SubmissionSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Community | Monoverse Cinema",
  description: "Peer-reviewed essays, predictions, and discussions from the Monoverse community.",
};

export default async function CommunityPage() {
  const community = await getCinemaContentByType("community", 20);

  return (
    <div className="bg-background pt-[120px] md:pt-[160px] pb-[80px]">
      <section className="max-w-[1440px] mx-auto px-[24px] md:px-[64px] mb-[80px] text-center">
        <h1 className="font-headline text-[48px] md:text-[80px] leading-[1] text-foreground mb-[24px]">Community</h1>
        <p className="font-body text-[20px] text-text-secondary max-w-[600px] mx-auto">
          Peer-reviewed essays, predictions, and discussions from the Monoverse community.
        </p>
      </section>

      {community.length > 0 && (
        <section className="max-w-[1440px] mx-auto px-[24px] md:px-[64px] mb-[120px]">
          <SectionLabel label="Latest Submissions" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[48px]">
            {community.map((article) => (
              <CommunityCard
                key={article.slug}
                slug={`/essay/${article.slug}`}
                title={article.title}
                description={article.description}
                author={article.author}
                image={article.image}
                date={article.date}
                readTime={article.readingTime.text}
              />
            ))}
          </div>
        </section>
      )}

      <SubmissionSection />
    </div>
  );
}
