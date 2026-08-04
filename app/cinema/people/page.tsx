import { getCinemaPeople } from "@/lib/actions/cinema";
import { PeopleCard } from "../../components/PeopleCard";
import { SectionLabel } from "../../components/SectionLabel";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "People | Monoverse Cinema",
  description: "Directors, actors, writers, and the architects of cinema.",
};

export default async function PeoplePage() {
  const allCinemaPeople = await getCinemaPeople(50);
  
  return (
    <div className="bg-background pt-[120px] md:pt-[160px] pb-[80px]">
      <section className="max-w-[1440px] mx-auto px-[24px] md:px-[64px] mb-[80px] text-center">
        <h1 className="font-headline text-[48px] md:text-[80px] leading-[1] text-foreground mb-[24px]">People</h1>
        <p className="font-body text-[20px] text-text-secondary max-w-[600px] mx-auto">
          The architects of cinema.
        </p>
      </section>

      {allCinemaPeople.length > 0 && (
        <section className="max-w-[1440px] mx-auto px-[24px] md:px-[64px] mb-[120px]">
          <SectionLabel label="All Profiles" />
          <div className="flex flex-col gap-[48px]">
            {allCinemaPeople.map((person) => (
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
    </div>
  );
}
