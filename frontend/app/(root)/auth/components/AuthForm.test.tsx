import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import AuthForm from "./AuthForm";
import "@testing-library/jest-dom";

jest.mock("next-auth", () => ({
  signIn: jest.fn(),
  signOut: jest.fn(),
  useSession: jest.fn(() => ({
    data: null,
    status: "unauthenticated",
  })),
}));

jest.mock("./AuthProviders", () => {
  return () => {
    <div>
      <div className="flex w-full space-x-4">
        <form className="grow" action={jest.fn()}>
          <button type="submit">
            <svg>Discord</svg>
          </button>
        </form>
        <form className="grow" action={jest.fn()}>
          <button type="submit">
            <svg>Google</svg>
          </button>
        </form>
        <form className="grow" action={jest.fn()}>
          <button type="submit">
            <svg>GitHub</svg>
          </button>
        </form>
      </div>
    </div>;
  };
});

describe("AuthForm Component", () => {
  beforeAll(() => {
    HTMLElement.prototype.scrollIntoView = jest.fn();
  });

  const mockFields = [
    { id: "email", label: "Email", type: "email" },
    { id: "password", label: "Password", type: "password" },
  ];

  const mockOnSubmit = jest.fn();

  beforeEach(() => {
    render(
      <AuthForm
        title="Sign In"
        subtitle="Welcome back! Please sign in to your account."
        fields={mockFields}
        buttonLabel="Submit"
        onSubmit={mockOnSubmit}
        redirectText="Don't have an account?"
        redirectHref="/signup"
        redirectLabel="Sign Up"
      />,
    );
  });

  it("renders the component with required props", () => {
    expect(screen.getByText("Sign In")).toBeInTheDocument();
    expect(
      screen.getByText("Welcome back! Please sign in to your account."),
    ).toBeInTheDocument();
    expect(screen.getByText("Submit")).toBeInTheDocument();
  });

  it("renders all input fields", () => {
    mockFields.forEach((field) => {
      expect(screen.getByLabelText(field.label)).toBeInTheDocument();
    });
  });

  it("updates form data on input change", () => {
    const emailInput = screen.getByLabelText("Email");
    fireEvent.change(emailInput, { target: { value: "test@example.com" } });
    expect(emailInput).toHaveValue("test@example.com");
  });

  it("calls onSubmit with form data on form submission", () => {
    const emailInput = screen.getByLabelText("Email");
    const passwordInput = screen.getByLabelText("Password");
    const submitButton = screen.getByText("Submit");

    fireEvent.change(emailInput, { target: { value: "test@example.com" } });
    fireEvent.change(passwordInput, { target: { value: "password123" } });
    fireEvent.click(submitButton);

    expect(mockOnSubmit).toHaveBeenCalledWith({
      email: "test@example.com",
      password: "password123",
    });
  });

  it("renders redirect text and link when provided", () => {
    expect(screen.getByText("Don't have an account?")).toBeInTheDocument();
    expect(screen.getByText("Sign Up")).toHaveAttribute("href", "/signup");
  });
});
