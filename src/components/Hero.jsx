import React from 'react'
import Spline from '@splinetool/react-spline'
import { ShoppingCart, TrendingUp, Sparkles } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative h-[58vh] md:h-[64vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/8nsoLg1te84JZcE9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Soft gradient overlay for readability */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/60 via-white/40 to-white/90" />

      <div className="relative z-10 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-end pb-10">
        <div className="w-full">
          <div className="flex items-center gap-2 text-sm text-slate-700 mb-3">
            <span className="inline-flex items-center gap-1 rounded-full bg-white/70 backdrop-blur px-3 py-1 shadow-sm border border-slate-200">
              <Sparkles className="h-4 w-4 text-amber-500" />
              Live snapshot
            </span>
            <span className="text-slate-400">•</span>
            <span className="text-slate-600">Updated 2m ago</span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-slate-900">
                Commerce Dashboard
              </h1>
              <p className="mt-2 max-w-xl text-slate-600">
                A modern command center for your e‑commerce brand — monitor sales, orders, and growth in real time.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <button className="inline-flex items-center gap-2 rounded-lg bg-slate-900 text-white px-4 py-2 shadow-sm hover:opacity-95 transition">
                <ShoppingCart className="h-4 w-4" />
                Add Product
              </button>
              <button className="inline-flex items-center gap-2 rounded-lg bg-white border border-slate-200 text-slate-700 px-4 py-2 shadow-sm hover:bg-slate-50 transition">
                <TrendingUp className="h-4 w-4 text-emerald-600" />
                View Reports
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
