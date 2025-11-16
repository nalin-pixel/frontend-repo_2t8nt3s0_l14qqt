import React from 'react'
import Hero from './components/Hero'
import KPIs from './components/KPIs'
import SalesChart from './components/SalesChart'
import OrdersTable from './components/OrdersTable'
import Topbar from './components/Topbar'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Topbar />
      <Hero />
      <KPIs />
      <SalesChart />
      <OrdersTable />
    </div>
  )
}

export default App
