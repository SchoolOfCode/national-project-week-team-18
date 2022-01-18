import "./style.css";

function GraphScore({ date, topic, percentageScore }) {
  let divWidth = percentageScore * 0.5;

  function handleClick() {
    console.log("You clicked delete");
  }

  return (
    <div class="graph-score">
      <p class="light">{date}</p>
      <p class="dark">{topic}</p>
      <div
        class="bar light"
        style={{
          width: `${divWidth}vw`,
          height: "20px",
          backgroundColor: {},
        }}
      ></div>
      <button class="delete-button dark" onClick={handleClick}>
        X
      </button>
    </div>
  );
}

export default GraphScore;
