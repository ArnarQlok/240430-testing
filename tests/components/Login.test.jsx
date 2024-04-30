import React from "react";

import { describe, it, expect } from "vitest";

import { render, screen } from "@testing-library/react";

import Login from "../../src/components/Login";

import "@testing-library/jest-dom/vitest";

describe("Login", () => {
  it("should render login button initially", () => {
    render(<Login userName="Arre" />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent("Login");
  });

  it("should render Hello with the name when logged in", () => {
    render(<Login userName="Arre" />);

    const userName = screen.getByText(/hello/i);
    const button = screen.getBytTestId("login-button");

    expect(userName).toBeInTheDocument();
    expect(userName).toHaveTextContent(/arre/i);
  });
});

// import React from "react";

// //importer för testing i vitest
// import { describe, it, expect } from "vitest";

// //import från react testing library
// import { render, screen, fireEvent } from "@testing-library/react";

// import Login from "../../src/components/Login";

// import "@testing-library/jest-dom/vitest";

// //tar in två saker - namn på testobject + callbackfunction
// describe("Login", () => {
//   it("should render login button initially", () => {
//     render(<Login userName="Evesteve" />);
//     const button = screen.getByRole("button");

//     expect(button).toBeInTheDocument();
//     expect(button).toHaveTextContent("Login");
//   });

//   it("should render with the name when logged in"),
//     () => {
//       // arrange
//       render(<Login userName="Evesteve" />);
//       const userName = screen.getByRole("heading");
//       const button = screen.getByTestId("login-button");

//       // act
//       fireEvent.click(button);

//       // assert
//       expect(userName).toBeInTheDocument();
//       expect(userName).toHaveTextContent(/evesteve/i);
//     };
// });
