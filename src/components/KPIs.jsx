import React from 'react'
import { DollarSign, Package, Users, ArrowUpRight, ArrowDownRight } from 'lucide-react'

const kpis = [
  { label: 'Revenue', value: '$128,940', change: '+12.4%', up: true, icon: DollarSign, color: 'bg-emerald-50 text-emerald-700' },
  { label: 'Orders', value: '2,340', change: '+3.1%', up: true, icon: Package, color: 'bg-blue-50 text-blue-700' },
  { label: 'Customers', value: '18,472', change: '-0.8%', up: false, icon: Users, color: 'bg-amber-50 text-amber-700' },
]

export default function KPIs() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {kpis.map((k) => (
          <div key={k.label} className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
            <div className="flex items-center justify-between">
              <div className={`inline-flex items-center gap-2 rounded-lg px-2.5 py-1 text-sm ${k.color}`}>
                <k.icon className="h-4 w-4" />
                {k.label}
              </div>
              <div className={`inline-flex items-center text-sm ${k.up ? 'text-emerald-600' : 'text-rose-600'}`}>
                {k.up ? <ArrowUpRight className="h-4 w-4" /> : <ArrowDownRight className="h-4 w-4" />}
                <span className="ml-1 font-medium">{k.change}</span>
              </div>
            </div>
            <div className="mt-4">
              <p className="text-3xl font-semibold tracking-tight text-slate-900">{k.value}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
