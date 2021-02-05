import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Navbar from "./Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Adduser from "./Adduser";
import Edit from "./Edit";
import View from "./View";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact component={Home} path="/" />
          <Route exact component={About} path="/about" />
          <Route exact component={Contact} path="/contact" />
          <Route exact component={Adduser} path="/adduser" />
          <Route exact component={Edit} path="/edit/:id" />
          <Route exact component={View} path="/view/:id" />
        </Switch>
      </Router>
    </>
  );
}

export default App;
