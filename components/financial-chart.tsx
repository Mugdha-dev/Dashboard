"use client"

import { XAxis, YAxis, CartesianGrid, ResponsiveContainer, Area, AreaChart } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const chartData = [
  { month: "Jan", income: 82, expenses: 58, savings: 24, investments: 15 },
  { month: "Feb", income: 85, expenses: 61, savings: 24, investments: 18 },
  { month: "Mar", income: 85, expenses: 62, savings: 23, investments: 20 },
  { month: "Apr", income: 87, expenses: 64, savings: 23, investments: 22 },
  { month: "May", income: 85, expenses: 62, savings: 23, investments: 25 },
  { month: "Jun", income: 88, expenses: 65, savings: 23, investments: 28 },
  { month: "Jul", income: 90, expenses: 67, savings: 23, investments: 30 },
]

const chartConfig = {
  income: {
    label: "Income",
    color: "hsl(var(--chart-1))",
  },
  expenses: {
    label: "Expenses",
    color: "hsl(var(--chart-2))",
  },
  savings: {
    label: "Savings",
    color: "hsl(var(--chart-3))",
  },
  investments: {
    label: "Investments",
    color: "hsl(var(--chart-4))",
  },
}

export function FinancialChart() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="text-sm text-slate-400">
            <span className="text-2xl font-bold text-white">₹85k</span>
            <span className="block">Monthly Income</span>
          </div>
          <div className="text-sm text-slate-400">
            <span className="text-lg font-semibold text-emerald-400">+5%</span>
            <span className="block">vs last month</span>
          </div>
        </div>
        <div className="flex items-center space-x-4 text-xs">
          <div className="flex items-center space-x-1">
            <div className="w-3 h-3 rounded-full bg-cyan-400"></div>
            <span className="text-slate-300">Income</span>
          </div>
          <div className="flex items-center space-x-1">
            <div className="w-3 h-3 rounded-full bg-red-400"></div>
            <span className="text-slate-300">Expenses</span>
          </div>
          <div className="flex items-center space-x-1">
            <div className="w-3 h-3 rounded-full bg-emerald-400"></div>
            <span className="text-slate-300">Savings</span>
          </div>
          <div className="flex items-center space-x-1">
            <div className="w-3 h-3 rounded-full bg-purple-400"></div>
            <span className="text-slate-300">Investments</span>
          </div>
        </div>
      </div>

      <ChartContainer config={chartConfig} className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <defs>
              <linearGradient id="incomeGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#06b6d4" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#06b6d4" stopOpacity={0.05} />
              </linearGradient>
              <linearGradient id="expensesGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#ef4444" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#ef4444" stopOpacity={0.05} />
              </linearGradient>
              <linearGradient id="savingsGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#10b981" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#10b981" stopOpacity={0.05} />
              </linearGradient>
              <linearGradient id="investmentsGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0.05} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#334155" opacity={0.3} />
            <XAxis dataKey="month" stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
            <YAxis
              stroke="#64748b"
              fontSize={12}
              tickLine={false}
              axisLine={false}
              tickFormatter={(value) => `₹${value}k`}
            />
            <ChartTooltip content={<ChartTooltipContent />} />

            <Area type="monotone" dataKey="income" stroke="#06b6d4" strokeWidth={2} fill="url(#incomeGradient)" />
            <Area type="monotone" dataKey="expenses" stroke="#ef4444" strokeWidth={2} fill="url(#expensesGradient)" />
            <Area type="monotone" dataKey="savings" stroke="#10b981" strokeWidth={2} fill="url(#savingsGradient)" />
            <Area
              type="monotone"
              dataKey="investments"
              stroke="#8b5cf6"
              strokeWidth={2}
              fill="url(#investmentsGradient)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </ChartContainer>
    </div>
  )
}
