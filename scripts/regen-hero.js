const fs = require('fs');

try {
  const content = fs.readFileSync('D:/MONOVERSE/public/images/Android Compact - 1.svg', 'utf8');

  // Replace style block and animation classes
  let processed = content.replace(/<style>[\s\S]*?<\/style>/, '');
  processed = processed.replace(/class=/g, 'className=');
  processed = processed.replace(/clip-path=/g, 'clipPath=');
  processed = processed.replace(/xmlns:xlink=/g, 'xmlnsXlink=');
  processed = processed.replace(/xml:space=/g, 'xmlSpace=');
  
  // 1. Remove the main background rect (which is not in defs).
  processed = processed.replace(/<g className="tree">\s*<rect width="412" height="766" fill="white"\/>/, '<g className="tree">');

  // 2. Remove all #FAFAFB paths (these are the backgrounds that cause sharp edges when animated outside their clipPaths)
  processed = processed.replace(/<path[^>]*fill="#FAFAFB"[^>]*\/>/gi, '');

  // Extract the inner content of the SVG (everything inside <svg ...> ... </svg>)
  const svgInnerMatch = processed.match(/<svg[^>]*>([\s\S]*?)<\/svg>/);
  if (!svgInnerMatch) throw new Error("Could not find SVG content");
  
  const innerContent = svgInnerMatch[1];

  const componentCode = `"use client";
import * as React from "react";
import { useRef, useEffect } from "react";
import anime from "animejs";
import type { SVGProps } from "react";

const SvgHeroMobile = (props: SVGProps<SVGSVGElement>) => {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;

    // Collect elements
    const treeGroups = svg.querySelectorAll<SVGElement>('.tree');
    const monoverseGroup = svg.querySelector<SVGElement>('.monoverse');
    
    // For opacity stagger, we only target the actual paths inside tree
    const treeStaggerPaths = svg.querySelectorAll<SVGElement>('.tree path');

    if (!treeGroups.length || !monoverseGroup) return;

    // Hints for hardware acceleration
    Array.from(treeGroups).forEach(el => { (el as unknown as HTMLElement).style.willChange = 'transform'; });
    Array.from(treeStaggerPaths).forEach(el => { (el as unknown as HTMLElement).style.willChange = 'opacity'; });
    (monoverseGroup as unknown as HTMLElement).style.willChange = 'opacity, transform';

    // Hard reset for the animation groups
    anime.set(treeGroups, { translateY: 30, scale: 0.95, transformOrigin: '50% 100%', transformBox: 'fill-box' });
    anime.set(monoverseGroup, { opacity: 0, translateY: -20, scale: 0.94, transformOrigin: '50% 50%', transformBox: 'fill-box' });
    
    // Opacity stagger starting point
    anime.set(treeStaggerPaths, { opacity: 0 });

    const tl = anime.timeline({ autoplay: true });

    tl.add({
      targets: treeGroups,
      translateY:  [30, 0],
      scale:       [0.95, 1],
      duration: 2500,
      easing:      'spring(1, 72, 9, 0)',
    })
    .add({
      targets: treeStaggerPaths,
      opacity: [
        { value: 0, duration: 0 },
        { value: 1, duration: 900, easing: 'cubicBezier(0.19, 1, 0.22, 1)' }
      ],
      delay: anime.stagger(1.5, { from: 'center' }),
    }, '-=2500')
    .add({
      targets: monoverseGroup,
      opacity: [
        { value: 0, duration: 0 },
        { value: 1, duration: 1500, easing: 'cubicBezier(0.19, 1, 0.22, 1)' }
      ],
      translateY: [-20, 0],
      scale: [0.94, 1],
      easing: 'spring(1, 60, 12, 0)',
    }, '-=1800')
    .add({
      targets: treeGroups,
      scale: [1, 1.01, 1],
      translateY: [0, -2, 0],
      duration: 4000,
      easing: 'easeInOutSine',
      loop: true,
      direction: 'alternate',
    }, '+=400');

    return () => {
      tl.pause();
      const targets = [monoverseGroup, ...Array.from(treeGroups), ...Array.from(treeStaggerPaths)];
      anime.remove(targets);
    };
  }, []);

  return (
    <svg
      ref={svgRef}
      style={{ width: '100%', height: '100%', mixBlendMode: 'darken' }}
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 412 766"
      fill="none"
      {...props}
    >
      ${innerContent}
    </svg>
  );
};

export default SvgHeroMobile;
`;

  fs.writeFileSync('D:/MONOVERSE/app/components/HeroMobileSVG.tsx', componentCode);
  console.log("Successfully regenerated HeroMobileSVG.tsx stripped of FAFAFB backgrounds");
} catch (e) {
  console.error("Error: ", e);
}
