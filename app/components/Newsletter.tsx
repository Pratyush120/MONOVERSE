"use client";

// Newsletter — Stitch Design
// Input: single-underline "engraved" style, not boxed
// Button: uppercase Libre Franklin book-label style, rectangular
// Section: ivory surface-low background, full-width

export function Newsletter() {
  return (
    <section className="bg-surface-low border-t border-outline-variant py-[64px] md:py-[120px]">
      <div className="max-w-[1440px] mx-auto px-[24px] md:px-[64px]">
        <div className="max-w-[640px] mx-auto text-center">
          
          {/* Bronze ornament */}
          <div className="text-bronze text-[20px] mb-[32px]">◆</div>
          
          {/* Label */}
          <div className="font-label text-[11px] font-[700] uppercase tracking-[0.2em] text-bronze mb-[16px]">
            The Monoverse Dispatch
          </div>
          
          {/* Headline — EB Garamond */}
          <h2
            className="font-display font-normal text-foreground mb-[20px]"
            style={{ fontSize: "clamp(32px, 3vw, 44px)", lineHeight: "1.2", letterSpacing: "-0.015em" }}
          >
            Join the Inquiry
          </h2>
          
          <p className="font-body text-[17px] leading-[1.75] text-text-secondary mb-[48px]">
            New essays, dispatches, and marginalia — delivered weekly.
            Connecting philosophy, science, history, and technology.
            No noise. No summaries. Only inquiry.
          </p>

          {/* Input — Stitch "engraved" underline style */}
          <form
            className="flex flex-col sm:flex-row gap-0 max-w-[480px] mx-auto mb-[20px]"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder="Your email address"
              aria-label="Email address"
              className="flex-1 bg-transparent border-0 border-b border-outline py-[12px] px-[4px] font-body text-[16px] text-foreground placeholder:text-outline focus:outline-none focus:border-bronze transition-colors duration-[180ms]"
            />
            <button
              type="submit"
              className="btn-primary sm:ml-[24px] mt-[16px] sm:mt-0 whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
          
          <p className="font-meta text-[10px] uppercase tracking-[0.15em] text-outline">
            Free &nbsp;·&nbsp; Unsubscribe anytime &nbsp;·&nbsp; No algorithmic curation
          </p>
          
        </div>
      </div>
    </section>
  );
}
