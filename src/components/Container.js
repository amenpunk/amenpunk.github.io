import React, { Component } from "react";

export default class Container extends Component { 
    render() {
        return( 
            <div style={ { background : "#101010" } } className="container">{this.props.children}</div>
        )
    }
}
