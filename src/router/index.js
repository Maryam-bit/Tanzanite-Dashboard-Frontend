import React from "react"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Signup from '../pages/Signup';
import Abc from '../pages/Abc';

export default function AppRouter () {
    return (
        <Router>
            <Switch>
                <Route path="/" component={Signup} exact />
                <Route path="/abc" component={Abc} />
            </Switch>
        </Router>
    )
}