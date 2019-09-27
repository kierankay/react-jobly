import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.PureComponent {

  render() {
    let loggedIn = localStorage.getItem('token') ? true : false;
    return (
      loggedIn 
        ? <div className="container my-4 text-center">
          <h2>Jobly</h2>
          <p>All the jobs in one, convenient place.</p>
          <h3>Welcome Back!</h3>
        </div>
        : <div className="container my-4 text-center">
          <h2>Jobly</h2>
          <p>All the jobs in one, convenient place.</p>
          <Link className="btn btn-primary" to="/login">Login</Link>
        </div>

    );
  }
}

export default Home;