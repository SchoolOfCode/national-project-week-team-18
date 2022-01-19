import "./App.css";
import NavBar from "../NavBar";
import SubmitForm from "../SubmitForm";
import Scores from "../Scores";
import Footer from "../Footer";
import { useState } from "react";

function App() {
  const [showForm, setShowForm] = useState(false);

  function handleAddScore() {
    setShowForm(!showForm);
  }

  return (
    <div className="App">
      <body>
        <NavBar handleAddScore={handleAddScore} />
        {showForm ? <SubmitForm handleAddScore={handleAddScore} /> : null}
        <Scores />
        <Footer className="footer" />
      </body>
    </div>
  );
}

export default App;
