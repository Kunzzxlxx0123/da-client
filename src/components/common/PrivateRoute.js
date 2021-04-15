import { CircularProgress } from '@material-ui/core';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    Route,
    Redirect
  } from "react-router-dom";
import Header from '../Header/Header';
  
  
const PrivateRoute = ({ component: Component, ...rest }) => {

  const dispatch = useDispatch();
  const user = useSelector(state => state.user);
  console.log(user);

  if(user != null){
    return (
      <Route
        {...rest}
        render={(props) =>
          user.authenticated ? (
            <Component {...rest} {...props} />
          ) : (
            <Redirect
              to={{
                pathname: '/login',
                state: { from: props.location }
              }}
            />
          )
        }
      />
    )
  } else {
    return (
      <Route {...rest} 
        render={() => {
          <CircularProgress />
        }}
      />
    )
  }
  
};
  
export default PrivateRoute;