import { redirect } from "next/navigation";

export default async function RedirectOldArticleRoute({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  redirect(`/essay/${resolvedParams.slug}`);
}
