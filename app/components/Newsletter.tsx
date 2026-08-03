"use client";

// Newsletter — split layout, no decorative ornaments

export function Newsletter() {
  return (
    <section className="bg-surface-low border-t border-outline-variant py-[64px] md:py-[120px]">
      <div className="max-w-[1440px] mx-auto px-[24px] md:px-[64px]">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-[48px] lg:gap-[80px] items-center">

          {/* Left: Copy */}
          <div>
            <span className="section-label block mb-[24px]">The Monoverse Dispatch</span>
            <h2
              className="font-display font-normal text-foreground mb-[20px]"
              style={{ fontSize: "clamp(32px, 3vw, 48px)", lineHeight: "1.15", letterSpacing: "-0.015em" }}
            >
              Join the Inquiry
            </h2>
            <p className="font-body text-[17px] leading-[1.8] text-text-secondary">
              New essays, dispatches, and marginalia — delivered weekly.
              Connecting philosophy, science, history, and technology.
              No noise. No summaries. Only inquiry.
            </p>
          </div>

          {/* Right: Form */}
          <div>
            <form
              className="flex flex-col gap-0 mb-[16px]"
              onSubmit={(e) => e.preventDefault()}
            >
              <label className="font-meta text-[10px] uppercase tracking-[0.2em] text-outline mb-[12px]">
                Your email address
              </label>
              <div className="flex flex-col sm:flex-row gap-0">
                <input
                  type="email"
                  placeholder="you@example.com"
                  aria-label="Email address"
                  className="flex-1 bg-transparent border-0 border-b border-outline py-[12px] px-[4px] font-body text-[16px] text-foreground placeholder:text-outline focus:outline-none focus:border-bronze transition-colors duration-[180ms]"
                />
                <button
                  type="submit"
                  className="btn-primary sm:ml-[24px] mt-[16px] sm:mt-0 whitespace-nowrap"
                >
                  Subscribe
                </button>
              </div>
            </form>
            <p className="font-meta text-[10px] uppercase tracking-[0.15em] text-outline">
              Free · Unsubscribe anytime · No algorithmic curation
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
