"use client"

import { useState } from "react"
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Send, X } from "lucide-react"

interface AIAssistantProps {
  isOpen: boolean
  onClose: () => void
}

export function AIAssistant({ isOpen, onClose }: AIAssistantProps) {
  const [message, setMessage] = useState("")
  const [messages, setMessages] = useState([
    {
      type: "ai",
      content:
        "Hi Priya! I'm your AI financial assistant powered by Gemini. I can help you optimize investments, track expenses, or answer any financial questions. What would you like to explore today?",
      agent: "Gemini",
    },
  ])
  const [selectedAgent, setSelectedAgent] = useState("Gemini")

  const agents = [
    { id: "Lakshmi", name: "Lakshmi", description: "Investment Advisor" },
    { id: "Daksha", name: "Daksha", description: "Expense Tracker" },
    { id: "Vaani", name: "Vaani", description: "Tax Consultant" },
    { id: "Arjun", name: "Arjun", description: "Loan Specialist" },
  ]

  const handleSend = () => {
    if (!message.trim()) return

    setMessages((prev) => [...prev, { type: "user", content: message, agent: "User" }])

    // Simulate AI response based on selected agent
    setTimeout(() => {
      let aiResponse = ""
      switch (selectedAgent) {
        case "Lakshmi":
          aiResponse =
            "As Lakshmi, your investment advisor, I recommend reviewing your portfolio for diversification opportunities. What asset class are you interested in?"
          break
        case "Daksha":
          aiResponse =
            "As Daksha, your expense tracker, I've noticed a spike in your food & dining expenses. Would you like a breakdown of your spending categories?"
          break
        case "Vaani":
          aiResponse =
            "As Vaani, your tax consultant, I can help you identify potential tax savings. Do you have any recent deductions or income changes to report?"
          break
        case "Arjun":
          aiResponse =
            "As Arjun, your loan specialist, I can help you explore refinancing options for your home loan. What's your current interest rate?"
          break
        default:
          aiResponse =
            "I understand you're asking about your finances. Based on your data, I can help you optimize your spending and investments. Would you like me to analyze your recent transactions?"
      }
      setMessages((prev) => [...prev, { type: "ai", content: aiResponse, agent: selectedAgent }])
    }, 1000)

    setMessage("")
  }

  return (
    <div
      className={`fixed inset-y-0 right-0 w-full md:w-1/2 lg:w-1/3 bg-gradient-to-br from-slate-900 to-slate-800 z-[100] shadow-2xl transform transition-transform duration-500 ease-in-out ${
        isOpen ? "translate-x-0" : "translate-x-full"
      } flex flex-col border-l border-slate-700/50`}
    >
      <CardHeader className="flex flex-row items-center justify-between p-6 border-b border-slate-700/50">
        <CardTitle className="flex items-center space-x-3 text-white text-xl">
          <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-red-500 rounded-full flex items-center justify-center">
            <span className="text-white text-sm font-bold">G</span>
          </div>
          <span>Gemini AI Chat</span>
        </CardTitle>
        <Button variant="ghost" size="icon" onClick={onClose} className="text-slate-400 hover:text-white">
          <X className="h-5 w-5" />
        </Button>
      </CardHeader>

      <CardContent className="flex-1 overflow-y-auto p-6 space-y-4">
        {/* Agent Selection */}
        <div className="mb-6">
          <h4 className="text-lg font-semibold text-white mb-3">Choose Your Agent:</h4>
          <div className="grid grid-cols-2 gap-3">
            {agents.map((agent) => (
              <Button
                key={agent.id}
                variant={selectedAgent === agent.id ? "default" : "outline"}
                className={`flex flex-col h-auto py-3 px-4 rounded-xl transition-all duration-200 ${
                  selectedAgent === agent.id
                    ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/25"
                    : "bg-slate-800/50 border-slate-600/30 text-slate-300 hover:bg-slate-700/50 hover:text-white"
                }`}
                onClick={() => setSelectedAgent(agent.id)}
              >
                <span className="font-bold text-base">{agent.name}</span>
                <span className="text-xs opacity-80">{agent.description}</span>
              </Button>
            ))}
          </div>
        </div>

        {/* Chat Messages */}
        {messages.map((msg, index) => (
          <div key={index} className={`flex ${msg.type === "user" ? "justify-end" : "justify-start"}`}>
            <div
              className={`max-w-[80%] p-4 rounded-2xl ${
                msg.type === "user"
                  ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white"
                  : "glass-dark border border-slate-600/30 text-slate-200"
              }`}
            >
              {msg.type === "ai" && msg.agent && (
                <div className="text-xs font-semibold text-purple-300 mb-1">{msg.agent}</div>
              )}
              <p className="text-sm">{msg.content}</p>
            </div>
          </div>
        ))}
      </CardContent>

      <div className="p-6 border-t border-slate-700/50">
        <div className="flex space-x-3">
          <Input
            placeholder="Ask about your finances..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleSend()}
            className="bg-slate-800/50 border-slate-600/30 text-white placeholder:text-slate-400"
          />
          <Button
            onClick={handleSend}
            className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white border-0"
          >
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}
