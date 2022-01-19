import './style.css'

function GraphScore({ date, topic, percentageScore, key }) {

  let divWidth = percentageScore * 0.5

  async function deleteItem() {
    console.log('id', key)
    const response = await fetch(
      `https://quiztrackerapp.herokuapp.com/scores/${key}`,
      {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '',
        },
      }
    )

    const data = await response.json()
    return data
  }
  async function handleClick() {
    console.log('You clicked delete')
    const res = await deleteItem()
    console.log('response', res)
  }

  let shortenedDate = date.split("").slice(0, 10);

  return (
    <div class="graph-score">
      <p class="light">{shortenedDate}</p>
      <p class="dark">{topic}</p>
      <div
        class="bar"
        style={{
          width: `${divWidth}vw`,
          height: "20px",
          backgroundColor: "#4C8CBD",
        }}
      ></div>
      <button class='delete-button dark' onClick={handleClick}>
        X
      </button>
    </div>
  )
}

export default GraphScore
