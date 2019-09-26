import { Redirect, Route } from 'react-router-dom';
import React from 'react';

const PrivateRoute = ({ component: Component, user, ...rest }) => (
  <Route {...rest} render={(rtProps) => (
    user
      ? <Component {...rtProps} />
      : <Redirect to="/login" />
  )} />
)


export default PrivateRoute;