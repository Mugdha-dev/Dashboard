"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Bell, MapPin, FileText, TrendingUp } from "lucide-react"

export function SmartAlerts() {
  const alerts = [
    {
      type: "geo",
      title: "Fuel Price Alert",
      description: "Avoid Shell station on MG Road - ₹3/L higher than nearby stations",
      location: "MG Road, Bangalore",
      icon: <MapPin className="h-4 w-4" />,
      color: "amber",
      action: "View Map",
    },
    {
      type: "document",
      title: "Tax Document Ready",
      description: "Your Form 16 has been auto-categorized and is ready for filing",
      icon: <FileText className="h-4 w-4" />,
      color: "blue",
      action: "View Document",
    },
    {
      type: "investment",
      title: "SIP Due Tomorrow",
      description: "₹10,000 SIP for HDFC Mid-Cap Fund scheduled for tomorrow",
      icon: <TrendingUp className="h-4 w-4" />,
      color: "emerald",
      action: "Manage SIP",
    },
  ]

  return (
    <Card className="mt-8 glass-dark border-slate-700/50 hover:border-slate-600/70 transition-all duration-300">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2 text-white">
          <Bell className="h-5 w-5 text-amber-400" />
          <span>Smart Alerts Feed</span>
          <Badge className="bg-amber-500/20 text-amber-300 border-amber-500/30">3 New</Badge>
        </CardTitle>
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
                  <div
                    className={`p-2 rounded-full ${
                      alert.color === "amber"
                        ? "bg-amber-500/20 text-amber-400"
                        : alert.color === "blue"
                          ? "bg-blue-500/20 text-blue-400"
                          : "bg-emerald-500/20 text-emerald-400"
                    }`}
                  >
                    {alert.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-1">
                      <h4 className="font-semibold text-white">{alert.title}</h4>
                      {alert.type === "geo" && (
                        <Badge className="bg-orange-500/20 text-orange-300 border-orange-500/30 text-xs">
                          Geo-Alert
                        </Badge>
                      )}
                    </div>
                    <p className="text-sm text-slate-300 mb-2">{alert.description}</p>
                    {alert.location && <p className="text-xs text-slate-400">{alert.location}</p>}
                  </div>
                </div>
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
