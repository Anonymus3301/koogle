import "./App.scss";
import Home from "./Components/Home";
import ResultPage from "./Components/ResultPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/results" component={ResultPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
