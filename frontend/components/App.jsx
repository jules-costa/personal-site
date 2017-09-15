import React from 'react';
import { Route, HashRouter } from 'react-router-dom';
import About from './about';
import Work from './work';
import Places from './places';
import Interests from './interests';
import Reading from './reading';
import Links from './links';

const App = () => (
  <section>
    <Route path="/" component={Links} />
  </section>
);

export default App;

{/* <Route path="/about" component={About} />
<Route path="/work" component={Work} />
<Route path="/places" component={Places} />
<Route path="/interests" component={Interests} />
<Route path="/reading" component={Reading} /> */}
