import { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white flex flex-col">
      <Navbar />
      <main className="flex-1 max-w-3xl mx-auto w-full px-4 py-16">
        <h1 className="text-4xl font-bold">Contact</h1>
        <p className="mt-2 text-slate-300">Tell us about your project. We usually respond within one business day.</p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-4">
          <div>
            <label className="block text-sm mb-1">Name</label>
            <input value={form.name} onChange={(e)=>setForm({...form,name:e.target.value})} className="w-full px-3 py-2 rounded-md bg-white/5 border border-white/10 focus:outline-none focus:ring-2 focus:ring-violet-500" required />
          </div>
          <div>
            <label className="block text-sm mb-1">Email</label>
            <input type="email" value={form.email} onChange={(e)=>setForm({...form,email:e.target.value})} className="w-full px-3 py-2 rounded-md bg-white/5 border border-white/10 focus:outline-none focus:ring-2 focus:ring-violet-500" required />
          </div>
          <div>
            <label className="block text-sm mb-1">Message</label>
            <textarea rows="5" value={form.message} onChange={(e)=>setForm({...form,message:e.target.value})} className="w-full px-3 py-2 rounded-md bg-white/5 border border-white/10 focus:outline-none focus:ring-2 focus:ring-violet-500" required />
          </div>
          <button className="px-5 py-3 rounded-md bg-violet-500 hover:bg-violet-600 font-semibold">Send</button>
          {sent && <p className="text-sm text-emerald-300">Thanks! We will get back to you soon.</p>}
        </form>
      </main>
      <Footer />
    </div>
  )
}
