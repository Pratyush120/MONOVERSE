"use client";

import { StatusBadge, SubmissionStatus } from "../../../components/write/StatusBadge";

export default function SubmissionsPage() {
  const submissions: { title: string; desk: string; date: string; status: SubmissionStatus }[] = [
    { title: "The Philosophy of Dune's Sandworms", desk: "Cinema", date: "Oct 28, 2024", status: "Under Review" },
    { title: "Why We Crave Dystopia", desk: "Essays", date: "Oct 15, 2024", status: "Revision Requested" },
    { title: "The Architecture of Silence", desk: "Essays", date: "Sep 10, 2024", status: "Published" },
    { title: "Against Optimization", desk: "Technology", date: "Aug 02, 2024", status: "Rejected" },
  ];

  return (
    <div className="p-[24px] md:p-[64px] max-w-[1200px] mx-auto">
      <div className="mb-[48px] border-b border-glass-border-light pb-[24px]">
        <h1 className="font-display text-[40px] text-foreground">Submissions</h1>
        <p className="font-body text-[16px] text-text-secondary mt-[8px]">Track the status of your submitted manuscripts.</p>
      </div>

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
            {submissions.map((sub, idx) => (
              <tr key={idx} className="hover:bg-glass-overlay transition-colors group">
                <td className="p-[16px] font-medium text-foreground">{sub.title}</td>
                <td className="p-[16px] text-text-secondary">{sub.desk}</td>
                <td className="p-[16px] text-text-secondary font-mono text-[13px]">{sub.date}</td>
                <td className="p-[16px]"><StatusBadge status={sub.status} /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
