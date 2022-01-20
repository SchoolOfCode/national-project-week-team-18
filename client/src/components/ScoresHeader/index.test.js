import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ScoresHeader from "./";
import React from "react";

const testProps = {
  scoresArr: [
    {
      id: 1,
      topic: "React",
      score: 4,
      outof: 5,
      percentage: 80,
      date: "2-3-2020",
    },
    {
      id: 2,
      topic: "React",
      score: 4,
      outof: 5,
      percentage: 80,
      date: "2-3-2020",
    },
  ],
  renderScores: true,
};

describe("ScoresHeader Test", () => {
  it("Should render in the document", () => {
    render(<ScoresHeader {...testProps} />);
    let actual = screen.getByText(
      "Hey there, here are your scores. Your average score is 80%. You're doing great, keep it up!"
    );
    expect(actual).toBeInTheDocument();
  });
});
