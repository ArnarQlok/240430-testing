import React from "react";
import { describe, it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "../../src/App";
import "@testing-library/jest-dom/vitest";

describe("Integration Test for TextInput and TextDisplay", () => {
  it("should display the text from TextInput in TextDisplay", () => {
    //arrange
    render(<App />);
    //const input = screen.getByPlaceholderText("Type something...");
    const input = screen.getByPlaceholderText(/something/i);
    const text = screen.getByRole("paragraph");

    // act
    fireEvent.change(input, { target: { value: "Hello, World!" } });

    // assert
    expect(text).toHaveTextContent("Hello, World!").toBeInTheDocument();
  });
});
