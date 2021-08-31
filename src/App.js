import Pokedex from "./Pokedex";
import Rando from "./rando";
import DiceGame from "./DiceGame";
import './App.css';

function App() {
  return (
    <div className="App">
      {/* For Dice Game (Involves, State as Props, Props, Transitions, and much more complex) */}
        <DiceGame />

      {/* For Pokedex project (Basic Props and stuff) */}
        {/* <Pokedex player = {1}/>
        <Pokedex player = {2}/> */}

      {/* For Random number generator gamr (Involves States, Props) */}
        {/* <Rando /> */}

    </div>
  );
}

export default App;
