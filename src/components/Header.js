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

    hiddeNav = () => {
        this.myLinks.current.style.display = "none";
    }

    constructor(){
        super();
        this.myLinks = React.createRef();
    }

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
                            <Link onClick={ this.hiddeNav } to="/home" className="active"><p id="invi">menu</p></Link>
                            <div ref={ this.myLinks }>
                                <Link onClick={this.hiddeNav} to="/index">Sobre Mi</Link>
                                <Link onClick={this.hiddeNav} to="/work">Portafolio</Link>
                                <Link onClick={this.hiddeNav} to="/unix">Workflow</Link>
                                <Link onClick={this.hiddeNav} to="/mas">Otros</Link>
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
                </Switch>
            </header>
        )
    }

}
