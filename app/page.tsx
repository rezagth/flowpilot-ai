"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import ThemeToggle from "@/components/theme-toggle";
import CursorGlow from "@/components/cursor-glow";
import GooeyBlobs from "@/components/gooey-blobs";
import Reveal3D from "@/components/reveal-3d";
import Parallax from "@/components/parallax";
import SectionDivider from "@/components/section-divider";
import Marquee from "@/components/marquee";
import AutomationDemo from "@/components/automation-demo";
import DragRow from "@/components/drag-row";
import AutoScrollTestimonials from "@/components/auto-scroll-testimonials";
import { useRef, useEffect } from "react";

function initials(name: string) {
  const n = name.split(",")[0].trim();
  const parts = n.split(" ");
  const letters = (parts[0]?.[0] || "") + (parts[1]?.[0] || "");
  return letters.toUpperCase();
}


const fadeUp = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0 } } as const;

export default function Page() {
  const heroRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress, scrollY } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const ySlow = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const yMed = useTransform(scrollYProgress, [0, 1], [0, -140]);
  const yFast = useTransform(scrollYProgress, [0, 1], [0, -220]);
  const navY = useTransform(scrollY, [0, 600], [0, -6]);
  const navBg = useTransform(scrollY, [0, 200], ["rgba(0,0,0,0.06)", "rgba(0,0,0,0.16)"]);

  return (
    <main className="relative overflow-x-hidden">
      <CursorGlow />
      {/* Nav */}
<motion.header style={{ y: navY, backgroundColor: navBg }} className="container-tight sticky top-0 z-20 flex items-center justify-between py-4 md:py-6 backdrop-blur border-b border-white/10">
        <div className="flex items-center gap-3">
          <div className="size-9 rounded-xl bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-600 shadow-[0_0_40px_rgba(0,120,255,.35)] flex items-center justify-center">
            <svg width="18" height="18" viewBox="0 0 24 24" className="text-white">
              <path fill="currentColor" d="M12 2l3.5 6H20l-5 5 2 8-5-4-5 4 2-8-5-5h4.5z" />
            </svg>
          </div>
          <span className="font-semibold tracking-tight text-white/90">FlowPilot AI</span>
        </div>
        <div className="flex items-center gap-3">
          {/* <Link href="#use-cases" className="hidden md:inline text-white/70 hover:text-white">Use Cases</Link>
          <Link href="#case-studies" className="hidden md:inline text-white/70 hover:text-white">Case Studies</Link>
          <Link href="#pricing" className="hidden md:inline text-white/70 hover:text-white">Pricing</Link>
          <Link href="#faq" className="hidden md:inline text-white/70 hover:text-white">FAQ</Link>
          <Link href="#integrations" className="hidden md:inline text-white/70 hover:text-white">Integrations</Link> */}
          <ThemeToggle />
        </div>
      </motion.header>

      {/* Hero */}
      <section ref={heroRef} className="container-tight section relative">
        <GooeyBlobs />
        <motion.div style={{ y: yFast }} className="absolute -top-24 left-1/2 -translate-x-1/2 size-[580px] rounded-full bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.45),transparent_60%)] blur-3xl opacity-60 pointer-events-none animate-float" />
        <motion.div style={{ y: ySlow }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.6 }}
          variants={{ show: { transition: { staggerChildren: 0.06 } } }}
          className="relative z-10 text-center"
        >
          <motion.div variants={fadeUp} className="inline-flex items-center gap-2 glass rounded-full px-3 py-1.5 text-xs md:text-sm text-white/80 border border-white/10 mb-6">
            <span className="size-2 rounded-full bg-emerald-400 shadow-[0_0_16px_4px_rgba(52,211,153,.45)]" />
            Next‑gen AI Automation for Teams
          </motion.div>

          <motion.h1 variants={fadeUp} className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.05] text-white">
            Automate Everything. <span className="grad-text">Flow Intelligently.</span>
          </motion.h1>

          <motion.p variants={fadeUp} className="mt-5 md:mt-6 text-white/70 max-w-2xl mx-auto">
            FlowPilot AI empowers businesses with next‑gen AI automation—build autonomous workflows, integrate CRMs, and sync data effortlessly.
          </motion.p>

