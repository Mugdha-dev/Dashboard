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
  Plus,
  AlertCircle,
  CheckCircle,
  Clock,
  TrendingUp,
} from "lucide-react"

export function BillsPage() {
  const upcomingBills = [
    {
      id: 1,
      name: "Credit Card Payment",
      amount: 15420,
      dueDate: "2024-01-28",
      category: "Credit Card",
      icon: <CreditCard className="h-5 w-5" />,
      color: "text-red-600",
      bgColor: "bg-red-50",
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
      color: "text-yellow-600",
      bgColor: "bg-yellow-50",
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
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      status: "upcoming",
      autopay: false,
      daysLeft: 8,
    },
    {
      id: 4,
      name: "Car Insurance",
      amount: 8500,
      dueDate: "2024-02-05",
      category: "Insurance",
      icon: <Car className="h-5 w-5" />,
      color: "text-green-600",
      bgColor: "bg-green-50",
      status: "upcoming",
      autopay: true,
      daysLeft: 11,
    },
    {
      id: 5,
      name: "Home Rent",
      amount: 25000,
      dueDate: "2024-02-01",
      category: "Housing",
      icon: <Home className="h-5 w-5" />,
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      status: "upcoming",
      autopay: false,
      daysLeft: 7,
    },
  ]

  const paidBills = [
    {
      id: 6,
      name: "Mobile Phone",
      amount: 599,
      paidDate: "2024-01-20",
      category: "Utilities",
      icon: <Smartphone className="h-5 w-5" />,
      autopay: true,
    },
    {
      id: 7,
      name: "Netflix Subscription",
      amount: 649,
      paidDate: "2024-01-18",
      category: "Entertainment",
      icon: <Smartphone className="h-5 w-5" />,
      autopay: true,
    },
  ]

  const subscriptions = [
    { name: "Netflix", amount: 649, status: "active", lastUsed: "2 days ago" },
    { name: "Spotify", amount: 119, status: "active", lastUsed: "1 day ago" },
    { name: "Amazon Prime", amount: 1499, status: "active", lastUsed: "5 days ago" },
    { name: "Adobe Creative", amount: 1675, status: "unused", lastUsed: "45 days ago" },
    { name: "Gym Membership", amount: 2000, status: "unused", lastUsed: "30 days ago" },
  ]

  const totalUpcoming = upcomingBills.reduce((sum, bill) => sum + bill.amount, 0)
  const totalPaid = paidBills.reduce((sum, bill) => sum + bill.amount, 0)

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Bill Manager</h2>
        <p className="text-gray-600">Stay on top of your recurring payments</p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <Card className="bg-gradient-to-r from-red-500 to-pink-600 text-white border-0 shadow-lg">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-red-100 text-sm font-medium">Due This Month</p>
                <p className="text-2xl font-bold">₹{(totalUpcoming / 1000).toFixed(1)}k</p>
                <p className="text-sm text-red-100 mt-1">{upcomingBills.length} bills pending</p>
              </div>
              <AlertCircle className="h-8 w-8 text-red-200" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-r from-green-500 to-emerald-600 text-white border-0 shadow-lg">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-green-100 text-sm font-medium">Paid This Month</p>
                <p className="text-2xl font-bold">₹{(totalPaid / 1000).toFixed(1)}k</p>
                <p className="text-sm text-green-100 mt-1">{paidBills.length} bills completed</p>
              </div>
              <CheckCircle className="h-8 w-8 text-green-200" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white border-0 shadow-lg">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-blue-100 text-sm font-medium">Autopay Setup</p>
                <p className="text-2xl font-bold">75%</p>
                <p className="text-sm text-blue-100 mt-1">3 of 4 bills automated</p>
              </div>
              <TrendingUp className="h-8 w-8 text-blue-200" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* AI Suggestion Banner */}
      <Card className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white border-0 shadow-lg">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-semibold text-lg mb-2">💡 AI Suggestion</h3>
              <p className="text-purple-100">
                Move your rent payment to the 2nd of each month (after salary credit on 1st) to improve cash flow.
              </p>
            </div>
            <Button variant="secondary" className="bg-white/20 hover:bg-white/30 text-white border-0">
              Apply Suggestion
            </Button>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Upcoming Bills */}
        <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="flex items-center space-x-2">
                <Calendar className="h-5 w-5 text-orange-600" />
                <span>Upcoming Bills</span>
              </CardTitle>
              <Button size="sm" variant="outline">
                <Plus className="h-4 w-4 mr-2" />
                Add Bill
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {upcomingBills.map((bill) => (
                <div
                  key={bill.id}
                  className={`p-4 rounded-lg border-l-4 ${
                    bill.status === "due" ? "border-red-500 bg-red-50" : "border-gray-300 bg-gray-50"
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-3">
                      <div className={`p-2 rounded-full ${bill.bgColor} ${bill.color}`}>{bill.icon}</div>
                      <div>
                        <h4 className="font-medium text-gray-900">{bill.name}</h4>
                        <p className="text-sm text-gray-600">{bill.category}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-semibold text-gray-900">₹{bill.amount.toLocaleString()}</div>
                      <div className="text-sm text-gray-600">
                        {bill.daysLeft <= 3 ? (
                          <span className="text-red-600 font-medium">Due in {bill.daysLeft} days</span>
                        ) : (
                          <span>Due in {bill.daysLeft} days</span>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="text-sm text-gray-600">Autopay:</span>
                      <Switch checked={bill.autopay} />
                      {bill.autopay && (
                        <Badge variant="secondary" className="text-xs bg-green-100 text-green-700">
                          Enabled
                        </Badge>
                      )}
                    </div>
                    <Button size="sm" variant="outline">
                      Pay Now
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Subscription Manager */}
        <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Smartphone className="h-5 w-5 text-purple-600" />
              <span>Subscription Manager</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {subscriptions.map((sub, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="font-medium text-gray-900">{sub.name}</h4>
                      <span className="font-semibold text-gray-900">₹{sub.amount}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Badge variant={sub.status === "active" ? "default" : "destructive"} className="text-xs">
                        {sub.status}
                      </Badge>
                      <span className="text-xs text-gray-600">Last used: {sub.lastUsed}</span>
                    </div>
                  </div>
                  {sub.status === "unused" && (
                    <Button size="sm" variant="outline" className="ml-3 text-red-600 hover:bg-red-50 bg-transparent">
                      Cancel
                    </Button>
                  )}
                </div>
              ))}

              <div className="pt-4 border-t">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-gray-700">Monthly Subscription Cost</span>
                  <span className="font-semibold text-gray-900">
                    ₹{subscriptions.reduce((sum, sub) => sum + sub.amount, 0).toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-red-600">Unused subscriptions</span>
                  <span className="font-medium text-red-600">
                    ₹
                    {subscriptions
                      .filter((sub) => sub.status === "unused")
                      .reduce((sum, sub) => sum + sub.amount, 0)
                      .toLocaleString()}
                  </span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Monthly Timeline */}
      <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
        <CardHeader>
          <CardTitle>Monthly Payment Timeline</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
              <span>January 2024</span>
              <span>Total: ₹{(totalUpcoming + totalPaid).toLocaleString()}</span>
            </div>

            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-200"></div>

              {[...paidBills, ...upcomingBills]
                .sort((a, b) => {
                  const dateA = new Date(a.paidDate || a.dueDate)
                  const dateB = new Date(b.paidDate || b.dueDate)
                  return dateA.getTime() - dateB.getTime()
                })
                .map((bill, index) => (
                  <div key={bill.id} className="relative flex items-center space-x-4 pb-4">
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        bill.paidDate ? "bg-green-500" : bill.daysLeft <= 3 ? "bg-red-500" : "bg-gray-400"
                      }`}
                    >
                      {bill.paidDate ? (
                        <CheckCircle className="h-4 w-4 text-white" />
                      ) : (
                        <Clock className="h-4 w-4 text-white" />
                      )}
                    </div>

                    <div className="flex-1 bg-gray-50 rounded-lg p-3">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-medium text-gray-900">{bill.name}</h4>
                          <p className="text-sm text-gray-600">
                            {bill.paidDate
                              ? `Paid on ${new Date(bill.paidDate).toLocaleDateString()}`
                              : `Due ${new Date(bill.dueDate).toLocaleDateString()}`}
                          </p>
                        </div>
                        <div className="text-right">
                          <div className="font-semibold text-gray-900">₹{bill.amount.toLocaleString()}</div>
                          {bill.autopay && (
                            <Badge variant="secondary" className="text-xs">
                              Auto
                            </Badge>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
