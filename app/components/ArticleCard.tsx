"use client";

import Link from "next/link";
import Image from "next/image";
import { useRef, useEffect } from "react";
import gsap from "gsap";

// ArticleCard — Antigravity 3D Glassmorphism Layout
// - Uses .glass-panel utility from globals.css
// - GSAP powered 3D mouse tracking tilt

interface ArticleCardProps {
  slug: string;
  title: string;
  description: string;
  category: string;
  author: string;
  readTime: string;
  date?: string;
  image: string;
  variant?: "default" | "featured" | "compact";
}

export function ArticleCard({
  slug,
  title,
  description,
  category,
  author,
  readTime,
  date = "Oct 24, 2023",
  image,
  variant = "default",
}: ArticleCardProps) {
  const cardRef = useRef<HTMLAnchorElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    const img = imageRef.current;
    if (!card) return;

    // We only want the 3D tilt on devices that support hover (not mobile)
    const isTouch = window.matchMedia("(hover: none)").matches;
    if (isTouch) return;

    // GSAP QuickSetters for performance
    const setRotX = gsap.quickSetter(card, "rotateX", "deg");
    const setRotY = gsap.quickSetter(card, "rotateY", "deg");
    const setImgScale = gsap.quickSetter(img, "scale");

    const handleMouseMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left; // x position within the element
      const y = e.clientY - rect.top; // y position within the element
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      // Calculate tilt limits (-10 to 10 degrees)
      const rotateX = ((y - centerY) / centerY) * -10;
      const rotateY = ((x - centerX) / centerX) * 10;

      setRotX(rotateX);
      setRotY(rotateY);
    };

    const handleMouseEnter = () => {
      gsap.to(card, { scale: 1.02, duration: 0.4, ease: "power2.out" });
      if (img) gsap.to(img, { scale: 1.05, duration: 0.4, ease: "power2.out" });
    };

    const handleMouseLeave = () => {
      gsap.to(card, {
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        duration: 0.8,
        ease: "elastic.out(1, 0.3)",
      });
      if (img) gsap.to(img, { scale: 1, duration: 0.8, ease: "power2.out" });
    };

    card.addEventListener("mousemove", handleMouseMove);
    card.addEventListener("mouseenter", handleMouseEnter);
    card.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      card.removeEventListener("mousemove", handleMouseMove);
      card.removeEventListener("mouseenter", handleMouseEnter);
      card.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  // Compact variant — horizontal layout
  if (variant === "compact") {
    return (
      <Link
        href={`/article/${slug}`}
        ref={cardRef}
        className="glass-panel group flex gap-[24px] p-[16px] items-center mb-[16px]"
      >
        <div className="glass-panel-inner w-[80px] h-[80px] flex-shrink-0">
          <Image
            ref={imageRef}
            src={image}
            alt={title}
            width={100}
            height={100}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col justify-center min-w-0 pr-[16px]">
          <span className="taxonomy-tag mb-[4px] block">{category}</span>
          <h3 className="font-display text-[20px] font-normal leading-[1.3] text-foreground mb-[4px]">
            {title}
          </h3>
          <div className="flex items-center gap-[12px] font-meta text-[10px] text-text-secondary uppercase tracking-[0.12em]">
            <span>{author}</span>
            <span className="text-outline-variant">·</span>
            <span>{readTime}</span>
          </div>
        </div>
      </Link>
    );
  }

  // Featured variant — full width glass card
  if (variant === "featured") {
    return (
      <Link
        href={`/article/${slug}`}
        ref={cardRef}
        className="glass-panel group flex flex-col md:flex-row p-[16px] md:p-[24px] gap-[24px] items-center"
      >
        <div className="glass-panel-inner md:w-[60%] aspect-[16/10] flex-shrink-0 w-full relative">
          <Image
            ref={imageRef}
            src={image}
            alt={title}
            fill
            className="object-cover"
          />
        </div>
        <div className="md:w-[40%] flex flex-col justify-center py-[24px] md:pr-[24px] w-full transform-style-3d">
          <span className="taxonomy-tag mb-[16px] block">{category}</span>
          <h3 className="font-display text-[32px] md:text-[40px] font-normal leading-[1.15] tracking-[-0.01em] text-foreground mb-[16px]">
            {title}
          </h3>
          <p className="font-body text-[16px] md:text-[17px] leading-[1.75] text-text-secondary mb-[24px]">{description}</p>
          <div className="flex items-center gap-[12px] font-meta text-[10px] text-text-secondary uppercase tracking-[0.12em] mt-auto">
            <span>{author}</span>
            <span className="text-outline-variant">·</span>
            <span>{readTime}</span>
            <span className="text-outline-variant">·</span>
            <span>{date}</span>
          </div>
        </div>
      </Link>
    );
  }

  // Default variant — vertical card
  return (
    <Link
      href={`/article/${slug}`}
      ref={cardRef}
      className="glass-panel group flex flex-col h-full p-[16px]"
    >
      <div className="glass-panel-inner aspect-[4/3] w-full relative mb-[20px]">
        <Image
          ref={imageRef}
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      <div className="flex flex-col flex-1 px-[8px] pb-[8px]">
        <span className="taxonomy-tag mb-[12px] block">{category}</span>
        <h3 className="font-display text-[24px] md:text-[26px] font-normal leading-[1.25] tracking-[-0.005em] text-foreground mb-[12px]">
          {title}
        </h3>
        <p className="font-body text-[15px] leading-[1.7] text-text-secondary mb-[24px] flex-1">{description}</p>
        <div className="flex items-center gap-[12px] font-meta text-[10px] text-text-secondary uppercase tracking-[0.12em] pt-[16px] border-t border-glass-border-light mt-auto">
          <span>{author}</span>
          <span className="text-outline-variant">·</span>
          <span>{readTime}</span>
        </div>
      </div>
    </Link>
  );
}
