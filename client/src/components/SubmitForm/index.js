import "./style.css";
import { useState } from "react";

function SubmitForm() {
  const [score, setScore] = useState(0);
  const [outOf, setOutOf] = useState(0);
  const [topic, setTopic] = useState("");
  const [submit, setSubmit] = useState({ Topic: "", Score: 0, OutOf: 0 });

  function handleClick() {
    setSubmit({
      topic: topic,
      score: score,
      outOf: outOf,
      percentage: score / outOf,
    });
    return console.log(submit);
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

      <button type="submit" class="submit-score" onClick={handleClick}>
        Submit Score
      </button>
    </div>
  );
}

export default SubmitForm;
