export default function SectionDivider() {
  return (
    <div className="container-tight my-14 md:my-16">
      <div className="relative h-8">
        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-px bg-gradient-to-r from-transparent via-indigo-400/40 to-transparent" />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-8 rounded-full blur-2xl bg-[radial-gradient(closest-side,rgba(99,102,241,.6),transparent_70%)]" />
      </div>
    </div>
  );
}
