import logo from './logo.png';
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
            <nav>
              <div className="logo">
                <a><Link to="/"><img src={logo}></img></Link></a>
              </div>
              <ul>
                <li>
                  <Link to="/previews">Картины</Link>
                </li>
                <li>
                  <Link to="/events">События</Link>
                </li>
                <li>
                  <Link to="/excursions">Билеты</Link>
                </li>
              </ul>
            </nav>
          </header>

          <section>
            <Switch>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/previews">
                <EventScheduler />
              </Route>
              <Route path="/events">
                <Gallery />
              </Route>
              <Route path="/excursions">
                <VisitExhibition />
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
        <div class="wrapper">
          <div class="container">
            <div class="content">
                <h1 class="heading">Музей ART PROVENANCE</h1>
                <p class="text">Это самый удобный сайт самого лучшего музея. Здесь самый красивые, красочные и глубокие картины. Недорогие билеты и лучшие экскурсоводы. А также мы любим проводить различные события, аукционы и прочее. Заглядывай к нам! У нас всё самое интересное!</p>
                <Link to="/excursions">
                  <div class="btn">
                    <p class="button">Приобрести билеты</p>
                  </div>
                </Link>
              </div>
          </div>
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