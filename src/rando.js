import React, { Component } from 'react'


class Rando extends Component{
    constructor(props){
        super(props);
        this.state = {num : 1};
    }
    genNew = () => {
        let rand = Math.floor(Math.random() * 10);
        this.setState({num : rand});
        
    }
    render(){
        let flag= 0;
        if(this.state.num === 7)
            flag = 1;
        return(
            <div>
                <h1> Number is {this.state.num}</h1>
                {flag === 0 ? <button onClick = {this.genNew}> Click me! </button> : <h3>You win!</h3>}
            </div>
        )
    }
}

export default Rando