import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-[88vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(76,29,149,0.25),transparent_60%)] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <p className="inline-flex items-center text-xs font-medium px-2.5 py-1.5 rounded-full bg-white/10 border border-white/10 backdrop-blur mb-4">Where AI meets Technology</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
              Elevate your business with AI-driven IT solutions
            </h1>
            <p className="mt-5 text-slate-200/90 text-lg max-w-xl">
              We design, build and deploy intelligent systems that automate, scale and delight. From cloud-native apps to custom AI agents, we deliver measurable impact.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#services" className="inline-flex items-center justify-center px-5 py-3 rounded-md bg-violet-500 hover:bg-violet-600 text-white font-semibold shadow-lg shadow-violet-500/20">Explore Services</a>
              <a href="/contact" className="inline-flex items-center justify-center px-5 py-3 rounded-md bg-white/10 hover:bg-white/20 text-white font-semibold border border-white/10">Talk to Us</a>
            </div>
          </motion.div>

          <motion.ul
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="lg:justify-self-end grid grid-cols-2 gap-3 text-white/90 w-full max-w-md"
          >
            {[
              ['AI Consulting', 'Blueprint your AI roadmap'],
              ['Custom Software', 'Modern web & mobile'],
              ['Automation', 'Workflows and agents'],
              ['Cloud & DevOps', 'Secure, scalable, reliable'],
            ].map(([title, subtitle]) => (
              <li key={title} className="p-4 rounded-xl bg-white/10 border border-white/10 backdrop-blur">
                <p className="text-sm font-medium">{title}</p>
                <p className="text-xs text-white/70 mt-1">{subtitle}</p>
              </li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  )
}
