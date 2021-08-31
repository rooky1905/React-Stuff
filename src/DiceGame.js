import React, { Component } from 'react'
import Dice from "./Dice";
import './DiceGame.css'
import { Button } from 'react-bootstrap';

const faces = ['one', 'two', 'three', 'four', 'five', 'six'];
const genRan = () => {
    return Math.floor(Math.random() * 6);
}

class DiceGame extends Component{
    constructor(props){
        super(props);
        this.state = {die1 : "one", die2: "one", disabled : false, roll : ''};
    }

    genNew = () => {
        this.setState({disabled : true, roll : 'shake'});
        setTimeout(() => {
            this.setState({die1 : faces[genRan()], die2 : faces[genRan()], disabled : false, roll : ''});
        }, 1000);
    }
    
    render(){
        return(
            <div>
                <div className="DiceGame">
                    <Dice face = {this.state.die1} roll = {this.state.roll}/>
                    <Dice face = {this.state.die2} roll = {this.state.roll}/>
                </div>
                <Button disabled={this.state.disabled} className = "btn btn-success" onClick = {this.genNew}> {this.state.disabled ? "Rolling..." : "Roll Dice!"} </Button>
            </div>
        )
    }
}

export default DiceGame