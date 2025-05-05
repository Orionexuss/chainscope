import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import Navbar from "./Navbar";

describe('Navbar', () => {
  beforeEach(() => render(<Navbar />));

  it('renders the logo', () => {
    const logo = screen.getByAltText("Logo");
    expect(logo).toBeInTheDocument();
  });

  it("renders the Sign-Up button with correct link", () => {
    const link = screen.getByRole('link', { name: /sign up/i });

    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', '/auth/register');
  });

  it("renders the Login button with correct link", () => {
    const link = screen.getByRole('link', { name: /login/i });

    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', '/auth/login');
  });
});
