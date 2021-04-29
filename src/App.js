
import { createBrowserHistory } from 'history';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import { getCurrentUser } from './actions/user.js';
import OAuth2RedirectHandler from './components/common/OAuth2RedirectHandler.js';
import PrivateRoute from './components/common/PrivateRoute.js';
import DashBoard from './views/DashBoard.js';

import Home from './views/Home.js';
import Login from './views/Login.js';
import ProductDetail from './views/ProductDetail.js';





const App = () => {
    
    return(
        <Router history={createBrowserHistory()}>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/product/:id" component={ProductDetail} />
                <Route exact path="/login" component={Login} />
                <Route exact path='/oauth2/redirect' component={OAuth2RedirectHandler} />
                <PrivateRoute exact path="/dashboard" component={DashBoard}/>
            </Switch>
        </Router>
    )
}

export default App;