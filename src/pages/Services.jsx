import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Outlet, Link } from 'react-router-dom'

const categories = [
  'AI Consulting',
  'Automation & Agents',
  'Product Engineering',
  'Cloud & DevOps',
  'Data & Analytics',
  'Security & Compliance',
]

export default function ServicesLayout() {
  return (
    <div className="min-h-screen bg-slate-950 text-white flex flex-col">
      <Navbar />
      <main className="flex-1 max-w-6xl mx-auto w-full px-4 py-16">
        <div className="flex flex-col lg:flex-row gap-8">
          <aside className="lg:w-64 flex-shrink-0">
            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
              <p className="font-semibold mb-3">All services</p>
              <ul className="space-y-2 text-sm">
                {categories.map((c) => {
                  const href = `/services/${c.toLowerCase().replace(/\s+/g, '-')}`
                  return (
                    <li key={c}><Link to={href} className="block px-3 py-2 rounded hover:bg-white/10">{c}</Link></li>
                  )
                })}
              </ul>
            </div>
          </aside>
          <section className="flex-1 min-w-0">
            <Outlet />
          </section>
        </div>
      </main>
      <Footer />
    </div>
  )
}
