// components/__tests__/ProtectedRoute.test.tsx

import { render, screen } from "@testing-library/react"
import ProtectedRoute from "../ProtectedRoute"
import { useAuth } from "@/context/AuthContext"
import { useRouter } from "next/navigation"

jest.mock("@/context/AuthContext", () => ({
  useAuth: jest.fn(),
}))

jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
}))

describe("ProtectedRoute (Next.js)", () => {
  const push = jest.fn()

  beforeEach(() => {
    ;(useRouter as jest.Mock).mockReturnValue({
      push,
    })
  })

  it("renders children when token exists", () => {
    ;(useAuth as jest.Mock).mockReturnValue({
      token: "123",
      login: jest.fn(),
      logout: jest.fn(),
    })

    render(
      <ProtectedRoute>
        <div>Protected Content</div>
      </ProtectedRoute>
    )

    expect(screen.getByText("Protected Content")).toBeInTheDocument()
  })

  it("redirects to login when token does not exist", () => {
    ;(useAuth as jest.Mock).mockReturnValue({
      token: null,
      login: jest.fn(),
      logout: jest.fn(),
    })

    render(
      <ProtectedRoute>
        <div>Protected Content</div>
      </ProtectedRoute>
    )

    expect(push).toHaveBeenCalledWith("/login")
  })
})