// Footer — Stitch Design
// "Printed in Digital Vellum" — archival, permanent
// Observatory Navy background option for depth
// Libre Franklin labels, bronze accents

import Link from "next/link";
import Image from "next/image";

const FOOTER_LINKS = [
  { label: "Colophon", href: "/about" },
  { label: "Ethos",    href: "/about" },
  { label: "Privacy",  href: "/privacy" },
  { label: "Curated Indices", href: "/archive" },
];

export function Footer() {
  return (
    <footer className="bg-background border-t border-outline-variant">
      {/* Main footer */}
      <div className="max-w-[1440px] mx-auto px-[64px] py-[80px]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[48px] items-start">
          
          {/* Brand */}
          <div>
            <div className="mb-[20px]">
              <Image
                src="/images/monoverselogo.svg"
                alt="Monoverse"
                width={120}
                height={32}
                className="h-[28px] w-auto opacity-70"
              />
            </div>
            <p className="font-body text-[14px] leading-[1.7] text-text-secondary max-w-[240px]">
              An independent research publication dedicated to understanding reality through
              philosophy, science, history, and civilization.
            </p>
          </div>
          
          {/* Navigation */}
          <div>
            <div className="font-label text-[10px] font-[700] uppercase tracking-[0.2em] text-outline mb-[20px]">
              Navigate
            </div>
            <nav className="flex flex-col gap-[12px]">
              {[
                { label: "Archive",      href: "/archive" },
                { label: "Philosophy",   href: "/category/philosophy" },
                { label: "Science",      href: "/category/science" },
                { label: "History",      href: "/category/history" },
                { label: "Technology",   href: "/category/technology" },
                { label: "The Marginalia", href: "/about" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="font-meta text-[12px] uppercase tracking-[0.1em] text-text-secondary hover:text-bronze transition-colors duration-[180ms]"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Publication info */}
          <div>
            <div className="font-label text-[10px] font-[700] uppercase tracking-[0.2em] text-outline mb-[20px]">
              Publication
            </div>
            <div className="space-y-[12px]">
              <div>
                <span className="font-meta text-[10px] uppercase tracking-[0.15em] text-outline block mb-[4px]">Founded</span>
                <span className="font-body text-[14px] text-text-secondary">2026</span>
              </div>
              <div>
                <span className="font-meta text-[10px] uppercase tracking-[0.15em] text-outline block mb-[4px]">Current Volume</span>
                <span className="font-body text-[14px] text-text-secondary">Volume I — Autumn Equinox</span>
              </div>
              <div>
                <span className="font-meta text-[10px] uppercase tracking-[0.15em] text-outline block mb-[4px]">Format</span>
                <span className="font-body text-[14px] text-text-secondary">Digital &amp; Independent</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Colophon line — Stitch spec: "Printed in Digital Vellum" */}
      <div className="border-t border-outline-variant">
        <div className="max-w-[1440px] mx-auto px-[64px] py-[24px] flex flex-col sm:flex-row items-center justify-between gap-[16px]">
          <div className="flex items-center gap-[24px]">
            {FOOTER_LINKS.map((link, i) => (
              <span key={link.href} className="flex items-center gap-[24px]">
                <Link
                  href={link.href}
                  className="font-meta text-[10px] uppercase tracking-[0.12em] text-outline hover:text-bronze transition-colors duration-[180ms]"
                >
                  {link.label}
                </Link>
                {i < FOOTER_LINKS.length - 1 && (
                  <span className="text-outline-variant text-[8px]">◆</span>
                )}
              </span>
            ))}
          </div>
          <div className="font-meta text-[10px] uppercase tracking-[0.1em] text-outline">
            © {new Date().getFullYear()} MKKXV Monoverse Publishing House.{" "}
            <span className="italic normal-case tracking-normal font-body">Printed in Digital Vellum.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
