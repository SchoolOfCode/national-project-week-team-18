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

  return (
    <div class='graph-score'>
      <p class='light'>{date}</p>
      <p class='dark'>{topic}</p>
      <div
        class='bar light'
        style={{
          width: `${divWidth}vw`,
          height: '20px',
          backgroundColor: {},
        }}
      ></div>
      <button class='delete-button dark' onClick={handleClick}>
        X
      </button>
    </div>
  )
}

export default GraphScore
