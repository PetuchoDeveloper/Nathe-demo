import type { SVGProps } from 'react';

export function AppLogoIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 100 100"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      data-ai-hint="nahuatl symbol education"
      {...props}
    >
      {/* Simplified representation of a Quincunx or similar geometric pattern often found in Mesoamerican art */}
      <rect x="35" y="35" width="30" height="30" />
      <rect x="45" y="5" width="10" height="30" />
      <rect x="45" y="65" width="10" height="30" />
      <rect x="5" y="45" width="30" height="10" />
      <rect x="65" y="45" width="30" height="10" />
    </svg>
  );
}
