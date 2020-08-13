import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import './App.css';
import Home from '../src/Components/homepage/Home';
import About from '../src/Components/about/About';
import Projects from '../src/Components/projects/Projects';
import Contact from '../src/Components/contact/Contact';
import Navbar from '../src/Components/layout/Navbar';

const App = () => {
  useEffect(() => {
    M.AutoInit();
  }, []);
  return (
    <Router>
      <div className="app">
        <div className="row">
          <div className="col s4">
            <Navbar />
          </div>
          <div className="col s8">
            <Route
              render={({ location }) => (
                <TransitionGroup>
                  <CSSTransition
                    key={location.key}
                    timeout={450}
                    classNames="fade"
                  >
                    <Switch location={location}>
                      <Route exact path="/" component={Home} />
                      <Route path="/about" component={About} />
                      <Route path="/projects" component={Projects} />
                      <Route path="/contact" component={Contact} />
                    </Switch>
                  </CSSTransition>
                </TransitionGroup>
              )}
            />
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
