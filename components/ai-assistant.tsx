"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Mic, Send, Minimize2, Maximize2, X } from "lucide-react"

export function AIAssistant() {
  const [isExpanded, setIsExpanded] = useState(false)
  const [message, setMessage] = useState("")

  return (
    <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50">
      <Card className={`glass-dark border-purple-500/30 transition-all duration-300 ${isExpanded ? "w-96" : "w-80"}`}>
        <CardContent className="p-4">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center space-x-3">
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-red-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">G</span>
                </div>
                <span className="text-white font-semibold">Gemini</span>
              </div>
              <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
            </div>
            <div className="flex items-center space-x-1">
              <Button
                variant="ghost"
                size="icon"
                className="h-6 w-6 text-slate-400 hover:text-white"
                onClick={() => setIsExpanded(!isExpanded)}
              >
                {isExpanded ? <Minimize2 className="h-3 w-3" /> : <Maximize2 className="h-3 w-3" />}
              </Button>
              <Button variant="ghost" size="icon" className="h-6 w-6 text-slate-400 hover:text-white">
                <X className="h-3 w-3" />
              </Button>
            </div>
          </div>

          {isExpanded && (
            <div className="mb-4 p-3 bg-slate-800/50 rounded-lg">
              <p className="text-sm text-slate-300">
                Hi Priya! I'm your AI financial assistant. I can help you with budgeting, investments, and financial
                planning.
              </p>
            </div>
          )}

          <div className="flex items-center space-x-2">
            <Input
              placeholder="Ask about your finances..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="bg-slate-800/50 border-slate-600/30 text-white placeholder:text-slate-400 text-sm"
            />
            <Button
              size="icon"
              className="h-8 w-8 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white border-0"
            >
              <Mic className="h-4 w-4" />
            </Button>
            <Button
              size="icon"
              className="h-8 w-8 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white border-0"
            >
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
