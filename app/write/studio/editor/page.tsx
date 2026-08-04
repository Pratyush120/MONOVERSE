"use client";

import { useState } from "react";
import { RichTextEditor } from "../../../components/write/RichTextEditor";
import { SubmissionForm } from "../../../components/write/SubmissionForm";

export default function EditorPage() {
  const [activeTab, setActiveTab] = useState<"write" | "metadata">("write");
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (isSubmitted) {
    return (
      <div className="p-[24px] md:p-[120px] max-w-[1200px] mx-auto text-center h-full flex flex-col items-center justify-center">
        <h1 className="font-display text-[48px] text-foreground mb-[24px]">Submission Received</h1>
        <p className="font-body text-[18px] text-text-secondary max-w-[600px] mb-[48px]">
          Your manuscript has been sent to the editorial desk. You can track its status in the Submissions dashboard. Initial review typically takes 14-21 days.
        </p>
        <button 
          onClick={() => window.location.href = '/write/studio/submissions'}
          className="btn-primary text-[14px] py-[16px] px-[40px]"
        >
          View My Submissions
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full bg-background relative h-[calc(100vh-80px)]">
      {/* Editor Header */}
      <div className="flex-shrink-0 flex justify-between items-center px-[24px] md:px-[64px] py-[16px] border-b border-glass-border-light bg-black/40 z-20">
        <div className="flex gap-[24px]">
          <button 
            onClick={() => setActiveTab("write")}
            className={`font-label text-[11px] uppercase tracking-[0.2em] transition-colors pb-[18px] -mb-[17px] ${activeTab === 'write' ? 'text-bronze-accent border-b-[2px] border-bronze-accent' : 'text-text-secondary hover:text-foreground border-b-[2px] border-transparent'}`}
          >
            Draft
          </button>
          <button 
            onClick={() => setActiveTab("metadata")}
            className={`font-label text-[11px] uppercase tracking-[0.2em] transition-colors pb-[18px] -mb-[17px] ${activeTab === 'metadata' ? 'text-bronze-accent border-b-[2px] border-bronze-accent' : 'text-text-secondary hover:text-foreground border-b-[2px] border-transparent'}`}
          >
            Metadata & Submit
          </button>
        </div>
        
        <div className="hidden md:flex gap-[16px]">
          <button className="font-label text-[11px] uppercase tracking-[0.1em] text-text-secondary hover:text-foreground px-[16px] py-[8px] border border-glass-border-light rounded-sm">
            Save as Draft
          </button>
        </div>
      </div>

      {/* Editor Content Area */}
      <div className="flex-1 overflow-y-auto w-full relative p-[0] md:p-[48px] flex justify-center">
        <div className={`w-full max-w-[900px] h-full ${activeTab === 'write' ? 'block' : 'hidden'}`}>
          <RichTextEditor />
        </div>
        
        <div className={`w-full max-w-[800px] ${activeTab === 'metadata' ? 'block' : 'hidden'} bg-black/40 p-[32px] md:p-[64px] border border-glass-border-light my-[24px]`}>
          <h2 className="font-display text-[32px] text-foreground mb-[32px] border-b border-glass-border-light pb-[16px]">
            Submission Details
          </h2>
          <SubmissionForm onSubmit={() => setIsSubmitted(true)} />
        </div>
      </div>
    </div>
  );
}
