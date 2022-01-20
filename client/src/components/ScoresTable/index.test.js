import { render, screen } from "@testing-library/react";
import ScoresTable from './index'
import '@testing-library/jest-dom'
const myob = {
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
  handleRenderScores: jest.fn()
}
test("Component should be in the document", () => {
    render(
      <ScoresTable {...myob} />  
    );
    const actual = screen.getByTestId("scoresTable-id");
    expect(actual).toBeInTheDocument();
})