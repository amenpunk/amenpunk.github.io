import React, { Component } from "react";

export default class Container extends Component { 
    render() {
        return( 
            <div style={ { background : "#1e1e1e" } } className="container">{this.props.children}</div>
        )
    }
}
