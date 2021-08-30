import React from 'react';
import {Image} from 'react-bootstrap';
import './pokemon.css'
// const url = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${id}.png`

class Pokemon extends React.Component{
    render(){
        const {id, power} = this.props
        const url = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${id}.png`;

        return(
            <div className="card">
                <Image src={url} fluid/>
                <p style = {{textAlign : "center"}}>My power is : {power}</p>
            </div>   
        )
    }

}

export default Pokemon