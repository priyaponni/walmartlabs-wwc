import React from "react";
import { Router, Route } from "react-router";
import Home from "./components/home";
import User from "./components/user";
import Dealer from "./components/dealer";

export const routes = (
    <Router>
        <Route path="/" component={Home} />
        <Route path="/user" component={User}/>
        <Route path="/dealer" component={Dealer}/>
    </Router>
);
