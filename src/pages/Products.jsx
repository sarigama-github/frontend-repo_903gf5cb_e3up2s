import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Products() {
  return (
    <div className="min-h-screen bg-slate-950 text-white flex flex-col">
      <Navbar />
      <main className="flex-1 grid place-items-center px-4">
        <div className="text-center">
          <div className="mx-auto mb-6 w-24 h-24 rounded-full bg-gradient-to-br from-violet-500 via-fuchsia-500 to-amber-400 animate-pulse"></div>
          <h1 className="text-4xl font-bold">Products</h1>
          <p className="mt-2 text-slate-300">Coming soon. We are crafting something intelligent.</p>
          <div className="mt-8 inline-flex items-center gap-2 text-sm text-slate-400">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping"></span>
            <span>In progress — stay tuned.</span>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
