import React from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import Home from './Home';
import CompanyList from './CompanyList';
// import Company from './Company';
import Jobs from './Jobs';
import LoginContainer from './LoginContainer';
import Profile from './Profile';


class Routes extends React.PureComponent {

  render() {
    return (
      <Switch>
        <Route exact path="/" render={() => <Home />} />
        <Route exact path="/companies" render={rtProps => <CompanyList />} />
        {/* <Route exact path="/companies/:company" render={rtProps => <Company />} /> */}
        <Route exact path="/jobs" render={rtProps => <Jobs />} />
        <Route exact path="/login" render={rtProps => <LoginContainer />} />
        <Route exact path="/profile" render={rtProps => <Profile />} />
        <Redirect to="/" />
      </Switch>
    )
  }
}

export default Routes;