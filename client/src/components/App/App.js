import "./App.css";
import NavBar from "../NavBar";
import SubmitForm from "../SubmitForm";
import Scores from "../Scores";
import Footer from "../Footer";
import { useState } from "react";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [renderScores, setRenderScores] = useState(false);

  function handleAddScore() {
    setShowForm(!showForm);
  }

  function handleRenderScores() {
    setTimeout(setRenderScores, 500, !renderScores);
    console.log(renderScores);
  }

  return (
    <div className="App">
      <body>
        <NavBar handleAddScore={handleAddScore} />
        {showForm ? (
          <SubmitForm
            handleAddScore={handleAddScore}
            handleRenderScores={handleRenderScores}
          />
        ) : null}
        <Scores
          renderScores={renderScores}
          handleRenderScores={handleRenderScores}
        />
        <Footer className="footer" />
      </body>
    </div>
  );
}

export default App;
