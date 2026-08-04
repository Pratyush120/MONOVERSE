"use client";

import { useState } from "react";

export function RichTextEditor() {
  const [content, setContent] = useState("");

  return (
    <div className="flex flex-col h-full border border-glass-border-light bg-black/40">
      {/* Toolbar */}
      <div className="flex items-center gap-[8px] p-[12px] border-b border-glass-border-light bg-glass-overlay">
        <button className="p-[8px] hover:bg-glass-overlay rounded-sm font-display text-[16px] w-[32px] h-[32px] flex items-center justify-center">B</button>
        <button className="p-[8px] hover:bg-glass-overlay rounded-sm font-body italic text-[16px] w-[32px] h-[32px] flex items-center justify-center">I</button>
        <div className="w-px h-[24px] bg-glass-border-light mx-[4px]" />
        <button className="p-[8px] hover:bg-glass-overlay rounded-sm font-display text-[16px] flex items-center justify-center px-[12px]">H2</button>
        <button className="p-[8px] hover:bg-glass-overlay rounded-sm font-display text-[14px] flex items-center justify-center px-[12px]">H3</button>
        <div className="w-px h-[24px] bg-glass-border-light mx-[4px]" />
        <button className="p-[8px] hover:bg-glass-overlay rounded-sm font-mono text-[14px] flex items-center justify-center px-[12px]">Quote</button>
        <button className="p-[8px] hover:bg-glass-overlay rounded-sm font-mono text-[14px] flex items-center justify-center px-[12px]">Link</button>
        
        <div className="ml-auto flex items-center gap-[16px]">
          <span className="font-mono text-[10px] uppercase tracking-[0.1em] text-text-secondary">
            {content.split(/\s+/).filter(word => word.length > 0).length} Words
          </span>
          <span className="font-mono text-[10px] uppercase tracking-[0.1em] text-green-400">
            Saved
          </span>
        </div>
      </div>

      {/* Editor Area (Mocked with textarea for now, would be Tiptap/ProseMirror) */}
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Start writing..."
        className="flex-1 w-full p-[32px] md:p-[48px] bg-transparent border-none outline-none resize-none font-body text-[18px] leading-[1.8] text-foreground placeholder:text-text-secondary/50"
      />
    </div>
  );
}
