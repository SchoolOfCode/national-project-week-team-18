import "./style.css";
import { useState } from "react";

function SubmitForm({ handleAddScore, handleRenderScores }) {
  const [score, setScore] = useState(0);
  const [outOf, setOutOf] = useState(0);
  const [topic, setTopic] = useState("");

  async function handleClick() {
    console.log("post called");
    try {
      const addScore = { topic, score, outOf };
      const res = await fetch("https://quiztrackerapp.herokuapp.com/scores", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(addScore),
      });

      window.location = "/";
    } catch (err) {
      console.error(err.message);
    }
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
          handleRenderScores();
        }}
      >
        Submit Score
      </button>
    </div>
  );
}

export default SubmitForm;
