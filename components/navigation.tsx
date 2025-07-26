"use client"

import { Button } from "@/components/ui/button"
import { Home, Users, CreditCard, TrendingUp } from "lucide-react"

interface NavigationProps {
  currentPage: string
  onPageChange: (page: string) => void
}

export function Navigation({ currentPage, onPageChange }: NavigationProps) {
  const navItems = [
    { id: "home", label: "Home", icon: Home },
    { id: "agents", label: "Agents", icon: Users },
    { id: "bills", label: "Bills", icon: CreditCard },
    { id: "networth", label: "Net Worth", icon: TrendingUp },
  ]

  return (
    <div className="px-4 mb-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex space-x-2 glass-dark rounded-2xl p-2 border border-slate-700/50">
          {navItems.map((item) => {
            const Icon = item.icon
            return (
              <Button
                key={item.id}
                onClick={() => onPageChange(item.id)}
                className={`flex-1 rounded-xl transition-all duration-300 ${
                  currentPage === item.id
                    ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/25"
                    : "bg-transparent hover:bg-slate-700/50 text-slate-300 hover:text-white border-0"
                }`}
              >
                <Icon className="h-4 w-4 mr-2" />
                {item.label}
              </Button>
            )
          })}
        </div>
      </div>
    </div>
  )
}
