import { render, screen } from "@testing-library/react";
import Hero from "./Hero";
import "@testing-library/jest-dom";

describe("Hero Component", () => {
  beforeEach(() => {
    render(<Hero />);
  });

  it("renders the main heading", () => {
    const mainHeading = screen.getByRole("heading", { level: 1 });
    expect(mainHeading).toHaveTextContent(
      /FOLLOW THE MOST PROFITABLE WALLETS/i,
    );
  });

  it("renders the subheading", () => {
    const subHeading = screen.getByText(
      /SEE WHAT TOP WALLETS ARE DOING BEFORE THE CROWD/i,
    );
    expect(subHeading).toBeInTheDocument();
  });

  it("renders the paragraph text", () => {
    const paragraph = screen.getByText(
      /Spot trends early, analyze smart money behavior, and make informed/i,
    );
    expect(paragraph).toBeInTheDocument();
  });

  it("renders the button with correct text", () => {
    const button = screen.getByText(/TRY IT >/i);
    expect(button).toBeInTheDocument();
  });

  it("renders the link with correct href", () => {
    const link = screen.getByRole("link", { name: /TRY IT >/i });
    expect(link).toHaveAttribute("href", "/auth/register");
  });

  it("matches the snapshot", () => {
    const { asFragment } = render(<Hero />);
    expect(asFragment()).toMatchSnapshot();
  });
});
