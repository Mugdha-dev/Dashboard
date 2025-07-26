"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Brain,
  MessageCircle,
  Settings,
  Plus,
  Search,
  TrendingUp,
  DollarSign,
  FileText,
  CreditCard,
} from "lucide-react"

export function AgentsPage() {
  const agents = [
    {
      id: "lakshmi",
      name: "Lakshmi",
      role: "Investment Advisor",
      description: "Optimizes your portfolio for maximum returns and risk management.",
      icon: <TrendingUp className="h-6 w-6 text-emerald-400" />,
      color: "from-emerald-500/20 to-teal-500/20",
    },
    {
      id: "daksha",
      name: "Daksha",
      role: "Expense Tracker",
      description: "Analyzes spending patterns and suggests budgeting improvements.",
      icon: <DollarSign className="h-6 w-6 text-amber-400" />,
      color: "from-amber-500/20 to-orange-500/20",
    },
    {
      id: "vaani",
      name: "Vaani",
      role: "Tax Consultant",
      description: "Identifies tax saving opportunities and helps with compliance.",
      icon: <FileText className="h-6 w-6 text-blue-400" />,
      color: "from-blue-500/20 to-cyan-500/20",
    },
    {
      id: "arjun",
      name: "Arjun",
      role: "Loan Specialist",
      description: "Finds best loan rates and helps manage your debt efficiently.",
      icon: <CreditCard className="h-6 w-6 text-purple-400" />,
      color: "from-purple-500/20 to-pink-500/20",
    },
  ]

  return (
    <div className="space-y-8 pt-8">
      <div className="text-center">
        <h2 className="text-4xl font-bold text-white mb-3">AI Financial Agents</h2>
        <p className="text-slate-300 text-lg">Your personalized team of intelligent financial advisors</p>
      </div>

      {/* Agent Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {agents.map((agent) => (
          <Card
            key={agent.id}
            className={`glass-dark border-slate-700/50 hover:border-slate-600/70 transition-all duration-300 hover:shadow-xl cursor-pointer group overflow-hidden relative`}
          >
            <div
              className={`absolute inset-0 bg-gradient-to-br ${agent.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
            />
            <CardContent className="p-6 text-center relative">
              <div
                className={`p-4 rounded-2xl bg-gradient-to-br ${agent.color} shadow-lg mx-auto w-fit mb-4 group-hover:scale-110 transition-transform duration-500`}
              >
                {agent.icon}
              </div>
              <h3 className="font-bold text-white text-xl mb-2">{agent.name}</h3>
              <p className="text-sm text-slate-400 mb-4">{agent.role}</p>
              <p className="text-xs text-slate-500 mb-6">{agent.description}</p>
              <Button
                size="sm"
                className="w-full bg-gradient-to-r from-slate-700 to-slate-600 hover:from-slate-600 hover:to-slate-500 text-white border-0"
              >
                <MessageCircle className="h-4 w-4 mr-2" />
                Chat with {agent.name}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Agent Customization & Training */}
      <Card className="glass-dark border-purple-500/30 hover:border-purple-400/50 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2 text-white text-xl">
            <Settings className="h-6 w-6 text-purple-400" />
            <span>Customize & Train Agents</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h3 className="font-bold text-white text-lg mb-3">Create New Agent</h3>
              <div className="space-y-4">
                <div>
                  <label htmlFor="agent-name" className="block text-sm font-medium text-slate-300 mb-1">
                    Agent Name
                  </label>
                  <Input
                    id="agent-name"
                    placeholder="e.g., Budget Buddy"
                    className="bg-slate-800/50 border-slate-600/30 text-white placeholder:text-slate-400"
                  />
                </div>
                <div>
                  <label htmlFor="agent-role" className="block text-sm font-medium text-slate-300 mb-1">
                    Agent Role
                  </label>
                  <Input
                    id="agent-role"
                    placeholder="e.g., Daily Spending Monitor"
                    className="bg-slate-800/50 border-slate-600/30 text-white placeholder:text-slate-400"
                  />
                </div>
                <div>
                  <label htmlFor="agent-description" className="block text-sm font-medium text-slate-300 mb-1">
                    Description
                  </label>
                  <Textarea
                    id="agent-description"
                    placeholder="Describe the agent's function..."
                    className="bg-slate-800/50 border-slate-600/30 text-white placeholder:text-slate-400"
                  />
                </div>
                <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white border-0 w-full">
                  <Plus className="h-4 w-4 mr-2" />
                  Create Agent
                </Button>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-white text-lg mb-3">Train Existing Agents</h3>
              <div className="space-y-4">
                <div>
                  <label htmlFor="select-agent" className="block text-sm font-medium text-slate-300 mb-1">
                    Select Agent
                  </label>
                  <Input
                    id="select-agent"
                    placeholder="Choose an agent to train"
                    className="bg-slate-800/50 border-slate-600/30 text-white placeholder:text-slate-400"
                  />
                </div>
                <div>
                  <label htmlFor="training-data" className="block text-sm font-medium text-slate-300 mb-1">
                    Provide Training Data / Instructions
                  </label>
                  <Textarea
                    id="training-data"
                    placeholder="e.g., 'Prioritize long-term growth over short-term gains for Lakshmi.'"
                    className="bg-slate-800/50 border-slate-600/30 text-white placeholder:text-slate-400"
                  />
                </div>
                <Button className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white border-0 w-full">
                  <Brain className="h-4 w-4 mr-2" />
                  Train Agent
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Agent Activity Log */}
      <Card className="glass-dark border-slate-700/50">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2 text-white text-xl">
            <Search className="h-6 w-6 text-amber-400" />
            <span>Agent Activity Log</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              {
                agent: "Lakshmi",
                activity: "Analyzed portfolio, suggested rebalancing for higher equity exposure.",
                timestamp: "2024-07-25 14:30",
              },
              {
                agent: "Daksha",
                activity: "Identified 15% increase in food expenses, sent alert.",
                timestamp: "2024-07-24 09:15",
              },
              {
                agent: "Vaani",
                activity: "Processed Q2 tax documents, identified ₹5,000 potential deduction.",
                timestamp: "2024-07-23 11:00",
              },
              {
                agent: "Arjun",
                activity: "Researched personal loan rates, found 3 options below 10% interest.",
                timestamp: "2024-07-22 16:45",
              },
            ].map((log, index) => (
              <div key={index} className="p-4 bg-slate-800/50 rounded-xl border border-slate-600/30">
                <p className="text-white font-semibold">{log.agent}:</p>
                <p className="text-sm text-slate-300">{log.activity}</p>
                <p className="text-xs text-slate-500 mt-1">{log.timestamp}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
