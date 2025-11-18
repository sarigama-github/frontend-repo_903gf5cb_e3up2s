import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const profiles = [
  { name: 'Upwork', url: 'https://www.upwork.com/','desc':'Top Rated services in AI, web and automation.' },
  { name: 'Fiverr', url: 'https://www.fiverr.com/','desc':'Gigs for rapid prototypes and MVPs.' },
  { name: 'Freelancer', url: 'https://www.freelancer.com/','desc':'Project-based delivery for startups and SMBs.' },
]

export default function Freelancing() {
  return (
    <div className="min-h-screen bg-slate-950 text-white flex flex-col">
      <Navbar />
      <main className="flex-1 max-w-3xl mx-auto w-full px-4 py-16">
        <h1 className="text-4xl font-bold">Freelancing</h1>
        <p className="mt-2 text-slate-300">Find us on your favorite marketplace.</p>

        <ul className="mt-8 space-y-3">
          {profiles.map((p) => (
            <li key={p.name}>
              <a href={p.url} target="_blank" className="block p-5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition">
                <p className="font-medium">{p.name}</p>
                <p className="text-sm text-slate-400">{p.desc}</p>
              </a>
            </li>
          ))}
        </ul>
      </main>
      <Footer />
    </div>
  )
}
