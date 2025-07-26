"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { AlertTriangle, MapPin, FileText, TrendingUp, Clock } from "lucide-react"

export function SmartAlerts() {
  const alerts = [
    {
      type: "geo-financial",
      title: "Fuel Price Alert",
      description: "Avoid Shell station on MG Road - 15% higher than nearby stations",
      location: "MG Road, Bangalore",
      icon: <MapPin className="h-4 w-4" />,
      color: "from-amber-500 to-orange-500",
      time: "2 min ago",
    },
    {
      type: "document",
      title: "Investment Document Ready",
      description: "Your mutual fund statement has been processed and categorized",
      location: "Portfolio > Documents",
      icon: <FileText className="h-4 w-4" />,
      color: "from-blue-500 to-cyan-500",
      time: "5 min ago",
    },
    {
      type: "trend",
      title: "Market Opportunity",
      description: "Tech stocks showing unusual volume - consider rebalancing",
      location: "Investment Portfolio",
      icon: <TrendingUp className="h-4 w-4" />,
      color: "from-emerald-500 to-teal-500",
      time: "12 min ago",
    },
  ]

  return (
    <Card className="mt-8 glass-dark border-slate-700/50 hover:border-slate-600/70 transition-all duration-300">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center space-x-2 text-white text-xl">
            <AlertTriangle className="h-6 w-6 text-amber-400" />
            <span>Smart Alerts Feed</span>
          </CardTitle>
          <Badge className="bg-amber-500/20 text-amber-300 border-amber-500/30">{alerts.length} active</Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {alerts.map((alert, index) => (
            <div
              key={index}
              className="p-4 rounded-xl bg-gradient-to-r from-slate-800/50 to-slate-700/30 border border-slate-600/30 hover:border-slate-500/50 transition-all duration-300"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-start space-x-3">
                  <div className={`p-2 rounded-full bg-gradient-to-r ${alert.color} bg-opacity-20`}>{alert.icon}</div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-white mb-1">{alert.title}</h4>
                    <p className="text-sm text-slate-300 mb-2">{alert.description}</p>
                    <div className="flex items-center space-x-4 text-xs text-slate-400">
                      <span>{alert.location}</span>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-3 w-3" />
                        <span>{alert.time}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <Button
                  size="sm"
                  className="bg-gradient-to-r from-slate-700 to-slate-600 hover:from-slate-600 hover:to-slate-500 text-white border-0 text-xs"
                >
                  View
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
