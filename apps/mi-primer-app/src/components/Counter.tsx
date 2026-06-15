'use client'

import { useCounter } from '@/hooks/useCounter'
import { useState } from 'react'

// Presentational component - only handles presentation
// No business logic, receives everything via props
interface CounterDisplayProps {
  count: number
  label?: string
}

function CounterDisplay({ count, label = 'Count' }: CounterDisplayProps) {
  return (
    <div className="flex flex-col items-center gap-2 p-4 bg-slate-100 rounded-lg">
      <span className="text-sm text-slate-500">{label}</span>
      <span className="text-4xl font-bold text-slate-900">{count}</span>
    </div>
  )
}

// Container component - handles logic and state
// Composes the presentational component with hooks
export function CounterContainer() {
  const { count, increment, decrement, reset } = useCounter({
    initialValue: 0,
    min: 0,
    max: 100,
  })
  const [showDebug, setShowDebug] = useState(false)

  return (
    <div className="flex flex-col gap-6 p-6 bg-white rounded-xl shadow-sm border border-slate-200">
      <CounterDisplay count={count} label="Contador" />

      <div className="flex gap-2 justify-center">
        <button
          onClick={decrement}
          className="px-4 py-2 bg-slate-200 hover:bg-slate-300 rounded-lg font-medium transition-colors"
        >
          -
        </button>
        <button
          onClick={increment}
          className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
        >
          +
        </button>
        <button
          onClick={reset}
          className="px-4 py-2 bg-slate-200 hover:bg-slate-300 rounded-lg font-medium transition-colors"
        >
          Reset
        </button>
      </div>

      <button
        onClick={() => setShowDebug(!showDebug)}
        className="text-sm text-slate-400 hover:text-slate-600"
      >
        {showDebug ? 'Ocultar' : 'Mostrar'} debug
      </button>

      {showDebug && (
        <pre className="text-xs bg-slate-900 text-slate-100 p-2 rounded overflow-auto">
          {JSON.stringify({ count }, null, 2)}
        </pre>
      )}
    </div>
  )
}
