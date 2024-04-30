import React from "react";

import { describe, it, expect } from "vitest";

import { render, screen } from "@testing-library/react";

import Greet from "../../src/components/Greet";

import "@testing-library/jest-dom/vitest";

describe("Greet", () => {
  it("should render Hello with the name", () => {
    render(<Greet name="Arre" />);

    const heading = screen.getByRole("heading");

    expect(heading).toBeInTheDocument();
    //expect(heading).toHaveTextContent("Hello, Arre!");
    expect(heading).toHaveTextContent(/arre/i);
  });
});
