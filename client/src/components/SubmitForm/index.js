import "./style.css";
import { useState } from "react";

function SubmitForm({ handleAddScore, handleRenderScores }) {
  const [score, setScore] = useState(0);
  const [outOf, setOutOf] = useState(0);
  const [topic, setTopic] = useState("");
  const [submit, setSubmit] = useState({ Topic: "", Score: 0, OutOf: 0 });

  function handleClick() {
    // setSubmit({
    //   topic: topic,
    //   score: score,
    //   outOf: outOf,
    //   percentage: score / outOf,
    // });
    // return console.log(submit);
    //post results to db
  }

  function handleTopic(e) {
    setTopic(e.target.value);
  }

  function handleScore(e) {
    setScore(e.target.value);
  }

  function handleOutOf(e) {
    setOutOf(e.target.value);
  }

  const handleAddScores = async(e) => {
    //e.preventDefault();
    try {
      const addScore = {topic, score, outOf}
      const res = await fetch("https://quiztrackerapp.herokuapp.com/scores",{
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(addScore)
    
      })
      window.location ="/"
      
    } catch (err) {
      console.error(err.message)
      
    }
  }

  return (
    <div className="submit-form">
      <label htmlFor="topic" className="left">
        Topic:
      </label>
      <input
        className="input-boxes left"
        type="text"
        onChange={(e) => {
          handleTopic(e);
        }}
      ></input>
      <label htmlFor="Score"> Score:</label>
      <input
        className="input-boxes score-box"
        type="text"
        onChange={(e) => {
          handleScore(e);
        }}
      ></input>
      <label htmlFor="OutOf"> out of </label>
      <input
        className="input-boxes score-box"
        type="text"
        onChange={(e) => {
          handleOutOf(e);
        }}
      ></input>

      <button
        type="submit"
        className="submit-score"
        onClick={() => {
          handleClick();
          handleAddScore();
          handleAddScores()
          handleRenderScores();
        }}
      >
        Submit Score
      </button>
    </div>
  );
}

export default SubmitForm;
