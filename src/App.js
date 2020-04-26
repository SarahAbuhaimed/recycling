import React from 'react';
import Navbar from './Navbar';
import './App.css';
import Home from './Home';
import Dashboard from './Dashboard';
import Chart from './Chart';
import Complains from './Complains';
import Enquiry from './Enquiry'
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
      {/* <Router>

 
<Switch>
<Route exact path="/" component={App} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/dashboard" component={Dashboard} />
      <Route exact path="/chart" component={Chart} />
      <Route exact path="/complains" component={Complains} />
      <Route exact path="/enquiry" component={Enquiry} />
      </Switch>
                 </Router> */}
    </div>
  );
}

export default App;
