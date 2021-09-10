import "./App.css";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Front } from "./ui/Front";
import { Header } from "./ui/Header";

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Switch>
          <Route path="/" component={Front} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
