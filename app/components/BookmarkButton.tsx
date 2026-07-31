"use client";

import { useState, useEffect } from "react";
import { Bookmark } from "lucide-react";

interface BookmarkButtonProps {
  slug: string;
  showLabel?: boolean;
}

export function BookmarkButton({ slug, showLabel = false }: BookmarkButtonProps) {
  const [isBookmarked, setIsBookmarked] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem(`bookmark-${slug}`);
    if (saved) setIsBookmarked(true);
  }, [slug]);

  const toggleBookmark = () => {
    if (isBookmarked) {
      localStorage.removeItem(`bookmark-${slug}`);
      setIsBookmarked(false);
    } else {
      localStorage.setItem(`bookmark-${slug}`, "true");
      setIsBookmarked(true);
    }
  };

  if (showLabel) {
    return (
      <button
        onClick={toggleBookmark}
        className="flex items-center gap-2 px-4 py-3 font-ui text-sm font-medium rounded-full border border-border hover:border-bronze transition-colors duration-300 text-text-secondary"
      >
        <Bookmark size={16} fill={isBookmarked ? "currentColor" : "none"} />
        {isBookmarked ? "Saved" : "Save"}
      </button>
    );
  }

  return (
    <button
      onClick={toggleBookmark}
      className="text-text-secondary hover:text-bronze transition-colors"
      aria-label="Bookmark article"
    >
      <Bookmark size={18} fill={isBookmarked ? "currentColor" : "none"} />
    </button>
  );
}
