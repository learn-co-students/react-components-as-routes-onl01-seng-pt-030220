import React from 'react';
import ReactDOM from 'react-dom';
import About from './about';
import Home from './home';
import Login from './login';
import Navbar from './navbar';
import { BrowserRouter as Router, Route} from 'react-router-dom';


ReactDOM.render((
  <Router>
    <div>
      <Navbar /> <br/>
      <Route exact path = "/" component={Home} />
      <Route exact path= "/about" component={About} />
      <Route exact path= "/login" component={Login} />
    </div>
  </Router>),
  document.getElementById('root')
);
