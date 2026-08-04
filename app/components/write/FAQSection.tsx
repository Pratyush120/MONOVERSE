"use client";

import { useState } from "react";

export function FAQSection() {
  const faqs = [
    { question: "Who can contribute?", answer: "Anyone with a rigorous, well-researched, and original idea. We do not require formal credentials, only clear thinking and excellent writing." },
    { question: "Can students write?", answer: "Yes. We judge the work, not the author's academic standing." },
    { question: "Can I submit previously published work?", answer: "No. We only accept original, unpublished manuscripts. Exceptions are only made for translations of major works previously unavailable in English." },
    { question: "Can I edit my article later?", answer: "Once published, minor factual corrections can be requested via the editorial desk. Structural rewrites are not permitted in order to maintain the integrity of the archive." },
    { question: "How long does review take?", answer: "Initial review typically takes 14-21 days. If revisions are requested, the timeline depends on the author's turnaround." },
    { question: "Will I receive feedback?", answer: "If an article is rejected at the initial stage, we cannot always provide detailed feedback due to volume. If it reaches the revision stage, you will receive extensive notes." },
    { question: "Can I write anonymously?", answer: "We require authors to use their real names to maintain accountability and trust with our readers. Pseudonyms are rarely granted unless publishing under a real name poses a direct physical or professional threat." }
  ];

  return (
    <section className="py-[64px] md:py-[120px] relative z-10 px-[24px] max-w-[800px] mx-auto">
      <h2 className="font-display text-[32px] md:text-[48px] leading-[1.15] text-foreground mb-[48px] text-center">
        Frequently Asked Questions
      </h2>
      
      <div className="space-y-[16px]">
        {faqs.map((faq, idx) => (
          <FAQItem key={idx} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </section>
  );
}

function FAQItem({ question, answer }: { question: string, answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-glass-border-light bg-black/20 overflow-hidden">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center p-[24px] text-left hover:bg-glass-overlay transition-colors"
      >
        <span className="font-display text-[20px] text-foreground">{question}</span>
        <span className={`text-bronze-accent font-mono text-[24px] transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`}>
          +
        </span>
      </button>
      
      <div 
        className={`transition-all duration-300 ease-in-out px-[24px] overflow-hidden ${isOpen ? 'max-h-[200px] py-[24px] border-t border-glass-border-light' : 'max-h-0 py-0'}`}
      >
        <p className="font-body text-[16px] text-text-secondary leading-[1.6]">
          {answer}
        </p>
      </div>
    </div>
  );
}
