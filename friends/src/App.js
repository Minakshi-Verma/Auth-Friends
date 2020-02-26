import React from 'react';
import{BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'
import {PrivateRoute} from './components/PrivateRoute';
import Login from './components/Login'
import Friends from './components/Friends'
import {Form} from './components/Form';
import './App.css';

function App() {
  return (
    <Router>
    <div className="App">
      <h1>My friends!!</h1>
      <ul >
        <li>
          <Link to = "/login">Login</Link>
        </li>
        <li>
          <Link to = "/protected">Protected Page</Link>
        </li>
      </ul>
      <Switch>
        <Route exact path = '/'component = {Login}/>
        <PrivateRoute path = '/protected' component ={Friends} />
        <PrivateRoute path = '/protected' component ={Form} />         
        <Route component ={Login} />

      </Switch>

    </div>
    </Router>
  );
}

export default App;
