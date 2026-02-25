"use client"

import ProtectedRoute from "@/components/ProtectedRoute"
import { useAuth } from "@/context/AuthContext"

export default function DashboardPage() {
  const { logout } = useAuth()

  return (
    <ProtectedRoute>
      <h1>Secret Dashboard</h1>
      <button onClick={logout}>Logout</button>
    </ProtectedRoute>
  )
}