import React from 'react';
import ReactDOM from 'react-dom';

import Home from './Home'
import About from './About'
import Login from './Login'
import Navbar from './Navbar' 

import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';

/* Add basic styling for NavLinks */
const link = {
  width: '100px',
  padding: '12px',
  margin: '0 6px 6px',
  background: 'blue',
  textDecoration: 'none',
  color: 'white',
}

/* add the navbar component */
// const Navbar = () =>
//   <div>
//     <NavLink 
//       to="/" 
//       exact style={link} 
//       activeStyle={{
//         background: 'darkblue'
//       }}
//     >Home</NavLink>
//     <NavLink 
//       to="/about" 
//       exact 
//       style={link} 
//       activeStyle={{
//         background: 'darkblue'
//       }}
//     >About</NavLink>
//     <NavLink
//       to="/login"
//       exact
//       style={link}
//       activeStyle={{
//         background: 'darkblue'
//       }}
//       >Login</NavLink>

//     <NavLink
//       to="/signup"
//       exact
//       style={link}
//       activeStyle={{
//         background: 'darkblue'
//       }}
//       >Signup</NavLink>
      
//       <NavLink
//       to="/messages"
//       exact
//       style={link}
//       activeStyle={{
//         background: 'darkblue'
//       }}
//       >Messages</NavLink>
//   </div>;

// const Home = () => <h1>Home!</h1>
// const Home = () => {
//   return (
//     <div>
//       <h1>Home!</h1>
//     </div>
//   );
// };

// const About = () => <h1>This is my about component!</h1>
// const About = () => {
//   return (
//     <div>
//       <h1>This is my about component!</h1>
//     </div>
//   )
// }

// const Login = () => 
  // return (
    // <div>
    //   <form>
    //     <div>
    //       <input type="text" name="username" placeholder="Username" />
    //       <label htmlFor="username">Username</label>
    //     </div>
    //     <div>
    //       <input type="password" name="password" placeholder="Password" />
    //       <label htmlFor="password">Password</label>
    //     </div>
    //     <input type="submit" value="login" />
    //   </form>
    // </div>
  // )

  // <form>
  //   <h1>Login</h1>
  //   <div>
  //     <input type="text" name="username" placeholder="Username" />
  //     <label htmlFor="username">Username</label>
  //   </div>
  //   <div>
  //     <input type="password" name="password" placeholder="Password" />
  //     <label htmlFor="password">Password</label>
  //   </div>
  //   <input type="submit" value="Login" />
  // </form>;

const Signup = () => 
  <form>
    <h1>Sign Up</h1>
  <hr></hr>
  <div>
    <input type="text" name="username" placeholder="Username" />
  </div>
  <br></br>
  <div>
    <input type="password" name="password" placeholder="Password" />
  </div>
  <br></br>
  <input type="submit" value="Sign Up" />
  <br></br>
  <hr></hr>
  </form>;

const Messages = () => <h1>The messages is a message that the message is Krang.</h1>

ReactDOM.render((
  // <Home />,
  <Router>
    <div>
      <Navbar />
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/login" component={Login} />
      {/* <Route exact path="/signup" component={Signup} />
      <Route exact path="/messages" component={Messages} /> */}

      {/* <Route path="/" render={() => <h1>Home!</h1>} />
      <Route exact path="/about" component={About} />
      <Route exact path="/login" component={Login} /> */}
    </div>
  </Router>),
  document.getElementById('root')
);
