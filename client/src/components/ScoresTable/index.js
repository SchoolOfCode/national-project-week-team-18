import "./style.css";
import GraphScore from "../GraphScore";

function ScoresTable({ scoresArr }) {
  return (
    <div>
      <div className="spanOne"></div>
      <div className="spanOne"></div>
      <div className="spanFour">
        <p>Scores (%)</p>
      </div>
      <div className="spanOne">
        <p>Date</p>
      </div>
      <div className="spanOne">
        <p>Topic</p>
      </div>
      <div className="spanFour">
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
      {scoresArr.map(({ date, topic, percentageScore, id }) => {
        return (
          <GraphScore
            key={id}
            date={date}
            topic={topic}
            percentageScore={percentageScore}
          />
        );
      })}
    </div>
  );
}

export default ScoresTable;
