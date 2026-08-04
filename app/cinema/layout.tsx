import { CinemaNav } from "../components/CinemaNav";

export default function CinemaLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative">
      <CinemaNav />
      <div className="pt-[48px]">
        {children}
      </div>
    </div>
  );
}
