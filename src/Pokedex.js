import React from 'react';
import Pokemon from './pokemon';
import './Pokedex.css';
function prepend(num) {
    if(String(num).length === 1)
      return "00" + String(num)
    else if(String(num).length === 2)
      return "0" + String(num)
    
    return num
}

class Pokedex extends React.Component{
    render(){
        let pokemons = []
        let power = []
        for(let i =0; i<4; i++){
            let number = Math.floor((Math.random() * 130 + Math.random() * 100)/2)
            pokemons.push(number)
            power.push(Math.floor((Math.random() * 100)))
        }
        pokemons = pokemons.map((num, index) =>(
            <Pokemon key = {index} id = {prepend(num)} power = {power[index]} />
        ))

        let totalPower = power.reduce((a, b) => a + b, 0);

        return (
            <div>
                <h1 style = {{textAlign : "center"}}>Pokedex {this.props.player}</h1>
                <h5 style = {{textAlign : "center"}}> Power: {totalPower}</h5>
                <div className="Pokedex" style= {{display : "flex", justifyContent: "space-between"}}>
                    {pokemons}
                </div>
            </div>
        )
    }
}

export default Pokedex