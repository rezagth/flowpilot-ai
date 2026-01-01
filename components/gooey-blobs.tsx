"use client";

export default function GooeyBlobs() {
  return (
    <svg className="pointer-events-none absolute -z-10 inset-0 overflow-visible" aria-hidden>
      <defs>
        <filter id="goo">
          <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="blur" />
          <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo" />
          <feComposite in="SourceGraphic" in2="goo" operator="atop" />
        </filter>
        <radialGradient id="blobGrad1" cx="30%" cy="30%">
          <stop offset="0%" stopColor="rgba(99,102,241,0.6)" />
          <stop offset="100%" stopColor="rgba(59,130,246,0.2)" />
        </radialGradient>
        <radialGradient id="blobGrad2" cx="40%" cy="40%">
          <stop offset="0%" stopColor="rgba(147,51,234,0.5)" />
          <stop offset="100%" stopColor="rgba(99,102,241,0.15)" />
        </radialGradient>
      </defs>
      <g filter="url(#goo)">
        <circle className="blob-a" cx="10%" cy="25%" r="100" fill="url(#blobGrad1)" />
        <circle className="blob-b" cx="25%" cy="35%" r="75" fill="url(#blobGrad2)" />
        <circle className="blob-a" cx="15%" cy="45%" r="60" fill="rgba(59,130,246,0.2)" />
      </g>
      <style jsx>{`
        @keyframes float-blob-a {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(20px, -30px) scale(1.1); }
          66% { transform: translate(-10px, 10px) scale(0.95); }
        }
        @keyframes float-blob-b {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(-15px, 25px) scale(0.95); }
          66% { transform: translate(25px, -15px) scale(1.05); }
        }
        .blob-a {
          animation: float-blob-a 8s ease-in-out infinite;
          transform-origin: 10% 25%;
        }
        .blob-b {
          animation: float-blob-b 10s ease-in-out infinite;
          transform-origin: 25% 35%;
        }
      `}</style>
    </svg>
  );
}
