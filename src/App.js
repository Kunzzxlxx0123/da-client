
import { Dashboard } from '@material-ui/icons';
import { createBrowserHistory } from 'history';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import { getCurrentUser } from './actions/user.js';
import PrivateRoute from './components/common/PrivateRoute.js';

import Home from './views/Home.js';
import Login from './views/Login.js';
import ProductDetail from './views/ProductDetail.js';





const App = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getCurrentUser());
    }, []);
    
    return(
        <Router history={createBrowserHistory()}>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/product/:id" component={ProductDetail} />
                <Route exact path="/login" history={createBrowserHistory()} component={Login} />
                <PrivateRoute path="/dashboard" component={Dashboard}/>
            </Switch>
        </Router>
    )
}

export default App;