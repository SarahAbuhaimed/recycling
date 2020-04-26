import React from 'react';
import Login from './login'
import Navbar from './Navbar';
import './App.css';
import Home from './Home';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div > 
      <Navbar />
      <Router>

 <Link to="/Home" className="App-link ">Home</Link>
<Switch>
      <Route exact path="/home" component={Home} />
      <Route exact path="/login" component={Login} />
      </Switch>
                 </Router>
    </div>
  );
}

export default App;
