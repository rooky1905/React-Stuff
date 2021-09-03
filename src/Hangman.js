import React, { Component } from "react";
import "./Hangman.css";
import img0 from "./img/0.jpg";
import img1 from "./img/1.jpg";
import img2 from "./img/2.jpg";
import img3 from "./img/3.jpg";
import img4 from "./img/4.jpg";
import img5 from "./img/5.jpg";
import img6 from "./img/6.jpg";
import {randomWord} from './words'

class Hangman extends Component {
  /** by default, allow 6 guesses and use provided gallows images. */
  static defaultProps = {
    maxWrong: 6,
    images: [img0, img1, img2, img3, img4, img5, img6]
  };

  constructor(props) {
    super(props);
    let word = randomWord()
    this.state = { nWrong: 0, guessed: new Set(), answer: word, gotit : false};
    console.log(word);
    this.handleGuess = this.handleGuess.bind(this);
  }

  // helper to provide the functionality of restarting the game
  restartGame = () => {
    let word = randomWord();
    this.setState({ nWrong: 0, guessed: new Set(), answer: word, gotit : false});
    console.log(word, "*");
  }
  /** guessedWord: show current-state of word:
    if guessed letters are {a,p,e}, show "app_e" for "apple"
  */
  guessedWord() {
    let ans = this.state.answer
      .split("")
      .map(ltr => (this.state.guessed.has(ltr) ? ltr : "_"));
    return ans;
  }

  /** handleGuest: handle a guessed letter:
    - add to guessed letters
    - if not in answer, increase number-wrong guesses
  */
  handleGuess(evt) {
    let ltr = evt.target.value;
    this.setState(st => ({
      guessed: st.guessed.add(ltr),
      nWrong: st.nWrong + (st.answer.includes(ltr) ? 0 : 1)
    }), ()=>{
      this.checkGotIt()
    });
    
  }

  //a helper to check if the user has won!
  checkGotIt = () =>{
    let ans = this.state.answer
      .split("")
      .map(ltr => (this.state.guessed.has(ltr) ? ltr : "_"));
    let flag = 0;
    for(let i =0; i<ans.length; i++){
      if(ans[i]==='_'){
        flag = 1;
        break 
        }
      }
    flag === 0 ? this.setState({gotit : true}) : console.log();
  }

  /** generateButtons: return array of letter buttons to render */
  generateButtons() {
    return "abcdefghijklmnopqrstuvwxyz".split("").map((ltr, index) => (
      <button
      key = {index}
        value={ltr}
        onClick={this.handleGuess}
        disabled={this.state.guessed.has(ltr)}
      >
        {ltr}
      </button>
    ));
  }

  /** render: render game */
  render() {
    return (
      <div className='Hangman'>
        <h1>Hangman</h1>
        <button className = "Restart" style = {{position: "absolute", left: "50px", top: "20px", width: "100px"}} onClick={this.restartGame}>Restart?</button>
        {this.state.gotit ? <h1>You WIN!</h1> : (this.state.nWrong <= 6 ? <img src={this.props.images[this.state.nWrong]} /> : <h2>You Lose</h2>)}
        <p className='Hangman-word'>{this.guessedWord()}</p>
        {this.state.gotit ? <h3>You got it!</h3> : (this.state.nWrong <= 6 ? <p className='Hangman-btns'>{this.generateButtons()}</p> : <h3>Correct answer was "{this.state.answer}"</h3>)}
      </div>
    );
  }
}

export default Hangman;
