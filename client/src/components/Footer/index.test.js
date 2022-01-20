import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Footer from "./index";

describe("Testing the footer links", () => {
  it("Should link to another page", () => {
    render(<Footer />);

    expect(document.querySelector("a").getAttribute("href")).toBe(
      "https://github.com/TedPhillips1"
    );
  });
});

describe("Testing Footer Component", () => {
  it("Should show footer on render of the page", () => {
    render(<Footer />);
    let footer = screen.getByText("Ted Phillips");
    expect(footer).toBeInTheDocument();
  });
});
