export default function CollectionDetailPage({ params }: { params: { slug: string } }) {
  return (
    <div className="pt-[160px] min-h-screen px-[24px] md:px-[64px] max-w-[1440px] mx-auto">
      <h1 className="font-display text-[48px] md:text-[64px] text-foreground mb-8">Collection: {params.slug}</h1>
    </div>
  );
}
