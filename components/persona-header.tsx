"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Navigation, Compass, Target, Zap, Heart, Shield, User } from "lucide-react"

interface PersonaHeaderProps {
  persona: string
  description: string
  name: string
}

export function PersonaHeader({ persona, description, name }: PersonaHeaderProps) {
  const getPersonaIcon = (persona: string) => {
    switch (persona.toLowerCase()) {
      case "voyager":
        return <Navigation className="h-5 w-5" />
      case "explorer":
        return <Compass className="h-5 w-5" />
      case "builder":
        return <Target className="h-5 w-5" />
      case "emergent":
        return <Zap className="h-5 w-5" />
      case "guardian":
        return <Shield className="h-5 w-5" />
      default:
        return <Heart className="h-5 w-5" />
    }
  }

  const getPersonaGradient = (persona: string) => {
    switch (persona.toLowerCase()) {
      case "voyager":
        return "from-blue-500 to-cyan-500"
      case "explorer":
        return "from-emerald-500 to-teal-500"
      case "builder":
        return "from-orange-500 to-red-500"
      case "emergent":
        return "from-purple-500 to-pink-500"
      case "guardian":
        return "from-slate-500 to-gray-500"
      default:
        return "from-indigo-500 to-blue-500"
    }
  }

  return (
    <div className="px-4 pt-24 pb-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className={`p-4 rounded-2xl bg-gradient-to-br ${getPersonaGradient(persona)} shadow-2xl`}>
              {getPersonaIcon(persona)}
            </div>
            <div>
              <div className="flex items-center space-x-3 mb-2">
                <Badge className={`bg-gradient-to-r ${getPersonaGradient(persona)} text-white border-0 px-3 py-1`}>
                  You are a {persona}
                </Badge>
              </div>
              <h1 className="text-3xl font-bold text-white mb-1">Welcome back, {name}</h1>
              <p className="text-slate-300">{description}</p>
            </div>
          </div>

          {/* User Profile */}
          <Button className="glass-dark border border-slate-600/30 hover:border-slate-500/50 text-white p-3 rounded-full">
            <User className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  )
}
