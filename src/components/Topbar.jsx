import React from 'react'
import { Menu, Search, Bell, User } from 'lucide-react'

export default function Topbar() {
  return (
    <header className="sticky top-0 z-20 w-full border-b border-slate-200 bg-white/80 backdrop-blur">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <button className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-white hover:bg-slate-50">
            <Menu className="h-5 w-5 text-slate-700" />
          </button>
          <span className="font-semibold text-slate-900">Aurora Commerce</span>
        </div>
        <div className="hidden md:flex items-center gap-2 flex-1 max-w-md mx-4">
          <div className="relative w-full">
            <input
              className="w-full rounded-lg border border-slate-200 bg-slate-50/60 px-10 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-slate-200"
              placeholder="Search products, orders, customers"
            />
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button className="relative inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-white hover:bg-slate-50">
            <Bell className="h-5 w-5 text-slate-700" />
            <span className="absolute -top-0.5 -right-0.5 h-4 w-4 rounded-full bg-rose-500 text-[10px] font-medium text-white flex items-center justify-center">3</span>
          </button>
          <button className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white">
            <User className="h-5 w-5 text-slate-700" />
          </button>
        </div>
      </div>
    </header>
  )
}
