"use client"

import { Sparkles } from "lucide-react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

interface PersonaIndicatorProps {
  persona: string
  description: string
}

export function PersonaIndicator({ persona, description }: PersonaIndicatorProps) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <div className="flex items-center space-x-2 text-purple-300 cursor-help">
            <Sparkles className="h-4 w-4" />
            <span className="text-sm font-medium">{persona}</span>
          </div>
        </TooltipTrigger>
        <TooltipContent className="bg-slate-800 border-slate-700 text-white">
          <p>{description}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
