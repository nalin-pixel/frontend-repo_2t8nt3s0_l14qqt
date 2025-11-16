import React from 'react'
import { Line } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Filler,
} from 'chart.js'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Filler)

const labels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
const data = {
  labels,
  datasets: [
    {
      label: 'Sales',
      data: [120, 190, 170, 230, 260, 280, 310],
      borderColor: 'rgb(15 23 42)', // slate-900
      backgroundColor: 'rgba(15, 23, 42, 0.08)',
      fill: true,
      tension: 0.4,
    },
  ],
}

const options = {
  responsive: true,
  plugins: { legend: { display: false } },
  scales: {
    x: { grid: { display: false } },
    y: { grid: { color: 'rgba(0,0,0,0.05)' }, ticks: { stepSize: 100 } },
  },
}

export default function SalesChart() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
      <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-base font-semibold text-slate-900">Weekly Sales</h3>
          <span className="text-sm text-slate-500">This week</span>
        </div>
        <Line data={data} options={options} height={85} />
      </div>
    </section>
  )
}
