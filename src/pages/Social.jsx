import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const socials = [
  { name: 'Twitter / X', url: 'https://twitter.com', handle: '@yourscoampny' },
  { name: 'LinkedIn', url: 'https://linkedin.com', handle: 'Your Company' },
  { name: 'GitHub', url: 'https://github.com', handle: 'your-handle' },
  { name: 'YouTube', url: 'https://youtube.com', handle: 'Your Channel' },
  { name: 'Instagram', url: 'https://instagram.com', handle: '@yourcompany' },
]

export default function Social() {
  return (
    <div className="min-h-screen bg-slate-950 text-white flex flex-col">
      <Navbar />
      <main className="flex-1 max-w-3xl mx-auto w-full px-4 py-16">
        <h1 className="text-4xl font-bold">Social</h1>
        <p className="mt-2 text-slate-300">Connect with us across the web.</p>

        <ul className="mt-8 space-y-3">
          {socials.map((s) => (
            <li key={s.name} className="group">
              <a href={s.url} target="_blank" className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition">
                <div>
                  <p className="font-medium">{s.name}</p>
                  <p className="text-sm text-slate-400">{s.handle}</p>
                </div>
                <span className="text-violet-300 text-sm group-hover:translate-x-1 transition-transform">Open →</span>
              </a>
            </li>
          ))}
        </ul>
      </main>
      <Footer />
    </div>
  )
}
