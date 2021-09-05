import Pokedex from "./Pokedex";
import Rando from "./rando";
import DiceGame from "./DiceGame";
import ColorBoxes from "./ColorBoxes";
import Hangman from "./Hangman";
import Board from "./Board"
import Todos from "./Todos";

import './App.css';
//imrc --> for imports
//rce --> For full class component template!
function App() {
  return (
    <div className="App">

      {/* Fully fledged ToDo list app, with no CSS (Ugly looking), CRUD are all implemented in React */}
      <Todos />

      {/* Lights out game, with stuff like passing methods as props, general state stuff and mutating state */}
      {/* <Board ncols = {5} nrows = {5}/> */}

      {/* {Fully working Hangman game, using state, callbacks inside state, methods, bindings, etc} */}
      {/* <Hangman /> */}

      {/* More complex stuff, states and a fun little game */}
      {/* <ColorBoxes num={18}/> */}

      {/* For Dice Game (Involves, State as Props, Props, Transitions, and much more complex) */}
        {/* <DiceGame /> */}

      {/* For Pokedex project (Basic Props and stuff) */}
        {/* <Pokedex player = {1}/>
        <Pokedex player = {2}/> */}

      {/* For Random number generator game (Involves States, Props) */}
        {/* <Rando /> */}

    </div>
  );
}

export default App;
