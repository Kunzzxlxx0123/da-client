import { CircularProgress } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    Route,
    Redirect
  } from "react-router-dom";
import { getCurrentUser } from '../../actions/user';
import { ACCESS_TOKEN, SECRET } from '../../constants/key';
import Header from '../Header/Header';
const jwt = require('jsonwebtoken');
  
const PrivateRoute = ({ component: Component, ...rest }) => {

  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const [user, setUser] = useState(null);

  useEffect( async() => {
    try {
      const token = localStorage.getItem(ACCESS_TOKEN);
      const currentUser = await jwt.verify(token, new Buffer(SECRET, "base64"));
      setUser({authenticated: true, user: currentUser});
    } catch (error) {

      setUser({authenticated: false, user: null});
      console.log(error)
    }
  },[])

  //const user = useSelector(state => state.user);
  console.log(user);
  if(user != null){
    return (
      <Route
        {...rest}
        render={(props) =>
          user.authenticated ? (
            <Component {...rest} {...props} />
          ) : (
            //<h6>{JSON.stringify(props)}</h6>
            <Redirect
              to={{
                pathname: '/login',
                state: rest.path
              }}
            />
          )
        }
      />
    )
  } else {
    return (
          <h1>Loading</h1>
    )
  }
};
  
export default PrivateRoute;