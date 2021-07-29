import React from "react";
import {  Switch, Route, Link } from "react-router-dom";
import { Home } from './Home';

export default class Header extends React.Component{

    myFunction = () =>  {
        let x = this.myLinks.current;
        if (x.style.display === "block") {
            x.style.display = "none";
        } else {
            x.style.display = "block";
        }
    }

    componentDidMount(){
        this.myLinks.current.style.display = "none";
    }

    hiddeNav = () => this.myLinks.current.style.display = "none";

    constructor(){
        super();
        this.myLinks = React.createRef();
    }

    render() {
        return(
            <header>
                <ul className="row ga">
                    <li className="col gg d-none d-md-block"><Link to="/index" ><h2 class="d-none d-md-block">Sobre Mi</h2></Link></li>
                    <li className="col gg d-none d-md-block"><Link to="/work"  ><h2 class="d-none d-md-block">Portafolio  </h2></Link> </li>
                    <li className="col gg d-none d-md-block"><Link to="/unix"  ><h2 class="d-none d-md-block">Workflow</h2></Link></li>
                    <li className="col gg d-none d-md-block"><Link to="/more"  ><h2 class="d-none d-md-block">Otros </h2></Link></li>
                </ul>
                <div class="row letter iconff d-md-none">
                    <div class="col letter">
                        <div class="topnav">
                            <Link onClick={ this.hiddeNav } to="/home" className="active"><p id="invi">menu</p></Link>
                            <div ref={ this.myLinks }>
                                <Link onClick={this.hiddeNav} to="/index">Sobre Mi</Link>
                                <Link onClick={this.hiddeNav} to="/work">Portafolio</Link>
                                <Link onClick={this.hiddeNav} to="/unix">Workflow</Link>
                                <Link onClick={this.hiddeNav} to="/mas">Otro</Link>
                            </div>
                            <Link to="#" class="icon" onClick={ this.myFunction }>
                                <i class="fa fa-bars"></i>
                            </Link>

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
                    <Route path="/">
                        <Home/>
                    </Route>
                </Switch>
            </header>
        )
    }

}
