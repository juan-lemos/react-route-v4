import React from "react";
import { render } from "react-dom";
import { Router, Route, BrowserRouter } from "react-router";


import { Root } from "./components/Root"
import { Home } from "./components/Home";
import { User } from "./components/User"
class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                  {/* <div> 
                     <Route path={"/"} component={Root}> 
                         <Route path={"user/:id"} component={User} />
                        <Route path={"home"} component={Home} /> 
                     </Route> 
                 </div>   */}
                <Home/>
            </BrowserRouter>
        )
    }
}

render(<App />, window.document.getElementById("app"));