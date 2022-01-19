import { useState, useEffect } from "react";
import ScoresHeader from "../ScoresHeader";
import ScoresTable from "../ScoresTable";
import "./style.css";

function Scores({ handleRenderScores, renderScores }) {
  const [scores, setScores] = useState(null);

  const getScores = async () => {
    try {
      const res = await fetch("https://quiztrackerapp.herokuapp.com/scores");

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
      {scores && <ScoresHeader scoresArr={scores.payload} />}
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
