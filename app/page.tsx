"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import {
  TrendingUp,
  Wallet,
  PiggyBank,
  CreditCard,
  ArrowUpRight,
  ArrowDownRight,
  Sparkles,
  MessageCircle,
  AlertCircle,
  Zap,
  Brain,
} from "lucide-react"
import { AIAssistant } from "@/components/ai-assistant"
import { PersonaHeader } from "@/components/persona-header"
import { Navigation } from "@/components/navigation"
import { SmartAlerts } from "@/components/smart-alerts"
import { AgentsPage } from "@/components/agents-page"
import { BillManagerPage } from "@/components/bill-manager-page"
import { NetWorthPage } from "@/components/networth-page"

export default function HomePage() {
  const [currentPage, setCurrentPage] = useState("home")

  // Mock user data
  const userData = {
    name: "Priya",
    persona: "Voyager",
    personaDescription: "Exploring new financial opportunities",
    netWorth: 1250000,
    assets: 1800000,
    liabilities: 550000,
    monthlyIncome: 85000,
    monthlyExpenses: 62000,
  }

  const insights = [
    {
      type: "opportunity",
      title: "Idle Funds Alert",
      description: "₹45,000 sitting idle in savings. Consider moving to high-yield investments.",
      action: "Optimize Now",
      icon: <PiggyBank className="h-4 w-4" />,
      glow: "shadow-emerald-500/20",
    },
    {
      type: "warning",
      title: "Unusual Spending",
      description: "Food & dining expenses up 23% this month vs average.",
      action: "Review Expenses",
      icon: <AlertCircle className="h-4 w-4" />,
      glow: "shadow-amber-500/20",
    },
    {
      type: "growth",
      title: "Investment Growth",
      description: "Your portfolio is up 12.5% YTD. Consider rebalancing.",
      action: "View Portfolio",
      icon: <TrendingUp className="h-4 w-4" />,
      glow: "shadow-blue-500/20",
    },
  ]

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <HomeContent userData={userData} insights={insights} />
      case "agents":
        return <AgentsPage />
      case "bills":
        return <BillManagerPage />
      case "networth":
        return <NetWorthPage />
      default:
        return <HomeContent userData={userData} insights={insights} />
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-900">
      {/* AI Assistant */}
      <AIAssistant />

      {/* Header */}
      <PersonaHeader persona={userData.persona} description={userData.personaDescription} name={userData.name} />

      {/* Navigation */}
      <Navigation currentPage={currentPage} onPageChange={setCurrentPage} />

      {/* Main Content */}
      <div className="px-4 pb-8">
        <div className="max-w-7xl mx-auto">{renderPage()}</div>
      </div>
    </div>
  )
}

