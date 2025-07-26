"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Slider } from "@/components/ui/slider"
import { Progress } from "@/components/ui/progress"
import { TrendingUp, Users, Calculator, ArrowUpRight, ArrowDownRight, Brain, Send } from "lucide-react"
import { useState } from "react"
import { Input } from "@/components/ui/input"

export function NetWorthPage() {
  const [timeRange, setTimeRange] = useState("1Y")
  const [forecastYears, setForecastYears] = useState([5])
  const [monthlyInvestment, setMonthlyInvestment] = useState([15])
  const [expectedReturn, setExpectedReturn] = useState([12])

  const [chatMessage, setChatMessage] = useState("")
  const [chatHistory, setChatHistory] = useState([
    {
      type: "ai",
      content: "Hello Priya! I'm your Net Worth AI. Ask me about your financial future, goals, or projections.",
    },
  ])

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

  // Simple forecast calculation based on inputs
  const calculateForecast = () => {
    const initialAmount = netWorthData.current
    const monthlyInvest = monthlyInvestment[0] * 1000 // Convert k to actual amount
    const annualRate = expectedReturn[0] / 100
    const numYears = forecastYears[0]
    const monthlyRate = annualRate / 12
    const numMonths = numYears * 12

    let futureValue = initialAmount * Math.pow(1 + annualRate, numYears) // Growth on current net worth
    futureValue += (monthlyInvest * (Math.pow(1 + monthlyRate, numMonths) - 1)) / monthlyRate // Growth on new investments

    return futureValue
  }

  const projectedNetWorth = calculateForecast()

  const handleChatSend = () => {
    if (!chatMessage.trim()) return

    setChatHistory((prev) => [...prev, { type: "user", content: chatMessage }])

    // Simulate AI response based on message
    setTimeout(() => {
      let aiResponse = "I'm still learning to understand complex financial queries. Can you rephrase?"
      if (chatMessage.toLowerCase().includes("future")) {
        aiResponse = `Based on your current trajectory, your projected net worth in ${forecastYears[0]} years is ₹${(projectedNetWorth / 100000).toFixed(1)}L. Would you like to explore different scenarios?`
      } else if (chatMessage.toLowerCase().includes("goal")) {
        aiResponse =
          "To help you with your goals, please tell me what you're aiming for (e.g., 'buy a house', 'retire early')."
      } else if (chatMessage.toLowerCase().includes("optimize")) {
        aiResponse =
          "I can help optimize your finances. Are you looking to optimize investments, reduce expenses, or both?"
      }
      setChatHistory((prev) => [...prev, { type: "ai", content: aiResponse }])
    }, 1000)

    setChatMessage("")
  }

  return (
    <div className="space-y-8 pt-8">
      <div className="text-center">
        <h2 className="text-4xl font-bold text-white mb-3">Net Worth Tracker</h2>
        <p className="text-slate-300 text-lg">Speed dial-style tracking with AI-powered forecasts</p>
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

            <div className="flex items-center space-x-4">
              <span className="text-slate-300 min-w-0">Monthly Investment:</span>
              <div className="flex-1 max-w-md">
                <Slider
                  value={monthlyInvestment}
                  onValueChange={setMonthlyInvestment}
                  max={50}
                  min={0}
                  step={1}
                  className="w-full"
                />
              </div>
              <span className="text-white font-semibold min-w-0">₹{monthlyInvestment[0]}k</span>
            </div>

            <div className="flex items-center space-x-4">
              <span className="text-slate-300 min-w-0">Expected Return:</span>
              <div className="flex-1 max-w-md">
                <Slider
                  value={expectedReturn}
                  onValueChange={setExpectedReturn}
                  max={20}
                  min={1}
                  step={1}
                  className="w-full"
                />
              </div>
              <span className="text-white font-semibold min-w-0">{expectedReturn[0]}%</span>
            </div>

            <div className="text-center p-6 glass-dark rounded-2xl border border-slate-600/30">
              <div className="text-4xl font-bold text-emerald-400 mb-2">
                ₹{(projectedNetWorth / 100000).toFixed(1)}L
              </div>
              <p className="text-sm text-slate-400 mb-4">Projected Net Worth in {forecastYears[0]} years</p>
              <Button className="bg-gradient-to-r from-emerald-600 to-blue-600 text-white border-0">
                Create Investment Plan
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* AI Chatbot for Net Worth */}
      <Card className="glass-dark border-purple-500/30 hover:border-purple-400/50 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2 text-white text-xl">
            <Brain className="h-6 w-6 text-purple-400" />
            <span>Net Worth AI Assistant</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-64 overflow-y-auto p-4 bg-slate-800/50 rounded-lg mb-4 border border-slate-700/50">
            {chatHistory.map((msg, index) => (
              <div key={index} className={`flex ${msg.type === "user" ? "justify-end" : "justify-start"} mb-2`}>
                <div
                  className={`max-w-[70%] p-3 rounded-lg ${
                    msg.type === "user"
                      ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white"
                      : "bg-slate-700/50 text-slate-200"
                  }`}
                >
                  <p className="text-sm">{msg.content}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex space-x-2">
            <Input
              placeholder="Ask about your financial future..."
              value={chatMessage}
              onChange={(e) => setChatMessage(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleChatSend()}
              className="bg-slate-800/50 border-slate-600/30 text-white placeholder:text-slate-400"
            />
            <Button
              onClick={handleChatSend}
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white border-0"
            >
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
