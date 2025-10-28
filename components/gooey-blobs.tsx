"use client";

export default function GooeyBlobs() {
  return (
    <svg className="pointer-events-none absolute -z-10 inset-0 overflow-visible" aria-hidden>
      <defs>
        <filter id="goo">
          <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
          <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 22 -10" result="goo" />
          <feComposite in="SourceGraphic" in2="goo" operator="atop" />
        </filter>
      </defs>
      <g filter="url(#goo)">
        <circle className="blob-a" cx="12%" cy="28%" r="90" fill="rgba(59,130,246,0.35)" />
        <circle className="blob-b" cx="28%" cy="36%" r="70" fill="rgba(147,51,234,0.30)" />
        <circle className="blob-a" cx="76%" cy="30%" r="80" fill="rgba(56,189,248,0.26)" />
        <circle className="blob-b" cx="60%" cy="42%" r="60" fill="rgba(99,102,241,0.28)" />
      </g>
    </svg>
  );
}
