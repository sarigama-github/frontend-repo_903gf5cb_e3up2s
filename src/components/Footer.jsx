export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-slate-300">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm">© {new Date().getFullYear()} Scoampny — Where AI meets Technology.</p>
          <div className="text-xs text-slate-400">
            Built with modern web and AI.
          </div>
        </div>
      </div>
    </footer>
  )
}
