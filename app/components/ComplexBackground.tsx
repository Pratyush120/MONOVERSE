"use client";

import { useEffect, useRef } from "react";

export function ComplexBackground() {
  const grainRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const radialRef = useRef<HTMLDivElement>(null);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      {/* Layer 1: Solid charcoal base */}
      <div className="absolute inset-0 bg-[#111111]" />

      {/* Layer 2: Paper grain — drifts at 50s cycle */}
      <div
        ref={grainRef}
        className="absolute inset-[-20px]"
        style={{
          animation: "drift-1 50s ease-in-out infinite",
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "256px 256px",
          opacity: 0.025,
        }}
      />

      {/* Layer 3: Celestial / Astronomical SVG — drifts at 60s cycle */}
      <svg
        ref={svgRef}
        className="absolute inset-0 w-full h-full text-bronze"
        style={{
          opacity: 0.04,
          animation: "drift-2 60s ease-in-out infinite",
        }}
        preserveAspectRatio="xMidYMid slice"
      >
        {/* Outer ring */}
        <circle cx="50%" cy="35%" r="560" stroke="currentColor" strokeWidth="0.5" fill="none" />
        {/* Inner dashed ring */}
        <circle cx="50%" cy="35%" r="360" stroke="currentColor" strokeWidth="0.5" fill="none" strokeDasharray="3 12" />
        {/* Faint inner ring */}
        <circle cx="50%" cy="35%" r="180" stroke="currentColor" strokeWidth="0.5" fill="none" />
        {/* Center cross */}
        <line x1="50%" y1="0%" x2="50%" y2="100%" stroke="currentColor" strokeWidth="0.5" />
        <line x1="0%" y1="35%" x2="100%" y2="35%" stroke="currentColor" strokeWidth="0.5" />
        {/* Diagonal construction lines */}
        <line x1="20%" y1="0%" x2="80%" y2="100%" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 20" />
        <line x1="80%" y1="0%" x2="20%" y2="100%" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 20" />
        {/* Cardinal tick marks */}
        <line x1="calc(50% - 8px)" y1="calc(35% - 360px)" x2="calc(50% + 8px)" y2="calc(35% - 360px)" stroke="currentColor" strokeWidth="1" />
        <line x1="calc(50% - 8px)" y1="calc(35% + 360px)" x2="calc(50% + 8px)" y2="calc(35% + 360px)" stroke="currentColor" strokeWidth="1" />
      </svg>

      {/* Layer 4: Bronze radial light behind the logo — drifts at 45s cycle */}
      <div
        ref={radialRef}
        className="absolute left-1/2 -translate-x-1/2 rounded-full"
        style={{
          top: "60px",
          width: "800px",
          height: "800px",
          background: "radial-gradient(circle, rgba(176,141,87,0.08) 0%, transparent 70%)",
          animation: "drift-3 45s ease-in-out infinite",
          filter: "blur(60px)",
        }}
      />

      {/* Layer 5: Fine noise overlay at near-zero opacity */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n2'%3E%3CfeTurbulence type='turbulence' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n2)'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "128px 128px",
          opacity: 0.015,
        }}
      />
    </div>
  );
}
