import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
    useHistory,
    useLocation
} from "react-router-dom";
import Home from './components/public/page/Home.js';
import ProductDetail from './components/public/page/ProductDetail.js';

const App = () => {
    return(
        <Router>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/product/:id" component={ProductDetail}>

                </Route>
            </Switch>
        </Router>
    )
}

export default App;