import React from 'react';
import ReactDOM from 'react-dom';

const Home = () => {
  return (
    <div>
      <h1>Home Page</h1>
    </div>
  );
};

const Movie = () => {
  return (
    <div>
      <h1>Movies Page</h1>
    </div>
  );
};

const Director = () => {
  return (
    <div>
      <h1>Directors Page</h1>
    </div>
  );
};

const Actor = () => {
  return (
    <div>
      <h1>Actors Page</h1>
    </div>
  );
};

ReactDOM.render((
  
  <Router>
    <div>
      <Navbar/>
      <Route path="/" component={Home} />
      <Route exact path="/movies" component={Movie} />
      <Route exact path="/directors" component={Director} />
      <Route exact path="/actors" component={Actor} />
    </div>
  </Router>),
  document.getElementById('root')
);
