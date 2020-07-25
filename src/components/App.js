import React from "react";

import "./App.css";

import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import GuardedRoute from "./guardedRoute/GuardedRoute";
import Auth from "./auth/Auth";
import Home from "./home/Home";
import Forbiden from "./forbieden/Forbiden";

export default function App() {
    const acess = JSON.parse(localStorage.getItem("authenticated"));

    return (
        <Router>
            <Switch>
                <Route path="/" component={Auth} exact />
                <GuardedRoute path="/home" component={Home} auth={acess} />
                <Route path="*" component={Forbiden} />
            </Switch>
        </Router>
    );
}
