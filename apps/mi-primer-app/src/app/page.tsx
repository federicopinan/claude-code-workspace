import { CounterContainer } from '@/components/Counter'

export default function HomePage() {
  return (
    <main className="min-h-screen p-8 bg-gradient-to-b from-slate-50 to-slate-100">
      <div className="max-w-md mx-auto">
        <h1 className="text-2xl font-bold text-slate-900 mb-2">Mi Primer App</h1>
        <p className="text-slate-600 mb-8">
          Ejemplo de estructura y patrones usados en este workspace
        </p>

        <CounterContainer />

        <div className="mt-8 p-4 bg-amber-50 border border-amber-200 rounded-lg">
          <h2 className="text-sm font-semibold text-amber-800 mb-2">Patronesdemonstrados:</h2>
          <ul className="text-sm text-amber-700 space-y-1">
            <li>Container/Presentational pattern</li>
            <li>Custom hooks para lógica de negocio</li>
            <li>Zod validation</li>
            <li>Interfaces sobre types</li>
          </ul>
        </div>
      </div>
    </main>
  )
}