import "./App.css";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Auth } from "./ui/Auth";
import { Front } from "./ui/Front";
import { Header } from "./ui/Header";
import { User } from "./ui/User";

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Switch>
          <Route path="/auth" component={Auth} />
          <Route path="/user" component={User} />
          <Route path="/" component={Front} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
