import logo from "./logo.svg";
import "./App.css";
import NavBar from "../NavBar";
import SubmitForm from "../SubmitForm";
import Scores from "../Scores";
import Footer from "../Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <SubmitForm />
      <Scores />
      <Footer />
    </div>
  );
}

export default App;
