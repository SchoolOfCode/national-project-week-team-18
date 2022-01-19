import { useState, useEffect } from "react";
import ScoresHeader from "../ScoresHeader";
import ScoresTable from "../ScoresTable";
import "./style.css";

let scoresArr = [
  {
    id: 1,
    topic: "react",
    score: 5,
    outOf: 10,
    percentage: 50,
    date: "18-1-2022",
  },
  {
    id: 2,
    topic: "react",
    score: 4,
    outOf: 10,
    percentage: 40,
    date: "18-1-2022",
  },
  {
    id: 3,
    topic: "react",
    score: 6,
    outOf: 10,
    percentage: 60,
    date: "18-1-2022",
  },
  {
    id: 5,
    topic: "react",
    score: 8,
    outOf: 10,
    percentage: 80,
    date: "18-1-2022",
  },
  {
    id: 6,
    topic: "react",
    score: 10,
    outOf: 10,
    percentage: 100,
    date: "18-1-2022",
  },
];

function Scores({ handleRenderScores, renderScores }) {
  // const [scores, setScores] = useState(null);

  // const getScores = async () => {
  //   try {
  //     const res = await fetch("https://quiztrackerapp.herokuapp.com/scores");

  //     const scoresData = await res.json();

  //     setScores(scoresData);
  //   } catch (err) {
  //     console.error(err.message);
  //   }
  // };
  // useEffect(() => {
  //   getScores();
  // }, [renderScores]);
  return (
    <div>
      <ScoresHeader scoresArr={scoresArr} />
      <ScoresTable
        handleRenderScores={handleRenderScores}
        scoresArr={scoresArr}
      />
    </div>
  );
}

export default Scores;
