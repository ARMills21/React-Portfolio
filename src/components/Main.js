import React from "react";
import { Switch, Route } from "react-router-dom";

import LandingPage from "./LandingPage";
import Contact from "./Contact";
import Projects from "./Projects";
import About from "./About";

const Main = () => (
  <Switch>
    <Route exact path="/" component={LandingPage}></Route>
    <Route path="/contact" component={Contact}></Route>
    <Route path="/projects" component={Projects}></Route>
    <Route path="/about" component={About}></Route>
  </Switch>
);

export default Main;