function HomeContent({ userData, insights }: { userData: any; insights: any[] }) {
  return (
    <>
      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card className="glass-dark border-emerald-500/20 hover:border-emerald-400/40 transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-500/10 group">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-emerald-300/80 text-sm font-medium">Net Worth</p>
                <p className="text-3xl font-bold text-white mb-2">₹{(userData.netWorth / 100000).toFixed(1)}L</p>
                <div className="flex items-center">
                  <ArrowUpRight className="h-4 w-4 mr-1 text-emerald-400" />
                  <span className="text-sm text-emerald-400">+8.2% this month</span>
                </div>
              </div>
              <div className="p-4 bg-gradient-to-br from-emerald-500/20 to-emerald-600/20 rounded-full group-hover:from-emerald-400/30 group-hover:to-emerald-500/30 transition-all duration-300">
                <Wallet className="h-8 w-8 text-emerald-400" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="glass-dark border-blue-500/20 hover:border-blue-400/40 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10 group">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-blue-300/80 text-sm font-medium">Total Assets</p>
                <p className="text-3xl font-bold text-white mb-2">₹{(userData.assets / 100000).toFixed(1)}L</p>
                <div className="flex items-center">
                  <ArrowUpRight className="h-4 w-4 mr-1 text-blue-400" />
                  <span className="text-sm text-blue-400">+5.1% this month</span>
                </div>
              </div>
              <div className="p-4 bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-full group-hover:from-blue-400/30 group-hover:to-blue-500/30 transition-all duration-300">
                <TrendingUp className="h-8 w-8 text-blue-400" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="glass-dark border-red-500/20 hover:border-red-400/40 transition-all duration-300 hover:shadow-2xl hover:shadow-red-500/10 group">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-red-300/80 text-sm font-medium">Liabilities</p>
                <p className="text-3xl font-bold text-white mb-2">₹{(userData.liabilities / 100000).toFixed(1)}L</p>
                <div className="flex items-center">
                  <ArrowDownRight className="h-4 w-4 mr-1 text-red-400" />
                  <span className="text-sm text-red-400">-2.3% this month</span>
                </div>
              </div>
              <div className="p-4 bg-gradient-to-br from-red-500/20 to-red-600/20 rounded-full group-hover:from-red-400/30 group-hover:to-red-500/30 transition-all duration-300">
                <CreditCard className="h-8 w-8 text-red-400" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* AI Chat Prompt */}
      <Card className="mb-8 glass-dark border-purple-500/30 hover:border-purple-400/50 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20">
        <CardContent className="p-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-gradient-to-br from-purple-500/30 to-pink-500/30 rounded-full animate-pulse">
                <Brain className="h-8 w-8 text-purple-300" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">AI Financial Assistant</h3>
                <p className="text-purple-200/80">Ask me anything about your finances...</p>
                <p className="text-sm text-purple-300/60 mt-1">
                  Try: "Can I afford a ₹50L home in 3 years?" or "Optimize my portfolio"
                </p>
              </div>
            </div>
            <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white border-0 shadow-lg hover:shadow-purple-500/25 transition-all duration-300">
              <MessageCircle className="h-4 w-4 mr-2" />
              Start Chat
            </Button>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Smart Insights */}
        <Card className="lg:col-span-2 glass-dark border-slate-700/50 hover:border-slate-600/70 transition-all duration-300">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2 text-white">
              <Sparkles className="h-5 w-5 text-amber-400" />
              <span>Smart Insights</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {insights.map((insight, index) => (
                <div
                  key={index}
                  className={`p-4 rounded-xl bg-gradient-to-r from-slate-800/50 to-slate-700/30 border border-slate-600/30 hover:border-slate-500/50 transition-all duration-300 hover:shadow-lg ${insight.glow}`}
                >
                  <div className="flex items-start space-x-3">
                    <div
                      className={`p-2 rounded-full ${
                        insight.type === "opportunity"
                          ? "bg-emerald-500/20 text-emerald-400"
                          : insight.type === "warning"
                            ? "bg-amber-500/20 text-amber-400"
                            : "bg-blue-500/20 text-blue-400"
                      }`}
                    >
                      {insight.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-white mb-1">{insight.title}</h4>
                      <p className="text-sm text-slate-300 mb-3">{insight.description}</p>
                      <Button
                        size="sm"
                        className="bg-gradient-to-r from-slate-700 to-slate-600 hover:from-slate-600 hover:to-slate-500 text-white border-0 text-xs"
                      >
                        {insight.action}
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card className="glass-dark border-slate-700/50 hover:border-slate-600/70 transition-all duration-300">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2 text-white">
              <Zap className="h-5 w-5 text-amber-400" />
              <span>Quick Actions</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-3">
              <Button className="h-20 flex-col space-y-2 bg-gradient-to-br from-emerald-600/20 to-emerald-700/20 hover:from-emerald-500/30 hover:to-emerald-600/30 border border-emerald-500/30 hover:border-emerald-400/50 text-white transition-all duration-300">
                <PiggyBank className="h-6 w-6 text-emerald-400" />
                <span className="text-xs">Add Goal</span>
              </Button>
              <Button className="h-20 flex-col space-y-2 bg-gradient-to-br from-blue-600/20 to-blue-700/20 hover:from-blue-500/30 hover:to-blue-600/30 border border-blue-500/30 hover:border-blue-400/50 text-white transition-all duration-300">
                <Wallet className="h-6 w-6 text-blue-400" />
                <span className="text-xs">Track Expense</span>
              </Button>
              <Button className="h-20 flex-col space-y-2 bg-gradient-to-br from-purple-600/20 to-purple-700/20 hover:from-purple-500/30 hover:to-purple-600/30 border border-purple-500/30 hover:border-purple-400/50 text-white transition-all duration-300">
                <TrendingUp className="h-6 w-6 text-purple-400" />
                <span className="text-xs">Invest</span>
              </Button>
              <Button className="h-20 flex-col space-y-2 bg-gradient-to-br from-amber-600/20 to-amber-700/20 hover:from-amber-500/30 hover:to-amber-600/30 border border-amber-500/30 hover:border-amber-400/50 text-white transition-all duration-300">
                <CreditCard className="h-6 w-6 text-amber-400" />
                <span className="text-xs">Pay Bills</span>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Monthly Summary */}
        <Card className="lg:col-span-3 glass-dark border-slate-700/50 hover:border-slate-600/70 transition-all duration-300">
          <CardHeader>
            <CardTitle className="text-white">Monthly Financial Health</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-400 mb-2">
                  ₹{(userData.monthlyIncome / 1000).toFixed(0)}k
                </div>
                <div className="text-sm text-slate-400 mb-3">Monthly Income</div>
                <Progress value={100} className="h-3 bg-slate-800" />
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-red-400 mb-2">
                  ₹{(userData.monthlyExpenses / 1000).toFixed(0)}k
                </div>
                <div className="text-sm text-slate-400 mb-3">Monthly Expenses</div>
                <Progress
                  value={(userData.monthlyExpenses / userData.monthlyIncome) * 100}
                  className="h-3 bg-slate-800"
                />
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">
                  ₹{((userData.monthlyIncome - userData.monthlyExpenses) / 1000).toFixed(0)}k
                </div>
                <div className="text-sm text-slate-400 mb-3">Monthly Savings</div>
                <Progress
                  value={((userData.monthlyIncome - userData.monthlyExpenses) / userData.monthlyIncome) * 100}
                  className="h-3 bg-slate-800"
                />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Smart Alerts */}
      <SmartAlerts />
    </>
  )
}
