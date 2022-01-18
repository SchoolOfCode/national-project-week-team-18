import "./style.css";

function GraphScore({ date, topic, percentageScore }) {
  let divWidth = percentageScore * 0.5;

  return (
    <div>
      <p>{date}</p>
      <p>{topic}</p>
      <div
        style={{
          width: `${divWidth}vw`,
          height: "20px",
          backgroundColor: "blue",
        }}
      ></div>
    </div>
  );
}

export default GraphScore;
