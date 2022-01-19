import "./style.css";
import GraphScore from "../GraphScore";

function ScoresTable({ scoresArr, handleRenderScores }) {
  return (
    <div className="table-container">
      <div className="grid-container">
        <div className="light"></div>
        <div className="dark"></div>
        <div className="light">
          <p>Scores (%)</p>
        </div>
        <div className="dark"></div>
        <div className="light">
          <p>Date</p>
        </div>
        <div className="dark">
          <p>Topic</p>
        </div>
        <div className="numbers light">
          <p>0</p>
          <p>10</p>
          <p>20</p>
          <p>30</p>
          <p>40</p>
          <p>50</p>
          <p>60</p>
          <p>70</p>
          <p>80</p>
          <p>90</p>
          <p>100</p>
        </div>
        <p className="dark">Delete</p>
      </div>
      <div className="scores">
        {scoresArr.map(({ date, topic, percentage, id }) => {
          return (
            <GraphScore
              handleRenderScores={handleRenderScores}
              key={id}
              id={id}
              date={date}
              topic={topic}
              percentageScore={percentage}
            />
          );
        })}
      </div>
    </div>
  );
}

export default ScoresTable;
