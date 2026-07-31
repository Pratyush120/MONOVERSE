export function Newsletter() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24">
      <div className="border border-border rounded-2xl p-8 md:p-16 text-center max-w-4xl mx-auto">
        <div className="w-12 h-12 rounded-full border-2 border-bronze flex items-center justify-center mx-auto mb-6">
          <div className="w-2 h-2 rounded-full bg-bronze" />
        </div>
        <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight mb-4">Join the Inquiry</h2>
        <p className="font-body text-lg text-text-secondary max-w-xl mx-auto mb-8">
          Monoverse arrives weekly with new essays connecting philosophy, science, history, and technology. No noise. No summaries. Only inquiry.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <input 
            type="email" 
            placeholder="Your email address" 
            className="flex-1 px-5 py-3 rounded-full border border-border bg-transparent font-ui text-sm focus:outline-none focus:border-bronze transition-colors"
          />
          <button className="px-8 py-3 bg-bronze text-white font-ui text-sm font-medium rounded-full hover:bg-bronze-dark transition-colors">
            Subscribe
          </button>
        </div>
        <p className="font-mono text-[10px] uppercase tracking-wider text-text-secondary mt-4">
          Free. Unsubscribe anytime. No algorithmic curation.
        </p>
      </div>
    </section>
  );
}
