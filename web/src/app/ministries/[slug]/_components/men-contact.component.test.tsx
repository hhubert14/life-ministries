import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect, vi } from "vitest";
import { MenContact } from "./men-contact";

describe("MenContact", () => {
  it("renders the contact section heading", () => {
    render(<MenContact />);
    expect(
      screen.getByRole("heading", { name: /get connected/i })
    ).toBeInTheDocument();
  });

  it("renders the director info", () => {
    render(<MenContact />);
    expect(screen.getByText(/men's director/i)).toBeInTheDocument();
    expect(screen.getByText(/pastor jonathan gillette/i)).toBeInTheDocument();
  });

  it("renders all form fields with labels", () => {
    render(<MenContact />);

    expect(screen.getByLabelText(/first name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/last name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/message/i)).toBeInTheDocument();
  });

  it("renders submit button", () => {
    render(<MenContact />);
    expect(
      screen.getByRole("button", { name: /send message/i })
    ).toBeInTheDocument();
  });

  it("allows user to fill out the form", async () => {
    const user = userEvent.setup();
    render(<MenContact />);

    await user.type(screen.getByLabelText(/first name/i), "John");
    await user.type(screen.getByLabelText(/last name/i), "Doe");
    await user.type(screen.getByLabelText(/email/i), "john@example.com");
    await user.type(screen.getByLabelText(/message/i), "Hello!");

    expect(screen.getByLabelText(/first name/i)).toHaveValue("John");
    expect(screen.getByLabelText(/last name/i)).toHaveValue("Doe");
    expect(screen.getByLabelText(/email/i)).toHaveValue("john@example.com");
    expect(screen.getByLabelText(/message/i)).toHaveValue("Hello!");
  });

  it("submits form with entered data", async () => {
    const user = userEvent.setup();
    const consoleSpy = vi.spyOn(console, "log").mockImplementation(() => {});

    render(<MenContact />);

    await user.type(screen.getByLabelText(/first name/i), "John");
    await user.type(screen.getByLabelText(/last name/i), "Doe");
    await user.type(screen.getByLabelText(/email/i), "john@example.com");
    await user.type(screen.getByLabelText(/message/i), "Hello!");
    await user.click(screen.getByRole("button", { name: /send message/i }));

    expect(consoleSpy).toHaveBeenCalledWith("Form submitted:", {
      firstName: "John",
      lastName: "Doe",
      email: "john@example.com",
      message: "Hello!",
    });

    consoleSpy.mockRestore();
  });

  it("has required attributes on form fields", () => {
    render(<MenContact />);

    expect(screen.getByLabelText(/first name/i)).toBeRequired();
    expect(screen.getByLabelText(/last name/i)).toBeRequired();
    expect(screen.getByLabelText(/email/i)).toBeRequired();
    expect(screen.getByLabelText(/message/i)).toBeRequired();
  });

  it("has correct input types", () => {
    render(<MenContact />);

    expect(screen.getByLabelText(/first name/i)).toHaveAttribute("type", "text");
    expect(screen.getByLabelText(/last name/i)).toHaveAttribute("type", "text");
    expect(screen.getByLabelText(/email/i)).toHaveAttribute("type", "email");
  });
});
