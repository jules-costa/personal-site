import React from 'react';
import { Route, HashRouter } from 'react-router-dom';
import About from './about';
import Work from './work';
import Places from './places';
import Interests from './interests';
import Projects from './projects';
import Links from './links';

const App = () => (
  <section className="main-wrapper">
    <Route path="/" component={Links} />
    <Route exact path="/" component={About} />
    <Route path="/about" component={About} />
    <Route path="/work" component={Work} />
    <Route path="/places" component={Places} />
    <Route path="/interests" component={Interests} />
    <Route path="/projects" component={Projects} />
  </section>
);

export default App;
