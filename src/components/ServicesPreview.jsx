import { Server, BrainCircuit, Workflow, ShieldCheck, Layers, Code2 } from 'lucide-react'

const items = [
  { icon: BrainCircuit, title: 'AI Consulting', desc: 'Strategy, discovery and PoCs that de-risk adoption.' },
  { icon: Workflow, title: 'Automation & Agents', desc: 'RPA, LLM agents and workflow orchestration.' },
  { icon: Code2, title: 'Product Engineering', desc: 'Web, mobile and APIs using modern stacks.' },
  { icon: Server, title: 'Cloud & DevOps', desc: 'Infra as code, CI/CD, observability and SRE.' },
  { icon: Layers, title: 'Data & Analytics', desc: 'Pipelines, warehousing and decision intelligence.' },
  { icon: ShieldCheck, title: 'Security & Compliance', desc: 'AppSec, audits and privacy by design.' },
]

export default function ServicesPreview() {
  return (
    <section id="services" className="relative py-20 bg-slate-950">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-500/5 to-transparent pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Services</h2>
          <p className="text-slate-300 mt-3">End-to-end capabilities to move from idea to impact.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map(({ icon: Icon, title, desc }) => (
            <a key={title} href={`/services/${title.toLowerCase().replace(/\s+/g,'-')}`} className="group p-6 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors">
              <div className="w-11 h-11 rounded-lg bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center text-white shadow-md">
                <Icon className="w-5 h-5" />
              </div>
              <h3 className="mt-4 text-white font-semibold">{title}</h3>
              <p className="mt-1 text-sm text-slate-300">{desc}</p>
              <span className="mt-4 inline-block text-violet-300 text-sm group-hover:translate-x-1 transition-transform">Learn more →</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
