'use client'

import React, { useState, useEffect } from 'react'

const Preloader = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2000)
    return () => clearTimeout(timer)
  }, [])

  if (!loading) return null

  return (
    <div className="fixed inset-0 z-[9999] bg-white flex flex-col items-center justify-center">
      <style jsx>{`
        .loader-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 20px;
        }

        .logo-wrapper {
          position: relative;
          width: 200px;
          height: auto;
          animation: pulse 2s ease-in-out infinite;
        }

        .logo-wrapper img {
          width: 100%;
          height: auto;
          object-fit: contain;
        }

        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.05); opacity: 0.8; }
        }

        .line-container {
          position: relative;
          height: 3px;
          width: 120px;
          background-color: rgba(15, 23, 42, 0.1);
          border-radius: 3px;
          overflow: hidden;
        }

        .line-fill {
          position: absolute;
          height: 100%;
          width: 100%;
          background-color: #0f172a;
          transform: translateX(-100%);
          animation: loading-bar 2s cubic-bezier(0.5, 0.8, 0.5, 0.2) infinite;
        }

        @keyframes loading-bar {
          0% { transform: translateX(-100%); }
          50% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
      `}</style>
      
      <div className="loader-container">
        <div className="logo-wrapper">
          <img src="/logo.png" alt="Kalanrix Pharma" />
        </div>
        <div className="line-container">
          <div className="line-fill" />
        </div>
      </div>
    </div>
  )
}

export default Preloader
