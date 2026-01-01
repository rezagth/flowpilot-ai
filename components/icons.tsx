import React from "react";

export function BoltIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z" fill="currentColor" opacity=".9" />
    </svg>
  );
}

export function GridIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <rect x="3" y="3" width="8" height="8" fill="currentColor" opacity=".9" />
      <rect x="13" y="3" width="8" height="8" fill="currentColor" opacity=".6" />
      <rect x="3" y="13" width="8" height="8" fill="currentColor" opacity=".6" />
      <rect x="13" y="13" width="8" height="8" fill="currentColor" opacity=".9" />
    </svg>
  );
}

export function BrainIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M8.5 3A3.5 3.5 0 005 6.5v.5A3.5 3.5 0 008.5 10 3.5 3.5 0 005 13.5V14A4 4 0 009 18h2V3H8.5z"
        fill="currentColor"
        opacity=".9"
      />
      <path
        d="M15.5 3A3.5 3.5 0 0119 6.5v.5A3.5 3.5 0 0115.5 10 3.5 3.5 0 0119 13.5V14a4 4 0 01-4 4h-2V3h2.5z"
        fill="currentColor"
        opacity=".7"
      />
    </svg>
  );
}

export function SyncIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path d="M4 7a8 8 0 0114-2l2-2v7h-7l2-2A5 5 0 007 9" stroke="currentColor" strokeWidth="2" />
      <path d="M20 17a8 8 0 01-14 2l-2 2v-7h7l-2 2a5 5 0 009-2" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}
