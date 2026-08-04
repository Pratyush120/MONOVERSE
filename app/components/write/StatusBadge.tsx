"use client";

export type SubmissionStatus = 
  | "Draft"
  | "Submitted"
  | "Under Review"
  | "Revision Requested"
  | "Accepted"
  | "Scheduled"
  | "Published"
  | "Rejected";

interface StatusBadgeProps {
  status: SubmissionStatus;
}

export function StatusBadge({ status }: StatusBadgeProps) {
  const getStyles = () => {
    switch (status) {
      case "Published":
      case "Accepted":
        return "bg-green-900/30 text-green-400 border-green-800";
      case "Under Review":
      case "Submitted":
        return "bg-blue-900/30 text-blue-400 border-blue-800";
      case "Revision Requested":
        return "bg-yellow-900/30 text-yellow-400 border-yellow-800";
      case "Rejected":
        return "bg-red-900/30 text-red-400 border-red-800";
      case "Draft":
      default:
        return "bg-gray-800/50 text-gray-400 border-gray-700";
    }
  };

  return (
    <span className={`inline-flex items-center px-[12px] py-[4px] rounded-full font-mono text-[10px] uppercase tracking-[0.1em] border ${getStyles()}`}>
      {status}
    </span>
  );
}
