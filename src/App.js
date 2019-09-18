import React from "react";
import "./App.css";
import PersonalInformation from "./PersonalInformation";
import { Link, Route, Switch } from "react-router-dom";

function App() {
  return (
    <>
      <Switch>
        <Route path="/" exact component={PersonalInformation} />
        <Route
          path="/personalinformation"
          exact
          component={PersonalInformation}
        />
        <Route
          path="/personalinformation/:personId"
          exact
          component={PersonalInformation}
        />
      </Switch>
    </>
  );
}

export default App;
