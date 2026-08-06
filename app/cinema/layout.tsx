import { CinemaNav } from "../components/CinemaNav";

export default function CinemaLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative theme-seaside">
      <CinemaNav />
      <div className="pt-[48px]">
        {children}
      </div>
    </div>
  );
}
