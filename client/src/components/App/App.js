import "./App.css";
import NavBar from "../NavBar";
import SubmitForm from "../SubmitForm";
import Scores from "../Scores";
import Footer from "../Footer";

function App() {
  return (
    <div className="App">
      <body>
        <NavBar />
        <SubmitForm />
        <Scores />
        <Footer className="footer" />
      </body>
    </div>
  );
}

export default App;
