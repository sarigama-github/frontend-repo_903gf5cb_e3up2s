import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import ServicesPreview from '../components/ServicesPreview'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-900">
      <Navbar />
      <Hero />
      <ServicesPreview />
      <Footer />
    </div>
  )
}
