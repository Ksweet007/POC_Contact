import React from "react";
import logo from "./logo.svg";
import "./App.css";
import PersonalInformation from "./PersonalInformation";
import { Link, Route, Switch } from "react-router-dom";
import Address from "./Address";

function App() {
  return (
    /*     <div style={{ padding: "50px" }}>
      <PersonalInformation />
    </div> */
    <>
      <switch>
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
      </switch>
    </>
  );
}

export default App;
