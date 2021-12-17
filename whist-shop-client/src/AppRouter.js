import 'bootstrap/dist/css/bootstrap.min.css';
import {HashRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/nav-bar/nav-bar";
import React from "react";
import Home from "./components/home-page/home-page";
import StatisticsPage from "./components/statistics-page/statistics-page";
import AdminPage from "./components/admin-page/admin-page";
import {Redirect} from "react-router";

function AppRouter() {
    return (
        <Router >
            <NavBar/>
            <Home/>
            <Switch>
                <Route exact path="/home" component={Home}/>
                <Route exact path="/statistics" component={StatisticsPage}/>
                <Route exact path="/admin" component={AdminPage}/>
                <Redirect to="/home"/>
            </Switch>
        </Router>
    );
}

export default AppRouter;