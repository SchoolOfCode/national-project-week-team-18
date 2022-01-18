import "./style.css";
import logo from "../../Logo.png";
import UserIcon from "../../UserIcon.png";

function NavBar() {
  function addScore() {
    console.log("Add score button pressed");
  }
  return (
    <div className="navBar">
      <img src={logo} alt="logo" class="logo" />
      <button onClick={addScore} class="add-score-button right">
        +Add Score
      </button>
      <img src={UserIcon} alt="User Icon" class="usericon right" />
    </div>
  );
}

export default NavBar;
