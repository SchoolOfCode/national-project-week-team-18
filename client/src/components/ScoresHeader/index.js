import "./style.css";

import { useState, useEffect } from "react";

function ScoresHeader({ scoresArr, renderScores }) {
  const [averageScore, setAverageScore] = useState(0);

  useEffect(() => {
    setAverageScore(() => {
      let arr = scoresArr.map(({ score, outof }) => {
        return (score / outof) * 100;
      });
      console.log(arr);
      let sum = arr.reduce((acc, cur) => {
        return acc + cur;
      }, 0);
      // console.log(arr, sum);
      return Math.floor(sum / arr.length).toString();
    });
  }, [scoresArr, renderScores]);

  return (
    <div>
      <h1> Your Scores </h1>
      <p>
        Hey there, here are your scores. Your average score is {averageScore}%.
        You're doing great, keep it up!
      </p>
    </div>
  );
}

export default ScoresHeader;