<motion.div variants={fadeUp} className="mt-8 flex items-center justify-center gap-3">
            <Link href="#cta" className="btn-primary magnetic">Get Started</Link>
            <Link href="#demo" className="btn-ghost magnetic">See Demo</Link>
          </motion.div>

          {/* Live automation demo */}
          <motion.div
            variants={fadeUp}
            style={{ y: yMed }}
            className="mx-auto mt-12 md:mt-16 w-full max-w-5xl aspect-[16/10] rounded-2xl glass-strong border border-white/10 overflow-hidden relative neon"
>
            <AutomationDemo />
          </motion.div>
        </motion.div>
      </section>

      <SectionDivider />

      {/* Services */}
      <section id="services" className="container-tight section">
        <motion.h2 initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="text-2xl md:text-3xl font-semibold text-white mb-2">
          What we automate
        </motion.h2>
        <p className="text-white/70 max-w-3xl mb-8">From first touch to renewal—FlowPilot connects your tools, adds AI where it matters, and keeps humans in control.</p>
        <Parallax strength={24}>
          <div className="grid md:grid-cols-3 xl:grid-cols-4 gap-5">
            {[
              { title: "Workflow Automation", desc: "Design autonomous pipelines that self‑optimize.", bullets:["Triggers: webhooks, cron, queues","Branching + retries","Versioned deployments"], icon: BoltIcon },
              { title: "CRM Integration", desc: "Connect HubSpot, Salesforce, and more.", bullets:["Field mapping","Deduping rules","Usage-based updates"], icon: GridIcon },
              { title: "AI Agents", desc: "Deploy agents for ops, support, and sales.", bullets:["RAG on your docs","Tool use","Guardrails"], icon: BrainIcon },
              { title: "Data Sync", desc: "Real‑time sync across your stack.", bullets:["Bidirectional","Idempotent","Schema aware"], icon: SyncIcon },
              { title: "Support Automation", desc: "Triage, deflect, and summarize tickets.", bullets:["Macros + intents","Escalation notes","CSAT tracking"], icon: BoltIcon },
              { title: "Marketing Ops", desc: "Automate content and distribution.", bullets:["Calendar","Multi‑channel","Attribution"], icon: GridIcon },
              { title: "Finance", desc: "Billing workflows and alerts.", bullets:["Invoice checks","Usage alerts","Dunning"], icon: SyncIcon },
              { title: "Security", desc: "Access reviews and approvals.", bullets:["RBAC","SSO/SAML","Audit logs"], icon: BrainIcon },
            ].map((c, i) => (
              <Reveal3D key={c.title} delay={i * 0.04} className="group rounded-2xl glass border border-white/10 p-5 hover:border-white/20 transition relative overflow-hidden magnetic">
                <div
                  onMouseMove={(e) => {
                    const t = e.currentTarget as HTMLDivElement;
                    const r = t.getBoundingClientRect();
                    const x = ((e.clientX - r.left) / r.width) * 100;
                    t.style.setProperty("--mx", `${x}%`);
                  }}
                >
                  <div className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition bg-[radial-gradient(600px_200px_at_var(--mx,50%)_-10%,rgba(99,102,241,.28),transparent_60%)]" />
                  <c.icon className="size-9 text-indigo-300 mb-3" />
                  <div className="font-medium text-white">{c.title}</div>
                  <p className="text-sm text-white/70 mt-1.5">{c.desc}</p>
                  <ul className="text-xs mt-3 space-y-1 text-white/70">
                    {c.bullets.map((b:string)=> (<li key={b} className="flex items-center gap-2"><span className="size-1 rounded-full bg-emerald-400" />{b}</li>))}
                  </ul>
                </div>
              </Reveal3D>
            ))}
          </div>
          <div className="mt-6 flex gap-3">
            <Link href="#cta" className="btn-primary">Get started free</Link>
            <Link href="#demo" className="btn-ghost">Watch 2‑min demo</Link>
          </div>
        </Parallax>
      </section>

      <SectionDivider />

      {/* Features */}
      <section id="features" className="container-tight section">
        <motion.h2 initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="text-2xl md:text-3xl font-semibold text-white mb-2">
          Built for scale
        </motion.h2>
        <p className="text-white/70 max-w-3xl mb-8">Enterprise‑grade foundations with developer ergonomics: instrument everything, keep costs predictable, and ship with confidence.</p>
        <Parallax strength={18}>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              ["No‑code builder", "Compose flows visually, publish in minutes."],
              ["Observability", "Realtime traces, metrics, and audit logs."],
              ["Human‑in‑the‑loop", "Review / approve critical steps."],
              ["Embeddings & RAG", "Ground agents on your knowledge."],
              ["Secure by default", "SOC2‑ready access controls."],
              ["Flexible runtime", "Webhooks, queues, cron, and more."],
              ["Rate limits", "Protect APIs and contain spend."],
              ["Secrets manager", "Rotate keys and isolate tenants."],
              ["Testing sandbox", "Dry‑runs with fixtures and mocks."],
            ].map(([t, d], i) => (
              <Reveal3D key={t} delay={i * 0.04} className="rounded-2xl glass border border-white/10 p-5">
                <div className="text-white font-medium">{t}</div>
                <p className="text-sm text-white/70 mt-1.5">{d}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {i===1 && ["Traces","Logs","Metrics"].map(b=> <span key={b} className="px-2 py-1 text-[11px] rounded-md bg-white/5 border border-white/10 text-white/70">{b}</span>)}
                </div>
              </Reveal3D>
            ))}
          </div>
        </Parallax>
      </section>

      <SectionDivider />

      {/* Use Cases (SEO-rich) */}
      <section id="use-cases" className="container-tight section">
        <motion.h2 initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="text-2xl md:text-3xl font-semibold text-white mb-6">
          Use cases that sell results
        </motion.h2>
        <Parallax strength={22}>
          <div className="grid md:grid-cols-2 gap-5">
            {[
              {
                title: "RevOps Automation",
                desc: "Score, route, and enrich leads automatically. Keep CRM fields consistent and your pipeline clean.",
                bullets: ["Auto‑routing + SLAs", "Deduplication rules", "Renewal/Expansion alerts"],
              },
              {
                title: "Customer Support",
                desc: "Resolve Tier‑1 instantly with AI agents and escalate with full context for humans.",
                bullets: ["24/7 deflection", "Knowledge‑grounded answers", "Zendesk/Intercom syncing"],
              },
              {
                title: "Marketing Ops",
                desc: "Orchestrate campaigns end‑to‑end—from content generation to multi‑channel posting and analytics.",
                bullets: ["Asset approvals", "UTM hygiene", "Attribution to CRM"],
              },
              {
                title: "People & IT",
                desc: "Automate onboarding/offboarding, access reviews, and policy updates with audit trails.",
                bullets: ["SSO + SCIM hooks", "Ticketing flows", "Compliance logs"],
              },
            ].map((u, i) => (
              <Reveal3D key={u.title} delay={i * 0.05} className="rounded-2xl glass border border-white/10 p-5">
                <div className="text-white font-semibold">{u.title}</div>
                <p className="text-sm text-white/70 mt-1.5">{u.desc}</p>
                <ul className="mt-3 space-y-2 text-sm text-white/75">
                  {u.bullets.map((b) => (
                    <li key={b} className="flex items-center gap-2"><span className="size-1.5 rounded-full bg-indigo-400" />{b}</li>
                  ))}
                </ul>
              </Reveal3D>
            ))}
          </div>
        </Parallax>
        <div className="mt-6">
          <Link href="#cta" className="btn-primary">Get a personalized demo</Link>
        </div>
      </section>

      {/* Integrations */}
      <section id="integrations" className="container-tight section">
        <motion.h2 initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="text-2xl md:text-3xl font-semibold text-white mb-6">
          Integrates with your stack
        </motion.h2>
        <Parallax strength={14}>
          <div className="rounded-2xl glass border border-white/10 p-4">
            <Marquee speed={50}>
              {[
                "Slack","Notion","HubSpot","Salesforce","Zapier","Gmail","Sheets","Airtable","Jira","Asana","Intercom","Zendesk","Stripe","GitHub"
              ].map((name)=> (
                <div key={name} className="px-5 py-3 rounded-2xl border border-white/10 text-white/80 whitespace-nowrap bg-[linear-gradient(135deg,rgba(255,255,255,.06),rgba(255,255,255,.02))] backdrop-blur-md shadow-[0_8px_40px_-12px_rgba(99,102,241,.25)]">
                  {name}
                </div>
              ))}
            </Marquee>
            <Marquee speed={55} reverse className="mt-3">
              {[
                "Postgres","BigQuery","S3","Webhooks","Twilio","SendGrid","Calendly","Figma","Drive","Confluence"
              ].map((name)=> (
                <div key={name} className="px-5 py-3 rounded-2xl border border-white/10 text-white/80 whitespace-nowrap bg-[linear-gradient(135deg,rgba(255,255,255,.06),rgba(255,255,255,.02))] backdrop-blur-md shadow-[0_8px_40px_-12px_rgba(99,102,241,.25)]">
                  {name}
                </div>
              ))}
            </Marquee>
          </div>
        </Parallax>
      </section>

      <SectionDivider />

      {/* Case Studies (SEO copy + metrics) */}
      <section id="case-studies" className="container-tight section">
        <motion.h2 initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="text-2xl md:text-3xl font-semibold text-white mb-6">
          Proven impact for modern teams
        </motion.h2>
        <Parallax strength={20}>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              { company: "SaaS B2B", metric: "-70%", label: "Manual ops", copy: "Automated lead lifecycle, usage‑based triggers, and billing handoffs." },
              { company: "E‑commerce", metric: "+22%", label: "CSAT", copy: "AI agents deflect Tier‑1 and route complex issues with rich context." },
              { company: "Fintech", metric: "2×", label: "Pipeline velocity", copy: "Enrichment + scoring + routing in minutes, fully auditable." },
              { company: "Healthcare", metric: "-45%", label: "Ticket backlog", copy: "Prioritization + auto‑summaries + PHI‑safe redactions." },
              { company: "Marketplace", metric: "+18%", label: "Activation", copy: "Onboarding flows with nudges and SLA‑backed escalations." },
              { company: "Gaming", metric: "-35%", label: "Fraud incidents", copy: "Signals + human review steps + automated takedowns." },
            ].map((c, i) => (
              <Reveal3D key={c.company} delay={i * 0.05} className="rounded-2xl glass border border-white/10 p-5">
                <div className="text-white font-semibold">{c.company}</div>
                <div className="mt-1 text-3xl text-white">{c.metric}</div>
                <div className="text-white/60 text-sm">{c.label}</div>
                <p className="text-white/70 text-sm mt-3">{c.copy}</p>
              </Reveal3D>
            ))}
          </div>
        </Parallax>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="container-tight section">
        <motion.h2 initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="text-2xl md:text-3xl font-semibold text-white mb-6">
          Loved by modern teams
        </motion.h2>
        <Parallax strength={16}>
          <div className="mb-2 text-xs text-white/50 flex items-center gap-2 pl-1"><span className="size-1.5 rounded-full bg-white/30" />Drag or scroll to explore →</div>
          <AutoScrollTestimonials className="glass border border-white/10 rounded-2xl p-4 overflow-hidden">
            <div className="flex gap-4 min-w-max">
              {[
                ["Ava, COO", "FlowPilot cut manual ops by 70%—we ship faster with fewer errors."],
                ["Liam, RevOps", "Our CRM is finally clean. Automations save hours daily."],
                ["Sophia, Support", "AI agents resolve Tier‑1 instantly. CSAT is up 20%."],
                ["Noah, IT", "Onboarding is fully automated with audit trails—no more manual permissioning."],
                ["Emma, Marketing", "We scaled content across channels without adding headcount."],
                ["Mia, Ops", "Dashboards and alerts mean zero surprises. We spot issues in minutes."],
              ].map(([name, quote], i) => (
                <Reveal3D key={i} delay={i * 0.03} className="shrink-0 w-[360px] rounded-2xl p-5 bg-[linear-gradient(135deg,rgba(255,255,255,.08),rgba(255,255,255,.03))] border border-white/10 shadow-[0_10px_50px_-20px_rgba(99,102,241,.35)] relative overflow-hidden">
                  <div className="absolute -inset-px opacity-30 pointer-events-none bg-[radial-gradient(500px_200px_at_0%_0%,rgba(99,102,241,.25),transparent_60%)]" />
                  <div className="relative flex items-center gap-3">
                    <div className="size-9 rounded-full bg-white/10 border border-white/15 grid place-items-center text-[11px] text-white/90">{initials(name as string)}</div>
                    <div className="text-white font-medium">{name}</div>
                    <div className="ml-auto text-amber-300">★★★★★</div>
                  </div>
                  <p className="relative text-white/80 text-sm mt-3 leading-6">
                    <span className="text-white/40 mr-1">"</span>{quote}<span className="text-white/40 ml-1">"</span>
                  </p>
                </Reveal3D>
              ))}
            </div>
          </AutoScrollTestimonials>
        </Parallax>
      </section>

      <SectionDivider />

      {/* Pricing */}
      <section id="pricing" className="container-tight section">
        <motion.h2 initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="text-2xl md:text-3xl font-semibold text-white mb-8">
          Simple, transparent pricing
        </motion.h2>
        <Parallax strength={20}>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              { name: "Starter", price: "$29", features: ["Up to 3 flows", "Community support", "Email triggers"], highlight: false },
              { name: "Pro", price: "$99", features: ["Unlimited flows", "Priority support", "Agents + RAG + CRM"], highlight: true },
              { name: "Enterprise", price: "Custom", features: ["SSO/SAML", "VPC / On‑prem", "SLAs & DPA"], highlight: false },
            ].map((p, i) => (
              <Reveal3D
                key={p.name}
                delay={i * 0.06}
                className={`rounded-2xl p-5 border transition ${
                  p.highlight
                    ? "glass-strong border-white/20 shadow-[0_0_80px_rgba(147,51,234,.28)]"
                    : "glass border-white/10 hover:border-white/20"
                }`}
              >
                <div className="text-white font-semibold">{p.name}</div>
                <div className="mt-2 text-3xl text-white">{p.price}</div>
                <ul className="mt-4 space-y-2 text-sm text-white/75">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-center gap-2">
                      <span className="size-1.5 rounded-full bg-emerald-400" /> {f}
                    </li>
                  ))}
                </ul>
                <Link href="#cta" className={`mt-6 inline-flex w-full justify-center rounded-xl px-4 py-2.5 font-medium ${
                  p.highlight ? "btn-primary" : "btn-ghost"
                }`.replace("inline-flex w-full justify-center rounded-xl px-4 py-2.5 font-medium ", "")}>
                  {p.highlight ? "Start Pro" : "Choose"}
                </Link>
              </Reveal3D>
            ))}
          </div>
        </Parallax>
      </section>

      {/* Resources / Blog */}
      <section id="resources" className="container-tight section">
        <motion.h2 initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="text-2xl md:text-3xl font-semibold text-white mb-6">
          Resources
        </motion.h2>
        <Parallax strength={14}>
          <div className="grid md:grid-cols-3 gap-5">
            {[ 
              { t: "Playbook: Automate RevOps in a day", d: "Templates to score, route and enrich with auditability.", k: "revops, crm, scoring" },
              { t: "Guide: Agent guardrails that work", d: "Design safe agents with tools, memory and approvals.", k: "agents, guardrails" },
              { t: "Checklist: Integration hygiene", d: "Field mapping, idempotency and backfills.", k: "integrations, data" },
            ].map((p,i)=>(
              <Reveal3D key={p.t} delay={i*0.05} className="rounded-2xl glass border border-white/10 p-5">
                <div className="text-white font-medium">{p.t}</div>
                <p className="text-white/70 text-sm mt-1.5">{p.d}</p>
                <div className="mt-3 text-[11px] text-white/60">{p.k}</div>
              </Reveal3D>
            ))}
          </div>
        </Parallax>
      </section>

      {/* CTAT */}
      <section id="cta" className="container-tight section">
        <Parallax strength={24}>
          <Reveal3D delay={0.05} className="rounded-2xl glass-strong border border-white/15 p-6 md:p-8 relative overflow-hidden">
            <div className="absolute -inset-px bg-[radial-gradient(600px_200px_at_20%_-10%,rgba(59,130,246,.25),transparent_60%)]" />
            <div className="relative z-10">
              <h3 className="text-white text-2xl md:text-3xl font-semibold">Ready to pilot your flow?</h3>
              <p className="text-white/70 mt-2 max-w-2xl">
                Join teams automating their business with FlowPilot AI. Get early access and a personalized demo.
              </p>
              <form className="mt-5 flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="you@company.com"
                  className="flex-1 rounded-xl glass border border-white/10 px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-indigo-500/40"
                />
                <button className="btn-primary">Request Access</button>
              </form>
            </div>
          </Reveal3D>
        </Parallax>
      </section>

      {/* FAQ */}
      <section id="faq" className="container-tight section">
        <motion.h2 initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="text-2xl md:text-3xl font-semibold text-white mb-6">
          Frequently asked questions
        </motion.h2>
        <Parallax strength={12}>
          <div className="rounded-2xl glass border border-white/10 p-5">
            {[
              { q: "How does FlowPilot AI connect to our tools?", a: "Via secure OAuth and API keys. We support Slack, Notion, HubSpot, Salesforce, and more out of the box." },
              { q: "Can we keep a human in the loop?", a: "Yes—add approvals, thresholds, and reviewer steps to any flow with full audit logs." },
              { q: "Is my data safe?", a: "We follow security best practices, offer SSO/SAML, role‑based access control, and optional VPC deployments for enterprise." },
              { q: "How fast to go live?", a: "Teams ship their first automations in hours. Import templates, tweak, and publish—no code required." },
              { q: "What about pricing as we scale?", a: "Transparent usage tiers with soft limits, alerts, and rate‑limit controls so you never overspend." },
            ].map((f) => (
              <details key={f.q} className="group border-b border-white/10 py-4 last:border-0">
                <summary className="cursor-pointer list-none text-white font-medium flex items-center gap-3">
                  <span className="size-5 rounded-md bg-white/5 border border-white/10 grid place-items-center text-white/70">+</span>
                  {f.q}
                </summary>
                <p className="mt-2 text-white/70 text-sm ml-8 group-open:animate-fade-in">{f.a}</p>
              </details>
            ))}
          </div>
        </Parallax>
        <div className="mt-6 flex gap-3">
          <Link href="#cta" className="btn-primary">Talk to sales</Link>
          <Link href="#pricing" className="btn-ghost">Compare plans</Link>
        </div>
      </section>

      {/* Pricing */}
      <footer className="container-tight py-10 md:py-12 text-white/60 text-sm">
        <div className="flex flex-col md:flex-row items-center gap-3 md:gap-6 justify-between">
          <div className="flex items-center gap-3">
            <div className="size-7 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600" />
            <span>© {new Date().getFullYear()} FlowPilot AI</span>
          </div>
          <div className="flex items-center gap-4">
            <Link href="#" className="hover:text-white">Twitter</Link>
            <Link href="#" className="hover:text-white">LinkedIn</Link>
            <Link href="#" className="hover:text-white">Legal</Link>
            <Link href="#" className="hover:text-white">Contact</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}

