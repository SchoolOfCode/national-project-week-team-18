import "./style.css";

function GraphScore({ date, topic, percentageScore, id, handleRenderScores }) {
  let divWidth = percentageScore * 0.55;

  async function deleteItem() {
    console.log("id", id);
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}/scores/${id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "",
        },
      }
    );

    const data = await response.json();
    return data;
  }
  async function handleClick() {
    console.log("You clicked delete");
    const res = await deleteItem();
    console.log("response", res);
  }

  let shortenedDate = date.split("").slice(0, 10);

  return (
    <div className="graph-score">
      <p className="light">{shortenedDate}</p>
      <p className="dark">{topic}</p>
      <div
        className="bar"
        style={{
          width: `${divWidth}vw`,
          height: "20px",
          backgroundColor:
            percentageScore >= 75
              ? "#4C8CBD"
              : percentageScore >= 50
              ? "#2B2D42"
              : "#EF233C",
        }}
      ></div>
      <button
        className="delete-button dark"
        onClick={() => {
          handleRenderScores();
          handleClick();
        }}
      >
        Delete
      </button>
    </div>
  );
}

export default GraphScore;
