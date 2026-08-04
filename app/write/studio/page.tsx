"use client";

import Link from "next/link";
import { StatusBadge } from "../../components/write/StatusBadge";

export default function ContributorDashboard() {
  return (
    <div className="p-[24px] md:p-[64px] max-w-[1200px] mx-auto">
      <div className="flex justify-between items-end mb-[48px] border-b border-glass-border-light pb-[24px]">
        <div>
          <span className="section-label block mb-[8px]">Overview</span>
          <h1 className="font-display text-[40px] text-foreground">Welcome back, Pratyush</h1>
        </div>
        <Link href="/write/studio/editor" className="btn-primary text-[12px] py-[12px] px-[24px]">
          New Submission
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-[24px] mb-[64px]">
        <div className="glass-panel p-[24px]">
          <h4 className="font-mono text-[11px] uppercase tracking-[0.1em] text-text-secondary mb-[8px]">Published</h4>
          <span className="font-display text-[48px] leading-none text-foreground">12</span>
        </div>
        <div className="glass-panel p-[24px]">
          <h4 className="font-mono text-[11px] uppercase tracking-[0.1em] text-text-secondary mb-[8px]">In Review</h4>
          <span className="font-display text-[48px] leading-none text-bronze-accent">2</span>
        </div>
        <div className="glass-panel p-[24px]">
          <h4 className="font-mono text-[11px] uppercase tracking-[0.1em] text-text-secondary mb-[8px]">Drafts</h4>
          <span className="font-display text-[48px] leading-none text-foreground">4</span>
        </div>
      </div>

      <div className="mb-[48px]">
        <h3 className="font-display text-[24px] mb-[24px]">Recent Submissions</h3>
        <div className="glass-panel overflow-hidden">
          <table className="w-full text-left font-body">
            <thead>
              <tr className="border-b border-glass-border-light text-text-secondary font-mono text-[11px] uppercase tracking-[0.1em]">
                <th className="p-[16px] font-normal">Title</th>
                <th className="p-[16px] font-normal">Desk</th>
                <th className="p-[16px] font-normal">Date Submitted</th>
                <th className="p-[16px] font-normal">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-glass-border-light text-[15px]">
              <tr className="hover:bg-glass-overlay transition-colors">
                <td className="p-[16px] font-medium text-foreground">The Philosophy of Dune's Sandworms</td>
                <td className="p-[16px] text-text-secondary">Cinema</td>
                <td className="p-[16px] text-text-secondary font-mono text-[13px]">Oct 28, 2024</td>
                <td className="p-[16px]"><StatusBadge status="Under Review" /></td>
              </tr>
              <tr className="hover:bg-glass-overlay transition-colors">
                <td className="p-[16px] font-medium text-foreground">Why We Crave Dystopia</td>
                <td className="p-[16px] text-text-secondary">Essays</td>
                <td className="p-[16px] text-text-secondary font-mono text-[13px]">Oct 15, 2024</td>
                <td className="p-[16px]"><StatusBadge status="Revision Requested" /></td>
              </tr>
              <tr className="hover:bg-glass-overlay transition-colors">
                <td className="p-[16px] font-medium text-foreground">The Architecture of Silence</td>
                <td className="p-[16px] text-text-secondary">Essays</td>
                <td className="p-[16px] text-text-secondary font-mono text-[13px]">Sep 10, 2024</td>
                <td className="p-[16px]"><StatusBadge status="Published" /></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
