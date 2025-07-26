"use client"

import { Line, LineChart, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const data = [
  { month: "Jan", income: 75000, expenses: 55000, savings: 20000 },
  { month: "Feb", income: 80000, expenses: 60000, savings: 20000 },
  { month: "Mar", income: 82000, expenses: 58000, savings: 24000 },
  { month: "Apr", income: 85000, expenses: 62000, savings: 23000 },
  { month: "May", income: 88000, expenses: 65000, savings: 23000 },
  { month: "Jun", income: 90000, expenses: 68000, savings: 22000 },
  { month: "Jul", income: 92000, expenses: 70000, savings: 22000 },
]

export function FinancialChart() {
  return (
    <ChartContainer
      config={{
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
      }}
      className="h-[300px] w-full"
    >
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{
            top: 10,
            right: 10,
            left: 10,
            bottom: 0,
          }}
        >
          <CartesianGrid vertical={false} strokeDasharray="3 3" stroke="hsl(var(--muted-foreground) / 0.2)" />
          <XAxis
            dataKey="month"
            tickLine={false}
            axisLine={false}
            tickMargin={8}
            tickFormatter={(value) => value.slice(0, 3)}
            className="text-xs text-slate-400"
          />
          <YAxis
            tickLine={false}
            axisLine={false}
            tickMargin={8}
            tickFormatter={(value) => `₹${value / 1000}k`}
            className="text-xs text-slate-400"
          />
          <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
          <Line
            dataKey="income"
            type="monotone"
            stroke="hsl(var(--chart-1))"
            strokeWidth={2}
            dot={{
              fill: "hsl(var(--chart-1))",
            }}
            activeDot={{
              r: 6,
              fill: "hsl(var(--chart-1))",
              stroke: "black",
            }}
          />
          <Line
            dataKey="expenses"
            type="monotone"
            stroke="hsl(var(--chart-2))"
            strokeWidth={2}
            dot={{
              fill: "hsl(var(--chart-2))",
            }}
            activeDot={{
              r: 6,
              fill: "hsl(var(--chart-2))",
              stroke: "black",
            }}
          />
          <Line
            dataKey="savings"
            type="monotone"
            stroke="hsl(var(--chart-3))"
            strokeWidth={2}
            dot={{
              fill: "hsl(var(--chart-3))",
            }}
            activeDot={{
              r: 6,
              fill: "hsl(var(--chart-3))",
              stroke: "black",
            }}
          />
        </LineChart>
      </ResponsiveContainer>
    </ChartContainer>
  )
}
