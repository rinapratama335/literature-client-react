import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import LandingPage from "./pages/landingPage/LandingPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={LandingPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
