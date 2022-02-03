import {
  render,
  screen,
  fireEvent,
  waitFor,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import "@testing-library/jest-dom";
import Scores from "./index";
import getScores from "./models";

jest.mock("./models", () => jest.fn());

let testProps = {
  handleRenderScores: jest.fn(),
  renderScores: false,
};

describe("Scores Tests", () => {
  it("should render scores data and the ScoresHeader", () => {
    render(<Scores {...testProps} />);
    let scoresHeader = screen.getByText("Your Scores");
    expect(scoresHeader).toBeInTheDocument();
  });
  it.only("should render scores data and the ScoresTable", async () => {
    getScores.mockResolvedValue([
      {
        id: 1,
        topic: "react",
        score: 4,
        outof: 5,
        percentage: 80,
        date: "22-12-2019",
      },
    ]);
    render(<Scores {...testProps} />);
    let scoresTable = screen.getByText("Topic");
    await waitForElementToBeRemoved(() => screen.queryByText("loading"));
    expect(scoresTable).toBeInTheDocument();
  });
});
