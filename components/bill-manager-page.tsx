"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import { Calendar, CreditCard, Home, Zap, Wifi, Car, AlertCircle, CheckCircle, Clock } from "lucide-react"

export function BillManagerPage() {
  const bills = [
    {
      id: 1,
      name: "Rent",
      amount: 25000,
      dueDate: "2024-01-01",
      category: "Housing",
      icon: <Home className="h-5 w-5" />,
      color: "from-blue-500 to-cyan-500",
      status: "paid",
      autopay: true,
    },
    {
      id: 2,
      name: "Electricity",
      amount: 3500,
      dueDate: "2024-01-05",
      category: "Utilities",
      icon: <Zap className="h-5 w-5" />,
      color: "from-amber-500 to-yellow-500",
      status: "due",
      autopay: false,
    },
    {
      id: 3,
      name: "Internet",
      amount: 1200,
      dueDate: "2024-01-10",
      category: "Utilities",
      icon: <Wifi className="h-5 w-5" />,
      color: "from-purple-500 to-pink-500",
      status: "upcoming",
      autopay: true,
    },
    {
      id: 4,
      name: "Credit Card",
      amount: 8500,
      dueDate: "2024-01-15",
      category: "Credit",
      icon: <CreditCard className="h-5 w-5" />,
      color: "from-red-500 to-pink-500",
      status: "due",
      autopay: false,
    },
    {
      id: 5,
      name: "Car EMI",
      amount: 15000,
      dueDate: "2024-01-20",
      category: "EMI",
      icon: <Car className="h-5 w-5" />,
      color: "from-emerald-500 to-teal-500",
      status: "upcoming",
      autopay: true,
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "paid":
        return "bg-emerald-500/20 text-emerald-300 border-emerald-500/30"
      case "due":
        return "bg-red-500/20 text-red-300 border-red-500/30"
      case "upcoming":
        return "bg-blue-500/20 text-blue-300 border-blue-500/30"
      default:
        return "bg-slate-500/20 text-slate-300 border-slate-500/30"
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "paid":
        return <CheckCircle className="h-4 w-4" />
      case "due":
        return <AlertCircle className="h-4 w-4" />
      case "upcoming":
        return <Clock className="h-4 w-4" />
      default:
        return <Clock className="h-4 w-4" />
    }
  }

  return (
    <div className="space-y-8 pt-8">
      <div className="text-center">
        <h2 className="text-4xl font-bold text-white mb-3">Bill Manager</h2>
        <p className="text-slate-300 text-lg">Smart bill tracking and autopay management</p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="glass-dark border-slate-700/50 hover:border-slate-600/70 transition-all duration-300">
          <CardContent className="p-6 text-center">
            <div className="text-2xl font-bold text-white mb-2">₹53.2k</div>
            <div className="text-sm text-slate-400">Total This Month</div>
          </CardContent>
        </Card>

        <Card className="glass-dark border-red-500/20 hover:border-red-400/40 transition-all duration-300">
          <CardContent className="p-6 text-center">
            <div className="text-2xl font-bold text-red-400 mb-2">2</div>
            <div className="text-sm text-slate-400">Bills Due</div>
          </CardContent>
        </Card>

        <Card className="glass-dark border-emerald-500/20 hover:border-emerald-400/40 transition-all duration-300">
          <CardContent className="p-6 text-center">
            <div className="text-2xl font-bold text-emerald-400 mb-2">60%</div>
            <div className="text-sm text-slate-400">Autopay Coverage</div>
          </CardContent>
        </Card>

        <Card className="glass-dark border-blue-500/20 hover:border-blue-400/40 transition-all duration-300">
          <CardContent className="p-6 text-center">
            <div className="text-2xl font-bold text-blue-400 mb-2">3</div>
            <div className="text-sm text-slate-400">Upcoming Bills</div>
          </CardContent>
        </Card>
      </div>

      {/* Bills Calendar Timeline */}
      <Card className="glass-dark border-slate-700/50">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2 text-white text-xl">
            <Calendar className="h-6 w-6 text-cyan-400" />
            <span>Bills Timeline</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {bills.map((bill) => (
              <div
                key={bill.id}
                className="flex items-center justify-between p-4 rounded-xl bg-gradient-to-r from-slate-800/50 to-slate-700/30 border border-slate-600/30 hover:border-slate-500/50 transition-all duration-300"
              >
                <div className="flex items-center space-x-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${bill.color} bg-opacity-20`}>{bill.icon}</div>
                  <div>
                    <h4 className="font-semibold text-white">{bill.name}</h4>
                    <p className="text-sm text-slate-400">{bill.category}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-6">
                  <div className="text-right">
                    <div className="text-lg font-bold text-white">₹{bill.amount.toLocaleString()}</div>
                    <div className="text-sm text-slate-400">Due: {new Date(bill.dueDate).toLocaleDateString()}</div>
                  </div>

                  <Badge className={`${getStatusColor(bill.status)} flex items-center space-x-1`}>
                    {getStatusIcon(bill.status)}
                    <span className="capitalize">{bill.status}</span>
                  </Badge>

                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-slate-400">Autopay</span>
                    <Switch checked={bill.autopay} />
                  </div>

                  <Button
                    size="sm"
                    className="bg-gradient-to-r from-slate-700 to-slate-600 hover:from-slate-600 hover:to-slate-500 text-white border-0"
                  >
                    {bill.status === "due" ? "Pay Now" : "View"}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Category Breakdown */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="glass-dark border-slate-700/50">
          <CardHeader>
            <CardTitle className="text-white text-xl">Category Breakdown</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { category: "Housing", amount: 25000, percentage: 47, color: "bg-blue-500" },
                { category: "EMI", amount: 15000, percentage: 28, color: "bg-emerald-500" },
                { category: "Credit", amount: 8500, percentage: 16, color: "bg-red-500" },
                { category: "Utilities", amount: 4700, percentage: 9, color: "bg-amber-500" },
              ].map((item, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className={`w-3 h-3 rounded-full ${item.color}`}></div>
                    <span className="text-slate-300">{item.category}</span>
                  </div>
                  <div className="text-right">
                    <div className="text-white font-semibold">₹{item.amount.toLocaleString()}</div>
                    <div className="text-sm text-slate-400">{item.percentage}%</div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="glass-dark border-slate-700/50">
          <CardHeader>
            <CardTitle className="text-white text-xl">Smart Recommendations</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="p-4 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-xl border border-emerald-500/20">
                <div className="flex items-center space-x-2 mb-2">
                  <CheckCircle className="h-4 w-4 text-emerald-400" />
                  <span className="text-sm font-medium text-emerald-300">Optimization Opportunity</span>
                </div>
                <p className="text-sm text-slate-300">
                  Enable autopay for electricity and credit card bills to save ₹200/month in late fees
                </p>
              </div>

              <div className="p-4 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-xl border border-blue-500/20">
                <div className="flex items-center space-x-2 mb-2">
                  <AlertCircle className="h-4 w-4 text-blue-400" />
                  <span className="text-sm font-medium text-blue-300">Cash Flow Tip</span>
                </div>
                <p className="text-sm text-slate-300">
                  Move rent payment to 5th of month to align with salary credit date
                </p>
              </div>

              <div className="p-4 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-xl border border-purple-500/20">
                <div className="flex items-center space-x-2 mb-2">
                  <Zap className="h-4 w-4 text-purple-400" />
                  <span className="text-sm font-medium text-purple-300">Smart Suggestion</span>
                </div>
                <p className="text-sm text-slate-300">Consider bundling internet and mobile plans to save ₹500/month</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
