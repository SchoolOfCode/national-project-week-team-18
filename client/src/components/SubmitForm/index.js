import "./style.css";
import { useState, useEffect } from "react";

function SubmitForm({ handleAddScore, handleRenderScores }) {
  const [score, setScore] = useState(0);
  const [outOf, setOutOf] = useState(0);
  const [topic, setTopic] = useState("");
  const [percentage, setPercentage] = useState(0);

  async function handleClick() {
    setPercentage(score / outOf);
    handlePost();
  }
  async function handlePost() {
    console.log("post called");
    try {
      const addScore = { topic, score, outOf, percentage };
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
    <div class="submit-form">
      <label for="topic" class="left">
        Topic:
      </label>
      <input
        class="input-boxes left"
        type="text"
        onChange={(e) => {
          handleTopic(e);
        }}
      ></input>
      <label for="Score"> Score:</label>
      <input
        class="input-boxes score-box"
        type="text"
        onChange={(e) => {
          handleScore(e);
        }}
      ></input>
      <label for="OutOf"> out of </label>
      <input
        class="input-boxes score-box"
        type="text"
        onChange={(e) => {
          handleOutOf(e);
        }}
      ></input>

      <button
        type="submit"
        class="submit-score"
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
