export function SectionLabel({ label }: { label: string }) {
  return (
    <div className="mb-[40px] md:mb-[56px] text-center md:text-left">
      <span className="section-label">{label}</span>
    </div>
  );
}
