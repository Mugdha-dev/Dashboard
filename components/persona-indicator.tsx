"use client"

import { Badge } from "@/components/ui/badge"
import { Navigation, Compass, Target, Zap, Heart, Shield } from "lucide-react"

interface PersonaIndicatorProps {
  persona: string
  description: string
}

export function PersonaIndicator({ persona, description }: PersonaIndicatorProps) {
  const getPersonaIcon = (persona: string) => {
    switch (persona.toLowerCase()) {
      case "voyager":
        return <Navigation className="h-4 w-4" />
      case "explorer":
        return <Compass className="h-4 w-4" />
      case "builder":
        return <Target className="h-4 w-4" />
      case "emergent":
        return <Zap className="h-4 w-4" />
      case "guardian":
        return <Shield className="h-4 w-4" />
      default:
        return <Heart className="h-4 w-4" />
    }
  }

  const getPersonaColor = (persona: string) => {
    switch (persona.toLowerCase()) {
      case "voyager":
        return "bg-gradient-to-r from-blue-500 to-cyan-500"
      case "explorer":
        return "bg-gradient-to-r from-green-500 to-emerald-500"
      case "builder":
        return "bg-gradient-to-r from-orange-500 to-red-500"
      case "emergent":
        return "bg-gradient-to-r from-purple-500 to-pink-500"
      case "guardian":
        return "bg-gradient-to-r from-gray-500 to-slate-500"
      default:
        return "bg-gradient-to-r from-indigo-500 to-blue-500"
    }
  }

  return (
    <div className="flex items-center space-x-3">
      <div className={`p-3 rounded-full ${getPersonaColor(persona)} text-white shadow-lg`}>
        {getPersonaIcon(persona)}
      </div>
      <div>
        <Badge variant="secondary" className="mb-1 bg-white/80 text-gray-700">
          You are a {persona}
        </Badge>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </div>
  )
}
