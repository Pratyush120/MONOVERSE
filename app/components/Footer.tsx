import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-border mt-20 py-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-3">
          <div className="w-6 h-6 rounded-full border-2 border-bronze flex items-center justify-center">
            <div className="w-1.5 h-1.5 rounded-full bg-bronze" />
          </div>
          <span className="font-display font-semibold text-lg text-foreground tracking-tight">Monoverse</span>
        </div>
        <div className="flex gap-6 text-sm font-ui text-text-secondary">
          <Link href="/about" className="hover:text-bronze transition-colors">About</Link>
          <Link href="/archive" className="hover:text-bronze transition-colors">Archive</Link>
          <Link href="/terms" className="hover:text-bronze transition-colors">Terms</Link>
          <Link href="/privacy" className="hover:text-bronze transition-colors">Privacy</Link>
        </div>
        <div className="font-mono text-xs text-text-secondary">
          &copy; {new Date().getFullYear()} Monoverse. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
