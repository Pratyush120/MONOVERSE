"use client";

import Link from "next/link";
import { StatusBadge } from "../../../components/write/StatusBadge";

export default function DraftsPage() {
  const drafts = [
    { title: "The Myth of Meritocracy in Silicon Valley", desk: "Technology", lastEdited: "2 hours ago" },
    { title: "Nolan's Obsession with Time", desk: "Cinema", lastEdited: "3 days ago" },
    { title: "The Aesthetics of Brutalism", desk: "Essays", lastEdited: "1 week ago" },
  ];

  return (
    <div className="p-[24px] md:p-[64px] max-w-[1200px] mx-auto">
      <div className="flex justify-between items-end mb-[48px] border-b border-glass-border-light pb-[24px]">
        <div>
          <h1 className="font-display text-[40px] text-foreground">My Drafts</h1>
        </div>
        <Link href="/write/studio/editor" className="btn-primary text-[12px] py-[12px] px-[24px]">
          New Draft
        </Link>
      </div>

      <div className="glass-panel overflow-hidden">
        <table className="w-full text-left font-body">
          <thead>
            <tr className="border-b border-glass-border-light text-text-secondary font-mono text-[11px] uppercase tracking-[0.1em]">
              <th className="p-[16px] font-normal">Title</th>
              <th className="p-[16px] font-normal">Desk</th>
              <th className="p-[16px] font-normal">Last Edited</th>
              <th className="p-[16px] font-normal">Status</th>
              <th className="p-[16px] font-normal">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-glass-border-light text-[15px]">
            {drafts.map((draft, idx) => (
              <tr key={idx} className="hover:bg-glass-overlay transition-colors group">
                <td className="p-[16px] font-medium text-foreground">{draft.title}</td>
                <td className="p-[16px] text-text-secondary">{draft.desk}</td>
                <td className="p-[16px] text-text-secondary font-mono text-[13px]">{draft.lastEdited}</td>
                <td className="p-[16px]"><StatusBadge status="Draft" /></td>
                <td className="p-[16px]">
                  <Link href="/write/studio/editor" className="font-label text-[11px] uppercase tracking-[0.1em] text-bronze-accent hover:text-foreground">
                    Continue Writing →
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
