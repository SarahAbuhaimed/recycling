
import React, { Component } from 'react'
import SearchIcon from '@material-ui/icons/Search';
import EcoIcon from '@material-ui/icons/Eco';
import green from '@material-ui/core/colors/green';
import Dashboard from './Dashboard';
import Chart from './Chart';
import Complains from './Complains';
import Enquiry from './Enquiry'
import Login from './login'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import login from './login';
export default class Navbar extends Component {
    render() {
        return (
            <Router>
            <div>
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <Link class="navbar-brand"  to="/"><EcoIcon fontSize="large"  style={{ color: green[500] }}/></Link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  
  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
    <li class="nav-item active">
        <Link class="nav-link" to="/Home">Home <span class="sr-only">(current)</span></Link>
      </li>
      <li class="nav-item active">
        <Link class="nav-link" to="/dashboard">Dashboard <span class="sr-only">(current)</span></Link>
      </li>
      <li class="nav-item active">
        <Link class="nav-link" to="/Chart">Chart <span class="sr-only">(current)</span></Link>
      </li>
      <li class="nav-item active">
        <Link class="nav-link" to="/Complains">Complains<span class="sr-only">(current)</span></Link>
      </li>
      <li class="nav-item active">
        <Link class="nav-link" to="/Enquiry">Enquiry<span class="sr-only">(current)</span></Link>
      </li>
    </ul>
    <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button class="btn my-2 my-sm-0" type="submit"><SearchIcon /></button>
    </form>
</div>

</nav>
<Switch>

          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/Chart">
            <Chart />
          </Route>
          <Route path="/Complains">
            <Complains />
          </Route>
          <Route path="/Enquiry">
            <Enquiry />
          </Route>
        </Switch>
            </div>
            </Router>
        )
    }
}
