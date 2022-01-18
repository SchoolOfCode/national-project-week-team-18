import {useState} from "react";


function ScoresHeader() {
  const [averageScore, setAverageScore] = useState(0);
   return <div>
    <h1> Your Scores </h1>
    <p> Hey there, here are your scores. Your average score is {averageScore}%. You're doing great, keep it up!</p>

  </div>;
}

export default ScoresHeader;
