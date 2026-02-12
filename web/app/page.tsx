const metrics = [
  { value: "10002", label: "Notes indexed in 10k benchmark" },
  { value: "152ms", label: "Recall p95 at 10k scale" },
  { value: "1.0000", label: "Hit@1 on synthetic benchmark" },
];

const features = [
  {
    title: "Private-by-default context",
    body: "Index personal or company notes locally without leaking raw vault data into public workflows.",
  },
  {
    title: "Rust-first runtime",
    body: "Fast CLI for doctor, index, recall, and lifecycle — with compatibility fallback when needed.",
  },
  {
    title: "Built for Codex + OpenClaw",
    body: "Inject high-signal recall context before each agent task to reduce drift and speed up delivery.",
  },
];

const steps = [
  {
    title: "Index",
    body: "Parse markdown notes into graph + semantic signals under .neural/graph.json.",
  },
  {
    title: "Recall",
    body: "Query by intent before prompting Codex so implementation decisions inherit domain memory.",
  },
  {
    title: "Operate",
    body: "Run doctor checks, lifecycle cleanup, and benchmark loops to keep quality predictable.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[radial-gradient(1000px_500px_at_82%_-20%,#1f315f_0%,transparent_60%),#070b14] text-[#eaf1ff]">
      <div className="pointer-events-none fixed inset-0 opacity-25 [background-image:linear-gradient(rgba(122,162,255,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(122,162,255,.08)_1px,transparent_1px)] [background-size:28px_28px] [mask-image:radial-gradient(circle_at_50%_40%,black_38%,transparent_100%)]" />

      <div className="mx-auto w-[min(1120px,92vw)]">
        <nav className="sticky top-0 z-20 flex items-center justify-between py-5 backdrop-blur-sm">
          <div className="text-lg font-extrabold tracking-wide">
            <span className="bg-gradient-to-r from-[#7aa2ff] to-[#70e1ff] bg-clip-text text-transparent">ExoMind</span>
          </div>
          <div className="hidden gap-5 text-sm text-[#a3b3d6] md:flex">
            <a href="#features" className="hover:text-white">Features</a>
            <a href="#how" className="hover:text-white">How it works</a>
            <a href="#bench" className="hover:text-white">Benchmarks</a>
            <a href="https://github.com/zhugez/ExoMind" target="_blank" rel="noreferrer" className="hover:text-white">GitHub</a>
          </div>
        </nav>

        <section className="grid items-center gap-7 py-10 md:grid-cols-[1.1fr_.9fr] md:py-14">
          <div className="fade-up">
            <div className="inline-flex rounded-full border border-[#7aa2ff3d] bg-[#7aa2ff14] px-3 py-2 text-xs text-[#b9c9ef]">
              Portable knowledge runtime for OpenClaw + Codex
            </div>
            <h1 className="mt-4 text-4xl font-bold leading-tight tracking-tight md:text-6xl">
              Build with AI agents.
              <br />
              Without losing context.
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-[#a3b3d6] md:text-lg">
              ExoMind indexes your private notes into a queryable runtime so Codex and OpenClaw can reason with the right context at the right moment.
              Fewer hallucinations. Faster shipping. Better control.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="https://github.com/zhugez/ExoMind" target="_blank" rel="noreferrer" className="rounded-xl bg-gradient-to-r from-[#7aa2ff] to-[#95b4ff] px-4 py-2.5 font-semibold text-[#071227] transition hover:-translate-y-0.5">
                Get ExoMind
              </a>
              <a href="https://github.com/zhugez/ExoMind/wiki" target="_blank" rel="noreferrer" className="rounded-xl border border-[#7aa2ff3d] px-4 py-2.5 font-semibold text-[#d7e5ff] transition hover:-translate-y-0.5 hover:border-[#7aa2ff77]">
                Read Docs
              </a>
            </div>
          </div>

          <div className="fade-up rounded-2xl border border-[#7aa2ff3d] bg-gradient-to-b from-[#16213acc] to-[#0e1526cc] p-5 shadow-[0_20px_70px_rgba(18,32,66,.45)]">
            <pre className="overflow-x-auto whitespace-pre-wrap text-xs leading-6 text-[#cfe0ff] md:text-sm">
              <span className="text-[#9fb2df]">$ exom doctor --notes-root ./Yasna-Memory --graph .neural/graph.json</span>{"\n"}
              <span className="text-[#5ce1a8]">DOCTOR_OK</span>{"\n\n"}
              <span className="text-[#9fb2df]">$ exom index --notes-root ./Yasna-Memory --out-root .neural</span>{"\n"}
              <span className="text-[#5ce1a8]">INDEX_OK notes=10002 nodes=10002 edges=35992</span>{"\n\n"}
              <span className="text-[#9fb2df]">$ exom recall --query "release workflow beta" --topk 5 --json</span>{"\n"}
              <span className="text-[#5ce1a8]">{"{\"results\":[...]}"}</span>
            </pre>
          </div>
        </section>

        <section id="bench" className="grid gap-3 pb-10 md:grid-cols-3">
          {metrics.map((m) => (
            <article key={m.label} className="fade-up rounded-2xl border border-[#7aa2ff3d] bg-[#131d33b8] p-4">
              <div className="text-3xl font-extrabold">{m.value}</div>
              <p className="mt-1 text-sm text-[#a3b3d6]">{m.label}</p>
            </article>
          ))}
        </section>

        <section id="features" className="py-9">
          <h2 className="fade-up text-3xl font-bold md:text-4xl">Why teams pick ExoMind</h2>
          <p className="fade-up mt-2 text-[#a3b3d6]">Bold narrative, clear flow, and action-first UX.</p>
          <div className="mt-5 grid gap-3 md:grid-cols-3">
            {features.map((f) => (
              <article key={f.title} className="fade-up rounded-2xl border border-[#7aa2ff3d] bg-[#131d33b8] p-4">
                <h3 className="text-lg font-semibold">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#a3b3d6]">{f.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="how" className="py-9">
          <h2 className="fade-up text-3xl font-bold md:text-4xl">How it works</h2>
          <p className="fade-up mt-2 text-[#a3b3d6]">Three steps to turn messy notes into agent-usable context.</p>
          <div className="mt-5 grid gap-3 md:grid-cols-3">
            {steps.map((s, i) => (
              <article key={s.title} className="fade-up rounded-2xl border border-[#7aa2ff3d] bg-[#131d33b8] p-4">
                <div className="mb-2 inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#7aa2ff33] font-bold">{i + 1}</div>
                <h3 className="text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#a3b3d6]">{s.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="py-9">
          <div className="fade-up flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-[#7aa2ff3d] bg-gradient-to-r from-[#7aa2ff24] to-[#70e1ff1f] p-6">
            <p className="text-sm text-[#d7e5ff] md:text-base">
              <strong>Ready to run ExoMind?</strong>
              <br />
              Start with beta, keep private data private, and scale your agent workflows safely.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="https://github.com/zhugez/ExoMind/releases" target="_blank" rel="noreferrer" className="rounded-xl bg-gradient-to-r from-[#7aa2ff] to-[#95b4ff] px-4 py-2.5 font-semibold text-[#071227] transition hover:-translate-y-0.5">Download Beta</a>
              <a href="https://github.com/zhugez/ExoMind/wiki/Quickstart" target="_blank" rel="noreferrer" className="rounded-xl border border-[#7aa2ff3d] px-4 py-2.5 font-semibold text-[#d7e5ff] transition hover:-translate-y-0.5 hover:border-[#7aa2ff77]">Quickstart</a>
            </div>
          </div>
        </section>

        <footer className="pb-10 text-sm text-[#8ea2cf]">ExoMind © 2026 · Portable knowledge runtime for OpenClaw + Codex</footer>
      </div>
    </main>
  );
}
