import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function About() {
  return (
    <div className="min-h-screen bg-slate-950 text-white flex flex-col">
      <Navbar />
      <main className="flex-1 max-w-4xl mx-auto w-full px-4 py-16">
        <h1 className="text-4xl font-bold">About Us</h1>
        <p className="mt-3 text-slate-300">We are a technology studio blending AI research with practical engineering. Our mission is to help businesses automate, innovate and scale with confidence.</p>

        <div className="mt-8 grid sm:grid-cols-2 gap-6">
          <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
            <h3 className="font-semibold">What we do</h3>
            <p className="text-sm text-slate-300 mt-1">Advisory, prototyping and full-cycle delivery across AI, cloud and software.</p>
          </div>
          <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
            <h3 className="font-semibold">How we work</h3>
            <p className="text-sm text-slate-300 mt-1">Small senior teams, transparent process, outcome-focused engagement.</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
