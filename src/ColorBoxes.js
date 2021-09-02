import React, { Component } from 'react'
import Color from './Color';
import './ColorBoxes.css';

class ColorBoxes extends Component{
    render(){
        let colors = Array(this.props.num).fill(<Color />);
        return(
            <div className="ColorBoxes">
                {colors}
            </div>
        )
    }
}
export default ColorBoxes;