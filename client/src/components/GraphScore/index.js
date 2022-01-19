import "./style.css";

function GraphScore({ date, topic, percentageScore, key }) {
  let divWidth = percentageScore * 0.5;

  function handleClick() {
    console.log("You clicked delete");
    //take in id of delete button pressed
    //send delte request to API with that id
  }

  return (
    <div class="graph-score">
      <p class="light">{date}</p>
      <p class="dark">{topic}</p>
      <div
        class="bar"
        style={{
          width: `${divWidth}vw`,
          height: "20px",
          backgroundColor: "#4C8CBD",
        }}
      ></div>
      <button class="delete-button dark" onClick={handleClick}>
        X
      </button>
    </div>
  );
}

export default GraphScore;
