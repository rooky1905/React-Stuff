import React, { Component } from 'react'
import './Dice.css';

class Dice extends Component{
    render(){
        let {face, roll} = this.props;
        let nam = `fas fa-dice-${face} fa-9x`;
        let diceClass = `Dice ${roll}`
        return(
            <div className = {diceClass}> 
                <i className={nam}> </i>
            </div>
        )
    }
}

export default Dice