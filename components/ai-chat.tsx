"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { MessageCircle, Send, Sparkles, X } from "lucide-react"

export function AIChat() {
  const [isOpen, setIsOpen] = useState(false)
  const [message, setMessage] = useState("")
  const [messages, setMessages] = useState([
    {
      type: "ai",
      content:
        "Hi! I'm your AI financial assistant. Ask me anything about your finances, investments, or spending patterns.",
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
            "I understand you're asking about your finances. Based on your data, I can help you optimize your spending and investments. Would you like me to analyze your recent transactions?",
        },
      ])
    }, 1000)

    setMessage("")
  }

  return (
    <>
      {/* Persistent Chat Bar */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full">
                <Sparkles className="h-4 w-4 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">AI Assistant</h3>
                <p className="text-xs text-gray-600">Powered by Gemini</p>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <div className="hidden md:flex items-center space-x-2 bg-gray-50 rounded-full px-4 py-2">
                <Input
                  placeholder="Ask about your finances..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleSend()}
                  className="border-0 bg-transparent focus-visible:ring-0 text-sm"
                />
                <Button size="sm" onClick={handleSend} className="rounded-full h-8 w-8 p-0">
                  <Send className="h-3 w-3" />
                </Button>
              </div>

              <Button variant="ghost" size="sm" onClick={() => setIsOpen(!isOpen)} className="md:hidden">
                <MessageCircle className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Chat Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 md:hidden">
          <div className="fixed bottom-0 left-0 right-0 bg-white rounded-t-xl max-h-[80vh] flex flex-col">
            <div className="flex items-center justify-between p-4 border-b">
              <div className="flex items-center space-x-2">
                <Sparkles className="h-5 w-5 text-purple-600" />
                <span className="font-semibold">AI Assistant</span>
              </div>
              <Button variant="ghost" size="sm" onClick={() => setIsOpen(false)}>
                <X className="h-4 w-4" />
              </Button>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((msg, index) => (
                <div key={index} className={`flex ${msg.type === "user" ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`max-w-[80%] p-3 rounded-lg ${
                      msg.type === "user" ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-900"
                    }`}
                  >
                    <p className="text-sm">{msg.content}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-4 border-t">
              <div className="flex space-x-2">
                <Input
                  placeholder="Ask about your finances..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleSend()}
                />
                <Button onClick={handleSend}>
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
