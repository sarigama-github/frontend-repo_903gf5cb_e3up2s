import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const works = [
  { title: 'AI Support Agent', desc: 'LLM-powered chatbot that reduces support load by 65%.', tags: ['AI', 'Automation'] },
  { title: 'SaaS Analytics', desc: 'Product analytics dashboard with real-time pipelines.', tags: ['Data', 'SaaS'] },
  { title: 'E-commerce Revamp', desc: 'Headless storefront with blazing performance.', tags: ['Web', 'Performance'] },
]

const links = [
  { name: 'GitHub', url: 'https://github.com/your-handle' },
  { name: 'Behance', url: 'https://www.behance.net/your-profile' },
]

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-slate-950 text-white flex flex-col">
      <Navbar />
      <main className="flex-1 max-w-5xl mx-auto w-full px-4 py-16">
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <div>
            <h1 className="text-4xl font-bold">Portfolio</h1>
            <p className="mt-2 text-slate-300">Selected projects that demonstrate our craft.</p>
          </div>
          <div className="flex gap-3">
            {links.map((l) => (
              <a key={l.name} href={l.url} target="_blank" className="px-4 py-2 rounded-md bg-white/10 hover:bg-white/20 border border-white/10 text-sm">{l.name}</a>
            ))}
          </div>
        </div>

        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {works.map((w) => (
            <div key={w.title} className="p-5 rounded-2xl bg-white/5 border border-white/10">
              <div className="h-28 rounded-lg bg-gradient-to-br from-violet-500/40 to-fuchsia-500/30" />
              <h3 className="mt-4 font-semibold">{w.title}</h3>
              <p className="text-sm text-slate-300">{w.desc}</p>
              <div className="mt-3 flex gap-2 flex-wrap">
                {w.tags.map((t) => (
                  <span key={t} className="text-xs px-2 py-1 rounded bg-white/10 text-slate-300">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}
