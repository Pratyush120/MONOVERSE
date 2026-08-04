"use client";

import { Share } from "lucide-react";

interface ShareButtonsProps {
  title: string;
  slug: string;
  showLabel?: boolean;
}

export function ShareButtons({ title, slug, showLabel = false }: ShareButtonsProps) {
  const handleShare = async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          title,
          url: `/essay/${slug}`,
        });
      } else {
        await navigator.clipboard.writeText(`${window.location.origin}/essay/${slug}`);
        alert("Link copied to clipboard!");
      }
    } catch (err) {
      console.error("Error sharing:", err);
    }
  };

  if (showLabel) {
    return (
      <button
        onClick={handleShare}
        className="flex items-center gap-2 px-4 py-3 font-ui text-sm font-medium rounded-full border border-border hover:border-bronze transition-colors duration-300 text-text-secondary"
      >
        <Share size={16} />
        Share
      </button>
    );
  }

  return (
    <button
      onClick={handleShare}
      className="text-text-secondary hover:text-bronze transition-colors"
      aria-label="Share article"
    >
      <Share size={18} />
    </button>
  );
}
