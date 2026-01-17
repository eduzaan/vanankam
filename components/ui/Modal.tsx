"use client"
import Image from 'next/image'
import React from 'react'

export default function Modal({
  isOpen,
  onClose,
  children,
}: {
  isOpen: boolean
  onClose: () => void
  children: React.ReactNode
}) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="fixed inset-0 bg-black/40" onClick={onClose} />
      <div className="z-10 w-full max-w-2xl p-6 bg-white rounded-lg shadow-lg relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1 hover:bg-gray-100 rounded-full transition-colors"
          aria-label="Close modal"
        >
          <Image
            src="/public/images/close-white.png"
            alt="Close"
            width={24}
            height={24}
            className="w-6 h-6"
          />
        </button>
        {children}
      </div>
    </div>
  )
}
