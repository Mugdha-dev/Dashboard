"use client"

interface NavigationProps {
  currentPage: string
  onPageChange: (page: string) => void
}

export function Navigation({ currentPage, onPageChange }: NavigationProps) {
  // Navigation is now handled by the sidebar in the main component
  return null
}
</merged_code>
