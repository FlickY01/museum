import logo from './logo.svg';
import './App.css';
import React from "react";
import EventScheduler from "./components/EventScheduler"
import Gallery from "./components/Gallery";
import VisitExhibition from "./components/VisitExhibition";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useLocation,
} from "react-router-dom";
import moment from 'moment';

function App() {
  return (
      <Router>
        <div className="App">
          <header>
            <div className="logo">
              <a><Link to="/"><img src={logo}></img></Link></a>
            </div>
            <ul>
              <li>
                <Link to="/games"></Link>
              </li>
              <li>
                <Link to="/events"></Link>
              </li>
              <li>
                <Link to="/shop"></Link>
              </li>
            </ul>
          </header>

          <section>
            <Switch>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/previews">
                <Games />
              </Route>
              <Route path="/events">
                <Events />
              </Route>
              <Route path="/excursions">
                <Excursions />
              </Route>
              <Route path="*">
                <NoMatch />
              </Route>
            </Switch>

          </section>

          <footer>
            <div className="footerText">

            </div>
          </footer>
        </div>
      </Router>
  );
}

function NoMatch() {
  let location = useLocation();

  return (
      <div>
        <h3>
          No match for <code>{location.pathname}</code>
        </h3>
      </div>
  );
}

function About() {
  let location = useLocation();

  return (
      <div>
        <h2>About us</h2>
      </div>
  );
}

export default App;
