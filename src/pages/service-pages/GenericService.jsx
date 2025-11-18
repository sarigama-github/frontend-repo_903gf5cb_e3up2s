export default function GenericService({ title, points }) {
  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-3xl font-bold">{title}</h1>
        <p className="mt-2 text-slate-300">How we help with {title.toLowerCase()}.</p>
      </header>
      <ul className="grid sm:grid-cols-2 gap-4">
        {points.map((p) => (
          <li key={p} className="p-5 rounded-xl bg-white/5 border border-white/10">
            <p className="text-sm">{p}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}
