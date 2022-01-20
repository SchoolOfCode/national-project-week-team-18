import { useState, useEffect } from "react";
import ScoresHeader from "../ScoresHeader";
import ScoresTable from "../ScoresTable";
import "./style.css";

function Scores({ handleRenderScores, renderScores }) {
  const [scores, setScores] = useState(null);

  const getScores = async () => {
    try {
      const res = await fetch(`${process.env.REACT_APP_API_URL}/scores`);

      const scoresData = await res.json();

      setScores(scoresData);
    } catch (err) {
      console.error(err.message);
    }
  };
  useEffect(() => {
    getScores();
  }, [renderScores]);
  return (
    <div>
      {scores && (
        <ScoresHeader renderScores={renderScores} scoresArr={scores.payload} />
      )}
      {scores && (
        <ScoresTable
          handleRenderScores={handleRenderScores}
          scoresArr={scores.payload}
        />
      )}
    </div>
  );
}

export default Scores;
