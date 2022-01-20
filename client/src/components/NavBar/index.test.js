import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import NavBar from "./index";

let testProps = {
  handleAddScore: jest.fn(),
};

describe("NavBar Tests", () => {
  it("Should run function on click of button", () => {
    render(<NavBar handleAddScore={testProps.handleAddScore} />);
    let button = screen.getByText("Add Score");
    fireEvent.click(button);
    expect(testProps.handleAddScore).toHaveBeenCalled();
  });
  it("Should render button in NavBar", () => {
    render(<NavBar handleAddScore={testProps.handleAddScore} />);
    let actual = screen.getByText("Add Score");
    expect(actual).toBeInTheDocument();
  });
});
