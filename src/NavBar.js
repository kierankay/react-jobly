import React from 'react';
import { NavLink } from "react-router-dom";


class NavBar extends React.PureComponent {
  render() {
    let loggedIn = localStorage.token ? true : false;
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <NavLink className="navbar-brand" to="/">Jobly</NavLink>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
        {loggedIn ?
          <ul className="navbar-nav">
            <li className="nav-item active">
              <NavLink className="nav-link" to="/companies">Companies</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/jobs">Jobs</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/profile">Profile</NavLink>
            </li>
            <li className="nav-item">
             <NavLink className="nav-link" to="/">Logout</NavLink>
          </li> 
          </ul> : <ul className="navbar-nav"><li className="nav-item"><NavLink className="nav-link" to="/login">Login</NavLink></li></ul>}
        </div>
      </nav>
    );
  }
}

export default NavBar;