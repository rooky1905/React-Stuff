import React, { Component } from 'react'
import './Color.css'

class Color extends Component {
    constructor(props){
        super(props);
        this.state = {color : this.randomColor()};
    }
    handleClick = () =>{
        let newC = this.randomColor()
        this.setState((st) => (
            {
                color : newC
            }
        ));
    }
    randomColor = () =>{
        return '#' + Math.floor(Math.random()*16777215).toString(16);
    }
    render() {
        return (
            <div onClick={this.handleClick} className="Color" style={{backgroundColor : this.state.color}}></div>
        )
    }
}

export default Color;
