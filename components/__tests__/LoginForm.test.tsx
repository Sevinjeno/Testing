import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import LoginForm from "../LoginForm";

/**
 * Test Suite: LoginForm Component
 *
 * This suite validates:
 * 1. Static rendering of UI elements
 * 2. Conditional rendering (loading + error states)
 * 3. User interaction (typing + submit)
 * 4. Callback execution with correct arguments
 */

describe("LoginForm Component", () => {

   /**
   * Test Case:
   * Ensures that both input fields are rendered correctly.
   *
   * What this verifies:
   * - Component mounts without crashing
   * - Email input exists
   * - Password input exists
   *
   * Type: Rendering Test
   */


  it("renders email and password inputs", () => {
    render(<LoginForm onSubmit={jest.fn()} />);

    expect(screen.getByPlaceholderText("Enter Email")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Enter Password")).toBeInTheDocument();
  });

  it("renders login button", () => {
    render(<LoginForm onSubmit={jest.fn()} />);

    expect(screen.getByRole("button", { name: "Login" })).toBeInTheDocument();
  });

    /**
   * Test Case:
   * Verifies loading state behavior.
   *
   * What this verifies:
   * - Button text changes to "Loading..."
   * - Component reacts correctly to `loading` prop
   *
   * Type: Conditional Rendering Test
   */

  it("shows loading state", () => {
    render(<LoginForm onSubmit={jest.fn()} loading />);

    expect(screen.getByRole("button")).toHaveTextContent("Loading...");
  });

  it("shows error message when error prop exists", () => {
    render(<LoginForm onSubmit={jest.fn()} error="Invalid credentials" />);

    expect(screen.getByRole("alert")).toHaveTextContent("Invalid credentials");
  });

   /**
   * Test Case:
   * Simulates real user interaction:
   * - User types email
   * - User types password
   * - User clicks submit
   *
   * What this verifies:
   * - Controlled inputs update state correctly
   * - Form submission works
   * - onSubmit callback receives correct arguments
   *
   * Type: User Interaction + State + Callback Test
   */


  it("calls onSubmit with typed values", async () => {
    
    const user = userEvent.setup();
    const mockSubmit = jest.fn();

    render(<LoginForm onSubmit={mockSubmit} />);

    // Simulate user typing

    await user.type(
      screen.getByPlaceholderText("Enter Email"),
      "test@test.com",
    );
    await user.type(screen.getByPlaceholderText("Enter Password"), "123456");

    await user.click(screen.getByRole("button"));

    expect(mockSubmit).toHaveBeenCalledWith("test@test.com", "123456");
  });
});
