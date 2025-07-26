"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Slider } from "@/components/ui/slider"
import { Target, Zap, BarChart3, PieChart, Calculator, Users, ArrowUpRight, Gauge } from "lucide-react"

export function NetWorthPage() {
  const netWorthData = {
    current: 1250000,
    target: 2000000,
    speed: 8.2,
  }

  const scenarios = [
    {
      title: "Conservative Growth",
      description: "6% annual return",
      projection: 1850000,
      timeframe: "5 years",
      gradient: "from-emerald-500 to-teal-600",
    },
    {
      title: "Moderate Growth",
      description: "10% annual return",
      projection: 2250000,
      timeframe: "5 years",
      gradient: "from-blue-500 to-cyan-600",
    },
    {
      title: "Aggressive Growth",
      description: "15% annual return",
      projection: 2850000,
      timeframe: "5 years",
      gradient: "from-purple-500 to-pink-600",
    },
  ]

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-white mb-3">Net Worth Tracker</h2>
        <p className="text-slate-300">Speed dial-style tracking with AI-powered forecasts</p>
      </div>

      {/* Speed Dial Tracker */}
      <Card className="glass-dark border-purple-500/30 hover:border-purple-400/50 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20">
        <CardContent className="p-8">
          <div className="text-center">
            <div className="relative inline-flex items-center justify-center w-48 h-48 mb-6">
              {/* Outer ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 animate-pulse"></div>

              {/* Speed indicator */}
              <div className="relative w-40 h-40 rounded-full bg-gradient-to-br from-slate-800 to-slate-900 border-4 border-purple-500/30 flex items-center justify-center">
                <div className="text-center">
                  <div className="flex items-center justify-center mb-2">
                    <Gauge className="h-8 w-8 text-purple-400 mr-2" />
                    <span className="text-4xl font-bold text-white">{netWorthData.speed}%</span>
                  </div>
                  <p className="text-sm text-purple-300">Wealth Speed</p>
                </div>
              </div>

              {/* Progress arc */}
              <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="45" fill="none" stroke="rgb(71 85 105 / 0.3)" strokeWidth="2" />
                <circle
                  cx="50"
                  cy="50"
                  r="45"
                  fill="none"
                  stroke="url(#gradient)"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeDasharray={`${(netWorthData.current / netWorthData.target) * 283} 283`}
                  className="transition-all duration-1000"
                />
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="rgb(168 85 247)" />
                    <stop offset="100%" stopColor="rgb(236 72 153)" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            <div className="grid grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-1">₹{(netWorthData.current / 100000).toFixed(1)}L</div>
                <div className="text-sm text-slate-400">Current Net Worth</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-400 mb-1">
                  ₹{(netWorthData.target / 100000).toFixed(1)}L
                </div>
                <div className="text-sm text-slate-400">Target</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-emerald-400 mb-1">
                  {((netWorthData.current / netWorthData.target) * 100).toFixed(0)}%
                </div>
                <div className="text-sm text-slate-400">Progress</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Trend Graph */}
        <Card className="glass-dark border-slate-700/50 hover:border-slate-600/70 transition-all duration-300">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="flex items-center space-x-2 text-white">
                <BarChart3 className="h-5 w-5 text-blue-400" />
                <span>Net Worth Trend</span>
              </CardTitle>
              <div className="flex space-x-2">
                <Button size="sm" className="bg-slate-700 hover:bg-slate-600 text-white border-0 text-xs">
                  1M
                </Button>
                <Button size="sm" className="bg-slate-700 hover:bg-slate-600 text-white border-0 text-xs">
                  3M
                </Button>
                <Button size="sm" className="bg-gradient-to-r from-purple-600 to-pink-600 text-white border-0 text-xs">
                  YTD
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { month: "Aug", value: 1050000, change: 5.2 },
                { month: "Sep", value: 1120000, change: 6.7 },
                { month: "Oct", value: 1180000, change: 5.4 },
                { month: "Nov", value: 1210000, change: 2.5 },
                { month: "Dec", value: 1250000, change: 3.3 },
              ].map((data, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 glass-dark rounded-xl border border-slate-600/30"
                >
                  <div className="flex items-center space-x-4">
                    <div className="text-sm font-medium text-slate-400 w-8">{data.month}</div>
                    <div className="flex-1">
                      <Progress value={(data.value / netWorthData.target) * 100} className="h-3 bg-slate-800" />
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="text-sm font-medium text-white">₹{(data.value / 100000).toFixed(1)}L</div>
                    <div className="flex items-center text-xs text-emerald-400">
                      <ArrowUpRight className="h-3 w-3 mr-1" />
                      {data.change}%
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Peer Comparison */}
        <Card className="glass-dark border-slate-700/50 hover:border-slate-600/70 transition-all duration-300">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2 text-white">
              <Users className="h-5 w-5 text-purple-400" />
              <span>Peer Comparison</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="text-center p-6 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-2xl border border-purple-500/20">
                <div className="text-4xl font-bold text-purple-400 mb-2">78th</div>
                <p className="text-sm text-slate-300">Percentile</p>
                <p className="text-xs text-slate-400 mt-2">You're ahead of 78% of peers in your demographic</p>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-slate-400">Age Group</span>
                  <Badge className="bg-slate-700/50 text-slate-300 border-slate-600/30">28-32</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-slate-400">Income Range</span>
                  <Badge className="bg-slate-700/50 text-slate-300 border-slate-600/30">₹80k-90k</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-slate-400">Location</span>
                  <Badge className="bg-slate-700/50 text-slate-300 border-slate-600/30">Bangalore</Badge>
                </div>
                <div className="pt-4 border-t border-slate-700/50 space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-white">Your Net Worth</span>
                    <span className="font-bold text-emerald-400">₹{(netWorthData.current / 100000).toFixed(1)}L</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-white">Peer Average</span>
                    <span className="font-bold text-slate-400">₹9.5L</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-white">Difference</span>
                    <span className="font-bold text-emerald-400">+₹3.0L</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* AI Forecast Scenarios */}
      <Card className="glass-dark border-slate-700/50 hover:border-slate-600/70 transition-all duration-300">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2 text-white">
            <Calculator className="h-5 w-5 text-amber-400" />
            <span>AI Forecast Simulator</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {scenarios.map((scenario, index) => (
              <div
                key={index}
                className="p-6 glass-dark rounded-2xl border border-slate-600/30 hover:border-slate-500/50 transition-all duration-300 hover:shadow-xl cursor-pointer"
              >
                <div className="text-center">
                  <div
                    className={`p-4 rounded-2xl bg-gradient-to-br ${scenario.gradient} shadow-lg mx-auto w-fit mb-4`}
                  >
                    <Target className="h-6 w-6 text-white" />
                  </div>
                  <h4 className="font-bold text-white mb-2">{scenario.title}</h4>
                  <p className="text-sm text-slate-400 mb-4">{scenario.description}</p>
                  <div className="text-3xl font-bold text-white mb-2">
                    ₹{(scenario.projection / 100000).toFixed(1)}L
                  </div>
                  <p className="text-xs text-slate-500 mb-4">in {scenario.timeframe}</p>
                  <Button
                    size="sm"
                    className={`w-full bg-gradient-to-r ${scenario.gradient} text-white border-0 hover:opacity-90`}
                  >
                    Simulate Path
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* Interactive Simulator */}
          <div className="p-6 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl border border-blue-500/20">
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-3 bg-gradient-to-br from-blue-500/30 to-purple-500/30 rounded-full">
                <Zap className="h-6 w-6 text-blue-300" />
              </div>
              <div>
                <h3 className="font-bold text-white text-lg">Goal Simulation</h3>
                <p className="text-sm text-slate-300">Adjust parameters to see different outcomes</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <label className="text-sm font-medium text-white mb-3 block">Monthly Investment: ₹15,000</label>
                  <Slider defaultValue={[15]} max={50} step={5} className="w-full" />
                </div>
                <div>
                  <label className="text-sm font-medium text-white mb-3 block">Expected Return: 12%</label>
                  <Slider defaultValue={[12]} max={20} step={1} className="w-full" />
                </div>
                <div>
                  <label className="text-sm font-medium text-white mb-3 block">Time Horizon: 5 years</label>
                  <Slider defaultValue={[5]} max={15} step={1} className="w-full" />
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="text-center p-6 glass-dark rounded-2xl border border-slate-600/30">
                  <div className="text-4xl font-bold text-emerald-400 mb-2">₹28.5L</div>
                  <p className="text-sm text-slate-400 mb-4">Projected Net Worth</p>
                  <Button className="bg-gradient-to-r from-emerald-600 to-blue-600 text-white border-0">
                    Create Investment Plan
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Export & Connect */}
      <Card className="glass-dark border-slate-700/50">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-gradient-to-br from-amber-500/30 to-orange-500/30 rounded-full">
                <PieChart className="h-6 w-6 text-amber-400" />
              </div>
              <div>
                <h3 className="font-bold text-white mb-1">Export & Connect</h3>
                <p className="text-sm text-slate-400">Share insights with external tools or advisors</p>
              </div>
            </div>
            <div className="flex space-x-3">
              <Button className="bg-slate-700 hover:bg-slate-600 text-white border-0">Export PDF</Button>
              <Button className="bg-slate-700 hover:bg-slate-600 text-white border-0">Connect Excel</Button>
              <Button className="bg-gradient-to-r from-emerald-600 to-blue-600 text-white border-0 hover:opacity-90">
                Share with Advisor
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
