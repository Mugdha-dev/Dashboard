"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Slider } from "@/components/ui/slider"
import { Progress } from "@/components/ui/progress"
import { TrendingUp, Users, Calculator, ArrowUpRight, ArrowDownRight } from "lucide-react"
import { useState } from "react"

export function NetWorthPage() {
  const [timeRange, setTimeRange] = useState("1Y")
  const [forecastYears, setForecastYears] = useState([5])

  const netWorthData = {
    current: 1250000,
    change: 8.2,
    assets: {
      investments: 850000,
      savings: 200000,
      property: 500000,
      other: 250000,
    },
    liabilities: {
      homeLoan: 400000,
      carLoan: 100000,
      creditCard: 50000,
    },
  }

  const peerComparison = {
    percentile: 78,
    averageNetWorth: 950000,
    topPercentile: 2100000,
  }

  const forecast = {
    conservative: 1850000,
    moderate: 2250000,
    aggressive: 2850000,
  }

  return (
    <div className="space-y-8 pt-8">
      <div className="text-center">
        <h2 className="text-4xl font-bold text-white mb-3">Net Worth Tracker</h2>
        <p className="text-slate-300 text-lg">Track your financial progress and forecast your future</p>
      </div>

      {/* Speed Dial Net Worth */}
      <div className="flex justify-center">
        <Card className="glass-dark border-slate-700/50 w-96">
          <CardContent className="p-8">
            <div className="relative">
              <div className="w-64 h-64 mx-auto relative">
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="45" stroke="rgb(51, 65, 85)" strokeWidth="8" fill="none" />
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    stroke="url(#gradient)"
                    strokeWidth="8"
                    fill="none"
                    strokeDasharray={`${(netWorthData.current / 2000000) * 283} 283`}
                    strokeLinecap="round"
                    className="transition-all duration-1000"
                  />
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#06b6d4" />
                      <stop offset="50%" stopColor="#8b5cf6" />
                      <stop offset="100%" stopColor="#ec4899" />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <div className="text-3xl font-bold text-white mb-1">
                    ₹{(netWorthData.current / 100000).toFixed(1)}L
                  </div>
                  <div className="text-sm text-slate-400 mb-2">Net Worth</div>
                  <div className="flex items-center">
                    <ArrowUpRight className="h-4 w-4 mr-1 text-emerald-400" />
                    <span className="text-sm text-emerald-400">+{netWorthData.change}%</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Time Range Selector */}
      <div className="flex justify-center">
        <div className="flex space-x-2 bg-slate-800/50 rounded-lg p-1">
          {["1M", "3M", "6M", "1Y", "YTD", "ALL"].map((range) => (
            <Button
              key={range}
              variant={timeRange === range ? "default" : "ghost"}
              size="sm"
              className={`${
                timeRange === range
                  ? "bg-gradient-to-r from-cyan-600 to-blue-600 text-white"
                  : "text-slate-400 hover:text-white"
              }`}
              onClick={() => setTimeRange(range)}
            >
              {range}
            </Button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Assets Breakdown */}
        <Card className="glass-dark border-slate-700/50">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2 text-white text-xl">
              <TrendingUp className="h-6 w-6 text-emerald-400" />
              <span>Assets</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {Object.entries(netWorthData.assets).map(([key, value], index) => {
                const colors = ["bg-emerald-500", "bg-cyan-500", "bg-purple-500", "bg-amber-500"]
                const percentage = (value / Object.values(netWorthData.assets).reduce((a, b) => a + b, 0)) * 100

                return (
                  <div key={key} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center space-x-2">
                        <div className={`w-3 h-3 rounded-full ${colors[index]}`}></div>
                        <span className="text-slate-300 capitalize">{key}</span>
                      </div>
                      <span className="text-white font-semibold">₹{(value / 100000).toFixed(1)}L</span>
                    </div>
                    <Progress value={percentage} className="h-2 bg-slate-800" />
                  </div>
                )
              })}
            </div>
          </CardContent>
        </Card>

        {/* Liabilities Breakdown */}
        <Card className="glass-dark border-slate-700/50">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2 text-white text-xl">
              <ArrowDownRight className="h-6 w-6 text-red-400" />
              <span>Liabilities</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {Object.entries(netWorthData.liabilities).map(([key, value], index) => {
                const colors = ["bg-red-500", "bg-orange-500", "bg-pink-500"]
                const percentage = (value / Object.values(netWorthData.liabilities).reduce((a, b) => a + b, 0)) * 100

                return (
                  <div key={key} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center space-x-2">
                        <div className={`w-3 h-3 rounded-full ${colors[index]}`}></div>
                        <span className="text-slate-300 capitalize">{key.replace(/([A-Z])/g, " $1")}</span>
                      </div>
                      <span className="text-white font-semibold">₹{(value / 100000).toFixed(1)}L</span>
                    </div>
                    <Progress value={percentage} className="h-2 bg-slate-800" />
                  </div>
                )
              })}
            </div>
          </CardContent>
        </Card>

        {/* Peer Comparison */}
        <Card className="glass-dark border-slate-700/50">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2 text-white text-xl">
              <Users className="h-6 w-6 text-blue-400" />
              <span>Peer Comparison</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">{peerComparison.percentile}th</div>
                <div className="text-sm text-slate-400">Percentile</div>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-slate-300">Your Net Worth</span>
                  <span className="text-white font-semibold">₹{(netWorthData.current / 100000).toFixed(1)}L</span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-slate-300">Peer Average</span>
                  <span className="text-slate-400">₹{(peerComparison.averageNetWorth / 100000).toFixed(1)}L</span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-slate-300">Top 10%</span>
                  <span className="text-amber-400">₹{(peerComparison.topPercentile / 100000).toFixed(1)}L</span>
                </div>
              </div>

              <Badge className="w-full justify-center bg-emerald-500/20 text-emerald-300 border-emerald-500/30">
                Above Average Performance
              </Badge>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Forecast Simulator */}
      <Card className="glass-dark border-slate-700/50">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2 text-white text-xl">
            <Calculator className="h-6 w-6 text-purple-400" />
            <span>Net Worth Forecast</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <span className="text-slate-300 min-w-0">Forecast Period:</span>
              <div className="flex-1 max-w-md">
                <Slider
                  value={forecastYears}
                  onValueChange={setForecastYears}
                  max={20}
                  min={1}
                  step={1}
                  className="w-full"
                />
              </div>
              <span className="text-white font-semibold min-w-0">{forecastYears[0]} years</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-4 bg-gradient-to-r from-red-500/10 to-orange-500/10 rounded-xl border border-red-500/20">
                <div className="text-2xl font-bold text-red-400 mb-2">
                  ₹{(forecast.conservative / 100000).toFixed(1)}L
                </div>
                <div className="text-sm text-slate-400">Conservative (5% growth)</div>
              </div>

              <div className="text-center p-4 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-xl border border-blue-500/20">
                <div className="text-2xl font-bold text-cyan-400 mb-2">₹{(forecast.moderate / 100000).toFixed(1)}L</div>
                <div className="text-sm text-slate-400">Moderate (8% growth)</div>
              </div>

              <div className="text-center p-4 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-xl border border-emerald-500/20">
                <div className="text-2xl font-bold text-emerald-400 mb-2">
                  ₹{(forecast.aggressive / 100000).toFixed(1)}L
                </div>
                <div className="text-sm text-slate-400">Aggressive (12% growth)</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
