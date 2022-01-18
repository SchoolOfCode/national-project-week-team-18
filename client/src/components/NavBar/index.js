import logo from "../../Logo.png";
import UserIcon from "../../UserIcon.png";

function NavBar() {
  function addScore() {
    console.log("Add score button pressed");
  }

  return (
    <div>
      <img src={logo} alt="logo" />
      <button onClick={addScore}>+ Add Score</button>
      <img src={UserIcon} alt="User Icon" />
    </div>
  );
}

export default NavBar;
