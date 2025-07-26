"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Folder,
  FileText,
  Download,
  Share2,
  Upload,
  Search,
  History,
  ShieldCheck,
  FileUp,
  Mail,
  CreditCard,
  Home,
  DollarSign,
} from "lucide-react"

export function DocumentCenterPage() {
  const documentCategories = [
    {
      name: "Investments",
      icon: <FileText className="h-6 w-6" />,
      count: 12,
      color: "from-emerald-500 to-teal-600",
    },
    {
      name: "Insurance",
      icon: <ShieldCheck className="h-6 w-6" />,
      count: 5,
      color: "from-blue-500 to-cyan-600",
    },
    {
      name: "Tax",
      icon: <DollarSign className="h-6 w-6" />,
      count: 8,
      color: "from-amber-500 to-orange-600",
    },
    {
      name: "Loans",
      icon: <Home className="h-6 w-6" />,
      count: 3,
      color: "from-purple-500 to-pink-600",
    },
    {
      name: "Credit Cards",
      icon: <CreditCard className="h-6 w-6" />,
      count: 4,
      color: "from-red-500 to-rose-600",
    },
  ]

  const activityLog = [
    {
      id: 1,
      description: "Detected ELSS statement in Gmail, linked to PAN, filed under 'Investments'",
      timestamp: "2024-07-26 10:30 AM",
    },
    {
      id: 2,
      description: "Reconstructed Home Loan statement from bank portal, filed under 'Loans'",
      timestamp: "2024-07-25 03:15 PM",
    },
    {
      id: 3,
      description: "Identified new Health Insurance policy document, filed under 'Insurance'",
      timestamp: "2024-07-24 09:00 AM",
    },
    {
      id: 4,
      description: "Processed Form 16 from employer, filed under 'Tax'",
      timestamp: "2024-07-23 01:00 PM",
    },
  ]

  return (
    <div className="space-y-8 pt-8">
      <div className="text-center">
        <h2 className="text-4xl font-bold text-white mb-3">Document Center</h2>
        <p className="text-slate-300 text-lg">Powered by Document Reconstructor Agent</p>
      </div>

      {/* Secure File Manager */}
      <Card className="glass-dark border-slate-700/50 hover:border-slate-600/70 transition-all duration-300">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2 text-white text-xl">
            <Folder className="h-6 w-6 text-cyan-400" />
            <span>Secure File Manager</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center space-x-4 mb-6">
            <Input
              placeholder="Search documents..."
              className="flex-1 bg-slate-800/50 border-slate-600/30 text-white placeholder:text-slate-400"
            />
            <Button className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white border-0">
              <Search className="h-4 w-4 mr-2" />
              Search
            </Button>
            <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white border-0">
              <Upload className="h-4 w-4 mr-2" />
              Upload New
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {documentCategories.map((category, index) => (
              <Card
                key={index}
                className="glass-dark border-slate-700/50 hover:border-slate-600/70 transition-all duration-300 hover:shadow-xl cursor-pointer"
              >
                <CardContent className="p-6 flex items-center space-x-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${category.color} shadow-lg`}>{category.icon}</div>
                  <div>
                    <h3 className="font-bold text-white text-lg">{category.name}</h3>
                    <p className="text-sm text-slate-400">{category.count} documents</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Activity Log */}
      <Card className="glass-dark border-slate-700/50">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2 text-white text-xl">
            <History className="h-6 w-6 text-amber-400" />
            <span>Activity Log</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {activityLog.map((log) => (
              <div key={log.id} className="p-4 bg-slate-800/50 rounded-xl border border-slate-600/30">
                <p className="text-white font-semibold">{log.description}</p>
                <p className="text-xs text-slate-500 mt-1">{log.timestamp}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <Card className="glass-dark border-slate-700/50">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2 text-white text-xl">
            <FileUp className="h-6 w-6 text-emerald-400" />
            <span>Quick Actions</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Button className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white border-0">
              <Download className="h-4 w-4 mr-2" />
              Export All
            </Button>
            <Button className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white border-0">
              <Share2 className="h-4 w-4 mr-2" />
              Share Selected
            </Button>
            <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white border-0">
              <Mail className="h-4 w-4 mr-2" />
              Email Documents
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
