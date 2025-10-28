"use client";

import { useEffect, useMemo, useState } from "react";

const steps = [
  { k: "trigger", t: "Trigger: New lead captured", d: "Captured from website form via webhook." },
  { k: "enrich", t: "Enrich company + contact", d: "Clearbit + LinkedIn enrichment appended." },
  { k: "score", t: "Score + qualify", d: "ICP fit score 86/100, MQL = true." },
  { k: "route", t: "Route to owner", d: "Assigned to AE • SLA 15m • Calendar invite placed." },
  { k: "notify", t: "Notify channel", d: "#revops notified with full context and next steps." },
];

export default function AutomationDemo() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setI((v) => (v + 1) % steps.length), 1400);
    return () => clearInterval(id);
  }, []);

  const active = useMemo(() => steps[i]?.k, [i]);

  return (
    <div className="relative h-full w-full">
      <div className="absolute inset-0 bg-[radial-gradient(100%_120%_at_80%_0%,rgba(99,102,241,.22),transparent_60%),radial-gradient(120%_100%_at_10%_90%,rgba(59,130,246,.18),transparent_60%)]" />
      <div className="absolute inset-0 grid grid-cols-1 md:grid-cols-2">
        {/* Flow diagram */}
        <div className="relative p-5 md:p-6">
          <div className="demo-panel h-full rounded-xl border border-white/10 bg-white/5 backdrop-blur-md overflow-hidden relative">
            {/* toolbar */}
            <div className="absolute top-0 left-0 right-0 z-10 flex items-center justify-between px-4 py-3 border-b border-white/10 bg-white/5 backdrop-blur-sm">
              <div className="flex items-center gap-2 text-white/80 text-sm">
                <span className="size-2 rounded-full bg-indigo-400 shadow-[0_0_10px_rgba(99,102,241,.8)]" />
                Automation Flow
              </div>
              <div className="flex items-center gap-2">
                <button className="btn-mini">Replay flow</button>
                <button className="btn-mini">Open logs</button>
                <span className="relative inline-flex items-center gap-1 rounded-md px-2 py-1 border border-emerald-400/30 bg-emerald-400/10 text-xs text-white/80">
                  <span className="relative size-2 rounded-full bg-emerald-400">
                    <span className="absolute inset-0 rounded-full bg-emerald-400/40 animate-ping-slow" />
                  </span>
                  Live
                </span>
              </div>
            </div>
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 600 400" preserveAspectRatio="xMidYMid meet" aria-hidden>
              {/* soft grid */}
              <defs>
                <pattern id="p" width="24" height="24" patternUnits="userSpaceOnUse">
                  <path d="M24 0H0V24" fill="none" stroke="rgba(255,255,255,0.06)"/>
                </pattern>
                <linearGradient id="lg" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stop-color="rgba(99,102,241,.7)" />
                  <stop offset="100%" stop-color="rgba(34,211,238,.6)" />
                </linearGradient>
              </defs>
              <rect width="100%" height="100%" fill="url(#p)" />
              {/* base connections */}
              <path d="M100 100 C 220 100, 240 180, 300 200" className="demo-line" />
              <path d="M300 200 C 380 220, 420 280, 500 280" className="demo-line" />
              <path d="M300 200 C 360 160, 420 160, 500 120" className="demo-line" />
              {/* active highlight */}
              {active==='enrich' && (
                <path d="M100 100 C 220 100, 240 180, 300 200" className="demo-line-active" stroke="url(#lg)" />
              )}
              {active==='route' && (
                <path d="M300 200 C 380 220, 420 280, 500 280" className="demo-line-active" stroke="url(#lg)" />
              )}
              {active==='notify' && (
                <path d="M300 200 C 360 160, 420 160, 500 120" className="demo-line-active" stroke="url(#lg)" />
              )}
              {/* animated dots (single per path) */}
              <circle r="4" fill="#c4b5fd" className={`demo-dot ${active==='enrich' ? 'opacity-100' : 'opacity-60'}`}>
                <animateMotion dur="4s" repeatCount="indefinite" path="M100 100 C 220 100, 240 180, 300 200" />
              </circle>
              <circle r="4" fill="#c4b5fd" className={`demo-dot ${active==='route' ? 'opacity-100' : 'opacity-60'}`}>
                <animateMotion dur="4s" repeatCount="indefinite" path="M300 200 C 380 220, 420 280, 500 280" />
              </circle>
              <circle r="4" fill="#c4b5fd" className={`demo-dot ${active==='notify' ? 'opacity-100' : 'opacity-60'}`}>
                <animateMotion dur="4s" repeatCount="indefinite" path="M300 200 C 360 160, 420 160, 500 120" />
              </circle>
              {/* nodes */}
              <g className="demo-node" transform="translate(100,100)">
                <rect x="-58" y="-24" rx="14" width="136" height="48" className={`demo-chip ${active==='trigger' ? 'chip-active' : ''}`} fill="rgba(255,255,255,.08)" stroke="rgba(255,255,255,.18)" />
                <text textAnchor="middle" dy="6" className="demo-text">⚡ Trigger</text>
              </g>
              <g className="demo-node" transform="translate(300,200)">
                <rect x="-74" y="-28" rx="14" width="160" height="56" className={`demo-chip ${active==='enrich' ? 'chip-active' : ''}`} fill="rgba(255,255,255,.08)" stroke="rgba(255,255,255,.18)" />
                <text textAnchor="middle" dy="7" className="demo-text">🧠 Enrich + Score</text>
              </g>
              <g className="demo-node" transform="translate(500,120)">
                <rect x="-58" y="-24" rx="14" width="136" height="48" className={`demo-chip ${active==='notify' ? 'chip-active' : ''}`} fill="rgba(255,255,255,.08)" stroke="rgba(255,255,255,.18)" />
                <text textAnchor="middle" dy="6" className="demo-text">🔔 Notify</text>
              </g>
              <g className="demo-node" transform="translate(500,280)">
                <rect x="-58" y="-24" rx="14" width="136" height="48" className={`demo-chip ${active==='route' ? 'chip-active' : ''}`} fill="rgba(255,255,255,.08)" stroke="rgba(255,255,255,.18)" />
                <text textAnchor="middle" dy="6" className="demo-text">↪ Route</text>
              </g>
            </svg>
            {/* bottom bar: legend (left) + status (right) */}
            <div className="absolute inset-x-3 bottom-3 z-10">
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-1.5 flex-nowrap min-w-0 overflow-hidden">
                  {['Form','Slack','HubSpot'].map((t)=> (
                    <span key={t} className="demo-badge">{t}</span>
                  ))}
                </div>
                <div className="flex items-center gap-1.5 shrink-0 flex-nowrap">
                  <span className="demo-badge">Run #1023</span>
                  <span className="demo-badge gap-1"><span className="size-2 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,.7)]"></span>Success</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Run log */}
        <div className="relative p-5 md:p-6">
          <div className="demo-panel h-full rounded-xl border border-white/10 bg-white/5 backdrop-blur-md overflow-hidden">
            <div className="p-4 md:p-5 space-y-3">
              {steps.map((s, idx) => (
                <div key={s.k} className={`rounded-lg border ${idx===i ? 'border-white/30 bg-white/10 shadow-[0_0_24px_rgba(99,102,241,.25)]' : 'border-white/10 bg-white/5'} p-3 flex items-start gap-3 transition`}> 
                  <span className={`mt-1 size-2.5 rounded-full ${idx<=i ? 'bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,.6)]' : 'bg-white/30'}`} />
                  <div>
                    <div className="text-white text-sm font-medium">{s.t}</div>
                    <div className="text-white/70 text-xs mt-1">{s.d}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
