"use client";

import { useState } from "react";

export function SubmissionForm({ onSubmit }: { onSubmit: () => void }) {
  const [agreed, setAgreed] = useState(false);

  return (
    <form className="space-y-[32px]" onSubmit={(e) => { e.preventDefault(); onSubmit(); }}>
      
      <div className="space-y-[8px]">
        <label className="font-label text-[10px] uppercase tracking-[0.2em] text-text-secondary block">Title</label>
        <input 
          type="text" 
          placeholder="The title of your manuscript"
          className="w-full bg-transparent border-b border-glass-border-light px-0 py-[12px] font-display text-[32px] text-foreground outline-none focus:border-bronze-accent transition-colors placeholder:text-text-secondary/30"
          required
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-[24px]">
        <div className="space-y-[8px]">
          <label className="font-label text-[10px] uppercase tracking-[0.2em] text-text-secondary block">Editorial Desk</label>
          <select className="w-full bg-black/40 border border-glass-border-light p-[12px] font-body text-[15px] text-foreground outline-none focus:border-bronze-accent transition-colors appearance-none" required>
            <option value="">Select Desk...</option>
            <option value="essays">Essays & Research</option>
            <option value="cinema">Cinema</option>
            <option value="community">Community</option>
          </select>
        </div>
        <div className="space-y-[8px]">
          <label className="font-label text-[10px] uppercase tracking-[0.2em] text-text-secondary block">Category</label>
          <select className="w-full bg-black/40 border border-glass-border-light p-[12px] font-body text-[15px] text-foreground outline-none focus:border-bronze-accent transition-colors appearance-none" required>
            <option value="">Select Category...</option>
            <option value="research">Research Article</option>
            <option value="cultural">Cultural Essay</option>
            <option value="review">Cinema Review</option>
            <option value="note">Community Note</option>
          </select>
        </div>
      </div>

      <div className="space-y-[8px]">
        <label className="font-label text-[10px] uppercase tracking-[0.2em] text-text-secondary block">Summary / Abstract</label>
        <textarea 
          placeholder="Provide a 2-3 sentence summary of your piece's core argument."
          className="w-full bg-black/40 border border-glass-border-light p-[16px] font-body text-[15px] text-foreground outline-none focus:border-bronze-accent transition-colors resize-none h-[120px] placeholder:text-text-secondary/50"
          required
        />
      </div>

      <div className="space-y-[8px]">
        <label className="font-label text-[10px] uppercase tracking-[0.2em] text-text-secondary block">Featured Image (Optional)</label>
        <div className="w-full border border-dashed border-glass-border-light p-[32px] text-center bg-black/20 hover:bg-glass-overlay transition-colors cursor-pointer">
          <p className="font-body text-[14px] text-text-secondary">Drag and drop an image, or <span className="text-bronze-accent">browse</span></p>
        </div>
      </div>

      <div className="border-t border-glass-border-light pt-[32px] mt-[48px]">
        <div className="space-y-[8px]">
          <label className="flex items-start gap-[16px] cursor-pointer">
            <input 
              type="checkbox" 
              checked={agreed}
              onChange={(e) => setAgreed(e.target.checked)}
              className="mt-[4px] w-[16px] h-[16px] accent-bronze-accent bg-transparent"
              required
            />
            <span className="font-body text-[14px] text-text-secondary leading-[1.6]">
              I confirm that this submission is my original work, has not been published elsewhere, and adheres to the Monoverse Editorial Standards regarding accuracy, plagiarism, and AI usage.
            </span>
          </label>
        </div>
      </div>
      
      <div className="pt-[24px]">
        <button 
          type="submit" 
          disabled={!agreed}
          className={`btn-primary w-full text-[14px] py-[16px] ${!agreed ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          Submit to Editorial Desk
        </button>
      </div>
    </form>
  );
}
