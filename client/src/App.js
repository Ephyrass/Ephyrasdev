import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Contact from "./components/contact/Contact";
import Landing from "./components/layout/Landing";
import SectionAbout from "./components/sections/SectionAbout";
import Portfolio from "./components/portfolio/Portfolio";
import About from "./components/about/About";
function App() {
  return (
    <div className="App">
      <Router>
        <Fragment>
          <Navbar />

          <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/intro" component={SectionAbout} />
            <Route exact path="/about" component={About} />
            <Route exact path="/portfolio" component={Portfolio} />
          </Switch>
        </Fragment>
      </Router>
    </div>
  );
}

export default App;
