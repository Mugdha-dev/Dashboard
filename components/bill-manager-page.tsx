"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import {
  Calendar,
  CreditCard,
  Zap,
  Wifi,
  Car,
  Home,
  Smartphone,
  AlertCircle,
  CheckCircle,
  Clock,
  Bell,
} from "lucide-react"

export function BillManagerPage() {
  const upcomingBills = [
    {
      id: 1,
      name: "Credit Card Payment",
      amount: 15420,
      dueDate: "2024-01-28",
      category: "Credit Card",
      icon: <CreditCard className="h-5 w-5" />,
      gradient: "from-red-500 to-pink-600",
      status: "due",
      autopay: true,
      daysLeft: 3,
    },
    {
      id: 2,
      name: "Electricity Bill",
      amount: 2850,
      dueDate: "2024-01-30",
      category: "Utilities",
      icon: <Zap className="h-5 w-5" />,
      gradient: "from-yellow-500 to-orange-600",
      status: "upcoming",
      autopay: true,
      daysLeft: 5,
    },
    {
      id: 3,
      name: "Internet & Cable",
      amount: 1299,
      dueDate: "2024-02-02",
      category: "Utilities",
      icon: <Wifi className="h-5 w-5" />,
      gradient: "from-blue-500 to-cyan-600",
      status: "upcoming",
      autopay: false,
      daysLeft: 8,
    },
    {
      id: 4,
      name: "Home Rent",
      amount: 25000,
      dueDate: "2024-02-01",
      category: "Housing",
      icon: <Home className="h-5 w-5" />,
      gradient: "from-purple-500 to-indigo-600",
      status: "upcoming",
      autopay: false,
      daysLeft: 7,
    },
  ]

  const totalUpcoming = upcomingBills.reduce((sum, bill) => sum + bill.amount, 0)

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-white mb-3">Bill Manager</h2>
        <p className="text-slate-300">Dark calendar UI with intelligent bill tracking</p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="glass-dark border-red-500/30 hover:border-red-400/50 transition-all duration-300 hover:shadow-2xl hover:shadow-red-500/20">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-red-300/80 text-sm font-medium">Due This Month</p>
                <p className="text-3xl font-bold text-white mb-2">₹{(totalUpcoming / 1000).toFixed(1)}k</p>
                <p className="text-sm text-red-300/80">{upcomingBills.length} bills pending</p>
              </div>
              <div className="p-4 bg-gradient-to-br from-red-500/20 to-red-600/20 rounded-full">
                <AlertCircle className="h-8 w-8 text-red-400" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="glass-dark border-emerald-500/30 hover:border-emerald-400/50 transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-500/20">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-emerald-300/80 text-sm font-medium">Autopay Setup</p>
                <p className="text-3xl font-bold text-white mb-2">75%</p>
                <p className="text-sm text-emerald-300/80">3 of 4 bills automated</p>
              </div>
              <div className="p-4 bg-gradient-to-br from-emerald-500/20 to-emerald-600/20 rounded-full">
                <CheckCircle className="h-8 w-8 text-emerald-400" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="glass-dark border-blue-500/30 hover:border-blue-400/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-blue-300/80 text-sm font-medium">Smart Reminders</p>
                <p className="text-3xl font-bold text-white mb-2">5</p>
                <p className="text-sm text-blue-300/80">Active notifications</p>
              </div>
              <div className="p-4 bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-full">
                <Bell className="h-8 w-8 text-blue-400" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* AI Suggestion */}
      <Card className="glass-dark border-purple-500/30 hover:border-purple-400/50 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-gradient-to-br from-purple-500/30 to-pink-500/30 rounded-full animate-pulse">
                <Calendar className="h-6 w-6 text-purple-300" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-1">💡 AI Cash Flow Optimization</h3>
                <p className="text-purple-200/80">
                  Move your rent payment to the 2nd of each month (after salary credit) to improve cash flow by 15%.
                </p>
              </div>
            </div>
            <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white border-0">
              Apply Suggestion
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Dark Calendar Timeline */}
      <Card className="glass-dark border-slate-700/50">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2 text-white">
            <Calendar className="h-5 w-5 text-purple-400" />
            <span>Bills Timeline - January 2024</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {upcomingBills.map((bill, index) => (
              <div key={bill.id} className="relative">
                {/* Timeline connector */}
                {index < upcomingBills.length - 1 && (
                  <div className="absolute left-6 top-16 w-0.5 h-12 bg-gradient-to-b from-slate-600 to-slate-700"></div>
                )}

                <div
                  className={`p-6 rounded-2xl border transition-all duration-300 hover:shadow-xl ${
                    bill.status === "due"
                      ? "glass-dark border-red-500/40 hover:border-red-400/60 hover:shadow-red-500/20"
                      : "glass-dark border-slate-600/40 hover:border-slate-500/60"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      {/* Timeline dot */}
                      <div
                        className={`w-12 h-12 rounded-full flex items-center justify-center ${
                          bill.status === "due"
                            ? "bg-gradient-to-br from-red-500 to-red-600 shadow-lg shadow-red-500/30"
                            : "bg-gradient-to-br from-slate-600 to-slate-700"
                        }`}
                      >
                        {bill.status === "due" ? (
                          <AlertCircle className="h-6 w-6 text-white" />
                        ) : (
                          <Clock className="h-6 w-6 text-slate-300" />
                        )}
                      </div>

                      <div className="flex items-center space-x-4">
                        <div className={`p-3 rounded-xl bg-gradient-to-br ${bill.gradient} shadow-lg`}>{bill.icon}</div>
                        <div>
                          <h4 className="font-bold text-white text-lg">{bill.name}</h4>
                          <p className="text-slate-400">{bill.category}</p>
                          <p className="text-sm text-slate-500">Due {new Date(bill.dueDate).toLocaleDateString()}</p>
                        </div>
                      </div>
                    </div>

                    <div className="text-right">
                      <div className="text-2xl font-bold text-white mb-2">₹{bill.amount.toLocaleString()}</div>
                      <div className="flex items-center space-x-2 mb-3">
                        {bill.daysLeft <= 3 ? (
                          <Badge className="bg-red-500/20 text-red-300 border-red-500/30">
                            Due in {bill.daysLeft} days
                          </Badge>
                        ) : (
                          <Badge className="bg-slate-600/20 text-slate-300 border-slate-600/30">
                            {bill.daysLeft} days left
                          </Badge>
                        )}
                      </div>

                      <div className="flex items-center justify-end space-x-3">
                        <div className="flex items-center space-x-2">
                          <span className="text-sm text-slate-400">Autopay:</span>
                          <Switch checked={bill.autopay} />
                        </div>
                        <Button
                          size="sm"
                          className={`bg-gradient-to-r ${bill.gradient} text-white border-0 hover:opacity-90`}
                        >
                          Pay Now
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Bill Categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          {
            name: "Rent",
            icon: <Home className="h-6 w-6" />,
            amount: "₹25k",
            gradient: "from-purple-500 to-indigo-600",
          },
          { name: "EMI", icon: <Car className="h-6 w-6" />, amount: "₹18k", gradient: "from-blue-500 to-cyan-600" },
          {
            name: "Utilities",
            icon: <Zap className="h-6 w-6" />,
            amount: "₹4.2k",
            gradient: "from-yellow-500 to-orange-600",
          },
          {
            name: "Subscriptions",
            icon: <Smartphone className="h-6 w-6" />,
            amount: "₹2.1k",
            gradient: "from-emerald-500 to-teal-600",
          },
        ].map((category, index) => (
          <Card
            key={index}
            className="glass-dark border-slate-700/50 hover:border-slate-600/70 transition-all duration-300 hover:shadow-xl cursor-pointer"
          >
            <CardContent className="p-6 text-center">
              <div className={`p-4 rounded-2xl bg-gradient-to-br ${category.gradient} shadow-lg mx-auto w-fit mb-4`}>
                {category.icon}
              </div>
              <h3 className="font-bold text-white mb-2">{category.name}</h3>
              <p className="text-2xl font-bold text-slate-300">{category.amount}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
