"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { MessageCircle, Send, Sparkles, X, Mic, MicOff } from "lucide-react"

export function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false)
  const [message, setMessage] = useState("")
  const [isListening, setIsListening] = useState(false)
  const [messages, setMessages] = useState([
    {
      type: "ai",
      content:
        "Hi Priya! I'm your AI financial assistant powered by Gemini. I can help you optimize investments, track expenses, or answer any financial questions. What would you like to explore today?",
    },
  ])

  const handleSend = () => {
    if (!message.trim()) return

    setMessages((prev) => [...prev, { type: "user", content: message }])

    // Simulate AI response
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          type: "ai",
          content:
            "Based on your Voyager persona and current financial data, I can see you're exploring new opportunities. Let me analyze your portfolio and suggest some optimizations. Would you like me to run a scenario analysis for your ₹50L home goal?",
        },
      ])
    }, 1000)

    setMessage("")
  }

  const toggleVoice = () => {
    setIsListening(!isListening)
    // Voice recognition logic would go here
  }

  return (
    <>
      {/* Floating AI Assistant Bar */}
      <div className="fixed top-0 left-0 right-0 z-50 p-4">
        <div className="max-w-7xl mx-auto">
          <div className="glass-dark border border-purple-500/30 rounded-2xl shadow-2xl shadow-purple-500/10">
            <div className="flex items-center justify-between p-4">
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-gradient-to-br from-purple-500/30 to-pink-500/30 rounded-full animate-pulse">
                    <Sparkles className="h-5 w-5 text-purple-300" />
                  </div>
                  <div>
                    <div className="flex items-center space-x-2">
                      <h3 className="font-bold text-white">Gemini AI</h3>
                      <div className="px-2 py-1 bg-gradient-to-r from-purple-600/30 to-pink-600/30 rounded-full">
                        <span className="text-xs text-purple-200">Powered by Google</span>
                      </div>
                    </div>
                    <p className="text-xs text-purple-200/80">Your intelligent financial companion</p>
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="hidden md:flex items-center space-x-2 bg-slate-800/50 rounded-full px-4 py-2 border border-slate-600/30">
                  <Input
                    placeholder="Ask about your finances..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyPress={(e) => e.key === "Enter" && handleSend()}
                    className="border-0 bg-transparent focus-visible:ring-0 text-sm text-white placeholder:text-slate-400"
                  />
                  <Button
                    size="sm"
                    onClick={toggleVoice}
                    className={`rounded-full h-8 w-8 p-0 ${
                      isListening
                        ? "bg-red-500 hover:bg-red-600"
                        : "bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500"
                    }`}
                  >
                    {isListening ? <MicOff className="h-3 w-3" /> : <Mic className="h-3 w-3" />}
                  </Button>
                  <Button
                    size="sm"
                    onClick={handleSend}
                    className="rounded-full h-8 w-8 p-0 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500"
                  >
                    <Send className="h-3 w-3" />
                  </Button>
                </div>

                <Button
                  size="sm"
                  onClick={() => setIsOpen(!isOpen)}
                  className="md:hidden bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white border-0"
                >
                  <MessageCircle className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Chat Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm md:hidden">
          <div className="fixed bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900 to-slate-800 rounded-t-3xl max-h-[80vh] flex flex-col border-t border-purple-500/30">
            <div className="flex items-center justify-between p-6 border-b border-slate-700/50">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-gradient-to-br from-purple-500/30 to-pink-500/30 rounded-full">
                  <Sparkles className="h-5 w-5 text-purple-300" />
                </div>
                <div>
                  <span className="font-bold text-white">Gemini AI Assistant</span>
                  <p className="text-xs text-purple-200/80">Powered by Google</p>
                </div>
              </div>
              <Button
                size="sm"
                onClick={() => setIsOpen(false)}
                className="bg-slate-700 hover:bg-slate-600 text-white border-0"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {messages.map((msg, index) => (
                <div key={index} className={`flex ${msg.type === "user" ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`max-w-[80%] p-4 rounded-2xl ${
                      msg.type === "user"
                        ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white"
                        : "glass-dark border border-slate-600/30 text-slate-200"
                    }`}
                  >
                    <p className="text-sm">{msg.content}</p>
                  </div>
                </div>
              ))}
            </div>

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
                  onClick={toggleVoice}
                  className={`${
                    isListening
                      ? "bg-red-500 hover:bg-red-600"
                      : "bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500"
                  } text-white border-0`}
                >
                  {isListening ? <MicOff className="h-4 w-4" /> : <Mic className="h-4 w-4" />}
                </Button>
                <Button
                  onClick={handleSend}
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white border-0"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
