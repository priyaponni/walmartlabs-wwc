import React from "react";
import { Router, Route } from "react-router";
import Home from "./components/home";
import User from "./components/user";

export const routes = (
    <Router>
        <Route path="/" component={Home} />
        <Route path="/user" component={User}/>
    </Router>
);
