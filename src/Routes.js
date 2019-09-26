import React from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import Home from './Home';
import CompanyList from './CompanyList';
import CompanyDetails from './CompanyDetails';
import JobList from './JobList';
import LoginContainer from './LoginContainer';
import Profile from './Profile';
import NavBar from './NavBar';


class Routes extends React.PureComponent {

  render() {
    return (
      <div>
        <Route path="/" render={rtProps => <NavBar {...rtProps} />} />
        <Switch>
          <div className="container my-4">
            <Route exact path="/" render={() => <Home />} />
            <Route exact path="/companies" render={rtProps => <CompanyList />} />
            <Route exact path="/companies/:company" render={rtProps => <CompanyDetails company={rtProps.match.params.company} />} />
            <Route exact path="/jobs" render={rtProps => <JobList />} />
            <Route exact path="/login" render={rtProps => <LoginContainer {...rtProps} />} />
            <Route exact path="/profile" render={rtProps => <Profile />} />
            <Redirect to="/" />
          </div>
        </Switch>
      </div>
    );
  }
}

export default Routes;