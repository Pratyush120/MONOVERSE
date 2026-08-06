import { redirect } from "next/navigation";

export default async function CinemaListRedirect({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  redirect(`/collections/${resolvedParams.slug}`);
}
