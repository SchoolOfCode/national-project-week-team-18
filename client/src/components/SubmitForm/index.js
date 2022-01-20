import "./style.css";
import { useState } from "react";

function SubmitForm({ handleAddScore, handleRenderScores }) {
  const [score, setScore] = useState(0);
  const [outOf, setOutOf] = useState(0);
  const [topic, setTopic] = useState("");

  async function handleClick() {
    try {
      const addScore = { topic, score, outOf };
      const res = await fetch(`${process.env.REACT_APP_API_URL}/scores`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(addScore),
      });
      if ((res.payload = null)) {
        alert(
          "An error was found. Please make sure that the topic contains between 1-20 characters and the score is a number."
        );
      }

      window.location = "/";
    } catch (err) {
      console.error(err.message);
      return alert(
        "An error was found. Please make sure that the topic contains between 1-20 characters and the score is a number."
      );
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
      <button className="cancel-submit" onClick={handleAddScore}>
        Cancel
      </button>
    </div>
  );
}

export default SubmitForm;
