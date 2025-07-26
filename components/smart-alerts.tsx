"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { AlertCircle, Lightbulb, TrendingUp, Clock } from "lucide-react"

export function SmartAlerts() {
  const alerts = [
    {
      id: 1,
      type: "critical",
      title: "Upcoming Loan EMI Due",
      description: "Your Home Loan EMI of ₹45,000 is due in 2 days. Ensure sufficient balance.",
      action: "Pay Now",
      icon: <AlertCircle className="h-5 w-5" />,
      color: "border-red-500/30 bg-red-500/10 text-red-300",
    },
    {
      id: 2,
      type: "opportunity",
      title: "High-Yield Savings Opportunity",
      description: "You have ₹1.2 Lakhs in idle savings. Consider moving to a 7% p.a. high-yield account.",
      action: "Explore Options",
      icon: <Lightbulb className="h-5 w-5" />,
      color: "border-emerald-500/30 bg-emerald-500/10 text-emerald-300",
    },
    {
      id: 3,
      type: "insight",
      title: "Investment Portfolio Performance",
      description: "Your equity portfolio is up 15% this quarter. Review for rebalancing.",
      action: "View Portfolio",
      icon: <TrendingUp className="h-5 w-5" />,
      color: "border-blue-500/30 bg-blue-500/10 text-blue-300",
    },
    {
      id: 4,
      type: "reminder",
      title: "Tax Filing Deadline Approaching",
      description: "Only 15 days left to file your income tax returns for FY 2023-24.",
      action: "Prepare Now",
      icon: <Clock className="h-5 w-5" />,
      color: "border-amber-500/30 bg-amber-500/10 text-amber-300",
    },
  ]

  return (
    <Card className="mt-8 glass-dark border-slate-700/50 hover:border-slate-600/70 transition-all duration-300">
      <CardHeader>
        <CardTitle className="text-white text-xl flex items-center space-x-2">
          <AlertCircle className="h-6 w-6 text-amber-400" />
          <span>Smart Alerts & Notifications</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {alerts.map((alert) => (
            <div
              key={alert.id}
              className={`p-4 rounded-xl border ${alert.color} flex items-start space-x-4 transition-all duration-300 hover:shadow-lg`}
            >
              <div className="p-2 rounded-full bg-white/10">{alert.icon}</div>
              <div className="flex-1">
                <h3 className="font-semibold text-white mb-1">{alert.title}</h3>
                <p className="text-sm text-slate-300 mb-3">{alert.description}</p>
                <Button
                  size="sm"
                  className="bg-gradient-to-r from-slate-700 to-slate-600 hover:from-slate-600 hover:to-slate-500 text-white border-0 text-xs"
                >
                  {alert.action}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
