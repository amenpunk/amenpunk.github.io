import React from "react";
import {  Switch, Route, Link } from "react-router-dom";
import { Home } from './Home';

export default class Header extends React.Component{
    render() {
        return(
            <header>
                <ul className="row ga">
                    <li className="col gg"><Link to="/index"><h1 class="d-none d-md-block">Sobre Mi</h1></Link></li>
                    <li className="col gg"><Link to="/work"><h1 class="d-none d-md-block">Portafolio  </h1></Link> </li>
                    <li className="col gg"><Link to="/unix"><h1 class="d-none d-md-block">Workflow</h1></Link></li>
                    <li className="col gg"><Link to="/more"><h1 class="d-none d-md-block">Otros </h1></Link></li>
                </ul>
                <div class="row letter iconff d-md-none">
                    <div class="col letter">
                        <div class="topnav">
                            <a href="#home" class="active"><p id="invi">menu</p></a>
                            <div id="myLinks">
                                <a href="/index">Sobre Mi</a>
                                <a href="/work.html">Portafolio</a>
                                <a href="/unix.html">Workflow</a>
                                <a href="/mas.html">Otros</a>
                            </div>
                            <a href="javascript:void(0);" class="icon" onclick="myFunction()">
                                <i class="fa fa-bars"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <Switch>
                    <Route path="/index">
                        <Home/>
                    </Route>
                    <Route path="/work"> mi trabajo</Route>
                    <Route path="/unix"> linux master race</Route>
                    <Route path="/more"> more</Route>
                </Switch>
            </header>
        )
    }
}
