import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { LoginUser } from "@/services/authService"
import LoginPage from "@/app/login/page"

jest.mock("@/services/authService", () => ({
  LoginUser: jest.fn(),
}))

describe("Login Integration Flow", () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it("logs in successfully and shows dashboard", async () => {
    (LoginUser as jest.Mock).mockResolvedValue({
      token: "fake-token",
    })

    const user = userEvent.setup()
    render(<LoginPage />)

    await user.type(screen.getByPlaceholderText("Enter Email"), "test@test.com")
    await user.type(screen.getByPlaceholderText("Enter Password"), "123456")

    await user.click(screen.getByRole("button"))

    expect(await screen.findByText("Dashboard")).toBeInTheDocument()
  })

  it("shows error on failed login", async () => {
    (LoginUser as jest.Mock).mockRejectedValue(
      new Error("Login failed")
    )

    const user = userEvent.setup()
    render(<LoginPage />)

    await user.type(screen.getByPlaceholderText("Enter Email"), "wrong@test.com")
    await user.type(screen.getByPlaceholderText("Enter Password"), "wrong")

    await user.click(screen.getByRole("button"))

    expect(await screen.findByRole("alert")).toHaveTextContent(
      "Login failed"
    )
  })
})