/* Inline SVG icons */
function BoltIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={props.className}>
      <path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z" fill="currentColor" opacity=".9" />
    </svg>
  );
}
function GridIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={props.className}>
      <rect x="3" y="3" width="8" height="8" fill="currentColor" opacity=".9" />
      <rect x="13" y="3" width="8" height="8" fill="currentColor" opacity=".6" />
      <rect x="3" y="13" width="8" height="8" fill="currentColor" opacity=".6" />
      <rect x="13" y="13" width="8" height="8" fill="currentColor" opacity=".9" />
    </svg>
  );
}
function BrainIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={props.className}>
      <path d="M8.5 3A3.5 3.5 0 005 6.5v.5A3.5 3.5 0 008.5 10 3.5 3.5 0 005 13.5V14A4 4 0 009 18h2V3H8.5z" fill="currentColor" opacity=".9"/>
      <path d="M15.5 3A3.5 3.5 0 0119 6.5v.5A3.5 3.5 0 0115.5 10 3.5 3.5 0 0119 13.5V14a4 4 0 01-4 4h-2V3h2.5z" fill="currentColor" opacity=".7"/>
    </svg>
  );
}
function SyncIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={props.className}>
      <path d="M4 7a8 8 0 0114-2l2-2v7h-7l2-2A5 5 0 007 9" stroke="currentColor" strokeWidth="2"/>
      <path d="M20 17a8 8 0 01-14 2l-2 2v-7h7l-2 2a5 5 0 009-2" stroke="currentColor" strokeWidth="2"/>
    </svg>
  );
}
