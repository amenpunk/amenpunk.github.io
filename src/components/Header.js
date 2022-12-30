import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import { Home } from './Home';
import { Portafolio } from './Portafolio';
import { Unix } from './Unix';

export default class Header extends React.Component {

  myFunction = () => {
    let x = this.myLinks.current;
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

  componentDidMount() {
    this.myLinks.current.style.display = "none";
  }

  hiddeNav = () => this.myLinks.current.style.display = "none";

  constructor() {
    super();
    this.myLinks = React.createRef();
  }

  render() {
    return (
      <header>
        <div className="row letter iconff d-md-none">
          <div className="col letter">
            <div className="topnav">
              <Link onClick={this.hiddeNav} to="/home" className="active"><p id="invi">menu</p></Link>
              <div ref={this.myLinks}>
                <Link onClick={this.hiddeNav} to="/index">Sobre Mi</Link>
                <Link onClick={this.hiddeNav} to="/work">Portafolio</Link>
                <Link onClick={this.hiddeNav} to="/unix">Workflow</Link>
                <Link onClick={this.hiddeNav} to="/mas">Otros</Link>
              </div>
              <Link to="#" className="icon" onClick={this.myFunction}>
                <i className="fa fa-bars"></i>
              </Link>

            </div>
          </div>
        </div>
        <Switch>
          <Route path="/index">
            <Home />
          </Route>
          <Route path="/work">
            <Portafolio />
          </Route>
          <Route path="/unix">
            <Unix />
          </Route>
          <Route path="/more"> more</Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </header>
    )
  }

}
