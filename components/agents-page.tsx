"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { PiggyBank, TrendingUp, FileText, Calculator, AlertTriangle, CheckCircle, Clock, Send } from "lucide-react"

export function AgentsPage() {
  const agents = [
    {
      id: "lakshmi",
      name: "Lakshmi",
      role: "Smart Savings Assistant",
      icon: <PiggyBank className="h-8 w-8" />,
      gradient: "from-emerald-500 to-teal-600",
      status: "active",
      alerts: 2,
      keyData: [
        { label: "Saved This Week", value: "₹4.2k", trend: "up" },
        { label: "Emergency Fund", value: "₹2.1L", trend: "stable" },
        { label: "Goals Progress", value: "68%", trend: "up" },
      ],
      recentActivity: "Moved ₹45k to high-yield savings account",
      suggestions: [
        "Optimize idle funds in current account",
        "Increase SIP by ₹2k for retirement goal",
        "Consider liquid funds for emergency corpus",
      ],
    },
    {
      id: "arjun",
      name: "Arjun",
      role: "Investment Tracker",
      icon: <TrendingUp className="h-8 w-8" />,
      gradient: "from-cyan-500 to-blue-600",
      status: "active",
      alerts: 1,
      keyData: [
        { label: "Portfolio Value", value: "₹8.5L", trend: "up" },
        { label: "YTD Returns", value: "+12.5%", trend: "up" },
        { label: "Risk Score", value: "Moderate", trend: "stable" },
      ],
      recentActivity: "Rebalanced equity allocation - reduced by 5%",
      suggestions: [
        "Consider international diversification",
        "Tax-loss harvesting opportunity available",
        "Review small-cap allocation",
      ],
    },
    {
      id: "daksha",
      name: "Daksha",
      role: "Bill & Autopay Manager",
      icon: <FileText className="h-8 w-8" />,
      gradient: "from-purple-500 to-pink-600",
      status: "active",
      alerts: 3,
      keyData: [
        { label: "Bills This Month", value: "₹18.5k", trend: "up" },
        { label: "Autopay Coverage", value: "85%", trend: "stable" },
        { label: "Due This Week", value: "4 bills", trend: "stable" },
      ],
      recentActivity: "Set up autopay for electricity bill",
      suggestions: [
        "Credit card payment due in 2 days",
        "Cancel unused Netflix subscription",
        "Move rent payment date for better cash flow",
      ],
    },
    {
      id: "vaani",
      name: "Vaani",
      role: "Expense Analyst",
      icon: <Calculator className="h-8 w-8" />,
      gradient: "from-amber-500 to-orange-600",
      status: "active",
      alerts: 1,
      keyData: [
        { label: "Monthly Spend", value: "₹62k", trend: "up" },
        { label: "Budget Usage", value: "78%", trend: "stable" },
        { label: "Top Category", value: "Food", trend: "up" },
      ],
      recentActivity: "Flagged 23% increase in dining expenses",
      suggestions: [
        "Food expenses trending high this month",
        "Consider meal planning to reduce costs",
        "Entertainment budget has room for optimization",
      ],
    },
  ]

  return (
    <div className="space-y-8 pt-8">
      <div className="text-center">
        <h2 className="text-4xl font-bold text-white mb-3">Your AI Financial Team</h2>
        <p className="text-slate-300 text-lg">Intelligent agents working 24/7 to optimize your finances</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {agents.map((agent) => (
          <Card
            key={agent.id}
            className="glass-dark border-slate-700/50 hover:border-slate-600/70 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/10 overflow-hidden"
          >
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className={`p-4 rounded-2xl bg-gradient-to-br ${agent.gradient} shadow-lg`}>{agent.icon}</div>
                  <div>
                    <CardTitle className="text-xl text-white">{agent.name}</CardTitle>
                    <p className="text-sm text-slate-400">{agent.role}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  {agent.alerts > 0 && (
                    <Badge className="bg-red-500/20 text-red-300 border-red-500/30 text-xs">
                      {agent.alerts} alerts
                    </Badge>
                  )}
                  <div className="flex items-center space-x-1">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                    <span className="text-xs text-slate-400">Active</span>
                  </div>
                </div>
              </div>
            </CardHeader>

            <CardContent className="space-y-6">
              {/* Key Metrics */}
              <div className="grid grid-cols-3 gap-4">
                {agent.keyData.map((data, index) => (
                  <div key={index} className="text-center p-3 glass-dark rounded-xl border border-slate-600/30">
                    <div className="text-sm font-bold text-white">{data.value}</div>
                    <div className="text-xs text-slate-400">{data.label}</div>
                  </div>
                ))}
              </div>

              {/* Recent Activity */}
              <div className="p-4 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl border border-blue-500/20">
                <div className="flex items-center space-x-2 mb-2">
                  <Clock className="h-4 w-4 text-blue-400" />
                  <span className="text-sm font-medium text-blue-300">Recent Activity</span>
                </div>
                <p className="text-sm text-slate-300">{agent.recentActivity}</p>
              </div>

              {/* Suggestions */}
              <div className="space-y-3">
                <h4 className="text-sm font-medium text-white">Smart Suggestions</h4>
                {agent.suggestions.map((suggestion, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-2 p-3 glass-dark rounded-xl border border-slate-600/30"
                  >
                    <AlertTriangle className="h-4 w-4 text-amber-400 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-slate-300">{suggestion}</span>
                  </div>
                ))}
              </div>

              {/* Chat Interface */}
              <div className="space-y-3">
                <h4 className="text-sm font-medium text-white">Chat with {agent.name}</h4>
                <div className="flex space-x-2">
                  <Input
                    placeholder={`Ask ${agent.name} anything...`}
                    className="bg-slate-800/50 border-slate-600/30 text-white placeholder:text-slate-400"
                  />
                  <Button className={`bg-gradient-to-r ${agent.gradient} text-white border-0 hover:opacity-90`}>
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Team Performance */}
      <Card className="glass-dark border-slate-700/50">
        <CardHeader>
          <CardTitle className="text-white text-2xl">Team Performance This Month</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-emerald-400 mb-2">₹23k</div>
              <div className="text-sm text-slate-400">Money Saved</div>
              <div className="flex items-center justify-center mt-2">
                <CheckCircle className="h-4 w-4 text-emerald-400 mr-1" />
                <span className="text-xs text-emerald-400">+15% vs last month</span>
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">12</div>
              <div className="text-sm text-slate-400">Optimizations Made</div>
              <div className="flex items-center justify-center mt-2">
                <CheckCircle className="h-4 w-4 text-cyan-400 mr-1" />
                <span className="text-xs text-cyan-400">Across all agents</span>
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-amber-400 mb-2">6</div>
              <div className="text-sm text-slate-400">Active Alerts</div>
              <div className="flex items-center justify-center mt-2">
                <AlertTriangle className="h-4 w-4 text-amber-400 mr-1" />
                <span className="text-xs text-amber-400">Needs attention</span>
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">94%</div>
              <div className="text-sm text-slate-400">Automation Rate</div>
              <div className="flex items-center justify-center mt-2">
                <CheckCircle className="h-4 w-4 text-emerald-400 mr-1" />
                <span className="text-xs text-emerald-400">Excellent coverage</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
