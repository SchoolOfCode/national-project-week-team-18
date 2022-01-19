import {useState, useEffect} from 'react'
import ScoresHeader from "../ScoresHeader";
import ScoresTable from "../ScoresTable";
import "./style.css";

const scoresArr = [
  {
    id: 1,
    date: "18/1/22",
    topic: "React",
    score: 13,
    outOf: 14,
    percentageScore: 92.9,
  },
  {
    id: 2,
    date: "19/1/22",
    topic: "JavaScript Arrays",
    score: 10,
    outOf: 14,
    percentageScore: 71.4,
  },
  {
    id: 3,
    date: "18/2/22",
    topic: "Testing - Jest",
    score: 6,
    outOf: 12,
    percentageScore: 50,
  },
  {
    id: 4,
    date: "18/3/22",
    topic: "API- express apps",
    score: 10,
    outOf: 10,
    percentageScore: 100,
  },
  {
    id: 5,
    date: "18/3/22",
    topic: "API- express apps",
    score: 10,
    outOf: 10,
    percentageScore: 100,
  },
  {
    id: 6,
    date: "18/3/22",
    topic: "API- express apps",
    score: 10,
    outOf: 10,
    percentageScore: 100,
  },
  {
    id: 7,
    date: "18/3/22",
    topic: "API- express apps",
    score: 10,
    outOf: 10,
    percentageScore: 100,
  },
  {
    id: 8,
    date: "18/3/22",
    topic: "API- express apps",
    score: 10,
    outOf: 10,
    percentageScore: 100,
  },
  {
    id: 9,
    date: "18/3/22",
    topic: "API- express apps",
    score: 10,
    outOf: 10,
    percentageScore: 100,
  },
  {
    id: 10,
    date: "18/3/22",
    topic: "API- express apps",
    score: 10,
    outOf: 10,
    percentageScore: 100,
  },
  {
    id: 11,
    date: "18/3/22",
    topic: "API- express apps",
    score: 10,
    outOf: 10,
    percentageScore: 100,
  },
  {
    id: 12,
    date: "18/3/22",
    topic: "API- express apps",
    score: 10,
    outOf: 10,
    percentageScore: 100,
  },
  {
    id: 13,
    date: "18/3/22",
    topic: "API- express apps",
    score: 10,
    outOf: 10,
    percentageScore: 100,
  },
  {
    id: 14,
    date: "18/3/22",
    topic: "API- express apps",
    score: 10,
    outOf: 10,
    percentageScore: 100,
  },
];

function Scores() {
  const [scores, setscores] = useState({})
  //getScores function
  const getScores = async() =>{
    try {
      const res = await fetch("https://quiztrackerapp.herokuapp.com/scores")
      const scoresData = await res.json()
      setscores(scoresData)
    } catch (err) {
      console.error(err.message)
    }
  }
  console.log(scores)

  useEffect(() =>{
    getScores();
  }, [])

  return (
    <div>
      <ScoresHeader scoresArr={scoresArr} />
      <ScoresTable scoresArr={scoresArr} />
    </div>
  );
}

export default Scores;
