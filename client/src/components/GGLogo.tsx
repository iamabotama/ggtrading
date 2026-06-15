/* GG Trading Logo — Geometric GG lettermark with circuit-board styling
   Violet-to-green gradient, upward arrow implied in negative space */

interface GGLogoProps {
  size?: number;
  className?: string;
}

export default function GGLogo({ size = 40, className = "" }: GGLogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient id="gg-grad" x1="0" y1="0" x2="80" y2="80" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#7c3aed" />
          <stop offset="50%" stopColor="#2563eb" />
          <stop offset="100%" stopColor="#10b981" />
        </linearGradient>
        <linearGradient id="gg-grad2" x1="0" y1="0" x2="80" y2="80" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#7c3aed" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#10b981" stopOpacity="0.3" />
        </linearGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="2" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Outer hexagonal background */}
      <path
        d="M40 4 L72 22 L72 58 L40 76 L8 58 L8 22 Z"
        fill="url(#gg-grad2)"
        stroke="url(#gg-grad)"
        strokeWidth="1.5"
      />

      {/* Left G */}
      <path
        d="M14 28 C14 20 20 14 28 14 L36 14 L36 20 L28 20 C23 20 20 23 20 28 L20 52 C20 57 23 60 28 60 L36 60 L36 40 L28 40 L28 34 L42 34 L42 60 L28 60 C20 60 14 54 14 52 Z"
        fill="url(#gg-grad)"
        filter="url(#glow)"
        transform="scale(0.52) translate(4, 4)"
      />

      {/* Right G */}
      <path
        d="M44 28 C44 20 50 14 58 14 L66 14 L66 20 L58 20 C53 20 50 23 50 28 L50 52 C50 57 53 60 58 60 L66 60 L66 40 L58 40 L58 34 L72 34 L72 60 L58 60 C50 60 44 54 44 52 Z"
        fill="url(#gg-grad)"
        filter="url(#glow)"
        transform="scale(0.52) translate(4, 4)"
      />

      {/* Upward arrow accent at bottom */}
      <path
        d="M40 62 L35 70 L40 67 L45 70 Z"
        fill="url(#gg-grad)"
        opacity="0.8"
      />

      {/* Corner circuit dots */}
      <circle cx="8" cy="22" r="2" fill="url(#gg-grad)" opacity="0.6" />
      <circle cx="72" cy="22" r="2" fill="url(#gg-grad)" opacity="0.6" />
      <circle cx="72" cy="58" r="2" fill="url(#gg-grad)" opacity="0.6" />
      <circle cx="8" cy="58" r="2" fill="url(#gg-grad)" opacity="0.6" />
    </svg>
  );
}
