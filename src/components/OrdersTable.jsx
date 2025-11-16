import React from 'react'
import { BadgeCheck, Clock, XCircle } from 'lucide-react'

const orders = [
  { id: '#10234', customer: 'Ava Mitchell', total: '$248.90', status: 'Shipped', date: 'Nov 15' },
  { id: '#10233', customer: 'Liam Carter', total: '$89.00', status: 'Processing', date: 'Nov 15' },
  { id: '#10232', customer: 'Noah Patel', total: '$1,240.10', status: 'Delivered', date: 'Nov 14' },
  { id: '#10231', customer: 'Sophia Chen', total: '$59.99', status: 'Cancelled', date: 'Nov 14' },
]

const StatusPill = ({ status }) => {
  const map = {
    Delivered: {
      icon: BadgeCheck,
      class: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    },
    Shipped: {
      icon: BadgeCheck,
      class: 'bg-blue-50 text-blue-700 border-blue-200',
    },
    Processing: {
      icon: Clock,
      class: 'bg-amber-50 text-amber-700 border-amber-200',
    },
    Cancelled: {
      icon: XCircle,
      class: 'bg-rose-50 text-rose-700 border-rose-200',
    },
  }
  const item = map[status] || map['Processing']
  const Icon = item.icon
  return (
    <span className={`inline-flex items-center gap-1 rounded-full border px-2.5 py-1 text-xs ${item.class}`}>
      <Icon className="h-3.5 w-3.5" /> {status}
    </span>
  )
}

export default function OrdersTable() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6 pb-10">
      <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-base font-semibold text-slate-900">Recent Orders</h3>
          <button className="text-sm text-slate-700 border border-slate-200 bg-white hover:bg-slate-50 px-3 py-1.5 rounded-lg">View all</button>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead>
              <tr className="text-left text-slate-500">
                <th className="py-2.5">Order</th>
                <th className="py-2.5">Customer</th>
                <th className="py-2.5">Total</th>
                <th className="py-2.5">Status</th>
                <th className="py-2.5">Date</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((o) => (
                <tr key={o.id} className="border-t border-slate-100">
                  <td className="py-3 font-medium text-slate-900">{o.id}</td>
                  <td className="py-3 text-slate-700">{o.customer}</td>
                  <td className="py-3 text-slate-900">{o.total}</td>
                  <td className="py-3"><StatusPill status={o.status} /></td>
                  <td className="py-3 text-slate-500">{o.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
