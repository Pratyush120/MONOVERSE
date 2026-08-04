export default async function CollectionDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  return (
    <div className="max-w-[1440px] mx-auto px-[24px] md:px-[64px] py-32">
      <h1 className="font-display text-[48px] md:text-[64px] text-foreground mb-8">Collection: {resolvedParams.slug}</h1>
      <p className="font-body text-xl text-text-secondary">This curated collection is currently being assembled.</p>
    </div>
  );
}
