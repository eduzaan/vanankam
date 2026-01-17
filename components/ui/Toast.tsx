"use client"
import React from 'react'

export default function Toast({ message, onClose }: { message: string; onClose?: () => void }) {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 px-4 py-2 bg-black text-white rounded shadow">
      <span>{message}</span>
      {onClose && (
        <button onClick={onClose} className="text-sm underline ml-2">
          Close
        </button>
      )}
    </div>
  )
}
