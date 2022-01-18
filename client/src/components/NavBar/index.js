function NavBar() {
  function addScore() {
    console.log("Add score button pressed");
  }
  return (
    <div>
      <button onClick={addScore}>+Add Score</button>
    </div>
  );
}

export default NavBar;
