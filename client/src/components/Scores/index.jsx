import { useState, useEffect } from "react";
import ScoresHeader from "../ScoresHeader";
import ScoresTable from "../ScoresTable";
import "./style.css";
import getScores from "./models";

function Scores({ handleRenderScores, renderScores }) {
  const [scores, setScores] = useState(null);

  // useEffect(() => {
  //   async function x() {}
  //   x();
  // }, [scores]);

  try {
    getScores()
      .then((scoresObj) => {
        setScores(scoresObj);
      })
      .catch(() => {
        console.log("error");
      });
  } catch (err) {
    console.log("failed", err);
  }

  if (!scores) {
    console.log("no data");
    return <h1>loading</h1>;
  }
  console.log("data", scores);
  return (
    <div>
      {/* {scores && (
        <ScoresHeader renderScores={renderScores} scoresArr={scores} />
      )} */}
      <h1>Topic</h1>
      {/* <ScoresTable handleRenderScores={handleRenderScores} scoresArr={scores} /> */}
    </div>
  );
}

export default Scores;
