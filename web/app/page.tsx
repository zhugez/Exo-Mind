const squads = [
  { name: "Indexer", role: "Maps markdown into graph", status: "ONLINE" },
  { name: "Recall", role: "Retrieves high-signal context", status: "ONLINE" },
  { name: "Doctor", role: "Runtime health + diagnostics", status: "ONLINE" },
  { name: "Lifecycle", role: "Consolidate / decay / archive", status: "READY" },
];

const stats = [
  { value: "10k+", label: "Operational notes" },
  { value: "152ms", label: "Recall p95" },
  { value: "1.0000", label: "Hit@1 benchmark" },
  { value: "24/7", label: "Agent-ready context" },
];

const pipeline = [
  {
    title: "Scan Terrain",
    body: "Index your private vault into a structured knowledge map with links and semantic vectors.",
  },
  {
    title: "Target Lock",
    body: "Recall the right context before prompting Codex or OpenClaw, so execution starts aligned.",
  },
  {
    title: "Command & Ship",
    body: "Run with confidence using benchmarked retrieval quality and health checks.",
  },
];

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#040711] text-[#e8eeff]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(900px_500px_at_90%_-10%,rgba(88,132,255,.26),transparent_60%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-35 [background-image:linear-gradient(rgba(106,147,255,.1)_1px,transparent_1px),linear-gradient(90deg,rgba(106,147,255,.1)_1px,transparent_1px)] [background-size:32px_32px]" />
      <div className="pointer-events-none absolute -left-16 top-24 h-80 w-80 rounded-full bg-[#5fcfff22] blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-16 h-96 w-96 rounded-full bg-[#8a6fff1f] blur-3xl" />

      <div className="relative z-10 mx-auto w-[min(1240px,93vw)]">
        <nav className="sticky top-0 z-20 flex items-center justify-between py-5 backdrop-blur-md">
          <a href="#" className="text-xl font-black tracking-wide">
            <span className="bg-gradient-to-r from-[#8fb5ff] to-[#74ecff] bg-clip-text text-transparent">ExoMind</span>
          </a>
          <div className="hidden items-center gap-6 text-sm text-[#a9b6da] md:flex">
            <a href="#pipeline" className="hover:text-white">Pipeline</a>
            <a href="#squads" className="hover:text-white">Squads</a>
            <a href="#stats" className="hover:text-white">Telemetry</a>
            <a href="https://github.com/zhugez/ExoMind" target="_blank" rel="noreferrer" className="rounded-full border border-[#87abff52] px-4 py-1.5 hover:border-[#adc5ff] hover:text-white">GitHub</a>
          </div>
        </nav>

        <section className="grid items-center gap-7 pb-10 pt-8 md:grid-cols-[1.05fr_.95fr] md:pt-14">
          <div className="fade-up">
            <p className="inline-flex rounded-full border border-[#86abff47] bg-[#86abff1a] px-3 py-1.5 text-xs text-[#c9d7ff]">
              RTS-style command center for AI context orchestration
            </p>
            <h1 className="mt-4 text-5xl font-black leading-[.95] tracking-tight md:text-7xl">
              Orchestrate
              <br />
              context.
              <br />
              Command results.
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-[#afbcdf] md:text-lg">
              ExoMind gives you strategic control over memory-driven AI workflows. Deploy recall like units,
              route tasks like missions, and keep Codex/OpenClaw aligned under pressure.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a href="https://github.com/zhugez/ExoMind" target="_blank" rel="noreferrer" className="rounded-xl bg-gradient-to-r from-[#7fa6ff] to-[#9ec5ff] px-5 py-2.5 font-semibold text-[#071126] transition hover:-translate-y-0.5">
                Deploy ExoMind
              </a>
              <a href="https://github.com/zhugez/ExoMind/wiki/Quickstart" target="_blank" rel="noreferrer" className="rounded-xl border border-[#86abff4d] px-5 py-2.5 font-semibold text-[#dbe5ff] transition hover:-translate-y-0.5 hover:border-[#a5c0ff]">
                Mission Brief
              </a>
            </div>
          </div>

          <div className="fade-up rounded-3xl border border-[#89adff45] bg-[#0d1528d9] p-4 shadow-[0_30px_80px_rgba(8,18,40,.6)]">
            <div className="mb-3 flex items-center justify-between">
              <p className="text-xs uppercase tracking-[.22em] text-[#95a9d8]">Command Console</p>
              <span className="rounded-full border border-[#84b8ff46] px-2 py-0.5 text-[10px] text-[#c6d7ff]">LIVE</span>
            </div>
            <div className="grid gap-3 md:grid-cols-[1.2fr_.8fr]">
              <pre className="rounded-2xl border border-[#80a8ff33] bg-[#0a1120] p-4 text-xs leading-6 text-[#cfe0ff] md:text-sm">
                <span className="text-[#8ea4d6]">$ exom doctor --notes-root ./Yasna-Memory --graph .neural/graph.json</span>{"\n"}
                <span className="text-[#57e3b0]">DOCTOR_OK</span>{"\n\n"}
                <span className="text-[#8ea4d6]">$ exom index --notes-root ./Yasna-Memory --out-root .neural</span>{"\n"}
                <span className="text-[#57e3b0]">INDEX_OK notes=10002 nodes=10002 edges=35992</span>{"\n\n"}
                <span className="text-[#8ea4d6]">$ exom recall --query "release workflow beta" --topk 5 --json</span>{"\n"}
                <span className="text-[#57e3b0]">{"{\"results\":[...]}"}</span>
              </pre>
              <div className="rounded-2xl border border-[#80a8ff33] bg-[#0a1120] p-3">
                <p className="mb-2 text-[11px] uppercase tracking-[.2em] text-[#8ea4d6]">Mini Map</p>
                <div className="grid grid-cols-4 gap-1">
                  {Array.from({ length: 36 }).map((_, i) => (
                    <div
                      key={i}
                      className={`h-4 rounded-sm ${
                        i % 7 === 0 ? "bg-[#6b9cff]" : i % 11 === 0 ? "bg-[#4de0b3]" : "bg-[#1a2847]"
                      }`}
                    />
                  ))}
                </div>
                <p className="mt-3 text-xs text-[#a6b5d9]">Active memory sectors and recall hotspots.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="stats" className="grid gap-3 pb-9 md:grid-cols-4">
          {stats.map((s) => (
            <article key={s.label} className="fade-up rounded-2xl border border-[#85abff38] bg-[#111a2fc4] p-4">
              <p className="text-3xl font-black">{s.value}</p>
              <p className="mt-1 text-xs text-[#a9b6da]">{s.label}</p>
            </article>
          ))}
        </section>

        <section id="pipeline" className="py-8">
          <h2 className="fade-up text-3xl font-extrabold tracking-tight md:text-5xl">Mission pipeline</h2>
          <p className="fade-up mt-2 text-[#adbadf]">Think strategy game ergonomics, applied to real engineering operations.</p>
          <div className="mt-6 grid gap-3 md:grid-cols-3">
            {pipeline.map((p, i) => (
              <article key={p.title} className="fade-up rounded-2xl border border-[#85abff34] bg-[#10192dcc] p-5">
                <div className="mb-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#7ea2ff38] text-sm font-bold">{i + 1}</div>
                <h3 className="text-lg font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#a9b6da]">{p.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="squads" className="py-8">
          <h2 className="fade-up text-3xl font-extrabold tracking-tight md:text-5xl">Runtime squads</h2>
          <p className="fade-up mt-2 text-[#adbadf]">Each command unit has a role. Together they keep delivery aligned.</p>
          <div className="mt-6 grid gap-3 md:grid-cols-2">
            {squads.map((s) => (
              <article key={s.name} className="fade-up flex items-center justify-between rounded-2xl border border-[#86abff35] bg-[#101a2ec9] p-4">
                <div>
                  <h3 className="text-lg font-semibold">{s.name}</h3>
                  <p className="text-sm text-[#a9b6da]">{s.role}</p>
                </div>
                <span className="rounded-full border border-[#7de2b16e] bg-[#7de2b11f] px-3 py-1 text-xs font-semibold text-[#7de2b1]">
                  {s.status}
                </span>
              </article>
            ))}
          </div>
        </section>

        <section className="py-10">
          <div className="fade-up flex flex-wrap items-center justify-between gap-4 rounded-3xl border border-[#86abff45] bg-gradient-to-r from-[#7ea3ff23] to-[#73e8ff1b] p-6 md:p-8">
            <div>
              <p className="text-xl font-bold md:text-2xl">Ready to take command?</p>
              <p className="mt-1 text-sm text-[#d3ddfb]">Deploy ExoMind beta and run your AI operations like a coordinated strike team.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a href="https://github.com/zhugez/ExoMind/releases" target="_blank" rel="noreferrer" className="rounded-xl bg-gradient-to-r from-[#7fa6ff] to-[#9ec5ff] px-5 py-2.5 font-semibold text-[#071126] transition hover:-translate-y-0.5">
                Download Beta
              </a>
              <a href="https://exomind-zhugez.vercel.app" className="rounded-xl border border-[#86abff4d] px-5 py-2.5 font-semibold text-[#dbe5ff] transition hover:-translate-y-0.5 hover:border-[#a5c0ff]">
                Live Demo
              </a>
            </div>
          </div>
        </section>

        <footer className="pb-10 text-sm text-[#8ea3d1]">ExoMind © 2026 · Tactical context runtime for OpenClaw + Codex</footer>
      </div>
    </main>
  );
}
