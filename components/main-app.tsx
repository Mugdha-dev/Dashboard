"use client"

import { useState } from "react"
import HomePage from "@/app/page"
import { AgentsPage } from "@/components/agents-page"
import { BillsPage } from "@/components/bills-page"
import { NetWorthPage } from "@/components/networth-page"

export function MainApp() {
  const [currentPage, setCurrentPage] = useState("home")

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <HomePage />
      case "agents":
        return <AgentsPage />
      case "bills":
        return <BillsPage />
      case "networth":
        return <NetWorthPage />
      default:
        return <HomePage />
    }
  }

  return <div className="min-h-screen">{renderPage()}</div>
}
