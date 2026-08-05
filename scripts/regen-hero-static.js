const fs = require('fs');

try {
  const content = fs.readFileSync('D:/MONOVERSE/public/images/Android Compact - 1.svg', 'utf8');

  // Replace style block and animation classes
  let processed = content.replace(/<style>[\s\S]*?<\/style>/, '');
  processed = processed.replace(/class=/g, 'className=');
  processed = processed.replace(/clip-path=/g, 'clipPath=');
  processed = processed.replace(/xmlns:xlink=/g, 'xmlnsXlink=');
  processed = processed.replace(/xml:space=/g, 'xmlSpace=');
  
  // REMOVE all hardcoded solid background shapes so the SVG is properly transparent
  // We remove anything with fill="white", fill="#FAFAFB", or fill="#FFFFFF"
  processed = processed.replace(/<rect[^>]*fill="(?:white|#FAFAFB|#FFFFFF)"[^>]*\/>/gi, '');
  processed = processed.replace(/<path[^>]*fill="(?:white|#FAFAFB|#FFFFFF)"[^>]*\/>/gi, '');

  // Extract the inner content of the SVG (everything inside <svg ...> ... </svg>)
  const svgInnerMatch = processed.match(/<svg[^>]*>([\s\S]*?)<\/svg>/);
  if (!svgInnerMatch) throw new Error("Could not find SVG content");
  
  const innerContent = svgInnerMatch[1];

  const componentCode = `"use client";
import * as React from "react";
import type { SVGProps } from "react";

const SvgHeroMobile = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      style={{ width: '100%', height: '100%' }}
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
  console.log("Successfully regenerated HeroMobileSVG.tsx as STATIC");
} catch (e) {
  console.error("Error: ", e);
}
