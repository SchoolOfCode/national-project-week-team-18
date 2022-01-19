import "./style.css";
import logo from "../../Logo.png";
import UserIcon from "../../UserIcon.png";

function NavBar({ handleAddScore }) {
  return (
    <div className="navBar">
      <img src={logo} alt="logo" className="logo" />
      <button onClick={handleAddScore} className="add-score-button right">
        Add Score
      </button>
      <img src={UserIcon} alt="User Icon" className="usericon right" />
    </div>
  );
}

export default NavBar;
