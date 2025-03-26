"use client"

import { useState, useEffect } from "react"
import LoadingScreen from "@/components/LoadingScreen"

export default function Home() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time (you can replace this with actual loading logic)
    const timer = setTimeout(() => {
      setLoading(false)
    }, 3000) // 3 seconds loading time

    return () => clearTimeout(timer)
  }, [])

  return <main className="min-h-screen">{loading ? <LoadingScreen /> : "Hello world"}</main>
}

