import React from "react";
import {Route, Switch} from 'react-router-dom';
import HomePage from "../pages/HomePage";
import CheckOutPage from "../pages/CheckOutPage";

const Navigation = (props) => {
    return (
        <Switch>
            <Route exact
                   path="/"
                   component={props => <HomePage {...props} />}
            >
            </Route>
            <Route exact
                   path="/checkout-page"
                   component={props => <CheckOutPage {...props} />}
            >
            </Route>
        </Switch>
    );
}

export default Navigation;
