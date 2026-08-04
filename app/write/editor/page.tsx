"use client";

import { useState } from "react";
import { StatusBadge, SubmissionStatus } from "../../components/write/StatusBadge";

export default function EditorQueuePage() {
  const [selectedSubmission, setSelectedSubmission] = useState<number | null>(null);

  const incomingSubmissions = [
    { id: 1, title: "The Philosophy of Dune's Sandworms", author: "Pratyush Mohanty", desk: "Cinema", date: "Oct 28, 2024", status: "Submitted" as SubmissionStatus },
    { id: 2, title: "Algorithmic Determinism", author: "Sarah Jenkins", desk: "Technology", date: "Oct 27, 2024", status: "Submitted" as SubmissionStatus },
    { id: 3, title: "The Death of the Mall", author: "David Kim", desk: "Essays", date: "Oct 26, 2024", status: "Revision Requested" as SubmissionStatus },
    { id: 4, title: "A Review of Nosferatu", author: "Elena Rostova", desk: "Cinema", date: "Oct 25, 2024", status: "Under Review" as SubmissionStatus },
  ];

  return (
    <div className="flex h-full">
      {/* Queue List */}
      <div className={`flex-1 p-[24px] md:p-[64px] border-r border-glass-border-light overflow-y-auto ${selectedSubmission !== null ? 'hidden md:block md:w-1/2' : 'w-full'}`}>
        <div className="mb-[48px] border-b border-glass-border-light pb-[24px]">
          <h1 className="font-display text-[40px] text-foreground">Incoming Queue</h1>
          <p className="font-body text-[16px] text-text-secondary mt-[8px]">Review, assign, and manage new submissions.</p>
        </div>

        <div className="space-y-[16px]">
          {incomingSubmissions.map((sub) => (
            <div 
              key={sub.id} 
              onClick={() => setSelectedSubmission(sub.id)}
              className={`glass-panel p-[24px] cursor-pointer transition-all ${selectedSubmission === sub.id ? 'border-bronze-accent' : 'hover:border-bronze-accent/50'}`}
            >
              <div className="flex justify-between items-start mb-[16px]">
                <StatusBadge status={sub.status} />
                <span className="font-mono text-[11px] uppercase tracking-[0.1em] text-text-secondary">{sub.date}</span>
              </div>
              <h3 className="font-display text-[24px] text-foreground mb-[8px]">{sub.title}</h3>
              <div className="flex gap-[16px] font-mono text-[11px] uppercase tracking-[0.1em] text-text-secondary">
                <span>By {sub.author}</span>
                <span className="text-outline-variant">·</span>
                <span>{sub.desk} Desk</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Review Panel */}
      <div className={`flex-1 bg-black/40 overflow-y-auto ${selectedSubmission !== null ? 'block' : 'hidden'}`}>
        {selectedSubmission !== null ? (
          <div className="p-[24px] md:p-[64px]">
            <button 
              onClick={() => setSelectedSubmission(null)}
              className="md:hidden font-label text-[10px] uppercase tracking-[0.2em] text-text-secondary hover:text-foreground transition-colors flex items-center gap-[8px] mb-[32px]"
            >
              ← Back to Queue
            </button>
            
            <div className="mb-[48px]">
              <span className="font-label text-[10px] uppercase tracking-[0.2em] text-bronze-accent block mb-[16px]">Review Mode</span>
              <h2 className="font-display text-[40px] text-foreground mb-[16px]">The Philosophy of Dune's Sandworms</h2>
              <p className="font-body text-[16px] text-text-secondary leading-[1.6]">
                Author: Pratyush Mohanty • Category: Cinema Review
              </p>
            </div>

            <div className="glass-panel p-[32px] mb-[48px] bg-background">
              <p className="font-body text-[18px] leading-[1.8] text-foreground">
                (Manuscript text goes here. The editor can read the full text, highlight sections, and add internal notes.)
              </p>
            </div>

            <div className="space-y-[24px]">
              <h3 className="font-display text-[24px] text-foreground border-b border-glass-border-light pb-[16px]">Editorial Actions</h3>
              <textarea 
                placeholder="Leave internal notes or feedback for the author..."
                className="w-full bg-black/40 border border-glass-border-light p-[16px] font-body text-[15px] text-foreground outline-none focus:border-bronze-accent transition-colors resize-none h-[120px] placeholder:text-text-secondary/50"
              />
              <div className="flex gap-[16px] flex-wrap">
                <button className="btn-primary text-[12px] py-[12px] px-[24px]">
                  Request Revision
                </button>
                <button className="font-label text-[11px] uppercase tracking-[0.1em] text-green-400 border border-green-800/50 bg-green-900/10 hover:bg-green-900/30 transition-colors py-[12px] px-[24px]">
                  Accept & Schedule
                </button>
                <button className="font-label text-[11px] uppercase tracking-[0.1em] text-red-400 border border-red-800/50 bg-red-900/10 hover:bg-red-900/30 transition-colors py-[12px] px-[24px]">
                  Reject
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="h-full flex items-center justify-center text-text-secondary font-mono text-[12px] uppercase tracking-[0.1em]">
            Select a submission to review
          </div>
        )}
      </div>
    </div>
  );
}
