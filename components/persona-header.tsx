"use client"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Compass, User, Search } from "lucide-react"

interface PersonaHeaderProps {
  persona: string
  description: string
  name: string
}

export function PersonaHeader({ persona, description, name }: PersonaHeaderProps) {
  return (
    <div className="ml-16 px-6 pt-20 pb-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Badge className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-300 border-cyan-500/30 px-3 py-1">
              <Compass className="h-4 w-4 mr-2" />
              You are a {persona}
            </Badge>
            <span className="text-slate-400 text-sm">{description}</span>
          </div>

          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              className="h-10 w-10 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800/50"
            >
              <Search className="h-5 w-5" />
            </Button>

            <div className="flex items-center space-x-3">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 bg-gradient-to-br from-emerald-400 to-cyan-400 rounded-full border-2 border-slate-800"></div>
                <div className="w-8 h-8 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full border-2 border-slate-800"></div>
                <div className="w-8 h-8 bg-gradient-to-br from-amber-400 to-orange-400 rounded-full border-2 border-slate-800"></div>
              </div>

              <Button
                variant="ghost"
                size="icon"
                className="h-10 w-10 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800/50"
              >
                <User className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-6">
          <h1 className="text-4xl font-bold text-white mb-2">Welcome back, {name}</h1>
          <p className="text-slate-300 text-lg">Your financial journey continues. Let's make today count.</p>
        </div>
      </div>
    </div>
  )
}
