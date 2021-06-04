import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Contact from "..";

afterEach(cleanup);

describe("Contact component", () => {
  it("renders", () => {
    render(<Contact />);
  });

  it("matches snapshot", () => {
    const { asFragment } = render(<Contact />);
    expect(asFragment()).toMatchSnapshot();
  });
});

describe("title of h1 is Contact me", () => {
  it("renders", () => {
    const { getByTestId } = render(<Contact />);
    expect(getByTestId("h1tag")).toHaveTextContent("Contact me");
  });
});

describe("title of button is Submit", () => {
  it("renders", () => {
    const { getByTestId } = render(<Contact />);
    expect(getByTestId("buttontag")).toHaveTextContent("Submit");
  });
});
