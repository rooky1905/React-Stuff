import React, {Component} from "react";
import Cell from "./Cell";
import './Board.css';

class Board extends Component {

  constructor(props) {
    super(props);
    this.state = {board: this.createBoard(), hasWon: false}
  }


  createBoard = () => {
    let board = [];
    for(let i=0; i < this.props.nrows; i++){
      let temp = [];
      for(let j =0; j < this.props.ncols; j++){
        Math.random() > 0.75 ? temp.push(true) : temp.push(false);
      }
      board.push(temp);
    }
    return board
  }

  flipCellsAround = (coord) => {
    let {ncols, nrows} = this.props;
    let newBoard = [...this.state.board];
    let [y, x] = coord.split("-").map(Number);


    function flipCell(y, x) {
      if (x >= 0 && x < ncols && y >= 0 && y < nrows) {
        newBoard[y][x] = !newBoard[y][x];
      }
    }
    
    flipCell(y, x);
    flipCell(y+1, x);
    flipCell(y-1, x);
    flipCell(y, x+1);
    flipCell(y, x-1);

    let won = true;
    for(let i=0; i<nrows; i++){
      for(let j = 0; j < ncols; j++){
        if(newBoard[i][j] === true){
          won = false;
          break;
        }
      }
    }

    this.setState(st => {
      return {
        board : newBoard,
        hasWon: won
      }
    })
  }



  render() {

    let tble = []
    for(let i =0; i<this.props.nrows; i++){
      let temp = []
      for(let j =0; j<this.props.ncols; j++){
        let k = String(i) + "-" + String(j)
        temp.push( <Cell key = {k} coord = {k} isLit = {this.state.board[i][j]} flipCellsAroundMe = {this.flipCellsAround}/>)
      }
      tble.push(<tr key = {i}>{temp}</tr>)
    }
    return(

      <div>
        {this.state.hasWon === false 
        ? <div>
            <h1>Lights Out!</h1>
            <table className="Board">
              <tbody>
                {tble}
              </tbody>
            </table>
          </div>
        : <h1> You Won! </h1>
        }
      </div>
    )
  }
}


export default Board;
