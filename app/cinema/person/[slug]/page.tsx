import { redirect } from "next/navigation";

export default async function CinemaPersonRedirect({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  redirect(`/author/${resolvedParams.slug}`);
}
