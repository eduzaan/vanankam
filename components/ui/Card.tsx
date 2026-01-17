import React from 'react'

export default function Card({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return <div className={`p-4 bg-white dark:bg-surface rounded-lg shadow-sm ${className}`}>{children}</div>
}
