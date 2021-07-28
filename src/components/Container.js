import React, { Component } from "react";

export default class Container extends Component { 
    constructor(props){
        super(props)
        console.log(props)
    }
    render() {
        return( 
            <div style={ { background : "#1e1e1e" } } className="container">{this.props.children}</div>
        )
    }
}
