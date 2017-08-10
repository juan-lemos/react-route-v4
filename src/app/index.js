import React from "react";
import { render } from "react-dom";
import { Router, Route, BrowserRouter, Switch, Redirect } from "react-router-dom";





import { Root } from "./components/Root"
import { Home } from "./components/Home";
import { User } from "./components/User"
const App = () => (
    <Root>
        <Switch>
            <Route exact path={"/"} render={() => (
                <Redirect to="/home" />
            )} />
            <Route path={"/home"} component={Home} />
            <Route path={"/user/:id"} component={User} />
        </Switch>
    </Root >
)



render((
    <BrowserRouter>
        <App />
    </BrowserRouter>
), window.document.getElementById("app"));