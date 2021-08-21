import "./App.scss";
import Home from "./Components/Home";
import ResultPage from "./Components/ResultPage";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/" exact component={Home} />
        <Route path="/results" exact>
          <ResultPage />
        </Route>
      </div>
    </Router>
  );
}

export default App;
